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
    : `${cityName} Escort Service and Call Girl`;

  const path = serviceSlug ? cityServicePath(citySlug, serviceSlug) : cityLandingPath(citySlug);
  const canonical = absoluteUrl(path);

  const title = serviceName
    ? `${serviceName} in ${cityName} | Escort Service & Call Girl`
    : `${cityName} Escort Service & Call Girl | Book 24/7`;

  const description = serviceName
    ? `${cityName} Escort Service and ${cityName} Call Girl booking for ${serviceName} available 24/7. Book call girls in ${cityName} with cash payment, quick deals, free hotel coordination and private support.`
    : `${cityName} Escort Service and ${cityName} Call Girl booking available 24/7. Book Call Girls in ${cityName} with cash payment, quick deals, free hotel coordination, escorts services and call girls.`;

  const ogImage = `/assets/photos/luxury-escort-service-${publicCitySlug(citySlug)}.jpg`;

  return {
    title,
    description,
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
    alternates: {
      canonical,
      languages: {
        'en-IN': canonical,
        'x-default': canonical,
      },
    },
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
