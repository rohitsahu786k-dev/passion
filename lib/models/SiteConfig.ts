import mongoose, { Document, Schema } from 'mongoose';

export interface ISiteConfig extends Document {
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
  pageContacts: Array<{
    path: string;
    phone: string;
    whatsapp: string;
  }>;
}

const SiteConfigSchema = new Schema<ISiteConfig>(
  {
    phone: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
    email: { type: String, default: '' },
    adminEmail: { type: String, default: '' },
    siteName: { type: String, default: 'Girls of Passion' },
    siteTagline: { type: String, default: '' },
    instagram: { type: String, default: '' },
    telegram: { type: String, default: '' },
    topStripEnabled: { type: Boolean, default: true },
    topStripText: {
      type: String,
      default: 'This website / page is available for rent! Drive targeted leads & calls to your business.',
    },
    topStripEmail: { type: String, default: 'pws1753@gmail.com' },
    pageContacts: {
      type: [
        {
          path: { type: String, default: '' },
          phone: { type: String, default: '' },
          whatsapp: { type: String, default: '' },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const SiteConfig =
  mongoose.models.SiteConfig || mongoose.model<ISiteConfig>('SiteConfig', SiteConfigSchema);
