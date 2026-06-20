import { NextRequest, NextResponse } from 'next/server';
import { getSiteConfig } from '@/lib/getSiteConfig';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const configured = await getSiteConfig();
  const phone = (searchParams.get('phone') || configured.whatsapp || configured.phone || '919999900101').replace(/\D/g, '');
  const text = searchParams.get('text') || 'Hi, I am interested in your services';

  const redirectUrl = new URL(`https://wa.me/${phone}`);
  redirectUrl.searchParams.set('text', text);

  return NextResponse.redirect(redirectUrl, 302);
}
