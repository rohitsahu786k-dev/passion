import type { MetadataRoute } from 'next';
import { blogSeeds } from '@/data/blogSeeds';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://girlsofpassion.in').replace(
    'http://127.0.0.1:3000',
    'https://girlsofpassion.in'
  );
  const launchDate = new Date('2026-04-01T00:00:00Z');
  const now = new Date();

  const cityPriority: Record<string, number> = {
    delhi: 0.97, mumbai: 0.97, goa: 0.97, jaipur: 0.95, udaipur: 0.95,
    hyderabad: 0.95, chennai: 0.95, indore: 0.95, pune: 0.95, noida: 0.95,
    dehradun: 0.94, jodhpur: 0.94, ajmer: 0.93, rishikesh: 0.93, manali: 0.93,
    guwahati: 0.92, lucknow: 0.92, kanpur: 0.92, surat: 0.92,
    daman: 0.91, nathdwara: 0.91, 'maunt-abu': 0.91, jawai: 0.90, india: 0.98,
  };

  const corePagesHigh: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/india-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.98 },
  ];

  const staticCityPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/delhi-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.97 },
    { url: `${baseUrl}/mumbai-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.97 },
    { url: `${baseUrl}/goa-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.97 },
    { url: `${baseUrl}/jaipur-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/udaipur-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/hyderabad-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/chennai-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/indore-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/pune-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/noida-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/dehradun-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.94 },
    { url: `${baseUrl}/jodhpur-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.94 },
    { url: `${baseUrl}/ajmer-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${baseUrl}/rishikesh-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${baseUrl}/manali-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.93 },
    { url: `${baseUrl}/guwahati-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${baseUrl}/lucknow-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${baseUrl}/kanpur-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${baseUrl}/surat-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.92 },
    { url: `${baseUrl}/daman-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${baseUrl}/nathdwara-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${baseUrl}/maunt-abu-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.91 },
    { url: `${baseUrl}/jawai-escort-service/`, lastModified: launchDate, changeFrequency: 'weekly', priority: 0.90 },
  ];

  const servicePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    services.map((service) => ({
      url: `${baseUrl}/${city.slug}/${service.slug}/`,
      lastModified: launchDate,
      changeFrequency: 'monthly' as const,
      priority: (cityPriority[city.slug] ?? 0.88) - 0.10,
    }))
  );

  const brandPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/about/`, lastModified: launchDate, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${baseUrl}/contact/`, lastModified: launchDate, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: 'daily', priority: 0.80 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy/`, lastModified: launchDate, changeFrequency: 'yearly', priority: 0.30 },
    { url: `${baseUrl}/terms/`, lastModified: launchDate, changeFrequency: 'yearly', priority: 0.30 },
    { url: `${baseUrl}/disclaimer/`, lastModified: launchDate, changeFrequency: 'yearly', priority: 0.20 },
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
    url: `${baseUrl}/blog/${blog.slug}/`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.70,
  }));

  // Static seed blogs not yet in DB
  const staticBlogPages: MetadataRoute.Sitemap = blogSeeds
    .filter(b => !dbBlogSlugs.has(b.slug))
    .map(blog => ({
      url: `${baseUrl}/blog/${blog.slug}/`,
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
