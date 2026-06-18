'use client';

import { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, Filter } from 'lucide-react';

type Listing = {
  _id: string;
  businessName: string;
  ownerName: string;
  city: string;
  service: string;
  plan: string;
  rankScore: number;
  status: 'pending' | 'approved' | 'rejected' | 'paused';
  isVerified: boolean;
  createdAt: string;
};

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-950/40 text-yellow-400',
  approved: 'bg-green-950/40 text-green-400',
  rejected: 'bg-red-950/40 text-red-400',
  paused: 'bg-[#2A2A2A] text-[#555]',
};
const PLAN_COLORS: Record<string, string> = {
  free: 'text-[#555]', silver: 'text-gray-300', gold: 'text-[#D4AF37]', platinum: 'text-purple-400',
};

export default function AdminListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('pending');
  const [loading, setLoading] = useState(false);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (filterStatus) params.set('status', filterStatus);
    const res = await fetch(`/api/listings?${params}`);
    if (!res.ok) { setLoading(false); return; }
    const data = await res.json();
    setListings(data.listings || []);
    setTotal(data.total || 0);
    setPages(data.pages || 1);
    setLoading(false);
  }, [page, filterStatus]);

  useEffect(() => { fetchListings(); }, [fetchListings]);

  async function updateStatus(id: string, status: string) {
    await fetch('/api/listings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchListings();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Provider Listings</h1>
          <p className="text-[#B8B8B8] text-sm mt-0.5">{total} listings</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-[#555]" />
          <select
            value={filterStatus}
            onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
            className="bg-[#151515] border border-[#2A2A2A] text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="">All</option>
            {['pending', 'approved', 'rejected', 'paused'].map((s) => (
              <option key={s} value={s} className="capitalize">{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-[#555] text-sm">Loading…</div>
        ) : listings.length === 0 ? (
          <div className="py-16 text-center text-[#555] text-sm">No listings found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  {['Business', 'City', 'Service', 'Plan', 'Score', 'Status', 'Actions'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing._id} className="border-b border-[#2A2A2A] last:border-0 hover:bg-[#1a1a1a] transition-colors">
                    <td className="px-4 py-3">
                      <div className="text-white font-medium">{listing.businessName}</div>
                      <div className="text-[11px] text-[#555]">{listing.ownerName}</div>
                    </td>
                    <td className="px-4 py-3 text-[#B8B8B8] capitalize">{listing.city}</td>
                    <td className="px-4 py-3 text-[#B8B8B8] capitalize">{listing.service?.replace(/-/g, ' ')}</td>
                    <td className={`px-4 py-3 capitalize font-medium ${PLAN_COLORS[listing.plan] || ''}`}>{listing.plan}</td>
                    <td className="px-4 py-3 text-[#B8B8B8]">{Math.round(listing.rankScore)}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[11px] px-2 py-0.5 rounded-full capitalize ${STATUS_COLORS[listing.status] || ''}`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {listing.status === 'pending' && (
                        <div className="flex gap-2">
                          <button onClick={() => updateStatus(listing._id, 'approved')}
                            className="p-1.5 rounded text-green-400 hover:bg-green-950/30 transition-colors" title="Approve">
                            <CheckCircle size={15} />
                          </button>
                          <button onClick={() => updateStatus(listing._id, 'rejected')}
                            className="p-1.5 rounded text-red-400 hover:bg-red-950/30 transition-colors" title="Reject">
                            <XCircle size={15} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {pages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm text-[#B8B8B8]">
          <span>{total} listings</span>
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
