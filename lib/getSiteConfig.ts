import { unstable_cache } from 'next/cache';
import { connectDB } from './mongodb';
import { SiteConfig } from './models/SiteConfig';

export type SiteConfigData = {
  phone: string;
  whatsapp: string;
  email: string;
  adminEmail: string;
  siteName: string;
  siteTagline: string;
  instagram: string;
  telegram: string;
};

const defaults: SiteConfigData = {
  phone: process.env.NEXT_PUBLIC_PHONE || '+919999900101',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '919999900101',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  adminEmail: process.env.ADMIN_EMAIL || '',
  siteName: 'Girls of Passion',
  siteTagline: 'Premium Escort Service Across India',
  instagram: '',
  telegram: '',
};

export const getSiteConfig = unstable_cache(
  async (): Promise<SiteConfigData> => {
    try {
      await connectDB();
      const config = await SiteConfig.findOne().lean<SiteConfigData>();
      if (!config) return defaults;
      return {
        phone: config.phone || defaults.phone,
        whatsapp: config.whatsapp || defaults.whatsapp,
        email: config.email || defaults.email,
        adminEmail: config.adminEmail || defaults.adminEmail,
        siteName: config.siteName || defaults.siteName,
        siteTagline: config.siteTagline || defaults.siteTagline,
        instagram: config.instagram || defaults.instagram,
        telegram: config.telegram || defaults.telegram,
      };
    } catch {
      return defaults;
    }
  },
  ['site-config'],
  { revalidate: 3600, tags: ['site-config'] }
);
