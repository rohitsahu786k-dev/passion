export const TOPIC_ANGLES = [
  {
    key: 'guide',
    label: 'Complete Guide',
    titleTemplate: 'Complete Guide to {service} in {city} ({year})',
  },
  {
    key: 'how',
    label: 'How To Book',
    titleTemplate: 'How to Book {service} in {city} – Step-by-Step ({year})',
  },
  {
    key: 'why',
    label: 'Why Choose',
    titleTemplate: 'Why {city} Clients Trust {service} from Girls of Passion',
  },
  {
    key: 'top',
    label: 'Top Picks',
    titleTemplate: 'Top {service} Options in {city} – Verified & Discreet',
  },
  {
    key: 'types',
    label: 'Types & Options',
    titleTemplate: 'Types of {service} Available in {city} – Full Breakdown',
  },
  {
    key: 'price',
    label: 'Price Guide',
    titleTemplate: '{service} Price in {city}: Honest Rate Guide {year}',
  },
  {
    key: 'areas',
    label: 'By Area',
    titleTemplate: 'Best Areas for {service} in {city} – Location Guide',
  },
  {
    key: 'safety',
    label: 'Safety Guide',
    titleTemplate: 'Safe & Discreet {service} in {city} – What You Must Know',
  },
  {
    key: 'tips',
    label: 'Booking Tips',
    titleTemplate: '{service} Booking Tips for First-Timers in {city}',
  },
  {
    key: 'experience',
    label: 'What to Expect',
    titleTemplate: 'What to Expect from {service} in {city} – Honest Review',
  },
] as const;

export type TopicAngle = (typeof TOPIC_ANGLES)[number]['key'];
