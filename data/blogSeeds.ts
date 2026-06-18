import { cities } from './cities';

const topics = [
  { t: 'How to Book a Verified Escort Service in {city} – Complete Guide 2025', e: 'Learn exactly how to book a verified escort service in {city} safely and discreetly. Step-by-step guide covering profiles, pricing, and privacy with Girls of Passion.' },
  { t: '{city} Escort Service: What to Expect from Girls of Passion', e: 'Everything you need to know about escort service in {city} with Girls of Passion. Verified companions, 24x7 support, and premium private booking.' },
  { t: 'VIP Escort Service in {city} – Premium Companionship Guide', e: 'Discover VIP escort services in {city}. Premium companions, luxury hotel meets, and private bookings with Girls of Passion.' },
  { t: 'Best Areas for Escort Service in {city} – Location Guide', e: 'Explore the best areas for escort service in {city}. Girls of Passion covers all key localities, hotels, and private residences.' },
  { t: 'How to Choose a Trusted Escort Agency in {city}', e: 'How to identify a trusted escort agency in {city}. Verified profiles, clear pricing, privacy policy, and professional coordination.' },
  { t: 'Private Companion Booking in {city} – Step by Step Process', e: 'Step-by-step guide to booking a private companion in {city} through Girls of Passion. Simple, discreet, and professional.' },
  { t: 'Hotel Escort Service in {city} – How It Works', e: 'Hotel escort service in {city} explained. How Girls of Passion coordinates discreet companion visits to your hotel or resort stay.' },
  { t: 'Call Girl Service in {city} – Verified and Safe Options', e: 'Find verified call girl service in {city} through Girls of Passion. Safe, discreet, and professional adult companionship at your preferred location.' },
  { t: 'Safe and Discreet Escort Booking in {city} – Tips & Guide', e: 'Tips for safe and discreet escort booking in {city}. Privacy, verification, and professional conduct with Girls of Passion.' },
  { t: 'Why Girls of Passion is the Top Escort Service in {city}', e: 'Why Girls of Passion is rated as the top escort service in {city}. Verified profiles, 24x7 support, and premium companionship.' },
  { t: 'Outcall Escort Service in {city} – Companion at Your Location', e: 'Outcall escort service in {city} with Girls of Passion. Verified companion visits your hotel, apartment, or private location discreetly.' },
  { t: 'Escort Service Near Me in {city} – Quick Booking Guide', e: 'Looking for escort service near you in {city}? Girls of Passion provides fast, discreet companion booking across all major {city} areas.' },
  { t: 'Luxury Escort Service in {city} – Elite Companion Experience', e: 'Explore luxury escort service in {city} with Girls of Passion. High-class companions, premium hotel meets, and exclusive adult companionship.' },
  { t: 'Female Escort in {city} – Verified Profiles & Booking Tips', e: 'Find verified female escorts in {city} through Girls of Passion. Genuine profiles, fast booking, and complete privacy throughout the process.' },
  { t: 'Independent Escort in {city} – How to Book Safely', e: 'Guide to booking independent escorts in {city} with Girls of Passion. Privacy-first, verified, and professional adult companionship.' },
  { t: '{city} Escort Guide for First-Time Clients', e: 'First-time client guide to escort service in {city}. What to expect, how to communicate, pricing basics, and privacy tips from Girls of Passion.' },
  { t: 'Escort Service Pricing in {city} – What You Should Know', e: 'Complete pricing guide for escort service in {city}. What factors affect cost, how payment works, and what Girls of Passion offers.' },
  { t: 'Best Time to Book Escort Service in {city} – Availability Tips', e: 'When and how to book escort service in {city} for the best experience. Timing tips, availability, and how Girls of Passion manages bookings.' },
  { t: 'Privacy & Discretion in {city} Escort Bookings – Complete Guide', e: 'How Girls of Passion ensures complete privacy and discretion for escort service bookings in {city}. Your data and identity stay protected.' },
  { t: '{city} Escort Service for Business Travelers – Complete Guide', e: 'Escort service guide for business travelers in {city}. Dinner dates, hotel companions, and private meetups with Girls of Passion.' },
  { t: 'High Class Escort Service in {city} – What to Expect', e: 'High class escort service in {city} with Girls of Passion. Sophisticated profiles, luxury settings, and discreet premium companionship.' },
  { t: 'Verified Call Girl in {city} – How Girls of Passion Works', e: 'How Girls of Passion verifies call girl profiles in {city}. Trust, safety, and genuine adult companionship for quality clients.' },
  { t: 'Booking a Companion for Dinner in {city} – Complete Guide', e: 'How to book a dinner date companion in {city}. Girls of Passion provides elegant, well-presented companions for social and private occasions.' },
  { t: '{city} Escort Service WhatsApp Booking – Fast & Private', e: 'How to book escort service in {city} via WhatsApp. Fast, private, and professional companion booking with Girls of Passion.' },
  { t: 'Night Escort Service in {city} – Late Night Booking Guide', e: 'Night escort service in {city} available 24x7. How Girls of Passion handles late night companion bookings discreetly and professionally.' },
];

const escortServiceSlugs = [
  'vip-escort', 'hotel-escort', 'independent-escort', 'call-girl', 'outcall-escort'
];
const escortServiceNames = [
  'VIP Escort Service', 'Hotel Escort Service', 'Independent Escort', 'Call Girl Service', 'Outcall Escort Service'
];

// Start from a past date to have posts already "published"
const startDate = new Date('2026-04-10T09:00:00+05:30');

export type BlogSeed = {
  title: string;
  slug: string;
  city: string;
  cityName: string;
  service: string;
  serviceName: string;
  excerpt: string;
  keywords: string[];
  publishedAt: string;
  readingTime: number;
};

// Generate 120 unique posts: rotate through 24 cities × 5 topics each
const cityList = cities.filter((c) => c.slug !== 'india');
const allCities = [...cityList, ...cityList.slice(0, 24 - cityList.length)];

export const blogSeeds: BlogSeed[] = Array.from({ length: 120 }, (_, index) => {
  const cityIndex = index % cityList.length;
  const topicIndex = index % topics.length;
  const serviceIndex = index % escortServiceSlugs.length;
  const city = cityList[cityIndex];
  const topic = topics[topicIndex];
  const title = topic.t.replace(/{city}/g, city.name);
  const excerpt = topic.e.replace(/{city}/g, city.name);
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + index);

  return {
    title,
    slug: `${city.slug}-escort-guide-${index + 1}`,
    city: city.slug,
    cityName: city.name,
    service: escortServiceSlugs[serviceIndex],
    serviceName: escortServiceNames[serviceIndex],
    excerpt,
    keywords: [
      `escort service ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} escort`,
      `call girl ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} companion service`,
      `girls of passion ${city.name.toLowerCase()}`,
      topic.t.replace(/{city}/g, city.name).toLowerCase(),
    ],
    publishedAt: date.toISOString(),
    readingTime: 5 + (index % 5),
  };
});

export function getBlog(slug: string) {
  return blogSeeds.find((blog) => blog.slug === slug);
}
