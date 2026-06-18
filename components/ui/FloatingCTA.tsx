'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const DEFAULT_PHONE = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const DEFAULT_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

interface FloatingCTAProps {
  phone?: string;
  whatsapp?: string;
}

export function FloatingCTA({ phone = DEFAULT_PHONE, whatsapp = DEFAULT_WHATSAPP }: FloatingCTAProps) {
  const [desktopVisible, setDesktopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setDesktopVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile bottom bar — always visible */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[#2A2A2A] bg-[#0D0D0D] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] md:hidden">
        <a
          href={`tel:${phone}`}
          className="flex h-14 items-center justify-center gap-2 text-sm font-semibold text-black bg-[#D4AF37] hover:bg-[#E8C53A] transition-colors"
          aria-label="Call Now"
        >
          <Phone size={17} />
          Call Now
        </a>
        <a
          href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center gap-2 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5a] transition-colors"
          aria-label="WhatsApp Booking"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>

      {/* Desktop floating buttons — after 300px scroll */}
      {desktopVisible && (
        <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
          <a
            href={`tel:${phone}`}
            className="floating-btn floating-call"
            aria-label="Call Now"
            title="Call Now"
          >
            <Phone size={20} />
          </a>
          <a
            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn floating-wa"
            aria-label="WhatsApp Booking"
            title="WhatsApp Booking"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      )}
    </>
  );
}
