import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getSiteConfig, resolvePageContact } from '@/lib/getSiteConfig';

export async function GET(req: NextRequest) {
  const config = await getSiteConfig();
  const path = req.nextUrl.searchParams.get('path') || '/';
  const contact = resolvePageContact(config, path);
  return NextResponse.json({
    phone: contact.phone,
    whatsapp: contact.whatsapp,
    siteName: config.siteName,
    siteTagline: config.siteTagline,
    topStripEnabled: config.topStripEnabled,
    topStripText: config.topStripText,
    topStripEmail: config.topStripEmail,
  });
}
