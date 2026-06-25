'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';

const DEFAULT_PHONE = process.env.NEXT_PUBLIC_PHONE || '+919999900101';
const DEFAULT_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

const locations = [
  { name: 'Delhi', slug: 'delhi-escort-service' },
  { name: 'Mumbai', slug: 'mumbai-escort-service' },
  { name: 'Jaipur', slug: 'jaipur-escort-service' },
  { name: 'Udaipur', slug: 'udaipur-escort-service' },
  { name: 'Jodhpur', slug: 'jodhpur-escort-service' },
  { name: 'Ajmer', slug: 'ajmer-escort-service' },
  { name: 'Goa', slug: 'goa-escort-service' },
  { name: 'Hyderabad', slug: 'hyderabad-escort-service' },
  { name: 'Chennai', slug: 'chennai-escort-service' },
  { name: 'Indore', slug: 'indore-escort-service' },
  { name: 'Dehradun', slug: 'dehradun-escort-service' },
  { name: 'Guwahati', slug: 'guwahati-escort-service' },
  { name: 'Daman', slug: 'daman-escort-service' },
  { name: 'Manali', slug: 'manali-escort-service' },
  { name: 'Rishikesh', slug: 'rishikesh-escort-service' },
  { name: 'Pune', slug: 'pune-escort-service' },
  { name: 'Noida', slug: 'noida-escort-service' },
  { name: 'Surat', slug: 'surat-escort-service' },
  { name: 'Kanpur', slug: 'kanpur-escort-service' },
  { name: 'Lucknow', slug: 'lucknow-escort-service' },
  { name: 'Nathdwara', slug: 'nathdwara-escort-service' },
  { name: 'Mount Abu', slug: 'maunt-abu-escort-service' },
  { name: 'Jawai', slug: 'jawai-escort-service' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'India', href: '/india-escort-service/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

interface NavbarProps {
  phone?: string;
  whatsapp?: string;
}

export function Navbar({ phone = DEFAULT_PHONE, whatsapp = DEFAULT_WHATSAPP }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = createWhatsAppUrl(whatsapp, 'Hi, I am interested in your services');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)] border-b border-[#2A2A2A]'
          : 'bg-[#050505]/95 backdrop-blur-sm border-b border-[#1a1a1a]'
      }`}
    >
      <div className="container-shell flex h-16 items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Girls of Passion Home">
          <Image
            src="/logo.svg"
            alt="Girls of Passion Logo"
            width={36}
            height={36}
            priority
            className="rounded-full"
          />
          <span className="font-bold leading-tight block">
            <span className="text-[#D4AF37] text-sm sm:text-base">Girls of</span>{' '}
            <span className="text-white text-sm sm:text-base">Passion</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Locations Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-md text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Locations
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#151515] border border-[#2A2A2A] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden z-50">
                <div className="p-2 grid grid-cols-2 gap-0.5 max-h-80 overflow-y-auto">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}/`}
                      onClick={() => setDropdownOpen(false)}
                      className="px-3 py-2 text-xs text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#1f1f1f] rounded-lg transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/privacy-policy/"
            className="px-3 py-2 rounded-md text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
          >
            Privacy
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="btn-gold text-sm px-4 py-2"
            aria-label="Call Now"
          >
            <Phone size={14} />
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-whatsapp text-sm px-4 py-2"
            aria-label="WhatsApp Booking"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile: Call icon + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#D4AF37] text-black"
            aria-label="Call Now"
          >
            <Phone size={16} />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-md border border-[#2A2A2A] text-[#B8B8B8]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileOpen ? 'open' : ''}`}>
        <div className="container-shell pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Locations */}
          <div>
            <button
              onClick={() => setMobileLocOpen(!mobileLocOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
            >
              <span>Locations</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileLocOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileLocOpen && (
              <div className="grid grid-cols-2 gap-0.5 mx-4 mt-1 p-2 bg-[#151515] rounded-xl border border-[#2A2A2A]">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/${loc.slug}/`}
                    onClick={() => { setMobileOpen(false); setMobileLocOpen(false); }}
                    className="px-3 py-2 text-xs text-[#B8B8B8] hover:text-[#D4AF37] rounded-lg transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/privacy-policy/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#151515] transition-colors"
          >
            Terms &amp; Conditions
          </Link>

          {/* Mobile CTAs */}
          <div className="flex gap-3 mt-3 pt-3 border-t border-[#2A2A2A]">
            <a
              href={`tel:${phone}`}
              className="btn-gold flex-1 justify-center text-sm py-2.5"
            >
              <Phone size={14} />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-whatsapp flex-1 justify-center text-sm py-2.5"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-center text-[#555] mt-2 px-4">
            Adult service — 18+ only. Communicate respectfully.
          </p>
        </div>
      </div>
    </header>
  );
}
