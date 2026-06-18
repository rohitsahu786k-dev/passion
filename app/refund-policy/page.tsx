import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund policy for sponsored listings on CityStyle India.'
};

export default function RefundPolicyPage() {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell max-w-3xl rounded-lg border border-line bg-white p-8">
        <h1 className="text-4xl font-semibold">Refund Policy</h1>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-muted">
          <p>Free listings do not require payment. Sponsored listing payments are reviewed according to the selected plan and billing cycle.</p>
          <p>If a paid listing is rejected during moderation, unused sponsored fees may be refunded or credited after admin review.</p>
          <p>No refund is guaranteed for policy violations, inaccurate submissions, duplicate listings, or services outside approved categories.</p>
          <p>Approved refunds may take 5-10 business days depending on the payment provider.</p>
        </div>
      </div>
    </section>
  );
}
