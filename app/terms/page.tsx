import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms for using CityStyle India local service directory.'
};

export default function TermsPage() {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell max-w-3xl rounded-lg border border-line bg-white p-8">
        <h1 className="text-4xl font-semibold">Terms and Conditions</h1>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-muted">
          <p>CityStyle India is a discovery and listing platform for legal local services. Providers are responsible for their own claims, pricing, licensing, taxes, and customer communication.</p>
          <p>Listings may be edited, rejected, paused, or removed if they violate platform rules, misrepresent services, or include prohibited content.</p>
          <p>Sponsored placement affects visibility after approval. It does not guarantee leads, sales, ranking on external search engines, or permanent placement.</p>
          <p>Users should verify provider details before booking and use common care while sharing personal or payment information.</p>
        </div>
      </div>
    </section>
  );
}
