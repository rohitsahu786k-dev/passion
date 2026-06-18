import type { Metadata } from 'next';
import { PolicyPage } from '@/components/layout/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Girls of Passion',
  description:
    'Privacy policy for Girls of Passion covering enquiries, analytics, cookies, contact details, and adult-only service communications.',
  alternates: { canonical: '/privacy-policy/' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy and data handling"
      title="Privacy Policy"
      intro="Girls of Passion respects visitor privacy and keeps enquiry handling discreet. This policy explains what data we collect, why we collect it, and how users can request updates or removal."
      sections={[
        {
          title: 'Information We Collect',
          body: [
            'We may collect name, phone number, WhatsApp number, email address, city, selected service, message details, IP address, browser user agent, referrer, and UTM campaign parameters when a visitor submits an enquiry or contacts us.',
            'We may also collect analytics events such as page views, button clicks, and traffic source data to understand website performance and improve user experience.',
          ],
        },
        {
          title: 'How We Use Information',
          body: [
            'Enquiry details are used to respond to visitor requests, coordinate support, prevent misuse, improve service quality, and maintain website security.',
            'Analytics data is used in aggregate form for SEO, conversion tracking, technical troubleshooting, and content planning. It is not used to publicly identify individual visitors.',
          ],
        },
        {
          title: 'Cookies and Analytics',
          body: [
            'Girls of Passion may use Google Analytics and similar tools to measure traffic and engagement. These tools can set cookies or use device identifiers according to their own policies.',
            'Visitors can control cookies through browser settings. Disabling cookies may affect analytics accuracy but should not prevent basic website access.',
          ],
        },
        {
          title: 'Data Sharing',
          body: [
            'We do not sell personal enquiry data. Information may be shared only with trusted operational tools, hosting providers, analytics providers, or legal authorities when required by applicable law.',
            'Sensitive payment information should only be handled by approved payment providers and should not be shared through normal enquiry forms.',
          ],
        },
        {
          title: 'Correction and Removal Requests',
          body: [
            'Users may request correction or removal of their personal enquiry information by contacting the website administrator through the contact page.',
            'We may retain limited logs where needed for fraud prevention, security, compliance, or dispute handling.',
          ],
        },
      ]}
    />
  );
}
