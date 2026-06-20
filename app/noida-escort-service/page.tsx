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
import { LeadForm } from '@/components/ui/LeadForm';

import { SupplementalCitySchema } from '@/components/seo/SupplementalCitySchema';
export const metadata: Metadata = {
  title: 'Noida Escort Service | Premium Adult Companionship 24x7',
  description: 'Book a discreet Noida escort service with Girls of Passion. Verified profiles, VIP companions, private booking, 24x7 support, and premium companionship across Noida.',
  alternates: {
    canonical: '/noida-escort-service/',
    languages: {
      'en-IN': '/noida-escort-service/',
      'x-default': '/noida-escort-service/',
    },
  },
  openGraph: {
    title: 'Noida Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Noida escort service with Girls of Passion. Verified profiles, VIP companions, private booking, 24x7 support, and premium companionship across Noida.',
    url: '/noida-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-noida.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noida Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Noida escort service with Girls of Passion. Verified profiles, VIP companions, private booking, 24x7 support, and premium companionship across Noida.',
  },
};

// Noida companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-noida.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-noida.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-noida.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-noida.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-noida.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-noida.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-noida.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-noida.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function NoidaEscortPage() {
  const phone = '+919999900110';
  const whatsapp = '919999900110';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Noida%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Welcome to Girls of Passion, a platform designed for individuals who value privacy, professionalism, and a seamless experience in a fast-moving city like Noida. We provide reliable and premium adult companionship services."
    },
    {
      question: "Is Girls of Passion available across Noida?",
      answer: "Yes, with Noida call girls service, you get availability across major areas including Sector 18 & Sector 62, Noida Extension, Corporate hubs, and Luxury residences."
    },
    {
      question: "How can I book a companion in Noida?",
      answer: "The process is simple: 1. Browse available options, 2. Select your preference, 3. Connect directly, 4. Confirm instantly. No delays. No unnecessary steps."
    },
    {
      question: "Is the booking process private?",
      answer: "Yes. In a corporate city like Noida, privacy is extremely important. We ensure complete discretion in every interaction, secure communication channels, no sharing of personal data, and confidential coordination."
    },
    {
      question: "Are the profiles verified?",
      answer: "Yes, Girls of Passion focuses on verified profiles, clear communication, reliable coordination, and professional behaviour to build long-term trust."
    },
    {
      question: "Do you offer VIP escort services Noida?",
      answer: "Yes, for those who expect a higher level of service, VIP escort services Noida offer a refined and elevated experience. This is ideal for high-end preferences, premium environments, and individuals who value exclusivity."
    },
    {
      question: "Is support available 24x7?",
      answer: "Yes, Noida's lifestyle doesn't follow fixed hours—and neither do we. We are available day and night with a quick response system and instant booking."
    },
    {
      question: "Why choose Girls of Passion in Noida?",
      answer: "Because in a fast-moving city, reliability matters more than anything. We provide a structured system, consistent experience, professional coordination, and a user-focused approach."
    }
  ];

  // Schema definitions for Noida page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Noida',
    description: 'Book a discreet Noida escort service with Girls of Passion. Verified profiles, VIP companions, private booking, 24x7 support, and premium companionship across Noida.',
    url: '/noida-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 18, Noida',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201301',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Sector 18' },
      { '@type': 'City', name: 'Sector 62' },
      { '@type': 'City', name: 'Noida Extension' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '134',
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
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Girls of Passion',
    url: '/noida-escort-service/',
    logo: '/logo.svg',
    telephone: phone
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.girlsofpassion.in/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Noida Escort Service',
        item: 'https://www.girlsofpassion.in/noida-escort-service/'
      }
    ]
  };

  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SupplementalCitySchema citySlug="noida" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Noida, Uttar Pradesh
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-neutral-900 pb-20 pt-16 lg:pb-28 lg:pt-24">
          {/* Decorative Glowing Orbs */}
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
          
          <div className="container-shell relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-center">
              
              {/* Trust Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
                <ShieldCheck size={14} className="text-amber-400" />
                Elite Companionship Platform
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Noida Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium, Discreet & Modern Experience by Girls of Passion
                </span>
              </h1>

              {/* Intro paragraphs */}
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a platform designed for individuals who value privacy, professionalism, and a seamless experience in a fast-moving city like Noida.
                </p>
                <p>
                  Noida is one of India’s most rapidly developing urban hubs—filled with corporate offices, luxury apartments, upscale nightlife, and modern lifestyle choices. Whether you are a working professional, business traveller, or someone exploring the city, your expectations are naturally higher.
                </p>
                <p>
                  If your search brought you to <strong className="text-amber-400 font-semibold">Noida escort service</strong>, you are not just looking for availability—you are looking for reliability, discretion, and a smooth, well-managed experience. That is exactly what this platform delivers.
                </p>
              </div>

              {/* Hero CTA buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-3 rounded-lg bg-amber-500 px-7 py-4 text-sm font-bold text-black transition-all hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                >
                  <Phone size={18} />
                  Call Now: {phone}
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900/80 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-neutral-800 hover:border-neutral-600"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  WhatsApp Booking
                </a>
              </div>

              {/* Stars summary */}
              <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.7/5</span> Average Rating
                </div>
                <div className="h-4 w-px bg-neutral-800" />
                <div>230+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-noida.jpg" 
                  alt="Noida Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available near Sector 18, Sector 62 & Luxury Hotels</p>
                </div>
              </div>

              {/* Premium Dark Lead Form Container */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-amber-500" />
                  Discreet Inquiry Form
                </h3>
                <p className="text-xs text-neutral-400 mb-4">
                  100% confidential. Your details are secured and deleted immediately after coordinating.
                </p>
                <LeadForm defaultCity="noida" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Noida Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Noida adult companionship service</p>
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
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Service Type</td>
                    <td className="px-6 py-4">Premium adult companionship in Noida</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Noida, Uttar Pradesh</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Sector 18, Sector 62, Noida Extension, Corporate hubs, Luxury residences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Booking Options</td>
                    <td className="px-6 py-4">Call and WhatsApp booking</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Availability</td>
                    <td className="px-6 py-4">24x7 support and quick response system</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Profile Quality</td>
                    <td className="px-6 py-4">Verified profiles, premium options, and structured coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Privacy Level</td>
                    <td className="px-6 py-4">Complete discretion and secure communication channels</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Best For</td>
                    <td className="px-6 py-4">Corporate professionals, business travellers, and modern professionals</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Benefits</td>
                    <td className="px-6 py-4">Structured system, consistent experience, and professional coordination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verified Profile Cards Showcase */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Premium Gallery</span>
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Noida</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Noida. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Noida Escort Companion`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent p-4" />
                    
                    {/* Rate Tag */}
                    <span className="absolute right-4 top-4 rounded bg-black/70 px-2.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-sm border border-amber-500/20">
                      {p.rate}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{p.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-neutral-400">
                        <span>Age: {p.age}</span>
                        <span>•</span>
                        <span>{p.height}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-neutral-800/80 px-3 py-0.5 text-[10px] text-neutral-300 border border-neutral-700/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={whatsappUrl} 
                      className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-neutral-800 py-2.5 text-center text-xs font-bold text-white hover:bg-amber-500 hover:text-black transition-all"
                    >
                      Book {p.name} Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Escort Service Noida – Built for Urban Lifestyle */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Urban Efficiency</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Escort Service Noida – Built for Urban Lifestyle</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Noida operates on speed and efficiency. That’s why our <strong className="text-white">Escort service Noida</strong> is designed to match that pace.
                </p>
                <p>
                  Everything is structured to save your time and effort. We focus on:
                </p>
              </div>

              {/* List */}
              <ul className="mt-6 space-y-3">
                {[
                  'Instant communication',
                  'Quick confirmations',
                  'Organized coordination',
                  'Simple booking process'
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

            {/* Noida Escorts Service – Designed for Modern Professionals */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Tailored Experience</span>
              <h3 className="text-2xl font-bold text-white">Noida Escorts Service – Designed for Modern Professionals</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Noida attracts professionals, entrepreneurs, and individuals who value convenience and clarity. Our <strong className="text-white">Noida escorts service</strong> is tailored for this modern audience.
              </p>
              
              <h4 className="font-semibold text-white text-sm">This platform is ideal for:</h4>

              <ul className="space-y-2 text-xs text-neutral-300">
                {[
                  'Corporate professionals',
                  'Business travellers',
                  'Individuals seeking private time',
                  'People who prefer structured experiences'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="text-xs text-neutral-300 mt-2">
                Every interaction is handled with professionalism and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Escorts Service Noida – Reliable & Consistent */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-noida.jpg" 
                alt="Escorts Service Noida – Reliable & Consistent"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Consistency & Trust</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Escorts Service Noida – Reliable & Consistent</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                In a competitive environment, consistency builds trust. Our <strong className="text-white">Escorts service Noida</strong> ensures every interaction follows a clear and predictable system.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You can expect:</h4>
                <ul className="space-y-3">
                  {[
                    'Fast responses',
                    'Smooth coordination',
                    'Transparent communication',
                    'Professional handling'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This creates a dependable experience every time.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Direct Access & Local Advantage */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Direct Process</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Noida – Fast & Direct Access</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                If you are searching for a <strong className="text-white font-semibold">Call girl Noida</strong>, speed and simplicity matter.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">The process is simple:</h4>
                <ol className="space-y-3">
                  {[
                    'Browse available options',
                    'Select your preference',
                    'Connect directly',
                    'Confirm instantly'
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                No delays. No unnecessary steps.
              </p>
            </div>

            {/* Noida Call Girl – Local Advantage */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Insight</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Noida Call Girl – Local Advantage</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Choosing a <strong className="text-white">Noida call girl</strong> gives you the benefit of local familiarity in a fast-paced city.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">This ensures:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Better coordination with locations',
                    'Easy communication',
                    'Faster scheduling'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-300 font-medium">
                Everything becomes smoother and more efficient.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Call Girls Service Noida – Flexible & User-Friendly */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Flexibility</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girls Service Noida – Flexible & User-Friendly</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our <strong className="text-white">Call girls service Noida</strong> is built around your convenience.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">We ensure:</h4>
                <ul className="space-y-2">
                  {[
                    'Flexible timing',
                    'Quick responses',
                    'Easy arrangements'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </div>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                You stay in control of your experience without complications.
              </p>
            </div>

            {/* Noida Call Girls Service – Coverage Across Key Sectors */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Wide Coverage</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Noida Call Girls Service – Coverage Across Key Sectors</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Noida is divided into multiple sectors, and accessibility matters. With <strong className="text-white">Noida call girls service</strong>, you get availability across major areas.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our reach includes:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Sector 18 & Sector 62',
                    'Noida Extension',
                    'Corporate hubs',
                    'Luxury residences'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-300">
                Wherever you are, service is within reach.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Best Escort Services Noida – Experience That Matches Expectations */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Service Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Noida – Experience That Matches Expectations</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When users search for the <strong className="text-white">Best escort services Noida</strong>, they expect professionalism, reliability, and smooth execution.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our focus includes:</h4>
                <ul className="space-y-3">
                  {[
                    'Maintaining high standards',
                    'Delivering consistent service',
                    'Ensuring structured coordination'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This ensures that expectations are met every time.
              </p>
            </div>

            {/* Best Call Girls Service in Noida – Built on Trust */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Trust & Integrity</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Best Call Girls Service in Noida – Built on Trust</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Providing the best <strong className="text-white">Call Girls service in Noida</strong> requires more than just options—it requires consistency and trust.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">We focus on:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Clear communication',
                    'Reliable coordination',
                    'Professional behaviour'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                This builds long-term confidence.
              </p>
            </div>

          </div>
        </section>

        {/* Section: VIP & Privacy */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* VIP Escort Services Noida – Premium Experience */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Experience</span>
              <h3 className="text-2xl font-bold text-white">VIP Escort Services Noida – Premium Experience</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                For those who expect a higher level of service, <strong className="text-white">VIP escort services Noida</strong> offer a refined and elevated experience.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">This is ideal for:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'High-end preferences',
                    'Premium environments',
                    'Individuals who value exclusivity'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Every detail is managed with precision and care.
              </p>
            </div>

            {/* Privacy & Confidentiality – Complete Discretion */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security First</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy & Confidentiality – Complete Discretion</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                In a corporate city like Noida, privacy is extremely important. We ensure complete discretion in every interaction.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our approach:</h4>
                <ul className="space-y-3">
                  {[
                    'Secure communication channels',
                    'No sharing of personal data',
                    'Confidential coordination'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                You can engage with full peace of mind.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Availability, Simplicity & Why Choose */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* 24x7 Availability – Always Accessible */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Accessibility</span>
              <h3 className="text-2xl font-bold text-white">24x7 Availability – Always Accessible</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Noida’s lifestyle doesn’t follow fixed hours—and neither do we.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our policy:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Available day and night',
                    'Quick response system',
                    'Instant booking'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-300">
                Whenever you need it, the platform is ready.
              </p>
            </div>

            {/* Designed for Simplicity & Efficiency */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Ease of Use</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Designed for Simplicity & Efficiency</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Everything on this platform is designed to make your experience easy.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You will find:</h4>
                <ul className="space-y-3">
                  {[
                    'Simple navigation',
                    'Clear steps',
                    'Minimal effort required'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This ensures a smooth and stress-free process.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Why Choose Girls of Passion in Noida? */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Platform Value</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion in Noida?</h2>
            <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            
            <p className="mt-6 text-base leading-relaxed text-neutral-300">
              Because in a fast-moving city, reliability matters more than anything.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-left">
              {[
                { title: 'Structured system', desc: 'Predictable and reliable coordination.' },
                { title: 'Consistent experience', desc: 'High standards across all bookings.' },
                { title: 'Professional coordination', desc: 'Polite and responsive booking support.' },
                { title: 'User-focused approach', desc: 'Designed entirely around client convenience.' }
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/20 hover:border-amber-500/20 transition-all">
                  <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-neutral-400">
              This creates a platform you can depend on.
            </p>
          </div>
        </section>

        {/* Section: Book Now – Girls of Passion */}
        <section className="py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container-shell">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Contact Desk</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Book Now – Girls of Passion</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a reliable, discreet, and professional companion in Noida, connect with Girls of Passion today. Our team is available 24x7 to assist you.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-white mb-2 text-sm">We provide:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {[
                        'Call Now assistance',
                        'WhatsApp Available booking support',
                        '24x7 Support service',
                        'Service Across Noida coverage'
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">Experience Premium Companionship in Noida Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium Noida escort service, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, VIP, independent-style, local, and modern companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for best escort services Noida, VIP escort services Noida, escort service Noida, or private companion options near you, our team can help you check suitable available profiles based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Noida Escort Service Now</h3>

                  <a 
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-3 rounded-lg bg-amber-500 py-4 text-center text-sm font-bold text-black hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20"
                  >
                    <Phone size={18} />
                    Call Us Now
                  </a>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900 py-4 text-center text-sm font-bold text-white hover:bg-neutral-800 transition-all"
                  >
                    <MessageCircle size={18} className="text-emerald-500" />
                    WhatsApp Booking
                  </a>

                  <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Noida Hotline</p>
                    <p className="text-sm font-bold text-white">{phone}</p>
                    <p className="text-[9px] text-neutral-500 mt-1">Available 24x7. Verification required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Internal Service Links */}
        <section className="py-12 bg-neutral-900/30 border-b border-neutral-900">
          <div className="container-shell">
            <h2 className="text-2xl font-bold text-white mb-6">All Escort Services in This City</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <a href="/noida/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/noida/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/noida/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/noida/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/noida/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section id="faqs" className="py-20 bg-neutral-900/10">
          <div className="container-shell max-w-4xl">
            
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">FAQ Desk</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Noida</p>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-neutral-800/80 bg-neutral-900/25 p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 focus:outline-none">
                    <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 group-open:rotate-180 transition-transform">
                      <ChevronRight size={14} className="rotate-90 group-open:-rotate-90 transition-transform" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300 pl-1 border-l-2 border-amber-500/50">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Disclaimer & Footer check */}
            <div className="mt-12 text-center text-xs text-neutral-500 border-t border-neutral-900 pt-6">
              🛑 <strong>18+ Adult-Only Disclaimer:</strong> This service is strictly restricted to adults aged 18 years and above. All interactions are based on mutual adult consent. Clients must comply with local rules.<br className="mt-2" />
              Please review our{' '}
              <Link href="/privacy-policy/" className="underline hover:text-neutral-300">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms/" className="underline hover:text-neutral-300">
                Terms and Conditions
              </Link>.
            </div>

          </div>
        </section></div>
    </>
  );
}

