import { cityPhotoSlug } from '@/lib/seo/site';

type CitySchemaProps = {
  cityName: string;
  serviceName?: string;
  phone: string;
  address: string;
  rating: number;
  reviewCount: number;
  url: string;
  faqs: Array<{ question: string; answer: string }>;
  imageUrl?: string;
};

export function CitySchema({
  cityName,
  serviceName,
  phone,
  address,
  rating,
  reviewCount,
  url,
  faqs,
  imageUrl,
}: CitySchemaProps) {
  const brand = 'Girls of Passion';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlsofpassion.in';
  const label = serviceName ? `${serviceName} in ${cityName}` : `${cityName} Escort Service`;
  const citySlug = cityPhotoSlug(cityName.toLowerCase().replace(/\s+/g, '-'));

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${brand} – ${cityName}`,
    description: `Premium adult companionship in ${cityName} with verified profiles, discreet booking, and 24x7 professional support.`,
    url,
    telephone: phone,
    image: imageUrl || `${siteUrl}/assets/photos/beautiful-${citySlug}-escorts.jpg`,
    logo: `${siteUrl}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: cityName,
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: cityName },
      { '@type': 'Country', name: 'India' },
    ],
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [siteUrl],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${label} | ${brand}`,
    url,
    dateModified: new Date().toISOString().split('T')[0],
    datePublished: '2023-01-01',
    isPartOf: { '@type': 'WebSite', name: brand, url: siteUrl },
    about: { '@type': 'Thing', name: `Adult Companionship in ${cityName}` },
    inLanguage: 'en-IN',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl || `${siteUrl}/assets/photos/beautiful-${citySlug}-escorts.jpg`,
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: label,
    serviceType: 'Adult Companionship',
    provider: {
      '@type': 'Organization',
      name: brand,
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
    },
    areaServed: { '@type': 'City', name: cityName },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${cityName} Escort Services`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `VIP Escort Service in ${cityName}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Hotel Escort Service in ${cityName}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Independent Escort in ${cityName}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Call Girl Service in ${cityName}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Outcall Escort Service in ${cityName}` } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
