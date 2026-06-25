import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = 20;
  const filter = searchParams.get('filter') || 'all'; // all | published | draft | scheduled
  const search = searchParams.get('search') || '';

  const now = new Date();
  const query: Record<string, unknown> = {};
  if (filter === 'published') query.isPublished = true, (query as Record<string, unknown>).publishedAt = { $lte: now };
  if (filter === 'draft') query.isPublished = false;
  if (filter === 'scheduled') query.isPublished = true, (query as Record<string, unknown>).publishedAt = { $gt: now };
  if (search) query.title = { $regex: search, $options: 'i' };

  try {
    await connectDB();
    const [blogs, total] = await Promise.all([
      Blog.find(query)
        .sort({ publishedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .select('title slug city cityName service isPublished isFeatured publishedAt readingTime createdAt')
        .lean(),
      Blog.countDocuments(query),
    ]);

    return NextResponse.json({ blogs, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    await connectDB();

    const existing = await Blog.findOne({ slug: body.slug });
    if (existing) return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });

    const blog = await Blog.create({
      ...body,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
      keywords: Array.isArray(body.keywords)
        ? body.keywords
        : (body.keywords || '').split(',').map((k: string) => k.trim()).filter(Boolean),
      tags: Array.isArray(body.tags)
        ? body.tags
        : (body.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean),
    });

    revalidatePath('/blog/');
    revalidatePath(`/blog/${blog.slug}/`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss/');
    return NextResponse.json({ success: true, id: blog._id }, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
