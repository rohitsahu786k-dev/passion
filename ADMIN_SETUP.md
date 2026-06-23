# Admin Panel & Deployment Setup

## Required Environment Variables

### Local (`.env.local`)
```
# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-strong-password-here
ADMIN_EMAIL=your-email@example.com

# NextAuth
NEXTAUTH_SECRET=<run: openssl rand -base64 32>
NEXTAUTH_URL=https://www.girlsofpassion.in

# MongoDB Atlas
MONGODB_URI=mongodb+srv://...

# Site
NEXT_PUBLIC_SITE_URL=https://www.girlsofpassion.in
NEXT_PUBLIC_PHONE=+91XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX
```

### Vercel Environment Variables (set in Vercel Dashboard → Project → Settings → Environment Variables)

| Variable | Value |
|----------|-------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `NEXT_PUBLIC_SITE_URL` | `https://www.girlsofpassion.in` |
| `NEXT_PUBLIC_PHONE` | `+91XXXXXXXXXX` |
| `NEXT_PUBLIC_WHATSAPP` | `91XXXXXXXXXX` |
| `ADMIN_USERNAME` | your admin username |
| `ADMIN_PASSWORD` | strong password (min 16 chars) |
| `ADMIN_EMAIL` | your admin email |
| `NEXTAUTH_SECRET` | random 32-byte base64 string |
| `NEXTAUTH_URL` | `https://www.girlsofpassion.in` |

## Vercel Deployment Steps

1. Push code to GitHub/GitLab
2. Import project in Vercel → select repo
3. Set all environment variables (table above)
4. Set custom domain: `girlsofpassion.in` + `www.girlsofpassion.in` → redirect to apex
5. Deploy → verify build passes
6. Verify HTTPS works on both www and apex

**Region**: Already set to `bom1` (Mumbai) in `vercel.json` for lowest latency in India.

## Post-Launch SEO Checklist

- [ ] Submit sitemap to Google Search Console: `https://www.girlsofpassion.in/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Search Console ownership via HTML meta tag
- [ ] Set geographic target to India in Google Search Console
- [ ] Add site to Google My Business (for Local SEO)
- [ ] Test Core Web Vitals via PageSpeed Insights
- [ ] Verify structured data via Google Rich Results Test
- [ ] Set up Google Analytics 4 + connect to Search Console

## Admin Panel URL

`/admin/` — protected by login

## Admin Pages

| URL | Purpose |
|-----|---------|
| `/admin/` | Dashboard with live stats |
| `/admin/blogs/` | Blog list, create, edit, delete |
| `/admin/blogs/new/` | Write new blog post |
| `/admin/leads/` | View leads, update status |
| `/admin/listings/` | Approve/reject provider listings |
| `/admin/reviews/` | Moderate user reviews |
| `/admin/settings/` | Phone, WhatsApp, email, social links |

## Dynamic Content (via Admin Settings)

- **Phone/WhatsApp**: Update in `/admin/settings/`. Goes live within 1 hour (ISR cache TTL).
- **Blogs**: Full CRUD. Supports drafts, scheduled publishing, FAQs, SEO fields, city/service tagging.
- **Leads**: View all contact form submissions with status tracking.
- **Reviews**: Approve, feature, or reject user-submitted reviews.
- **Listings**: Review and approve/reject provider listing applications.

## MongoDB Atlas Setup

1. Create free cluster at cloud.mongodb.com
2. Create database user (save username/password)
3. Whitelist all IPs: `0.0.0.0/0` (Vercel uses dynamic IPs)
4. Get connection string: `mongodb+srv://user:pass@cluster.mongodb.net/girlsofpassion?retryWrites=true&w=majority`
5. Paste as `MONGODB_URI` in Vercel
