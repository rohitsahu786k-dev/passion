import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
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
export const metadata: Metadata = buildPageMetadata({
  title: 'Premium Mount Abu Escort Service | 24x7 Verified Booking',
  description: 'Book premium Mount Abu escort service 24x7 with verified profiles, discreet support, quick WhatsApp response, hotel coordination, and private booking.',
  path: '/maunt-abu-escort-service/',
  image: '/assets/photos/luxury-escort-service-maunt-abu.jpg',
  imageAlt: 'Mount Abu escort service featured image',
  keywords: [
    'Mount Abu Escort Service',
    'Mount Abu Call Girl',
    'Call Girls in Mount Abu',
    'Premium Mount Abu Escort Service',
    '24x7 Mount Abu Escort Booking',
  ],
});
// Maunt Abu companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-maunt-abu.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-maunt-abu.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-maunt-abu.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-maunt-abu.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-maunt-abu.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-maunt-abu.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-maunt-abu.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-maunt-abu.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function MauntAbuEscortPage() {
  const phone = '+919999900121';
  const whatsapp = '919999900121';
  const whatsappUrl = `/go/whatsapp?phone=${whatsapp}&text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Maunt%20Abu%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Mount Abu for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Mount Abu?",
      answer: "Yes, booking support is available across major Mount Abu locations, including Nakki Lake, Delwara Road, Sunset Point region, hilltop resorts, hotels, guest houses, and private villas."
    },
    {
      question: "How can I book a companion in Mount Abu?",
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
      question: "Can I book a companion near my hotel or resort?",
      answer: "Yes, you can share your hotel, resort, villa, or guest house location, and our team will help you check suitable nearby options."
    },
    {
      question: "Do you provide service near Nakki Lake and Delwara Road?",
      answer: "Yes, booking support may be available near Nakki Lake, Delwara Road, Sunset Point region, hilltop resorts, and other major Mount Abu locations."
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
      question: "Is Maunt Abu escort service available near me?",
      answer: "Girls of Passion provides location-based booking support across major Mount Abu areas. You can share your location through call or WhatsApp to check nearby profile availability."
    },
    {
      question: "Why should I choose Girls of Passion in Mount Abu?",
      answer: "Girls of Passion focuses on verified profiles, discreet booking, fast response, professional coordination, and premium companionship support across Mount Abu."
    }
  ];

  // Schema definitions for Maunt Abu page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Maunt Abu',
    description: 'Premium Maunt Abu escort service & call girl booking 24/7. Verified profiles, WhatsApp support, hotel coordination, quick deals, private booking.',
    url: '/maunt-abu-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nakki Lake Road, Mount Abu',
      addressLocality: 'Mount Abu',
      addressRegion: 'Rajasthan',
      postalCode: '307501',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Mount Abu' },
      { '@type': 'City', name: 'Nakki Lake' },
      { '@type': 'City', name: 'Delwara Road' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '107',
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
    url: '/maunt-abu-escort-service/',
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
        name: 'Maunt Abu Escort Service',
        item: 'https://www.girlsofpassion.in/maunt-abu-escort-service/'
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
      <SupplementalCitySchema citySlug="mount-abu" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Mount Abu, Rajasthan
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
                Maunt Abu Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship with Privacy & Comfort
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
                <strong className="text-amber-400">Maunt Abu Escort Service</strong> and <strong className="text-white">Maunt Abu Call Girl</strong> booking are available 24/7 for adults who want Call Girls in Maunt Abu, cash payment service, quick deals, free hotel coordination, escorts services and call girls with private support.
              </p>
              {/* Intro paragraphs */}              <div data-seo-answer-summary className="mt-5 max-w-3xl rounded-lg border border-amber-500/20 bg-neutral-900/40 p-5 text-sm leading-7 text-neutral-300">
                <p>
                  <strong className="text-amber-400">Maunt Abu Escort Service</strong> and <strong className="text-white">Maunt Abu Call Girl</strong> are the primary booking keywords for this page. Adults can use Girls of Passion to check Call Girls in Maunt Abu, escorts services, verified profile coordination, cash payment availability, quick deals, free hotel coordination, and private 24/7 booking support.
                </p>
                <p className="mt-3">
                  This page is optimized for answer-first search results by clearly covering who the service is for, where it is available, how booking support works, and why users searching for Maunt Abu Escort Service, Maunt Abu Call Girl or Call Girls in Maunt Abu can find relevant city-specific information here.
                </p>
              </div>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Maunt Abu escort service</strong> with privacy, comfort, and smooth companionship support. We are designed for clients who value discretion, verified profiles, easy communication, and a refined experience in a peaceful hill-station destination like Mount Abu.
                </p>
                <p>
                  Mount Abu stands apart from other destinations in Rajasthan. As the state’s only hill station, it attracts travellers looking for peaceful getaways, luxury stays, scenic views, private moments, and relaxed experiences away from crowded city life. Whether you are visiting for a weekend escape, a private trip, a resort stay, or a solo retreat, the environment of Mount Abu naturally creates demand for personal, private, and premium companionship experiences.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">Maunt Abu escort service</strong>, <strong className="text-amber-400 font-semibold">escort service Maunt Abu</strong>, <strong className="text-amber-400 font-semibold">best escort services Maunt Abu</strong>, or <strong className="text-amber-400 font-semibold">Trusted Call Girl Maunt Abu</strong>, you are likely looking for something smooth, discreet, and well-managed. Girls of Passion is built to deliver exactly that with professionalism, confidentiality, and a simple booking process.
                </p>
                <p>
                  Our goal is simple: to provide adults with a safe, private, and premium companionship platform where privacy, comfort, trust, and quality always come first.
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
                <div>118+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-maunt-abu.jpg" 
                  alt="Maunt Abu Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available near Nakki Lake, Hilltop Resorts & Luxury Stays</p>
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
                <LeadForm defaultCity="mount-abu" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Maunt Abu Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Maunt Abu adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Mount Abu</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Mount Abu, Rajasthan</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Nakki Lake, Delwara Road, Sunset Point region, hilltop resorts, private villas, hotels, guest houses</td>
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
                    <td className="px-6 py-4">Travellers, weekend visitors, resort stays, private villas, hotel companionship, peaceful getaways</td>
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
              <p className="mt-3 text-sm text-neutral-400">Providing elite client support near Mount Abu</p>
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
                    <td className="px-6 py-4 font-medium text-white">Private booking</td>
                    <td className="px-6 py-4">Discreet and confidential coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Fast support</td>
                    <td className="px-6 py-4">Quick call and WhatsApp response</td>
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
                    <td className="px-6 py-4">Support across key Mount Abu locations</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Trust</td>
                    <td className="px-6 py-4">Clear communication before confirmation</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Simplicity</td>
                    <td className="px-6 py-4">Easy booking process with minimal steps</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Quality</td>
                    <td className="px-6 py-4">Comfort, privacy, reliability, and smooth coordination</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Mount Abu</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Mount Abu. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Maunt Abu Escort Companion`}
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

        {/* Section: Why Choose Girls of Passion for Maunt Abu Escort Service? */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Maunt Abu Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white font-semibold">Maunt Abu escort service</strong> matters because privacy and trust are extremely important in a calm destination like Mount Abu. Clients want a platform that provides genuine profiles, respectful communication, clear booking details, and confidential support.
                </p>
                <p>
                  Girls of Passion provides a structured and smooth experience from the first inquiry to final confirmation. Every step is handled with care, clarity, and complete discretion.
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
                  'Availability across major Mount Abu locations',
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

            {/* Escort Service Maunt Abu – Designed for Private Escapes */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Private Escapes</span>
              <h3 className="text-2xl font-bold text-white">Escort Service Maunt Abu – Designed for Private Escapes</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Mount Abu is all about relaxation, privacy, scenic surroundings, and peaceful stays. Our <strong className="text-white font-semibold">escort service Maunt Abu</strong> is designed to match that environment by keeping the process simple, discreet, and stress-free.
              </p>
              
              <h4 className="font-semibold text-white text-sm">We focus on:</h4>

              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                {[
                  'Easy communication',
                  'Quick coordination',
                  'Smooth booking process',
                  'Discreet handling',
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
                Whether you are staying near Nakki Lake, Delwara Road, a private villa, hilltop resort, hotel, or guest house, Girls of Passion helps you check suitable companion options in a private and convenient way.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Maunt Abu Escorts Service for Travellers and Luxury Stays */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-maunt-abu.jpg" 
                alt="Maunt Abu Escorts Service for Travellers and Luxury Stays"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Exclusive Travel</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Maunt Abu Escorts Service for Travellers and Luxury Stays</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Unlike metro cities, Mount Abu attracts travellers who prefer calm surroundings, scenic views, private stays, and comfortable experiences. Our <strong className="text-white">Maunt Abu escorts service</strong> is tailored for adults who want refined companionship that matches the relaxed and exclusive feel of the destination.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our service is suitable for:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Tourists staying in resorts',
                    'Guests in private villas',
                    'Weekend visitors',
                    'Solo travellers',
                    'Local adults',
                    'Hotel guests',
                    'Private social meetings',
                    'Relaxed companionship',
                    'Peaceful getaway experiences',
                    'Luxury stay companionship'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Every interaction is handled with professionalism and attention to detail so clients can enjoy a smooth, discreet, and comfortable companionship experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Best Escort Services Maunt Abu – Experience That Matches the Destination */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Hill Station Vibe</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Maunt Abu – Experience That Matches the Destination</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When people search for the <strong className="text-white font-semibold">best escort services Maunt Abu</strong>, they usually expect privacy, genuine profiles, reliable coordination, and a premium experience that matches the calm vibe of the hill station. Girls of Passion focuses on all these areas to deliver a dependable adult companionship service.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">What makes us different:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Carefully reviewed companion profiles',
                    'Premium companion options',
                    'Fast booking assistance',
                    'Transparent communication',
                    'Privacy-focused support',
                    'Availability across key Mount Abu locations',
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
                We believe a premium companionship service should feel private, smooth, reliable, and trustworthy from start to finish.
              </p>
            </div>

            {/* Escorts Service Maunt Abu with Reliable Coordination */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Reliable Coordination</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Escorts Service Maunt Abu with Reliable Coordination</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white">escorts service Maunt Abu</strong> should be simple, organized, and dependable. In a hill-station destination where hotels, resorts, villas, and scenic stays may be spread across different areas, location coordination plays an important role.
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
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400 font-medium text-neutral-300">
                Our team works to keep every step easy and stress-free so clients can enjoy a private and comfortable experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Maunt Abu Escorts Service Available Across Key Locations */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Destination Locations</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Maunt Abu Escorts Service Available Across Key Locations</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Maunt Abu escorts service</strong> is available across major local areas, hotels, guest houses, resorts, villas, and quiet stay locations. Whether you are visiting for a short trip, weekend escape, private meeting, or relaxed personal time, our team can help check companion availability based on your preferred location and timing.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Nakki Lake area',
                'Delwara Road',
                'Sunset Point region',
                'Hilltop resorts',
                'Private villas',
                'Luxury hotels',
                'Guest houses',
                'Local stay locations',
                'Scenic private stays',
                'Nearby quiet zones',
                'Selected premium properties'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Mount Abu Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This local coverage helps clients searching for <strong className="text-white">escort service Maunt Abu near me</strong> or <strong className="text-white">Maunt Abu escort service near me</strong> find suitable options quickly and privately.
            </p>
          </div>
        </section>

        {/* Premium Mount Abu Locations We Cover Table */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Premium Mount Abu Locations We Cover</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Mapping out key tourist and local residency sectors</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Mount Abu Area</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Nakki Lake Area</td>
                    <td className="px-6 py-4">Tourist stays, cafés, central access, relaxed meetings</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Delwara Road</td>
                    <td className="px-6 py-4">Luxury hotels, resorts, peaceful private stays</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Sunset Point Region</td>
                    <td className="px-6 py-4">Scenic stays, private moments, quiet experiences</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Hilltop Resorts</td>
                    <td className="px-6 py-4">Premium getaways, luxury companionship, private bookings</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Private Villas</td>
                    <td className="px-6 py-4">Weekend escapes, discreet stays, relaxed companionship</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Hotel Areas</td>
                    <td className="px-6 py-4">Travellers, short stays, easy coordination</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Guest Houses</td>
                    <td className="px-6 py-4">Budget-friendly stays, simple booking support</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Quiet Outskirts</td>
                    <td className="px-6 py-4">Privacy-focused experiences and peaceful surroundings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Localized Details for Nakki Lake, Delwara Road, Sunset/Hilltop */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Nakki Lake Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Central Tourism</span>
              <h3 className="mt-2 text-xl font-bold text-white">Nakki Lake Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Nakki Lake is one of the most popular and active areas in Mount Abu. It is known for tourism, cafés, hotels, walking spots, and relaxed surroundings. Girls of Passion provides discreet companionship booking support for adults looking for refined companion options near Nakki Lake and nearby hotel areas.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                This area is ideal for travellers who prefer easy coordination, central access, and smooth booking support.
              </p>
            </div>

            {/* Delwara Road and Resort Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Resorts</span>
              <h3 className="mt-2 text-xl font-bold text-white">Delwara Road and Resort Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Delwara Road is known for hotels, peaceful surroundings, and comfortable stay options. Many visitors choose this area for relaxed travel, private stays, and premium experiences. Girls of Passion offers private adult companionship support for clients staying near Delwara Road and nearby resort properties.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our support team can help check suitable profiles based on your preferred location and timing.
              </p>
            </div>

            {/* Sunset Point and Hilltop Stay Availability */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Scenic Stays</span>
              <h3 className="mt-2 text-xl font-bold text-white">Sunset Point and Hilltop Stay Availability</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Sunset Point and hilltop areas are among the most scenic parts of Mount Abu. These locations are popular among travellers looking for peaceful views, private stays, and relaxed evenings. Girls of Passion provides location-based booking support in these areas with a focus on privacy, speed, and professional coordination.
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
                Booking with Girls of Passion is simple, fast, and private. Our process is designed for adults who want quick access, clear information, and smooth coordination.
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
              <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy and Confidentiality Always Protected</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing a <strong className="text-white">Maunt Abu escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Search Intents</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Maunt Abu and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white font-semibold">call girl Maunt Abu</strong>, <strong className="text-white font-semibold">Maunt Abu call girl</strong>, <strong className="text-white font-semibold">call girls service Maunt Abu</strong>, or <strong className="text-white font-semibold">Maunt Abu call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a professional, privacy-focused, and respectful way.
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
                  'Mount Abu location coverage',
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
                We focus on making the experience smooth, confidential, and convenient for adults looking for private companionship in Mount Abu.
              </p>
            </div>

            {/* Right Column: Local Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Insight</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Local Mount Abu Companion Options</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Local companion options can be useful in a destination like Mount Abu because locations are spread across hill areas, resorts, and quiet stays. A local companion may understand the destination’s layout, hotel zones, and travel-friendly locations better.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Travellers staying in Mount Abu',
                    'Weekend visitors',
                    'Resort guests',
                    'Villa guests',
                    'Hotel guests',
                    'Private meetings',
                    'Short-duration companionship',
                    'Location-based availability',
                    'Relaxed social company'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
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

        {/* Section: Best Call Girls Service in Maunt Abu & Trusted Call Girl Maunt Abu */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Best Call Girls Service in Maunt Abu */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Quality Service</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Call Girls Service in Maunt Abu with Trust and Privacy</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Clients searching for the <strong className="text-white font-semibold">best Call Girls service in Maunt Abu</strong> usually want reliability, privacy, genuine profiles, and clear communication. Girls of Passion is built around these expectations with a focus on professional support and a discreet process.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">We focus on:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Clear booking details',
                    'Verified profile options',
                    'Fast response',
                    'Private coordination',
                    'Professional handling',
                    'Respectful communication',
                    'Adult-only service standards'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our goal is to offer a comfortable and dependable platform for adults who want premium companionship with complete discretion.
              </p>
            </div>

            {/* Trusted Call Girl Maunt Abu – Privacy Comes First */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Privacy Focus</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Trusted Call Girl Maunt Abu – Privacy Comes First</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Trust is essential in a private destination like Mount Abu. If you are searching for <strong className="text-white font-semibold">Trusted Call Girl Maunt Abu</strong>, you likely want a service that protects your privacy and provides genuine options.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Girls of Passion ensures:</h4>
                <ul className="space-y-2 text-xs text-neutral-400">
                  {[
                    'Verified profiles',
                    'Secure communication',
                    'No unnecessary data sharing',
                    'Confidential handling of inquiries',
                    'Discreet booking support',
                    'Clear information before confirmation'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Every inquiry is handled with professionalism so clients can feel confident and comfortable while booking.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Premium Companion Profiles for Private Experiences */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Refined Selection</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Premium Companion Profiles for Private Experiences</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Mount Abu attracts visitors and local adults who want peaceful surroundings, privacy, and personal comfort. Girls of Passion offers companion profiles suitable for different private occasions and relaxed companionship experiences.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You can choose from:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Premium companions',
                    'Independent-style companions',
                    'Local companion options',
                    'Modern companion profiles',
                    'Sophisticated companions',
                    'Travel-friendly companions',
                    'Private social companions',
                    'Resort-friendly companions',
                    'Hotel-friendly companions'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hotel, Villa, and Resort Companionship in Mount Abu */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Stays</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Hotel, Villa, and Resort Companionship in Mount Abu</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Mount Abu is famous for hotels, private villas, hilltop resorts, and peaceful stays. Many clients prefer companionship that fits this calm and private environment.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Hotel, villa, and resort companionship is suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Weekend escapes',
                    'Resort visits',
                    'Private social meetings',
                    'Relaxed personal time',
                    'Dinner plans',
                    'Quiet travel companionship',
                    'Premium lifestyle experiences',
                    'Peaceful private stays'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our team helps clients check available options while maintaining complete privacy and clear communication.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Safe Standards & 24x7 Support */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
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

            {/* 24x7 Maunt Abu Escort Service Support */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="mt-2 text-2xl font-bold text-white">24x7 Maunt Abu Escort Service Support</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Even in a peaceful destination like Mount Abu, timing can vary for travellers and local clients. That is why Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Mount Abu.
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

          </div>
        </section>

        {/* Section: Transparent Pricing & Unique Destination Experience */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Transparent Pricing and Clear Communication */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Estimates</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Transparent Pricing and Clear Communication</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">escort service Maunt Abu</strong> should always provide clear details before booking. At Girls of Passion, we believe in transparent communication so clients can make informed decisions.
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
                Our team shares required details before confirmation. This avoids confusion and makes the booking experience smoother.
              </p>
            </div>

            {/* Unique Experience of Mount Abu Companionship */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Destination Features</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Unique Experience of Mount Abu Companionship</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Mount Abu offers a completely different atmosphere compared to large cities. The experience here is more private, relaxed, and scenic. The hill-station environment creates a suitable setting for clients who value confidentiality, comfort, and personal space.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">What makes Mount Abu different:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Hill-station privacy',
                    'Luxury resorts and scenic stays',
                    'Less crowded environment',
                    'Peaceful surroundings',
                    'Ideal for weekend escapes',
                    'Controlled and personal experience',
                    'Calm travel atmosphere',
                    'Private villa and resort culture'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                This makes our <strong className="text-white font-semibold">Maunt Abu escort service</strong> ideal for clients who want privacy, comfort, and a destination-based companionship experience.
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
                    <td className="px-6 py-4">Elegant, refined, polished, sophisticated, high-class</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Booking</td>
                    <td className="px-6 py-4">Quick response, easy access, smooth coordination, simple process</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Local SEO</td>
                    <td className="px-6 py-4">Near me, across Mount Abu, local companion, resort availability</td>
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

        {/* Section: Designed for a Smooth and Stress-Free Experience & Why Trusted Name */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Designed for a Smooth and Stress-Free Experience */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Platform Convenience</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Designed for a Smooth and Stress-Free Experience</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Everything on Girls of Passion is built to make your experience simple and effortless. From browsing profiles to confirming availability, the process is designed for convenience and discretion.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You will find:</h4>
                <ul className="space-y-3">
                  {[
                    'Simple navigation',
                    'Quick contact options',
                    'Easy booking steps',
                    'Clear profile details',
                    'Professional support',
                    'Fast response',
                    'Minimal complications'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This user-focused approach makes our platform a strong choice for adults searching for <strong className="text-white font-semibold">Maunt Abu escort service</strong> or private companionship in Mount Abu.
              </p>
            </div>

            {/* Why Girls of Passion is a Trusted Name in Mount Abu */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Trusted Platform</span>
              <h3 className="text-2xl font-bold text-white">Why Girls of Passion is a Trusted Name in Mount Abu</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion understands what travellers expect in a private destination: privacy, simplicity, comfort, and reliable coordination. We focus on providing a professional platform that respects your time, personal space, and confidentiality.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Clients choose us because:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'We maintain high service standards',
                    'We respect privacy',
                    'We provide quick support',
                    'We offer premium companion categories',
                    'We focus on genuine profiles',
                    'We ensure smooth communication',
                    'We support key Mount Abu locations',
                    'We provide a discreet adult-only experience'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our focus on quality and confidentiality makes us a trusted platform for adult companionship in Mount Abu.
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
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Book Maunt Abu Escort Service Now</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Ready to explore a premium adult companionship experience in Mount Abu? Contact Girls of Passion for discreet support, verified profiles, and smooth booking assistance.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-white mb-2 text-sm">We provide:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {[
                        'Call now for availability assistance',
                        'WhatsApp booking available support',
                        '24x7 support and quick response',
                        'Service across Mount Abu coverage',
                        'Verified companion profiles details',
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

                  <h3 className="mt-8 text-xl font-bold text-white">Experience Premium Companionship in Mount Abu Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white">Maunt Abu escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, local, independent-style, modern, sophisticated, and travel-friendly companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for best escort services Maunt Abu, escort service Maunt Abu, Trusted Call Girl Maunt Abu, or private companion options near you, our team can help you check suitable available profiles based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Maunt Abu Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Mount Abu Hotline</p>
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
              <a href="/maunt-abu/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/maunt-abu/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/maunt-abu/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/maunt-abu/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/maunt-abu/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Mount Abu</p>
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

