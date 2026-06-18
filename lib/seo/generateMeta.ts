import type { Metadata } from 'next';
import { absoluteUrl, cityServicePath, cityLandingPath, publicCitySlug, SITE_NAME } from './site';

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
    : `${cityName} Escort Service`;

  const path = serviceSlug ? cityServicePath(citySlug, serviceSlug) : cityLandingPath(citySlug);
  const canonical = absoluteUrl(path);

  const title = serviceName
    ? `${serviceName} in ${cityName} | Girls of Passion`
    : `${cityName} Escort Service | Premium Adult Companionship 24x7`;

  const description = serviceName
    ? `Book a discreet ${label.toLowerCase()} with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium adult companionship in ${cityName}.`
    : `Book a discreet ${cityName} escort service with Girls of Passion. Verified profiles, private booking, 24x7 support, and premium adult companionship across ${cityName} hotels, residences, and key areas.`;

  const ogImage = `/assets/photos/luxury-escort-service-${publicCitySlug(citySlug)}.jpg`;

  return {
    title,
    description,
    keywords: [
      `${cityName} escort service`,
      `escort service ${cityName}`,
      `call girl ${cityName}`,
      `${cityName} call girl`,
      `escort in ${cityName}`,
      `${cityName} companion service`,
      `girls of passion ${cityName}`,
      ...(serviceName ? [`${serviceName.toLowerCase()} ${cityName}`, `${cityName} ${serviceName.toLowerCase()}`] : []),
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'en_IN',
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${label} – Girls of Passion`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'rating': rating.toString(),
      'review-count': reviewCount.toString(),
    },
  };
}
