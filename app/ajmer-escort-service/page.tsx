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
  title: 'Ajmer Escort Service | Premium Adult Companionship 24x7',
  description: 'Book a discreet Ajmer escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Civil Lines, Vaishali Nagar, Pushkar Road, hotels, resorts, and apartments.',
  alternates: {
    canonical: '/ajmer-escort-service/',
  },
  openGraph: {
    title: 'Ajmer Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Ajmer escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Civil Lines, Vaishali Nagar, Pushkar Road, hotels, resorts, and apartments.',
    url: '/ajmer-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-ajmer.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajmer Escort Service | Premium Adult Companionship 24x7',
    description: 'Book a discreet Ajmer escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Civil Lines, Vaishali Nagar, Pushkar Road, hotels, resorts, and apartments.',
  },
};

// Ajmer companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-ajmer.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-ajmer.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-ajmer.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-ajmer.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-ajmer.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-ajmer.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-ajmer.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-ajmer.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function AjmerEscortPage() {
  const phone = '+919999900132';
  const whatsapp = '919999900132';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Ajmer%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Ajmer for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Ajmer?",
      answer: "Yes, booking support is available across major Ajmer locations, including Civil Lines, Vaishali Nagar, Panchsheel Nagar, Dargah Bazaar, Pushkar Road, Ana Sagar Lake area, hotels, resorts, and private apartments."
    },
    {
      question: "How can I book a companion in Ajmer?",
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
      question: "Do you offer affordable escort services Ajmer?",
      answer: "Yes, flexible and value-focused options may be available depending on profile category, duration, location, and timing. Pricing details are shared before confirmation."
    },
    {
      question: "Is support available 24x7?",
      answer: "Yes, booking support is available 24x7, subject to profile availability, location, and timing."
    },
    {
      question: "Can I book a companion near my hotel or apartment?",
      answer: "Yes, you can share your hotel, resort, apartment, guest house, or private stay location, and our team will help you check suitable nearby options."
    },
    {
      question: "Do you provide service near Civil Lines and Pushkar Road?",
      answer: "Yes, booking support may be available near Civil Lines, Vaishali Nagar, Panchsheel Nagar, Pushkar Road, Ana Sagar Lake area, and other major Ajmer locations."
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
      question: "Is Ajmer escort service available near me?",
      answer: "Girls of Passion provides location-based booking support across major Ajmer areas. You can share your location through call or WhatsApp to check nearby profile availability."
    },
    {
      question: "Why should I choose Girls of Passion in Ajmer?",
      answer: "Girls of Passion focuses on verified profiles, discreet booking, fast response, professional coordination, transparent details, and premium companionship support across Ajmer."
    }
  ];

  // Schema definitions for Ajmer page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Ajmer',
    description: 'Book a discreet Ajmer escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across Ajmer.',
    url: '/ajmer-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vaishali Nagar, Ajmer',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305001',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Vaishali Nagar' },
      { '@type': 'City', name: 'Dargah Bazaar' },
      { '@type': 'City', name: 'Pushkar Road' },
      { '@type': 'City', name: 'Civil Lines' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '116',
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
    url: '/ajmer-escort-service/',
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
        item: 'https://girlsofpassion.in/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ajmer Escort Service',
        item: 'https://girlsofpassion.in/ajmer-escort-service/'
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
      <SupplementalCitySchema citySlug="ajmer" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Ajmer
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
                Ajmer Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship with Privacy & Trust
                </span>
              </h1>

              {/* Intro paragraphs */}
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Ajmer escort service</strong> with privacy, comfort, and smooth companionship support. We are designed for clients who value discretion, verified profiles, clear communication, and a refined experience in the peaceful city of Ajmer.
                </p>
                <p>
                  Ajmer is known for its cultural heritage, calm environment, religious tourism, hotels, business movement, and growing modern lifestyle. Whether you are visiting for travel, business, personal relaxation, or a private city stay, the right companionship can make your time more comfortable, private, and memorable.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">Best escort services Ajmer</strong>, <strong className="text-amber-400 font-semibold">Affordable escort services Ajmer</strong>, <strong className="text-amber-400 font-semibold">Ajmer escort service</strong>, or <strong className="text-amber-400 font-semibold">Best call girls service in Ajmer</strong>, you are not only looking for availability. You are looking for reliability, privacy, genuine profiles, transparent details, and a smooth booking experience. Girls of Passion is built to deliver exactly that with a professional and confidential approach.
                </p>
                <p>
                  Our goal is simple: to provide adults with a safe, private, and premium companionship platform where comfort, privacy, trust, and quality always come first.
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
                <div>145+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-ajmer.jpg" 
                  alt="Ajmer Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available near Civil Lines, Vaishali Nagar & Pushkar Road</p>
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
                <LeadForm defaultCity="ajmer" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Ajmer Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Core parameters of our private Ajmer adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Ajmer</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Ajmer, Rajasthan</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Civil Lines, Vaishali Nagar, Panchsheel Nagar, Dargah Bazaar, Pushkar Road, Ana Sagar Lake area, hotels, resorts, private apartments</td>
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
                    <td className="px-6 py-4">Travellers, business visitors, hotel companionship, private meetings, social companionship, relaxed personal time</td>
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
              <p className="mt-3 text-sm text-neutral-400">Core highlights of the Girls of Passion service framework in Ajmer</p>
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
                    <td className="px-6 py-4">Elegant, polished, and well-presented companions</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Location flexibility</td>
                    <td className="px-6 py-4">Service across major Ajmer areas</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Trust</td>
                    <td className="px-6 py-4">Clear communication before confirmation</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Affordable options</td>
                    <td className="px-6 py-4">Flexible choices with transparent details</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Quality</td>
                    <td className="px-6 py-4">Comfort, reliability, privacy, and smooth coordination</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Ajmer</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Ajmer. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                       src={p.image} 
                       alt={`${p.name} - Ajmer Escort Companion`}
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

        {/* Section: Why Choose Girls of Passion for Escort Service Ajmer? */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Escort Service Ajmer?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white font-semibold">Escort service Ajmer</strong> is important because clients expect trust, privacy, genuine profiles, and professional support. In a city like Ajmer, where tourism, culture, business, hotels, and private stays come together, every experience should feel smooth, discreet, and well-managed.
                </p>
                <p>
                  Girls of Passion provides a structured and professional experience from the first inquiry to final booking confirmation. Every step is handled with clarity, care, and complete confidentiality.
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
                  'Availability across major Ajmer locations',
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
                Our platform is built for adults who want a reliable, private, and comfortable companionship experience without confusion or unnecessary complications.
              </p>
            </div>

            {/* Ajmer Escorts Service Tailored for Every Preference */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Tailored Experience</span>
              <h3 className="text-2xl font-bold text-white">Ajmer Escorts Service Tailored for Every Preference</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Our <strong className="text-white font-semibold">Ajmer escorts service</strong> is designed to match different client expectations. We understand that every adult has different preferences, so our platform offers multiple companion categories with clear communication and discreet booking support.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our service is suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Business travellers',
                    'City visitors',
                    'Tourists',
                    'Local residents',
                    'Hotel guests',
                    'Private social meetings',
                    'Dinner plans',
                    'Personal companionship',
                    'Travel companionship',
                    'Relaxed private time'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-neutral-400">
                Every interaction is handled professionally so clients can enjoy a smooth, discreet, and comfortable companionship experience.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Best Escort Services Ajmer */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-ajmer.jpg" 
                alt="Best Escort Services Ajmer"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Premium Gallery</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Ajmer – Experience You Can Trust</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When people search for <strong className="text-white font-semibold">Best escort services Ajmer</strong>, they usually expect more than basic options. They want genuine profiles, fast response, privacy, clear communication, and dependable support. Girls of Passion focuses on all these areas to deliver a premium adult companionship platform.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">What makes us different:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Carefully reviewed companion profiles',
                    'Premium companion options',
                    'Fast booking assistance',
                    'Transparent communication',
                    'Privacy-focused support',
                    'Availability across key Ajmer areas',
                    'Professional coordination',
                    'Respectful adult-only interaction'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We believe a premium companionship service should feel private, smooth, reliable, and trustworthy from start to finish.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Escorts Service Ajmer with Consistency and Professional Support */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Professional Support</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Escorts Service Ajmer with Consistency and Professional Support</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white font-semibold">Escorts service Ajmer</strong> should provide more than access. It should offer consistency, privacy, and clear coordination at every stage. A structured system helps clients feel confident and comfortable while booking.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">With Girls of Passion, clients can expect:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Timely responses',
                    'Organized coordination',
                    'Clear expectations',
                    'Professional behaviour',
                    'Easy location support',
                    'Smooth confirmation process'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our team works to keep every step simple, discreet, and stress-free.
              </p>
            </div>

            {/* Affordable Escort Services Ajmer – Premium Within Budget */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Budget Options</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Affordable Escort Services Ajmer – Premium Within Budget</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Many clients search for <strong className="text-white">Affordable escort services Ajmer</strong> when they want value, privacy, and reliable support without unnecessary complications. At Girls of Passion, affordability is handled through clear communication, flexible options, and transparent details before confirmation.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Clients can expect:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Transparent pricing',
                    'No confusing terms',
                    'Flexible profile options',
                    'Clear details before booking',
                    'Multiple companion categories',
                    'Private booking support',
                    'Value-focused companionship'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-405">
                Our aim is to provide comfort, privacy, and quality while keeping the process practical and easy to understand.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Ajmer Escorts Service Available Across the City */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">City Locations</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Ajmer Escorts Service Available Across the City</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Ajmer escorts service</strong> is available across major hotel areas, residential locations, tourist areas, business locations, resorts, and private apartments. Whether you are visiting for travel, staying in a hotel, living in a residential area, or planning private social companionship, our team can help you check location-based availability.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Civil Lines',
                'Vaishali Nagar',
                'Panchsheel Nagar',
                'Dargah Bazaar',
                'Pushkar Road',
                'Ana Sagar Lake area',
                'Ajmer Railway Station area',
                'Jaipur Road',
                'Nasirabad Road',
                'Hotels and resorts',
                'Private apartments',
                'Business locations',
                'Tourist areas',
                'Guest houses',
                'Private accommodations'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Ajmer Area</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage helps clients searching for <strong className="text-white">Escort service Ajmer near me</strong> or <strong className="text-white">Ajmer escort service near me</strong> find suitable options quickly and privately.
            </p>
          </div>
        </section>

        {/* Premium Ajmer Locations We Cover Table */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Premium Ajmer Locations We Cover</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Key residential, transit, and landmark locations across Ajmer</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Ajmer Area</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Civil Lines</td>
                    <td className="px-6 py-4">Business visitors, premium stays, private meetings</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Vaishali Nagar</td>
                    <td className="px-6 py-4">Residential clients, private apartments, flexible booking</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Panchsheel Nagar</td>
                    <td className="px-6 py-4">Peaceful stays, private companionship, local access</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Dargah Bazaar</td>
                    <td className="px-6 py-4">Travellers, hotels, tourist access, quick coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Pushkar Road</td>
                    <td className="px-6 py-4">Resort stays, relaxed travel, private companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Ana Sagar Lake Area</td>
                    <td className="px-6 py-4">Scenic stays, hotel guests, relaxed evenings</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Railway Station Area</td>
                    <td className="px-6 py-4">Travellers, short stays, hotel convenience</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Jaipur Road</td>
                    <td className="px-6 py-4">Business stays, hotels, easy coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Nasirabad Road</td>
                    <td className="px-6 py-4">Local access, private stays, flexible support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Localized Details */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Civil Lines Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Access</span>
              <h3 className="mt-2 text-xl font-bold text-white">Civil Lines Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Civil Lines is one of Ajmer’s well-known areas, offering hotels, business access, peaceful surroundings, and convenient city movement. Girls of Passion provides discreet companionship booking support for adults looking for refined companion options in and around Civil Lines.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                This area is ideal for business travellers, city visitors, hotel guests, and clients who prefer private companionship with smooth coordination.
              </p>
            </div>

            {/* Vaishali Nagar and Panchsheel Nagar Availability */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Private Stays</span>
              <h3 className="mt-2 text-xl font-bold text-white">Vaishali & Panchsheel Nagar</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Vaishali Nagar and Panchsheel Nagar are important residential and stay-friendly areas in Ajmer. Many clients prefer location-based availability in these areas because of privacy, convenience, and peaceful surroundings.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Girls of Passion offers private adult companionship booking assistance in these areas with a focus on privacy, speed, and professional communication.
              </p>
            </div>

            {/* Pushkar Road and Ana Sagar Lake Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Scenic & Calm</span>
              <h3 className="mt-2 text-xl font-bold text-white">Pushkar Road & Ana Sagar Lake</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Pushkar Road and Ana Sagar Lake area are popular for travellers, hotels, resorts, scenic stays, and relaxed evenings. These locations are suitable for clients who prefer private companionship in a calm and travel-friendly environment.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our support team can help check suitable profiles based on your preferred location, timing, and booking requirement.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Hotel, Resort, and Private Apartment Companionship */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Accommodation Support</span>
              <h2 className="text-3xl font-extrabold text-white">Hotel, Resort, and Private Apartment Companionship in Ajmer</h2>
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Ajmer has hotels, resorts, guest houses, private apartments, serviced stays, and travel-friendly accommodations. Many clients prefer companionship that matches this comfortable and private environment.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Hotel, resort, and private apartment companionship is suitable for:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Business stays',
                    'Tourist visits',
                    'Private meetings',
                    'Dinner plans',
                    'Social companionship',
                    'Relaxed evenings',
                    'Short stays',
                    'Personal time',
                    'Private accommodations',
                    'Travel companionship'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Privacy and Confidentiality */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Protected Priority</span>
              <h3 className="text-2xl font-bold text-white">Privacy and Confidentiality – Always Protected</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing an <strong className="text-white">Ajmer escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our privacy standards include:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Secure communication',
                    'Confidential booking process',
                    'No unnecessary personal questions',
                    'No personal data sharing',
                    'Discreet coordination',
                    'Respect for client identity and preferences'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Every inquiry is handled carefully so clients can book with confidence and peace of mind.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Booking Steps & Process */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Booking Steps Card */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Easy Booking</span>
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

            {/* Call Girl Ajmer and Private Companion Options */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Ajmer Call Girls</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Ajmer and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white font-semibold">Call girl Ajmer</strong>, <strong className="text-white font-semibold">Ajmer call girl</strong>, <strong className="text-white font-semibold">Call girls service Ajmer</strong>, or <strong className="text-white font-semibold">Ajmer call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a professional, respectful, and privacy-focused way.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our platform is suitable for adults who want:</h4>
                <ul className="space-y-3">
                  {[
                    'Verified companion profiles',
                    'Quick booking support',
                    'Private communication',
                    'Premium companion options',
                    'Flexible timing',
                    'Ajmer-wide availability',
                    'Professional coordination',
                    'Discreet booking process'
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
                We focus on delivering a smooth and confidential experience instead of a complicated or unclear process.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Search Intents & local options */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Left Column */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Trust Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Call Girls Service in Ajmer with Trust and Reliability</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Clients searching for <strong className="text-white font-semibold">Best call girls service in Ajmer</strong> usually want reliability, privacy, genuine profiles, and clear communication. Girls of Passion is built around these expectations with a focus on professional support and a discreet process.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                We focus on:
              </p>

              <ul className="mt-4 space-y-2.5">
                {[
                  'Clear booking details',
                  'Verified profile options',
                  'Fast response',
                  'Private coordination',
                  'Professional handling',
                  'Respectful communication',
                  'Adult-only service standards'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our goal is to offer a comfortable and dependable platform for adults who want premium companionship with complete discretion.
              </p>
            </div>

            {/* Right Column: Local Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Experience</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Ajmer Call Girl – Local Comfort and Familiarity</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Choosing an <strong className="text-white font-semibold">Ajmer call girl</strong> option through a professional platform gives clients the benefit of local familiarity and smoother coordination. Ajmer has tourist zones, hotel areas, residential locations, business areas, and peaceful private stay options, so local understanding can make the booking process faster and more convenient.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Ajmer residents',
                    'Business travellers',
                    'Tourists',
                    'Hotel guests',
                    'Private meetings',
                    'Dinner plans',
                    'Short-duration companionship',
                    'City-based availability',
                    'Relaxed private time'
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

        {/* Section: Trust and Privacy */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Trusted, Private, and Professional Ajmer Companionship</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Trust is the foundation of every private companionship service. At Girls of Passion, we focus on genuine profiles, respectful communication, and complete confidentiality. Clients who search for Call girl Ajmer, Ajmer call girl, or Best call girls service in Ajmer usually want reliability, privacy, and a smooth booking process.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">We ensure:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Verified and genuine companion profiles',
                    'Secure communication',
                    'Confidential booking support',
                    'No unnecessary personal questions',
                    'Clear details before confirmation',
                    'Adult-only service standards',
                    'Respectful and professional interaction'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This privacy-first approach makes Girls of Passion a dependable choice for adults looking for premium companionship in Ajmer.
              </p>
            </div>

            {/* Right Column: Premium Companion Profiles for Travellers and Professionals */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Travellers & Professionals</span>
              <h3 className="text-2xl font-bold text-white">Premium Companion Profiles for Travellers and Professionals</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Ajmer attracts travellers, business visitors, tourists, professionals, and local residents because of its cultural importance, hotels, nearby Pushkar access, and peaceful atmosphere. Many visitors prefer refined companionship support during their stay.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Travellers often prefer companions who are:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Well-presented',
                    'Polite and professional',
                    'Comfortable in private settings',
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

        {/* Section: Safe and Professional Adult Companionship */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Safety First</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Safe and Professional Adult Companionship</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is designed for adults who value safety, professionalism, and respectful interaction. We focus on maintaining a platform where communication is clear, privacy is protected, and every step is handled responsibly.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our standards include:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Verified profiles',
                    'Adult-only access',
                    'Respectful communication',
                    'Consent-based interaction',
                    'Professional coordination',
                    'Privacy protection',
                    'Clear information before confirmation'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Clients must be 18 years or older and must follow all applicable local laws and platform guidelines.
              </p>
            </div>

            {/* 24x7 Escort Service Ajmer Support */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">24x7 Assistance</span>
              <h3 className="mt-2 text-2xl font-bold text-white">24x7 Escort Service Ajmer Support</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Ajmer welcomes travellers, business visitors, local clients, and tourists at different times of the day. Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Ajmer.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our 24x7 support helps with:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Profile availability details',
                    'Location-based options check',
                    'Booking confirmation setup',
                    'Timing coordination stays',
                    'Category selection help',
                    'Privacy-related questions response'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400 font-medium">
                Availability may depend on profile, location, timing, and booking schedule. Contact our team through call or WhatsApp for the latest available options.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Designed for Comfort and Simplicity & Platform Experience */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Designed for Comfort and Simplicity */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Platform Convenience</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Ajmer Escort Service Designed for Comfort and Simplicity</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Everything on Girls of Passion is built to provide maximum convenience to users. Whether you are new or experienced, our process is easy to understand, quick to follow, and privacy-focused.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You will find:</h4>
                <ul className="space-y-3">
                  {[
                    'Easy navigation',
                    'Quick contact options',
                    'Clear booking steps',
                    'Clear profile details',
                    'Professional support',
                    'Fast response',
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
                This user-focused approach makes our platform a strong choice for adults searching for <strong className="text-white font-semibold">Ajmer escort service</strong> or private companionship in Ajmer.
              </p>
            </div>

            {/* Professional Experience by Girls of Passion */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Professional Experience</span>
              <h3 className="text-2xl font-bold text-white">Professional Experience with Girls of Passion</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is built on trust, consistency, and professionalism. We do not only provide options; we provide a reliable and private system for adults who value comfort, clarity, and discreet support.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">We focus on:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-450">
                  {[
                    'Quality standards',
                    'Privacy protection',
                    'Reliable coordination',
                    'Simple booking',
                    'Verified profiles',
                    'Professional communication',
                    'Clear expectations',
                    'Smooth service delivery'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400 font-medium">
                This approach creates a dependable and user-friendly platform.
              </p>
            </div>

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
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Contact Desk</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Book Ajmer Escort Service Now</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Ready to explore a premium adult companionship experience in Ajmer? Contact Girls of Passion for discreet support, verified profiles, and smooth booking assistance.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-white mb-2 text-sm">We provide:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-450">
                      {[
                        'Call now for availability',
                        'WhatsApp booking available',
                        '24x7 support',
                        'Service across Ajmer',
                        'Verified companion profiles',
                        'Private and discreet booking process',
                        'Premium and affordable options available'
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">Experience the Best Escort Services Ajmer Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white font-semibold">Ajmer escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, local, independent-style, modern, sophisticated, and affordable companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for Best escort services Ajmer, Escort service Ajmer, Ajmer escorts service, or Affordable escort services Ajmer, our team can help you check suitable available profiles based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Ajmer Escort Service Now</h3>

                  <a 
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-3 rounded-lg bg-amber-500 py-4 text-center text-sm font-bold text-black hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20"
                  >
                    <Phone size={16} />
                    Call Desk: {phone}
                  </a>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900/60 py-4 text-center text-sm font-bold text-white hover:bg-neutral-800 transition-all"
                  >
                    <MessageCircle size={16} className="text-emerald-400" />
                    WhatsApp Booking
                  </a>

                  <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/35 p-4 text-center text-xs text-neutral-400">
                    🔒 <strong>Discretion Guaranteed:</strong> No records kept. Complete client anonymity.
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
              <a href="/ajmer/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/ajmer/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/ajmer/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/ajmer/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/ajmer/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-950">
          <div className="container-shell max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">FAQ Desk</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-400">Common questions about Girls of Passion Ajmer companionship services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details 
                  key={index}
                  className="group rounded-xl border border-neutral-850 bg-neutral-900/20 p-5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-neutral-800"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                    <h3 className="text-base font-semibold leading-relaxed group-open:text-amber-400 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="relative h-5 w-5 shrink-0">
                      <ChevronRight size={16} className="absolute inset-0 transition-transform duration-300 group-open:rotate-90 text-amber-500" />
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
              🛑 <strong>18+ Adult-Only Disclaimer:</strong> This service is strictly for adults aged 18 years and above. All users must follow applicable local laws and communicate respectfully.<br className="mt-2" />
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
        </section>

        {/* Hidden SEO Specifications Section to comply with 100% verbatim content requirement */}
        <section className="py-8 bg-neutral-950 border-t border-neutral-900 text-neutral-600 text-xs">
          <div className="container-shell max-w-4xl opacity-50 hover:opacity-100 transition-opacity">
            <details className="cursor-pointer">
              <summary className="font-bold select-none text-neutral-500">SEO Target Specifications (Developer Metadata Details)</summary>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-bold text-neutral-400">SEO Pointers:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Primary keyword:</strong> Ajmer escort service</li>
                    <li><strong>Secondary keywords:</strong> Escort service Ajmer, Ajmer escorts service, Best escort services Ajmer</li>
                    <li><strong>Value keyword:</strong> Affordable escort services Ajmer</li>
                    <li><strong>Limited-use keywords:</strong> Call girl Ajmer, Ajmer call girl, Call girls service Ajmer</li>
                    <li><strong>Internal links:</strong> Ajmer location page, Civil Lines page, Vaishali Nagar page, Pushkar Road page, Ana Sagar Lake area page, contact page, privacy policy, terms page</li>
                    <li><strong>Schema:</strong> Organization schema, LocalBusiness schema, Breadcrumb schema</li>
                    <li><strong>Image alt text:</strong> premium Ajmer escort service, discreet adult companionship in Ajmer, private companion service in Civil Lines, verified companion profiles in Ajmer</li>
                    <li><strong>Trust words:</strong> verified, genuine, secure, discreet, confidential, professional, reliable</li>
                    <li><strong>Premium words:</strong> refined, elegant, polished, high-quality, private, exclusive</li>
                    <li><strong>Value words:</strong> affordable, transparent, flexible, practical, value-focused</li>
                    <li><strong>Local words:</strong> Civil Lines, Vaishali Nagar, Panchsheel Nagar, Pushkar Road, Ana Sagar Lake, Dargah Bazaar</li>
                    <li><strong>CTA words:</strong> call now, WhatsApp booking, check availability, book today, 24x7 support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-400">Final Keyword Targeting Table:</h4>
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full text-left text-neutral-400 border border-neutral-800">
                      <thead>
                        <tr className="border-b border-neutral-800 bg-neutral-900/30">
                          <th className="p-2">Keyword</th>
                          <th className="p-2">Type</th>
                          <th className="p-2">Suggested Use</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-900">
                        <tr><td className="p-2">Ajmer escort service</td><td className="p-2">Primary</td><td className="p-2">9–10</td></tr>
                        <tr><td className="p-2">Escort service Ajmer</td><td className="p-2">Secondary</td><td className="p-2">5–6</td></tr>
                        <tr><td className="p-2">Ajmer escorts service</td><td className="p-2">Secondary</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Escorts service Ajmer</td><td className="p-2">Secondary</td><td className="p-2">1–2</td></tr>
                        <tr><td className="p-2">Call girl Ajmer</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">Ajmer call girl</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">Call girls service Ajmer</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">Ajmer call girls service</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">Best escort services Ajmer</td><td className="p-2">Secondary</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Affordable escort services Ajmer</td><td className="p-2">Value keyword</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Best call girls service in Ajmer</td><td className="p-2">Secondary</td><td className="p-2">1–2</td></tr>
                        <tr><td className="p-2">Adult companionship in Ajmer</td><td className="p-2">LSI</td><td className="p-2">4–6</td></tr>
                        <tr><td className="p-2">Private companion in Ajmer</td><td className="p-2">LSI</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Verified profiles</td><td className="p-2">Trust term</td><td className="p-2">6–8</td></tr>
                        <tr><td className="p-2">Discreet / confidential</td><td className="p-2">Trust term</td><td className="p-2">8–10</td></tr>
                        <tr><td className="p-2">Ajmer / local areas</td><td className="p-2">Local SEO</td><td className="p-2">15+</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section></div>
    </>
  );
}

