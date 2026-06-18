import { GoogleAuth } from 'google-auth-library';

type IndexingAction = 'URL_UPDATED' | 'URL_DELETED';

type ServiceAccountJson = {
  client_email: string;
  private_key: string;
  project_id?: string;
};

type IndexingResult = {
  ok: boolean;
  status: number;
  data?: unknown;
  error?: string;
};

const INDEXING_SCOPE = 'https://www.googleapis.com/auth/indexing';
const INDEXING_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

function getServiceAccount(): ServiceAccountJson | null {
  const rawJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (rawJson) {
    try {
      return JSON.parse(rawJson) as ServiceAccountJson;
    } catch {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON');
    }
  }

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (clientEmail && privateKey) {
    return { client_email: clientEmail, private_key: privateKey };
  }

  return null;
}

export function isIndexingConfigured(): boolean {
  return Boolean(getServiceAccount());
}

export async function notifyGoogleIndexing(
  url: string,
  type: IndexingAction = 'URL_UPDATED'
): Promise<IndexingResult> {
  if (process.env.INDEXING_API_ENABLED === 'false') {
    return { ok: false, status: disabledStatus(), error: 'Indexing API disabled by INDEXING_API_ENABLED=false' };
  }

  const credentials = getServiceAccount();
  if (!credentials) {
    return { ok: false, status: 0, error: 'Google service account credentials are not configured' };
  }

  const auth = new GoogleAuth({
    credentials,
    scopes: [INDEXING_SCOPE],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  const accessToken = token.token;
  if (!accessToken) {
    return { ok: false, status: 0, error: 'Could not obtain Google access token' };
  }

  const response = await fetch(INDEXING_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, type }),
  });

  const text = await response.text();
  let data: unknown = text;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  return {
    ok: response.ok,
    status: response.status,
    data: response.ok ? data : undefined,
    error: response.ok ? undefined : JSON.stringify(data),
  };
}

function disabledStatus() {
  return 0;
}
