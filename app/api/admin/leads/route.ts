import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Lead } from '@/lib/models/Lead';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = 25;
  const status = searchParams.get('status') || '';
  const city = searchParams.get('city') || '';

  const query: Record<string, string> = {};
  if (status) query.status = status;
  if (city) query.city = city;

  try {
    await connectDB();
    const [leads, total] = await Promise.all([
      Lead.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Lead.countDocuments(query),
    ]);
    return NextResponse.json({ leads, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, status } = await req.json();
    const valid = ['new', 'contacted', 'converted', 'lost'];
    if (!valid.includes(status)) return NextResponse.json({ error: 'Invalid status' }, { status: 400 });

    await connectDB();
    await Lead.findByIdAndUpdate(id, { status });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
