# Final SEO Automation Audit

Date: 2026-06-18

## Passed

- Production build passes with `npm run build`.
- Brand cleanup complete: no remaining `CityStyle` or `citystyle` strings in tracked app/source files.
- Google Analytics tag is installed with `NEXT_PUBLIC_GA_ID`, defaulting to `G-L8JE09MSYM`.
- CSP allows Google Analytics and YouTube embed domains.
- Google Indexing API service-account authentication tested successfully.
- Google Indexing API publish test returned `200 OK` for `https://girlsofpassion.in/blog/`.
- Service-account JSON is not tracked and is protected by `.gitignore`.
- Policy pages use the branded dark Girls of Passion UI and updated content.
- Dynamic city, service, and blog pages include YouTube embeds with VideoObject schema.
- Generated blogs can store featured images, inline images, and video metadata.
- AI image generation now converts generated images to WebP before Blob upload.
- Public site config endpoint plus contact hydrator supports site-wide phone/WhatsApp updates from admin settings.
- Daily blog cron remains configured in `vercel.json` at `0 1 * * *`.

## Vercel Environment Required

- `OPENAI_API_KEY`
- `BLOB_READ_WRITE_TOKEN`
- `CRON_SECRET`
- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `NEXT_PUBLIC_SITE_URL=https://girlsofpassion.in`
- `NEXT_PUBLIC_GA_ID=G-L8JE09MSYM`
- `GOOGLE_SERVICE_ACCOUNT_JSON`
- `INDEXING_API_ENABLED=true`
- `INDEXING_API_AUTO_NOTIFY=false` by default because Google's Indexing API is officially intended for JobPosting and livestream BroadcastEvent pages.

## Notes

- `npm audit --audit-level=high` reports no high-severity vulnerabilities. Four moderate advisories remain in upstream packages.
- `npm run lint` is still not a reliable audit command because the project has no ESLint config and Next's deprecated `next lint` prompts interactively.
- The Google Indexing API worked in a live publish test, but Google documentation still limits intended use to supported page types. Keep sitemap/RSS/Search Console as the primary indexing path.
