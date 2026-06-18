import type { Metadata } from 'next';
import { PolicyPage } from '@/components/layout/PolicyPage';

export const metadata: Metadata = {
  title: 'Refund Policy | Girls of Passion',
  description:
    'Refund policy for Girls of Passion covering paid placements, moderation decisions, failed transactions, and support requests.',
  alternates: { canonical: '/refund-policy/' },
  robots: { index: false, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Billing and refunds"
      title="Refund Policy"
      intro="This refund policy explains how Girls of Passion handles paid placements, failed transactions, and rejected submissions."
      sections={[
        {
          title: 'Free Enquiries',
          body: [
            'General visitor enquiries do not require payment. There is no charge for using public contact buttons, lead forms, or browsing published pages.',
          ],
        },
        {
          title: 'Paid Placements',
          body: [
            'Any paid placement, promotional listing, or sponsored visibility request is reviewed according to the selected plan, moderation status, and billing cycle.',
            'Sponsored visibility does not guarantee leads, conversions, or search engine rankings.',
          ],
        },
        {
          title: 'Rejected or Paused Listings',
          body: [
            'If a paid submission is rejected during moderation before activation, unused fees may be refunded or credited after admin review.',
            'Refunds may be declined for misleading submissions, duplicate requests, policy violations, prohibited content, or inaccurate contact details.',
          ],
        },
        {
          title: 'Processing Timeline',
          body: [
            'Approved refunds may take 5-10 business days depending on the payment provider, bank, and transaction method.',
          ],
        },
      ]}
    />
  );
}
