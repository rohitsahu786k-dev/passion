import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Shield, Clock } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';

const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';
const whatsappUrl = createWhatsAppUrl(whatsapp, 'Hi, I am interested in your services');

const topCities = [
  { name: 'Delhi Escort Service', href: '/delhi-escort-service/' },
  { name: 'Mumbai Escort Service', href: '/mumbai-escort-service/' },
  { name: 'Jaipur Escort Service', href: '/jaipur-escort-service/' },
  { name: 'Goa Escort Service', href: '/goa-escort-service/' },
  { name: 'Hyderabad Escort Service', href: '/hyderabad-escort-service/' },
  { name: 'Chennai Escort Service', href: '/chennai-escort-service/' },
  { name: 'Indore Escort Service', href: '/indore-escort-service/' },
  { name: 'Dehradun Escort Service', href: '/dehradun-escort-service/' },
  { name: 'Ajmer Escort Service', href: '/ajmer-escort-service/' },
  { name: 'Udaipur Escort Service', href: '/udaipur-escort-service/' },
];

const moreCities = [
  { name: 'Jodhpur Escort Service', href: '/jodhpur-escort-service/' },
  { name: 'Guwahati Escort Service', href: '/guwahati-escort-service/' },
  { name: 'Daman Escort Service', href: '/daman-escort-service/' },
  { name: 'Manali Escort Service', href: '/manali-escort-service/' },
  { name: 'Rishikesh Escort Service', href: '/rishikesh-escort-service/' },
  { name: 'Pune Escort Service', href: '/pune-escort-service/' },
  { name: 'Noida Escort Service', href: '/noida-escort-service/' },
  { name: 'Surat Escort Service', href: '/surat-escort-service/' },
  { name: 'Lucknow Escort Service', href: '/lucknow-escort-service/' },
  { name: 'Kanpur Escort Service', href: '/kanpur-escort-service/' },
  { name: 'Mount Abu Escort Service', href: '/maunt-abu-escort-service/' },
  { name: 'Nathdwara Escort Service', href: '/nathdwara-escort-service/' },
  { name: 'Jawai Escort Service', href: '/jawai-escort-service/' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'India Escort Service', href: '/india-escort-service/' },
  { label: 'Blog & Guides', href: '/blog/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Contact Us', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export function Footer() {
  return (
    <footer
      className="bg-[#0D0D0D] border-t border-[#2A2A2A]"
      aria-label="Site Footer"
    >
      {/* Main footer grid */}
      <div className="container-shell py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

        {/* Brand column */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Girls of Passion Home">
            <Image
              src="/logo.svg"
              alt="Girls of Passion"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg leading-tight">
              <span className="text-[#D4AF37]">Girls of</span>
              <br />
              <span className="text-white">Passion</span>
            </span>
          </Link>

          <p className="text-sm text-[#B8B8B8] leading-relaxed mb-5 max-w-xs">
            India&apos;s premium adult companionship platform — verified profiles, discreet booking,
            and professional 24x7 support across major cities, hotels, and private stays.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <a
              href={`tel:${phone}`}
              className="btn-gold text-xs px-4 py-2"
              aria-label="Call Now"
            >
              <Phone size={13} />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs px-4 py-2"
              aria-label="WhatsApp Booking"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
          </div>

          <div className="flex items-start gap-2 text-xs text-[#555] leading-relaxed max-w-xs">
            <Shield size={13} className="shrink-0 mt-0.5 text-[#D4AF37]" />
            <span>
              Strictly for adults aged 18+. All users must follow applicable local laws
              and communicate respectfully.
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#B8B8B8] hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top City Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Top Cities
          </h3>
          <ul className="flex flex-col gap-2.5">
            {topCities.map((city) => (
              <li key={city.href}>
                <Link
                  href={city.href}
                  className="text-sm text-[#B8B8B8] hover:text-[#D4AF37] transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Locations */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            More Locations
          </h3>
          <ul className="flex flex-col gap-2.5">
            {moreCities.map((city) => (
              <li key={city.href}>
                <Link
                  href={city.href}
                  className="text-sm text-[#B8B8B8] hover:text-[#D4AF37] transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 24x7 badge */}
          <div className="mt-6 flex items-center gap-2 text-xs text-[#D4AF37]">
            <Clock size={13} />
            <span className="font-medium">24x7 Support Available</span>
          </div>
          <p className="text-xs text-[#555] mt-1">Call or WhatsApp anytime</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="container-shell py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555]">
          <p>
            &copy; {new Date().getFullYear()} Girls of Passion. All rights reserved.
          </p>
          <p className="text-center sm:text-right max-w-sm">
            Adult-only service (18+). Not available in regions where restricted by law.
          </p>
        </div>
      </div>
    </footer>
  );
}
