import mongoose, { Document, Schema } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  message?: string;
  source: string;
  sourceUrl?: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  ip?: string;
  userAgent?: string;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: String,
    city: { type: String, required: true, index: true },
    service: { type: String, required: true },
    message: String,
    source: { type: String, default: 'website' },
    sourceUrl: String,
    status: { type: String, default: 'new', enum: ['new', 'contacted', 'converted', 'lost'] },
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,
    ip: String,
    userAgent: String
  },
  { timestamps: true }
);

LeadSchema.index({ city: 1, status: 1 });
LeadSchema.index({ createdAt: -1 });

export const Lead = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
