export const SITE_NAME = 'Girls of Passion';
export const DEFAULT_SITE_URL = 'https://girlsofpassion.in';

const CITY_SLUG_ALIASES: Record<string, string> = {
  'mount-abu': 'maunt-abu',
};

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL)
    .replace('http://127.0.0.1:3000', DEFAULT_SITE_URL)
    .replace(/\/$/, '');
}

export function absoluteUrl(path = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${cleanPath}`;
}

export function publicCitySlug(citySlug: string): string {
  return CITY_SLUG_ALIASES[citySlug] || citySlug;
}

export function normalizeCitySlug(citySlug: string): string {
  const match = Object.entries(CITY_SLUG_ALIASES).find(([, publicSlug]) => publicSlug === citySlug);
  return match?.[0] || citySlug;
}

export function cityLandingPath(citySlug: string): string {
  return `/${publicCitySlug(citySlug)}-escort-service/`;
}

export function cityServicePath(citySlug: string, serviceSlug: string): string {
  return `/${publicCitySlug(citySlug)}/${serviceSlug}/`;
}

export function cityPhotoSlug(citySlug: string): string {
  return publicCitySlug(citySlug);
}
