'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, Save, Eye, EyeOff } from 'lucide-react';
import { cities } from '@/data/cities';

const SERVICES = [
  { slug: 'vip-escort', name: 'VIP Escort' },
  { slug: 'hotel-escort', name: 'Hotel Escort' },
  { slug: 'independent-escort', name: 'Independent Escort' },
  { slug: 'call-girl', name: 'Call Girl' },
  { slug: 'outcall-escort', name: 'Outcall Escort' },
];

type FAQ = { question: string; answer: string };

export type BlogFormData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  city: string;
  cityName: string;
  service: string;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  keywords: string;
  tags: string;
  category: string;
  readingTime: number;
  authorName: string;
  authorDesignation: string;
  imageUrl: string;
  imageAlt: string;
  faqs: FAQ[];
};

const emptyForm: BlogFormData = {
  title: '', slug: '', excerpt: '', content: '',
  city: '', cityName: '', service: '',
  isPublished: false, isFeatured: false,
  publishedAt: new Date().toISOString().slice(0, 16),
  metaTitle: '', metaDescription: '', focusKeyword: '',
  keywords: '', tags: '', category: 'Escort Service',
  readingTime: 5,
  authorName: 'GOP Team', authorDesignation: 'Expert Guide',
  imageUrl: '', imageAlt: '',
  faqs: [],
};

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

type Props = {
  initialData?: Partial<BlogFormData>;
  blogId?: string;
};

export function BlogForm({ initialData, blogId }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<BlogFormData>({ ...emptyForm, ...initialData });
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  // Auto-generate slug from title (only when creating new)
  useEffect(() => {
    if (!blogId && form.title) {
      setForm((f) => ({ ...f, slug: slugify(f.title) }));
    }
  }, [form.title, blogId]);

  // Auto-fill cityName from city
  useEffect(() => {
    const city = cities.find((c) => c.slug === form.city);
    if (city) setForm((f) => ({ ...f, cityName: city.name }));
  }, [form.city]);

  // Auto-fill metaTitle from title
  useEffect(() => {
    if (!form.metaTitle && form.title) {
      setForm((f) => ({ ...f, metaTitle: f.title.slice(0, 60) }));
    }
  }, [form.title, form.metaTitle]);

  function set<K extends keyof BlogFormData>(key: K, val: BlogFormData[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function addFaq() { setForm((f) => ({ ...f, faqs: [...f.faqs, { question: '', answer: '' }] })); }
  function removeFaq(i: number) { setForm((f) => ({ ...f, faqs: f.faqs.filter((_, idx) => idx !== i) })); }
  function setFaq(i: number, field: 'question' | 'answer', val: string) {
    setForm((f) => { const faqs = [...f.faqs]; faqs[i] = { ...faqs[i], [field]: val }; return { ...f, faqs }; });
  }

  async function handleSave(publish?: boolean) {
    if (publish !== undefined) setForm((f) => ({ ...f, isPublished: publish }));
    setSaving(true);
    setError('');

    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      city: form.city,
      cityName: form.cityName,
      service: form.service,
      isPublished: publish !== undefined ? publish : form.isPublished,
      isFeatured: form.isFeatured,
      publishedAt: form.publishedAt,
      metaTitle: form.metaTitle || form.title,
      metaDescription: form.metaDescription || form.excerpt,
      focusKeyword: form.focusKeyword,
      keywords: form.keywords,
      tags: form.tags,
      category: form.category,
      readingTime: form.readingTime,
      author: { name: form.authorName, designation: form.authorDesignation },
      featuredImage: form.imageUrl ? { url: form.imageUrl, alt: form.imageAlt, width: 1200, height: 630 } : undefined,
      faqs: form.faqs.filter((f) => f.question && f.answer),
    };

    const url = blogId ? `/api/admin/blogs/${blogId}` : '/api/admin/blogs';
    const method = blogId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setSaving(false);

    if (!res.ok) { setError(data.error || 'Failed'); return; }

    setToast('Saved!');
    setTimeout(() => setToast(''), 2500);
    if (!blogId && data.id) router.push(`/admin/blogs/${data.id}/edit/`);
  }

  const inputCls = 'w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-[#555]';
  const labelCls = 'block text-xs font-medium text-[#B8B8B8] mb-1.5';
  const sectionCls = 'bg-[#151515] border border-[#2A2A2A] rounded-xl p-5';

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">{blogId ? 'Edit Blog' : 'New Blog'}</h1>
          {form.slug && <p className="text-[11px] text-[#555] mt-0.5">/blog/{form.slug}/</p>}
        </div>
        <div className="flex items-center gap-2">
          {toast && <span className="text-green-400 text-sm">{toast}</span>}
          {error && <span className="text-red-400 text-sm">{error}</span>}
          <button
            onClick={() => setPreview(!preview)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#2A2A2A] text-[#B8B8B8] hover:border-[#D4AF37] text-sm transition-colors"
          >
            {preview ? <EyeOff size={14} /> : <Eye size={14} />}
            {preview ? 'Editor' : 'Preview'}
          </button>
          <button onClick={() => handleSave(false)} disabled={saving} className="btn-outline text-sm py-2 gap-1.5">
            Save Draft
          </button>
          <button onClick={() => handleSave(true)} disabled={saving} className="btn-gold text-sm py-2 gap-1.5">
            <Save size={14} />
            {saving ? 'Saving…' : 'Publish'}
          </button>
        </div>
      </div>

      {preview ? (
        <div className={`${sectionCls} prose prose-invert max-w-none`}>
          <h2 className="text-xl text-[#D4AF37]">{form.title}</h2>
          <p className="text-[#B8B8B8] text-sm">{form.excerpt}</p>
          <div className="text-[#B8B8B8] text-sm mt-4 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: form.content }} />
        </div>
      ) : (
        <div className="grid gap-5">
          {/* Basic */}
          <div className={sectionCls}>
            <h2 className="text-sm font-semibold text-white mb-4">Basic Info</h2>
            <div className="grid gap-4">
              <div>
                <label className={labelCls}>Title *</label>
                <input className={inputCls} value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Escort Service in Delhi – Complete Guide 2026" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Slug *</label>
                  <input className={inputCls} value={form.slug} onChange={(e) => set('slug', slugify(e.target.value))} placeholder="auto-generated" />
                </div>
                <div>
                  <label className={labelCls}>Read Time (min)</label>
                  <input type="number" min={1} max={30} className={inputCls} value={form.readingTime} onChange={(e) => set('readingTime', Number(e.target.value))} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Excerpt * <span className="text-[#555]">({form.excerpt.length}/160)</span></label>
                <textarea className={inputCls} rows={2} maxLength={160} value={form.excerpt} onChange={(e) => set('excerpt', e.target.value)} placeholder="Short summary for search results and cards…" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={sectionCls}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-white">Content * <span className="text-[#555] font-normal">(HTML supported)</span></h2>
              <span className="text-[11px] text-[#555]">{form.content.length} chars</span>
            </div>
            <textarea
              className={`${inputCls} font-mono text-xs`}
              rows={16}
              value={form.content}
              onChange={(e) => set('content', e.target.value)}
              placeholder="<h2>Introduction</h2><p>Write your blog content here. HTML tags are supported.</p>"
            />
          </div>

          {/* Category */}
          <div className={sectionCls}>
            <h2 className="text-sm font-semibold text-white mb-4">Category &amp; Tags</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>City</label>
                <select className={inputCls} value={form.city} onChange={(e) => set('city', e.target.value)}>
                  <option value="">— Select city —</option>
                  {cities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Service</label>
                <select className={inputCls} value={form.service} onChange={(e) => set('service', e.target.value)}>
                  <option value="">— Select service —</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Category</label>
                <input className={inputCls} value={form.category} onChange={(e) => set('category', e.target.value)} placeholder="Escort Service" />
              </div>
              <div>
                <label className={labelCls}>Tags <span className="text-[#555]">(comma separated)</span></label>
                <input className={inputCls} value={form.tags} onChange={(e) => set('tags', e.target.value)} placeholder="escort, delhi, vip" />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className={sectionCls}>
            <h2 className="text-sm font-semibold text-white mb-4">SEO</h2>
            <div className="grid gap-4">
              <div>
                <label className={labelCls}>Meta Title <span className="text-[#555]">({form.metaTitle.length}/60)</span></label>
                <input className={inputCls} maxLength={60} value={form.metaTitle} onChange={(e) => set('metaTitle', e.target.value)} placeholder="SEO title (60 chars max)" />
              </div>
              <div>
                <label className={labelCls}>Meta Description <span className="text-[#555]">({form.metaDescription.length}/160)</span></label>
                <textarea className={inputCls} rows={2} maxLength={160} value={form.metaDescription} onChange={(e) => set('metaDescription', e.target.value)} placeholder="SEO description (160 chars max)" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Focus Keyword</label>
                  <input className={inputCls} value={form.focusKeyword} onChange={(e) => set('focusKeyword', e.target.value)} placeholder="escort service delhi" />
                </div>
                <div>
                  <label className={labelCls}>Keywords <span className="text-[#555]">(comma separated)</span></label>
                  <input className={inputCls} value={form.keywords} onChange={(e) => set('keywords', e.target.value)} placeholder="escort, call girl, vip" />
                </div>
              </div>
            </div>
          </div>

          {/* Media + Author */}
          <div className="grid grid-cols-2 gap-5">
            <div className={sectionCls}>
              <h2 className="text-sm font-semibold text-white mb-4">Featured Image</h2>
              <div className="grid gap-3">
                <div>
                  <label className={labelCls}>Image URL</label>
                  <input className={inputCls} value={form.imageUrl} onChange={(e) => set('imageUrl', e.target.value)} placeholder="/assets/photos/beautiful-delhi-escorts.jpg" />
                </div>
                <div>
                  <label className={labelCls}>Image Alt</label>
                  <input className={inputCls} value={form.imageAlt} onChange={(e) => set('imageAlt', e.target.value)} placeholder="Escort service in Delhi" />
                </div>
              </div>
            </div>
            <div className={sectionCls}>
              <h2 className="text-sm font-semibold text-white mb-4">Author &amp; Publish</h2>
              <div className="grid gap-3">
                <div>
                  <label className={labelCls}>Author Name</label>
                  <input className={inputCls} value={form.authorName} onChange={(e) => set('authorName', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Designation</label>
                  <input className={inputCls} value={form.authorDesignation} onChange={(e) => set('authorDesignation', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Published At</label>
                  <input type="datetime-local" className={inputCls} value={form.publishedAt} onChange={(e) => set('publishedAt', e.target.value)} />
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#B8B8B8]">
                    <input type="checkbox" checked={form.isPublished} onChange={(e) => set('isPublished', e.target.checked)} className="accent-[#D4AF37] w-4 h-4" />
                    Published
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#B8B8B8]">
                    <input type="checkbox" checked={form.isFeatured} onChange={(e) => set('isFeatured', e.target.checked)} className="accent-[#D4AF37] w-4 h-4" />
                    Featured
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className={sectionCls}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-white">FAQs</h2>
              <button onClick={addFaq} className="flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white transition-colors">
                <Plus size={13} /> Add FAQ
              </button>
            </div>
            {form.faqs.length === 0 && (
              <p className="text-[#555] text-sm">No FAQs yet. <button onClick={addFaq} className="text-[#D4AF37]">Add one →</button></p>
            )}
            <div className="grid gap-4">
              {form.faqs.map((faq, i) => (
                <div key={i} className="bg-[#0D0D0D] rounded-lg p-4 relative">
                  <button
                    onClick={() => removeFaq(i)}
                    className="absolute top-3 right-3 text-[#555] hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>
                  <div className="grid gap-2 pr-6">
                    <input className={inputCls} value={faq.question} onChange={(e) => setFaq(i, 'question', e.target.value)} placeholder={`Question ${i + 1}`} />
                    <textarea className={inputCls} rows={2} value={faq.answer} onChange={(e) => setFaq(i, 'answer', e.target.value)} placeholder="Answer…" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
