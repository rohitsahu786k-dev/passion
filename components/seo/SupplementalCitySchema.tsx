import { cities } from '@/data/cities';
import { absoluteUrl, cityLandingPath, cityServicePath, getSiteUrl } from '@/lib/seo/site';

export function SupplementalCitySchema({ citySlug }: { citySlug: string }) {
  const siteUrl = getSiteUrl();
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return null;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${city.name} Escort Service`,
    serviceType: 'Adult Companionship',
    url: absoluteUrl(cityLandingPath(citySlug)),
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
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `VIP Escort Service in ${city.name}`, url: absoluteUrl(cityServicePath(citySlug, 'vip-escort')) } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Hotel Escort Service in ${city.name}`, url: absoluteUrl(cityServicePath(citySlug, 'hotel-escort')) } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Independent Escort in ${city.name}`, url: absoluteUrl(cityServicePath(citySlug, 'independent-escort')) } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Call Girl Service in ${city.name}`, url: absoluteUrl(cityServicePath(citySlug, 'call-girl')) } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Outcall Escort Service in ${city.name}`, url: absoluteUrl(cityServicePath(citySlug, 'outcall-escort')) } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
