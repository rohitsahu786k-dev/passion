import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB } from '@/lib/mongodb';
import { Lead } from '@/lib/models/Lead';

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  city: z.string().min(2),
  service: z.string().min(2),
  message: z.string().optional(),
  source: z.string().optional(),
  sourceUrl: z.string().optional()
});

export async function POST(req: NextRequest) {
  try {
    const parsed = leadSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid lead details' }, { status: 400 });
    }

    const phone = parsed.data.phone.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid Indian phone number' }, { status: 400 });
    }

    await connectDB();
    const searchParams = new URL(req.url).searchParams;
    const lead = await Lead.create({
      ...parsed.data,
      phone,
      source: parsed.data.source || 'website',
      sourceUrl: parsed.data.sourceUrl || req.headers.get('referer') || '',
      utmSource: searchParams.get('utm_source') || undefined,
      utmMedium: searchParams.get('utm_medium') || undefined,
      utmCampaign: searchParams.get('utm_campaign') || undefined,
      ip: req.headers.get('x-forwarded-for') || 'unknown',
      userAgent: req.headers.get('user-agent') || undefined
    });

    return NextResponse.json({ success: true, leadId: lead._id }, { status: 201 });
  } catch (error) {
    console.error('Lead creation error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
