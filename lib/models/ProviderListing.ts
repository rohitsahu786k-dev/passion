import mongoose, { Document, Schema } from 'mongoose';

export interface IProviderListing extends Document {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  whatsapp: string;
  city: string;
  service: string;
  description: string;
  plan: 'free' | 'silver' | 'gold' | 'platinum';
  monthlyBudget: number;
  rankScore: number;
  website?: string;
  images: string[];
  status: 'pending' | 'approved' | 'rejected' | 'paused';
  isVerified: boolean;
  approvedAt?: Date;
}

const planWeight = {
  free: 0,
  silver: 100,
  gold: 250,
  platinum: 500
};

const ProviderListingSchema = new Schema<IProviderListing>(
  {
    businessName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    whatsapp: { type: String, required: true },
    city: { type: String, required: true, index: true },
    service: { type: String, required: true, index: true },
    description: { type: String, required: true, maxlength: 600 },
    plan: { type: String, default: 'free', enum: ['free', 'silver', 'gold', 'platinum'] },
    monthlyBudget: { type: Number, default: 0, min: 0 },
    rankScore: { type: Number, default: 0, index: true },
    website: String,
    images: [String],
    status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected', 'paused'], index: true },
    isVerified: { type: Boolean, default: false },
    approvedAt: Date
  },
  { timestamps: true }
);

ProviderListingSchema.pre('save', function calculateRankScore(next) {
  const plan = this.plan as keyof typeof planWeight;
  this.rankScore = planWeight[plan] + Math.min(this.monthlyBudget, 100000) / 100;
  next();
});

ProviderListingSchema.index({ city: 1, service: 1, status: 1, rankScore: -1 });
ProviderListingSchema.index({ email: 1, phone: 1 });

export const ProviderListing =
  mongoose.models.ProviderListing || mongoose.model<IProviderListing>('ProviderListing', ProviderListingSchema);
