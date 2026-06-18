'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { PenLine, Trash2, Search, Plus, CheckCircle, Clock, FileText } from 'lucide-react';

type BlogRow = {
  _id: string;
  title: string;
  slug: string;
  city: string;
  cityName: string;
  service: string;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt: string;
  readingTime: number;
};

type ApiRes = { blogs: BlogRow[]; total: number; page: number; pages: number };

const FILTERS = ['all', 'published', 'draft', 'scheduled'] as const;
type Filter = typeof FILTERS[number];

const statusBadge = (blog: BlogRow) => {
  const now = new Date();
  const pub = new Date(blog.publishedAt);
  if (!blog.isPublished) return <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-950/40 text-red-400">Draft</span>;
  if (pub > now) return <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-950/40 text-blue-400">Scheduled</span>;
  return <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-950/40 text-green-400">Published</span>;
};

export default function BlogsPage() {
  const [data, setData] = useState<ApiRes | null>(null);
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), filter });
    if (search) params.set('search', search);
    const res = await fetch(`/api/admin/blogs?${params}`);
    const json = await res.json();
    setData(json);
    setLoading(false);
  }, [page, filter, search]);

  useEffect(() => { fetchBlogs(); }, [fetchBlogs]);

  async function deleteBlog(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;
    setDeleting(id);
    await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
    setDeleting(null);
    fetchBlogs();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Blogs</h1>
          <p className="text-[#B8B8B8] text-sm mt-0.5">Manage your DB blog posts</p>
        </div>
        <Link href="/admin/blogs/new/" className="btn-gold text-sm gap-2">
          <Plus size={15} />
          New Blog
        </Link>
      </div>

      {/* Filters + Search */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex gap-1 bg-[#151515] border border-[#2A2A2A] rounded-lg p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setPage(1); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${
                filter === f ? 'bg-[#D4AF37] text-black' : 'text-[#B8B8B8] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
          <input
            type="search"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search by title…"
            className="w-full bg-[#151515] border border-[#2A2A2A] text-white rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-[#555] text-sm">Loading…</div>
        ) : !data?.blogs.length ? (
          <div className="py-16 text-center">
            <FileText size={32} className="mx-auto text-[#2A2A2A] mb-3" />
            <p className="text-[#555] text-sm">No blogs found. <Link href="/admin/blogs/new/" className="text-[#D4AF37]">Create one →</Link></p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">Title</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">City</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">Published</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.blogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-[#2A2A2A] last:border-0 hover:bg-[#1a1a1a] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {blog.isFeatured && <CheckCircle size={12} className="text-[#D4AF37] shrink-0" />}
                        <span className="text-white font-medium line-clamp-1">{blog.title}</span>
                      </div>
                      <div className="text-[11px] text-[#555] mt-0.5">{blog.slug}</div>
                    </td>
                    <td className="px-4 py-3 text-[#B8B8B8] capitalize">{blog.cityName || blog.city}</td>
                    <td className="px-4 py-3">{statusBadge(blog)}</td>
                    <td className="px-4 py-3 text-[#B8B8B8] text-xs">
                      <div className="flex items-center gap-1">
                        <Clock size={11} />
                        {new Date(blog.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blogs/${blog._id}/edit/`}
                          className="p-1.5 rounded-md text-[#B8B8B8] hover:text-[#D4AF37] hover:bg-[#2A2A2A] transition-colors"
                          title="Edit"
                        >
                          <PenLine size={14} />
                        </Link>
                        <button
                          onClick={() => deleteBlog(blog._id, blog.title)}
                          disabled={deleting === blog._id}
                          className="p-1.5 rounded-md text-[#B8B8B8] hover:text-red-400 hover:bg-red-950/20 transition-colors disabled:opacity-40"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {data && data.pages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm text-[#B8B8B8]">
          <span>{data.total} blogs</span>
          <div className="flex gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}
              className="px-3 py-1.5 rounded-md border border-[#2A2A2A] hover:border-[#D4AF37] disabled:opacity-40 transition-colors">
              ← Prev
            </button>
            <span className="px-3 py-1.5">{page} / {data.pages}</span>
            <button onClick={() => setPage((p) => Math.min(data.pages, p + 1))} disabled={page >= data.pages}
              className="px-3 py-1.5 rounded-md border border-[#2A2A2A] hover:border-[#D4AF37] disabled:opacity-40 transition-colors">
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
