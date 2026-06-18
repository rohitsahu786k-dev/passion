import { absoluteUrl, getSiteUrl } from '@/lib/seo/site';

type BlogSchemaProps = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  cityName?: string;
  serviceName?: string;
  faqs?: Array<{ question: string; answer: string }>;
};

export function BlogSchema({
  title,
  slug,
  excerpt,
  publishedAt,
  updatedAt,
  cityName = 'India',
  serviceName = 'Escort Service',
  faqs = [],
}: BlogSchemaProps) {
  const siteUrl = getSiteUrl();
  const siteName = 'Girls of Passion';
  const articleUrl = absoluteUrl(`/blog/${slug}/`);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    author: {
      '@type': 'Organization',
      name: `${siteName} Editorial Team`,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg`, width: 512, height: 512 },
    },
    datePublished: publishedAt,
    dateModified: updatedAt,
    url: articleUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'Blog', name: `${siteName} Blog`, url: `${siteUrl}/blog/` },
    about: { '@type': 'Thing', name: `${serviceName} in ${cityName}` },
    keywords: [
      `escort service ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} companion`,
      `${serviceName.toLowerCase()} india`,
    ].join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog & Guides', item: `${siteUrl}/blog/` },
      { '@type': 'ListItem', position: 3, name: title, item: articleUrl },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Book Escort Service in ${cityName}`,
    description: `Step-by-step guide to booking a verified escort service in ${cityName} through Girls of Passion.`,
    totalTime: 'PT10M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contact Girls of Passion',
        text: 'Call or WhatsApp Girls of Passion to enquire about available verified companion profiles in your city.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Share Your Requirements',
        text: `Tell us your preferred location in ${cityName}, the date, timing, and any specific requirements or preferences.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Receive Profile Details',
        text: 'Our team will share verified companion profile details and availability matching your requirements.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Confirm & Meet',
        text: 'Confirm the booking after reviewing details. The companion arrives at your location on time, discreetly and professionally.',
      },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
}
