import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { Lead } from '@/lib/models/Lead';
import { ProviderListing } from '@/lib/models/ProviderListing';
import { Review } from '@/lib/models/Review';
import { blogSeeds } from '@/data/blogSeeds';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const now = new Date();

    const [
      totalDbBlogs,
      publishedBlogs,
      draftBlogs,
      scheduledBlogs,
      totalLeads,
      newLeads,
      pendingListings,
      pendingReviews,
    ] = await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ isPublished: true, publishedAt: { $lte: now } }),
      Blog.countDocuments({ isPublished: false }),
      Blog.countDocuments({ isPublished: true, publishedAt: { $gt: now } }),
      Lead.countDocuments(),
      Lead.countDocuments({ status: 'new' }),
      ProviderListing.countDocuments({ status: 'pending' }),
      Review.countDocuments({ isApproved: false }),
    ]);

    const seedCount = blogSeeds.filter((b) => new Date(b.publishedAt) <= now).length;

    return NextResponse.json({
      blogs: {
        db: totalDbBlogs,
        seeds: seedCount,
        total: totalDbBlogs + seedCount,
        published: publishedBlogs,
        draft: draftBlogs,
        scheduled: scheduledBlogs,
      },
      leads: { total: totalLeads, new: newLeads },
      listings: { pending: pendingListings },
      reviews: { pending: pendingReviews },
    });
  } catch (err) {
    console.error('Stats error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
