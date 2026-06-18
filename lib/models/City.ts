import mongoose, { Document, Schema } from 'mongoose';

export interface ICity extends Document {
  name: string;
  slug: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string;
  faqs: Array<{ question: string; answer: string }>;
  services: string[];
  localLandmarks: string[];
  phone: string;
  whatsapp: string;
  address: string;
  rating: number;
  reviewCount: number;
  isActive: boolean;
}

const CitySchema = new Schema<ICity>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    state: { type: String, required: true },
    metaTitle: { type: String, required: true, maxlength: 60 },
    metaDescription: { type: String, required: true, maxlength: 160 },
    h1: { type: String, required: true },
    content: { type: String, required: true },
    faqs: [{ question: String, answer: String }],
    services: [String],
    localLandmarks: [String],
    phone: String,
    whatsapp: String,
    address: String,
    rating: { type: Number, default: 4.7, min: 1, max: 5 },
    reviewCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

CitySchema.index({ isActive: 1 });

export const City = mongoose.models.City || mongoose.model<ICity>('City', CitySchema);
