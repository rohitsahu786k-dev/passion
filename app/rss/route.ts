import { blogSeeds } from '@/data/blogSeeds';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { getSiteUrl } from '@/lib/seo/site';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  // Fetch AI-generated blogs from MongoDB
  let dbBlogs: Array<{
    title: string;
    slug: string;
    excerpt: string;
    cityName: string;
    service: string;
    publishedAt: Date;
    featuredImage?: { url: string };
  }> = [];

  try {
    await connectDB();
    const raw = await Blog.find({ isPublished: true, publishedAt: { $lte: now } })
      .select('title slug excerpt cityName service publishedAt featuredImage')
      .sort({ publishedAt: -1 })
      .limit(100)
      .lean();
    dbBlogs = raw as unknown as typeof dbBlogs;
  } catch {
    // Fall back to seeds if DB unavailable
  }

  const dbSlugs = new Set(dbBlogs.map(b => b.slug));

  // Static seeds not in DB
  const seedBlogs = blogSeeds
    .filter(b => !dbSlugs.has(b.slug) && new Date(b.publishedAt) <= now)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 40)
    .map(b => ({
      title: b.title,
      slug: b.slug,
      excerpt: b.excerpt,
      cityName: b.cityName,
      service: b.service,
      publishedAt: new Date(b.publishedAt),
      featuredImage: undefined as { url: string } | undefined,
    }));

  // Merge and sort by date, cap at 60 items
  const allItems = [...dbBlogs, ...seedBlogs]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 60);

  const items = allItems
    .map(blog => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${siteUrl}/blog/${blog.slug}/</link>
      <description><![CDATA[${blog.excerpt}]]></description>
      <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${blog.slug}/</guid>
      <category><![CDATA[${blog.cityName}]]></category>
      <category><![CDATA[${blog.service}]]></category>${
        blog.featuredImage?.url
          ? `\n      <enclosure url="${blog.featuredImage.url}" type="image/png" length="0"/>`
          : ''
      }
    </item>`)
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Girls of Passion — Escort Service Guides India</title>
    <link>${siteUrl}/blog/</link>
    <description>Expert guides on escort service booking, companion selection, privacy tips and city-wise adult companionship across India. Updated daily with AI-powered content.</description>
    <language>en-in</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    <atom:link href="${siteUrl}/rss/" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/logo.svg</url>
      <title>Girls of Passion</title>
      <link>${siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
