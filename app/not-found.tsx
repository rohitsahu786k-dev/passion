import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, MessageCircle, Home, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 – Page Not Found | Girls of Passion',
  description: 'The page you are looking for could not be found. Browse verified escort services across India.',
  robots: { index: false, follow: true },
};

const phone = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';
const whatsappUrl = `https://wa.me/${whatsapp}?text=Hi%2C%20I%20need%20help`;

export default function NotFound() {
  const cities = [
    { name: 'Delhi', href: '/delhi-escort-service/' },
    { name: 'Mumbai', href: '/mumbai-escort-service/' },
    { name: 'Jaipur', href: '/jaipur-escort-service/' },
    { name: 'Goa', href: '/goa-escort-service/' },
    { name: 'Hyderabad', href: '/hyderabad-escort-service/' },
    { name: 'Pune', href: '/pune-escort-service/' },
  ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="text-8xl font-extrabold text-[#D4AF37] opacity-20 select-none">404</div>
      <h1 className="mt-4 text-3xl font-bold text-white">Page Not Found</h1>
      <p className="mt-3 max-w-md text-[#B8B8B8] text-sm leading-relaxed">
        The page you are looking for does not exist or has moved. Explore our verified escort services across India.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-gold">
          <Home size={16} />
          Go Home
        </Link>
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
          WhatsApp
        </a>
      </div>

      <div className="mt-12 w-full max-w-lg">
        <p className="text-xs uppercase tracking-widest text-[#555] mb-4">Top Cities</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="flex items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#151515] px-4 py-3 text-sm text-[#B8B8B8] hover:border-[#D4AF37]/30 hover:text-white transition-colors"
            >
              {city.name}
              <ArrowRight size={14} className="text-[#D4AF37]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
