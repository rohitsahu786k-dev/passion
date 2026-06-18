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
    const allowed = ['phone', 'whatsapp', 'email', 'adminEmail', 'siteName', 'siteTagline', 'instagram', 'telegram'];
    const update: Record<string, string> = {};
    for (const key of allowed) {
      if (typeof body[key] === 'string') update[key] = body[key].trim();
    }

    await connectDB();
    await SiteConfig.findOneAndUpdate({}, update, { upsert: true, new: true });
    revalidateTag('site-config');

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
