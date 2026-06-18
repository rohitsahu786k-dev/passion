import { BadgeCheck, IndianRupee, MapPin, Star } from 'lucide-react';

export type ProviderCardData = {
  businessName: string;
  city: string;
  service: string;
  plan: 'Platinum' | 'Gold' | 'Silver' | 'Free';
  rank: number;
  rating: number;
  description: string;
};

const planClass = {
  Platinum: 'bg-ink text-white',
  Gold: 'bg-gold text-white',
  Silver: 'bg-sage text-white',
  Free: 'bg-white text-ink border border-line'
};

export function ProviderCard({ provider }: { provider: ProviderCardData }) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{provider.businessName}</h3>
            <BadgeCheck size={18} className="text-sage" />
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} />
              {provider.city}
            </span>
            <span className="inline-flex items-center gap-1">
              <Star size={14} />
              {provider.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${planClass[provider.plan]}`}>{provider.plan}</span>
      </div>
      <p className="text-sm leading-6 text-muted">{provider.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className="font-medium">{provider.service}</span>
        <span className="inline-flex items-center gap-1 text-muted">
          <IndianRupee size={14} />
          Rank {provider.rank}
        </span>
      </div>
    </article>
  );
}
