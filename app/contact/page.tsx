import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

export const metadata: Metadata = {
  title: 'Contact Girls of Passion | 24x7 Escort Booking Support India',
  description:
    'Contact Girls of Passion 24x7 for discreet adult companionship booking across India. Call or WhatsApp for verified escort service in Delhi, Mumbai, Jaipur, Goa and 20+ cities.',
  alternates: {
    canonical: '/contact/',
    languages: {
      'en-IN': '/contact/',
      'x-default': '/contact/',
    },
  },
  openGraph: {
    title: 'Contact Girls of Passion | 24x7 Escort Booking Support India',
    description: 'Reach Girls of Passion 24x7 for premium, discreet companion booking anywhere in India.',
    url: '/contact/',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Girls of Passion',
    images: [{ url: '/assets/photos/luxury-escort-service-india.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    desc: 'Speak directly with our support team for immediate assistance.',
    action: `tel:${phone}`,
    label: 'Call Now',
    className: 'btn-gold',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Send us a WhatsApp message for quick, discreet booking support.',
    action: `https://wa.me/${whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20your%20services`,
    label: 'Message Us',
    className: 'btn-whatsapp',
    external: true,
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.girlsofpassion.in';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Girls of Passion',
  url: `${siteUrl}/contact/`,
  description: 'Contact Girls of Passion 24x7 for premium, discreet adult companionship booking across India.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Girls of Passion',
    url: siteUrl,
    telephone: phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="mt-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Contact <span className="text-[#D4AF37]">Girls of Passion</span>
            </h1>
            <div className="divider-gold mt-4" />
            <p className="text-lg text-[#B8B8B8] leading-relaxed mt-4">
              Our professional support team is available 24x7 for discreet booking assistance,
              availability queries, and private companion booking across India.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
            {contactMethods.map(({ icon: Icon, title, desc, action, label, className, external }) => (
              <div key={title} className="brand-card p-8">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#D4AF37]" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
                <p className="text-sm text-[#B8B8B8] mb-5 leading-relaxed">{desc}</p>
                <a
                  href={action}
                  className={className}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon size={15} />
                  {label}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl grid gap-4 md:grid-cols-2">
            <div className="brand-card p-6 flex items-start gap-4">
              <Clock size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-1">Support Hours</h3>
                <p className="text-sm text-[#B8B8B8]">24 hours / 7 days a week</p>
                <p className="text-xs text-[#555] mt-1">Available 365 days including holidays</p>
              </div>
            </div>
            <div className="brand-card p-6 flex items-start gap-4">
              <MapPin size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-1">Service Coverage</h3>
                <p className="text-sm text-[#B8B8B8]">Pan India – 23+ cities</p>
                <p className="text-xs text-[#555] mt-1">Hotels, private residences, tourist destinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0D0D0D]">
        <div className="container-shell max-w-3xl">
          <h2 className="text-2xl font-semibold mb-2">Frequently Asked</h2>
          <div className="divider-gold" />
          <div className="mt-6 space-y-4">
            {[
              { q: 'Is the booking process confidential?', a: 'Yes. All communication and booking details are handled with complete confidentiality. Your personal information is never shared with third parties.' },
              { q: 'How do I confirm availability in my city?', a: 'Contact us via call or WhatsApp with your city and preferred date. Our team will confirm availability and guide you through the booking process.' },
              { q: 'What cities do you cover?', a: 'Girls of Passion currently covers 23+ cities including Delhi, Mumbai, Jaipur, Goa, Hyderabad, Chennai, Indore, Dehradun, and more across India.' },
              { q: 'Is this service for adults only?', a: 'Yes. This service is strictly for adults aged 18 years and above. Users must follow applicable local laws and communicate respectfully.' },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-question">{q}</summary>
                <div className="faq-answer">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

