'use client';

import { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, Star } from 'lucide-react';

type Review = {
  _id: string;
  name: string;
  city: string;
  service: string;
  rating: number;
  review: string;
  isApproved: boolean;
  isFeatured: boolean;
  createdAt: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={12} className={i <= rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-[#2A2A2A]'} />
      ))}
    </div>
  );
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState<'pending' | 'approved'>('pending');
  const [loading, setLoading] = useState(false);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), status: tab });
    const res = await fetch(`/api/admin/reviews?${params}`);
    const data = await res.json();
    setReviews(data.reviews || []);
    setTotal(data.total || 0);
    setPages(data.pages || 1);
    setLoading(false);
  }, [page, tab]);

  useEffect(() => { fetchReviews(); }, [fetchReviews]);

  async function doAction(id: string, action: 'approve' | 'feature' | 'reject') {
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action }),
    });
    fetchReviews();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Reviews</h1>
          <p className="text-[#B8B8B8] text-sm mt-0.5">{total} reviews</p>
        </div>
        <div className="flex gap-1 bg-[#151515] border border-[#2A2A2A] rounded-lg p-1">
          {(['pending', 'approved'] as const).map((t) => (
            <button key={t} onClick={() => { setTab(t); setPage(1); }}
              className={`px-4 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${tab === t ? 'bg-[#D4AF37] text-black' : 'text-[#B8B8B8] hover:text-white'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-16 text-center text-[#555] text-sm">Loading…</div>
      ) : reviews.length === 0 ? (
        <div className="py-16 text-center text-[#555] text-sm">No {tab} reviews.</div>
      ) : (
        <div className="grid gap-4">
          {reviews.map((review) => (
            <div key={review._id} className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-white">{review.name}</span>
                    <Stars rating={review.rating} />
                    {review.isFeatured && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">Featured</span>
                    )}
                  </div>
                  <div className="text-xs text-[#555] mb-2 capitalize">
                    {review.city} · {review.service?.replace(/-/g, ' ')} · {new Date(review.createdAt).toLocaleDateString('en-IN')}
                  </div>
                  <p className="text-[#B8B8B8] text-sm leading-relaxed">{review.review}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {!review.isApproved && (
                    <>
                      <button onClick={() => doAction(review._id, 'approve')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-950/40 text-green-400 hover:bg-green-950/60 text-xs transition-colors">
                        <CheckCircle size={13} /> Approve
                      </button>
                      <button onClick={() => doAction(review._id, 'feature')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 text-xs transition-colors">
                        <Star size={13} /> Feature
                      </button>
                    </>
                  )}
                  <button onClick={() => doAction(review._id, 'reject')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-950/60 text-xs transition-colors">
                    <XCircle size={13} /> {review.isApproved ? 'Remove' : 'Reject'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {pages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm text-[#B8B8B8]">
          <span>{total} reviews</span>
          <div className="flex gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}
              className="px-3 py-1.5 rounded-md border border-[#2A2A2A] hover:border-[#D4AF37] disabled:opacity-40">← Prev</button>
            <span className="px-3 py-1.5">{page} / {pages}</span>
            <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page >= pages}
              className="px-3 py-1.5 rounded-md border border-[#2A2A2A] hover:border-[#D4AF37] disabled:opacity-40">Next →</button>
          </div>
        </div>
      )}
    </div>
  );
}
