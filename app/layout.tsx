import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ContactHydrator } from '@/components/ui/ContactHydrator';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { RentalStrip } from '@/components/ui/RentalStrip';
import { getSiteConfig } from '@/lib/getSiteConfig';
import { getSiteUrl } from '@/lib/seo/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

const siteUrl = getSiteUrl();
const siteName = 'Girls of Passion';
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || 'G-L8JE09MSYM';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Girls of Passion | Verified Escort Booking India',
    template: '%s',
  },
  description:
    'Girls of Passion offers discreet, verified adult companionship across India. Premium profiles, private booking, and 24x7 support in all major cities.',
  openGraph: {
    title: 'Girls of Passion | Verified Escort Booking India',
    description:
      'Discreet, verified adult companionship with Girls of Passion. Premium booking, privacy-first, available 24x7 across India.',
    type: 'website',
    locale: 'en_IN',
    siteName,
    url: siteUrl,
    images: [
      {
        url: '/assets/photos/luxury-escort-service-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Girls of Passion – Premium Adult Companionship India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girls of Passion | Verified Escort Booking India',
    description:
      'Discreet, verified adult companionship with Girls of Passion. Premium booking, privacy-first, available 24x7 across India.',
    images: ['/assets/photos/luxury-escort-service-india.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

function buildOrganizationSchema(phone: string) {
  return {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/logo.svg`,
    width: 512,
    height: 512,
  },
  description: 'Girls of Passion is a premium adult companionship platform providing verified escort services across major Indian cities including Delhi, Mumbai, Jaipur, Goa, Hyderabad, and more.',
  foundingDate: '2023',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_PHONE || '+919999900101',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
      contactOption: 'TollFree',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  ],
    sameAs: [],
  };
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: 'Premium adult companionship platform across India – verified escort services in Delhi, Mumbai, Jaipur, Goa, Hyderabad, and 20+ cities.',
  inLanguage: 'en-IN',
  copyrightYear: new Date().getFullYear(),
  publisher: { '@type': 'Organization', name: siteName, url: siteUrl },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/blog/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const navSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: [
    'Home', 'India Escort Service', 'Delhi Escort Service', 'Mumbai Escort Service',
    'Jaipur Escort Service', 'Goa Escort Service', 'About Us', 'Contact Us',
  ],
  url: [
    siteUrl,
    `${siteUrl}/india-escort-service/`,
    `${siteUrl}/delhi-escort-service/`,
    `${siteUrl}/mumbai-escort-service/`,
    `${siteUrl}/jaipur-escort-service/`,
    `${siteUrl}/goa-escort-service/`,
    `${siteUrl}/about/`,
    `${siteUrl}/contact/`,
  ],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const config = await getSiteConfig();
  const organizationSchema = buildOrganizationSchema(config.phone);
  return (
    <html lang="en-IN">
      <head>
        {googleAnalyticsId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Girls of Passion — Escort Service Guides" href="/rss/" />


        <meta name="color-scheme" content="dark" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="adult" />
        <meta name="revisit-after" content="3 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text">
        {config.topStripEnabled && (
          <RentalStrip text={config.topStripText} email={config.topStripEmail} />
        )}
        <Navbar phone={config.phone} whatsapp={config.whatsapp} />
        <main>{children}</main>
        <Footer phone={config.phone} whatsapp={config.whatsapp} />
        <FloatingCTA phone={config.phone} whatsapp={config.whatsapp} />
        <ContactHydrator />
      </body>
    </html>
  );
}

