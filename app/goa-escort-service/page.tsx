import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Star,
  Phone,
  MessageCircle,
  ShieldCheck,
  Check,
  ChevronRight,
  Lock
} from 'lucide-react';
import { CitySchema } from '@/components/seo/CitySchema';
import { LeadForm } from '@/components/ui/LeadForm';

import { SupplementalCitySchema } from '@/components/seo/SupplementalCitySchema';
export const metadata: Metadata = {
  title: 'Goa Escort Service | Premium Adult Companionship 24x7',
  description: 'Book a discreet Goa escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Panaji, Calangute, Baga, North Goa, and South Goa.',
  alternates: {
    canonical: '/goa-escort-service/',
  },
  openGraph: {
    title: 'Goa Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Goa escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Panaji, Calangute, Baga, North Goa, and South Goa.',
    url: '/goa-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-goa.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goa Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Goa escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Panaji, Calangute, Baga, North Goa, and South Goa.',
    images: ['/assets/photos/luxury-escort-service-goa.jpg'],
  },
};

export default function GoaEscortPage() {
  const phone = '+919999900106';
  const whatsapp = '919999900106';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Goa%20escort%20service.`;

  const faqs = [
    {
      question: 'Is escort service available in Goa?',
      answer: 'Yes. Girls of Passion provides premium escort service in Goa with verified companion profiles across Panaji, Calangute, Baga, Anjuna, South Goa, and all major areas.'
    },
    {
      question: 'How do I book a companion in Goa?',
      answer: 'Contact Girls of Passion via call or WhatsApp. Share your location in Goa, preferred timing, and category. Our team confirms availability and booking details discreetly.'
    },
    {
      question: 'Is the Goa escort service booking private?',
      answer: 'Yes. Girls of Passion follows a confidential booking process. Your personal details and inquiries are handled with complete discretion.'
    },
    {
      question: 'What is the cost of escort service in Goa?',
      answer: 'Pricing for escort service in Goa starts from Rs. 6,000 and varies based on companion profile, category, duration, and location. Exact details are shared before confirmation.'
    },
    {
      question: 'Are escort profiles in Goa verified?',
      answer: 'Yes. Every companion profile on Girls of Passion is reviewed and verified before being made available for booking in Goa.'
    },
    {
      question: 'Is support available 24x7 for Goa escort bookings?',
      answer: 'Yes. Our team provides 24x7 booking support via call and WhatsApp for Goa escort service, subject to profile and area availability.'
    },
    {
      question: 'What areas in Goa do you cover?',
      answer: 'We cover North Goa (Calangute, Baga, Anjuna, Panaji, Candolim) and South Goa (Colva, Benaulim, Margao, Varca) along with all major hotels and resorts.'
    },
    {
      question: 'Can I book a companion for a beach resort in Goa?',
      answer: 'Yes. Girls of Passion provides hotel and resort companion service across Goa. Share your hotel or resort location and we will check availability discreetly.'
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Goa',
    description: 'Book a discreet Goa escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium adult companionship across Goa.',
    url: 'https://girlsofpassion.in/goa-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Panaji',
      addressLocality: 'Panaji',
      addressRegion: 'Goa',
      postalCode: '403001',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Panaji' },
      { '@type': 'City', name: 'Calangute' },
      { '@type': 'City', name: 'Baga' },
      { '@type': 'City', name: 'Margao' },
      { '@type': 'State', name: 'Goa' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '168',
      bestRating: '5',
      worstRating: '1'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: 'INR'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://girlsofpassion.in/' },
      { '@type': 'ListItem', position: 2, name: 'Goa Escort Service', item: 'https://girlsofpassion.in/goa-escort-service/' }
    ]
  };

  const serviceLinks = [
    { name: 'VIP Escort Service', href: '/goa/vip-escort/', price: 'Rs. 15,000+' },
    { name: 'Hotel Escort Service', href: '/goa/hotel-escort/', price: 'Rs. 10,000+' },
    { name: 'Independent Escort', href: '/goa/independent-escort/', price: 'Rs. 8,000+' },
    { name: 'Call Girl Service', href: '/goa/call-girl/', price: 'Rs. 6,000+' },
    { name: 'Outcall Escort Service', href: '/goa/outcall-escort/', price: 'Rs. 9,000+' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">

        {/* Announcement Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          Premium & Discreet 100% Verified Profiles in Goa
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-neutral-900 pb-20 pt-16 lg:pb-28 lg:pt-24">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="container-shell relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
                <ShieldCheck size={14} className="text-amber-400" />
                Elite Companionship Platform
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Goa Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship in Goa
                </span>
              </h1>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, the most trusted platform for adults seeking a premium <strong className="text-white">Goa escort service</strong>. Goa is one of India's most popular destinations for leisure, nightlife, beach resorts, and premium experiences. We provide verified, discreet companion booking across all key areas of Goa.
                </p>
                <p>
                  Whether you are visiting Calangute, staying at a luxury beach resort, celebrating in Baga, or exploring the quiet charm of South Goa, Girls of Passion offers a smooth and private adult companionship experience tailored to your preferences.
                </p>
                <p>
                  If you are searching for <strong className="text-amber-400 font-semibold">escort service in Goa</strong>, <strong className="text-amber-400 font-semibold">call girl Goa</strong>, or a <strong className="text-amber-400 font-semibold">female companion in Goa</strong>, our platform is designed for exactly that — professional, discreet, and premium.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-3 rounded-lg bg-amber-500 px-7 py-4 text-sm font-bold text-black transition-all hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  <Phone size={18} />
                  Call Now: {phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900/80 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-neutral-800 hover:border-neutral-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  WhatsApp Booking
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                  </div>
                  <span className="font-semibold text-white">4.8/5</span> Average Rating
                </div>
                <div className="h-4 w-px bg-neutral-800" />
                <div>340+ Client Reviews</div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:justify-center">
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image
                  src="/assets/photos/luxury-escort-service-goa.jpg"
                  alt="Goa Escort Service Premium Companion"
                  fill
                  priority
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                    ★ Premium Verified
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">Featured Companion</h3>
                  <p className="text-xs text-neutral-300">Available in Calangute, Baga & Luxury Resorts</p>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-amber-500" />
                  Discreet Inquiry Form
                </h3>
                <p className="text-xs text-neutral-400 mb-4">100% confidential. Your details are kept secure and deleted after coordination.</p>
                <LeadForm defaultCity="goa" />
              </div>
            </div>
          </div>
        </section>

        {/* Service Links */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white">Escort Services in Goa</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-amber-500/40 transition-all">
                  <div className="mb-2 h-1 w-8 rounded-full bg-amber-500 group-hover:w-12 transition-all" />
                  <h3 className="font-semibold text-white text-sm">{s.name}</h3>
                  <p className="mt-2 text-xs text-amber-400">From {s.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Table */}
        <section className="py-16 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Goa Escort Service – Quick Overview</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            </div>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Feature</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  {[
                    ['Service Type', 'Premium adult companionship in Goa'],
                    ['Main Areas', 'Panaji, Calangute, Baga, Anjuna, Margao, South Goa'],
                    ['Coverage', 'North Goa, South Goa, beach resorts, luxury hotels'],
                    ['Booking Options', 'Call and WhatsApp booking'],
                    ['Availability', '24x7 support, subject to profile availability'],
                    ['Profile Quality', 'Verified, genuine, and carefully reviewed profiles'],
                    ['Privacy Level', 'Discreet and confidential booking process'],
                    ['Best For', 'Beach holidays, resort stays, party companions, private meetings'],
                  ].map(([label, value]) => (
                    <tr key={label} className="hover:bg-neutral-900/40 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{label}</td>
                      <td className="px-6 py-4">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Goa Escort Service?</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Goa attracts thousands of visitors every day — tourists, business travelers, party-goers, and couples. The city's vibrant nightlife, beaches, resorts, and casinos create an ideal environment for premium adult companionship. Girls of Passion understands this demand and offers a reliable, discreet service built for quality clients.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Verified and genuine companion profiles',
                  'Fast response via call and WhatsApp',
                  'Coverage across North Goa and South Goa',
                  'Hotel and resort companion booking',
                  'Complete privacy and confidentiality',
                  'Premium, well-presented companions',
                  'Transparent information before booking',
                  'Adult-only, respectful service approach'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                      <Check size={12} className="stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Goa Coverage</span>
              <h3 className="text-xl font-bold text-white">Areas We Cover in Goa</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Calangute', 'Baga', 'Anjuna', 'Panaji', 'Candolim',
                  'North Goa', 'South Goa', 'Colva', 'Benaulim', 'Margao',
                  'Vasco da Gama', 'Mapusa', 'Morjim', 'Arambol',
                ].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-sm text-neutral-300">
                    <MapPin size={13} className="text-amber-500 shrink-0" />
                    {loc}
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-400">
                Whether you are at a beach shack, 5-star resort, or private villa in Goa, our team can assist with discreet companion booking.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Simple Booking</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">How to Book Escort Service in Goa</h2>
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Booking with Girls of Passion is quick and simple. Our process is designed for adults who value fast response and clear communication.
              </p>
              <ol className="mt-6 space-y-4">
                {[
                  'Choose your preferred service category (VIP, Hotel, Independent, etc.)',
                  'Contact us via call or WhatsApp.',
                  'Share your location in Goa, preferred timing, and profile preference.',
                  'Our team confirms availability and shares details discreetly.',
                  'Proceed with booking confirmation.'
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">{idx + 1}</span>
                    <span className="text-sm text-neutral-300 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8 flex flex-col justify-center">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Privacy First</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Discreet & Confidential Goa Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Privacy is our top priority. When you contact Girls of Passion for escort service in Goa, your identity, location, and booking details are handled with complete confidentiality. We do not share client information with third parties, and all communication is handled through secure channels.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-black hover:bg-amber-400 transition-all">
                  <Phone size={16} /> Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1ebe5a] transition-all">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-neutral-900/10">
          <div className="container-shell max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">FAQ Helpdesk</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Frequently Asked Questions – Goa Escort Service</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            </div>
            <div className="grid gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-neutral-800/80 bg-neutral-900/25 p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 focus:outline-none">
                    <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">{faq.question}</h3>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-400">
                      <ChevronRight size={14} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300 pl-1 border-l-2 border-amber-500/50">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 text-center text-xs text-neutral-500">
              Please review our{' '}
              <Link href="/privacy-policy/" className="underline hover:text-neutral-300">Privacy Policy</Link>
              {' '}and{' '}
              <Link href="/terms/" className="underline hover:text-neutral-300">Terms and Conditions</Link>
              {' '}for additional details.
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container-shell max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white">Book Goa Escort Service Now</h2>
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
              Contact Girls of Passion for premium, verified, and discreet adult companionship in Goa. Available 24x7 across all major areas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`tel:${phone}`} className="inline-flex items-center gap-3 rounded-lg bg-amber-500 px-8 py-4 text-sm font-bold text-black hover:bg-amber-400 transition-all shadow-lg">
                <Phone size={18} /> Call Us Now
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-sm font-bold text-white hover:bg-[#1ebe5a] transition-all">
                <MessageCircle size={18} /> WhatsApp Booking
              </a>
            </div>
            <p className="mt-6 text-xs text-neutral-600">18+ only. Follow applicable local laws.</p>
          </div>
        </section>

      </div>
    </>
  );
}

