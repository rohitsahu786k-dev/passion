'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function RentalStrip() {
  const [copied, setCopied] = useState(false);
  const email = 'pws1753@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-rental {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-custom {
          display: flex;
          animation: marquee-rental 25s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
      `}} />

      <div 
        className="bg-gradient-to-r from-[#9A7B1C] via-[#D4AF37] to-[#9A7B1C] text-black py-2 px-4 flex items-center justify-between border-b border-[#B89424] select-none z-[999] relative h-10 shadow-sm"
        role="complementary"
        aria-label="Rental Announcement Banner"
      >
        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative flex items-center h-full mr-4">
          <div className="animate-marquee-custom whitespace-nowrap flex gap-16 text-xs md:text-sm font-bold tracking-wider uppercase">
            <span>🔥 This website / page is available for rent! Drive targeted leads & calls to your business. Contact us: {email} 🔥</span>
            <span>🔥 This website / page is available for rent! Drive targeted leads & calls to your business. Contact us: {email} 🔥</span>
          </div>
        </div>

        {/* Copy Button (Fixed on the right) */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 bg-black hover:bg-neutral-900 text-[#D4AF37] hover:text-white px-3 py-1 rounded-md text-xs font-bold transition-all duration-200 border border-black active:scale-95 shadow-md shrink-0"
          title="Copy email address"
          aria-label="Copy contact email"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-400 shrink-0" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} className="shrink-0" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
