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
  title: 'Mumbai Escort Service | Premium Adult Companionship 24x7',
  description: 'Book a discreet Mumbai escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Bandra, Juhu, Andheri, BKC, and South Mumbai.',
  alternates: {
    canonical: '/mumbai-escort-service/',
    languages: {
      'en-IN': '/mumbai-escort-service/',
      'x-default': '/mumbai-escort-service/',
    },
  },
  openGraph: {
    title: 'Mumbai Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Mumbai escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Bandra, Juhu, Andheri, BKC, and South Mumbai.',
    url: '/mumbai-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-mumbai.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mumbai Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Mumbai escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Bandra, Juhu, Andheri, BKC, and South Mumbai.',
  },
};

// Mumbai companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-mumbai.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-mumbai.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-mumbai.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-mumbai.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-mumbai.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-mumbai.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-mumbai.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-mumbai.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function MumbaiEscortPage() {
  const phone = '+919999900102';
  const whatsapp = '919999900102';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Mumbai%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Mumbai for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Mumbai?",
      answer: "Yes, booking support is available across major Mumbai locations, including South Mumbai, Bandra, Juhu, Andheri, Powai, BKC, Lower Parel, Worli, luxury hotels, and private residences."
    },
    {
      question: "How can I book a companion in Mumbai?",
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
      question: "Is support available 24x7?",
      answer: "Yes, booking support is available 24x7, subject to profile availability, location, and timing."
    },
    {
      question: "Can I book a companion near my hotel or residence?",
      answer: "Yes, you can share your hotel or residence location, and our team will help you check suitable nearby options."
    },
    {
      question: "Do you provide service in Bandra, Juhu, Andheri, and South Mumbai?",
      answer: "Yes, booking support is available across Bandra, Juhu, Andheri, South Mumbai, Powai, BKC, Lower Parel, and other major Mumbai locations."
    },
    {
      question: "Is pricing shared before booking?",
      answer: "Yes, pricing and availability details are shared before confirmation so that clients can make an informed decision."
    },
    {
      question: "Who can use this service?",
      answer: "This service is strictly for adults aged 18 years and above. Clients must communicate respectfully and follow all applicable local laws."
    },
    {
      question: "Is Mumbai escort service available near me?",
      answer: "Girls of Passion provides location-based booking support across major Mumbai areas. You can share your location through call or WhatsApp to check nearby profile availability."
    },
    {
      question: "Why should I choose Girls of Passion in Mumbai?",
      answer: "Girls of Passion focuses on verified profiles, discreet booking, fast response, professional coordination, and premium companionship support across Mumbai."
    }
  ];

  // Schema definitions for Mumbai page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Mumbai',
    description: 'Book a discreet Mumbai escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Mumbai.',
    url: '/mumbai-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bandra West, Mumbai',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400050',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Bandra' },
      { '@type': 'City', name: 'Juhu' },
      { '@type': 'City', name: 'Andheri' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '172',
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
    url: '/mumbai-escort-service/',
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
        name: 'Mumbai Escort Service',
        item: 'https://www.girlsofpassion.in/mumbai-escort-service/'
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
      <SupplementalCitySchema citySlug="mumbai" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Mumbai, Maharashtra
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
                Mumbai Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship with Privacy & Elegance
                </span>
              </h1>

              {/* Intro paragraphs */}
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Mumbai escort service</strong> with privacy, comfort, and refined companionship. We are designed for clients who value discretion, verified profiles, smooth communication, and a high-quality experience in India’s most dynamic lifestyle city.
                </p>
                <p>
                  Mumbai is not just a city; it is a fast-moving lifestyle. From luxury nightlife in Bandra and Juhu to corporate power circles in Nariman Point, BKC, Lower Parel, Andheri, and Powai, everything here moves with speed, class, and high expectations. Whether you are a business traveller, working professional, local resident, or visitor exploring the city, your experience should be smooth, private, and well-managed.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">Mumbai escort service</strong>, <strong className="text-amber-400 font-semibold">escort service Mumbai</strong>, <strong className="text-amber-400 font-semibold">best escort services Mumbai</strong>, or a trusted adult companionship platform, you are not only looking for options. You are looking for reliability, privacy, quality, and complete professionalism. Girls of Passion is built to deliver exactly that with a premium and discreet approach.
                </p>
                <p>
                  Girls of Passion is designed for adults who want a <strong className="text-white">premium Mumbai escort service</strong> with verified profiles, discreet communication, and smooth booking support. In a fast-moving city like Mumbai, clients expect speed, privacy, and professional handling. Our platform focuses on delivering a refined adult companionship experience across major Mumbai locations, including Bandra, Juhu, Andheri, Powai, BKC, Lower Parel, South Mumbai, and luxury hotel areas.
                </p>
                <p>
                  Our goal is simple: to provide adults with a safe, private, and premium companionship platform where comfort, confidentiality, and quality always come first.
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
                  <span className="font-semibold text-white">4.8/5</span> Average Rating
                </div>
                <div className="h-4 w-px bg-neutral-800" />
                <div>390+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-mumbai.jpg" 
                  alt="Mumbai Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available near Bandra, BKC, Juhu & Luxury Hotels</p>
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
                <LeadForm defaultCity="mumbai" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Mumbai Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Mumbai adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Mumbai</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Mumbai, Maharashtra</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">South Mumbai, Bandra, Juhu, Andheri, Powai, BKC, Lower Parel, Worli, Goregaon, Thane, Navi Mumbai</td>
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
                    <td className="px-6 py-4">Corporate professionals, business travellers, hotel companionship, dinner dates, private meetings, social events</td>
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

        {/* Service Highlights Section */}
        <section className="py-16 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Service Highlights</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">How we address your companion booking needs in Mumbai</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Client Need</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">What We Provide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Fast booking</td>
                    <td className="px-6 py-4">Quick call and WhatsApp response</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Privacy concern</td>
                    <td className="px-6 py-4">Discreet and confidential coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Genuine profiles</td>
                    <td className="px-6 py-4">Verified and carefully reviewed companion options</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Premium experience</td>
                    <td className="px-6 py-4">Well-presented, polished, and professional companions</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Location flexibility</td>
                    <td className="px-6 py-4">Service across major Mumbai areas</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Trust</td>
                    <td className="px-6 py-4">Clear communication before confirmation</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Convenience</td>
                    <td className="px-6 py-4">Simple booking process with minimal steps</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Quality</td>
                    <td className="px-6 py-4">Comfort, elegance, reliability, and smooth coordination</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Mumbai</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Mumbai. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Mumbai Escort Companion`}
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

        {/* Section: Why Choose Girls of Passion for Mumbai Escort Service? */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Mumbai Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white">Mumbai escort service</strong> is important because clients in Mumbai expect speed, privacy, genuine profiles, and professional support. In a city full of options, reliability is what separates a premium platform from the rest.
                </p>
                <p>
                  Girls of Passion offers a structured and smooth experience from the first inquiry to final booking confirmation. Every step is handled with care, clarity, and complete confidentiality.
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
                  'Availability across major Mumbai locations',
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

            {/* Escort Service Mumbai – Built for Speed and Sophistication */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Speed & Sophistication</span>
              <h3 className="text-2xl font-bold text-white">Escort Service Mumbai – Built for Speed and Sophistication</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                In Mumbai, time is everything. Clients do not want delays, confusion, or complicated processes. Our <strong className="text-white font-semibold">escort service Mumbai</strong> is designed to match the city’s fast pace while maintaining privacy and professionalism.
              </p>
              
              <h4 className="font-semibold text-white text-sm">We focus on:</h4>

              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                {[
                  'Instant communication',
                  'Quick confirmations',
                  'Organized coordination',
                  'Simple booking steps',
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
                Whether you are a first-time client or a regular visitor, Girls of Passion provides a clean and convenient experience with private support at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Mumbai Escorts Service for a High-Standard Lifestyle */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-mumbai.jpg" 
                alt="Mumbai Escorts Service for a High-Standard Lifestyle"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Premium Lifestyle</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Mumbai Escorts Service for a High-Standard Lifestyle</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Mumbai attracts people who expect more: more quality, more professionalism, more privacy, and more clarity. Our <strong className="text-white">Mumbai escorts service</strong> is tailored for adults who value a refined companionship experience that matches the city’s high-standard lifestyle.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our service is suitable for:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Corporate professionals',
                    'Business travellers',
                    'Entrepreneurs',
                    'Local residents',
                    'Hotel guests',
                    'High-end lifestyle seekers',
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

        {/* Section: Best Escort Services Mumbai – Built for Quality and Reliability */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Service Quality</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Mumbai – Built for Quality and Reliability</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When people search for the <strong className="text-white font-semibold">best escort services Mumbai</strong>, they usually expect more than simple availability. They want genuine profiles, fast response, privacy, clear communication, and a premium experience. Girls of Passion focuses on all these areas to deliver a dependable adult companionship service.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">What makes us different:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Carefully reviewed companion profiles',
                    'Premium companion categories',
                    'Fast booking assistance',
                    'Transparent communication',
                    'Privacy-focused support',
                    'Availability across key Mumbai locations',
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

            {/* Escorts Service Mumbai with Consistency at Every Step */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Consistency</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Escorts Service Mumbai with Consistency at Every Step</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white">escorts service Mumbai</strong> should offer more than quick access. It should provide consistency, privacy, and clear coordination at every step. In a city full of options, a structured process creates trust.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">With Girls of Passion, clients can expect:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Immediate response',
                    'Organized arrangements',
                    'Clear expectations',
                    'Professional booking support',
                    'Easy location coordination',
                    'Smooth confirmation process'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400 font-medium text-neutral-300">
                Our team works to keep the experience simple, discreet, and stress-free.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Mumbai Escorts Service Available Across Premium Locations */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Premium Coverage</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Mumbai Escorts Service Available Across Premium Locations</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Mumbai escorts service</strong> is available across major business, lifestyle, residential, and hotel locations in the city. Whether you are staying in a luxury hotel, attending meetings, living in a premium apartment, or visiting Mumbai for a short trip, our team can help you check location-based availability.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'South Mumbai',
                'Nariman Point',
                'Colaba',
                'Marine Drive',
                'Lower Parel',
                'Worli',
                'Bandra',
                'BKC',
                'Juhu',
                'Andheri',
                'Powai',
                'Goregaon',
                'Malad',
                'Thane',
                'Navi Mumbai',
                'Luxury hotels',
                'Private residences',
                'Corporate hubs',
                'Premium apartments'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Mumbai Companion Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage helps clients searching for <strong className="text-white">escort service Mumbai near me</strong> or <strong className="text-white">Mumbai escort service near me</strong> find suitable options quickly and conveniently.
            </p>
          </div>
        </section>

        {/* Premium Mumbai Locations We Cover Table */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Premium Mumbai Locations We Cover</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Detailed location mapping across Mumbai's primary sectors</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Mumbai Area</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">South Mumbai</td>
                    <td className="px-6 py-4">Luxury hotels, business meetings, premium stays</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Bandra</td>
                    <td className="px-6 py-4">Nightlife, cafés, social meetings, premium residences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Juhu</td>
                    <td className="px-6 py-4">Luxury stays, private meetings, lifestyle experiences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Andheri</td>
                    <td className="px-6 py-4">Business travellers, hotel guests, quick coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Powai</td>
                    <td className="px-6 py-4">Corporate professionals, premium apartments, private stays</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">BKC</td>
                    <td className="px-6 py-4">Business meetings, corporate lifestyle, executive companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Lower Parel</td>
                    <td className="px-6 py-4">Premium nightlife, luxury residences, social events</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Worli</td>
                    <td className="px-6 py-4">High-end apartments, hotels, private companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Navi Mumbai</td>
                    <td className="px-6 py-4">Business stays, private residences, local availability</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Thane</td>
                    <td className="px-6 py-4">Residential clients, private meetings, flexible booking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Localized Details for South Mumbai, Bandra/Juhu, Andheri/Powai/BKC */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* South Mumbai Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Business & Heritage</span>
              <h3 className="mt-2 text-xl font-bold text-white">South Mumbai Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                South Mumbai is known for luxury hotels, business centres, premium restaurants, heritage locations, and high-end lifestyle spaces. Girls of Passion provides discreet companionship booking support for adults looking for refined companion options in areas such as Colaba, Marine Drive, Nariman Point, Churchgate, and nearby locations.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                This area is ideal for business travellers, hotel guests, and clients who prefer elegant companionship for dinner plans, private meetings, social occasions, and luxury stays.
              </p>
            </div>

            {/* Bandra and Juhu Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Lifestyle Centers</span>
              <h3 className="mt-2 text-xl font-bold text-white">Bandra and Juhu Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Bandra and Juhu are among Mumbai’s most popular lifestyle areas, known for cafés, nightlife, premium residences, luxury hotels, restaurants, and social events. Girls of Passion offers private adult companionship support for clients who want stylish, well-presented, and sophisticated companion options in these areas.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our support team can help check suitable profiles based on your preferred location and timing.
              </p>
            </div>

            {/* Andheri, Powai, and BKC Availability */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Corporate Zones</span>
              <h3 className="mt-2 text-xl font-bold text-white">Andheri, Powai, and BKC Availability</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Andheri, Powai, and BKC are major business and lifestyle hubs in Mumbai. These areas are popular among corporate professionals, entrepreneurs, hotel guests, and people looking for premium private companionship.
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
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Simple Setup</span>
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
              <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy and Discretion – Non-Negotiable in Mumbai</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing a <strong className="text-white">Mumbai escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Search Intents</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Mumbai and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white font-semibold">call girl Mumbai</strong>, <strong className="text-white font-semibold">Mumbai call girl</strong>, <strong className="text-white font-semibold">call girls service Mumbai</strong>, or <strong className="text-white font-semibold">Mumbai call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a more professional, respectful, and privacy-focused way.
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
                  'Mumbai-wide availability',
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
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Insight</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Mumbai Call Girl – Local Understanding for Better Coordination</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Choosing a <strong className="text-white">Mumbai call girl</strong> option through a professional platform gives clients the benefit of local familiarity and smoother coordination. Mumbai is spread across multiple zones, and location understanding can make the booking process faster and more convenient.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Mumbai residents',
                    'Business visitors',
                    'Corporate professionals',
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

        {/* Section: Trusted, Private & Professional Mumbai Companionship */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Trust Framework</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Trusted, Private, and Professional Mumbai Companionship</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Trust is the foundation of every private companionship service. At Girls of Passion, we focus on genuine profiles, respectful communication, and complete confidentiality. Clients who search for <strong className="text-white font-semibold">call girl Mumbai</strong>, <strong className="text-white font-semibold">Mumbai call girl</strong>, or <strong className="text-white font-semibold">Best Call Girls service in Mumbai</strong> usually want reliability, privacy, and a smooth booking process. Our platform is designed to meet those expectations in a professional and discreet way.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">We ensure:</h4>
                <ul className="space-y-3">
                  {[
                    'Verified and genuine companion profiles',
                    'Secure communication',
                    'Confidential booking support',
                    'No unnecessary personal questions',
                    'Clear details before confirmation',
                    'Adult-only service standards',
                    'Respectful and professional interaction'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This privacy-first approach makes Girls of Passion a dependable choice for adults looking for premium companionship in Mumbai.
              </p>
            </div>

            {/* Premium Companion Profiles for Corporate Professionals */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Business Companions</span>
              <h3 className="text-2xl font-bold text-white">Premium Companion Profiles for Corporate Professionals</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Mumbai attracts thousands of business travellers, entrepreneurs, executives, and professionals because of its finance, entertainment, real estate, media, startup, and corporate sectors. Many visitors stay in premium hotels or attend private business meetings and social events. Girls of Passion provides professional adult companionship support for clients who want a refined and discreet companion during their stay.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Corporate professionals often prefer companions who are:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Well-presented',
                    'Polite and professional',
                    'Comfortable in premium settings',
                    'Easy to communicate with',
                    'Discreet and respectful',
                    'Suitable for dinner or social occasions'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our platform helps clients find suitable options based on profile availability and preferences.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Hotel and Private Residence & Safe Standards */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Hotel and Private Residence Companionship in Mumbai */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Luxury Stays</span>
              <h3 className="text-2xl font-bold text-white">Hotel and Private Residence Companionship in Mumbai</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion provides companionship booking support for hotels, private residences, premium apartments, and selected locations across Mumbai, subject to availability and local guidelines.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Hotel and private companionship is suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Business stays',
                    'Private meetings',
                    'Dinner plans',
                    'Social companionship',
                    'Personal company',
                    'Luxury lifestyle experiences',
                    'Relaxed city evenings'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our team helps coordinate location and timing in a professional and confidential way.
              </p>
            </div>

            {/* Safe and Professional Adult Companionship */}
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

          </div>
        </section>

        {/* Section: 24x7 Mumbai Escort Service Support & Transparent Pricing */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* 24x7 Mumbai Escort Service Support */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="text-2xl font-bold text-white">24x7 Mumbai Escort Service Support</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Mumbai is known as the city that never stops, and client schedules can vary at any time. Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Mumbai.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our 24x7 support helps with:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Profile availability',
                    'Location-based options',
                    'Booking confirmation',
                    'Timing coordination',
                    'Category selection',
                    'Privacy-related questions'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Availability may depend on profile, location, timing, and booking schedule. Contact our team through call or WhatsApp for the latest available options.
              </p>
            </div>

            {/* Transparent Pricing and Clear Communication */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Estimates</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Transparent Pricing and Clear Communication</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">escort service Mumbai</strong> should always provide clear details before booking. At Girls of Passion, we believe in transparency so that clients can make informed decisions.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Pricing may depend on:</h4>
                <ul className="space-y-3">
                  {[
                    'Companion category',
                    'Profile selection',
                    'Duration',
                    'Location',
                    'Timing',
                    'Special preferences',
                    'Availability'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our team shares required details before confirmation. This avoids confusion and ensures a smoother booking experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Affordable Companionship & High-End Simplicity */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Affordable Premium Companionship in Mumbai */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Value & Quality</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Affordable Premium Companionship in Mumbai</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion aims to provide premium companionship with flexible options. Different clients have different preferences and budgets, so our platform offers multiple categories and clear communication before booking.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Clients can expect:</h4>
                <ul className="space-y-3">
                  {[
                    'Clear pricing information',
                    'Flexible profile options',
                    'Premium categories',
                    'No confusing process',
                    'Location-based support',
                    'Quick response',
                    'Discreet coordination'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our focus is to combine comfort, privacy, and quality in one smooth experience.
              </p>
            </div>

            {/* Designed for High-End Simplicity */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Ease of Use</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Designed for High-End Simplicity</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Luxury is not about complexity; it is about ease. Everything on Girls of Passion is designed to make your experience simple and effortless. From browsing profiles to confirming availability, the process is built around convenience and privacy.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">You will find:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Simple navigation',
                    'Quick contact options',
                    'Easy booking steps',
                    'Clear profile details',
                    'Professional support',
                    'Fast response',
                    'Minimal complications'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                This user-focused approach makes our platform a strong choice for adults searching for <strong className="text-white">Mumbai escort service</strong> or private companionship in Mumbai.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Why Girls of Passion is a Trusted Name in Mumbai */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Platform Value</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Why Girls of Passion is a Trusted Name in Mumbai</h2>
            <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            
            <p className="mt-6 text-base leading-relaxed text-neutral-300">
              Reliability matters in a competitive city like Mumbai. Clients want a platform that respects their time, privacy, and expectations. Girls of Passion is built on consistent service, verified profiles, and professional coordination.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-left">
              {[
                { title: 'High service standards', desc: 'We maintain unmatched companionship quality.' },
                { title: 'Discreet and private', desc: 'Strict protocols for customer privacy.' },
                { title: 'Quick response', desc: 'Fast coordination through call & WhatsApp.' },
                { title: 'Verified companion profiles', desc: 'Genuine listings for premium satisfaction.' }
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/20 hover:border-amber-500/20 transition-all">
                  <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-neutral-400">
              Our focus on quality and confidentiality makes us a trusted platform for adult companionship in Mumbai.
            </p>
          </div>
        </section>

        {/* Section: Book Now – Girls of Passion & Experience Premium Companionship */}
        <section className="py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container-shell">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Ready to Book</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Experience Premium Companionship in Mumbai Today</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white">Mumbai escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, independent-style, local, modern, and sophisticated companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for <strong className="text-white">best escort services Mumbai</strong>, <strong className="text-white">escort service Mumbai</strong>, <strong className="text-white">Mumbai escorts service</strong>, or private companion options near you, our team can help you check suitable available profiles based on your preference.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-white mb-2 text-sm">We provide:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {[
                        'Call now for availability assistance',
                        'WhatsApp booking available support',
                        '24x7 support and quick response',
                        'Service across Mumbai coverage',
                        'Verified companion profiles focus',
                        'Private and discreet booking process',
                        'Premium options available categories'
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Mumbai Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Mumbai Hotline</p>
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
              <a href="/mumbai/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/mumbai/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/mumbai/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/mumbai/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/mumbai/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Mumbai</p>
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
              🛑 <strong>18+ Adult-Only Disclaimer:</strong> This service is strictly restricted to adults aged 18 years and above. All interactions are based on mutual adult consent. Clients must comply with local rules. All users must follow applicable local laws and communicate respectfully.<br className="mt-2" />
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

