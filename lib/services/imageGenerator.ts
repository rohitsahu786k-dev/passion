import OpenAI from 'openai';
import { put } from '@vercel/blob';

let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI | null {
  if (!process.env.OPENAI_API_KEY) {
    console.warn('[imageGenerator] OPENAI_API_KEY not set - skipping AI image generation');
    return null;
  }

  if (!openai) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  return openai;
}

export interface GeneratedImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

// Fallback city photo mapping (existing public assets)
const cityFallbackPhotos: Record<string, string> = {
  delhi: '/public/assets/photos/beautiful-delhi-escorts.jpg',
  mumbai: '/public/assets/photos/beautiful-mumbai-escorts.jpg',
  jaipur: '/public/assets/photos/beautiful-jaipur-escorts.jpg',
  goa: '/public/assets/photos/beautiful-goa-escorts.jpg',
  udaipur: '/public/assets/photos/beautiful-escort-girls-udaipur.jpg',
  hyderabad: '/public/assets/photos/beautiful-hyderabad-escorts.jpg',
  chennai: '/public/assets/photos/beautiful-chennai-escorts.jpg',
  pune: '/public/assets/photos/beautiful-pune-escorts.jpg',
  noida: '/public/assets/photos/beautiful-noida-escorts.jpg',
  indore: '/public/assets/photos/beautiful-indore-escorts.jpg',
};

export async function generateBlogImage(
  cityName: string,
  serviceName: string,
  slug: string,
  landmark: string
): Promise<GeneratedImage | null> {
  // Skip if Vercel Blob is not configured
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.warn('[imageGenerator] BLOB_READ_WRITE_TOKEN not set — skipping AI image generation');
    return null;
  }

  try {
    const client = getOpenAIClient();
    if (!client) return null;

    const prompt = `Cinematic lifestyle editorial photography. An elegant, sophisticated Indian woman in refined evening attire at ${landmark}, ${cityName}, India. Luxury ambiance with warm professional lighting and soft bokeh background. Premium hospitality photography style, ultra-realistic, high-end magazine quality. No text or watermarks.`;

    const imageResponse = await client.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
      style: 'natural',
    });

    const tempUrl = imageResponse.data?.[0]?.url;
    if (!tempUrl) throw new Error('No image URL returned from DALL-E 3');

    // Download the temporary image
    const res = await fetch(tempUrl);
    if (!res.ok) throw new Error(`Failed to download image: ${res.status}`);
    const imageBuffer = await res.arrayBuffer();

    // Upload to Vercel Blob for permanent storage
    const filename = `blog-images/${slug}-${Date.now()}.png`;
    const { url } = await put(filename, imageBuffer, {
      access: 'public',
      contentType: 'image/png',
    });

    return {
      url,
      alt: `${serviceName} in ${cityName} – Girls of Passion`,
      width: 1792,
      height: 1024,
    };
  } catch (err) {
    console.error('[imageGenerator] DALL-E 3 generation failed:', err instanceof Error ? err.message : err);
    return null;
  }
}

export function getCityFallbackImage(citySlug: string, serviceName: string, cityName: string): GeneratedImage {
  const url = cityFallbackPhotos[citySlug] || '/public/assets/photos/beautiful-india-escorts.jpg';
  return {
    url,
    alt: `${serviceName} in ${cityName} – Girls of Passion`,
    width: 800,
    height: 600,
  };
}
