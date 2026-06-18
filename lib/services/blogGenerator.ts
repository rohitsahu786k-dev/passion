import OpenAI from 'openai';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { TOPIC_ANGLES, type TopicAngle } from './blogTopics';
import { generateBlogImage, getCityFallbackImage } from './imageGenerator';
import type { GeneratedImage } from './imageGenerator';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SITE_NAME = 'Girls of Passion';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace('http://127.0.0.1:3000', 'https://girlsofpassion.in') || 'https://girlsofpassion.in';

export interface BlogGenerationInput {
  citySlug: string;
  serviceSlug: string;
  topicAngle: TopicAngle;
  generateImage?: boolean;
}

export interface GeneratedBlog {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  keywords: string[];
  city: string;
  cityName: string;
  service: string;
  author: { name: string; designation: string };
  featuredImage?: GeneratedImage;
  faqs: Array<{ question: string; answer: string }>;
  tags: string[];
  category: string;
  readingTime: number;
  isPublished: boolean;
  publishedAt: Date;
}

function buildSlug(citySlug: string, serviceSlug: string, angle: string): string {
  return `${citySlug}-${serviceSlug}-${angle}-${new Date().getFullYear()}`;
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.ceil(words / 200));
}

export async function generateBlog(input: BlogGenerationInput): Promise<GeneratedBlog> {
  const city = cities.find(c => c.slug === input.citySlug);
  const service = services.find(s => s.slug === input.serviceSlug);
  if (!city || !service) {
    throw new Error(`Invalid city "${input.citySlug}" or service "${input.serviceSlug}"`);
  }

  const angleConfig = TOPIC_ANGLES.find(a => a.key === input.topicAngle) || TOPIC_ANGLES[0];
  const year = new Date().getFullYear();

  const titleRaw = angleConfig.titleTemplate
    .replace('{service}', service.name)
    .replace('{city}', city.name)
    .replace('{year}', String(year));

  const relatedCities = cities.filter(c => c.slug !== city.slug).slice(0, 3);

  const internalLinks = [
    `<a href="/${city.slug}-escort-service/">${city.name} Escort Service</a>`,
    `<a href="/${city.slug}/${service.slug}/">${service.name} in ${city.name}</a>`,
    ...relatedCities.map(c => `<a href="/${c.slug}-escort-service/">${c.name} Escort Service</a>`),
    `<a href="/blog/">Escort Service Guides</a>`,
    `<a href="/contact/">Contact Girls of Passion</a>`,
  ];

  const systemPrompt = `You are an expert SEO content writer for an adult companionship directory website in India. Write professional, informative, euphemistic content for an adult audience. Always return valid JSON only — no markdown fences, no extra text outside JSON.`;

  const userPrompt = `Write a fully SEO-optimized blog post for "${SITE_NAME}", an adult escort service directory in India.

BLOG PARAMETERS:
- Suggested Title: ${titleRaw}
- City: ${city.name}, ${city.state}
- Service: ${service.name} — ${service.summary}
- Topic Angle: ${angleConfig.label}
- Primary Focus Keyword: "${service.name.toLowerCase()} in ${city.name.toLowerCase()}"
- City Landmarks / Areas: ${city.landmarks.join(', ')}
- Service Starting Price: ₹${service.basePrice.toLocaleString()}
- Year: ${year}
- WhatsApp Contact: +91-${WHATSAPP}

CONTENT RULES:
1. Total article: 1800–2200 words
2. Use semantic HTML: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <table> where helpful
3. Focus keyword must appear in: first paragraph, at least one <h2>, meta title, meta description
4. Natural keyword density 1.5–2.5% — no keyword stuffing
5. Tone: professional, helpful, slightly persuasive; euphemistic for adult content
6. Mention WhatsApp +91-${WHATSAPP} naturally in 1–2 places
7. Do NOT include <html>, <head>, or <body> tags

MANDATORY SECTIONS (use these <h2> headings exactly):
1. Introduction — 150–200 words, hook + focus keyword in first 100 words
2. "What Is ${service.name} in ${city.name}?" — 180–220 words, mention ${city.landmarks[0]}
3. "Types of ${service.shortName} Services in ${city.name}" — 200 words, use <h3> for 3–4 sub-types
4. "How to Book ${service.name} in ${city.name}" — 200 words, numbered steps, mention WhatsApp booking
5. "Safety, Privacy & Discretion" — 180 words, trust signals, verified profiles, data protection
6. "Price Guide: ${service.name} Rates in ${city.name}" — 150 words, show 3-tier <table> with Starting/Standard/Premium, base from ₹${service.basePrice}
7. "Best Areas in ${city.name} for ${service.shortName}" — 150 words, mention all: ${city.landmarks.join(', ')}
8. "Why Choose ${SITE_NAME}?" — 180 words, USPs: verified profiles, 24/7 availability, discreet billing, WhatsApp support
9. "Frequently Asked Questions About ${service.name} in ${city.name}" — 300 words, exactly 6 Q&As as <h3> question + <p> answer pairs
10. Conclusion — 100 words, CTA with phone/WhatsApp

INTERNAL LINKS — place 5 of these naturally within the article body (use exact HTML):
${internalLinks.map(l => `• ${l}`).join('\n')}

EXTERNAL LINKS — place exactly 2 in the article body:
• Wikipedia page for ${city.name} — use target="_blank" rel="noopener noreferrer nofollow"
• One relevant Indian tourism or government site for ${city.name} — use target="_blank" rel="noopener noreferrer nofollow"

LSI / SEMANTIC KEYWORDS TO USE NATURALLY (do not stuff):
${service.keywords.join(', ')}, escort in ${city.name.toLowerCase()}, ${city.name.toLowerCase()} companions, verified escorts ${city.name.toLowerCase()}, discreet ${city.name.toLowerCase()} escort, independent companion ${city.name.toLowerCase()}

RETURN ONLY THIS JSON (no markdown, no code blocks, strict JSON):
{
  "title": "SEO title string (55–60 chars, includes focus keyword)",
  "metaTitle": "meta <title> tag (55–60 chars, focus keyword near start)",
  "metaDescription": "meta description (150–160 chars, focus keyword, includes CTA like 'Book Now' or 'Call Today')",
  "excerpt": "blog teaser (140–155 chars, compelling)",
  "focusKeyword": "primary focus keyword phrase",
  "keywords": ["12–15 LSI and semantic keywords as array strings"],
  "tags": ["6–8 tag strings"],
  "category": "one of: Guide | Tips | Pricing | Locations | Safety",
  "content": "complete HTML article body string (1800–2200 words)",
  "faqs": [
    {"question": "question text", "answer": "detailed answer 40–60 words"},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."}
  ]
}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.72,
    max_tokens: 4500,
    response_format: { type: 'json_object' },
  });

  const rawContent = response.choices[0].message.content || '{}';

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(rawContent);
  } catch {
    throw new Error('OpenAI returned malformed JSON');
  }

  const content = String(parsed.content || '');
  const slug = buildSlug(city.slug, service.slug, input.topicAngle);

  // Optionally generate a featured image via DALL-E 3 + Vercel Blob
  let featuredImage: GeneratedImage | undefined;
  if (input.generateImage) {
    const img = await generateBlogImage(city.name, service.name, slug, city.landmarks[0]);
    featuredImage = img ?? getCityFallbackImage(city.slug, service.name, city.name);
  }

  return {
    title: String(parsed.title || titleRaw).slice(0, 80),
    slug,
    content,
    excerpt: String(parsed.excerpt || service.summary).slice(0, 160),
    metaTitle: String(parsed.metaTitle || titleRaw).slice(0, 60),
    metaDescription: String(parsed.metaDescription || service.summary).slice(0, 160),
    focusKeyword: String(
      parsed.focusKeyword || `${service.name.toLowerCase()} in ${city.name.toLowerCase()}`
    ),
    keywords: Array.isArray(parsed.keywords)
      ? (parsed.keywords as unknown[]).map(String).slice(0, 20)
      : service.keywords,
    city: city.slug,
    cityName: city.name,
    service: service.slug,
    featuredImage,
    author: {
      name: 'Girls of Passion Editorial Team',
      designation: 'SEO Content Team',
    },
    faqs: Array.isArray(parsed.faqs)
      ? (parsed.faqs as Array<{ question: string; answer: string }>).slice(0, 8)
      : [],
    tags: Array.isArray(parsed.tags)
      ? (parsed.tags as unknown[]).map(String).slice(0, 10)
      : [city.name, service.name, 'escort service', 'india'],
    category: String(parsed.category || 'Guide'),
    readingTime: estimateReadingTime(content),
    isPublished: true,
    publishedAt: new Date(),
  };
}

export { TOPIC_ANGLES };
export type { TopicAngle };
