export type Service = {
  name: string;
  slug: string;
  shortName: string;
  summary: string;
  keywords: string[];
  basePrice: number;
};

export const services: Service[] = [
  {
    name: 'VIP Escort Service',
    slug: 'vip-escort',
    shortName: 'VIP Escort',
    summary: 'Premium VIP companions for high-profile clients. Sophisticated, elegant, and discreet.',
    keywords: ['VIP escort service', 'premium companion', 'high profile escort', 'elite escort'],
    basePrice: 15000
  },
  {
    name: 'Hotel Escort Service',
    slug: 'hotel-escort',
    shortName: 'Hotel Escort',
    summary: 'Discreet companion service at your hotel, resort, or luxury stay. Private and professional.',
    keywords: ['hotel escort service', 'resort companion', 'hotel companion', 'in-room escort'],
    basePrice: 10000
  },
  {
    name: 'Independent Escort',
    slug: 'independent-escort',
    shortName: 'Independent',
    summary: 'Independent female companions offering flexible, personalized, and private adult companionship.',
    keywords: ['independent escort', 'independent companion', 'independent female escort', 'private escort'],
    basePrice: 8000
  },
  {
    name: 'Call Girl Service',
    slug: 'call-girl',
    shortName: 'Call Girl',
    summary: 'Verified call girl service with discreet booking, fast response, and professional coordination.',
    keywords: ['call girl service', 'call girl', 'verified call girl', 'private call girl'],
    basePrice: 6000
  },
  {
    name: 'Outcall Escort Service',
    slug: 'outcall-escort',
    shortName: 'Outcall',
    summary: 'Companion visits your location – hotel, apartment, residence, or private venue.',
    keywords: ['outcall escort', 'outcall companion', 'escort to your location', 'home escort service'],
    basePrice: 9000
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
