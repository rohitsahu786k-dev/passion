import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  name: string;
  city: string;
  rating: number;
  review: string;
  service: string;
  isApproved: boolean;
  isFeatured: boolean;
}

const ReviewSchema = new Schema<IReview>(
  {
    name: { type: String, required: true },
    city: { type: String, required: true, index: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    service: String,
    isApproved: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

ReviewSchema.index({ city: 1, isApproved: 1 });

export const Review = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);
