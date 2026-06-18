import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { generateBacklinkContent } from '@/lib/services/backlinksContent';

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const { keywords, urls } = body;

    if (!keywords || !urls || !Array.isArray(keywords) || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'Invalid keywords or urls input' }, { status: 400 });
    }

    const generated = await generateBacklinkContent({ keywords, urls });
    return NextResponse.json(generated);
  } catch (err: any) {
    console.error('Failed to generate backlinks preview copy:', err);
    return NextResponse.json({ error: err.message || 'Copy generation failed' }, { status: 500 });
  }
}
