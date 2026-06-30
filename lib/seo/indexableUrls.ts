import { blogSeeds } from '@/data/blogSeeds';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { absoluteUrl, cityLandingPath, cityServicePath } from '@/lib/seo/site';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export type IndexableUrl = {
  url: string;
  priority: number;
  source: 'core' | 'city' | 'service' | 'brand' | 'legal' | 'blog';
};

export async function getIndexableUrls(limit = 100): Promise<IndexableUrl[]> {
  const cityPriority: Record<string, number> = {
    delhi: 0.97, mumbai: 0.97, goa: 0.97, jaipur: 0.95, udaipur: 0.95,
    hyderabad: 0.95, chennai: 0.95, indore: 0.95, pune: 0.95, noida: 0.95,
    dehradun: 0.94, jodhpur: 0.94, ajmer: 0.93, rishikesh: 0.93, manali: 0.93,
    guwahati: 0.92, lucknow: 0.92, kanpur: 0.92, surat: 0.92,
    daman: 0.91, nathdwara: 0.91, 'mount-abu': 0.91, jawai: 0.90, india: 0.98,
  };

  const urls: IndexableUrl[] = [
    { url: absoluteUrl('/'), priority: 1, source: 'core' },
    { url: absoluteUrl('/india-escort-service/'), priority: 0.98, source: 'city' },
    { url: absoluteUrl('/sitemap/'), priority: 0.86, source: 'brand' },
    { url: absoluteUrl('/blog/'), priority: 0.8, source: 'brand' },
    { url: absoluteUrl('/contact/'), priority: 0.75, source: 'brand' },
    { url: absoluteUrl('/about/'), priority: 0.7, source: 'brand' },
    { url: absoluteUrl('/disclaimer/'), priority: 0.25, source: 'legal' },
  ];

  for (const city of cities) {
    urls.push({
      url: absoluteUrl(cityLandingPath(city.slug)),
      priority: cityPriority[city.slug] ?? 0.9,
      source: 'city',
    });
  }

  urls.push(
    { url: absoluteUrl('/privacy-policy/'), priority: 0.3, source: 'legal' },
    { url: absoluteUrl('/terms/'), priority: 0.3, source: 'legal' }
  );

  const dbBlogSlugs = new Set<string>();
  try {
    await connectDB();
    const dbBlogs = await Blog.find({ isPublished: true })
      .select('slug')
      .sort({ publishedAt: -1 })
      .limit(1000)
      .lean();

    for (const blog of dbBlogs as unknown as Array<{ slug: string }>) {
      dbBlogSlugs.add(blog.slug);
      urls.push({ url: absoluteUrl(`/blog/${blog.slug}/`), priority: 0.7, source: 'blog' });
    }
  } catch {
    // Static seed URLs below still provide a complete offline fallback.
  }

  for (const blog of blogSeeds) {
    if (!dbBlogSlugs.has(blog.slug)) {
      urls.push({ url: absoluteUrl(`/blog/${blog.slug}/`), priority: 0.65, source: 'blog' });
    }
  }

  for (const city of cities) {
    for (const service of services) {
      urls.push({
        url: absoluteUrl(cityServicePath(city.slug, service.slug)),
        priority: Math.max(0.45, (cityPriority[city.slug] ?? 0.88) - 0.38),
        source: 'service',
      });
    }
  }

  const unique = new Map<string, IndexableUrl>();
  for (const item of urls) {
    if (!unique.has(item.url)) unique.set(item.url, item);
  }

  return [...unique.values()]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, Math.max(1, Math.min(limit, 200)));
}
