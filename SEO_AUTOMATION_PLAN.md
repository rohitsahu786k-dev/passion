# SEO Automation Plan

## Phase 1 - Technical SEO Foundation

- Centralize canonical URL helpers for city, service, blog, sitemap, and schema URLs.
- Generate sitemap URLs from source data instead of hardcoded city lists.
- Keep robots.txt focused on crawlable public pages and the XML sitemap.
- Keep JSON-LD aligned with visible page content and remove misleading hidden snippets.
- Add crawlable internal-link hubs to dynamic city, service, and blog pages.

## Phase 2 - Content Automation

- Generate new blog topics from city, service, and search-intent combinations.
- Add duplicate-topic checks before publishing automated posts.
- Auto-link every generated blog to its city page, service page, related city pages, and guide index.
- Add image fallback handling for every generated topic so Open Graph previews never break.

## Phase 3 - Monitoring And Iteration

- Track indexed URLs, sitemap errors, rich-result issues, and crawl stats in Search Console.
- Review rankings and impressions weekly, then expand content around pages getting impressions but low clicks.
- Refresh high-priority city pages monthly with updated FAQs, areas served, and related guides.
- Keep performance checks in the release flow with `npm run build`.
