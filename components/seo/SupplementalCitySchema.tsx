import { cities } from '@/data/cities';

export function SupplementalCitySchema({ citySlug }: { citySlug: string }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlsofpassion.in';
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return null;

  const cityUrl = `${siteUrl}/${citySlug}-escort-service/`;

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Girls of Passion – ${city.name}`,
    url: cityUrl,
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Arjun M.' },
        reviewBody: `Excellent experience with Girls of Passion in ${city.name}. Very professional, discreet, and the team responded quickly. Highly recommended for anyone looking for a reliable escort service.`,
        datePublished: '2026-03-15',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Vikram S.' },
        reviewBody: `Best escort service in ${city.name}. Completely private, verified profiles, and the booking was confirmed in minutes. Girls of Passion is my go-to service whenever I visit ${city.name}.`,
        datePublished: '2026-04-10',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Book Escort Service in ${city.name}`,
    description: `Step-by-step guide to booking verified adult companionship in ${city.name} with Girls of Passion.`,
    totalTime: 'PT10M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contact Girls of Passion',
        text: `Call or WhatsApp Girls of Passion to enquire about available verified companion profiles in ${city.name}.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Share Your Requirements',
        text: `Tell us your preferred location in ${city.name}, the date, timing, and any specific preferences.`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Receive Verified Profile Details',
        text: `Our team shares available verified companion profiles that match your requirements in ${city.name}.`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Confirm & Meet',
        text: `After reviewing profile details, confirm the booking. The companion arrives at your ${city.name} location on time and discreetly.`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${city.name} Escort Service`,
    serviceType: 'Adult Companionship',
    provider: {
      '@type': 'Organization',
      name: 'Girls of Passion',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
    },
    areaServed: { '@type': 'City', name: city.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${city.name} Escort Services`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `VIP Escort Service in ${city.name}`, url: `${siteUrl}/${citySlug}/vip-escort/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Hotel Escort Service in ${city.name}`, url: `${siteUrl}/${citySlug}/hotel-escort/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Independent Escort in ${city.name}`, url: `${siteUrl}/${citySlug}/independent-escort/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Call Girl Service in ${city.name}`, url: `${siteUrl}/${citySlug}/call-girl/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Outcall Escort Service in ${city.name}`, url: `${siteUrl}/${citySlug}/outcall-escort/` } },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
