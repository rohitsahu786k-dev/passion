import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'CityStyle India privacy policy for leads, listings, analytics, and provider submissions.'
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>CityStyle India collects customer enquiries and provider submissions to operate a legal local service directory.</p>
      <p>We may store name, phone, email, city, service interest, message, IP address, user agent, and UTM parameters for enquiry routing, fraud prevention, and analytics.</p>
      <p>Provider listing details may be reviewed by admins before publication. Sensitive payment data should be handled only by approved payment providers.</p>
      <p>Users can request correction or removal of their information by contacting the site administrator.</p>
    </PolicyLayout>
  );
}

function PolicyLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell max-w-3xl rounded-lg border border-line bg-white p-8">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-muted">{children}</div>
      </div>
    </section>
  );
}
