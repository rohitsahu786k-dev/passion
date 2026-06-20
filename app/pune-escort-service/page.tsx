import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle,
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Clock, 
  Check, 
  ChevronRight, 
  Lock
} from 'lucide-react';
import { LeadForm } from '@/components/ui/LeadForm';

import { SupplementalCitySchema } from '@/components/seo/SupplementalCitySchema';
export const metadata: Metadata = {
  title: 'Pune Escort Service & Call Girl | Book 24/7',
  description: 'Pune Escort Service and Pune Call Girl booking available 24/7. Book Call Girls in Pune with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
  keywords: [
    'Pune Escort Service',
    'Pune Call Girl',
    'Call Girls in Pune',
    'Pune Escorts services',
    'Pune Call girls',
    'Pune escort service',
    'Girls of Passion Pune',
  ],
  alternates: {
    canonical: '/pune-escort-service/',
    languages: {
      'en-IN': '/pune-escort-service/',
      'x-default': '/pune-escort-service/',
    },
  },
  openGraph: {
    title: 'Pune Escort Service & Call Girl | Book 24/7',
    description: 'Pune Escort Service and Pune Call Girl booking available 24/7. Book Call Girls in Pune with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
    url: '/pune-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-pune.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pune Escort Service & Call Girl | Book 24/7',
    description: 'Pune Escort Service and Pune Call Girl booking available 24/7. Book Call Girls in Pune with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
  },
};

// Pune companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-pune.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-pune.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-pune.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-pune.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-pune.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-pune.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-pune.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-pune.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function PuneEscortPage() {
  const phone = '+919999900107';
  const whatsapp = '919999900107';
  const whatsappUrl = `/go/whatsapp?phone=${whatsapp}&text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Pune%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Pune for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Pune?",
      answer: "Yes, booking support is available across major Pune locations, including Koregaon Park, Viman Nagar, Hinjewadi, Baner, Wakad, Kalyani Nagar, Kharadi, Magarpatta, hotels, and private residences."
    },
    {
      question: "How can I book a companion in Pune?",
      answer: "You can browse available profiles and contact the support team through call or WhatsApp. Share your location, timing, and preference to check availability."
    },
    {
      question: "Is the booking process private?",
      answer: "Yes, the booking process is discreet and confidential. Client privacy is one of our top priorities."
    },
    {
      question: "Are the profiles verified?",
      answer: "Girls of Passion focuses on verified and genuine companion profiles to maintain trust, comfort, and service quality."
    },
    {
      question: "Do you offer VIP escort services Pune?",
      answer: "Yes, VIP companion options are available for clients who prefer premium presentation, refined communication, and priority booking support."
    },
    {
      question: "Is support available 24x7?",
      answer: "Yes, booking support is available 24x7, subject to profile availability, location, and timing."
    },
    {
      question: "Can I book a companion near my hotel or residence?",
      answer: "Yes, you can share your hotel or residence location, and our team will help you check suitable nearby options."
    },
    {
      question: "Is pricing shared before booking?",
      answer: "Yes, pricing and availability details are shared before confirmation so that clients can make an informed decision."
    },
    {
      question: "Who can use this service?",
      answer: "This service is strictly for adults aged 18 years and above. Clients must communicate respectfully and follow all applicable local laws."
    }
  ];

  // Schema definitions for Pune page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Pune',
    description: 'Pune Escort Service and Pune Call Girl booking available 24/7. Book Call Girls in Pune with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
    url: '/pune-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Koregaon Park, Pune',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411001',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Koregaon Park' },
      { '@type': 'City', name: 'Hinjewadi' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '151',
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
    url: '/pune-escort-service/',
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
        name: 'Pune Escort Service',
        item: 'https://www.girlsofpassion.in/pune-escort-service/'
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
      <SupplementalCitySchema citySlug="pune" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Pune, Maharashtra
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
                Pune Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship with Privacy & Style
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
                <strong className="text-amber-400">Pune Escort Service</strong> and <strong className="text-white">Pune Call Girl</strong> booking are available 24/7 for adults who want Call Girls in Pune, cash payment service, quick deals, free hotel coordination, escorts services and call girls with private support.
              </p>
              {/* Intro paragraphs */}              <div data-seo-answer-summary className="mt-5 max-w-3xl rounded-lg border border-amber-500/20 bg-neutral-900/40 p-5 text-sm leading-7 text-neutral-300">
                <p>
                  <strong className="text-amber-400">Pune Escort Service</strong> and <strong className="text-white">Pune Call Girl</strong> are the primary booking keywords for this page. Adults can use Girls of Passion to check Call Girls in Pune, escorts services, verified profile coordination, cash payment availability, quick deals, free hotel coordination, and private 24/7 booking support.
                </p>
                <p className="mt-3">
                  This page is optimized for answer-first search results by clearly covering who the service is for, where it is available, how booking support works, and why users searching for Pune Escort Service, Pune Call Girl or Call Girls in Pune can find relevant city-specific information here.
                </p>
              </div>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Pune escort service</strong> with privacy, comfort, and refined companionship. We are designed for clients who value discretion, verified profiles, smooth communication, and a high-quality experience in one of India’s most modern and fast-growing cities.
                </p>
                <p>
                  Pune is a perfect blend of youthful energy, corporate lifestyle, education hubs, luxury spaces, and premium nightlife. From IT professionals in Hinjewadi and business travellers in Viman Nagar to lifestyle-focused individuals in Koregaon Park, Baner, and Kalyani Nagar, the city attracts people who expect quality, speed, and reliability.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">Pune escort service</strong>, <strong className="text-amber-400 font-semibold">escort service Pune</strong>, <strong className="text-amber-400 font-semibold">best escort services Pune</strong>, or <strong className="text-amber-400 font-semibold">VIP escort services Pune</strong>, you are not only looking for availability. You are looking for a smooth, private, and well-managed adult companionship experience. Girls of Passion is built to deliver exactly that with professionalism, privacy, and complete confidence.
                </p>
                <p>
                  Our goal is simple: to provide adults with a discreet, safe, and premium companionship platform where comfort, privacy, and quality always come first.
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
                <div>260+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-pune.jpg" 
                  alt="Pune Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available near Koregaon Park, Viman Nagar & Luxury Hotels</p>
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
                <LeadForm defaultCity="pune" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Pune Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Pune adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Pune</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Pune, Maharashtra</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Koregaon Park, Viman Nagar, Hinjewadi, Baner, Wakad, Kalyani Nagar, Kharadi, Magarpatta, hotels and private residences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Booking Options</td>
                    <td className="px-6 py-4">Call and WhatsApp booking</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Availability</td>
                    <td className="px-6 py-4">24x7 support, subject to profile availability</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Profile Quality</td>
                    <td className="px-6 py-4">Verified, genuine, and carefully reviewed profiles</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Privacy Level</td>
                    <td className="px-6 py-4">Discreet and confidential booking process</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Best For</td>
                    <td className="px-6 py-4">IT professionals, business travellers, private meetings, hotel companionship, dinner dates, social events</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Support</td>
                    <td className="px-6 py-4">Fast response and professional coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Benefit</td>
                    <td className="px-6 py-4">Reliable, private, and premium adult companionship experience</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Pune</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Pune. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Pune Escort Companion`}
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

        {/* Why Choose Section */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Pune Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white">Pune escort service</strong> matters because clients expect trust, privacy, genuine profiles, and professional support. In a city like Pune, where work culture and lifestyle move quickly, clients want a service that respects their time and protects their privacy.
                </p>
                <p>
                  Girls of Passion offers a structured and smooth experience from the first inquiry to final booking confirmation. Every step is handled with clarity, care, and confidentiality.
                </p>
                <p>
                  We are known for:
                </p>
              </div>

              {/* List */}
              <ul className="mt-6 space-y-3">
                {[
                  'Verified and genuine companion profiles',
                  'Professional and polite communication',
                  'Fast response through call and WhatsApp',
                  'Discreet and confidential booking support',
                  'Availability across major Pune locations',
                  'Premium and well-presented companions',
                  'Clear information before confirmation',
                  'Adult-only and respectful service approach'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                      <Check size={12} className="stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our platform is built for adults who want a reliable service with elegance, privacy, and complete peace of mind.
              </p>
            </div>

            {/* Escort Service Pune */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Fast & Hassle-Free</span>
              <h3 className="text-2xl font-bold text-white">Escort Service Pune – Fast, Smooth, and Hassle-Free</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                In a city like Pune, where life moves between work, travel, social plans, and lifestyle experiences, simplicity matters. Our <strong className="text-white font-semibold">escort service Pune</strong> is designed to make the booking process quick, private, and effortless.
              </p>
              
              <h4 className="font-semibold text-white text-sm">We focus on:</h4>

              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                {[
                  'Instant communication',
                  'Quick confirmations',
                  'Organized coordination',
                  'Easy booking steps',
                  'Clear profile details',
                  'Location-based availability',
                  'Professional support'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="text-xs text-neutral-300 mt-2">
                Whether you are a first-time client or a regular visitor, Girls of Passion gives you a clean and convenient experience with private support at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Pune Escorts Service for Modern Lifestyle */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-pune.jpg" 
                alt="Pune Escorts Service for Modern Lifestyle"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Modern Lifestyles</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Pune Escorts Service for a Modern Lifestyle</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Pune attracts a young, ambitious, and modern audience. The city is home to IT parks, business hubs, luxury apartments, premium hotels, cafés, lounges, and nightlife destinations. Our <strong className="text-white">Pune escorts service</strong> is tailored for adults who value clarity, comfort, and professional handling.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our service is suitable for:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'IT professionals',
                    'Business travellers',
                    'Entrepreneurs',
                    'Lifestyle-focused individuals',
                    'Local professionals',
                    'Hotel guests',
                    'Private social meetings',
                    'Dinner dates',
                    'Event companionship',
                    'Personal companionship'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Every interaction is handled with attention to detail so clients can enjoy a smooth, discreet, and comfortable companionship experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Best Escort Services Pune */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Service Excellence</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Pune – Built for Real Experience</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When people search for the <strong className="text-white font-semibold">best escort services Pune</strong>, they usually expect more than simple options. They want genuine profiles, quick response, privacy, clear communication, and a premium experience. Girls of Passion focuses on all these areas to deliver a dependable adult companionship service.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">What makes us different:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Carefully reviewed companion profiles',
                    'Premium and VIP companion options',
                    'Fast booking assistance',
                    'Transparent communication',
                    'Privacy-focused support',
                    'Availability across key Pune areas',
                    'Professional coordination',
                    'Respectful adult-only interaction'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We believe a premium companionship service should feel smooth, private, and trustworthy from start to finish.
              </p>
            </div>

            {/* VIP Escort Services Pune Card */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">High-Class Offerings</span>
              <h3 className="mt-2 text-2xl font-bold text-white">VIP Escort Services Pune for Premium Lifestyle Experiences</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Our <strong className="text-white">VIP escort services Pune</strong> are designed for clients who prefer a more refined and exclusive experience. VIP companions are suitable for luxury hotels, private residences, premium social events, business evenings, and high-class lifestyle settings.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">VIP companionship focuses on:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Elegant presentation',
                    'Professional communication',
                    'Premium profile quality',
                    'Priority booking support',
                    'Discreet coordination',
                    'Refined social presence',
                    'Personalized assistance'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400 font-medium text-neutral-300">
                For clients who value sophistication, privacy, and comfort, our VIP category offers a more polished companionship experience in Pune.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Pune Escorts Service Available Across Premium Areas */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Pune Locations</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Pune Escorts Service Available Across Premium Areas</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Pune escorts service</strong> is available across major locations of the city. Whether you are staying in a hotel, working in a business district, living in a premium residential area, or visiting Pune for a short trip, our team can help you check location-based availability.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Koregaon Park',
                'Viman Nagar',
                'Hinjewadi',
                'Baner',
                'Wakad',
                'Kalyani Nagar',
                'Kharadi',
                'Magarpatta',
                'Hadapsar',
                'Shivaji Nagar',
                'Deccan',
                'Camp',
                'Aundh',
                'Pimple Saudagar',
                'Hotels and private residences',
                'Business locations',
                'Premium apartments'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Pune Companion Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage helps clients searching for <strong className="text-white">escort service Pune near me</strong> or <strong className="text-white">Pune escort service near me</strong> find suitable options quickly and conveniently.
            </p>
          </div>
        </section>

        {/* Localized Details Section: Koregaon Park, Hinjewadi, Viman/Kharadi/Magarpatta */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Koregaon Park Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Lifestyle Centers</span>
              <h3 className="mt-2 text-xl font-bold text-white">Koregaon Park Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Koregaon Park is one of Pune’s most premium lifestyle areas, known for luxury stays, cafés, lounges, restaurants, and social spaces. Girls of Passion provides discreet companionship booking support for adults looking for refined companion options in and around Koregaon Park.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                This area is ideal for clients who prefer stylish, well-presented, and sophisticated companionship for dinner plans, private meetings, hotel stays, and social occasions.
              </p>
            </div>

            {/* Hinjewadi Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">IT Hubs</span>
              <h3 className="mt-2 text-xl font-bold text-white">Hinjewadi Companion Service for IT Professionals</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Hinjewadi is one of Pune’s biggest IT and business zones. Many professionals, entrepreneurs, and business travellers stay or work in this area. Girls of Passion offers private adult companionship support for clients who want quick coordination, discreet communication, and smooth booking assistance near Hinjewadi.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our support team can help check available companion options based on your preferred timing and location.
              </p>
            </div>

            {/* Viman Nagar/Kharadi/Magarpatta Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Corporate Hubs</span>
              <h3 className="mt-2 text-xl font-bold text-white">Viman Nagar, Kharadi, and Magarpatta Availability</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Viman Nagar, Kharadi, and Magarpatta are major business and lifestyle areas in Pune. These locations are popular among professionals, corporate visitors, hotel guests, and people looking for premium private companionship.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Girls of Passion provides location-based booking support in these areas with a focus on privacy, speed, and professional coordination.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Booking Steps & Process */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Booking Steps Card */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Simple Steps</span>
              <h2 className="mt-2 text-2xl font-extrabold text-white">Call and WhatsApp Booking Process</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Booking with Girls of Passion is simple, fast, and private. Our platform is designed for adults who want quick access, clear information, and smooth coordination.
              </p>
              
              <h3 className="mt-6 text-base font-bold text-white border-b border-neutral-800 pb-2">Simple Booking Steps</h3>
              
              <ol className="mt-6 space-y-4">
                {[
                  'Browse available companion profiles.',
                  'Choose your preferred profile or category.',
                  'Contact our support team through call or WhatsApp.',
                  'Share your preferred location, timing, and requirement.',
                  'Confirm availability and booking details.'
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-neutral-300 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our team helps you with profile availability, category selection, location coordination, and basic booking details. The process is direct, discreet, and easy to follow.
              </p>
            </div>

            {/* Privacy Standards */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security First</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy and Confidentiality Always Protected</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing a <strong className="text-white">Pune escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our privacy standards include:</h4>
                <ul className="space-y-3">
                  {[
                    'Secure communication',
                    'Confidential booking process',
                    'No unnecessary personal questions',
                    'No personal data sharing',
                    'Discreet coordination',
                    'Respect for client identity and preferences'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                        <Check size={10} className="stroke-[3]" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Every inquiry is handled carefully so clients can book with confidence and peace of mind.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Search Intents & local options */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Left Column */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Professional Platform</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Pune and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white">call girl Pune</strong>, <strong className="text-white">Pune call girl</strong>, <strong className="text-white">call girls service Pune</strong>, or <strong className="text-white">Pune call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a more professional, respectful, and privacy-focused way.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Our platform is suitable for adults who want:
              </p>

              <ul className="mt-4 space-y-2.5">
                {[
                  'Verified companion profiles',
                  'Quick booking support',
                  'Private communication',
                  'Premium companion options',
                  'Flexible timing',
                  'Pune-wide availability',
                  'Professional coordination',
                  'Discreet booking process'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We focus on delivering a smooth and confidential experience instead of a complicated or unclear process.
              </p>
            </div>

            {/* Right Column: Local Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Lifestyle</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Local Companion Options in Pune</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Local companion options are ideal for clients who prefer someone familiar with Pune’s lifestyle, locations, and pace. Pune is spread across many high-demand areas, so local familiarity can make coordination easier and more convenient.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Residents of Pune',
                    'Business visitors',
                    'IT professionals',
                    'Hotel guests',
                    'Private meetings',
                    'Dinner plans',
                    'Short-duration companionship',
                    'City-based availability'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                If you prefer a local companion, our support team can help you check available profiles based on your area and timing.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Models, Support, and Pricing */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Business Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Corporate Guests</span>
              <h3 className="mt-2 text-xl font-bold text-white">Premium Companion Profiles for Business Travellers</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Pune attracts thousands of business travellers because of its IT, education, automotive, startup, and corporate sectors. Many visitors stay in premium hotels or attend private business meetings and social events. Girls of Passion provides professional adult companionship support for clients who want a refined and discreet companion during their stay.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Business travellers often prefer companions who are:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Well-presented', 'Polite and professional', 'Comfortable in premium settings', 'Easy to communicate with', 'Discreet and respectful', 'Suitable for dinner or social occasions'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Our platform helps clients find suitable options based on profile availability and preferences.
              </p>
            </div>

            {/* Support Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="mt-2 text-xl font-bold text-white">24x7 Pune Escort Service Support</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Pune’s lifestyle runs beyond fixed hours, especially for professionals, travellers, and people with late schedules. Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Pune.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Our 24x7 support helps with:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Profile availability', 'Location-based options', 'Booking confirmation', 'Timing coordination', 'Category selection', 'Privacy-related questions'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Availability may depend on profile, location, timing, and booking schedule. Contact our team through call or WhatsApp for the latest available options.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Clear Estimates</span>
              <h3 className="mt-2 text-xl font-bold text-white">Transparent Pricing and Clear Communication</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">escort service Pune</strong> should always provide clear details before booking. At Girls of Passion, we believe in transparency so that clients can make informed decisions.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Pricing may depend on:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Companion category', 'Profile selection', 'Duration', 'Location', 'Timing', 'Special preferences', 'Availability'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Our team shares required details before confirmation. This avoids confusion and ensures a smoother booking experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Affordable Companionship & Hotels/Resorts */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Affordable Premium */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Value & Quality</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Affordable Premium Companionship in Pune</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion aims to provide premium companionship with flexible options. Different clients have different preferences and budgets, so our platform offers multiple categories and clear communication before booking.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Clients can expect:</h4>
                <ul className="space-y-2">
                  {[
                    'Clear pricing information',
                    'Flexible profile options',
                    'Premium and VIP categories',
                    'No confusing process',
                    'Location-based support',
                    'Quick response',
                    'Discreet coordination'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our focus is to combine comfort, privacy, and quality in one smooth experience.
              </p>
            </div>

            {/* Hotel & Private Residence Companionship */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Luxury Stays</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Hotel and Private Residence Companionship in Pune</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion provides companionship booking support for hotels, private residences, premium apartments, and selected locations across Pune, subject to availability and local guidelines.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Hotel and private companionship is suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {['Business stays', 'Private meetings', 'Dinner plans', 'Social companionship', 'Personal company', 'Luxury lifestyle experiences', 'Relaxed city evenings'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our team helps coordinate location and timing in a professional and confidential way.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Guidelines & Trust Indicators */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Guidelines */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Legal Compliance</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Safe and Professional Adult Companionship</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is designed for adults who value safety, professionalism, and respectful interaction. We focus on maintaining a platform where communication is clear, privacy is protected, and every step is handled responsibly.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our standards include:</h4>
                <ul className="space-y-3">
                  {[
                    'Verified profiles',
                    'Adult-only access',
                    'Respectful communication',
                    'Consent-based interaction',
                    'Professional coordination',
                    'Privacy protection',
                    'Clear information before confirmation'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Clients must be 18 years or older and must follow all applicable local laws and platform guidelines.
              </p>
            </div>

            {/* Why Girls of Passion is trusted */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Trusted Brand</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Why Girls of Passion is a Trusted Name in Pune</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Reliability matters in a competitive city like Pune. Clients want a platform that respects their time, privacy, and expectations. Girls of Passion is built on consistent service, verified profiles, and professional coordination.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Clients choose us because:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'We maintain high service standards',
                    'We respect privacy',
                    'We provide quick support',
                    'We offer premium companion categories',
                    'We focus on genuine profiles',
                    'We ensure smooth communication',
                    'We support major Pune locations',
                    'We provide a discreet adult-only experience'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Call Girls Service & Call to Action */}
        <section className="py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container-shell">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Instant Booking</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Best Call Girls Service in Pune with Trust and Privacy</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Clients searching for the <strong className="text-white font-semibold">best Call Girls service in Pune</strong> usually want reliability, comfort, genuine profiles, and discreet support. Girls of Passion focuses on creating a better experience through transparent communication, verified profiles, and privacy-first booking assistance.
                  </p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-white mb-2 text-sm">We ensure:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {['Clear booking details', 'Genuine profile options', 'Respectful communication', 'Private coordination', 'Fast response', 'Professional handling', 'Adult-only service standards'].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mt-6 text-base font-bold text-white border-b border-neutral-800 pb-2">Pune Best Call Girls Service with Elevated Standards</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    When clients search for <strong className="text-white font-semibold">Pune best Call Girls service</strong>, they expect a platform that offers better quality, quick response, and a more premium experience. Girls of Passion focuses on elevated service standards through professional coordination, verified profiles, and smooth execution.
                  </p>
                  
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    Our platform is built around:
                  </p>

                  <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400 mb-6">
                    {['High-quality companion options', 'Simple booking process', 'Premium categories', 'Quick communication', 'Confidential support', 'Location-based availability', 'User-focused experience'].map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-8 text-xl font-bold text-white">Experience Premium Companionship in Pune Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white">Pune escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, VIP, independent-style, local, and modern companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for <strong className="text-white">best escort services Pune</strong>, <strong className="text-white">VIP escort services Pune</strong>, <strong className="text-white">escort service Pune</strong>, or private companion options near you, our team can help you check suitable available profiles based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Pune Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Pune Hotline</p>
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
              <a href="/pune/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/pune/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/pune/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/pune/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/pune/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Pune</p>
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

