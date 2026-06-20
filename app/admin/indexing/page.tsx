'use client';

import { FormEvent, useState } from 'react';
import { Send, SearchCheck, ListChecks } from 'lucide-react';

type Result = {
  ok?: boolean;
  error?: string;
  count?: number;
  successCount?: number;
  failedCount?: number;
  urls?: string[];
  results?: Array<{ url: string; ok: boolean; status: number; error?: string }>;
  note?: string;
};

export default function IndexingPage() {
  const [singleUrl, setSingleUrl] = useState('');
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState<'single' | 'batch' | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function submitSingle(e: FormEvent) {
    e.preventDefault();
    if (!singleUrl.trim()) return;
    await requestIndexing('single', { urls: [singleUrl.trim()] });
  }

  async function submitBatch() {
    await requestIndexing('batch', { limit });
  }

  async function requestIndexing(kind: 'single' | 'batch', body: Record<string, unknown>) {
    setLoading(kind);
    setResult(null);
    try {
      const res = await fetch('/api/admin/indexing/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ ok: false, error: 'Network error while sending indexing request' });
    } finally {
      setLoading(null);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Indexing Requests</h1>
        <p className="text-[#B8B8B8] text-sm mt-1">
          Send URL update notifications for important pages. Google may crawl faster, but indexing is never guaranteed.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={submitSingle} className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <SearchCheck size={17} className="text-[#D4AF37]" />
            <h2 className="text-sm font-semibold text-white">Single URL</h2>
          </div>
          <input
            value={singleUrl}
            onChange={(e) => setSingleUrl(e.target.value)}
            placeholder="https://www.girlsofpassion.in/udaipur-escort-service/"
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
          <button type="submit" disabled={loading !== null} className="btn-gold mt-4 gap-2 disabled:opacity-60">
            <Send size={15} />
            {loading === 'single' ? 'Sending...' : 'Request Indexing'}
          </button>
        </form>

        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <ListChecks size={17} className="text-[#D4AF37]" />
            <h2 className="text-sm font-semibold text-white">Priority Batch</h2>
          </div>
          <label className="block text-xs font-medium text-[#B8B8B8] mb-1.5">URL limit</label>
          <input
            type="number"
            min={1}
            max={200}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
          <p className="mt-2 text-xs text-[#555]">Uses sitemap priority: homepage, city pages, service pages, then blog URLs.</p>
          <button onClick={submitBatch} disabled={loading !== null} className="btn-gold mt-4 gap-2 disabled:opacity-60">
            <Send size={15} />
            {loading === 'batch' ? 'Sending...' : 'Request Batch Indexing'}
          </button>
        </div>
      </div>

      {result && (
        <div className={`mt-6 rounded-xl border p-5 ${result.ok ? 'border-green-900 bg-green-950/20' : 'border-red-900 bg-red-950/20'}`}>
          <h2 className={`text-sm font-semibold ${result.ok ? 'text-green-300' : 'text-red-300'}`}>
            {result.ok ? 'Request completed' : 'Request needs attention'}
          </h2>
          <p className="mt-2 text-sm text-[#B8B8B8]">
            {result.error || result.note || `${result.successCount || 0}/${result.count || 0} URLs submitted.`}
          </p>
          {result.urls && (
            <div className="mt-4 max-h-48 overflow-auto rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] p-3">
              {result.urls.slice(0, 30).map((url) => (
                <p key={url} className="text-xs text-[#888] break-all">{url}</p>
              ))}
            </div>
          )}
          {result.results && (
            <div className="mt-4 max-h-64 overflow-auto rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] p-3">
              {result.results.map((item) => (
                <p key={item.url} className={`text-xs break-all ${item.ok ? 'text-green-300' : 'text-red-300'}`}>
                  {item.ok ? 'OK' : 'FAIL'} {item.status}: {item.url}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-[#2A2A2A] bg-[#151515] p-5 text-xs leading-6 text-[#888]">
        Google Indexing API is officially limited to JobPosting and livestream pages. For normal service/blog pages,
        keep sitemap submitted in Search Console and use this panel only as a request signal.
      </div>
    </div>
  );
}
