import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BacklinkCampaign } from '@/lib/models/BacklinkCampaign';
import { generateBacklinkContent } from '@/lib/services/backlinksContent';

// GET: List all campaigns
export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const campaigns = await BacklinkCampaign.find().sort({ createdAt: -1 });
    return NextResponse.json(campaigns);
  } catch (err: any) {
    console.error('Failed to get campaigns:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// POST: Create a new campaign
export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const body = await req.json();
    const { name, moneySiteUrls, keywords, diagramId, articleTitle, articleBody, generateArticle } = body;

    if (!name || !moneySiteUrls || !keywords || !Array.isArray(moneySiteUrls) || !Array.isArray(keywords)) {
      return NextResponse.json({ error: 'Missing or invalid parameters' }, { status: 400 });
    }

    let finalTitle = articleTitle || '';
    let finalBody = articleBody || '';

    // If requested, pre-generate content using OpenAI
    if (generateArticle && (!finalTitle || !finalBody)) {
      try {
        const generated = await generateBacklinkContent({ keywords, urls: moneySiteUrls });
        finalTitle = generated.title;
        finalBody = generated.body;
      } catch (err: any) {
        console.error('OpenAI copy generation failed:', err);
        return NextResponse.json({ error: `OpenAI Generation Failed: ${err.message}` }, { status: 500 });
      }
    }

    const campaign = new BacklinkCampaign({
      name,
      moneySiteUrls,
      keywords,
      diagramId: diagramId || '1',
      articleTitle: finalTitle,
      articleBody: finalBody,
      status: 'pending',
      logs: ['Campaign created and queued.']
    });

    await campaign.save();
    return NextResponse.json(campaign, { status: 201 });
  } catch (err: any) {
    console.error('Failed to create campaign:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

// DELETE: Delete a campaign record
export async function DELETE(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing campaign ID' }, { status: 400 });
    }

    const deleted = await BacklinkCampaign.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Campaign deleted' });
  } catch (err: any) {
    console.error('Failed to delete campaign:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
