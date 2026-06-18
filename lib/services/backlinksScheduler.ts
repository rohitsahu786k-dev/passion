import { cities } from '../../data/cities';
import { services } from '../../data/services';
import { absoluteUrl, cityLandingPath, cityServicePath } from '../seo/site';
import { BacklinkCampaign } from '../models/BacklinkCampaign';
import { generateBacklinkContent } from './backlinksContent';

export const MONEY_ROBOT_DIAGRAMS = [
  '1 > 3 > 9 + Social Bookmarks',
  '1 > 3 > 12 Social Bookmarks Power',
  'High Competition - blog network Web 2.0 blogs Profiles and Bookmarks',
  'Low Competition - Blogs and social bookmarks',
  'Medium Competition - Blog network T3 wikis and Bookmarks',
  'Medium Competition - Blog network with T2 Profiles',
  'Backlinks Diversity Power',
  'Boost Local Rankings - 4x Web directories ranking signals',
  'Medium Competition - Blog network and T4 wikis',
  'High Competition - Diamond Star SEO',
  'Diversity Backlink Profile Power',
  'Diversity Rankings Backlinks T1 and T2',
  'Google Maps Embedding Rankings 8x Web 2.0 blogs'
];

export async function autoQueueDailyCampaigns(onLog?: (msg: string) => void) {
  const log = (msg: string) => {
    console.log(`[Scheduler] ${msg}`);
    if (onLog) onLog(msg);
  };

  log('Checking if daily campaigns have been queued today...');

  // Set time threshold to 20 hours ago to avoid double queueing
  const thresholdTime = new Date();
  thresholdTime.setHours(thresholdTime.getHours() - 20);

  const existingCampaignToday = await BacklinkCampaign.findOne({
    name: { $regex: /^Daily Auto -/ },
    createdAt: { $gte: thresholdTime }
  });

  if (existingCampaignToday) {
    log('Daily campaigns already queued within the last 20 hours. Skipping generation.');
    return;
  }

  log('No daily campaigns queued today. Initiating scheduler...');

  const totalDailyCampaignsCount = await BacklinkCampaign.countDocuments({
    name: { $regex: /^Daily Auto -/ }
  });

  const totalCitiesCount = cities.length;
  const totalTargetsPerCity = 6;
  const totalCombinations = totalCitiesCount * totalTargetsPerCity;

  const rotationRunIndex = Math.floor(totalDailyCampaignsCount / MONEY_ROBOT_DIAGRAMS.length);
  const targetIndex = rotationRunIndex % totalCombinations;

  const cityIndex = Math.floor(targetIndex / totalTargetsPerCity);
  const pageTypeIndex = targetIndex % totalTargetsPerCity;

  const city = cities[cityIndex];
  if (!city) {
    log('Error: Rotating city index out of bounds.');
    return;
  }

  let targetUrl = '';
  let keywords: string[] = [];
  let pageName = '';

  if (pageTypeIndex === 0) {
    targetUrl = absoluteUrl(cityLandingPath(city.slug));
    keywords = [
      `${city.name.toLowerCase()} escort service`,
      `${city.name.toLowerCase()} escorts`,
      `escorts in ${city.name.toLowerCase()}`,
      `best companions in ${city.name.toLowerCase()}`
    ];
    pageName = 'Landing Page';
  } else {
    const service = services[pageTypeIndex - 1];
    if (!service) {
      log('Error: Rotating service index out of bounds.');
      return;
    }
    targetUrl = absoluteUrl(cityServicePath(city.slug, service.slug));
    keywords = service.keywords.map(kw => `${city.name.toLowerCase()} ${kw}`);
    pageName = service.name;
  }

  log(`Target Selected: [${city.name}] ${pageName}`);
  log(`URL: ${targetUrl}`);
  log(`Keywords: ${keywords.join(', ')}`);

  const todayStr = new Date().toISOString().split('T')[0];

  log('Generating unique article copies for all diagrams in parallel...');
  await Promise.all(
    MONEY_ROBOT_DIAGRAMS.map(async (diagram) => {
      const campaignName = `Daily Auto - ${city.name} ${pageName} - [${diagram}] - ${todayStr}`;
      try {
        log(`Generating article copy for: "${diagram}"...`);
        const article = await generateBacklinkContent({
          keywords,
          urls: [targetUrl]
        });

        const campaign = new BacklinkCampaign({
          name: campaignName,
          moneySiteUrls: [targetUrl],
          keywords,
          diagramId: diagram,
          articleTitle: article.title,
          articleBody: article.body,
          status: 'pending',
          logs: [`[${new Date().toLocaleTimeString()}] Scheduled automatically by daily background cron.`]
        });

        await campaign.save();
        log(`Successfully saved and queued: "${campaignName}"`);
      } catch (err: any) {
        log(`Error generating/saving campaign for "${diagram}": ${err.message}`);
      }
    })
  );

  log('Scheduler run completed. Daily campaigns successfully queued!');
}
