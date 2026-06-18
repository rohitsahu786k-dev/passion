import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  keywords: string[];
  city: string;
  cityName: string;
  service: string;
  author: { name: string; designation: string; image?: string };
  featuredImage?: { url: string; alt: string; width: number; height: number };
  inlineImages?: Array<{ url: string; alt: string; width: number; height: number }>;
  videos?: Array<{ id: string; title: string; description: string; uploadDate: string }>;
  faqs: Array<{ question: string; answer: string }>;
  tags: string[];
  category: string;
  readingTime: number;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true, maxlength: 160 },
    metaTitle: { type: String, required: true, maxlength: 60 },
    metaDescription: { type: String, required: true, maxlength: 160 },
    focusKeyword: { type: String, required: true },
    keywords: [String],
    city: { type: String, index: true },
    cityName: String,
    service: { type: String, index: true },
    author: { name: String, designation: String, image: String },
    featuredImage: { url: String, alt: String, width: Number, height: Number },
    inlineImages: [{ url: String, alt: String, width: Number, height: Number }],
    videos: [{ id: String, title: String, description: String, uploadDate: String }],
    faqs: [{ question: String, answer: String }],
    tags: [String],
    category: String,
    readingTime: { type: Number, default: 5 },
    isPublished: { type: Boolean, default: false, index: true },
    isFeatured: { type: Boolean, default: false },
    publishedAt: { type: Date, index: true }
  },
  { timestamps: true }
);

BlogSchema.index({ city: 1, service: 1, isPublished: 1 });
BlogSchema.index({ slug: 1, isPublished: 1 });
BlogSchema.index({ publishedAt: -1 });

export const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
