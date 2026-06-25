import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  try {
    await connectDB();
    const blog = await Blog.findById(id).lean();
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  try {
    const body = await req.json();
    await connectDB();

    // If slug changed, check uniqueness
    if (body.slug) {
      const conflict = await Blog.findOne({ slug: body.slug, _id: { $ne: id } });
      if (conflict) return NextResponse.json({ error: 'Slug already in use' }, { status: 409 });
    }

    const update = {
      ...body,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
      keywords: Array.isArray(body.keywords)
        ? body.keywords
        : (body.keywords || '').split(',').map((k: string) => k.trim()).filter(Boolean),
      tags: Array.isArray(body.tags)
        ? body.tags
        : (body.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean),
    };

    const blog = await Blog.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    revalidatePath('/blog/');
    revalidatePath(`/blog/${(blog.slug as string)}/`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss/');
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  try {
    await connectDB();
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    revalidatePath('/blog/');
    revalidatePath(`/blog/${(blog.slug as string)}/`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss/');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
