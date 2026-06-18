'use client';

import { useState, useEffect, useCallback } from 'react';
import { Phone, MessageCircle, Filter } from 'lucide-react';

type Lead = {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  message?: string;
  source: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  createdAt: string;
};

const STATUS_OPTIONS = ['new', 'contacted', 'converted', 'lost'] as const;
const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-950/40 text-blue-400',
  contacted: 'bg-yellow-950/40 text-yellow-400',
  converted: 'bg-green-950/40 text-green-400',
  lost: 'bg-red-950/40 text-red-400',
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (filterStatus) params.set('status', filterStatus);
    const res = await fetch(`/api/admin/leads?${params}`);
    const data = await res.json();
    setLeads(data.leads || []);
    setTotal(data.total || 0);
    setPages(data.pages || 1);
    setLoading(false);
  }, [page, filterStatus]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  async function updateStatus(id: string, status: string) {
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchLeads();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-[#B8B8B8] text-sm mt-0.5">{total} total enquiries</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-[#555]" />
          <select
            value={filterStatus}
            onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
            className="bg-[#151515] border border-[#2A2A2A] text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="">All statuses</option>
            {STATUS_OPTIONS.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-[#555] text-sm">Loading…</div>
        ) : leads.length === 0 ? (
          <div className="py-16 text-center text-[#555] text-sm">No leads found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  {['Name', 'City', 'Service', 'Contact', 'Source', 'Date', 'Status'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#555] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="border-b border-[#2A2A2A] last:border-0 hover:bg-[#1a1a1a] transition-colors">
                    <td className="px-4 py-3">
                      <div className="text-white font-medium">{lead.name}</div>
                      {lead.email && <div className="text-[11px] text-[#555]">{lead.email}</div>}
                    </td>
                    <td className="px-4 py-3 text-[#B8B8B8] capitalize">{lead.city}</td>
                    <td className="px-4 py-3 text-[#B8B8B8] capitalize">{lead.service?.replace(/-/g, ' ')}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <a href={`tel:${lead.phone}`} className="p-1.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20" title="Call">
                          <Phone size={13} />
                        </a>
                        <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=Hi+${encodeURIComponent(lead.name)}`} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-green-950/40 text-green-400 hover:bg-green-950/60" title="WhatsApp">
                          <MessageCircle size={13} />
                        </a>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#555] text-xs">{lead.source}</td>
                    <td className="px-4 py-3 text-[#555] text-xs">
                      {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead._id, e.target.value)}
                        className={`text-xs rounded-full px-2 py-0.5 border-0 cursor-pointer focus:outline-none ${STATUS_COLORS[lead.status] || ''}`}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s} value={s} className="capitalize bg-[#151515] text-white">{s}</option>)}
                      </select>
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
          <span>{total} leads</span>
          <div className="flex gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}
              className="px-3 py-1.5 rounded-md border border-[#2A2A2A] hover:border-[#D4AF37] disabled:opacity-40 transition-colors">← Prev</button>
            <span className="px-3 py-1.5">{page} / {pages}</span>
            <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page >= pages}
              className="px-3 py-1.5 rounded-md border border-[#2A2A2A] hover:border-[#D4AF37] disabled:opacity-40 transition-colors">Next →</button>
          </div>
        </div>
      )}
    </div>
  );
}
