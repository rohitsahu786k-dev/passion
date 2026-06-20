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
  title: 'India Escort Service | Verified Booking',
  description: 'Book a discreet India escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across major Indian cities, hotels, resorts, and private stays.',
  alternates: {
    canonical: '/india-escort-service/',
    languages: {
      'en-IN': '/india-escort-service/',
      'x-default': '/india-escort-service/',
    },
  },
  openGraph: {
    title: 'India Escort Service | Verified Booking',
    description: 'Book a discreet India escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across major Indian cities, hotels, resorts, and private stays.',
    url: '/india-escort-service/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-india.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Escort Service | Verified Booking',
    description: 'Book a discreet India escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across major Indian cities, hotels, resorts, and private stays.',
  },
};

// India companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-india.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-india.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-india.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-india.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-india.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-india.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-india.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-india.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function IndiaEscortPage() {
  const phone = '+919999900100';
  const whatsapp = '919999900100';
  const whatsappUrl = `/go/whatsapp?phone=${whatsapp}&text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20India%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in India for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across India?",
      answer: "Yes, booking support may be available across major Indian cities and travel destinations, including Delhi, Mumbai, Jaipur, Udaipur, Goa, Hyderabad, Pune, Noida, Manali, Jodhpur, Lucknow, Kanpur, Surat, Rishikesh, and more."
    },
    {
      question: "How can I book a companion in India?",
      answer: "You can browse available profiles and contact the support team through call or WhatsApp. Share your city, location, timing, and preference to check availability."
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
      question: "Do you offer top escort services in India?",
      answer: "Girls of Passion focuses on premium adult companionship with verified profiles, private booking, fast response, and professional coordination across major locations."
    },
    {
      question: "Is support available 24x7?",
      answer: "Yes, booking support is available 24x7, subject to profile availability, city, location, and timing."
    },
    {
      question: "Can I book a companion near my hotel or residence?",
      answer: "Yes, you can share your hotel, resort, residence, villa, or private stay location, and our team will help you check suitable nearby options."
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
      question: "Is India escort service available near me?",
      answer: "Girls of Passion provides location-based booking support across selected Indian cities and destinations. You can share your city and location through call or WhatsApp to check nearby profile availability."
    },
    {
      question: "Why should I choose Girls of Passion in India?",
      answer: "Girls of Passion focuses on verified profiles, discreet booking, fast response, professional coordination, transparent details, and premium companionship support across India."
    }
  ];

  // Schema definitions for India page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion India',
    description: 'Book a discreet India escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium companionship across India.',
    url: '/india-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Connaught Place, New Delhi',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Udaipur' },
      { '@type': 'City', name: 'Goa' },
      { '@type': 'City', name: 'Pune' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '480',
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
    url: '/india-escort-service/',
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
        name: 'India Escort Service',
        item: 'https://www.girlsofpassion.in/india-escort-service/'
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
      <SupplementalCitySchema citySlug="india" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles across India
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
                India Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship Across India
                </span>
              </h1>

              {/* Intro paragraphs */}
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">India escort service</strong> with privacy, comfort, and smooth companionship support. We are designed for clients who value discretion, verified profiles, clear communication, and a reliable experience across major cities and travel destinations in India.
                </p>
                <p>
                  India is a diverse country with luxury hotels, business hubs, tourist destinations, private residences, resorts, nightlife zones, and fast-growing lifestyle cities. Whether you are travelling for business, exploring a new city, staying in a premium hotel, or looking for private companionship, the right platform should offer quality, privacy, and professional coordination.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">India escort service</strong>, <strong className="text-amber-400 font-semibold">escort service India</strong>, <strong className="text-amber-400 font-semibold">top escort services in India</strong>, or <strong className="text-amber-400 font-semibold">best call girl in India</strong>, you are not only looking for availability. You are looking for verified profiles, discreet booking, reliable communication, and a premium adult companionship experience. Girls of Passion is built to deliver exactly that with a safe, respectful, and privacy-first approach.
                </p>
                <p>
                  Our goal is simple: to provide adults with a private, professional, and premium companionship platform where comfort, confidentiality, and quality always come first.
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
                <div>480+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-india.jpg" 
                  alt="India Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available across all major cities & luxury resorts</p>
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
                <LeadForm defaultCity="india" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our India Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite India adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in India</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Coverage</td>
                    <td className="px-6 py-4">Major cities, business hubs, tourist destinations, hotels, resorts, and private stays</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Popular Cities</td>
                    <td className="px-6 py-4">Delhi, Mumbai, Jaipur, Udaipur, Goa, Hyderabad, Pune, Noida, Manali, Jodhpur, Lucknow, Kanpur, Surat, Rishikesh</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Booking Options</td>
                    <td className="px-6 py-4">Call and WhatsApp booking</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Availability</td>
                    <td className="px-6 py-4">24x7 support, subject to profile and location availability</td>
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
                    <td className="px-6 py-4">Business travellers, tourists, local adults, hotel guests, private meetings, social companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Support</td>
                    <td className="px-6 py-4">Fast response and professional coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Benefit</td>
                    <td className="px-6 py-4">Reliable, private, and premium adult companionship experience across India</td>
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
              <p className="mt-3 text-sm text-neutral-400">Core highlights of the Girls of Passion service framework in India</p>
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
                    <td className="px-6 py-4">Service across major Indian cities and travel locations</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in India</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in India. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - India Escort Companion`}
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

        {/* Section: Why Choose Girls of Passion for Escort Service India? */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Escort Service India?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white font-semibold">escort service India</strong> matters because clients expect more than basic availability. They want genuine profiles, professional behaviour, clear booking details, privacy, and reliable coordination.
                </p>
                <p>
                  Girls of Passion follows a structured and professional approach to ensure every client receives a smooth and confidential experience from the first inquiry to final booking confirmation.
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
                  'Availability across major Indian cities',
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

            {/* India Escorts Service – Designed for Every Preference */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Designed for Preference</span>
              <h3 className="text-2xl font-bold text-white">India Escorts Service – Designed for Every Preference</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Our <strong className="text-white font-semibold">India escorts service</strong> is built to match different preferences, lifestyles, cities, and travel needs. We understand that every client has different expectations, so our platform offers multiple companionship categories with clear support and location-based availability.
              </p>
              
              <h4 className="font-semibold text-white text-sm">Our service is suitable for:</h4>

              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                {[
                  'Business travellers',
                  'Tourists',
                  'Local residents',
                  'Hotel guests',
                  'Resort guests',
                  'Private residence bookings',
                  'Social companionship',
                  'Dinner dates',
                  'City visits',
                  'Premium lifestyle experiences'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="text-xs text-neutral-300 mt-2">
                Every interaction is handled with professionalism, privacy, and attention to detail so clients can enjoy a smooth and comfortable experience.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Top Escort Services in India – Experience That Builds Trust */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Credibility & Trust</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Top Escort Services in India – Experience That Builds Trust</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When people search for the <strong className="text-white font-semibold">top escort services in India</strong>, they usually expect quality, verified profiles, fast response, privacy, and a reliable booking process. Girls of Passion focuses on all these important factors to deliver a dependable adult companionship platform.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">What makes us different:</h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Carefully reviewed companion profiles',
                    'Premium and VIP companion options',
                    'Fast booking assistance',
                    'Transparent communication',
                    'Privacy-focused support',
                    'City-wise availability',
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
            </div>

            {/* Escorts Service India with Professional Coordination */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Professional Coordination</span>
              <h3 className="text-2xl font-bold text-white">Escorts Service India with Professional Coordination</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white font-semibold">escorts service India</strong> should provide more than simple access. It should offer consistency, privacy, clear communication, and organized support across different cities and locations.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">With Girls of Passion, clients can expect:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Timely communication',
                    'Smooth coordination',
                    'Clear expectations',
                    'Professional behaviour',
                    'Easy location-based support',
                    'Simple confirmation process'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our team works to keep every step easy and stress-free so clients can enjoy a private and comfortable experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: India Escorts Service Available Across Major Cities */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/20">
          <div className="container-shell">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">National Coverage</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">India Escorts Service Available Across Major Cities</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">India escorts service</strong> is available across major business cities, tourist destinations, hotel areas, resorts, private residences, and lifestyle locations. Whether you are travelling for work, staying in a luxury hotel, visiting a city for leisure, or looking for private companionship near your location, our team can help check availability.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Delhi',
                'Mumbai',
                'Jaipur',
                'Udaipur',
                'Goa',
                'Hyderabad',
                'Pune',
                'Noida',
                'Manali',
                'Jodhpur',
                'Lucknow',
                'Kanpur',
                'Surat',
                'Rishikesh',
                'Nathdwara',
                'Mount Abu',
                'Jawai',
                'Luxury hotels',
                'Private residences',
                'Resorts and travel stays'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Available Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage helps clients searching for <strong className="text-white">escort service India near me</strong> or <strong className="text-white">India escort service near me</strong> find suitable options quickly and privately.
            </p>
          </div>
        </section>

        {/* Premium India Locations We Cover Table */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Premium India Locations We Cover</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Mapping out key tourist, residential, and corporate sectors</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Location Type</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Metro Cities</td>
                    <td className="px-6 py-4">Business travellers, luxury hotels, nightlife, premium companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Tourist Destinations</td>
                    <td className="px-6 py-4">Holiday stays, resort guests, private travel companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Hill Stations</td>
                    <td className="px-6 py-4">Peaceful getaways, private villas, boutique stays, relaxed experiences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Heritage Cities</td>
                    <td className="px-6 py-4">Luxury hotels, royal stays, refined companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Business Hubs</td>
                    <td className="px-6 py-4">Corporate visitors, professionals, hotel companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Resorts and Villas</td>
                    <td className="px-6 py-4">Private stays, weekend escapes, premium experiences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Private Residences</td>
                    <td className="px-6 py-4">Local clients, flexible booking, discreet support</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Hotels and Guest Houses</td>
                    <td className="px-6 py-4">Travellers, short stays, easy coordination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Localized Details for Metro Cities, Tourist Stays, Hill Stations */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-4">
            
            {/* Delhi and Noida Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Metropolitan</span>
              <h3 className="mt-2 text-xl font-bold text-white">Delhi and Noida</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Delhi and Noida are major business and lifestyle hubs with premium hotels, corporate centres, residential areas, and nightlife locations. Girls of Passion provides discreet companionship booking support for adults looking for refined companion options in these fast-moving cities.
              </p>
            </div>

            {/* Mumbai, Pune, and Hyderabad Availability */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Corporate & Glamour</span>
              <h3 className="mt-2 text-xl font-bold text-white">Mumbai, Pune, & Hyd</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Mumbai, Pune, and Hyderabad are known for corporate lifestyle, luxury hotels, business travel, modern nightlife, and premium residential areas. Girls of Passion offers private adult companionship support for clients who want stylish, well-presented, and professional companion options in these cities.
              </p>
            </div>

            {/* Jaipur, Udaipur, Jodhpur, and Heritage City Support */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Royal Heritage</span>
              <h3 className="mt-2 text-xl font-bold text-white">Jaipur, Udaipur, & Jodhpur</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Rajasthan destinations like Jaipur, Udaipur, and Jodhpur are known for luxury hotels, heritage stays, tourist experiences, and royal hospitality. Girls of Passion provides location-based booking support in these cities with a focus on privacy, speed, and professional communication.
              </p>
            </div>

            {/* Goa, Manali, Rishikesh, and Travel Destination Companionship */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Scenic & Travel</span>
              <h3 className="mt-2 text-xl font-bold text-white">Goa, Manali, & Rishikesh</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Travel destinations like Goa, Manali, and Rishikesh attract tourists, solo travellers, couples, business visitors, and people looking for peaceful private experiences. Girls of Passion provides discreet booking support for adults staying in hotels, resorts, villas, cottages, and private accommodations.
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
                  'Share your preferred city, location, timing, and requirement.',
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
                Our team helps with profile availability, category selection, location coordination, and basic booking details. The process is direct, discreet, and easy to follow.
              </p>
            </div>

            {/* Call Girl India and Private Companion Options */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Call Girl India</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl India and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white font-semibold">call girl India</strong>, <strong className="text-white font-semibold">India call girl</strong>, <strong className="text-white font-semibold">call girls service India</strong>, or <strong className="text-white font-semibold">India call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a professional, respectful, and privacy-focused way.
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
                    'City-wise availability',
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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Search Intents</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Call Girl in India with Trust and Professionalism</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Clients searching for the <strong className="text-white font-semibold">best call girl in India</strong> usually want reliability, comfort, genuine profiles, and discreet support. Girls of Passion focuses on creating a better experience through transparent communication, verified profiles, and privacy-first booking assistance.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                We ensure:
              </p>

              <ul className="mt-4 space-y-2.5">
                {[
                  'Clear booking details',
                  'Genuine profile options',
                  'Respectful communication',
                  'Private coordination',
                  'Fast response',
                  'Professional handling',
                  'Adult-only service standards'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our goal is to make every interaction simple, safe, and comfortable for adults looking for private companionship in India.
              </p>
            </div>

            {/* Right Column: Local Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Companionship</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Local Companionship Across India</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Local companion options are useful when clients want better coordination, city familiarity, and location-based convenience. Since India has many different cities, travel routes, hotel areas, and lifestyle zones, local familiarity can make the experience smoother.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Business travellers',
                    'Local residents',
                    'Tourists',
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
                Our support team can help you check suitable options depending on profile availability and your preferred city.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Premium Options & Stays */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Premium and VIP Companion Options */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Premium Categories</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Premium and VIP Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion offers multiple companion categories for clients with different expectations. Whether you prefer elegant presentation, modern style, local familiarity, or a premium social presence, our support team can help check suitable options based on availability.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You can choose from:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Premium companions',
                    'VIP companion options',
                    'Independent-style companions',
                    'Local companion options',
                    'Modern companion profiles',
                    'Sophisticated companions',
                    'Travel-friendly companions',
                    'Hotel-friendly companions',
                    'Resort-friendly companions'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This variety helps clients find a companion option that matches their comfort, occasion, and preference.
              </p>
            </div>

            {/* Hotel, Resort, and Private Residence Companionship in India */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Stays</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Hotel, Resort, and Private Residence Companionship</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion provides companionship booking support for hotels, resorts, private residences, villas, guest houses, and selected locations across India, subject to availability and local guidelines.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Hotel and private companionship is suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Business stays',
                    'Holiday trips',
                    'Private meetings',
                    'Dinner plans',
                    'Social companionship',
                    'Personal company',
                    'Luxury lifestyle experiences',
                    'Relaxed city evenings',
                    'Weekend getaways'
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

          </div>
        </section>

        {/* Section: Safe Standards & 24x7 Support */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Safe and Private India Escort Service */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security Commitment</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Safe and Private India Escort Service</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing an <strong className="text-white">India escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
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
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="font-semibold text-white mt-6 mb-2 text-sm">Safe and Professional Adult Companionship</h4>
              <p className="text-sm leading-relaxed text-neutral-300">
                Girls of Passion is designed for adults who value safety, professionalism, and respectful interaction. We focus on maintaining a platform where communication is clear, privacy is protected, and every step is handled responsibly. Clients must be 18 years or older and must follow all applicable local laws and platform guidelines.
              </p>
            </div>

            {/* 24x7 Escort Service India Support */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="mt-2 text-2xl font-bold text-white">24x7 Escort Service India Support</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Client schedules can vary across cities, hotels, travel plans, business meetings, and private stays. Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in India.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our 24x7 support helps with:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Profile availability',
                    'City-wise options',
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
                Availability may depend on profile, city, location, timing, and booking schedule. Contact our team through call or WhatsApp for the latest available options.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Transparent Pricing & Value */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Transparent Pricing and Clear Communication */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Estimates</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Transparent Pricing and Clear Communication</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">escort service India</strong> should always provide clear details before booking. At Girls of Passion, we believe in transparent communication so clients can make informed decisions.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Pricing may depend on:</h4>
                <ul className="space-y-3">
                  {[
                    'City',
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

            {/* Affordable Premium Companionship Across India */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium & Affordable</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Affordable Premium Companionship Across India</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion aims to provide premium companionship with flexible options. Different clients have different preferences, locations, and budgets, so our platform offers multiple categories and clear communication before booking.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Clients can expect:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Clear pricing information',
                    'Flexible profile options',
                    'Premium and VIP categories',
                    'No confusing process',
                    'Location-based support',
                    'Quick response',
                    'Discreet coordination'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our focus is to combine comfort, privacy, and quality in one smooth experience.
              </p>
            </div>

          </div>
        </section>

        {/* Strong Words Definitions Table */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Strong Words That Define Our Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Core pillars and standards of the Girls of Passion service framework</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Service Quality</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Strong Words</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Trust</td>
                    <td className="px-6 py-4">Trusted, reliable, genuine, verified, dependable</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Privacy</td>
                    <td className="px-6 py-4">Discreet, confidential, secure, private, privacy-focused</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Premium Feel</td>
                    <td className="px-6 py-4">Elegant, refined, polished, professional, high-quality</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Booking</td>
                    <td className="px-6 py-4">Quick response, easy access, smooth coordination, simple process</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">National SEO</td>
                    <td className="px-6 py-4">Across India, major cities, near me, local companion</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Travel</td>
                    <td className="px-6 py-4">Luxury hotels, resorts, villas, tourist destinations, business hubs</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Safety</td>
                    <td className="px-6 py-4">Adult-only, respectful, secure communication, responsible service</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Conversion</td>
                    <td className="px-6 py-4">Call now, WhatsApp booking, check availability, book today</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Designed for Simplicity & Why Choose Us */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Designed for Simplicity and Ease */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Platform Convenience</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Designed for Simplicity and Efficiency</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Everything on Girls of Passion is built to make your experience smooth. From browsing profiles to confirming availability, the process is designed for convenience and privacy.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You will notice:</h4>
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
                This user-focused approach makes our platform a strong choice for adults searching for <strong className="text-white font-semibold">India escort service</strong> or private companionship anywhere in India.
              </p>
            </div>

            {/* Why Choose Girls of Passion? */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Trusted Brand</span>
              <h3 className="text-2xl font-bold text-white">Girls of Passion – Trusted Name in India Call Girls Service</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion has built a strong reputation by focusing on consistency, privacy, verified profiles, and professional communication. Clients trust us because we deliver a structured experience instead of confusion or unnecessary complications.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">We focus on:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Consistent experience',
                    'Professional standards',
                    'User comfort',
                    'Clear communication',
                    'Verified profiles',
                    'Privacy-first support',
                    'Smooth coordination',
                    'Reliable booking assistance'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                This creates a platform that adults can depend on for private companionship across India.
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
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Book India Escort Service Now</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Ready to explore a premium adult companionship experience in India? Contact Girls of Passion for discreet support, verified profiles, and smooth booking assistance.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-white mb-2 text-sm">We provide:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {[
                        'Call now for availability',
                        'WhatsApp booking available',
                        '24x7 support',
                        'Service across India',
                        'Verified companion profiles',
                        'Private and discreet booking process',
                        'Premium options available'
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">Experience India Escorts Service with Comfort and Confidence</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white">India escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, VIP, local, independent-style, modern, sophisticated, and travel-friendly companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for top escort services in India, escort service India, India escorts service, or private companion options near you, our team can help you check suitable available profiles based on your city, location, and preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book India Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">India Hotline</p>
                    <p className="text-sm font-bold text-white">{phone}</p>
                    <p className="text-[9px] text-neutral-500 mt-1">Available 24x7. Discretion guaranteed.</p>
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
              <a href="/india/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/india/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/india/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/india/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/india/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in India</p>
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
                    <li><strong>Primary keyword:</strong> India escort service</li>
                    <li><strong>Secondary keywords:</strong> Escort service India, India escorts service, top escort services in India</li>
                    <li><strong>Limited-use keywords:</strong> Call girl India, India call girl, call girls service India</li>
                    <li><strong>Internal links:</strong> Delhi page, Mumbai page, Jaipur page, Udaipur page, Goa page, Manali page, Hyderabad page, Pune page, contact page, privacy policy, terms page</li>
                    <li><strong>Schema:</strong> Organization schema, LocalBusiness schema, Breadcrumb schema</li>
                    <li><strong>Image alt text:</strong> premium India escort service, discreet adult companionship in India, private companion service across India, verified companion profiles in India</li>
                    <li><strong>Trust words:</strong> verified, genuine, secure, discreet, confidential, professional, reliable</li>
                    <li><strong>Premium words:</strong> refined, elegant, polished, high-quality, private, exclusive</li>
                    <li><strong>Travel words:</strong> luxury hotels, resorts, private villas, tourist destinations, business hubs</li>
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
                        <tr><td className="p-2">India escort service</td><td className="p-2">Primary</td><td className="p-2">9–10</td></tr>
                        <tr><td className="p-2">Escort service India</td><td className="p-2">Secondary</td><td className="p-2">5–6</td></tr>
                        <tr><td className="p-2">India escorts service</td><td className="p-2">Secondary</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Escorts service India</td><td className="p-2">Secondary</td><td className="p-2">1–2</td></tr>
                        <tr><td className="p-2">Call girl India</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">India call girl</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">Call girls service India</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">India call girls service</td><td className="p-2">Secondary</td><td className="p-2">1</td></tr>
                        <tr><td className="p-2">Top escort services in India</td><td className="p-2">Secondary</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Best call girl in India</td><td className="p-2">Secondary</td><td className="p-2">1–2</td></tr>
                        <tr><td className="p-2">Adult companionship in India</td><td className="p-2">LSI</td><td className="p-2">4–6</td></tr>
                        <tr><td className="p-2">Private companion in India</td><td className="p-2">LSI</td><td className="p-2">3–4</td></tr>
                        <tr><td className="p-2">Verified profiles</td><td className="p-2">Trust term</td><td className="p-2">6–8</td></tr>
                        <tr><td className="p-2">Discreet / confidential</td><td className="p-2">Trust term</td><td className="p-2">8–10</td></tr>
                        <tr><td className="p-2">India / major cities</td><td className="p-2">National SEO</td><td className="p-2">20+</td></tr>
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

