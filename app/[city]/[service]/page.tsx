import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, Star, Phone, MessageCircle, ChevronRight, IndianRupee } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CitySchema } from '@/components/seo/CitySchema';
import { InternalLinkHub } from '@/components/seo/InternalLinkHub';
import { VideoBlock } from '@/components/seo/VideoBlock';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { LeadForm } from '@/components/ui/LeadForm';
import { blogSeeds } from '@/data/blogSeeds';
import { cities, getCity } from '@/data/cities';
import { getService, services } from '@/data/services';
import { absoluteUrl, cityLandingPath, cityServicePath, generateCityMeta } from '@/lib/seo/generateMeta';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';

const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

export function generateStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({ city: city.slug, service: service.slug }))
  );
}

type CityServicePageProps = { params: Promise<{ city: string; service: string }> };

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return {};
  return generateCityMeta({
    cityName: city.name,
    citySlug: city.slug,
    serviceName: service.name,
    serviceSlug: service.slug,
    rating: city.rating,
    reviewCount: city.reviewCount,
  });
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) notFound();

  const whatsappUrl = createWhatsAppUrl(whatsapp, `Hi, I want to book ${service.name} in ${city.name}`);

  const faqs = [
    {
      question: `Is ${service.name} available in ${city.name}?`,
      answer: `Yes. Girls of Passion provides ${service.name.toLowerCase()} in ${city.name} with verified companion profiles, discreet booking, and 24x7 professional support.`,
    },
    {
      question: `How much does ${service.name} cost in ${city.name}?`,
      answer: `Pricing for ${service.name.toLowerCase()} in ${city.name} typically starts from Rs. ${service.basePrice.toLocaleString('en-IN')} and varies based on profile, timing, and location. Exact details are shared before confirmation.`,
    },
    {
      question: `How do I book ${service.name} in ${city.name}?`,
      answer: `Contact Girls of Passion via call or WhatsApp. Share your location in ${city.name}, preferred date and timing, and we will confirm available verified profiles discreetly.`,
    },
    {
      question: `Is ${service.name} available 24 hours in ${city.name}?`,
      answer: `Yes. Girls of Passion provides ${service.name.toLowerCase()} in ${city.name} 24 hours a day, 7 days a week — including weekends and holidays. Call or WhatsApp anytime for instant booking assistance.`,
    },
    {
      question: `Which areas in ${city.name} does Girls of Passion cover for ${service.name}?`,
      answer: `Girls of Passion covers all major areas of ${city.name} for ${service.name.toLowerCase()}, including ${city.landmarks.slice(0, 4).join(', ')} and surrounding localities. Contact us to confirm availability in your specific area.`,
    },
  ];

  const relatedBlogs = blogSeeds.filter((b) => b.city === city.slug).slice(0, 4);

  return (
    <>
      <CitySchema
        cityName={city.name}
        serviceName={service.name}
        phone={city.phone}
        address={city.address}
        rating={city.rating}
        reviewCount={city.reviewCount}
        url={absoluteUrl(cityServicePath(city.slug, service.slug))}
        faqs={faqs}
      />
      <FloatingCTA />

      {/* Breadcrumb */}
      <div className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-3">
          <nav className="flex items-center gap-1.5 text-xs text-[#555]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href={cityLandingPath(city.slug)} className="hover:text-[#D4AF37] transition-colors">{city.name} Escort Service</Link>
            <ChevronRight size={12} />
            <span className="text-[#B8B8B8]">{service.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <Breadcrumb items={[{ label: city.name, href: cityLandingPath(city.slug) }, { label: service.shortName }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-xs font-semibold text-[#D4AF37]">
                <ShieldCheck size={14} />
                Verified Companion Service
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                {city.name} Escort Service & Call Girl - {service.name} 24/7
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#B8B8B8]">
                {city.name} Escort Service, {city.name} Call Girl and {service.name} booking are available 24/7 with Girls of Passion.
                Book call girls in {city.name} with cash payment, quick deals, free hotel coordination, verified profiles, and private support across {city.landmarks.join(', ')}.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#B8B8B8]">
                <span className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#D4AF37]" fill="currentColor" />
                  ))}
                  <span className="font-semibold text-white ml-1">{city.rating}/5</span>
                </span>
                <span className="h-3 w-px bg-[#2A2A2A]" />
                <span className="flex items-center gap-1">
                  <IndianRupee size={14} />
                  From Rs. {service.basePrice.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${phone}`} className="btn-gold">
                  <Phone size={16} />
                  Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="nofollow noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle size={16} />
                  WhatsApp Booking
                </a>
              </div>
            </div>
            <div>
              <LeadForm defaultCity={city.slug} defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Service content */}
      <section className="section-pad bg-[#050505]">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{service.name} Details for {city.name}</h2>
              <div className="h-1 w-16 rounded-full bg-[#D4AF37] mb-6" />
              <div className="space-y-4 text-sm leading-7 text-[#B8B8B8]">
                <p>
                  {city.name} Escort Service and Call Girl service by Girls of Passion provides structured booking assistance for {service.name.toLowerCase()} in {city.name},
                  helping adults check verified companion options, current availability, service expectations, and
                  location suitability before confirming anything.
                </p>
                <p>
                  This service is commonly requested around {city.landmarks.join(', ')}, hotels, apartments, resorts,
                  and private residences. Our support team keeps communication discreet, shares clear information,
                  and helps clients choose a suitable option based on timing, category, and comfort.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-6">
              <h3 className="font-semibold text-white mb-4">Booking Checklist</h3>
              <ul className="space-y-3 text-sm text-[#B8B8B8]">
                {[
                  `Confirm your preferred area in ${city.name}`,
                  `Share timing and duration for ${service.shortName}`,
                  'Review available verified profile options',
                  'Check pricing and coordination details upfront',
                  'Use respectful, adult-only communication',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-pad bg-[#050505]">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-white mb-2">Why Choose Girls of Passion for {service.name} in {city.name}</h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-[#D4AF37] mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Verified Profiles', d: `Every companion profile for ${service.name.toLowerCase()} in ${city.name} is reviewed for authenticity and quality.` },
              { t: 'Complete Discretion', d: 'Your personal information and booking details are always kept confidential.' },
              { t: '24x7 Support', d: 'Our team is available round the clock via call and WhatsApp for instant assistance.' },
              { t: 'City-Wide Coverage', d: `We cover ${city.landmarks.slice(0, 3).join(', ')} and all key areas of ${city.name}.` },
              { t: 'Transparent Pricing', d: 'All pricing and availability details are shared before confirmation – no hidden surprises.' },
              { t: 'Professional Service', d: 'All interactions are consent-based, respectful, and handled professionally.' },
            ].map(({ t, d }) => (
              <div key={t} className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-5">
                <div className="mb-2 h-1 w-8 rounded-full bg-[#D4AF37]" />
                <h3 className="font-semibold text-white mb-2">{t}</h3>
                <p className="text-sm text-[#B8B8B8] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#0D0D0D]">
        <div className="container-shell max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-[#D4AF37] mb-8" />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="section-pad bg-[#050505]">
          <div className="container-shell">
            <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}/`}
                  className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-4 hover:border-[#D4AF37]/30 transition-colors"
                >
                  <p className="text-xs text-[#555] mb-2">
                    {new Date(blog.publishedAt).toLocaleDateString('en-IN')}
                  </p>
                  <h3 className="text-sm font-semibold text-white leading-6 line-clamp-2">{blog.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <VideoBlock citySlug={city.slug} title={`${city.name} City Context Video`} />

      <InternalLinkHub
        currentCitySlug={city.slug}
        currentServiceSlug={service.slug}
        title={`More Services Related to ${service.shortName} in ${city.name}`}
      />

      {/* Final CTA */}
      <section className="section-pad bg-gradient-to-b from-[#0D0D0D] to-[#050505]">
        <div className="container-shell max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Book {service.name} in {city.name} Now
          </h2>
          <p className="text-[#B8B8B8] text-sm mb-6">
            Contact Girls of Passion 24x7 for discreet companion booking in {city.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="btn-gold">
              <Phone size={16} />
              Call Now
            </a>
            <a href={whatsappUrl} target="_blank" rel="nofollow noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} />
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-5 text-xs text-[#333]">18+ only. Follow applicable local laws.</p>
        </div>
      </section>
    </>
  );
}
