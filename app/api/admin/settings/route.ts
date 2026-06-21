import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { connectDB } from '@/lib/mongodb';
import { SiteConfig } from '@/lib/models/SiteConfig';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const config = await SiteConfig.findOne().lean();
    return NextResponse.json(config || {});
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const allowed = [
      'phone',
      'whatsapp',
      'email',
      'adminEmail',
      'siteName',
      'siteTagline',
      'instagram',
      'telegram',
      'topStripText',
      'topStripEmail',
    ];
    const update: Record<string, string | boolean | Array<Record<string, string>>> = {};
    for (const key of allowed) {
      if (typeof body[key] === 'string') update[key] = body[key].trim();
    }
    if (typeof body.topStripEnabled === 'boolean') {
      update.topStripEnabled = body.topStripEnabled;
    }
    if (Array.isArray(body.pageContacts)) {
      update.pageContacts = body.pageContacts
        .filter((item: Record<string, unknown>) => typeof item?.path === 'string' && item.path.trim())
        .map((item: Record<string, unknown>) => {
          const cleanPath = String(item.path).trim().split('?')[0].split('#')[0];
          const path = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
          return {
            path: path.endsWith('/') ? path : `${path}/`,
            phone: typeof item.phone === 'string' ? item.phone.trim() : '',
            whatsapp: typeof item.whatsapp === 'string' ? item.whatsapp.trim().replace(/\D/g, '') : '',
          };
        });
    }

    await connectDB();
    await SiteConfig.findOneAndUpdate({}, update, { upsert: true, new: true });
    revalidateTag('site-config');

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
