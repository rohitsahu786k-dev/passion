import type { MetadataRoute } from 'next';
import { blogSeeds } from '@/data/blogSeeds';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { absoluteUrl, cityLandingPath, cityServicePath } from '@/lib/seo/site';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const launchDate = new Date('2026-04-01T00:00:00Z');
  const now = new Date();

  const cityPriority: Record<string, number> = {
    delhi: 0.97, mumbai: 0.97, goa: 0.97, jaipur: 0.95, udaipur: 0.95,
    hyderabad: 0.95, chennai: 0.95, indore: 0.95, pune: 0.95, noida: 0.95,
    dehradun: 0.94, jodhpur: 0.94, ajmer: 0.93, rishikesh: 0.93, manali: 0.93,
    guwahati: 0.92, lucknow: 0.92, kanpur: 0.92, surat: 0.92,
    daman: 0.91, nathdwara: 0.91, 'mount-abu': 0.91, jawai: 0.90, india: 0.98,
  };

  const corePagesHigh: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'daily', priority: 1.0 },
  ];

  const staticCityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: absoluteUrl(cityLandingPath(city.slug)),
    lastModified: launchDate,
    changeFrequency: city.slug === 'india' ? 'daily' : 'weekly',
    priority: cityPriority[city.slug] ?? 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    services.map((service) => ({
      url: absoluteUrl(cityServicePath(city.slug, service.slug)),
      lastModified: launchDate,
      changeFrequency: 'monthly' as const,
      priority: (cityPriority[city.slug] ?? 0.88) - 0.10,
    }))
  );

  const brandPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/about/'), lastModified: launchDate, changeFrequency: 'monthly', priority: 0.70 },
    { url: absoluteUrl('/contact/'), lastModified: launchDate, changeFrequency: 'monthly', priority: 0.75 },
    { url: absoluteUrl('/blog/'), lastModified: now, changeFrequency: 'daily', priority: 0.80 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/privacy-policy/'), lastModified: launchDate, changeFrequency: 'yearly', priority: 0.30 },
    { url: absoluteUrl('/terms/'), lastModified: launchDate, changeFrequency: 'yearly', priority: 0.30 },
  ];

  // Fetch AI-generated blogs from MongoDB
  let dbBlogs: Array<{ slug: string; publishedAt: Date }> = [];
  try {
    await connectDB();
    const raw = await Blog.find({ isPublished: true })
      .select('slug publishedAt')
      .sort({ publishedAt: -1 })
      .limit(2000)
      .lean();
    dbBlogs = raw as unknown as Array<{ slug: string; publishedAt: Date }>;
  } catch {
    // DB unavailable — fall back to seeds only
  }

  const dbBlogSlugs = new Set(dbBlogs.map(b => b.slug));

  const dbBlogPages: MetadataRoute.Sitemap = dbBlogs.map(blog => ({
    url: absoluteUrl(`/blog/${blog.slug}/`),
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.70,
  }));

  // Static seed blogs not yet in DB
  const staticBlogPages: MetadataRoute.Sitemap = blogSeeds
    .filter(b => !dbBlogSlugs.has(b.slug))
    .map(blog => ({
      url: absoluteUrl(`/blog/${blog.slug}/`),
      lastModified: new Date(blog.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }));

  return [
    ...corePagesHigh,
    ...staticCityPages,
    ...servicePages,
    ...brandPages,
    ...legalPages,
    ...dbBlogPages,
    ...staticBlogPages,
  ];
}
