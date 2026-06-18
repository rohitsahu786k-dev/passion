import { blogSeeds } from '@/data/blogSeeds';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlsofpassion.in';
  const now = new Date();

  const published = blogSeeds
    .filter((b) => new Date(b.publishedAt) <= now)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 60);

  const items = published
    .map(
      (blog) => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${siteUrl}/blog/${blog.slug}/</link>
      <description><![CDATA[${blog.excerpt}]]></description>
      <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${blog.slug}/</guid>
      <category><![CDATA[${blog.cityName}]]></category>
      <category><![CDATA[${blog.serviceName}]]></category>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Girls of Passion — Escort Service Guides India</title>
    <link>${siteUrl}/blog/</link>
    <description>Expert guides on escort service booking, companion selection, privacy tips and city-wise adult companionship across India. Updated daily.</description>
    <language>en-in</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <ttl>1440</ttl>
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
