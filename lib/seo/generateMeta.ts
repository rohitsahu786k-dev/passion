import type { Metadata } from 'next';
import { buildPageMetadata } from './metadata';
import { absoluteUrl, cityServicePath, cityLandingPath, publicCitySlug } from './site';

export { absoluteUrl, cityLandingPath, cityServicePath, publicCitySlug } from './site';

type CityMetaOptions = {
  cityName: string;
  citySlug: string;
  serviceName?: string;
  serviceSlug?: string;
  rating?: number;
  reviewCount?: number;
};

export function generateCityMeta({
  cityName,
  citySlug,
  serviceName,
  serviceSlug,
  rating = 4.8,
  reviewCount = 200,
}: CityMetaOptions): Metadata {
  const label = serviceName
    ? `${serviceName} in ${cityName}`
    : `${cityName} Escort Service and Call Girl`;

  const path = serviceSlug ? cityServicePath(citySlug, serviceSlug) : cityLandingPath(citySlug);

  const title = serviceName
    ? `Premium ${serviceName} ${cityName} | 24x7 Booking`
    : `Premium ${cityName} Escort Service | 24x7 Verified Booking`;

  const description = serviceName
    ? `Book premium ${serviceName.toLowerCase()} in ${cityName} 24x7 with verified profiles, discreet WhatsApp support, hotel coordination, and private booking.`
    : `Book premium ${cityName} escort service 24x7 with verified profiles, discreet support, quick WhatsApp response, hotel coordination, and private booking.`;

  const ogImage = `/assets/photos/luxury-escort-service-${publicCitySlug(citySlug)}.jpg`;

  return {
    ...buildPageMetadata({
      title,
      description,
      path,
      image: ogImage,
      imageAlt: `${label} - featured image`,
      keywords: [
        `${cityName} Escort Service`,
        `${cityName} Call Girl`,
        `Call Girls in ${cityName}`,
        `${cityName} Escorts services`,
        `${cityName} Call girls`,
        `${cityName} escort service`,
        `escort service ${cityName}`,
        `call girl ${cityName}`,
        `escort in ${cityName}`,
        `${cityName} companion service`,
        `girls of passion ${cityName}`,
        ...(serviceName ? [`${serviceName.toLowerCase()} ${cityName}`, `${cityName} ${serviceName.toLowerCase()}`] : []),
      ],
    }),
    other: {
      'rating': rating.toString(),
      'review-count': reviewCount.toString(),
    },
  };
}