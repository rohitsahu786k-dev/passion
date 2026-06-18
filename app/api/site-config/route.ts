import { NextResponse } from 'next/server';
import { getSiteConfig } from '@/lib/getSiteConfig';

export async function GET() {
  const config = await getSiteConfig();
  return NextResponse.json({
    phone: config.phone,
    whatsapp: config.whatsapp,
    siteName: config.siteName,
    siteTagline: config.siteTagline,
  });
}
