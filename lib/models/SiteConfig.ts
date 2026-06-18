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
  },
  { timestamps: true }
);

export const SiteConfig =
  mongoose.models.SiteConfig || mongoose.model<ISiteConfig>('SiteConfig', SiteConfigSchema);
