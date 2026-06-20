import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PolicyPage } from '@/components/layout/PolicyPage';

export const metadata: Metadata = buildPageMetadata({
  title: 'Listing Policy | 7 Verified Quality Rules',
  description: 'Review 7 listing quality rules for verification, moderation, profile accuracy, prohibited content, sponsored visibility, and adult-only standards.',
  path: '/listing-policy/',
  image: '/assets/photos/luxury-escort-service-india.jpg',
  imageAlt: 'Listing policy featured image',
});
export default function ListingPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Listing quality rules"
      title="Listing Policy"
      intro="Girls of Passion keeps listings selective, adult-only, and quality controlled. This policy explains what may be accepted, edited, paused, or removed."
      sections={[
        {
          title: 'Profile Quality',
          body: [
            'Listings must use accurate city, service category, contact details, descriptions, and media. Misleading claims, copied profiles, or low-quality submissions can be rejected.',
            'Admins may edit formatting, remove unsafe claims, request clarification, or pause listings that require review.',
          ],
        },
        {
          title: 'Verification and Moderation',
          body: [
            'Every listing can be reviewed for authenticity, safety, privacy, and compliance before publication or promotion.',
            'Verification status, freshness, profile quality, location relevance, and admin controls may influence visibility.',
          ],
        },
        {
          title: 'Prohibited Content',
          body: [
            'Girls of Passion does not accept content involving minors, coercion, explicit illegal activity, deceptive claims, stolen images, harassment, or unsafe requests.',
            'Any submission that appears unlawful or abusive may be removed without notice.',
          ],
        },
        {
          title: 'Sponsored Visibility',
          body: [
            'Sponsored placement can improve on-site visibility after approval. It does not guarantee leads, conversions, search engine rankings, or permanent placement.',
          ],
        },
      ]}
    />
  );
}
