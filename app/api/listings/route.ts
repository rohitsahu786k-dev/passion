import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB } from '@/lib/mongodb';
import { ProviderListing } from '@/lib/models/ProviderListing';
import { auth } from '@/auth';

const listingSchema = z.object({
  businessName: z.string().min(2),
  ownerName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  whatsapp: z.string().min(10),
  city: z.string().min(2),
  service: z.string().min(2),
  description: z.string().min(30).max(600),
  plan: z.enum(['free', 'silver', 'gold', 'platinum']).default('free'),
  monthlyBudget: z.coerce.number().min(0).default(0),
  website: z.string().url().optional().or(z.literal(''))
});

export async function POST(req: NextRequest) {
  try {
    const parsed = listingSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid listing details' }, { status: 400 });
    }

    const phone = parsed.data.phone.replace(/\D/g, '');
    const whatsapp = parsed.data.whatsapp.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(phone) || !/^(91)?[6-9]\d{9}$/.test(whatsapp)) {
      return NextResponse.json({ error: 'Invalid phone or WhatsApp number' }, { status: 400 });
    }

    await connectDB();
    const listing = await ProviderListing.create({
      ...parsed.data,
      phone,
      whatsapp,
      website: parsed.data.website || undefined,
      status: 'pending',
      isVerified: false
    });

    return NextResponse.json({ success: true, listingId: listing._id, status: listing.status }, { status: 201 });
  } catch (error) {
    console.error('Listing creation error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = 20;
  const status = searchParams.get('status') || '';
  const query: Record<string, string> = {};
  if (status) query.status = status;

  try {
    await connectDB();
    const [listings, total] = await Promise.all([
      ProviderListing.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      ProviderListing.countDocuments(query),
    ]);
    return NextResponse.json({ listings, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, status } = await req.json();
    const valid = ['pending', 'approved', 'rejected', 'paused'];
    if (!valid.includes(status)) return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    await connectDB();
    const update: Record<string, unknown> = { status };
    if (status === 'approved') update.approvedAt = new Date();
    await ProviderListing.findByIdAndUpdate(id, update);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
