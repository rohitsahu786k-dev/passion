import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CalendarDays, Phone, MessageCircle, Clock, ChevronRight, ShieldCheck, Star } from 'lucide-react';
import { BlogSchema } from '@/components/seo/BlogSchema';
import { InternalLinkHub } from '@/components/seo/InternalLinkHub';
import { VideoBlock } from '@/components/seo/VideoBlock';
import { blogSeeds, getBlog } from '@/data/blogSeeds';
import { getCity } from '@/data/cities';
import { getSeoVideo } from '@/data/videos';
import { cityLandingPath, cityServicePath } from '@/lib/seo/site';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';
interface UnifiedBlog {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  cityName: string;
  city: string;
  serviceName: string;
  readingTime: number;
  keywords: string[];
  content?: string;
  featuredImage?: { url: string; alt?: string; width?: number; height?: number };
  videos?: Array<{ id: string; title: string; description: string; uploadDate: string }>;
}

async function getUnifiedBlog(slug: string): Promise<UnifiedBlog | null> {
  // Try querying DB first (so we get the generated content and Cloudinary featured images)
  try {
    const { connectDB } = await import('@/lib/mongodb');
    const { Blog } = await import('@/lib/models/Blog');
    const { services } = await import('@/data/services');
    await connectDB();
    type LeanBlog = { slug: string; title: string; excerpt: string; content?: string; publishedAt: Date; cityName?: string; city?: string; service?: string; readingTime?: number; keywords?: string[]; featuredImage?: { url: string; alt?: string; width?: number; height?: number }; videos?: Array<{ id: string; title: string; description: string; uploadDate: string }> };
    const dbPost = await Blog.findOne({ slug, isPublished: true }).lean() as LeanBlog | null;
    if (dbPost) {
      const svc = services.find((s) => s.slug === (dbPost.service || ''));
      return {
        slug: dbPost.slug, title: dbPost.title, excerpt: dbPost.excerpt,
        publishedAt: dbPost.publishedAt.toISOString(),
        cityName: dbPost.cityName || '', city: dbPost.city || '',
        serviceName: svc?.shortName || dbPost.service || '',
        readingTime: dbPost.readingTime || 5, keywords: dbPost.keywords || [],
        content: dbPost.content,
        featuredImage: dbPost.featuredImage,
        videos: dbPost.videos,
      };
    }
  } catch {
    // DB unavailable
  }

  // Check seeds as fallback — covers all SSG pre-built pages (no DB needed)
  const seed = getBlog(slug);
  if (seed) {
    return {
      slug: seed.slug, title: seed.title, excerpt: seed.excerpt,
      publishedAt: seed.publishedAt, cityName: seed.cityName, city: seed.city,
      serviceName: seed.serviceName, readingTime: seed.readingTime, keywords: seed.keywords,
    };
  }

  return null;
}

export function generateStaticParams() {
  return blogSeeds.map((blog) => ({ slug: blog.slug }));
}

type BlogPostPageProps = { params: Promise<{ slug: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.girlsofpassion.in';
const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getUnifiedBlog(slug);
  if (!blog) return {};
  const ogImage = `/assets/photos/luxury-escort-service-${blog.city}.jpg`;
  const metaTitle = `${blog.title} | Girls of Passion Guide`;
  return {
    title: metaTitle,
    description: blog.excerpt,
    keywords: blog.keywords.join(', '),
    alternates: {
    canonical: `/blog/${blog.slug}/`,
    languages: {
      'en-IN': `/blog/${blog.slug}/`,
      'x-default': `/blog/${blog.slug}/`,
    },
  },
    openGraph: {
      title: metaTitle,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      modifiedTime: blog.publishedAt,
      siteName: 'Girls of Passion',
      locale: 'en_IN',
      url: `/blog/${blog.slug}/`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: blog.excerpt,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = await getUnifiedBlog(slug);
  if (!blog) notFound();
  const city = getCity(blog.city);
  const selectedVideo = blog.videos?.[0] || getSeoVideo(blog.city);

  const faqs = [
    {
      question: `Is ${blog.serviceName} available in ${blog.cityName}?`,
      answer: `Yes. Girls of Passion provides ${blog.serviceName.toLowerCase()} in ${blog.cityName} with verified profiles, discreet booking, and 24x7 professional support. Contact us via call or WhatsApp to check current availability.`,
    },
    {
      question: `How do I book escort service in ${blog.cityName}?`,
      answer: `To book escort service in ${blog.cityName}, contact Girls of Passion via call or WhatsApp. Share your preferred location, date, and requirements. Our team will confirm availability and guide you through the discreet booking process.`,
    },
    {
      question: `Is the booking process private in ${blog.cityName}?`,
      answer: `Yes. All bookings with Girls of Passion in ${blog.cityName} are handled with complete confidentiality. Your personal information is never shared with third parties.`,
    },
    {
      question: `Are escort profiles verified in ${blog.cityName}?`,
      answer: `Girls of Passion focuses on verified companion profiles in ${blog.cityName}. Every profile is reviewed before being made available to ensure quality and authenticity.`,
    },
    {
      question: `What is the price range for escort service in ${blog.cityName}?`,
      answer: `Escort service pricing in ${blog.cityName} varies based on the type of service, companion profile, timing, and location. Girls of Passion shares complete pricing details before any booking confirmation. Contact us for current availability and rates.`,
    },
  ];

  const cityPageUrl = city ? cityLandingPath(city.slug) : '/india-escort-service/';
  const cityPageLabel = city ? `${blog.cityName} Escort Service` : 'India Escort Service';

  // Related posts from same city (excluding current)
  const now = new Date();
  const relatedPosts = blogSeeds
    .filter((b) => b.city === blog.city && b.slug !== blog.slug && new Date(b.publishedAt) <= now)
    .slice(0, 4);

  return (
    <>
      <BlogSchema
        title={blog.title}
        slug={blog.slug}
        excerpt={blog.excerpt}
        publishedAt={blog.publishedAt}
        updatedAt={blog.publishedAt}
        cityName={blog.cityName}
        serviceName={blog.serviceName}
        imageUrl={blog.featuredImage?.url}
        faqs={faqs}
      />

      {/* Breadcrumb */}
      <div className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-3">
          <nav className="flex items-center gap-1.5 text-xs text-[#555]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog/" className="hover:text-[#D4AF37]">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#B8B8B8] line-clamp-1">{blog.title}</span>
          </nav>
        </div>
      </div>

      <article className="bg-[#050505]">
        {/* Header */}
        <header className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
          <div className="container-shell max-w-4xl py-12">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#555]">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} />
                {new Date(blog.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="h-3 w-px bg-[#2A2A2A]" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {blog.readingTime} min read
              </span>
              <span className="h-3 w-px bg-[#2A2A2A]" />
              <span className="rounded-full bg-[#D4AF37]/10 px-2 py-0.5 text-[#D4AF37]">
                {blog.cityName}
              </span>
              <span className="rounded-full border border-[#2A2A2A] px-2 py-0.5 text-[#555]">
                {blog.serviceName}
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[#B8B8B8]">{blog.excerpt}</p>
            {blog.featuredImage?.url && (
              <figure className="mt-8 overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#050505]">
                <img
                  src={blog.featuredImage.url}
                  alt={blog.featuredImage.alt || blog.title}
                  width={blog.featuredImage.width || 1400}
                  height={blog.featuredImage.height || 800}
                  className="h-auto w-full"
                />
              </figure>
            )}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-[#D4AF37]" fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-[#555]">Verified Content — Girls of Passion Editorial Team</span>
            </div>
          </div>
        </header>

        {/* Content grid */}
        <div className="container-shell grid max-w-5xl gap-10 py-12 lg:grid-cols-[1fr_300px]">

          {/* Main content */}
          <div className="space-y-10 text-[#B8B8B8] leading-relaxed">

            <section id="quick-answer">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Answer</h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5 text-sm leading-7">
                <p>
                  To book a verified {blog.serviceName.toLowerCase()} in {blog.cityName}, contact Girls of
                  Passion directly via call or WhatsApp. Share your location, preferred date, and
                  requirements. Our team will confirm profile availability and guide you through the
                  discreet, professional booking process — typically confirmed within minutes.
                </p>
              </div>
            </section>

            {blog.content && (
              <section id="full-guide">
                <h2 className="text-2xl font-bold text-white mb-4">Complete Guide</h2>
                <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
                <div
                  className="blog-content space-y-5 text-sm leading-7 text-[#B8B8B8]"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </section>
            )}

            <section id="overview">
              <h2 className="text-2xl font-bold text-white mb-4">
                {blog.serviceName} in {blog.cityName} — Complete Overview
              </h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="space-y-4 text-sm leading-7">
                <p>
                  {blog.cityName} is one of India&apos;s most sought-after destinations for premium adult
                  companionship. Girls of Passion provides {blog.serviceName.toLowerCase()} in{' '}
                  {blog.cityName} with a carefully curated selection of verified companion profiles,
                  ensuring clients receive a high-quality, discreet, and professional experience.
                </p>
                <p>
                  Our {blog.serviceName.toLowerCase()} in {blog.cityName} is designed for discerning adults
                  who value privacy, professionalism, and genuine companionship. Whether you are a business
                  traveller, a hotel guest, or a resident, our team is available 24x7 to assist with
                  bookings across all major areas of {blog.cityName}.
                </p>
                <p>
                  Every companion profile available through Girls of Passion is individually reviewed before
                  being listed. This ensures that clients in {blog.cityName} receive genuine, verified
                  options — not outdated or unverified listings. Our commitment to quality and discretion
                  makes us the preferred choice for adult companionship in {blog.cityName}.
                </p>
              </div>
            </section>

            <section id="booking-process">
              <h2 className="text-2xl font-bold text-white mb-4">
                How to Book {blog.serviceName} in {blog.cityName}
              </h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Contact Girls of Passion',
                    desc: `Call or WhatsApp Girls of Passion and mention you are looking for ${blog.serviceName.toLowerCase()} in ${blog.cityName}. Our support team responds promptly.`,
                  },
                  {
                    step: '2',
                    title: 'Share Your Requirements',
                    desc: `Share your preferred location (hotel, residence, or area in ${blog.cityName}), date, timing, and any specific preferences you may have.`,
                  },
                  {
                    step: '3',
                    title: 'Receive Profile Confirmation',
                    desc: `Our team will share available verified companion profiles matching your requirements in ${blog.cityName}. Review the details at your own pace.`,
                  },
                  {
                    step: '4',
                    title: 'Confirm and Meet',
                    desc: `Once you confirm, the companion arrives at your location in ${blog.cityName} on time. Complete discretion, professional conduct, and privacy throughout.`,
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-xl border border-[#2A2A2A] bg-[#151515] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-black">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="why-choose">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Choose Girls of Passion for {blog.serviceName} in {blog.cityName}
              </h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, t: 'Verified Profiles', d: `All companion profiles in ${blog.cityName} are manually reviewed.` },
                  { icon: ShieldCheck, t: 'Complete Privacy', d: 'Your personal data is never shared with any third party.' },
                  { icon: ShieldCheck, t: '24x7 Support', d: 'Our team is available around the clock via call and WhatsApp.' },
                  { icon: ShieldCheck, t: 'Fast Booking', d: 'Most bookings are confirmed within minutes of your enquiry.' },
                  { icon: ShieldCheck, t: 'Transparent Pricing', d: 'All pricing is shared upfront — no hidden charges or surprises.' },
                  { icon: ShieldCheck, t: 'Professional Service', d: 'Consent-based, respectful, and handled with complete professionalism.' },
                ].map(({ t, d }) => (
                  <div key={t} className="flex items-start gap-3 rounded-lg border border-[#2A2A2A] bg-[#151515] p-3">
                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t}</p>
                      <p className="text-xs text-[#B8B8B8] mt-0.5">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="safety-tips">
              <h2 className="text-2xl font-bold text-white mb-4">Safety & Privacy Tips</h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="space-y-3 text-sm leading-7">
                <p>
                  When booking escort service in {blog.cityName}, privacy and safety should always come
                  first. Girls of Passion recommends the following best practices for a discreet and secure
                  experience:
                </p>
                <ul className="space-y-2 ml-4">
                  {[
                    `Always book through a verified, established agency like Girls of Passion rather than unverified classified listings.`,
                    `Never share personal financial information such as bank account or card details with a companion or agency.`,
                    `Choose hotel rooms or private residences for meetings — avoid meeting in public spaces without prior discussion.`,
                    `Communicate requirements clearly before booking to ensure the experience matches your expectations.`,
                    `This service is strictly for adults aged 18 years and above. Please follow all applicable local laws.`,
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="faqs">
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="faq-item">
                    <summary className="faq-question">{faq.question}</summary>
                    <div className="faq-answer">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Explore More</h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-5" />
              <div className="flex flex-wrap gap-3">
                <Link
                  href={cityPageUrl}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <ArrowRight size={14} />
                  {cityPageLabel}
                </Link>
                <Link
                  href="/india-escort-service/"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#151515] px-4 py-2 text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors"
                >
                  <ArrowRight size={14} />
                  India Escort Service
                </Link>
                <Link
                  href={cityServicePath(blog.city, 'vip-escort')}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#151515] px-4 py-2 text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors"
                >
                  <ArrowRight size={14} />
                  VIP Escort {blog.cityName}
                </Link>
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#151515] px-4 py-2 text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors"
                >
                  <ArrowRight size={14} />
                  All Guides
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-5">
            {/* Book Now CTA */}
            <div className="rounded-xl border border-[#D4AF37]/30 bg-[#0D0D0D] p-5">
              <h3 className="text-lg font-bold text-white mb-1">Book {blog.serviceName}</h3>
              <p className="text-xs text-[#B8B8B8] mb-4">
                Discreet companion booking in {blog.cityName}. Available 24x7.
              </p>
              <div className="grid gap-3">
                <a href={`tel:${phone}`} className="btn-gold justify-center text-sm">
                  <Phone size={15} />
                  Call Now
                </a>
                <a
                  href={createWhatsAppUrl(whatsapp, `Hi, I want to book ${blog.serviceName} in ${blog.cityName}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center text-sm"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Related posts from same city */}
            {relatedPosts.length > 0 && (
              <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-5">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  More {blog.cityName} Guides
                </h3>
                <div className="space-y-3">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}/`}
                      className="flex items-start gap-2 text-xs text-[#B8B8B8] hover:text-[#D4AF37] transition-colors group"
                    >
                      <ArrowRight size={11} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                      <span className="line-clamp-2 group-hover:text-[#D4AF37]">{post.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Service links */}
            <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-5">
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                {blog.cityName} Services
              </h3>
              <div className="space-y-2">
                {[
                  { label: 'VIP Escort', slug: 'vip-escort' },
                  { label: 'Hotel Escort', slug: 'hotel-escort' },
                  { label: 'Independent Escort', slug: 'independent-escort' },
                  { label: 'Call Girl Service', slug: 'call-girl' },
                  { label: 'Outcall Escort', slug: 'outcall-escort' },
                ].map(({ label, slug }) => (
                  <Link
                    key={slug}
                    href={cityServicePath(blog.city, slug)}
                    className="flex items-center justify-between text-sm text-[#B8B8B8] hover:text-[#D4AF37] transition-colors py-1 border-b border-[#1a1a1a] last:border-0"
                  >
                    <span>{label}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Top cities */}
            <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-5">
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Top Cities</h3>
              <div className="space-y-2">
                {['delhi', 'mumbai', 'jaipur', 'goa', 'hyderabad', 'indore'].map((citySlug) => (
                  <Link
                    key={citySlug}
                    href={`/${citySlug}-escort-service/`}
                    className="flex items-center justify-between text-sm text-[#B8B8B8] hover:text-[#D4AF37] transition-colors py-1 border-b border-[#1a1a1a] last:border-0"
                  >
                    <span className="capitalize">{citySlug} Escort Service</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-4">
              <p className="text-xs text-[#555]">
                This content is for adults aged 18+ only. Girls of Passion provides professional adult
                companionship services across India. Follow all applicable local laws.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <VideoBlock video={selectedVideo} title={`Helpful Video for ${blog.cityName} Visitors`} />

      <InternalLinkHub
        currentCitySlug={blog.city}
        title={`More Guides and Services for ${blog.cityName}`}
      />
    </>
  );
}

export const revalidate = 86400;
