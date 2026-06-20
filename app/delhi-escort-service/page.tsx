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
  CheckCircle2, 
  Sparkles, 
  Send, 
  Clock, 
  Check, 
  ChevronRight, 
  Lock
} from 'lucide-react';
import { CitySchema } from '@/components/seo/CitySchema';
import { LeadForm } from '@/components/ui/LeadForm';

import { SupplementalCitySchema } from '@/components/seo/SupplementalCitySchema';
export const metadata: Metadata = buildPageMetadata({
  title: 'Premium Delhi Escort Service | 24x7 Verified Booking',
  description: 'Book premium Delhi escort service 24x7 with verified profiles, discreet support, quick WhatsApp response, hotel coordination, and private booking.',
  path: '/delhi-escort-service/',
  image: '/assets/photos/luxury-escort-service-delhi.jpg',
  imageAlt: 'Delhi escort service featured image',
  keywords: [
    'Delhi Escort Service',
    'Delhi Call Girl',
    'Call Girls in Delhi',
    'Premium Delhi Escort Service',
    '24x7 Delhi Escort Booking',
  ],
});
// Companion profile cards to add visual richness
const companionProfiles = [
  {
    name: 'Anya',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-delhi.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-delhi.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-delhi.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-delhi.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 22,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-delhi.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 24,
    height: '5\'6"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-delhi.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-delhi.jpg',
    tags: ['Private Meet', 'Independent Style'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-delhi.jpg',
    tags: ['Stylish', 'Corporate Events'],
    rate: 'Elite',
  }
];

export default function DelhiEscortPage() {
  const phone = '+919999900101';
  const whatsapp = '919999900101';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Delhi%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Delhi NCR for adults who want private, discreet, and premium companion booking support."
    },
    {
      question: "Is Girls of Passion available across Delhi NCR?",
      answer: "Yes, our service covers major Delhi NCR locations, including South Delhi, Central Delhi, Aerocity, Connaught Place, Dwarka, Gurgaon, and Noida."
    },
    {
      question: "How can I book a companion in Delhi?",
      answer: "You can browse profiles and contact our support team through call or WhatsApp. Share your preferred location, timing, and profile choice to check availability."
    },
    {
      question: "Is the booking process private?",
      answer: "Yes, the booking process is discreet and confidential. Client privacy is one of our top priorities."
    },
    {
      question: "Are the profiles verified?",
      answer: "Girls of Passion focuses on verified and genuine companion profiles to maintain trust and service quality."
    },
    {
      question: "Is support available 24x7?",
      answer: "Yes, booking support is available 24x7, subject to profile availability and location."
    },
    {
      question: "Can I choose a companion near my location?",
      answer: "Yes, you can share your location, and our team will help you check available options nearby."
    },
    {
      question: "What areas do you cover in Delhi?",
      answer: "We cover South Delhi, Central Delhi, Aerocity, Connaught Place, Saket, Vasant Kunj, Dwarka, Rohini, Karol Bagh, Gurgaon, Noida, and other nearby areas."
    },
    {
      question: "Is pricing shared before booking?",
      answer: "Yes, pricing and availability details are shared before confirmation so that clients can make an informed decision."
    },
    {
      question: "Who can use this service?",
      answer: "This service is only for adults aged 18 years and above. Clients must communicate respectfully and follow all applicable local laws."
    }
  ];

  // Raw Schema definitions for injecting into head
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Delhi',
    description: 'Delhi Escort Service and Delhi Call Girl booking available 24/7. Book Call Girls in Delhi with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
    url: '/delhi-escort-service/',
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
      { '@type': 'City', name: 'New Delhi' },
      { '@type': 'City', name: 'Delhi NCR' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Noida' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '185',
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
    url: '/delhi-escort-service/',
    logo: '/logo.svg', // Fallback path
    telephone: phone,
    sameAs: []
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
        name: 'Delhi Escort Service',
        item: 'https://www.girlsofpassion.in/delhi-escort-service/'
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
      <SupplementalCitySchema citySlug="delhi" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Delhi NCR
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
                Delhi Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship in New Delhi
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
                <strong className="text-amber-400">Delhi Escort Service</strong> and <strong className="text-white">Delhi Call Girl</strong> booking are available 24/7 for adults who want Call Girls in Delhi, cash payment service, quick deals, free hotel coordination, escorts services and call girls with private support.
              </p>
              {/* Intro paragraphs */}              <div data-seo-answer-summary className="mt-5 max-w-3xl rounded-lg border border-amber-500/20 bg-neutral-900/40 p-5 text-sm leading-7 text-neutral-300">
                <p>
                  <strong className="text-amber-400">Delhi Escort Service</strong> and <strong className="text-white">Delhi Call Girl</strong> are the primary booking keywords for this page. Adults can use Girls of Passion to check Call Girls in Delhi, escorts services, verified profile coordination, cash payment availability, quick deals, free hotel coordination, and private 24/7 booking support.
                </p>
                <p className="mt-3">
                  This page is optimized for answer-first search results by clearly covering who the service is for, where it is available, how booking support works, and why users searching for Delhi Escort Service, Delhi Call Girl or Call Girls in Delhi can find relevant city-specific information here.
                </p>
              </div>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Delhi escort service</strong> with privacy, comfort, and quality. We provide a smooth, discreet, and reliable adult companionship experience for clients who value elegance, confidentiality, and professional support.
                </p>
                <p>
                  Delhi is a fast-moving city known for luxury hotels, business meetings, nightlife, private events, and modern lifestyle experiences. Whether you are visiting New Delhi for business, staying at a premium hotel, attending a social gathering, or looking for a refined private companion, Girls of Passion offers a convenient and privacy-focused service across Delhi NCR.
                </p>
                <p>
                  If you are searching for <strong className="text-amber-400 font-semibold">best female escorts in New Delhi</strong>, <strong className="text-amber-400 font-semibold">escort service Delhi</strong>, <strong className="text-amber-400 font-semibold">best escort services Delhi</strong>, or a trusted adult companion platform, Girls of Passion is designed to provide a professional experience with verified profiles, quick response, and complete discretion.
                </p>
                <p>
                  Our aim is simple: to offer a safe, respectful, and premium companionship experience for adults who expect genuine profiles, smooth communication, and reliable support.
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
                <div>420+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-delhi.jpg" 
                  alt="Delhi Escort Service Premium companion profile"
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
                  <p className="text-xs text-neutral-300">Available in South Delhi, Aerocity & Luxury Hotels</p>
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
                <LeadForm defaultCity="delhi" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Delhi Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Delhi</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">New Delhi and Delhi NCR</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">South Delhi, Central Delhi, Aerocity, Gurgaon, Noida, Dwarka, Saket, Connaught Place</td>
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
                    <td className="px-6 py-4">Business travelers, dinner dates, hotel companionship, private meetings, social events</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in New Delhi</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and high-profile companions. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Delhi Escort Companion`}
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
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Delhi Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white">Delhi escort service</strong> is important because clients expect trust, privacy, professionalism, and genuine service. In a city like Delhi, where options are many, finding a reliable platform can be difficult. Girls of Passion focuses on quality, transparency, and client comfort.
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
                  'Availability across major Delhi NCR locations',
                  'Premium and well-presented companions',
                  'Clear coordination before confirmation',
                  'Respectful adult-only service approach'
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
                Our service is built for adults who want a trusted platform with smooth booking, privacy, and professional assistance. Every inquiry is handled carefully so that clients feel comfortable from the first message to final confirmation.
              </p>
            </div>

            {/* Highlight Panel */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Best Female Escorts in New Delhi</h4>
                  <p className="text-xs text-neutral-400">Premium companionship tailored for your preferences</p>
                </div>
              </div>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Girls of Passion offers access to elegant and well-presented female companions in New Delhi. Our companion profiles are selected with attention to quality, presentation, communication, and professionalism. Whether you prefer a modern, stylish, sophisticated, or friendly companion, our platform helps you choose according to your preference.
              </p>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Clients looking for <strong className="text-white">best female escorts in New Delhi</strong> often want more than basic availability. They want confidence, privacy, refined behavior, and a smooth experience. That is why we focus on verified profiles and professional coordination.
              </p>

              <div>
                <h5 className="font-semibold text-white mb-2 text-sm">Our companions are suitable for different social occasions, including:</h5>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    'Dinner dates',
                    'Hotel companionship',
                    'Business travel companionship',
                    'Private meetings',
                    'Social events',
                    'Luxury lifestyle experiences',
                    'City outings',
                    'Personal companionship',
                    'Event companionship'
                  ].map((occasion) => (
                    <div key={occasion} className="flex items-center gap-2 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {occasion}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-neutral-400 mt-2">
                Every client has different expectations, and our support team helps guide you toward the most suitable available option.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Escort Service Delhi with Verified & Genuine Profiles */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/vip-escort-delhi.jpg" 
                alt="Escort Service Delhi Verified Profiles"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Credibility & Trust</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Escort Service Delhi with Verified and Genuine Profiles</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white">escort service Delhi</strong> should focus on trust, privacy, and authenticity. At Girls of Passion, we understand that clients want genuine profiles and clear information before booking. Our goal is to create a safe and reliable platform where adults can connect with verified companions in a discreet way.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">We focus on:</h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Real and reviewed profiles',
                    'Clear profile information',
                    'Professional support',
                    'Respectful communication',
                    'Fast booking assistance',
                    'Client privacy protection'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This makes Girls of Passion a strong choice for adults searching for a trusted companionship platform in Delhi NCR.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Premium Adult Companionship Across Delhi NCR */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Wide Coverage</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Premium Adult Companionship Across Delhi NCR</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">Delhi escort service</strong> is available across major areas of Delhi and nearby NCR locations. Whether you are in a luxury hotel, private residence, business area, or popular social location, our team can help you check availability based on your preferred area and timing.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'South Delhi',
                'Central Delhi',
                'West Delhi',
                'East Delhi',
                'North Delhi',
                'Aerocity',
                'Connaught Place',
                'Saket',
                'Vasant Kunj',
                'Dwarka',
                'Rohini',
                'Karol Bagh',
                'Gurgaon',
                'Noida'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Discreet Companion Service</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage makes it easier for clients to find a private companion near them. If you are searching for <strong className="text-white">Delhi escorts service near me</strong> or <strong className="text-white">escort service Delhi near me</strong>, our support team can assist you with location-based options.
            </p>
          </div>
        </section>

        {/* Localized Details Section: South Delhi, Aerocity, Gurgaon/Noida */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* South Delhi Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Area</span>
              <h3 className="mt-2 text-xl font-bold text-white">South Delhi Escort Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                South Delhi is one of the most premium areas in the city, known for luxury hotels, fine dining restaurants, private residences, and upscale lifestyle spaces. Girls of Passion provides discreet companionship support in areas such as Saket, Vasant Kunj, Greater Kailash, Hauz Khas, Green Park, and nearby locations.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Clients in South Delhi often look for elegant, well-groomed, and sophisticated companions for dinner dates, hotel meetings, private events, and relaxed social company.
              </p>
            </div>

            {/* Aerocity Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Luxury Zones</span>
              <h3 className="mt-2 text-xl font-bold text-white">Aerocity and Hotel Companionship in Delhi</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Aerocity is one of Delhi’s top luxury hotel zones and is popular among business travelers, tourists, and international visitors. Girls of Passion provides premium adult companionship assistance for clients staying in hotels and luxury spaces, subject to availability and local guidelines.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our team helps with fast response, discreet coordination, and smooth booking support for clients who want a private companion during their stay.
              </p>
            </div>

            {/* Gurgaon & Noida Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Corporate Hubs</span>
              <h3 className="mt-2 text-xl font-bold text-white">Gurgaon and Noida Companion Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion also provides adult companionship support in nearby NCR locations such as Gurgaon and Noida. These areas are popular among corporate professionals, business travelers, and people looking for premium private companionship.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Whether you are in Cyber City, Golf Course Road, Sector 29, Noida Sector 18, or nearby areas, you can contact our team for profile availability and booking details.
              </p>
            </div>

          </div>
        </section>

        {/* Booking Process & Booking Steps */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Privacy Shield Block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Security & Discretion</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Safe, Private, and Discreet Booking Process</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the biggest concerns for clients choosing a <strong className="text-white">Delhi escort service</strong>. At Girls of Passion, confidentiality is a top priority. We follow a discreet and simple communication process so that your personal details and booking information remain private.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our privacy-focused process includes:</h4>
                <ul className="space-y-3">
                  {[
                    'Secure communication',
                    'Private booking assistance',
                    'No unnecessary personal questions',
                    'Confidential handling of inquiries',
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
                We believe every adult companionship experience should be handled with dignity, privacy, and professionalism.
              </p>
            </div>

            {/* Easy Booking Steps Card */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Simple Booking</span>
              <h2 className="mt-2 text-2xl font-extrabold text-white">Easy Call and WhatsApp Booking</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Booking with Girls of Passion is simple and quick. Our process is designed for adults who want fast response and clear communication.
              </p>
              
              <h3 className="mt-6 text-base font-bold text-white border-b border-neutral-800 pb-2">Booking Steps</h3>
              
              <ol className="mt-6 space-y-4">
                {[
                  'Browse available companion profiles.',
                  'Choose your preferred profile or category.',
                  'Contact our team through call or WhatsApp.',
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
                Our team will assist you with available options and help complete the booking process smoothly. Whether you are a first-time client or a regular visitor, we make the experience easy and convenient.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Best Escort Services Delhi – What Makes Us Different? */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Left Content Column */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Service Differentiation</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Best Escort Services Delhi – What Makes Us Different?</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is focused on delivering one of the <strong className="text-white font-semibold">best escort services Delhi</strong> experiences through trust, privacy, and professional coordination. We do not only focus on availability; we focus on the complete client experience.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                What makes us different:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Premium and verified companion profiles',
                  'Fast response time',
                  'Professional booking support',
                  'Delhi NCR location coverage',
                  'Discreet communication',
                  'Flexible options',
                  'Transparent information',
                  'Adult-only and respectful interaction'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our service is suitable for clients who value quality, privacy, and comfort. This is why many adults choose Girls of Passion when searching for a reliable companionship platform in New Delhi.
              </p>
            </div>

            {/* Right Brand Integrity Column */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Platform Trust</span>
              <h3 className="mt-2 text-xl font-bold text-white">Trusted Adult Companion Service in Delhi</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Trust is the foundation of every private companionship service. Girls of Passion focuses on building trust through verified profiles, professional communication, and confidential support. Clients who search for terms like <strong className="text-white">trusted call girl Delhi</strong> or <strong className="text-white">Delhi call girl</strong> are usually looking for reliability, privacy, and genuine profiles. Our platform is designed to meet those expectations in a professional and respectful way.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">We ensure:</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    'Genuine profile selection',
                    'Smooth coordination',
                    'Respectful communication',
                    'Privacy-first booking',
                    'Clear information before confirmation',
                    'Reliable customer support'
                  ].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {p}
                    </div>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our service is created for adults who expect a safe, discreet, and premium experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Modern, Stylish, and Sophisticated Companion Profiles */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Visual Grid for Profiles */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/luxury-escort-service-delhi.jpg" 
                alt="Modern, Stylish, and Sophisticated Companion Profiles"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
            </div>

            {/* Content list */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Curated Choices</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Modern, Stylish, and Sophisticated Companion Profiles</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Different clients have different preferences. Some prefer a stylish and modern companion, while others prefer someone elegant, friendly, or sophisticated. Girls of Passion offers a wide range of companion profiles to match different occasions and comfort levels.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">You can choose from:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Premium companions',
                    'Independent-style companions',
                    'Modern companions',
                    'Sophisticated companions',
                    'Friendly social companions',
                    'Travel-friendly companions',
                    'Event companions',
                    'Luxury lifestyle companions'
                  ].map((profile) => (
                    <div key={profile} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {profile}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This variety makes our <strong className="text-white">escort service Delhi</strong> suitable for different client needs and personal preferences.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Support, Pricing & Business Travelers */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* 24/7 Support */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="mt-2 text-xl font-bold text-white">24x7 Delhi Escort Service Support</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion offers 24x7 booking assistance for adults looking for private companionship in Delhi NCR. Whether you need support during the day, evening, or late night, our team aims to respond quickly and professionally.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Our 24x7 support helps with:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Profile availability', 'Location-based options', 'Booking confirmation', 'Timing coordination', 'Basic service details', 'Privacy-related queries'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Availability may depend on profile, location, and timing, but our team works to provide quick assistance whenever possible.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Clear Estimates</span>
              <h3 className="mt-2 text-xl font-bold text-white">Transparent Pricing and Clear Details</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">Delhi escort service</strong> should provide clear information before booking. At Girls of Passion, we believe in transparent communication so that clients can make informed decisions.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Pricing may depend on:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Companion profile', 'Duration', 'Location', 'Timing', 'Category', 'Availability', 'Special preferences'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Our team shares the required details before confirmation. This helps avoid confusion and gives clients a smoother booking experience.
              </p>
            </div>

            {/* Business Travelers */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Corporate Visitors</span>
              <h3 className="mt-2 text-xl font-bold text-white">Private Companion in Delhi for Business Travelers</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Delhi receives thousands of business travelers every day. Many visitors attend corporate meetings, conferences, exhibitions, and private business events. Girls of Passion offers professional adult companionship support for business travelers who want a refined companion for dinner, hotel stay, social outing, or private company.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our companions are selected for presentation, communication, and professional behavior, making them suitable for clients who expect a polished experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Luxury Companionship for Hotels and Private Events */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Visual image */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/premium-escorts-delhi.jpg" 
                alt="Luxury Companionship for Hotels and Private Events"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
            </div>

            {/* Content info */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Elite Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Luxury Companionship for Hotels and Private Events</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                If you are staying in a luxury hotel or attending a private event, Girls of Passion can help you find a suitable companion based on your preference and availability. Our premium profiles are ideal for clients looking for elegance, confidence, and refined social presence.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Luxury companionship is suitable for:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Hotel companionship',
                    'Dinner meetings',
                    'Private parties',
                    'Social events',
                    'Business evenings',
                    'City visits',
                    'Premium lifestyle experiences'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We focus on comfort, privacy, and professional service at every step.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Adult-Only Service & Guidelines */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Guidelines */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Legal Compliance</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Adult-Only Service with Respectful Guidelines</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is strictly for adults. Clients must be 18 years or older and must communicate respectfully. We encourage safe, responsible, and lawful interaction at all times.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our guidelines include:</h4>
                <ul className="space-y-3">
                  {[
                    'Adult-only access',
                    'Respectful communication',
                    'Consent-based interaction',
                    'Privacy protection',
                    'Professional coordination',
                    'Compliance with applicable local rules'
                  ].map((rule) => (
                    <li key={rule} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We aim to maintain a safe, discreet, and respectful platform for both clients and companions.
              </p>
            </div>

            {/* Why Privacy Matters */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Privacy Focus</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Why Privacy Matters in Delhi Companionship Services</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                When choosing a private companion in Delhi, privacy is one of the most important factors. Clients want assurance that their identity, communication, and booking details will not be exposed. Girls of Passion understands this need and follows a confidential process from start to finish.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                We keep communication simple, private, and professional. Your inquiry is handled only for booking coordination, and your details are treated with care. This privacy-first approach makes our platform a dependable choice for adults seeking discreet companionship in New Delhi.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Delhi Call Girls Service & Search Intents */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Visual content for Call Girls Service */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Search Insights</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Delhi Call Girls Service and Private Companion Options</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Many clients search online for <strong className="text-white font-semibold">Delhi call girls service</strong>, <strong className="text-white font-semibold">call girl Delhi</strong>, or <strong className="text-white font-semibold">call girls service Delhi</strong> when looking for adult companionship. At Girls of Passion, we present these services in a professional and privacy-focused manner, with verified profiles and clear communication.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our platform is designed for adults who want:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {['Fast booking support', 'Genuine profiles', 'Private communication', 'Delhi NCR availability', 'Premium companion options', 'Respectful service experience'].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                We recommend contacting our team directly through call or WhatsApp to check the latest profile availability.
              </p>
            </div>

            {/* How we deliver better experience */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Service Excellence</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">How Girls of Passion Delivers a Better Experience</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion focuses on quality over confusion. We know that clients want a smooth experience without complicated steps. That is why our service is built around easy navigation, quick response, and reliable support.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our complete experience includes:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Easy profile browsing',
                    'Quick inquiry process',
                    'Fast response',
                    'Clear information',
                    'Location-based options',
                    'Professional support',
                    'Confidential booking',
                    'Premium companionship'
                  ].map((exp) => (
                    <div key={exp} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {exp}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                This complete approach helps us offer a strong and trusted <strong className="text-white">Delhi escort service</strong> for adults across New Delhi and Delhi NCR.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Book a Private Companion in Delhi Today */}
        <section className="py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container-shell">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Instant Booking</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Book a Private Companion in Delhi Today</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted, premium, and discreet <strong className="text-white">Delhi escort service</strong>, Girls of Passion is here to assist you. We offer verified profiles, fast booking support, Delhi NCR coverage, and a privacy-first experience for adults who value quality and comfort.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for <strong className="text-white">best escort services Delhi</strong>, <strong className="text-white">best female escorts in New Delhi</strong>, <strong className="text-white">escort service Delhi</strong>, or a private companion near you, our team can help you find suitable available options.
                  </p>

                  <h3 className="mt-8 text-base font-bold text-white mb-4">Contact Girls of Passion</h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      'Call now for availability',
                      'WhatsApp booking available',
                      '24x7 support',
                      'Service across Delhi NCR',
                      'Verified companion profiles',
                      'Private and discreet booking process'
                    ].map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-neutral-300">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Experience premium adult companionship in Delhi with Girls of Passion, where privacy, comfort, and professionalism come first.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Confidential Hotline</p>
                    <p className="text-sm font-bold text-white">{phone}</p>
                    <p className="text-[9px] text-neutral-500 mt-1">Available 24x7 for verified bookings</p>
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
              <a href="/delhi/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/delhi/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/delhi/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/delhi/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/delhi/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section id="faqs" className="py-20 bg-neutral-900/10">
          <div className="container-shell max-w-4xl">
            
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">FAQ Helpdesk</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding bookings, locations, and privacy</p>
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

            {/* Link Back to policy options */}
            <div className="mt-12 text-center text-xs text-neutral-500">
              Please review our{' '}
              <Link href="/privacy-policy/" className="underline hover:text-neutral-300">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms/" className="underline hover:text-neutral-300">
                Terms and Conditions
              </Link>{' '}
              for additional details.
            </div>

          </div>
        </section></div>
    </>
  );
}

