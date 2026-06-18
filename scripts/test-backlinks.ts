import fs from 'fs';
import path from 'path';
import { connectDB } from '../lib/mongodb';
import { autoQueueDailyCampaigns } from '../lib/services/backlinksScheduler';
import { BacklinkCampaign } from '../lib/models/BacklinkCampaign';
import mongoose from 'mongoose';

// Manual env loader that handles Windows line endings correctly
const envPath = path.resolve('.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const cleanLine = line.replace(/\r/g, '').trim();
    if (cleanLine && !cleanLine.startsWith('#')) {
      const parts = cleanLine.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join('=').trim();
        process.env[key] = val;
      }
    }
  });
}

async function runSchedulerTest() {
  console.log('Testing Backlinks Daily Scheduler Integration...');
  console.log(`OpenAI API Key exists: ${!!process.env.OPENAI_API_KEY}`);
  console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);

  try {
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('Database connected successfully.');

    // Remove any daily auto campaigns from the last 24 hours to force a fresh scheduler run
    console.log('Cleaning up daily auto campaigns from the last 24 hours to force scheduler execution...');
    const deleteResult = await BacklinkCampaign.deleteMany({
      name: { $regex: /^Daily Auto -/ }
    });
    console.log(`Deleted ${deleteResult.deletedCount} old scheduled campaigns.`);

    console.log('Running daily scheduler...');
    await autoQueueDailyCampaigns((msg) => console.log(`[Scheduler Log] ${msg}`));

    console.log('Verifying queued campaigns in MongoDB...');
    const queued = await BacklinkCampaign.find({
      name: { $regex: /^Daily Auto -/ }
    });

    console.log(`Found ${queued.length} scheduled campaigns in database:`);
    queued.forEach((c) => {
      console.log(`- Campaign: ${c.name}`);
      console.log(`  Diagram: ${c.diagramId}`);
      console.log(`  Target URL: ${c.moneySiteUrls[0]}`);
      console.log(`  Keywords: ${c.keywords.join(', ')}`);
      console.log(`  Article Title: ${c.articleTitle}`);
      console.log(`  Article Body Length: ${c.articleBody.length} chars`);
      console.log('----------------------------------------------------');
    });

    // Clean disconnect
    await mongoose.disconnect();
    console.log('Scheduler test completed successfully.');
  } catch (err: any) {
    console.error('Scheduler test failed with Error:', err);
    process.exit(1);
  }
}

runSchedulerTest();
