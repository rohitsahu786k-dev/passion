import mongoose, { Document, Schema } from 'mongoose';

export interface IPaymentPlan extends Document {
  name: string;
  slug: 'free' | 'silver' | 'gold' | 'platinum';
  monthlyPrice: number;
  rankWeight: number;
  features: string[];
  isActive: boolean;
}

const PaymentPlanSchema = new Schema<IPaymentPlan>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, enum: ['free', 'silver', 'gold', 'platinum'] },
    monthlyPrice: { type: Number, required: true },
    rankWeight: { type: Number, required: true },
    features: [String],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const PaymentPlan = mongoose.models.PaymentPlan || mongoose.model<IPaymentPlan>('PaymentPlan', PaymentPlanSchema);
