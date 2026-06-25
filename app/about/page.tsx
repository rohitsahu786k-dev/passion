import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Shield, CheckCircle, Clock, Lock, MapPin, Star, Phone, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';
import { getSiteUrl } from '@/lib/seo/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Girls of Passion | 23+ Verified Cities',
  description: 'Learn about Girls of Passion, a premium 24x7 adult companionship platform with verified profiles, discreet booking, and support across 23+ cities.',
  path: '/about/',
  image: '/assets/photos/luxury-escort-service-india.jpg',
  imageAlt: 'Girls of Passion about page featured image',
});
const siteUrl = getSiteUrl();

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Girls of Passion',
  url: `${siteUrl}/about/`,
  description: 'Girls of Passion is India\'s premium adult companionship platform with verified profiles and 24x7 support.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Girls of Passion',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: 'Premium adult companionship platform across major Indian cities.',
    foundingDate: '2023',
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_PHONE || '+919999900101',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
  },
};

const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';
const whatsappUrl = createWhatsAppUrl(whatsapp, 'Hi, I am interested in your services');

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Privacy First', desc: 'All bookings are handled with strict confidentiality. Your personal information is never shared with third parties.' },
    { icon: CheckCircle, title: 'Verified Profiles', desc: 'Every companion profile is reviewed for authenticity and quality before being made available on the platform.' },
    { icon: Clock, title: '24x7 Support', desc: 'Our professional support team is available round the clock via call and WhatsApp for all booking inquiries.' },
    { icon: Lock, title: 'Safe & Discreet', desc: 'Consent-based, professional adult companionship with a focus on respectful and confidential interaction.' },
  ];

  const citiesGrid = [
    { name: 'Delhi', href: '/delhi-escort-service/' },
    { name: 'Mumbai', href: '/mumbai-escort-service/' },
    { name: 'Jaipur', href: '/jaipur-escort-service/' },
    { name: 'Goa', href: '/goa-escort-service/' },
    { name: 'Hyderabad', href: '/hyderabad-escort-service/' },
    { name: 'Pune', href: '/pune-escort-service/' },
    { name: 'Chennai', href: '/chennai-escort-service/' },
    { name: 'Udaipur', href: '/udaipur-escort-service/' },
    { name: 'Noida', href: '/noida-escort-service/' },
    { name: 'Indore', href: '/indore-escort-service/' },
    { name: 'Lucknow', href: '/lucknow-escort-service/' },
    { name: 'Jodhpur', href: '/jodhpur-escort-service/' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-xs font-semibold text-[#D4AF37]">
              <Star size={14} fill="currentColor" />
              India&apos;s Trusted Companion Platform
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              About <span className="text-[#D4AF37]">Girls of Passion</span>
            </h1>
            <div className="divider-gold mt-4" />
            <p className="text-lg text-[#B8B8B8] leading-relaxed mt-4">
              Girls of Passion is India&apos;s premium adult companionship platform — designed for discerning
              adults who value privacy, elegance, and professional service. We connect verified companions
              with clients across major Indian cities, tourist destinations, luxury hotels, and business hubs.
            </p>
            <p className="text-base text-[#B8B8B8] leading-relaxed mt-4">
              Since our founding, Girls of Passion has built a reputation for verified profiles, discreet
              booking, and 24x7 professional support. We are the preferred choice for business travelers,
              hotel guests, and adults seeking premium private companionship across India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-[#050505]">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-white mb-2">Our Core Values</h2>
          <div className="divider-gold" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="brand-card p-6">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#B8B8B8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-[#0D0D0D]">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Our Mission</h2>
            <div className="divider-gold" />
            <div className="mt-6 space-y-5 text-[#B8B8B8] leading-relaxed">
              <p>
                Girls of Passion was founded with a simple belief: premium adult companionship should be
                accessible, safe, private, and professional. We are committed to providing a platform where
                adults can connect with verified companions in a respectful, consent-based environment.
              </p>
              <p>
                We operate exclusively for adults aged 18 years and above. Every interaction on our platform
                is governed by our strict privacy policy, terms of service, and a professional code of conduct
                that ensures the dignity and safety of all parties.
              </p>
              <p>
                Our pan-India network covers major metros, tourist hubs, and premium destinations — making
                Girls of Passion the most accessible premium adult companionship service in India.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Why We Are Different</h2>
            <div className="divider-gold" />
            <ul className="mt-6 space-y-4">
              {[
                'Every companion profile is manually verified before listing',
                'Booking is discreet — no personal data shared with third parties',
                'Dedicated 24x7 support team via call and WhatsApp',
                'Coverage across 23+ Indian cities and premium destinations',
                'Transparent pricing shared before any booking confirmation',
                'Adult-only platform with strict consent-based guidelines',
                'Professional coordination from inquiry to confirmation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#B8B8B8]">
                  <CheckCircle size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* City Coverage */}
      <section className="section-pad bg-[#050505]">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-white mb-2">Our Service Coverage</h2>
          <div className="divider-gold" />
          <p className="mt-4 text-[#B8B8B8] text-sm mb-8">
            Girls of Passion operates in 23+ cities across India. Click any city to explore our services.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {citiesGrid.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="flex items-center gap-3 rounded-xl border border-[#2A2A2A] bg-[#151515] p-4 hover:border-[#D4AF37]/30 transition-colors group"
              >
                <MapPin size={16} className="text-[#D4AF37] shrink-0" />
                <span className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors">{city.name} Escort Service</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/india-escort-service/" className="text-sm text-[#D4AF37] hover:underline">
              View all India escort services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#0D0D0D]">
        <div className="container-shell max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-[#B8B8B8] text-sm mb-6">
            Contact Girls of Passion 24x7 for discreet, professional companion booking anywhere in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="btn-gold">
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={16} />
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-5 text-xs text-[#333]">18+ only. Follow applicable local laws.</p>
        </div>
      </section>
    </>
  );
}

