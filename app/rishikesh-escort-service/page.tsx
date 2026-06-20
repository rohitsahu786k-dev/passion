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
  title: 'Rishikesh Escort Service | Premium Adult Companionship 24x7',
  description: 'Book a discreet Rishikesh escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Tapovan, Shivpuri, resorts, and villas.',
  alternates: {
    canonical: '/rishikesh-escort-service/',
    languages: {
      'en-IN': '/rishikesh-escort-service/',
      'x-default': '/rishikesh-escort-service/',
    },
  },
  openGraph: {
    title: 'Rishikesh Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Rishikesh escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Tapovan, Shivpuri, resorts, and villas.',
    url: '/rishikesh-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-rishikesh.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishikesh Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Rishikesh escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Tapovan, Shivpuri, resorts, and villas.',
  },
};

// Rishikesh companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-rishikesh.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-rishikesh.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-rishikesh.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-rishikesh.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-rishikesh.jpg',
    tags: ['Seductive', 'Riverside Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-rishikesh.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-rishikesh.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-rishikesh.jpg',
    tags: ['Model Profile', 'Resort Meet'],
    rate: 'Elite',
  }
];

export default function RishikeshEscortPage() {
  const phone = '+919999900116';
  const whatsapp = '919999900116';
  const whatsappUrl = `/go/whatsapp?phone=${whatsapp}&text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Rishikesh%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Rishikesh for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Rishikesh?",
      answer: "Yes, booking support is available across major Rishikesh locations, including Tapovan, Laxman Jhula, Ram Jhula, Shivpuri, Muni Ki Reti, riverside resorts, hotels, and private villas."
    },
    {
      question: "How can I book a companion in Rishikesh?",
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
      question: "Can I book a companion near my resort or villa?",
      answer: "Yes, you can share your resort, hotel, or villa location, and our team will help you check suitable nearby options."
    },
    {
      question: "Do you provide service in Tapovan and Shivpuri?",
      answer: "Yes, booking support is available in Tapovan, Shivpuri, Laxman Jhula, Ram Jhula, and other major Rishikesh locations."
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

  // Schema definitions for Rishikesh page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Rishikesh',
    description: 'Book a discreet Rishikesh escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Tapovan, Shivpuri, resorts, and villas.',
    url: '/rishikesh-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tapovan, Rishikesh',
      addressLocality: 'Rishikesh',
      addressRegion: 'Uttarakhand',
      postalCode: '249192',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Rishikesh' },
      { '@type': 'City', name: 'Tapovan' },
      { '@type': 'City', name: 'Shivpuri' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '108',
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
    url: '/rishikesh-escort-service/',
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
        name: 'Rishikesh Escort Service',
        item: 'https://www.girlsofpassion.in/rishikesh-escort-service/'
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
      <SupplementalCitySchema citySlug="rishikesh" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Rishikesh (Gateway to Himalayas)
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
                Rishikesh Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship for Private Getaways
                </span>
              </h1>

              {/* Intro paragraphs */}
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Rishikesh escort service</strong> with privacy, comfort, and elegance. We provide discreet adult companionship booking support for clients who value refined experiences, verified profiles, smooth communication, and complete confidentiality.
                </p>
                <p>
                  Rishikesh is no longer only a spiritual and adventure destination. Today, it has become a popular choice for luxury stays, private villas, riverside resorts, weekend getaways, wellness retreats, and exclusive travel experiences. From Tapovan cafés and riverside properties to Shivpuri resorts and private villas, Rishikesh attracts travellers who want peace, privacy, and a more personalized experience.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">Rishikesh escort service</strong>, <strong className="text-amber-400 font-semibold">escort service Rishikesh</strong>, <strong className="text-amber-400 font-semibold">Rishikesh escorts service</strong>, or <strong className="text-amber-400 font-semibold">best escort services Rishikesh</strong>, you are likely looking for a smooth, private, and well-managed companionship platform. Girls of Passion is designed to deliver exactly that with professionalism, speed, and discretion.
                </p>
                <p>
                  Our goal is simple: to provide adults with a safe, private, and premium companionship experience in Rishikesh, where comfort, trust, and privacy always come first.
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
                <div>130+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-rishikesh.jpg" 
                  alt="Rishikesh Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available in Tapovan, Shivpuri & Luxury Resorts</p>
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
                <LeadForm defaultCity="rishikesh" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Rishikesh Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Rishikesh adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Rishikesh</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Rishikesh, Uttarakhand</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Tapovan, Laxman Jhula, Ram Jhula, Shivpuri, Muni Ki Reti, riverside resorts, private villas, hotels</td>
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
                    <td className="px-6 py-4">Travellers, weekend getaways, luxury stays, private villas, hotel companionship, social company</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Rishikesh</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and resort-friendly companions. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Rishikesh Escort Companion`}
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
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Rishikesh Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white">Rishikesh escort service</strong> is important because clients expect privacy, trust, genuine profiles, and smooth coordination. Rishikesh is a destination where people often stay in resorts, villas, and peaceful private locations, so discreet communication and reliable arrangements matter even more.
                </p>
                <p>
                  Girls of Passion focuses on creating a professional and comfortable experience from the first inquiry to final confirmation. Every step is handled with care, clarity, and confidentiality.
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
                  'Discreet booking process',
                  '24x7 booking support',
                  'Premium and well-presented companions',
                  'Coverage across major Rishikesh locations',
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
                Our platform is built for adults who want a reliable companionship service with privacy, elegance, and complete peace of mind.
              </p>
            </div>

            {/* Escort Service Rishikesh */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Atmospheric Matches</span>
              <h3 className="text-2xl font-bold text-white">Escort Service Rishikesh – Designed for Private Getaways</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Rishikesh is all about calm surroundings, private stays, riverside views, luxury resorts, and peaceful travel experiences. Our <strong className="text-white font-semibold">escort service Rishikesh</strong> is designed to match this private and relaxed atmosphere.
              </p>
              
              <h4 className="font-semibold text-white text-sm">We focus on:</h4>

              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                {[
                  'Smooth coordination',
                  'Quick response',
                  'Discreet communication',
                  'Easy booking process',
                  'Location-based availability',
                  'Clear profile information',
                  'Professional support'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="text-xs text-neutral-300 mt-2">
                Whether you are visiting for a weekend trip, staying in a private villa, attending a retreat, or enjoying a luxury resort stay, Girls of Passion helps you check suitable companion options in a private and convenient way.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Rishikesh Escorts Service for Travellers & Luxury Stays */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-rishikesh.jpg" 
                alt="Rishikesh Escorts Service for Travellers & Luxury Stays"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Destination Audiences</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Rishikesh Escorts Service for Travellers and Luxury Stays</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Unlike metro cities, Rishikesh attracts a different type of audience. Many visitors come here for relaxation, privacy, nature, wellness, adventure, and premium stays. Our <strong className="text-white">Rishikesh escorts service</strong> is tailored for adults who want a refined companionship experience that suits this destination lifestyle.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our service is suitable for:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Travellers staying in resorts',
                    'Guests in private villas',
                    'Weekend visitors',
                    'Solo travellers',
                    'Business guests',
                    'Couples seeking social companionship support',
                    'Private social meetings',
                    'Hotel companionship',
                    'Riverside stays',
                    'Luxury getaway experiences'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Every interaction is handled with professionalism and attention to detail so clients can enjoy a smooth, discreet, and comfortable experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Best Escort Services Rishikesh */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Destination Matches</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Rishikesh – Experience That Matches the Destination</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When users search for the <strong className="text-white font-semibold">best escort services Rishikesh</strong>, they are usually looking for more than basic availability. They want privacy, premium profiles, quick communication, and a reliable platform that understands the nature of the destination.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Girls of Passion focuses on:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'High-quality companion profiles',
                    'Smooth booking coordination',
                    'Consistent service standards',
                    'Private communication',
                    'Location-based support',
                    'Professional customer handling',
                    'Comfortable client experience',
                    'Verified profile options'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reliable Coordination Column */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Dependable Arrangements</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Escorts Service Rishikesh with Reliable Coordination</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A good <strong className="text-white">escorts service Rishikesh</strong> should be simple, organized, and dependable. In a destination where resorts, villas, and riverside properties are spread across different areas, coordination plays an important role.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">With Girls of Passion, clients can expect:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Fast communication',
                    'Organized arrangements',
                    'Clear expectations',
                    'Professional booking support',
                    'Easy location coordination',
                    'Smooth confirmation process'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our team works to keep every step simple and stress-free so clients can focus on enjoying their stay.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Rishikesh Escorts Service Available Across Premium Locations */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Rishikesh Locations</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Rishikesh Escorts Service Available Across Premium Locations</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Rishikesh escorts service</strong> is available across major areas, hotels, resorts, private villas, and tourist locations in and around the city. Whether you are staying near Tapovan, Laxman Jhula, Shivpuri, or a riverside property, our team can help check companion availability based on your preferred timing and location.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Tapovan',
                'Laxman Jhula',
                'Ram Jhula',
                'Shivpuri',
                'Muni Ki Reti',
                'Swarg Ashram area',
                'Neelkanth Road',
                'Riverside resorts',
                'Private villas',
                'Luxury hotels',
                'Retreat properties',
                'Weekend stay locations'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Rishikesh Companion Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage helps clients searching for <strong className="text-white">escort service Rishikesh near me</strong> or <strong className="text-white">Rishikesh escort service near me</strong> to find suitable options quickly and privately.
            </p>
          </div>
        </section>

        {/* Localized Details Section: Tapovan, Shivpuri, Laxman/Ram Jhula */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Tapovan Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Boutique Accommodations</span>
              <h3 className="mt-2 text-xl font-bold text-white">Tapovan Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Tapovan is one of the most active and popular areas in Rishikesh. It is known for cafés, boutique stays, yoga spaces, hostels, guest houses, and premium travel accommodations. Girls of Passion provides discreet companionship booking support for adults staying in and around Tapovan.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                This area is ideal for travellers who want quick coordination, easy communication, and location-based availability.
              </p>
            </div>

            {/* Shivpuri Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Riverside Resorts</span>
              <h3 className="mt-2 text-xl font-bold text-white">Shivpuri and Riverside Resort Companionship</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Shivpuri is popular for luxury resorts, adventure activities, private stays, and riverside experiences. Many visitors choose Shivpuri for weekend getaways, peaceful stays, and premium travel experiences.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our service helps clients check companion availability for Shivpuri resorts, riverside properties, villas, and private stays, subject to profile availability and local guidelines.
              </p>
            </div>

            {/* Laxman/Ram Jhula Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Iconic Settings</span>
              <h3 className="mt-2 text-xl font-bold text-white">Laxman Jhula and Ram Jhula Area Support</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Laxman Jhula and Ram Jhula are among the most recognized areas of Rishikesh. These locations are popular among travellers, tourists, café visitors, and people staying in guest houses or boutique hotels.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Girls of Passion offers private companionship booking support in these areas with a focus on discreet coordination and clear communication.
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
                Booking with Girls of Passion is simple, fast, and private. Our process is designed for adults who want clear information, quick response, and smooth coordination.
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
                Our support team helps with profile availability, location coordination, timing, and basic booking information. The entire process is direct, discreet, and easy to follow.
              </p>
            </div>

            {/* Privacy Standards */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security First</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy and Confidentiality Always Come First</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing a <strong className="text-white">Rishikesh escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
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
                Your privacy is handled carefully at every step so you can book with confidence and peace of mind.
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
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Rishikesh and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white">call girl Rishikesh</strong>, <strong className="text-white">Rishikesh call girl</strong>, <strong className="text-white">call girls service Rishikesh</strong>, or <strong className="text-white">Rishikesh call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a professional, privacy-focused, and respectful way.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Our platform is suitable for adults who want:
              </p>

              <ul className="mt-4 space-y-2.5">
                {[
                  'Verified companion profiles',
                  'Quick booking support',
                  'Private communication',
                  'Flexible timing',
                  'Rishikesh location coverage',
                  'Premium companion options',
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
                We focus on making the experience smooth, confidential, and convenient for adults looking for private companionship in Rishikesh.
              </p>
            </div>

            {/* Right Column: Local Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Familiarity</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Local Rishikesh Companion Options</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Local companion options can be useful in a destination like Rishikesh because locations are spread across different areas. A local companion may understand the city’s layout, resort zones, and travel-friendly locations better.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Travellers staying in Rishikesh',
                    'Weekend visitors',
                    'Private villa guests',
                    'Resort stays',
                    'Café outings',
                    'Short-duration companionship',
                    'Location-based availability',
                    'Relaxed social company'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our support team can help you check suitable options depending on profile availability and your preferred area.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Models, Support, and Pricing */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Premium Profiles */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Travel Profiles</span>
              <h3 className="mt-2 text-xl font-bold text-white">Premium Companion Profiles for Private Travel Experiences</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Rishikesh attracts travellers who want peaceful stays, premium surroundings, and personal comfort. Girls of Passion offers companion profiles suitable for different travel experiences and private occasions.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">You can choose from:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {[
                  'Premium companions',
                  'Independent-style companions',
                  'Local companion options',
                  'Modern companion profiles',
                  'Sophisticated companions',
                  'Travel-friendly companions',
                  'Private social companions',
                  'Resort-friendly companions'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="mt-2 text-xl font-bold text-white">24x7 Rishikesh Escort Service Support</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Even in a calm destination like Rishikesh, travel plans can change quickly. That is why Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Rishikesh.
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
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Clear Communication</span>
              <h3 className="mt-2 text-xl font-bold text-white">Transparent Pricing and Clear Communication</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">escort service Rishikesh</strong> should always provide clear details before booking. At Girls of Passion, we believe in transparent communication so clients can make informed decisions.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Pricing may depend on:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Companion category', 'Profile selection', 'Duration', 'Location', 'Timing', 'Special preferences', 'Availability'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Our team shares required details before confirmation. This avoids confusion and makes the booking experience smoother.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Private Villa & Resort / Unique Experience */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Villa and Resort */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Scenic Comforts</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Private Villa and Resort Companionship in Rishikesh</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Rishikesh is famous for private villas, riverside resorts, luxury retreats, and peaceful travel stays. Many clients prefer companionship that fits this calm and private environment.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Private villa and resort companionship is suitable for:</h4>
                <ul className="space-y-2">
                  {[
                    'Weekend getaways',
                    'Riverside stays',
                    'Luxury resort visits',
                    'Private social meetings',
                    'Dinner plans',
                    'Relaxed travel companionship',
                    'Personal company',
                    'Premium lifestyle experiences'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our team helps coordinate location and timing in a discreet and professional way.
              </p>
            </div>

            {/* Unique Experience of Rishikesh */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Destination Vibe</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Unique Experience of Rishikesh Companionship</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Rishikesh offers a different atmosphere compared to metro cities. The experience here is more private, relaxed, and travel-focused. From riverside views to villa stays and peaceful surroundings, Rishikesh creates a unique setting for premium adult companionship.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">What makes Rishikesh different:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Private resorts and villas',
                    'Riverside luxury stays',
                    'Peaceful natural surroundings',
                    'Weekend getaway culture',
                    'Less crowded premium locations',
                    'Exclusive travel atmosphere',
                    'Relaxed and personal experiences'
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

        {/* Section: Safe and Professional / Why Trusted */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Standards */}
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

            {/* Why trusted */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Trusted Partner</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Why Girls of Passion is a Trusted Name in Rishikesh</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion understands what travellers and private-stay guests actually want: privacy, reliability, smooth coordination, and genuine profiles. We focus on providing a professional platform that respects your time, comfort, and confidentiality.
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
                    'We support major Rishikesh locations',
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
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Best Call Girls Service in Rishikesh with Trust and Privacy</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Clients searching for the <strong className="text-white font-semibold">best Call Girls service in Rishikesh</strong> usually want reliability, privacy, genuine profiles, and clear communication. Girls of Passion is built around these expectations.
                  </p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-white mb-2 text-sm">We focus on:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {['Clear booking details', 'Verified profile options', 'Fast response', 'Private coordination', 'Professional handling', 'Respectful communication', 'Adult-only service standards'].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Our goal is to offer a comfortable and dependable platform for adults who want premium companionship with complete discretion.
                  </p>

                  <h3 className="mt-8 text-xl font-bold text-white">Experience Premium Companionship in Rishikesh Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white">Rishikesh escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, local, independent-style, modern, and travel-friendly companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for <strong className="text-white">best escort services Rishikesh</strong>, <strong className="text-white">escort service Rishikesh</strong>, <strong className="text-white">Trusted Call Girl Rishikesh</strong>, or private companion options near you, our team can help you check suitable available profiles based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Rishikesh Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Rishikesh Hotline</p>
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
              <a href="/rishikesh/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/rishikesh/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/rishikesh/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/rishikesh/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/rishikesh/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Rishikesh</p>
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

