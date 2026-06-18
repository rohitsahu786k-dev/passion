import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BacklinkCampaign } from '@/lib/models/BacklinkCampaign';
import { runMoneyRobotCampaign } from '@/lib/services/moneyRobotAutomation';

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing campaign ID' }, { status: 400 });
    }

    const campaign = await BacklinkCampaign.findById(id);
    if (!campaign) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    if (campaign.status === 'running') {
      return NextResponse.json({ error: 'Campaign is already running' }, { status: 400 });
    }

    // Reset status and logs
    campaign.status = 'running';
    campaign.logs = [`[${new Date().toLocaleTimeString()}] Campaign execution triggered manually.`];
    await campaign.save();

    // Trigger Puppeteer execution in the background (asynchronous, doesn't block the API response)
    (async () => {
      try {
        const result = await runMoneyRobotCampaign({
          name: campaign.name,
          moneySiteUrls: campaign.moneySiteUrls,
          keywords: campaign.keywords,
          diagramId: campaign.diagramId,
          articleTitle: campaign.articleTitle,
          articleBody: campaign.articleBody,
          onLog: async (message) => {
            // Append log dynamically to MongoDB
            await BacklinkCampaign.findByIdAndUpdate(id, {
              $push: { logs: `[${new Date().toLocaleTimeString()}] ${message}` }
            });
          }
        });

        if (result.success) {
          await BacklinkCampaign.findByIdAndUpdate(id, {
            status: 'completed',
            $push: { logs: `[${new Date().toLocaleTimeString()}] Campaign execution succeeded on MoneyRobot.` }
          });
        } else {
          await BacklinkCampaign.findByIdAndUpdate(id, {
            status: 'failed',
            $push: { logs: `[${new Date().toLocaleTimeString()}] Campaign execution failed: ${result.error}` }
          });
        }
      } catch (err: any) {
        console.error('Trigger run error:', err);
        await BacklinkCampaign.findByIdAndUpdate(id, {
          status: 'failed',
          $push: { logs: `[${new Date().toLocaleTimeString()}] Critical exception: ${err.message}` }
        });
      }
    })();

    return NextResponse.json({ success: true, message: 'Campaign started in background', status: 'running' });
  } catch (err: any) {
    console.error('Failed to trigger campaign:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
