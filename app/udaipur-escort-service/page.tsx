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
import { LeadForm } from '@/components/ui/LeadForm';

import { SupplementalCitySchema } from '@/components/seo/SupplementalCitySchema';
export const metadata: Metadata = buildPageMetadata({
  title: 'Premium Udaipur Escort Service | 24x7 Verified Booking',
  description: 'Book premium Udaipur escort service 24x7 with verified profiles, discreet support, quick WhatsApp response, hotel coordination, and private booking.',
  path: '/udaipur-escort-service/',
  image: '/assets/photos/beautiful-escort-girls-udaipur.jpg',
  imageAlt: 'Udaipur escort service featured image',
  keywords: [
    'Udaipur Escort Service',
    'Udaipur Call Girl',
    'Call Girls in Udaipur',
    'Premium Udaipur Escort Service',
    '24x7 Udaipur Escort Booking',
  ],
});
// Udaipur companion profile cards utilizing native images
const companionProfiles = [
  {
    name: 'Ananya',
    age: 22,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/beautiful-escort-girls-udaipur.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-udaipur.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\'4"',
    nationality: 'Indian',
    image: '/assets/photos/exclusive-escort-service-udaipur.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-in-udaipur.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 21,
    height: '5\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-udaipur.jpg',
    tags: ['Seductive', 'Resort Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 23,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-udaipur.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 22,
    height: '5\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-udaipur.jpg',
    tags: ['Private Meet', 'Local Companion'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-udaipur.jpg',
    tags: ['Model Profile', 'Resort Meet'],
    rate: 'Elite',
  }
];

export default function UdaipurEscortPage() {
  const phone = '+919999900103';
  const whatsapp = '919999900103';
  const whatsappUrl = `https://wa.me/${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20Udaipur%20escort%20service.`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship platform in Udaipur for adults who want discreet booking support, verified profiles, and premium companion options."
    },
    {
      question: "Is Girls of Passion available across Udaipur?",
      answer: "Yes, booking support is available across major Udaipur locations, including Lake Pichola, Fateh Sagar, City Palace area, Hiran Magri, Sukher, Bhuwana, hotels, resorts, and private locations."
    },
    {
      question: "How can I book a companion in Udaipur?",
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
      question: "Do you offer VIP escort services Udaipur?",
      answer: "Yes, VIP companion options are available for clients who prefer premium presentation, refined communication, and priority booking support."
    },
    {
      question: "Is support available 24x7?",
      answer: "Yes, booking support is available 24x7, subject to profile availability, location, and timing."
    },
    {
      question: "Can I book a companion near my hotel or resort?",
      answer: "Yes, you can share your hotel or resort location, and our team will help you check suitable nearby options."
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

  // Schema definitions for Udaipur page
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Girls of Passion Udaipur',
    description: 'Udaipur Escort Service and Udaipur Call Girl booking available 24/7. Book Call Girls in Udaipur with cash payment, quick deals, free hotel coordination, escorts services and call girls.',
    url: '/udaipur-escort-service/',
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fatehpura, Udaipur',
      addressLocality: 'Udaipur',
      addressRegion: 'Rajasthan',
      postalCode: '313001',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Udaipur' },
      { '@type': 'City', name: 'Lake Pichola' },
      { '@type': 'City', name: 'Fateh Sagar' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '148',
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
    url: '/udaipur-escort-service/',
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
        name: 'Udaipur Escort Service',
        item: 'https://www.girlsofpassion.in/udaipur-escort-service/'
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
      <SupplementalCitySchema citySlug="udaipur" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in Udaipur (City of Lakes)
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
                Udaipur Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship in the City of Lakes
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
                <strong className="text-amber-400">Udaipur Escort Service</strong> and <strong className="text-white">Udaipur Call Girl</strong> booking are available 24/7 for adults who want Call Girls in Udaipur, cash payment service, quick deals, free hotel coordination, escorts services and call girls with private support.
              </p>
              {/* Intro paragraphs */}              <div data-seo-answer-summary className="mt-5 max-w-3xl rounded-lg border border-amber-500/20 bg-neutral-900/40 p-5 text-sm leading-7 text-neutral-300">
                <p>
                  <strong className="text-amber-400">Udaipur Escort Service</strong> and <strong className="text-white">Udaipur Call Girl</strong> are the primary booking keywords for this page. Adults can use Girls of Passion to check Call Girls in Udaipur, escorts services, verified profile coordination, cash payment availability, quick deals, free hotel coordination, and private 24/7 booking support.
                </p>
                <p className="mt-3">
                  This page is optimized for answer-first search results by clearly covering who the service is for, where it is available, how booking support works, and why users searching for Udaipur Escort Service, Udaipur Call Girl or Call Girls in Udaipur can find relevant city-specific information here.
                </p>
              </div>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  Welcome to <strong className="text-amber-400 font-semibold">Girls of Passion</strong>, a trusted and professional platform for adults looking for a premium <strong className="text-white">Udaipur escort service</strong> with privacy, comfort, and elegance. We provide a discreet and refined adult companionship experience for clients who value quality, confidentiality, and smooth booking support.
                </p>
                <p>
                  Udaipur, also known as the <strong className="text-white font-semibold">City of Lakes</strong>, is one of India’s most romantic and luxurious destinations. From royal palaces and lakeside hotels to premium resorts, fine dining, and vibrant nightlife, Udaipur offers the perfect setting for a memorable social experience. Whether you are a traveller visiting the city, a business guest staying at a luxury hotel, or a resident looking for a private companion, our <strong className="text-amber-400 font-semibold">escort service Udaipur</strong> is designed to offer convenience, discretion, and professionalism.
                </p>
                <p>
                  If you are searching for <strong className="text-amber-400 font-semibold">Udaipur escorts service</strong>, <strong className="text-amber-400 font-semibold">best escort services Udaipur</strong>, <strong className="text-amber-400 font-semibold">VIP escort services Udaipur</strong>, or a trusted adult companionship platform, Girls of Passion offers verified profiles, quick response, and private booking support across major locations in Udaipur.
                </p>
                <p>
                  Our focus is simple: to deliver a premium, safe, and respectful companionship experience for adults who expect genuine profiles, professional service, and complete privacy.
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
                  <span className="font-semibold text-white">4.9/5</span> Average Rating
                </div>
                <div className="h-4 w-px bg-neutral-800" />
                <div>310+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/beautiful-escort-girls-udaipur.jpg" 
                  alt="Udaipur Escort Service Premium companion profile"
                  fill
                  priority
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                    ★ VIP Verified
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">Featured Companion</h3>
                  <p className="text-xs text-neutral-300">Available near Lake Pichola, Fatehpura & Resorts</p>
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
                <LeadForm defaultCity="udaipur" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our Udaipur Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our elite Udaipur adult companionship service</p>
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
                    <td className="px-6 py-4">Premium adult companionship in Udaipur</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4">Udaipur, Rajasthan</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4">Lake Pichola, Fateh Sagar, City Palace area, Hiran Magri, Sukher, Bhuwana, Udaipur hotels and resorts</td>
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
                    <td className="px-6 py-4">Travellers, business guests, private meetings, hotel companionship, social events, dinner dates</td>
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
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in Udaipur</h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our curated selection of elegant, independent, and VIP companions in Udaipur. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={`${p.name} - Udaipur Escort Companion`}
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
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Girls of Passion for Udaipur Escort Service?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  Choosing the right <strong className="text-white">Udaipur escort service</strong> is important because clients expect trust, privacy, genuine profiles, and professional coordination. In a popular tourist city like Udaipur, many people look for premium companionship, but not every platform provides the same level of reliability and confidentiality.
                </p>
                <p>
                  Girls of Passion focuses on creating a smooth and comfortable experience from the first inquiry to final confirmation.
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
                  'Discreet booking process',
                  'Fast response through call and WhatsApp',
                  '24x7 booking support',
                  'Premium and well-presented companions',
                  'Availability across major Udaipur locations',
                  'Clear information before confirmation',
                  'Privacy-focused adult companionship service'
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
                Our platform is built for adults who want a trusted service with comfort, elegance, and complete discretion.
              </p>
            </div>

            {/* What Makes Us Different? */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Premium Support</span>
              <h3 className="text-2xl font-bold text-white">Best Escort Services Udaipur – What Makes Us Different?</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Girls of Passion is focused on delivering one of the <strong className="text-white font-semibold">best escort services Udaipur</strong> experiences through quality, privacy, and professional support. We believe that a premium companionship service should not only provide availability but also ensure a smooth, respectful, and confidential experience.
              </p>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                What makes us different:
              </p>

              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Carefully reviewed profiles',
                  'Premium companion categories',
                  'Quick booking assistance',
                  'Transparent communication',
                  'Location-based availability',
                  'Respectful adult-only interaction',
                  'Reliable customer support',
                  'Confidential handling of inquiries'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </div>
                ))}
              </ul>

              <p className="text-xs text-neutral-400 mt-2">
                Clients choose us because we focus on trust, presentation, comfort, and privacy. This makes Girls of Passion a preferred platform for adults looking for professional companionship in Udaipur.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Udaipur Escorts Service with Verified & Genuine Profiles */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Image Block */}
            <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
              <Image 
                src="/assets/photos/exclusive-escort-service-udaipur.jpg" 
                alt="Udaipur Escorts Service Verified Profiles"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent" />
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Credibility & Trust</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Udaipur Escorts Service with Verified and Genuine Profiles</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                A professional <strong className="text-white">Udaipur escorts service</strong> should offer genuine profiles, clear communication, and privacy protection. At Girls of Passion, we understand that clients want confidence before booking. That is why we focus on verified profiles and professional coordination.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our profile selection focuses on:</h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Authenticity',
                    'Good presentation',
                    'Professional communication',
                    'Friendly behaviour',
                    'Comfort in social settings',
                    'Respectful client interaction',
                    'Privacy awareness'
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Whether you are looking for a companion for a dinner date, hotel visit, private event, city outing, or social company, our team helps you check suitable available options based on your preferences.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Premium Adult Companionship in Udaipur */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Refined Elegance</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Premium Adult Companionship in Udaipur</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Udaipur is a luxury destination, and many clients expect a refined companionship experience that matches the city’s charm. Girls of Passion offers premium adult companionship for clients who prefer elegance, privacy, and smooth communication.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our companionship service is suitable for:</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Dinner dates',
                    'Hotel companionship',
                    'Resort meetings',
                    'Private social occasions',
                    'Business travel companionship',
                    'City tours',
                    'Lakeside evenings',
                    'Luxury lifestyle experiences',
                    'Event companionship'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Every client has different expectations. Some prefer a sophisticated companion for a formal evening, while others may want a friendly and relaxed companion for private social company. Our support team helps clients find a suitable option based on availability, location, and comfort.
              </p>
            </div>

            {/* VIP Escort Services Udaipur Card */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">High-Class Offerings</span>
              <h3 className="mt-2 text-2xl font-bold text-white">VIP Escort Services Udaipur for Premium Experiences</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Our <strong className="text-white">VIP escort services Udaipur</strong> are designed for clients who prefer high-class companionship, refined presentation, and premium support. VIP companions are suitable for luxury hotels, private resorts, business evenings, exclusive events, and elegant social occasions.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">VIP companionship focuses on:</h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {[
                    'Sophisticated appearance',
                    'Professional communication',
                    'Premium presentation',
                    'Confidence in luxury settings',
                    'Priority booking support',
                    'Discreet coordination',
                    'Personalized assistance'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400 font-medium text-neutral-300">
                If you are looking for a premium adult companion in Udaipur, our VIP category offers a more refined and exclusive experience.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Escort Service Udaipur Available Across Major Locations */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Udaipur Coverage</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Escort Service Udaipur Available Across Major Locations</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Our <strong className="text-white">escort service Udaipur</strong> is available across popular areas, hotels, resorts, tourist zones, and residential locations in the city. Whether you are staying near Lake Pichola, Fateh Sagar, City Palace, or any premium resort area, our team can help you check profile availability.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                'Lake Pichola',
                'Fateh Sagar Lake',
                'City Palace area',
                'Hiran Magri',
                'Sukher',
                'Bhuwana',
                'Udaipur railway station area',
                'Airport Road',
                'Luxury hotels',
                'Private apartments',
                'Resorts and villas',
                'Business locations',
                'Tourist areas'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Udaipur Companion Location</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-400">
              This wide coverage makes it easier for clients searching for <strong className="text-white">Udaipur escorts service near me</strong> or <strong className="text-white">escort service Udaipur near me</strong> to find location-based options quickly.
            </p>
          </div>
        </section>

        {/* Section: Booking Steps & Process */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Booking Steps Card */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Fast Response</span>
              <h2 className="mt-2 text-2xl font-extrabold text-white">Call and WhatsApp Booking Process</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Booking with Girls of Passion is simple, fast, and discreet. Our website and support process are designed for adults who want easy access and clear communication.
              </p>
              
              <h3 className="mt-6 text-base font-bold text-white border-b border-neutral-800 pb-2">Simple Booking Steps</h3>
              
              <ol className="mt-6 space-y-4">
                {[
                  'Browse available companion profiles.',
                  'Select your preferred profile or category.',
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
                Our team responds quickly and assists you with profile availability, location coordination, and basic booking information. Whether you are a first-time client or a regular visitor, the process is simple and private.
              </p>
            </div>

            {/* Privacy Standards */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Confidentiality Assured</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Private and Discreet Udaipur Escort Service</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Privacy is one of the most important factors when choosing a <strong className="text-white">Udaipur escort service</strong>. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their personal details, communication, and booking information to remain private.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our privacy standards include:</h4>
                <ul className="space-y-3">
                  {[
                    'Secure communication',
                    'Confidential booking process',
                    'No unnecessary personal questions',
                    'Discreet coordination',
                    'Privacy-focused support',
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
                Every inquiry is handled professionally so that clients can feel comfortable and confident while booking.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Search Intents & local options */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Left Column */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Trust & Respect</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Trusted Adult Companion Service in Udaipur</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Many clients search for terms like <strong className="text-white">call girl Udaipur</strong>, <strong className="text-white">Udaipur call girl</strong>, <strong className="text-white">call girls service Udaipur</strong>, or <strong className="text-white">top call girls service in Udaipur</strong> when looking for adult companionship online. At Girls of Passion, we present this service in a more professional, respectful, and privacy-focused way.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Our platform is designed for adults who want:
              </p>

              <ul className="mt-4 space-y-2.5">
                {[
                  'Verified companion profiles',
                  'Fast booking assistance',
                  'Private communication',
                  'Premium companionship options',
                  'Udaipur location coverage',
                  'Professional support',
                  'Respectful adult-only service'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We focus on building trust through genuine profiles, discreet service, and clear communication before confirmation.
              </p>
            </div>

            {/* Right Column: Local Options */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Local Lifestyle</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Local Udaipur Companion Options</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion also provides local companion options for clients who prefer someone familiar with the city lifestyle. Local companions can be suitable for relaxed meetings, city outings, private social company, and comfortable companionship experiences.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Local companion options are ideal for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {[
                    'Residents of Udaipur',
                    'Travellers who want local guidance',
                    'Private social meetings',
                    'Short-duration companionship',
                    'City-based availability',
                    'Convenient location coordination'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our support team helps you check suitable options based on your location and preferred timing.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Models, Support, and Pricing */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-8 md:grid-cols-3">
            
            {/* Models Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Stylish Profiles</span>
              <h3 className="mt-2 text-xl font-bold text-white">Model and Premium Companion Profiles</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                For clients who prefer stylish, modern, and well-presented profiles, Girls of Passion offers model and premium companion categories. These profiles are suitable for clients looking for confidence, elegance, and a polished social presence.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Premium companion profiles are often preferred for:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Luxury hotel meetings', 'Private dinners', 'Social events', 'Business evenings', 'Resort companionship', 'Special occasions', 'High-class lifestyle experiences'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Every profile is selected with care to maintain the quality of the platform.
              </p>
            </div>

            {/* Support Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Round-The-Clock</span>
              <h3 className="mt-2 text-xl font-bold text-white">24x7 Udaipur Escort Service Support</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Girls of Passion offers 24x7 booking support for adults looking for private companionship in Udaipur. Whether you need help during the day, evening, or late night, our support team aims to respond quickly and professionally.
              </p>
              
              <h4 className="mt-4 font-semibold text-white text-xs uppercase tracking-wider mb-2">Our 24x7 support helps with:</h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {['Profile availability', 'Location-based options', 'Booking confirmation', 'Timing coordination', 'Category selection', 'Privacy-related questions'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-amber-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-400">
                Availability may depend on companion profile, location, timing, and booking schedule. Contact our team through call or WhatsApp for the latest available options.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Clear Communication</span>
              <h3 className="mt-2 text-xl font-bold text-white">Transparent Pricing and Clear Communication</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                A reliable <strong className="text-white">escort service Udaipur</strong> should always provide clear information before booking. At Girls of Passion, we believe in transparent communication so that clients can make informed decisions.
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
            </div>

          </div>
        </section>

        {/* Section: Affordable Companionship & Hotels/Resorts */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Affordable Premium */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Value & Quality</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Affordable Premium Companionship in Udaipur</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion aims to provide a premium companionship experience with flexible options. We understand that different clients have different preferences and budgets, so our platform offers multiple companion categories.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Clients can expect:</h4>
                <ul className="space-y-2">
                  {[
                    'Clear pricing details',
                    'Flexible options',
                    'No confusing booking process',
                    'Multiple profile categories',
                    'Premium and standard options',
                    'Value-focused companionship support'
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Our goal is to offer quality, comfort, and privacy while keeping the booking process simple and transparent.
              </p>
            </div>

            {/* Hotel & Resort Companionship */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Royal Stays</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Hotel and Resort Companionship in Udaipur</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Udaipur is famous for its luxury hotels, lake-view resorts, villas, and royal hospitality. Many travellers visit the city for holidays, weddings, business trips, and romantic getaways. Girls of Passion provides discreet companionship booking support for clients staying at hotels and resorts, subject to availability and local guidelines.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Hotel and resort companionship is suitable for:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {['Dinner dates', 'Private evenings', 'Social company', 'Business travel support', 'Resort stays', 'City visits', 'Luxury experiences'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Our team helps coordinate location and timing in a private and professional way.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Guidelines & Call Girls Service */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            
            {/* Guidelines */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Legal Guidelines</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Adult-Only Service with Respectful Guidelines</h2>
              
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Girls of Passion is strictly for adults aged 18 years and above. Clients must communicate respectfully and follow all applicable local laws and platform guidelines.
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3 text-sm">Our service guidelines include:</h4>
                <ul className="space-y-3">
                  {[
                    'Adult-only access',
                    'Respectful communication',
                    'Consent-based interaction',
                    'Privacy protection',
                    'Professional coordination',
                    'Lawful and responsible behaviour',
                    'Clear communication before confirmation'
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

            {/* Udaipur Call Girls Service */}
            <div className="flex flex-col justify-center rounded-xl border border-neutral-800 bg-neutral-900/35 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Search Keywords</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Udaipur Call Girls Service and Private Companion Booking</h3>
              
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Clients often search for <strong className="text-white font-semibold">Udaipur call girls service</strong>, <strong className="text-white font-semibold">best call girls service in Udaipur</strong>, or <strong className="text-white font-semibold">top call girls service in Udaipur</strong> when looking for private adult companionship. Girls of Passion offers a more reliable and professional platform where adults can check verified profiles and get booking support with privacy.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Our platform provides:</h4>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-400">
                  {['Quick call and WhatsApp support', 'Verified profiles', 'Discreet booking process', 'Udaipur-wide availability', 'Premium companion categories', 'Clear communication', '24x7 assistance'].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-500">
                For the latest availability, contact our support team directly and share your preferred location and timing.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Why Privacy Matters & Call to Action */}
        <section className="py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container-shell">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Absolute Confidentiality</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Why Privacy Matters in Udaipur Companionship Services</h2>
                  
                  <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                    Privacy is essential in adult companionship. Clients want assurance that their identity and booking details will remain confidential. Girls of Passion follows a discreet process to make every interaction private and comfortable.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    We do not make the booking process complicated. Our team only asks for the details required to check availability and coordinate the booking. Every step is handled with professionalism, respect, and confidentiality.
                  </p>
                  
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    This privacy-first approach makes Girls of Passion a dependable choice for adults looking for a premium <strong className="text-white">Udaipur escort service</strong>.
                  </p>

                  <h3 className="mt-8 text-xl font-bold text-white">Experience Premium Companionship in Udaipur Today</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    If you are looking for a trusted and premium <strong className="text-white">Udaipur escort service</strong>, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, VIP, model, independent-style, and local companion options.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Whether you are searching for <strong className="text-white">best escort services Udaipur</strong>, <strong className="text-white">VIP escort services Udaipur</strong>, <strong className="text-white">escort service Udaipur</strong>, or a private companion near you, our team can help you find suitable available options based on your preference.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  
                  <h3 className="text-center font-bold text-white text-base mb-2">Book Udaipur Escort Service Now</h3>

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
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Udaipur Booking Line</p>
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
              <a href="/udaipur/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/udaipur/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/udaipur/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/udaipur/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/udaipur/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
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
              <p className="mt-4 text-sm text-neutral-400">Clear answers regarding booking, location coverage, and security in Udaipur</p>
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
