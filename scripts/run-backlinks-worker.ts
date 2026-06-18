import { loadEnvConfig } from '@next/env';
import mongoose from 'mongoose';
import { connectDB } from '../lib/mongodb';
import { BacklinkCampaign } from '../lib/models/BacklinkCampaign';
import { runMoneyRobotCampaign } from '../lib/services/moneyRobotAutomation';
import { autoQueueDailyCampaigns } from '../lib/services/backlinksScheduler';

// Load environment variables matching Next.js config
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function processPendingCampaigns() {
  try {
    await connectDB();
  } catch (err: any) {
    console.error(`[Worker] Database connection failed: ${err.message}`);
    return;
  }

  // 1. Run the daily scheduler check to automatically queue daily campaigns if needed
  try {
    await autoQueueDailyCampaigns((msg) => console.log(`[Worker -> Scheduler] ${msg}`));
  } catch (err: any) {
    console.error(`[Worker] Scheduler failed: ${err.message}`);
  }

  // 2. Find one pending campaign
  console.log(`[Worker] Checking database for pending campaigns...`);
  const campaign = await BacklinkCampaign.findOne({ status: 'pending' }).sort({ createdAt: 1 });

  if (!campaign) {
    console.log(`[Worker] No pending campaigns found.`);
    return;
  }

  console.log(`[Worker] Found pending campaign: "${campaign.name}" (${campaign._id})`);
  
  // Set to running
  campaign.status = 'running';
  campaign.logs = [`[${new Date().toLocaleTimeString()}] Worker picked up campaign.`];
  await campaign.save();

  try {
    const result = await runMoneyRobotCampaign({
      name: campaign.name,
      moneySiteUrls: campaign.moneySiteUrls,
      keywords: campaign.keywords,
      diagramId: campaign.diagramId,
      articleTitle: campaign.articleTitle,
      articleBody: campaign.articleBody,
      onLog: async (message) => {
        console.log(`[Campaign Log] ${message}`);
        // Log dynamically into DB
        await BacklinkCampaign.findByIdAndUpdate(campaign._id, {
          $push: { logs: `[${new Date().toLocaleTimeString()}] ${message}` }
        });
      }
    });

    if (result.success) {
      console.log(`[Worker] Campaign "${campaign.name}" succeeded!`);
      await BacklinkCampaign.findByIdAndUpdate(campaign._id, {
        status: 'completed',
        $push: { logs: `[${new Date().toLocaleTimeString()}] Campaign execution succeeded on MoneyRobot.` }
      });
    } else {
      console.error(`[Worker] Campaign "${campaign.name}" failed: ${result.error}`);
      await BacklinkCampaign.findByIdAndUpdate(campaign._id, {
        status: 'failed',
        $push: { logs: `[${new Date().toLocaleTimeString()}] Campaign execution failed: ${result.error}` }
      });
    }
  } catch (err: any) {
    console.error(`[Worker] Critical exception processing campaign "${campaign.name}":`, err);
    await BacklinkCampaign.findByIdAndUpdate(campaign._id, {
      status: 'failed',
      $push: { logs: `[${new Date().toLocaleTimeString()}] Critical exception: ${err.message}` }
    });
  }
}

async function main() {
  console.log('====================================================');
  console.log('MoneyRobot Backlink Campaign Automation Worker started');
  console.log(`Chrome path: ${process.env.MONEYROBOT_CHROME_PATH}`);
  console.log('====================================================');

  const continuousMode = process.argv.includes('--loop');

  if (continuousMode) {
    console.log('[Worker] Running in continuous loop mode (polling every 30 seconds)...');
    while (true) {
      try {
        await processPendingCampaigns();
      } catch (err) {
        console.error('[Worker] Loop error:', err);
      }
      await delay(30000);
    }
  } else {
    console.log('[Worker] Running in single-run mode...');
    await processPendingCampaigns();
    await mongoose.disconnect();
    console.log('[Worker] Single run completed. Exiting.');
  }
}

main().catch((err) => {
  console.error('[Worker] Fatal error in main execution loop:', err);
  process.exit(1);
});
