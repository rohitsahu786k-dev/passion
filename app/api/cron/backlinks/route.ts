import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { BacklinkCampaign } from '@/lib/models/BacklinkCampaign';
import { autoQueueDailyCampaigns } from '@/lib/services/backlinksScheduler';
import { runMoneyRobotCampaign } from '@/lib/services/moneyRobotAutomation';

export const runtime = 'nodejs';
export const maxDuration = 300;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();

    const schedulerLogs: string[] = [];
    await autoQueueDailyCampaigns((message) => {
      schedulerLogs.push(message);
    });

    const campaign = await BacklinkCampaign.findOne({ status: 'pending' }).sort({ createdAt: 1 });
    if (!campaign) {
      return NextResponse.json({
        success: true,
        message: 'No pending backlink campaigns found',
        schedulerLogs,
      });
    }

    campaign.status = 'running';
    campaign.logs = [`[${new Date().toLocaleTimeString()}] Cron worker picked up campaign.`];
    await campaign.save();

    const campaignId = campaign._id;
    const result = await runMoneyRobotCampaign({
      name: campaign.name,
      moneySiteUrls: campaign.moneySiteUrls,
      keywords: campaign.keywords,
      diagramId: campaign.diagramId,
      articleTitle: campaign.articleTitle,
      articleBody: campaign.articleBody,
      onLog: async (message) => {
        await BacklinkCampaign.findByIdAndUpdate(campaignId, {
          $push: { logs: `[${new Date().toLocaleTimeString()}] ${message}` },
        });
      },
    });

    await BacklinkCampaign.findByIdAndUpdate(campaignId, {
      status: result.success ? 'completed' : 'failed',
      $push: {
        logs: `[${new Date().toLocaleTimeString()}] ${
          result.success
            ? 'Campaign execution succeeded on MoneyRobot.'
            : `Campaign execution failed: ${result.error}`
        }`,
      },
    });

    return NextResponse.json({
      success: result.success,
      campaignId,
      campaignName: campaign.name,
      error: result.error ?? null,
      schedulerLogs,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown backlink cron error';
    console.error('[backlinks cron]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
