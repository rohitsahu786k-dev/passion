import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getIndexableUrls } from '@/lib/seo/indexableUrls';
import { isIndexingConfigured, notifyGoogleIndexing } from '@/lib/services/googleIndexing';
import { absoluteUrl } from '@/lib/seo/site';

export const runtime = 'nodejs';

type Body = {
  urls?: string[];
  path?: string;
  limit?: number;
  dryRun?: boolean;
};

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: Body = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const requestedUrls = normalizeRequestedUrls(body);
  const urls = requestedUrls.length
    ? requestedUrls
    : (await getIndexableUrls(body.limit || 50)).map((item) => item.url);

  if (!urls.length) {
    return NextResponse.json({ error: 'No URLs found for indexing request' }, { status: 400 });
  }

  if (!body.dryRun && process.env.ALLOW_UNSUPPORTED_INDEXING_API !== 'true') {
    return NextResponse.json(
      {
        ok: false,
        error: 'Google Indexing API is not supported for regular city, service, or blog pages',
        note:
          'Use the XML sitemap and Google Search Console URL Inspection for these pages. Set ALLOW_UNSUPPORTED_INDEXING_API=true only if the URLs contain supported JobPosting or livestream VideoObject structured data.',
        count: urls.length,
        urls,
      },
      { status: 400 }
    );
  }

  if (body.dryRun) {
    return NextResponse.json({
      ok: true,
      dryRun: true,
      count: urls.length,
      urls,
      note: 'Dry run only. No Google Indexing API request was sent.',
    });
  }

  let configured = false;
  try {
    configured = isIndexingConfigured();
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Invalid indexing configuration' },
      { status: 500 }
    );
  }

  if (!configured) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Google Indexing API credentials are not configured',
        requiredEnv: ['GOOGLE_SERVICE_ACCOUNT_JSON', 'INDEXING_API_ENABLED=true'],
        count: urls.length,
        urls,
      },
      { status: 400 }
    );
  }

  const results = [];
  for (const url of urls) {
    const result = await notifyGoogleIndexing(url, 'URL_UPDATED');
    results.push({ url, ...result });
  }

  const successCount = results.filter((result) => result.ok).length;
  return NextResponse.json({
    ok: successCount === results.length,
    count: results.length,
    successCount,
    failedCount: results.length - successCount,
    results,
    note: 'Google Indexing API requests were sent. Indexing itself is not guaranteed by Google.',
  });
}

function normalizeRequestedUrls(body: Body) {
  const raw = body.urls?.length ? body.urls : body.path ? [body.path] : [];

  return raw
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => {
      if (value.startsWith('https://')) return value;
      if (value.startsWith('/')) return absoluteUrl(value);
      return '';
    })
    .filter(Boolean);
}
