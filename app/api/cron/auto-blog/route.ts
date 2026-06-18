import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { generateBlog, TOPIC_ANGLES } from '@/lib/services/blogGenerator';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import type { TopicAngle } from '@/lib/services/blogTopics';

export const runtime = 'nodejs';
export const maxDuration = 120;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();

    const year = new Date().getFullYear();
    const existingSlugs = new Set<string>(
      (await Blog.find({}).select('slug').lean()).map(b => b.slug as string)
    );

    // Priority: iterate angles → cities → services
    let nextTopic: { citySlug: string; serviceSlug: string; angle: TopicAngle } | null = null;

    outer:
    for (const angle of TOPIC_ANGLES) {
      for (const city of cities) {
        for (const service of services) {
          const slug = `${city.slug}-${service.slug}-${angle.key}-${year}`;
          if (!existingSlugs.has(slug)) {
            nextTopic = { citySlug: city.slug, serviceSlug: service.slug, angle: angle.key as TopicAngle };
            break outer;
          }
        }
      }
    }

    if (!nextTopic) {
      return NextResponse.json({
        message: 'All topics for this year are covered',
        totalPublished: existingSlugs.size,
      });
    }

    const blogData = await generateBlog({
      citySlug: nextTopic.citySlug,
      serviceSlug: nextTopic.serviceSlug,
      topicAngle: nextTopic.angle,
      generateImage: true,
    });

    const existing = await Blog.findOne({ slug: blogData.slug });
    if (existing) {
      return NextResponse.json({ skipped: true, reason: 'Slug already exists', slug: blogData.slug });
    }

    const blog = await Blog.create({ ...blogData, isPublished: true });

    revalidatePath('/blog/');
    revalidatePath(`/blog/${blog.slug}/`);
    revalidatePath(`/${blogData.city}-escort-service/`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss/');

    return NextResponse.json({
      success: true,
      title: blog.title,
      slug: blog.slug,
      city: blogData.cityName,
      service: blogData.service,
      angle: nextTopic.angle,
      readingTime: blogData.readingTime,
      hasImage: !!blogData.featuredImage,
      imageUrl: blogData.featuredImage?.url ?? null,
      totalPublished: existingSlugs.size + 1,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[auto-blog cron]', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
