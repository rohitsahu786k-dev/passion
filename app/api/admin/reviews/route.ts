import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Review } from '@/lib/models/Review';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const status = searchParams.get('status') || 'pending'; // pending | approved
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = 20;

  const query = status === 'approved' ? { isApproved: true } : { isApproved: false };

  try {
    await connectDB();
    const [reviews, total] = await Promise.all([
      Review.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Review.countDocuments(query),
    ]);
    return NextResponse.json({ reviews, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, action } = await req.json();
    const update =
      action === 'approve' ? { isApproved: true } :
      action === 'feature' ? { isApproved: true, isFeatured: true } :
      action === 'reject' ? { isApproved: false, isFeatured: false } : null;

    if (!update) return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

    await connectDB();
    await Review.findByIdAndUpdate(id, update);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
