import type { MetadataRoute } from 'next';
import { blogSeeds } from '@/data/blogSeeds';
import { cities } from '@/data/cities';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { absoluteUrl, cityLandingPath } from '@/lib/seo/site';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const INDEXATION_REFRESH_DATE = new Date('2026-06-30T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    lastModified: INDEXATION_REFRESH_DATE,
    changeFrequency: city.slug === 'india' ? 'daily' : 'weekly',
    priority: cityPriority[city.slug] ?? 0.9,
  }));

  const brandPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/about/'), lastModified: INDEXATION_REFRESH_DATE, changeFrequency: 'monthly', priority: 0.70 },
    { url: absoluteUrl('/contact/'), lastModified: INDEXATION_REFRESH_DATE, changeFrequency: 'monthly', priority: 0.75 },
    { url: absoluteUrl('/blog/'), lastModified: now, changeFrequency: 'daily', priority: 0.80 },
    { url: absoluteUrl('/sitemap/'), lastModified: INDEXATION_REFRESH_DATE, changeFrequency: 'weekly', priority: 0.65 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/privacy-policy/'), lastModified: INDEXATION_REFRESH_DATE, changeFrequency: 'yearly', priority: 0.30 },
    { url: absoluteUrl('/terms/'), lastModified: INDEXATION_REFRESH_DATE, changeFrequency: 'yearly', priority: 0.30 },
    { url: absoluteUrl('/disclaimer/'), lastModified: INDEXATION_REFRESH_DATE, changeFrequency: 'yearly', priority: 0.25 },
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
    .filter(b => !dbBlogSlugs.has(b.slug) && new Date(b.publishedAt) <= now)
    .map(blog => ({
      url: absoluteUrl(`/blog/${blog.slug}/`),
      lastModified: new Date(blog.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }));

  return [
    ...corePagesHigh,
    ...staticCityPages,
    ...brandPages,
    ...legalPages,
    ...dbBlogPages,
    ...staticBlogPages,
  ];
}
