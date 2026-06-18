import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { cityLandingPath, cityServicePath, normalizeCitySlug } from '@/lib/seo/site';

type InternalLinkHubProps = {
  currentCitySlug?: string;
  currentServiceSlug?: string;
  title?: string;
};

const topCitySlugs = [
  'delhi',
  'mumbai',
  'goa',
  'jaipur',
  'udaipur',
  'hyderabad',
  'pune',
  'chennai',
  'indore',
  'noida',
  'jodhpur',
  'surat',
];

export function InternalLinkHub({
  currentCitySlug,
  currentServiceSlug,
  title = 'Explore Related Escort Services',
}: InternalLinkHubProps) {
  const normalizedCitySlug = currentCitySlug ? normalizeCitySlug(currentCitySlug) : undefined;
  const currentCity = cities.find((city) => city.slug === normalizedCitySlug);
  const relatedCities = topCitySlugs
    .filter((slug) => slug !== normalizedCitySlug)
    .map((slug) => cities.find((city) => city.slug === slug))
    .filter((city): city is (typeof cities)[number] => Boolean(city))
    .slice(0, 10);

  const relatedServices = currentCity
    ? services.filter((service) => service.slug !== currentServiceSlug)
    : [];

  return (
    <section className="section-pad bg-[#050505] border-t border-[#1A1A1A]">
      <div className="container-shell">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-xs text-[#555] mb-5">
          Find discreet companion services across top Indian cities and related booking categories.
        </p>

        {currentCity && relatedServices.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#888]">
              More Services in {currentCity.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={cityServicePath(currentCity.slug, service.slug)}
                  className="inline-flex items-center gap-1 rounded-full border border-[#2A2A2A] bg-[#111] px-3 py-1.5 text-xs text-[#888] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
                >
                  <ArrowRight size={10} />
                  {service.name} in {currentCity.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#888]">
            Top City Pages
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedCities.map((city) => (
              <Link
                key={city.slug}
                href={cityLandingPath(city.slug)}
                className="inline-flex items-center gap-1 rounded-full border border-[#2A2A2A] bg-[#111] px-3 py-1.5 text-xs text-[#888] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
              >
                <MapPin size={10} />
                {city.name} Escort Service
              </Link>
            ))}
            <Link
              href="/india-escort-service/"
              className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-xs text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
            >
              <ArrowRight size={10} />
              India Escort Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
