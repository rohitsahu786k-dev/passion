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
  title: 'Premium Nathdwara Escort Service | 24x7 Verified Booking',
  description: 'Book premium Nathdwara escort service 24x7 with verified profiles, discreet support, quick WhatsApp response, hotel coordination, and private booking.',
  path: '/nathdwara-escort-service/',
  image: '/assets/photos/luxury-escort-service-nathdwara.jpg',
  imageAlt: 'Nathdwara escort service featured image',
  keywords: [
    'Nathdwara Escort Service',
    'Nathdwara Call Girl',
    'Call Girls in Nathdwara',
    'Premium Nathdwara Escort Service',
    '24x7 Nathdwara Escort Booking',
  ],
});
// Nathdwara companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-nathdwara.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-nathdwara.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-nathdwara.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-nathdwara.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-nathdwara.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-nathdwara.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-nathdwara.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-nathdwara.jpg',
    tags: ['Model Profile', 'Hotel Meet'],
    rate: 'Elite',
  }
];

export default function NathdwaraEscortPage() {
  const phone = '+919999900122';
  const whatsapp = '919999900122';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Nathdwara%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Nathdwara for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Nathdwara?",
      answer: "Yes, booking support is available across major Nathdwara locations, including hotel areas, guest houses, private accommodations, resort stays, nearby quiet zones, and local areas."
    },
    {
      question: "How can I book a companion in Nathdwara?",
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
      question: "Can I book a companion near my hotel or guest house?",
      answer: "Yes, you can share your hotel, guest house, or private stay location, and our team will help you check suitable nearby options."
    },
    {
      question: "Do you provide service near resort stays and quiet zones?",
      answer: "Yes, booking support may be available near resort stays, private accommodations, and nearby quiet zones, subject to profile availability."
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

  // Schema definitions for Nathdwara page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Nathdwara',
    description: 'Nathdwara Escort Service and Nathdwara Call Girl booking available 24/7. Book Call Girls in Nathdwara with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
    url: '/nathdwara-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Temple Road, Nathdwara',
      addressLocality: 'Nathdwara',
      addressRegion: 'Rajasthan',
      postalCode: '313301',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Nathdwara' },
      { '@type': 'City', name: 'Temple Road' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '101',
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
    url: '/nathdwara-escort-service/',
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
        name: 'Nathdwara Escort Service',
        item: 'https://www.girlsofpassion.in/nathdwara-escort-service/'
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
      <SupplementalCitySchema citySlug="nathdwara" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Nathdwara, Rajasthan
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
                Nathdwara Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship with Privacy & Discretion
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
                <strong className="text-amber-400">Nathdwara Escort Service</strong> and <strong className="text-white">Nathdwara Call Girl</strong> booking are available 24/7 for adults who want Call Girls in Nathdwara, cash payment service, quick deals, free hotel coordination, escorts services and call girls with private support.
              </p>
              {/* Intro paragraphs */}              <div data-seo-answer-summary className="mt-5 max-w-3xl rounded-lg border border-amber-500/20 bg-neutral-900/40 p-5 text-sm leading-7 text-neutral-300">
                <p>
                  <strong className="text-amber-400">Nathdwara Escort Service</strong> and <strong className="text-white">Nathdwara Call Girl</strong> are the primary booking keywords for this page. Adults can use Girls of Passion to check Call Girls in Nathdwara, escorts services, verified profile coordination, cash payment availability, quick deals, free hotel coordination, and private 24/7 booking support.
                </p>
                <p className="mt-3">
                  This page is optimized for answer-first search results by clearly covering who the service is for, where it is available, how booking support works, and why users searching for Nathdwara Escort Service, Nathdwara Call Girl or Call Girls in Nathdwara can find relevant city-specific information here.
                </p>
              </div>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Nathdwara escort service</strong> with privacy, comfort, and smooth companionship support. We are designed for clients who value discretion, verified profiles, easy communication, and a private experience in a peaceful destination like Nathdwara.
                </p>
                <p>
                  Nathdwara is a unique location known for its calm environment, spiritual importance, growing hospitality sector, hotels, guest houses, private stays, and nearby resort properties. While it is not as fast-paced as a metro city, the demand for private, comfortable, and premium experiences is growing among visitors and local adults who prefer discreet companionship.
                </p>
                <p>
                  If your search has brought you to <strong className="text-amber-400 font-semibold">Nathdwara escort service</strong>, <strong className="text-amber-400 font-semibold">escort service Nathdwara</strong>, <strong className="text-amber-400 font-semibold">best escort services Nathdwara</strong>, or <strong className="text-amber-400 font-semibold">Trusted Call Girl Nathdwara</strong>, you are likely looking for something private, reliable, and easy to access. Girls of Passion is built to deliver exactly that with professionalism, confidentiality, and a smooth booking process.
                </p>
                <p>
                  Our goal is simple: to provide adults with a discreet, safe, and premium companionship platform where privacy, trust, and comfort always come first.
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
                <div>96+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-nathdwara.jpg" 
                  alt="Nathdwara Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available near Temple Road, Hotels & Private Resorts</p>
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
                <LeadForm defaultCity="nathdwara" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Nathdwara Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Nathdwara adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Nathdwara</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Nathdwara, Rajasthan</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Hotel areas, guest houses, private accommodations, resort stays, nearby quiet zones, local areas</td>
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
                    <td className="px-6 py-4">Travellers, local adults, private stays, hotel companionship, guest house stays, weekend visits</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Nathdwara</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Nathdwara. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Nathdwara Escort Companion`}
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

        {/* Section: Why Choose Girls of Passion for Nathdwara Escort Service? */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Uncompromising Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Nathdwara Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white">Nathdwara escort service</strong> matters because privacy and trust are extremely important in a smaller city. Clients want a platform that offers genuine profiles, respectful communication, clear details, and confidential booking support.
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
                  'Availability across major Nathdwara areas',
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

            {/* Escort Service Nathdwara – Designed for Simplicity and Privacy */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Simplicity & Calm</span>
              <h3 className="text-2xl font-bold text-white">Escort Service Nathdwara – Designed for Simplicity and Privacy</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                In a calm destination like Nathdwara, simplicity matters. Our <strong className="text-white font-semibold">escort service Nathdwara</strong> is designed to keep everything smooth, private, and stress-free. We understand that clients want quick support, easy communication, and discreet coordination.
              </p>
              
              <h4 className="font-semibold text-white text-sm">We focus on:</h4>

              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                {[
                  'Easy communication',
                  'Quick coordination',
                  'Minimal booking steps',
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
                Whether you are staying in a hotel, guest house, private accommodation, or nearby resort property, Girls of Passion helps you check suitable companion options in a private and convenient way.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Nathdwara Escorts Service for Local and Travelling Clients */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-nathdwara.jpg" 
                alt="Nathdwara Escorts Service for Local and Travelling Clients"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Destination Vibe</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Nathdwara Escorts Service for Local and Travelling Clients</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Nathdwara attracts both visitors and local individuals who prefer peaceful, quiet, and private settings. Our <strong className="text-white">Nathdwara escorts service</strong> is designed for adults who want a refined companionship experience that matches this calm environment.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our service is suitable for:</h4>
                <ul className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Travellers staying in hotels',
                    'Guests in private accommodations',
                    'Weekend visitors',
                    'Local adults',
                    'Private social meetings',
                    'Guest house stays',
                    'Resort stays',
                    'Personal companionship',
                    'Relaxed private time',
                    'Quiet and discreet experiences'
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

        {/* Section: Best Escort Services Nathdwara – Experience That Meets Expectations */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Excellence in Service</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Nathdwara – Experience That Meets Expectations</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                When people search for the <strong className="text-white font-semibold">best escort services Nathdwara</strong>, they usually expect privacy, genuine profiles, reliable coordination, and a simple booking process. Girls of Passion focuses on all these areas to deliver a dependable adult companionship service.
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
                    'Availability across key Nathdwara locations',
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
                We believe a premium companionship service should feel private, smooth, and trustworthy from start to finish.
              </p>
            </div>

            {/* Escorts Service Nathdwara with Reliable Coordination */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Structured Process</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Escorts Service Nathdwara with Reliable Coordination</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white">escorts service Nathdwara</strong> should be simple, organized, and dependable. In a smaller destination, location coordination and privacy matter even more because clients want a calm and controlled experience.
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

              <p className="mt-4 text-xs text-neutral-400 font-medium text-neutral-300">
                Our team works to keep every step easy and stress-free so clients can enjoy a private and comfortable experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Nathdwara Escorts Service Available Across Key Areas */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Local Neighborhoods</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Nathdwara Escorts Service Available Across Key Areas</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Nathdwara escorts service</strong> is available across major local areas, hotels, guest houses, private accommodations, nearby resorts, and quiet zones. Whether you are visiting for a short stay, weekend trip, private meeting, or relaxed personal time, our team can help check companion availability based on your preferred location and timing.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Hotel areas',
                'Guest houses',
                'Private accommodations',
                'Nearby resort stays',
                'Local residential areas',
                'Outskirts and quiet zones',
                'Travel stay locations',
                'Selected private properties',
                'Nearby premium stays'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Nathdwara Companion Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This local coverage helps clients searching for <strong className="text-white">escort service Nathdwara near me</strong> or <strong className="text-white">Nathdwara escort service near me</strong> find suitable options quickly and privately.
            </p>
          </div>
        </section>

        {/* Section: Accommodation Stays & Resorts Details */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell grid gap-8 md:grid-cols-2">
            
            {/* Hotel and Guest House Companion Service */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Accommodation Bookings</span>
              <h3 className="mt-2 text-xl font-bold text-white">Hotel and Guest House Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Many visitors in Nathdwara stay in hotels, guest houses, and private accommodations. Girls of Passion provides discreet companionship booking support for adults looking for refined companion options during their stay.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-sm">Hotel and guest house companionship is suitable for:</h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400 mt-2">
                {[
                  'Travellers',
                  'Weekend visitors',
                  'Private meetings',
                  'Social companionship',
                  'Personal company',
                  'Relaxed evenings',
                  'Short-duration companionship',
                  'Comfortable private stays'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-300">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="mt-4 text-xs text-neutral-400">
                Our support team helps coordinate timing and location in a professional and confidential way.
              </p>
            </div>

            {/* Nearby Resort and Private Stay Companionship */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Getaways</span>
              <h3 className="mt-2 text-xl font-bold text-white">Nearby Resort and Private Stay Companionship</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Nathdwara and nearby areas have seen growth in resort stays, private accommodations, and quiet getaway options. Many clients prefer companionship that fits this peaceful and private environment.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-sm">Private stay companionship is suitable for:</h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400 mt-2">
                {[
                  'Weekend stays',
                  'Resort visits',
                  'Private social meetings',
                  'Relaxed personal time',
                  'Dinner plans',
                  'Quiet travel companionship',
                  'Premium lifestyle experiences'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-300">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="mt-4 text-xs text-neutral-400">
                Our team helps clients check available options while maintaining complete privacy and clear communication.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Booking Steps & Process */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Booking Steps Card */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Fast & Discreet</span>
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

            {/* Call Girl Nathdwara and Private Companion Options */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Search Intents</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Call Girl Nathdwara and Private Companion Options</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white font-semibold">call girl Nathdwara</strong>, <strong className="text-white font-semibold">Nathdwara call girl</strong>, <strong className="text-white font-semibold">call girls service Nathdwara</strong>, or <strong className="text-white font-semibold">Nathdwara call girls service</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a professional, privacy-focused, and respectful way.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our platform is suitable for adults who want:</h4>
                <ul className="space-y-3">
                  {[
                    'Verified companion profiles',
                    'Quick booking support',
                    'Private communication',
                    'Flexible timing',
                    'Nathdwara location coverage',
                    'Premium companion options',
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
                We focus on making the experience smooth, confidential, and convenient for adults looking for private companionship in Nathdwara.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Best Call Girls Service in Nathdwara & Trusted Call Girl Nathdwara */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Best Call Girls Service in Nathdwara */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Quality Service</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Call Girls Service in Nathdwara with Trust and Privacy</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Clients searching for the <strong className="text-white font-semibold">best Call Girls service in Nathdwara</strong> usually want reliability, privacy, genuine profiles, and clear communication. Girls of Passion is built around these expectations with a focus on professional support and a discreet process.
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

            {/* Trusted Call Girl Nathdwara – Privacy Comes First */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Privacy Focus</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Trusted Call Girl Nathdwara – Privacy Comes First</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Trust is essential in a smaller city like Nathdwara. If you are searching for <strong className="text-white font-semibold">Trusted Call Girl Nathdwara</strong>, you likely want a service that protects your privacy and provides genuine options.
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
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Vast Options</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Premium Companion Profiles for Private Experiences</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Nathdwara attracts visitors and local adults who want peaceful surroundings, privacy, and personal comfort. Girls of Passion offers companion profiles suitable for different private occasions and relaxed companionship experiences.
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

            {/* Local Nathdwara Companion Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Insight</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Local Nathdwara Companion Options</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Local companion options can be useful in a destination like Nathdwara because locations are quieter and more specific. A local companion may understand the city’s layout, hotel zones, and nearby stay locations better.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Travellers staying in Nathdwara',
                    'Weekend visitors',
                    'Guest house stays',
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

        {/* Section: Privacy and Confidentiality Always Protected */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Privacy and Confidentiality Always Protected</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing a <strong className="text-white">Nathdwara escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their identity, communication, and booking details to remain private.
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

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Your privacy is handled carefully at every step so you can book with confidence and peace of mind.
              </p>
            </div>

            {/* Safe and Professional Adult Companionship */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Responsibility & Safety</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Safe and Professional Adult Companionship</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is designed for adults who value safety, professionalism, and respectful interaction. We focus on maintaining a platform where communication is clear, privacy is protected, and every step is handled responsibly.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our standards include:</h4>
                <ul className="space-y-2 text-xs text-neutral-400">
                  {[
                    'Verified profiles',
                    'Adult-only access',
                    'Respectful communication',
                    'Consent-based interaction',
                    'Professional coordination',
                    'Privacy protection',
                    'Clear information before confirmation'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Clients must be 18 years or older and must follow all applicable local laws and platform guidelines.
              </p>
            </div>

          </div>
        </section>

        {/* Section: 24x7 Nathdwara Escort Service Support & Transparent Pricing */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* 24x7 Nathdwara Escort Service Support */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Always Online</span>
              <h3 className="text-2xl font-bold text-white">24x7 Nathdwara Escort Service Support</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Even in a peaceful destination like Nathdwara, timing can vary for travellers and local clients. That is why Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Nathdwara.
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
                    <li key={p} className="flex items-center gap-2">
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
                A reliable escort service Nathdwara should always provide clear details before booking. At Girls of Passion, we believe in transparent communication so clients can make informed decisions.
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

          </div>
        </section>

        {/* Section: Unique Experience of Nathdwara Companionship */}
        <section className="py-20 border-b border-neutral-900 bg-neutral-900/10">
          <div className="container-shell max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Vibe Check</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Unique Experience of Nathdwara Companionship</h2>
            <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            
            <p className="mt-6 text-base leading-relaxed text-neutral-300">
              Nathdwara offers a different atmosphere compared to large cities. The experience here is more private, calm, and relaxed. The town’s quieter surroundings create a suitable environment for clients who value confidentiality and personal comfort.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-left">
              {[
                { title: 'Less crowded', desc: 'More privacy and discretion in every booking.' },
                { title: 'Quiet and relaxed', desc: 'Ideal environment for private personal time.' },
                { title: 'Controlled stays', desc: 'Controlled and highly personal companion experience.' },
                { title: 'Hospitality focus', desc: 'Growing hotel, guest house, and resort stays sector.' }
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/20 hover:border-amber-500/20 transition-all">
                  <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-neutral-400">
              This makes our Nathdwara escort service ideal for clients who want privacy, comfort, and a destination-based companionship experience.
            </p>
          </div>
        </section>

        {/* Section: Designed for a Smooth and Stress-Free Experience & Why Trusted Name */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Designed for a Smooth and Stress-Free Experience */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">User Experience</span>
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
                This user-focused approach makes our platform a strong choice for adults searching for Nathdwara escort service or private companionship in Nathdwara.
              </p>
            </div>

            {/* Why Girls of Passion is a Trusted Name in Nathdwara */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Trusted Platform</span>
              <h3 className="text-2xl font-bold text-white">Why Girls of Passion is a Trusted Name in Nathdwara</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion understands the importance of privacy and simplicity in smaller cities. We focus on providing a professional platform that respects your time, comfort, and confidentiality.
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
                    'We support key Nathdwara locations',
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
                Our focus on quality and confidentiality makes us a trusted platform for adult companionship in Nathdwara.
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Ready to Book</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Book Nathdwara Escort Service Now</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Ready to explore a premium adult companionship experience in Nathdwara? Contact Girls of Passion for discreet support, verified profiles, and smooth booking assistance.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-white mb-2 text-sm">We provide:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                      {[
                        'Call now for availability',
                        'WhatsApp booking available',
                        '24x7 support',
                        'Service across Nathdwara',
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

                  <h3 className="mt-8 text-xl font-bold text-white">Experience Premium Companionship in Nathdwara Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium Nathdwara escort service, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, local, independent-style, modern, and travel-friendly companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for best escort services Nathdwara, escort service Nathdwara, Trusted Call Girl Nathdwara, or private companion options near you, our team can help you check suitable available profiles based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Nathdwara Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Nathdwara Hotline</p>
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
              <a href="/nathdwara/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/nathdwara/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/nathdwara/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/nathdwara/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/nathdwara/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Nathdwara</p>
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

