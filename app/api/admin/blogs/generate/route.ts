import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { generateBlog, TOPIC_ANGLES } from '@/lib/services/blogGenerator';
import type { TopicAngle } from '@/lib/services/blogTopics';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: { citySlug?: string; serviceSlug?: string; topicAngle?: string; publishNow?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { citySlug, serviceSlug, topicAngle, publishNow = false } = body;

  if (!citySlug || !serviceSlug || !topicAngle) {
    return NextResponse.json(
      { error: 'citySlug, serviceSlug, and topicAngle are required' },
      { status: 400 }
    );
  }

  if (!TOPIC_ANGLES.find(a => a.key === topicAngle)) {
    return NextResponse.json({ error: 'Invalid topicAngle value' }, { status: 400 });
  }

  try {
    const blogData = await generateBlog({
      citySlug,
      serviceSlug,
      topicAngle: topicAngle as TopicAngle,
    });

    if (!publishNow) {
      return NextResponse.json({ published: false, preview: blogData });
    }

    await connectDB();

    const existing = await Blog.findOne({ slug: blogData.slug });
    if (existing) {
      return NextResponse.json(
        { error: `Blog with slug "${blogData.slug}" already exists`, slug: blogData.slug },
        { status: 409 }
      );
    }

    const blog = await Blog.create({ ...blogData, isPublished: true });

    revalidatePath('/blog/');
    revalidatePath(`/blog/${blog.slug}/`);
    revalidatePath(`/${blogData.city}-escort-service/`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss/');

    return NextResponse.json({
      published: true,
      id: String(blog._id),
      slug: blog.slug,
      title: blog.title,
      readingTime: blogData.readingTime,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Generation failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();

    const { searchParams } = req.nextUrl;
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = 20;

    const [blogs, total] = await Promise.all([
      Blog.find({ 'author.designation': 'SEO Content Team' })
        .sort({ publishedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .select('title slug city cityName service isPublished publishedAt readingTime createdAt')
        .lean(),
      Blog.countDocuments({ 'author.designation': 'SEO Content Team' }),
    ]);

    return NextResponse.json({ blogs, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
