import OpenAI from 'openai';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { getSeoVideo } from '@/data/videos';
import { TOPIC_ANGLES, type TopicAngle } from './blogTopics';
import { generateBlogImage, generateRelatedBlogImages, getCityFallbackImage } from './imageGenerator';
import type { GeneratedImage } from './imageGenerator';
import { cityLandingPath, cityServicePath } from '@/lib/seo/site';

let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is required to generate blog content');
  }

  if (!openai) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  return openai;
}

const SITE_NAME = 'Girls of Passion';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '919999900101';

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
  inlineImages?: GeneratedImage[];
  videos?: Array<{ id: string; title: string; description: string; uploadDate: string }>;
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

function injectInlineImages(content: string, images: GeneratedImage[]): string {
  if (images.length === 0) return content;
  const parts = content.split(/(<h2[^>]*>.*?<\/h2>)/i);
  let imageIndex = 0;

  return parts
    .map((part, index) => {
      if (index === 0 || !part.toLowerCase().startsWith('<h2') || imageIndex >= images.length) {
        return part;
      }

      const image = images[imageIndex];
      imageIndex += 1;
      return `${part}<figure class="my-8 overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#0D0D0D]"><img src="${image.url}" alt="${image.alt}" loading="lazy" width="${image.width}" height="${image.height}" class="h-auto w-full" /><figcaption class="px-4 py-3 text-xs text-[#888]">${image.alt}</figcaption></figure>`;
    })
    .join('');
}

export async function generateBlog(input: BlogGenerationInput): Promise<GeneratedBlog> {
  const city = cities.find((c) => c.slug === input.citySlug);
  const service = services.find((s) => s.slug === input.serviceSlug);
  if (!city || !service) {
    throw new Error(`Invalid city "${input.citySlug}" or service "${input.serviceSlug}"`);
  }

  const angleConfig = TOPIC_ANGLES.find((a) => a.key === input.topicAngle) || TOPIC_ANGLES[0];
  const year = new Date().getFullYear();
  const titleRaw = angleConfig.titleTemplate
    .replace('{service}', service.name)
    .replace('{city}', city.name)
    .replace('{year}', String(year));

  const relatedCities = cities.filter((c) => c.slug !== city.slug).slice(0, 3);
  const internalLinks = [
    `<a href="${cityLandingPath(city.slug)}">${city.name} Escort Service</a>`,
    `<a href="${cityServicePath(city.slug, service.slug)}">${service.name} in ${city.name}</a>`,
    ...relatedCities.map((c) => `<a href="${cityLandingPath(c.slug)}">${c.name} Escort Service</a>`),
    `<a href="/blog/">Escort Service Guides</a>`,
    `<a href="/contact/">Contact Girls of Passion</a>`,
  ];

  const systemPrompt = `You are an expert SEO content writer for an adult companionship directory website in India. Write professional, informative, euphemistic content for an adult audience. Follow helpful-content, E-E-A-T, technical SEO, programmatic SEO, and AI-citation readiness principles. Avoid explicit sexual content, misleading claims, keyword stuffing, and generic AI filler. Always return valid JSON only - no markdown fences, no extra text outside JSON.`;

  const userPrompt = `Write a fully SEO-optimized blog post for "${SITE_NAME}", an adult companionship directory in India.

BLOG PARAMETERS:
- Suggested Title: ${titleRaw}
- City: ${city.name}, ${city.state}
- Service: ${service.name} - ${service.summary}
- Topic Angle: ${angleConfig.label}
- Primary Focus Keyword: "${service.name.toLowerCase()} in ${city.name.toLowerCase()}"
- City Landmarks / Areas: ${city.landmarks.join(', ')}
- Service Starting Price: Rs. ${service.basePrice.toLocaleString('en-IN')}
- Year: ${year}
- WhatsApp Contact: +91-${WHATSAPP}

CONTENT RULES:
1. Total article: 1800-2200 words
2. Use semantic HTML: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <table> where helpful
3. Focus keyword must appear in the first paragraph, at least one <h2>, meta title, and meta description
4. Natural keyword density only; no keyword stuffing
5. Tone: professional, helpful, slightly persuasive, and euphemistic for adult content
6. Mention WhatsApp +91-${WHATSAPP} naturally in 1-2 places
7. Do not include <html>, <head>, or <body> tags
8. Add a short editorial note saying the guide is reviewed by the Girls of Passion editorial team
9. Use answer-first paragraphs, city-specific details, tables/lists, and clear quotable statements for AI citation readiness
10. Do not make unverifiable promises or unsafe claims

MANDATORY SECTIONS (use these <h2> headings exactly):
1. Introduction
2. What Is ${service.name} in ${city.name}?
3. Types of ${service.shortName} Services in ${city.name}
4. How to Book ${service.name} in ${city.name}
5. Safety, Privacy & Discretion
6. Price Guide: ${service.name} Rates in ${city.name}
7. Best Areas in ${city.name} for ${service.shortName}
8. Why Choose ${SITE_NAME}?
9. Frequently Asked Questions About ${service.name} in ${city.name}
10. Editorial Review Note
11. Conclusion

INTERNAL LINKS - place 5 naturally in the article body:
${internalLinks.map((link) => `- ${link}`).join('\n')}

EXTERNAL LINKS - place exactly 2 in the article body:
- Wikipedia page for ${city.name} with target="_blank" rel="noopener noreferrer"
- One relevant Indian tourism or government site for ${city.name} with target="_blank" rel="noopener noreferrer"

LSI / SEMANTIC KEYWORDS:
${service.keywords.join(', ')}, escort in ${city.name.toLowerCase()}, ${city.name.toLowerCase()} companions, verified escorts ${city.name.toLowerCase()}, discreet ${city.name.toLowerCase()} escort, independent companion ${city.name.toLowerCase()}

RETURN ONLY THIS JSON:
{
  "title": "SEO title string under 80 chars",
  "metaTitle": "meta title under 60 chars",
  "metaDescription": "meta description under 160 chars",
  "excerpt": "blog teaser under 160 chars",
  "focusKeyword": "primary focus keyword phrase",
  "keywords": ["12-15 LSI and semantic keywords"],
  "tags": ["6-8 tag strings"],
  "category": "Guide | Tips | Pricing | Locations | Safety",
  "content": "complete HTML article body string",
  "faqs": [
    {"question": "question text", "answer": "detailed answer 40-60 words"},
    {"question": "question text", "answer": "detailed answer 40-60 words"},
    {"question": "question text", "answer": "detailed answer 40-60 words"},
    {"question": "question text", "answer": "detailed answer 40-60 words"},
    {"question": "question text", "answer": "detailed answer 40-60 words"},
    {"question": "question text", "answer": "detailed answer 40-60 words"}
  ]
}`;

  const response = await getOpenAIClient().chat.completions.create({
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

  let content = String(parsed.content || '');
  const slug = buildSlug(city.slug, service.slug, input.topicAngle);
  let featuredImage: GeneratedImage | undefined;
  let inlineImages: GeneratedImage[] = [];

  if (input.generateImage) {
    const requestedCount = Math.max(1, Math.min(3, Number(process.env.AI_BLOG_IMAGE_COUNT || 3)));
    inlineImages = await generateRelatedBlogImages(city.name, service.name, slug, city.landmarks, requestedCount);
    featuredImage =
      inlineImages[0] ||
      (await generateBlogImage(city.name, service.name, slug, city.landmarks[0])) ||
      getCityFallbackImage(city.slug, service.name, city.name);
    content = injectInlineImages(content, inlineImages.slice(1));
  }

  const video = getSeoVideo(city.slug);

  return {
    title: String(parsed.title || titleRaw).slice(0, 80),
    slug,
    content,
    excerpt: String(parsed.excerpt || service.summary).slice(0, 160),
    metaTitle: String(parsed.metaTitle || titleRaw).slice(0, 60),
    metaDescription: String(parsed.metaDescription || service.summary).slice(0, 160),
    focusKeyword: String(parsed.focusKeyword || `${service.name.toLowerCase()} in ${city.name.toLowerCase()}`),
    keywords: Array.isArray(parsed.keywords)
      ? (parsed.keywords as unknown[]).map(String).slice(0, 20)
      : service.keywords,
    city: city.slug,
    cityName: city.name,
    service: service.slug,
    featuredImage,
    inlineImages,
    videos: [video],
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
