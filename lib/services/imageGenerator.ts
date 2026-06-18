import OpenAI from 'openai';
import { put } from '@vercel/blob';
import sharp from 'sharp';

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

const cityFallbackPhotos: Record<string, string> = {
  delhi: '/assets/photos/beautiful-delhi-escorts.jpg',
  mumbai: '/assets/photos/beautiful-mumbai-escorts.jpg',
  jaipur: '/assets/photos/beautiful-jaipur-escorts.jpg',
  goa: '/assets/photos/beautiful-goa-escorts.jpg',
  udaipur: '/assets/photos/beautiful-escort-girls-udaipur.jpg',
  hyderabad: '/assets/photos/beautiful-hyderabad-escorts.jpg',
  chennai: '/assets/photos/beautiful-chennai-escorts.jpg',
  pune: '/assets/photos/beautiful-pune-escorts.jpg',
  noida: '/assets/photos/beautiful-noida-escorts.jpg',
  indore: '/assets/photos/beautiful-indore-escorts.jpg',
};

async function uploadWebpImage(tempUrl: string, filename: string) {
  const res = await fetch(tempUrl);
  if (!res.ok) throw new Error(`Failed to download image: ${res.status}`);

  const sourceBuffer = Buffer.from(await res.arrayBuffer());
  const webpBuffer = await sharp(sourceBuffer)
    .resize(1400, 800, { fit: 'cover' })
    .webp({ quality: 82 })
    .toBuffer();

  return put(filename, webpBuffer, {
    access: 'public',
    contentType: 'image/webp',
  });
}

export async function generateBlogImage(
  cityName: string,
  serviceName: string,
  slug: string,
  landmark: string
): Promise<GeneratedImage | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.warn('[imageGenerator] BLOB_READ_WRITE_TOKEN not set - skipping AI image generation');
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

    const filename = `blog-images/${slug}-${Date.now()}.webp`;
    const { url } = await uploadWebpImage(tempUrl, filename);

    return {
      url,
      alt: `${serviceName} in ${cityName} - Girls of Passion`,
      width: 1400,
      height: 800,
    };
  } catch (err) {
    console.error('[imageGenerator] DALL-E 3 generation failed:', err instanceof Error ? err.message : err);
    return null;
  }
}

export async function generateRelatedBlogImages(
  cityName: string,
  serviceName: string,
  slug: string,
  landmarks: string[],
  count = 2
): Promise<GeneratedImage[]> {
  const images: GeneratedImage[] = [];
  for (let i = 0; i < count; i += 1) {
    const landmark = landmarks[i % Math.max(landmarks.length, 1)] || cityName;
    const image = await generateBlogImage(cityName, serviceName, `${slug}-${i + 1}`, landmark);
    if (image) images.push(image);
  }
  return images;
}

export function getCityFallbackImage(citySlug: string, serviceName: string, cityName: string): GeneratedImage {
  const url = cityFallbackPhotos[citySlug] || '/assets/photos/beautiful-india-escorts.jpg';
  return {
    url,
    alt: `${serviceName} in ${cityName} - Girls of Passion`,
    width: 800,
    height: 600,
  };
}
