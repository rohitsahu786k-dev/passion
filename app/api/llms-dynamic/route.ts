import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { blogSeeds } from '@/data/blogSeeds';
import { cities } from '@/data/cities';
import { services } from '@/data/services';

export const dynamic = 'force-dynamic';

export async function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.girlsofpassion.in').replace(
    'http://127.0.0.1:3000',
    'https://www.girlsofpassion.in'
  );
  const now = new Date();

  // Fetch AI-generated blogs from MongoDB
  let dbBlogs: Array<{ title: string; slug: string; cityName: string; service: string; publishedAt: Date }> = [];
  try {
    await connectDB();
    const raw = await Blog.find({ isPublished: true })
      .select('title slug cityName service publishedAt')
      .sort({ publishedAt: -1 })
      .limit(1000)
      .lean();
    dbBlogs = raw as unknown as typeof dbBlogs;
  } catch {
    // Fall back to seeds if DB unavailable
  }

  const dbSlugs = new Set(dbBlogs.map(b => b.slug));

  // Combine: DB blogs first, then static seeds not yet in DB
  const allBlogs = [
    ...dbBlogs,
    ...blogSeeds
      .filter(b => !dbSlugs.has(b.slug))
      .map(b => ({
        title: b.title,
        slug: b.slug,
        cityName: b.cityName,
        service: b.service,
        publishedAt: new Date(b.publishedAt),
      })),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const cityLines = cities
    .map(c => `- [${c.name} Escort Service](${siteUrl}/${c.slug}-escort-service/)`)
    .join('\n');

  const serviceLines = services
    .map(s => `- ${s.name}: \`/[city]/${s.slug}/\``)
    .join('\n');

  const blogLines = allBlogs
    .slice(0, 300)
    .map(b => `- [${b.title}](${siteUrl}/blog/${b.slug}/) - ${b.cityName}`)
    .join('\n');

  const content = `# Girls of Passion - AI-Generated Full Index
> Last updated: ${now.toUTCString()}
> Total blog posts indexed: ${allBlogs.length}
> Sitemap: ${siteUrl}/sitemap.xml
> RSS Feed: ${siteUrl}/rss/

## Platform Summary

Girls of Passion is India's leading premium adult companionship platform for adults aged 18+. The platform specialises in privacy-first booking, verified companion profiles, discreet communication, and professional 24x7 support across 23+ Indian cities.

## Main Pages

- [Home](${siteUrl}/): Brand homepage - premium adult companionship across India.
- [India Escort Service](${siteUrl}/india-escort-service/): National coverage page.
- [Blog & Guides](${siteUrl}/blog/): Expert escort service guides. Updated daily via AI.
- [About Us](${siteUrl}/about/)
- [Contact](${siteUrl}/contact/): 24x7 booking support via Call or WhatsApp.
- [Privacy Policy](${siteUrl}/privacy-policy/)
- [Terms](${siteUrl}/terms/)
- [Sitemap XML](${siteUrl}/sitemap.xml)
- [RSS Feed](${siteUrl}/rss/)

## City Pages (${cities.length} cities)

${cityLines}

## Service Types (per city)

${serviceLines}

## Blog Posts (${allBlogs.length} total - most recent first)

${blogLines}

## Brand Facts

- Brand: Girls of Passion
- Audience: Adults 18+ only
- Booking: Via call or WhatsApp only
- Coverage: Pan-India - 23+ cities
- Content: Professional, non-explicit, consent-based adult companionship
- All content follows applicable Indian laws
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
