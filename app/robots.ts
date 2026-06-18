import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://girlsofpassion.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/listing-policy/', '/refund-policy/', '/list-your-service/'],
      },
      // Search engine crawlers — explicit allow
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Slurp', allow: '/' }, // Yahoo
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      // AI search crawlers — allow for GEO (Generative Engine Optimization)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      // Block AI training scrapers (not AI search)
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      // Block known spam / content-scraping bots
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
      { userAgent: 'Majestic-12', disallow: '/' },
      { userAgent: 'Cliqzbot', disallow: '/' },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/rss/`],
    host: baseUrl,
  };
}
