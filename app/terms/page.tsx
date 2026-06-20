import type { Metadata } from 'next';
import { PolicyPage } from '@/components/layout/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Girls of Passion',
  description:
    'Terms and conditions for using Girls of Passion, an adult-only companionship information and enquiry platform.',
  alternates: {
    canonical: '/terms/',
    languages: {
      'en-IN': '/terms/',
      'x-default': '/terms/',
    },
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Platform terms"
      title="Terms and Conditions"
      intro="By accessing Girls of Passion, you agree to use the website responsibly, lawfully, and only if you are at least 18 years old."
      sections={[
        {
          title: 'Adult-Only Access',
          body: [
            'This website is strictly intended for adults aged 18 years and above. By using the website, you confirm that you meet the minimum legal age requirement.',
            'Users must leave the website immediately if adult-oriented companionship content is restricted in their location.',
          ],
        },
        {
          title: 'Lawful and Respectful Use',
          body: [
            'Users are responsible for ensuring that their communication and use of the platform complies with all applicable local, state, and national laws.',
            'Girls of Passion does not promote or facilitate illegal activity. Any misuse, harassment, deceptive communication, or unlawful request may lead to refusal of support.',
          ],
        },
        {
          title: 'Information Accuracy',
          body: [
            'We aim to keep page content, service descriptions, availability, and contact details accurate. However, information may change without prior notice.',
            'Pricing, availability, response time, and service details may vary by city, timing, and operational conditions.',
          ],
        },
        {
          title: 'No Search Ranking Guarantee',
          body: [
            'SEO, indexing, and search visibility depend on search engine systems outside our direct control. Girls of Passion may improve technical SEO and content quality, but ranking is never guaranteed.',
          ],
        },
        {
          title: 'Limitation of Liability',
          body: [
            'The website is provided on an as-available basis. Girls of Passion is not responsible for losses caused by misuse of the website, third-party services, network issues, or incorrect information submitted by users.',
          ],
        },
      ]}
    />
  );
}
