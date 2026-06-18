'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Sparkles, Send, Eye, RefreshCw, CheckCircle, AlertCircle, Clock, BookOpen, Zap } from 'lucide-react';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { TOPIC_ANGLES } from '@/lib/services/blogTopics';

interface PreviewData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  focusKeyword: string;
  keywords: string[];
  tags: string[];
  category: string;
  readingTime: number;
  content: string;
  faqs: Array<{ question: string; answer: string }>;
  cityName: string;
}

interface AiBlog {
  _id: string;
  title: string;
  slug: string;
  city: string;
  cityName: string;
  service: string;
  isPublished: boolean;
  publishedAt: string;
  readingTime: number;
}

type Status = 'idle' | 'generating' | 'preview' | 'publishing' | 'done' | 'error';

export default function AutoBlogPage() {
  const [citySlug, setCitySlug] = useState('');
  const [serviceSlug, setServiceSlug] = useState('');
  const [topicAngle, setTopicAngle] = useState<string>('guide');
  const [status, setStatus] = useState<Status>('idle');
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [publishedSlug, setPublishedSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showContentPreview, setShowContentPreview] = useState(false);
  const [aiBlogStats, setAiBlogStats] = useState<{ total: number; blogs: AiBlog[] } | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  const loadStats = useCallback(async () => {
    setStatsLoading(true);
    try {
      const res = await fetch('/api/admin/blogs/generate?page=1');
      if (res.ok) {
        const data = await res.json();
        setAiBlogStats({ total: data.total, blogs: data.blogs?.slice(0, 5) || [] });
      }
    } finally {
      setStatsLoading(false);
    }
  }, []);

  useEffect(() => { loadStats(); }, [loadStats]);

  const totalCombinations = cities.length * services.length * TOPIC_ANGLES.length;

  async function handleGenerate(publishNow: boolean) {
    if (!citySlug || !serviceSlug) {
      setError('Please select a city and service');
      return;
    }
    setStatus('generating');
    setPreview(null);
    setError(null);
    setPublishedSlug(null);

    try {
      const res = await fetch('/api/admin/blogs/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ citySlug, serviceSlug, topicAngle, publishNow }),
      });
      const data = await res.json();

      if (data.error) {
        setStatus('error');
        setError(data.error);
        return;
      }

      if (publishNow) {
        setStatus('done');
        setPublishedSlug(data.slug);
        loadStats();
      } else {
        setStatus('preview');
        setPreview(data.preview);
      }
    } catch (e) {
      setStatus('error');
      setError(String(e));
    }
  }

  async function handlePublishPreview() {
    if (!preview) return;
    setStatus('publishing');

    try {
      const res = await fetch('/api/admin/blogs/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ citySlug, serviceSlug, topicAngle, publishNow: true }),
      });
      const data = await res.json();

      if (data.error) {
        setStatus('error');
        setError(data.error);
      } else {
        setStatus('done');
        setPublishedSlug(data.slug);
        setPreview(null);
        loadStats();
      }
    } catch (e) {
      setStatus('error');
      setError(String(e));
    }
  }

  function reset() {
    setStatus('idle');
    setPreview(null);
    setError(null);
    setPublishedSlug(null);
    setShowContentPreview(false);
  }

  const isLoading = status === 'generating' || status === 'publishing';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles size={22} className="text-[#D4AF37]" />
            AI Auto Blog
          </h1>
          <p className="text-[#888] text-sm mt-1">
            GPT-4o powered SEO blog generation — 1 post daily, auto-published at 6:30 AM IST
          </p>
        </div>
        <div className="text-right">
          <p className="text-[#D4AF37] text-2xl font-bold">{aiBlogStats?.total ?? '—'}</p>
          <p className="text-[#888] text-xs">AI blogs published</p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888] text-xs uppercase tracking-wider mb-1">Total Combinations</p>
          <p className="text-white text-xl font-bold">{totalCombinations.toLocaleString()}</p>
          <p className="text-[#555] text-xs mt-1">{cities.length} cities × {services.length} services × {TOPIC_ANGLES.length} angles</p>
        </div>
        <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888] text-xs uppercase tracking-wider mb-1">Coverage</p>
          <p className="text-white text-xl font-bold">
            {aiBlogStats ? Math.round((aiBlogStats.total / totalCombinations) * 100) : 0}%
          </p>
          <p className="text-[#555] text-xs mt-1">{aiBlogStats?.total ?? 0} of {totalCombinations} topics done</p>
        </div>
        <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-4">
          <p className="text-[#888] text-xs uppercase tracking-wider mb-1">Next Auto Run</p>
          <p className="text-white text-xl font-bold flex items-center gap-1"><Clock size={16} /> Daily</p>
          <p className="text-[#555] text-xs mt-1">6:30 AM IST via Vercel Cron</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Generation Form */}
        <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-6 space-y-5">
          <h2 className="text-white font-semibold flex items-center gap-2">
            <Zap size={16} className="text-[#D4AF37]" />
            Manual Generate
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-[#888] text-xs uppercase tracking-wider block mb-2">City</label>
              <select
                value={citySlug}
                onChange={e => setCitySlug(e.target.value)}
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] border border-[#333] text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
              >
                <option value="">— Select City —</option>
                {cities.map(c => (
                  <option key={c.slug} value={c.slug}>{c.name}, {c.state}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[#888] text-xs uppercase tracking-wider block mb-2">Service</label>
              <select
                value={serviceSlug}
                onChange={e => setServiceSlug(e.target.value)}
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] border border-[#333] text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
              >
                <option value="">— Select Service —</option>
                {services.map(s => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[#888] text-xs uppercase tracking-wider block mb-2">Topic Angle</label>
              <div className="grid grid-cols-2 gap-2">
                {TOPIC_ANGLES.map(a => (
                  <button
                    key={a.key}
                    onClick={() => setTopicAngle(a.key)}
                    disabled={isLoading}
                    className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                      topicAngle === a.key
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#1A1A1A] border-[#333] text-[#888] hover:border-[#555]'
                    } disabled:opacity-50`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => handleGenerate(false)}
              disabled={isLoading || !citySlug || !serviceSlug}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#333] text-white text-sm py-2.5 rounded-lg hover:border-[#D4AF37] disabled:opacity-40 transition-colors"
            >
              <Eye size={15} />
              Preview First
            </button>
            <button
              onClick={() => handleGenerate(true)}
              disabled={isLoading || !citySlug || !serviceSlug}
              className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37] text-black text-sm font-semibold py-2.5 rounded-lg hover:bg-[#c9a32e] disabled:opacity-40 transition-colors"
            >
              {isLoading ? (
                <>
                  <RefreshCw size={15} className="animate-spin" />
                  {status === 'generating' ? 'Generating…' : 'Publishing…'}
                </>
              ) : (
                <>
                  <Send size={15} />
                  Generate & Publish
                </>
              )}
            </button>
          </div>

          {/* Status feedback */}
          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-950/30 border border-red-900/50 rounded-lg">
              <AlertCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {status === 'done' && publishedSlug && (
            <div className="flex items-start gap-2 p-3 bg-green-950/30 border border-green-900/50 rounded-lg">
              <CheckCircle size={15} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-green-400 text-sm font-semibold">Published successfully!</p>
                <Link
                  href={`/blog/${publishedSlug}/`}
                  target="_blank"
                  className="text-green-300 text-xs underline"
                >
                  /blog/{publishedSlug}/
                </Link>
              </div>
            </div>
          )}

          {status === 'done' && (
            <button onClick={reset} className="w-full text-[#888] text-sm py-2 hover:text-white transition-colors">
              Generate Another →
            </button>
          )}
        </div>

        {/* Recent AI Blogs */}
        <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-6">
          <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-[#D4AF37]" />
            Recent AI Blogs
          </h2>

          {statsLoading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-[#1A1A1A] rounded-lg animate-pulse" />
              ))}
            </div>
          ) : aiBlogStats?.blogs.length === 0 ? (
            <p className="text-[#555] text-sm text-center py-8">No AI blogs yet — generate your first one!</p>
          ) : (
            <div className="space-y-2">
              {aiBlogStats?.blogs.map(blog => (
                <div key={blog._id} className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg group">
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium truncate">{blog.title}</p>
                    <p className="text-[#555] text-xs mt-0.5">
                      {blog.cityName} · {blog.readingTime} min read
                    </p>
                  </div>
                  <Link
                    href={`/blog/${blog.slug}/`}
                    target="_blank"
                    className="ml-3 text-[#555] hover:text-[#D4AF37] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Eye size={14} />
                  </Link>
                </div>
              ))}
              {(aiBlogStats?.total ?? 0) > 5 && (
                <Link
                  href="/admin/blogs/"
                  className="block text-center text-[#888] text-xs py-2 hover:text-[#D4AF37] transition-colors"
                >
                  View all {aiBlogStats?.total} AI blogs →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Preview Panel */}
      {status === 'preview' && preview && (
        <div className="bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <Eye size={16} className="text-[#D4AF37]" />
              Generated Preview
            </h2>
            <div className="flex gap-3">
              <button
                onClick={reset}
                className="text-[#888] text-sm px-4 py-2 rounded-lg border border-[#333] hover:border-[#555] transition-colors"
              >
                Discard
              </button>
              <button
                onClick={handlePublishPreview}
                disabled={status === 'publishing' as unknown as boolean}
                className="flex items-center gap-2 bg-[#D4AF37] text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#c9a32e] disabled:opacity-40 transition-colors"
              >
                <Send size={14} />
                Publish Now
              </button>
            </div>
          </div>

          {/* SEO Meta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Title</p>
                <p className="text-white text-sm font-semibold">{preview.title}</p>
              </div>
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Meta Title ({preview.metaTitle.length} chars)</p>
                <p className="text-[#D4AF37] text-sm">{preview.metaTitle}</p>
              </div>
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Meta Description ({preview.metaDescription.length} chars)</p>
                <p className="text-[#888] text-sm">{preview.metaDescription}</p>
              </div>
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Focus Keyword</p>
                <span className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1 rounded">
                  {preview.focusKeyword}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Slug</p>
                <p className="text-[#888] text-xs font-mono">/blog/{preview.slug}/</p>
              </div>
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Reading Time</p>
                <p className="text-white text-sm">{preview.readingTime} min</p>
              </div>
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Category / Tags</p>
                <p className="text-white text-sm">{preview.category}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {preview.tags.map(t => (
                    <span key={t} className="text-xs bg-[#1A1A1A] text-[#888] border border-[#333] px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#555] text-xs uppercase tracking-wider mb-1">Keywords ({preview.keywords.length})</p>
                <p className="text-[#666] text-xs leading-relaxed">{preview.keywords.slice(0, 8).join(', ')}…</p>
              </div>
            </div>
          </div>

          {/* FAQs preview */}
          {preview.faqs.length > 0 && (
            <div>
              <p className="text-[#555] text-xs uppercase tracking-wider mb-2">FAQs ({preview.faqs.length})</p>
              <div className="space-y-2">
                {preview.faqs.map((faq, i) => (
                  <div key={i} className="p-3 bg-[#1A1A1A] rounded-lg">
                    <p className="text-white text-xs font-semibold">{faq.question}</p>
                    <p className="text-[#888] text-xs mt-1 line-clamp-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content toggle */}
          <div>
            <button
              onClick={() => setShowContentPreview(v => !v)}
              className="text-[#888] text-sm hover:text-white transition-colors"
            >
              {showContentPreview ? '▲ Hide' : '▼ Show'} Full Content ({preview.content.length.toLocaleString()} chars)
            </button>
            {showContentPreview && (
              <div
                className="mt-4 prose prose-invert prose-sm max-w-none bg-[#080808] rounded-lg p-5 border border-[#2A2A2A] text-sm text-[#ccc] leading-relaxed max-h-96 overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: preview.content }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
