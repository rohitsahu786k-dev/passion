import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { notifyGoogleIndexing } from '@/lib/services/googleIndexing';
import { absoluteUrl } from '@/lib/seo/site';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: { url?: string; path?: string; type?: 'URL_UPDATED' | 'URL_DELETED' };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const targetUrl = body.url || (body.path ? absoluteUrl(body.path) : '');
  if (!targetUrl.startsWith('https://')) {
    return NextResponse.json({ error: 'A valid https URL or site path is required' }, { status: 400 });
  }

  const result = await notifyGoogleIndexing(targetUrl, body.type || 'URL_UPDATED');
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
