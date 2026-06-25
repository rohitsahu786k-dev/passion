import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Star, Phone, MessageCircle, ChevronRight, Shield, Clock, Award } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CitySchema } from '@/components/seo/CitySchema';
import { InternalLinkHub } from '@/components/seo/InternalLinkHub';
import { VideoBlock } from '@/components/seo/VideoBlock';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { LeadForm } from '@/components/ui/LeadForm';
import { cities, getCity } from '@/data/cities';
import { services } from '@/data/services';
import { blogSeeds } from '@/data/blogSeeds';
import { absoluteUrl, cityLandingPath, cityServicePath, generateCityMeta } from '@/lib/seo/generateMeta';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';

const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

type CityPageProps = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return {
    ...generateCityMeta({ cityName: city.name, citySlug: city.slug, rating: city.rating, reviewCount: city.reviewCount }),
    robots: { index: false, follow: false },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const whatsappUrl = createWhatsAppUrl(whatsapp, `Hi, I want to book an escort service in ${city.name}`);

  const faqs = [
    {
      question: `Is escort service available in ${city.name}?`,
      answer: `Yes. Girls of Passion provides verified escort service in ${city.name} including VIP escort, hotel escort, call girl service, independent escort, and outcall escort. 24x7 discreet booking available.`,
    },
    {
      question: `How do I book an escort in ${city.name}?`,
      answer: `Call or WhatsApp Girls of Passion to book an escort in ${city.name}. Share your location, date, and timing. We verify availability and confirm discreetly within minutes.`,
    },
    {
      question: `What is the cost of escort service in ${city.name}?`,
      answer: `Escort service pricing in ${city.name} starts from Rs. 6,000 for standard bookings and Rs. 15,000+ for VIP companion service. Final pricing depends on profile, duration, and service type.`,
    },
    {
      question: `Are escort profiles in ${city.name} verified?`,
      answer: `Yes. Girls of Passion only publishes verified companion profiles in ${city.name}. Every profile is reviewed for authenticity before being listed for booking.`,
    },
    {
      question: `Is hotel escort service available in ${city.name}?`,
      answer: `Yes. Girls of Passion provides hotel escort service in ${city.name} for guests staying at hotels, resorts, and private residences. Share your hotel name and room details through WhatsApp for discreet coordination.`,
    },
    {
      question: `What is VIP escort service in ${city.name}?`,
      answer: `VIP escort service in ${city.name} refers to premium-tier companion booking with high-quality, well-presented profiles. These include elite companions suitable for luxury hotels, private dinners, events, or exclusive stays.`,
    },
    {
      question: `Can I find a call girl near me in ${city.name}?`,
      answer: `Yes. Girls of Passion provides location-based call girl service in ${city.name}. Share your area, hotel, or neighbourhood and our team will check the nearest available verified profiles.`,
    },
    {
      question: `Is ${city.name} escort service available 24x7?`,
      answer: `Yes. Booking support for ${city.name} escort service is available 24 hours a day, 7 days a week. Actual profile availability depends on timing, location, and current bookings.`,
    },
  ];

  const cityBlogs = blogSeeds.filter((blog) => blog.city === city.slug).slice(0, 4);

  return (
    <>
      <CitySchema
        cityName={city.name}
        phone={city.phone}
        address={city.address}
        rating={city.rating}
        reviewCount={city.reviewCount}
        url={absoluteUrl(cityLandingPath(city.slug))}
        faqs={faqs}
      />
      <FloatingCTA />

      {/* Breadcrumb nav */}
      <div className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-3">
          <nav className="flex items-center gap-1.5 text-xs text-[#555]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#B8B8B8]">{city.name} Escort Service</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <Breadcrumb items={[{ label: `${city.name} Escort Service` }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-xs font-semibold text-[#D4AF37]">
                <MapPin size={14} />
                {city.state}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                {city.name} Escort Service & Call Girl Booking 24/7
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#B8B8B8]">
                {city.name} Escort Service and {city.name} Call Girl booking are available 24/7 with Girls of Passion for adults who want Call Girls in {city.name},
                cash payment service, quick deals, free hotel coordination, {city.name} escorts services and call girls across {city.landmarks.join(', ')}.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#B8B8B8]">
                <span className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#D4AF37]" fill="currentColor" />
                  ))}
                  <span className="font-semibold text-white ml-1">{city.rating}/5</span>
                </span>
                <span className="h-3 w-px bg-[#2A2A2A]" />
                <span>{city.reviewCount}+ verified reviews</span>
                <span className="h-3 w-px bg-[#2A2A2A]" />
                <span>24x7 Available</span>
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
              <LeadForm defaultCity={city.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* City content */}
      <section className="section-pad bg-[#050505]">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Private Companion Booking in {city.name}</h2>
              <div className="h-1 w-16 rounded-full bg-[#D4AF37] mb-6" />
              <div className="space-y-4 text-sm leading-7 text-[#B8B8B8]">
                <p>
                  {city.name} Escort Service and Call Girl service by Girls of Passion helps adults find discreet, verified companion booking support in {city.name}.
                  Our team focuses on clear communication, respectful coordination, privacy-first handling, and
                  availability across well-known local areas including {city.landmarks.join(', ')}.
                </p>
                <p>
                  Whether you are staying at a hotel, visiting for business, planning a private evening, or looking
                  for city-specific companionship options, every enquiry is handled with confidentiality. You can
                  compare service categories, confirm current availability, and receive booking details before making
                  a decision.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-6">
              <h3 className="font-semibold text-white mb-4">{city.name} Coverage Highlights</h3>
              <ul className="space-y-3 text-sm text-[#B8B8B8]">
                {[
                  'Verified profile coordination',
                  'Hotel, residence, and private-stay support',
                  '24x7 call and WhatsApp response',
                  'Transparent availability before confirmation',
                  'Adult-only, privacy-focused communication',
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

      {/* Services Grid */}
      <section className="section-pad bg-[#050505]">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-white mb-2">Escort Services in {city.name}</h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-[#D4AF37] mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={cityServicePath(city.slug, service.slug)}
                className="group rounded-xl border border-[#2A2A2A] bg-[#151515] p-5 hover:border-[#D4AF37]/40 transition-all"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-[#D4AF37] group-hover:w-12 transition-all" />
                <h3 className="font-semibold text-white">{service.shortName}</h3>
                <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">{service.summary}</p>
                <p className="mt-3 text-xs text-[#D4AF37] font-medium">From Rs. {service.basePrice.toLocaleString('en-IN')} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-pad bg-[#0D0D0D]">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-white mb-2">Why Choose Girls of Passion in {city.name}</h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-[#D4AF37] mb-8" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Shield size={24} className="text-[#D4AF37]" />,
                title: 'Verified & Safe',
                desc: `All companion profiles for escort service in ${city.name} are manually verified before listing. Your safety and privacy are guaranteed.`,
              },
              {
                icon: <Clock size={24} className="text-[#D4AF37]" />,
                title: '24x7 Availability',
                desc: `Book escort service in ${city.name} anytime. Our team is available around the clock via call and WhatsApp for instant booking assistance.`,
              },
              {
                icon: <Award size={24} className="text-[#D4AF37]" />,
                title: 'Premium Experience',
                desc: `Girls of Passion delivers premium adult companionship in ${city.name} with professional handling, discretion, and a commitment to quality.`,
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-6">
                <div className="mb-4">{icon}</div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#B8B8B8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Guides */}
      {cityBlogs.length > 0 && (
        <section className="section-pad bg-[#050505]">
          <div className="container-shell">
            <h2 className="text-2xl font-bold text-white mb-6">Escort Guides for {city.name}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cityBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}/`}
                  className="rounded-xl border border-[#2A2A2A] bg-[#151515] p-4 hover:border-[#D4AF37]/30 transition-colors"
                >
                  <p className="text-xs text-[#555] mb-2">{new Date(blog.publishedAt).toLocaleDateString('en-IN')}</p>
                  <h3 className="text-sm font-semibold text-white leading-6 line-clamp-2">{blog.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <VideoBlock citySlug={city.slug} title={`${city.name} Travel and Safety Video Guide`} />

      {/* FAQ */}
      <section id="faqs" className="section-pad bg-[#0D0D0D]">
        <div className="container-shell max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">{city.name} Escort Service FAQs</h2>
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

      {/* Related Escort Services – Internal Linking */}
      <section className="section-pad bg-[#050505] border-t border-[#1A1A1A]">
        <div className="container-shell">
          <h2 className="text-xl font-bold text-white mb-2">Escort Service in Other Cities</h2>
          <p className="text-xs text-[#555] mb-5">Explore Girls of Passion escort service across India&apos;s top destinations</p>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== city.slug)
              .slice(0, 18)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={cityLandingPath(c.slug)}
                  className="inline-flex items-center gap-1 rounded-full border border-[#2A2A2A] bg-[#111] px-3 py-1.5 text-xs text-[#888] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
                >
                  <MapPin size={10} />
                  {c.name} Escort Service
                </Link>
              ))}
            <Link
              href="/india-escort-service/"
              className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-xs text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
            >
              <ChevronRight size={10} />
              All India Escort Service
            </Link>
          </div>
        </div>
      </section>

      <InternalLinkHub
        currentCitySlug={city.slug}
        title={`Explore More Escort Services Near ${city.name}`}
      />

      {/* Final CTA */}
      <section className="section-pad bg-gradient-to-b from-[#0D0D0D] to-[#050505]">
        <div className="container-shell max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Book Escort Service in {city.name}</h2>
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

export const revalidate = 86400;
