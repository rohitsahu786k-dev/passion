import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Listing Policy',
  description: 'Allowed categories, approval rules, and ranking policy for CityStyle India providers.'
};

export default function ListingPolicyPage() {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell max-w-3xl rounded-lg border border-line bg-white p-8">
        <h1 className="text-4xl font-semibold">Listing Policy</h1>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-muted">
          <p>Allowed categories include beauty, grooming, wellness, event talent, photography, portfolio, travel concierge, and other legal local services approved by administrators.</p>
          <p>Every listing must include accurate contact details, city, category, service description, and business identity. Misleading claims can lead to removal.</p>
          <p>Sponsored ranking is calculated after approval using plan level, optional budget, verification, profile quality, freshness, and admin controls.</p>
          <p>Listings involving illegal services, deceptive claims, unsafe services, or prohibited adult-service promotion are not accepted.</p>
        </div>
      </div>
    </section>
  );
}
