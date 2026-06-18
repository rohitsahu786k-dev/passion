import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  serverExternalPackages: ['mongoose'],

  experimental: {
    // Tree-shake lucide-react — only bundle icons actually used (saves ~40kB JS)
    optimizePackageImports: ['lucide-react'],
    // Inline critical CSS using critters — reduces render-blocking
    optimizeCss: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'oaidalleapiprodscus.blob.core.windows.net' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async headers() {
    return [
      // Security + cache for all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self' https://wa.me tel: mailto:;" },
        ],
      },
      // Long-cache for static assets
      {
        source: '/assets/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Long-cache for Next.js static chunks
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache for images
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      // City escort pages: ISR + CDN cache
      {
        source: '/:city-escort-service/',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=3600' },
        ],
      },
      // Blog pages
      {
        source: '/blog/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=3600' },
        ],
      },
      // RSS feed
      {
        source: '/rss/',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      // llms.txt
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      // robots.txt
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      // sitemap.xml
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Remove old CityStyle pages — redirect to relevant content
      { source: '/list-your-service/', destination: '/contact/', permanent: true },
      { source: '/refund-policy/', destination: '/privacy-policy/', permanent: true },
      { source: '/listing-policy/', destination: '/terms/', permanent: true },
      // Fix old city dynamic routes to new static pages
      { source: '/delhi/', destination: '/delhi-escort-service/', permanent: true },
      { source: '/mumbai/', destination: '/mumbai-escort-service/', permanent: true },
      { source: '/jaipur/', destination: '/jaipur-escort-service/', permanent: true },
      { source: '/goa/', destination: '/goa-escort-service/', permanent: true },
      { source: '/hyderabad/', destination: '/hyderabad-escort-service/', permanent: true },
      { source: '/chennai/', destination: '/chennai-escort-service/', permanent: true },
      { source: '/indore/', destination: '/indore-escort-service/', permanent: true },
      { source: '/dehradun/', destination: '/dehradun-escort-service/', permanent: true },
      { source: '/udaipur/', destination: '/udaipur-escort-service/', permanent: true },
      { source: '/ajmer/', destination: '/ajmer-escort-service/', permanent: true },
      { source: '/jodhpur/', destination: '/jodhpur-escort-service/', permanent: true },
      { source: '/pune/', destination: '/pune-escort-service/', permanent: true },
      { source: '/noida/', destination: '/noida-escort-service/', permanent: true },
      // Remaining cities without redirects
      { source: '/lucknow/', destination: '/lucknow-escort-service/', permanent: true },
      { source: '/surat/', destination: '/surat-escort-service/', permanent: true },
      { source: '/rishikesh/', destination: '/rishikesh-escort-service/', permanent: true },
      { source: '/manali/', destination: '/manali-escort-service/', permanent: true },
      { source: '/daman/', destination: '/daman-escort-service/', permanent: true },
      { source: '/guwahati/', destination: '/guwahati-escort-service/', permanent: true },
      { source: '/kanpur/', destination: '/kanpur-escort-service/', permanent: true },
      { source: '/mount-abu/', destination: '/maunt-abu-escort-service/', permanent: true },
      { source: '/maunt-abu/', destination: '/maunt-abu-escort-service/', permanent: true },
      { source: '/nathdwara/', destination: '/nathdwara-escort-service/', permanent: true },
      { source: '/jawai/', destination: '/jawai-escort-service/', permanent: true },
      { source: '/india/', destination: '/india-escort-service/', permanent: true },
    ];
  },
};

export default nextConfig;
