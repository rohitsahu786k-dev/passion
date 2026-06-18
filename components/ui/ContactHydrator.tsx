'use client';

import { useEffect } from 'react';

export function ContactHydrator() {
  useEffect(() => {
    let cancelled = false;

    async function hydrateContacts() {
      try {
        const res = await fetch('/api/site-config/', { cache: 'no-store' });
        if (!res.ok) return;
        const config = (await res.json()) as { phone?: string; whatsapp?: string };
        if (cancelled) return;

        if (config.phone) {
          document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((link) => {
            link.href = `tel:${config.phone}`;
          });
        }

        const whatsapp = config.whatsapp;
        if (whatsapp) {
          document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]').forEach((link) => {
            const url = new URL(link.href);
            const text = url.searchParams.get('text');
            link.href = `https://wa.me/${whatsapp.replace(/\D/g, '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
          });
        }
      } catch {
        // Keep server-rendered fallbacks if runtime config is unavailable.
      }
    }

    hydrateContacts();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
