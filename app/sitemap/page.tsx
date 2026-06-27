import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { blogSeeds } from '@/data/blogSeeds';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { cityLandingPath, cityServicePath } from '@/lib/seo/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sitemap | Girls of Passion',
  description: 'Browse all important Girls of Passion pages, city pages, service pages, and escort service guides in one crawlable sitemap.',
  path: '/sitemap/',
  image: '/assets/photos/luxury-escort-service-india.jpg',
  imageAlt: 'Girls of Passion sitemap',
});

const coreLinks = [
  { label: 'Home', href: '/' },
  { label: 'India Escort Service', href: '/india-escort-service/' },
  { label: 'Blog & Guides', href: '/blog/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Contact Us', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'XML Sitemap', href: '/sitemap.xml' },
];

export default function HtmlSitemapPage() {
  const cityLinks = cities.map((city) => ({
    label: `${city.name} Escort Service`,
    href: cityLandingPath(city.slug),
  }));

  const serviceLinks = cities.flatMap((city) =>
    services.map((service) => ({
      label: `${service.name} in ${city.name}`,
      href: cityServicePath(city.slug, service.slug),
    }))
  );

  const blogLinks = blogSeeds.map((blog) => ({
    label: blog.title,
    href: `/blog/${blog.slug}/`,
  }));

  return (
    <div className="bg-[#050505]">
      <section className="border-b border-[#1A1A1A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Girls of Passion
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Sitemap
            </h1>
            <p className="mt-4 text-base leading-7 text-[#B8B8B8]">
              A complete list of important pages, city booking pages, service pages, and published guides.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell space-y-10">
          <SitemapGroup title="Main Pages" links={coreLinks} />
          <SitemapGroup title="City Pages" links={cityLinks} icon="city" />
          <SitemapGroup title="Service Pages" links={serviceLinks} />
          <SitemapGroup title="Guides" links={blogLinks} />
        </div>
      </section>
    </div>
  );
}

function SitemapGroup({
  title,
  links,
  icon = 'arrow',
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
  icon?: 'arrow' | 'city';
}) {
  const Icon = icon === 'city' ? MapPin : ArrowRight;

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex min-h-12 items-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] px-4 py-3 text-sm text-[#B8B8B8] transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
          >
            <Icon size={14} className="shrink-0" />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
