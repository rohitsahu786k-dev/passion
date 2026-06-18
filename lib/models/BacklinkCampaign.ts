import mongoose, { Document, Schema } from 'mongoose';

export interface IBacklinkCampaign extends Document {
  name: string;
  moneySiteUrls: string[];
  keywords: string[];
  diagramId: string;
  articleTitle: string;
  articleBody: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  logs: string[];
  runAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BacklinkCampaignSchema = new Schema<IBacklinkCampaign>(
  {
    name: { type: String, required: true },
    moneySiteUrls: { type: [String], required: true },
    keywords: { type: [String], required: true },
    diagramId: { type: String, default: '1' },
    articleTitle: { type: String, default: '' },
    articleBody: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'running', 'completed', 'failed'],
      default: 'pending',
      index: true
    },
    logs: { type: [String], default: [] },
    runAt: { type: Date }
  },
  { timestamps: true }
);

BacklinkCampaignSchema.index({ createdAt: -1 });

export const BacklinkCampaign =
  mongoose.models.BacklinkCampaign ||
  mongoose.model<IBacklinkCampaign>('BacklinkCampaign', BacklinkCampaignSchema);
