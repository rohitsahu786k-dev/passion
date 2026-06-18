import type { Metadata } from 'next';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { ListingForm } from '@/components/ui/ListingForm';

export const metadata: Metadata = {
  title: 'List Your Service',
  description: 'Submit a Girls of Passion listing request for approval, moderation, and sponsored visibility review.'
};

export default function ListYourServicePage() {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-muted">
            <ShieldCheck size={16} />
            Manual approval required
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Grow your local visibility with sponsored listings</h1>
          <p className="mt-5 text-base leading-7 text-muted">
            Providers can submit name, email, phone, WhatsApp, city, service, description, and sponsored plan. Higher paid plans get stronger rank weight after approval.
          </p>
          <div className="mt-8 rounded-lg border border-line bg-white p-5">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <TrendingUp size={18} className="text-coral" />
              Ranking formula
            </div>
            <p className="text-sm leading-6 text-muted">
              rankScore = plan weight + sponsored budget score + verification quality + freshness. Admins can pause, approve, reject, or feature listings.
            </p>
          </div>
        </div>
        <ListingForm />
      </div>
    </section>
  );
}
