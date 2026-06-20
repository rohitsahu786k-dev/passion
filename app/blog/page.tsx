import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, BookOpen, ChevronRight, ArrowRight } from 'lucide-react';
import { blogSeeds } from '@/data/blogSeeds';
import { services } from '@/data/services';
import { connectDB } from '@/lib/mongodb';
import { Blog, type IBlog } from '@/lib/models/Blog';

export const metadata: Metadata = {
  title: 'Escort Service Guides & Blog | Girls of Passion India',
  description: 'Expert guides on escort service booking, companion selection, privacy tips, and city-wise adult companionship information across India. Updated daily.',
  alternates: {
    canonical: '/blog/',
    languages: {
      'en-IN': '/blog/',
      'x-default': '/blog/',
    },
  },
  openGraph: {
    title: 'Escort Service Guides & Blog | Girls of Passion India',
    description: 'Expert companion booking guides, escort service tips, and city-wise adult companionship information across India. Updated daily.',
    url: '/blog/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-india.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlsofpassion.in';

export const revalidate = 86400;

interface BlogItem {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  cityName: string;
  serviceName: string;
  readingTime: number;
  isFeatured?: boolean;
}

export default async function BlogPage() {
  const now = new Date();

  // Fetch DB posts (non-blocking — falls back to seeds if DB unavailable)
  let dbPosts: BlogItem[] = [];
  try {
    await connectDB();
    const raw = (await Blog.find({ isPublished: true, publishedAt: { $lte: now } })
      .sort({ isFeatured: -1, publishedAt: -1 })
      .select('slug title excerpt publishedAt cityName service readingTime isFeatured')
      .lean()) as unknown as IBlog[];
    dbPosts = raw.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      publishedAt: p.publishedAt.toISOString(),
      cityName: p.cityName || '',
      serviceName: services.find((s) => s.slug === p.service)?.shortName || p.service || '',
      readingTime: p.readingTime || 5,
      isFeatured: p.isFeatured || false,
    }));
  } catch {
    // DB unavailable at build time — seeds used as fallback
  }

  // Seeds (exclude slugs already in DB)
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const seedPosts: BlogItem[] = blogSeeds
    .filter((b) => new Date(b.publishedAt) <= now && !dbSlugs.has(b.slug))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map((b) => ({
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      publishedAt: b.publishedAt,
      cityName: b.cityName,
      serviceName: b.serviceName,
      readingTime: b.readingTime,
    }));

  // Upcoming seeds (future dates, not in DB)
  const upcoming = blogSeeds
    .filter((b) => new Date(b.publishedAt) > now && !dbSlugs.has(b.slug))
    .sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
    .slice(0, 3);

  // Merge: featured DB posts first, then remaining DB, then seeds
  const published: BlogItem[] = [
    ...dbPosts.filter((p) => p.isFeatured),
    ...dbPosts.filter((p) => !p.isFeatured),
    ...seedPosts,
  ];

  const featured = published.slice(0, 6);
  const rest = published.slice(6);

  // Schema
  const blogListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Escort Service Guides & Blog – Girls of Passion',
    url: `${siteUrl}/blog/`,
    description: 'Expert guides on escort service booking, companion selection, and privacy tips across India.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: published.length,
      itemListElement: published.slice(0, 10).map((blog, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/blog/${blog.slug}/`,
        name: blog.title,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#555] mb-6">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#B8B8B8]">Blog & Guides</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <BookOpen size={13} />
              Expert Guides — Updated Daily
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Escort Service <span className="text-[#D4AF37]">Guides & Blog</span>
            </h1>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#D4AF37]" />
            <p className="mt-5 text-base leading-7 text-[#B8B8B8]">
              Comprehensive guides on escort service booking, companion selection, privacy tips, city-wise
              coverage, and how to have a safe, discreet adult companionship experience across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#B8B8B8]">
              <span className="flex items-center gap-1.5 rounded-full border border-[#2A2A2A] px-3 py-1.5">
                <BookOpen size={13} className="text-[#D4AF37]" />
                {published.length} Published Guides
              </span>
              {upcoming.length > 0 && (
                <span className="flex items-center gap-1.5 rounded-full border border-[#2A2A2A] px-3 py-1.5">
                  <CalendarDays size={13} className="text-[#D4AF37]" />
                  {upcoming.length} More Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts (first 6) */}
      {featured.length > 0 && (
        <section className="section-pad bg-[#050505]">
          <div className="container-shell">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Latest Guides</h2>
                <div className="mt-1 h-0.5 w-12 rounded-full bg-[#D4AF37]" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      {rest.length > 0 && (
        <section className="section-pad bg-[#0D0D0D]">
          <div className="container-shell">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">All Escort Guides</h2>
              <div className="mt-1 h-0.5 w-12 rounded-full bg-[#D4AF37]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rest.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No posts yet */}
      {published.length === 0 && (
        <section className="section-pad bg-[#050505] text-center">
          <div className="container-shell max-w-md">
            <BookOpen size={48} className="text-[#D4AF37] mx-auto mb-4 opacity-50" />
            <h2 className="text-xl font-bold text-white mb-2">Guides Coming Soon</h2>
            <p className="text-[#B8B8B8] text-sm">Our expert escort service guides are being published daily.</p>
          </div>
        </section>
      )}

      {/* Upcoming Posts Preview */}
      {upcoming.length > 0 && (
        <section className="section-pad bg-[#050505]">
          <div className="container-shell max-w-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Coming Next</h2>
            <div className="space-y-3">
              {upcoming.map((blog) => (
                <div key={blog.slug} className="flex items-center gap-4 rounded-lg border border-[#2A2A2A] bg-[#151515] p-4">
                  <div className="rounded bg-[#D4AF37]/10 px-2 py-1 text-xs font-medium text-[#D4AF37] shrink-0">
                    {new Date(blog.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </div>
                  <p className="text-sm text-[#B8B8B8] line-clamp-1">{blog.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cities Grid — internal links */}
      <section className="section-pad bg-[#0D0D0D]">
        <div className="container-shell">
          <h2 className="text-xl font-bold text-white mb-6">Browse by City</h2>
          <div className="flex flex-wrap gap-2">
            {['Delhi', 'Mumbai', 'Jaipur', 'Goa', 'Hyderabad', 'Pune', 'Chennai', 'Udaipur', 'Noida', 'Indore', 'Lucknow', 'Jodhpur'].map((city) => (
              <Link
                key={city}
                href={`/${city.toLowerCase()}-escort-service/`}
                className="rounded-full border border-[#2A2A2A] bg-[#151515] px-4 py-2 text-sm text-[#B8B8B8] hover:border-[#D4AF37]/30 hover:text-white transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogCard({ blog, featured = false }: { blog: BlogItem; featured?: boolean }) {
  const date = new Date(blog.publishedAt);
  return (
    <Link
      href={`/blog/${blog.slug}/`}
      className="group flex flex-col rounded-xl border border-[#2A2A2A] bg-[#151515] p-5 transition-all hover:border-[#D4AF37]/40 hover:shadow-[0_4px_24px_rgba(212,175,55,0.08)]"
    >
      <div className="mb-3 flex items-center justify-between gap-2 text-xs text-[#555]">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={11} />
          {date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-[#D4AF37]/8 px-2 py-0.5 text-[#D4AF37]">
          <Clock size={10} />
          {blog.readingTime} min
        </span>
      </div>

      <h2 className={`font-semibold leading-snug text-white group-hover:text-[#D4AF37] transition-colors ${featured ? 'text-base line-clamp-2' : 'text-sm line-clamp-2'}`}>
        {blog.title}
      </h2>

      {featured && (
        <p className="mt-2 text-sm leading-relaxed text-[#B8B8B8] line-clamp-2 flex-1">{blog.excerpt}</p>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="rounded-full bg-[#D4AF37]/10 px-2 py-0.5 text-[#D4AF37] font-medium">{blog.cityName}</span>
          <span className="text-[#333]">·</span>
          <span className="text-[#555]">{blog.serviceName}</span>
        </div>
        <ArrowRight size={14} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
      </div>
    </Link>
  );
}

