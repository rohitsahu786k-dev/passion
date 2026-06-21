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
  topStripEnabled: boolean;
  topStripText: string;
  topStripEmail: string;
  pageContacts: PageContactConfig[];
};

export type PageContactConfig = {
  path: string;
  phone: string;
  whatsapp: string;
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
  topStripEnabled: true,
  topStripText: 'This website / page is available for rent! Drive targeted leads & calls to your business.',
  topStripEmail: 'pws1753@gmail.com',
  pageContacts: [],
};

function normalizePath(path = '/') {
  const clean = path.split('?')[0].split('#')[0].trim() || '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export function resolvePageContact(config: SiteConfigData, path = '/') {
  const normalizedPath = normalizePath(path);
  const override = config.pageContacts.find((item) => normalizePath(item.path) === normalizedPath);
  return {
    phone: override?.phone || config.phone,
    whatsapp: override?.whatsapp || config.whatsapp,
  };
}

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
        topStripEnabled: config.topStripEnabled ?? defaults.topStripEnabled,
        topStripText: config.topStripText || defaults.topStripText,
        topStripEmail: config.topStripEmail || defaults.topStripEmail,
        pageContacts: Array.isArray(config.pageContacts)
          ? config.pageContacts
              .filter((item) => item?.path)
              .map((item) => ({
                path: normalizePath(item.path),
                phone: item.phone || '',
                whatsapp: item.whatsapp || '',
              }))
          : defaults.pageContacts,
      };
    } catch {
      return defaults;
    }
  },
  ['site-config'],
  { revalidate: 3600, tags: ['site-config'] }
);
