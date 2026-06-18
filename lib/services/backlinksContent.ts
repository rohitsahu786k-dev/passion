import OpenAI from 'openai';

let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not defined in the environment variables');
  }
  if (!openai) {
    openai = new OpenAI({ apiKey });
  }
  return openai;
}

export interface BacklinkContentInput {
  keywords: string[];
  urls: string[];
}

export interface GeneratedBacklinkContent {
  title: string;
  body: string;
}

export async function generateBacklinkContent(input: BacklinkContentInput): Promise<GeneratedBacklinkContent> {
  const client = getOpenAIClient();

  const keywordsList = input.keywords.map(k => `"${k}"`).join(', ');
  const urlsList = input.urls.join(', ');

  const systemPrompt = `You are a professional SEO copywriter specialized in creating high-quality, engaging blog posts for link-building campaigns.
Your goal is to write a readable, informative, and high-quality article (500-800 words) related to the travel, companion, relationship, or lifestyle niche in India.
Always return valid JSON only. Do not include markdown code block syntax (like \`\`\`json) or any explanation.`;

  const userPrompt = `Write an engaging blog post about travel, companionship, luxury lifestyle, or premium services in India.
Include the following keywords and target URLs:
- Keywords to target: ${keywordsList}
- Target URLs to link to: ${urlsList}

Rules:
1. Length: 500-800 words.
2. The article must read naturally and be highly engaging. Avoid generic AI introductory filler.
3. You MUST naturally embed the target URLs as HTML anchor tags in the text.
4. Each target URL should be linked exactly 1-2 times.
5. The anchor text for the link should exactly match or be very close to one of the target keywords (e.g., <a href="TARGET_URL">KEYWORD</a>).
6. Format the body content using basic HTML: use paragraphs (<p>), section headings (<h2> or <h3>), and lists (<ul> or <ol>) for styling.
7. Return the response in this exact JSON format:
{
  "title": "A compelling, catchy title for the article",
  "body": "The complete HTML body of the article containing the embedded links"
}`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini', // 4o-mini is extremely fast, cost-effective, and excellent for short SEO articles
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.7,
    max_tokens: 1500,
    response_format: { type: 'json_object' }
  });

  const content = response.choices[0].message.content || '{}';
  try {
    const parsed = JSON.parse(content) as GeneratedBacklinkContent;
    if (!parsed.title || !parsed.body) {
      throw new Error('Missing title or body in OpenAI response');
    }
    return parsed;
  } catch (err) {
    console.error('Failed to parse OpenAI response:', content, err);
    throw new Error('Failed to parse article content from OpenAI API');
  }
}
