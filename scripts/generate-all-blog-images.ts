import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { connectDB } from '../lib/mongodb';
import { Blog } from '../lib/models/Blog';
import { blogSeeds } from '../data/blogSeeds';
import { getCity } from '../data/cities';
import { generateBlogImage } from '../lib/services/imageGenerator';

// Load .env.local manually
const envPath = path.resolve('.env.local');
console.log('Loading env from:', envPath);
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

function getLocalSeoContent(blog: any, city: any) {
  const landmarksText = city.landmarks && city.landmarks.length > 0
    ? city.landmarks.join(', ')
    : city.name;
  
  return `
    <h2>Introduction</h2>
    <p>Welcome to the ultimate guide for booking verified companions and premium adult companionship in <strong>${blog.cityName}</strong>. At Girls of Passion, we are dedicated to offering an outstanding experience with complete safety, total discretion, and high-end hospitality. Whether you are a business executive traveling to the city or a local resident seeking premium company, our verified listings are tailored to meet your exact specifications.</p>
    
    <h2>What Is ${blog.serviceName} in ${blog.cityName}?</h2>
    <p>${blog.serviceName} is a top-tier adult companionship service designed for discerning clients who value safety, beauty, and professional conduct. We coordinate with elite, independent escorts in ${blog.cityName} who are verified through our comprehensive quality check pipeline. This ensures you enjoy verified companions, 24x7 customer support, and completely secure booking parameters.</p>
    
    <h2>Types of ${blog.serviceName} Services in ${blog.cityName}</h2>
    <p>We offer flexible arrangements to fit your schedule and travel plans in the city:</p>
    <ul>
      <li><strong>Hotel Escorts:</strong> Discreet companion visits to your luxury 5-star hotel room or suite.</li>
      <li><strong>Outcalls to Residences:</strong> Seamless and private visits directly to your private apartment or villa.</li>
      <li><strong>Social & Business Events:</strong> Elegant companions for corporate events, private parties, dinner dates, and social gatherings.</li>
    </ul>
    
    <h2>How to Book ${blog.serviceName} in ${blog.cityName}</h2>
    <p>Our booking process is simple, quick, and completely private:</p>
    <ol>
      <li><strong>Initiate Contact:</strong> Reach out to our 24x7 helpline via call or WhatsApp.</li>
      <li><strong>Select a Profile:</strong> We will share verified portfolios and photos based on your specifications.</li>
      <li><strong>Provide Meet Details:</strong> Specify your location (such as hotel name or area) and schedule.</li>
      <li><strong>Confirmation:</strong> Our coordinator confirms the companion's arrival timing, typically within minutes.</li>
    </ol>
    
    <h2>Safety, Privacy & Discretion</h2>
    <p>Discretion is the foundation of our service. All bookings are protected by our strict privacy protocols—no client information is ever stored long-term or shared with third parties. Every companion in our network is thoroughly briefed on privacy norms, ensuring complete peace of mind. We highly advise against using unverified classified directories, which carry significant security and identity risks.</p>
    
    <h2>Price Guide: ${blog.serviceName} Rates in ${blog.cityName}</h2>
    <p>Rates vary depending on the companion category, booking duration, and location. Here is an estimated price layout for reference:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #2A2A2A; text-align: left;">
      <thead>
        <tr style="background-color: #151515; border-b: 1px solid #2A2A2A;">
          <th style="padding: 10px; border: 1px solid #2A2A2A;">Duration</th>
          <th style="padding: 10px; border: 1px solid #2A2A2A;">Standard Class</th>
          <th style="padding: 10px; border: 1px solid #2A2A2A;">VIP & Elite Class</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #2A2A2A;">
          <td style="padding: 10px; border: 1px solid #2A2A2A;">1 Hour</td>
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Rs. 8,000</td>
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Rs. 15,000 - 20,000</td>
        </tr>
        <tr style="border-bottom: 1px solid #2A2A2A;">
          <td style="padding: 10px; border: 1px solid #2A2A2A;">2 Hours</td>
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Rs. 14,000</td>
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Rs. 25,000 - 30,000</td>
        </tr>
        <tr style="border-bottom: 1px solid #2A2A2A;">
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Full Night (8 Hours)</td>
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Rs. 30,000</td>
          <td style="padding: 10px; border: 1px solid #2A2A2A;">Rs. 50,000 - 80,000</td>
        </tr>
      </tbody>
    </table>
    
    <h2>Best Areas in ${blog.cityName} for ${blog.serviceName}</h2>
    <p>Our outcall services cover all major locations and hotels in the city, especially surrounding major areas such as <strong>${landmarksText}</strong>. Companions can reach most central hotel properties within 30 to 45 minutes of booking confirmation.</p>
    
    <h2>Why Choose Girls of Passion?</h2>
    <p>Girls of Passion is the premier adult companionship agency in India, offering:</p>
    <ul>
      <li><strong>Genuine Profiles:</strong> Verified, fresh photo portfolios updated regularly.</li>
      <li><strong>Confidential Process:</strong> Data privacy and end-to-end discrete management.</li>
      <li><strong>Premium Companions:</strong> Beautiful, conversational, and well-behaved companions.</li>
      <li><strong>24/7 Availability:</strong> Round-the-clock booking assistance via WhatsApp and call.</li>
    </ul>
    
    <h2>Frequently Asked Questions About ${blog.serviceName} in ${blog.cityName}</h2>
    <p><strong>Q: Are the profiles and photos genuine?</strong><br>
    A: Yes, every companion profile is verified and vetted by our quality assurance team to guarantee authenticity.</p>
    <p><strong>Q: What locations do you serve?</strong><br>
    A: We cover all major business districts, upscale neighborhoods, and 5-star hotels across the city.</p>
    <p><strong>Q: How can I complete my booking?</strong><br>
    A: Simply connect via our WhatsApp link or call us directly. We will share matching profiles for your selection.</p>
    
    <h2>Editorial Review Note</h2>
    <p><em>This guide has been compiled and reviewed by the Girls of Passion Editorial Team. We are committed to providing helpful, safety-first information for clients booking companions in ${blog.cityName}.</em></p>
    
    <h2>Conclusion</h2>
    <p>For an elite, private companionship experience in ${blog.cityName}, Girls of Passion is your trusted choice. Contact us today via call or WhatsApp at +91-${city.whatsapp || '9999900101'} to explore our active listings and schedule your booking.</p>
  `;
}

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const limitArgIdx = args.indexOf('--limit');
  const limit = limitArgIdx !== -1 ? parseInt(args[limitArgIdx + 1], 10) : 120;
  const startIndexArgIdx = args.indexOf('--start-index');
  const startIndex = startIndexArgIdx !== -1 ? parseInt(args[startIndexArgIdx + 1], 10) : 0;
  
  console.log(`Starting Blog Image Generator Script...`);
  console.log(`Dry Run: ${isDryRun}`);
  console.log(`Start Index: ${startIndex}`);
  console.log(`Limit: ${limit}`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set in .env.local!');
    process.exit(1);
  }
  
  if (!process.env.CLOUDINARY_URL && !process.env.CLOUDINARY_API_KEY) {
    console.error('Cloudinary credentials are not set in .env.local!');
    process.exit(1);
  }
  
  try {
    await connectDB();
    console.log('MongoDB connected successfully.');
    
    const existingBlogs = await Blog.find({}).select('slug featuredImage').lean();
    const existingMap = new Map(existingBlogs.map(b => [b.slug, b]));
    
    console.log(`Database has ${existingBlogs.length} blogs.`);
    console.log(`Total static seeds: ${blogSeeds.length}`);
    
    const itemsToProcess = blogSeeds.slice(startIndex, startIndex + limit);
    let successCount = 0;
    let skipCount = 0;
    
    for (let i = 0; i < itemsToProcess.length; i++) {
      const seed = itemsToProcess[i];
      const globalIdx = startIndex + i;
      console.log(`\n[${globalIdx + 1}/${blogSeeds.length}] Processing slug: ${seed.slug}`);
      
      const existing = existingMap.get(seed.slug) as any;
      if (existing && existing.featuredImage?.url && existing.featuredImage.url.includes('cloudinary')) {
        console.log(`-> Blog already exists in DB with a Cloudinary image: ${existing.featuredImage.url}. Skipping.`);
        skipCount++;
        continue;
      }
      
      const city = getCity(seed.city);
      if (!city) {
        console.error(`-> Error: City "${seed.city}" not found in cities list. Skipping.`);
        continue;
      }
      
      const landmark = city.landmarks && city.landmarks[0] ? city.landmarks[0] : city.name;
      
      if (isDryRun) {
        console.log(`-> [Dry-Run] Would generate image for ${city.name} at landmark: ${landmark}`);
        console.log(`-> [Dry-Run] Would save blog to DB.`);
        successCount++;
        continue;
      }
      
      console.log(`-> Generating image for ${city.name} (${seed.serviceName}) at landmark: ${landmark}...`);
      const imageResult = await generateBlogImage(city.name, seed.serviceName, seed.slug, landmark);
      
      if (!imageResult || !imageResult.url) {
        console.error(`-> Failed to generate image for ${seed.slug}. Skipping database write.`);
        continue;
      }
      
      console.log(`-> Image generated successfully: ${imageResult.url}`);
      
      const htmlContent = getLocalSeoContent(seed, city);
      
      const blogData = {
        title: seed.title,
        slug: seed.slug,
        content: htmlContent,
        excerpt: seed.excerpt,
        metaTitle: seed.title.slice(0, 60),
        metaDescription: seed.excerpt.slice(0, 160),
        focusKeyword: seed.keywords[0] || `${seed.serviceName} in ${seed.cityName}`,
        keywords: seed.keywords,
        city: seed.city,
        cityName: seed.cityName,
        service: seed.service,
        author: {
          name: 'Girls of Passion Editorial Team',
          designation: 'SEO Content Team'
        },
        featuredImage: imageResult,
        inlineImages: [],
        faqs: [
          {
            question: `Is ${seed.serviceName} available in ${seed.cityName}?`,
            answer: `Yes. Girls of Passion provides ${seed.serviceName.toLowerCase()} in ${seed.cityName} with verified profiles, discreet booking, and 24x7 professional support. Contact us via call or WhatsApp to check current availability.`
          },
          {
            question: `How do I book escort service in ${seed.cityName}?`,
            answer: `To book escort service in ${seed.cityName}, contact Girls of Passion via call or WhatsApp. Share your preferred location, date, and requirements. Our team will confirm availability and guide you through the discreet booking process.`
          },
          {
            question: `Is the booking process private in ${seed.cityName}?`,
            answer: `Yes. All bookings with Girls of Passion in ${seed.cityName} are handled with complete confidentiality. Your personal information is never shared with third parties.`
          }
        ],
        tags: [seed.cityName, seed.serviceName, 'escort service', 'india'],
        category: 'Guide',
        readingTime: seed.readingTime,
        isPublished: true,
        publishedAt: new Date(seed.publishedAt)
      };
      
      await Blog.findOneAndUpdate(
        { slug: seed.slug },
        blogData,
        { upsert: true, new: true }
      );
      
      console.log(`-> Blog database record updated successfully!`);
      successCount++;
      
      // Delay to avoid hitting rate limits quickly
      await new Promise(r => setTimeout(r, 1000));
    }
    
    console.log(`\nScript summary:`);
    console.log(`- Total processed: ${itemsToProcess.length}`);
    console.log(`- Success/Upserted: ${successCount}`);
    console.log(`- Skipped: ${skipCount}`);
    
    await mongoose.disconnect();
    console.log('MongoDB disconnected cleanly.');
  } catch (error) {
    console.error('Fatal execution error:', error);
    process.exit(1);
  }
}

main();
