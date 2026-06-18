import Image from 'next/image';

const serviceImages: Record<string, string> = {
  'beauty-grooming': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
  'event-talent': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  'wellness-at-home': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
  'photography-portfolio': 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
  'travel-concierge': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
};

export function VisualPanel({
  serviceSlug,
  alt,
  priority = false
}: {
  serviceSlug?: string;
  alt: string;
  priority?: boolean;
}) {
  const src = serviceSlug && serviceImages[serviceSlug]
    ? serviceImages[serviceSlug]
    : 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-line bg-linen shadow-soft">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 44vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-sm font-medium opacity-90">Verified profiles. Clear categories. Manual approval.</p>
      </div>
    </div>
  );
}
