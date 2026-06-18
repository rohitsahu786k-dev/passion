import Link from 'next/link';

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: process.env.NEXT_PUBLIC_SITE_URL || '' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href
          ? { item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${item.href}` }
          : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-[#555]">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <span className="text-[#333]">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-[#D4AF37] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#B8B8B8]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
