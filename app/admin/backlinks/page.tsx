'use client';

import React, { useState, useEffect } from 'react';
import {
  Link2,
  Plus,
  Play,
  Trash2,
  Terminal,
  RefreshCw,
  CheckCircle,
  XCircle,
  Loader2,
  ChevronDown,
  Eye,
  FileText,
  HelpCircle
} from 'lucide-react';

interface Campaign {
  _id: string;
  name: string;
  moneySiteUrls: string[];
  keywords: string[];
  diagramId: string;
  articleTitle: string;
  articleBody: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  logs: string[];
  createdAt: string;
  updatedAt: string;
}

const DIAGRAMS = [
  { id: '1 > 3 > 9 + Social Bookmarks', name: '1 > 3 > 9 + Social Bookmarks', description: 'Multi-tier blog network with social bookmarks.' },
  { id: '1 > 3 > 12 Social Bookmarks Power', name: '1 > 3 > 12 Social Bookmarks Power', description: 'Powerful tiered bookmarks strategy.' },
  { id: 'High Competition - blog network Web 2.0 blogs Profiles and Bookmarks', name: 'High Competition - Web 2.0, Profiles & Bookmarks', description: 'Best for highly competitive niches.' },
  { id: 'Low Competition - Blogs and social bookmarks', name: 'Low Competition - Blogs & Bookmarks', description: 'Simple blogs and social bookmark campaigns.' },
  { id: 'Medium Competition - Blog network T3 wikis and Bookmarks', name: 'Medium Competition - T3 Wikis & Bookmarks', description: 'Balanced tiered wiki link building.' },
  { id: 'Medium Competition - Blog network with T2 Profiles', name: 'Medium Competition - with T2 Profiles', description: 'Medium strength profiles + blog network.' },
  { id: 'Backlinks Diversity Power', name: 'Backlinks Diversity Power', description: 'Diversifies your link profile with multiple sources.' },
  { id: 'Boost Local Rankings - 4x Web directories ranking signals', name: 'Boost Local Rankings (Web Directories)', description: 'Directory signals optimized for local SEO map packs.' },
  { id: 'Medium Competition - Blog network and T4 wikis', name: 'Medium Competition - Blog Network & T4 Wikis', description: 'Multi-tier wikis and blogs strategy.' },
  { id: 'High Competition - Diamond Star SEO', name: 'High Competition - Diamond Star SEO', description: 'Maximum authority campaign for high-value targets.' },
  { id: 'Diversity Backlink Profile Power', name: 'Diversity Backlink Profile Power', description: 'Advanced link profile diversification.' },
  { id: 'Diversity Rankings Backlinks T1 and T2', name: 'Diversity Rankings Backlinks T1 & T2', description: 'Tiered diversity strategy for quick rankings.' },
  { id: 'Google Maps Embedding Rankings 8x Web 2.0 blogs', name: 'Google Maps Embedding Rankings', description: 'Embeds maps in Web 2.0 blogs for local map pack dominance.' }
];

export default function BacklinksAdminPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [moneySiteUrls, setMoneySiteUrls] = useState('');
  const [keywords, setKeywords] = useState('');
  const [diagramId, setDiagramId] = useState('1 > 3 > 9 + Social Bookmarks');
  const [generateArticle, setGenerateArticle] = useState(true);

  // Custom article fields (if not generated automatically)
  const [articleTitle, setArticleTitle] = useState('');
  const [articleBody, setArticleBody] = useState('');

  // Selected Campaign for Logs modal
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [previewCampaign, setPreviewCampaign] = useState<Campaign | null>(null);

  // Article preview states during form creation
  const [previewLoading, setPreviewLoading] = useState(false);

  // Load campaigns
  const fetchCampaigns = async () => {
    try {
      const res = await fetch('/api/admin/backlinks');
      if (res.ok) {
        const data = await res.json();
        setCampaigns(data);
      }
    } catch (err) {
      console.error('Failed to fetch campaigns', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
    // Poll running campaigns every 5 seconds to update logs/status
    const interval = setInterval(() => {
      const containsRunning = campaigns.some(c => c.status === 'running');
      if (containsRunning || selectedCampaign?.status === 'running') {
        fetchCampaigns();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [campaigns, selectedCampaign]);

  // Keep selected campaign details up to date for logs
  useEffect(() => {
    if (selectedCampaign) {
      const updated = campaigns.find(c => c._id === selectedCampaign._id);
      if (updated) {
        setSelectedCampaign(updated);
      }
    }
  }, [campaigns, selectedCampaign]);

  // Create Campaign
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !moneySiteUrls || !keywords) {
      alert('Please fill out Name, Target URLs, and Keywords.');
      return;
    }

    setPreviewLoading(true);
    try {
      const res = await fetch('/api/admin/backlinks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          moneySiteUrls: moneySiteUrls.split('\n').map(u => u.trim()).filter(Boolean),
          keywords: keywords.split('\n').map(k => k.trim()).filter(Boolean),
          diagramId,
          articleTitle,
          articleBody,
          generateArticle
        })
      });

      if (res.ok) {
        // Reset form
        setName('');
        setMoneySiteUrls('');
        setKeywords('');
        setArticleTitle('');
        setArticleBody('');
        fetchCampaigns();
      } else {
        const err = await res.json();
        alert(`Error: ${err.error}`);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to create campaign');
    } finally {
      setPreviewLoading(false);
    }
  };

  // Preview generated article copy
  const handlePreviewCopy = async () => {
    if (!moneySiteUrls || !keywords) {
      alert('Provide URLs and Keywords to preview the generated copy.');
      return;
    }
    setPreviewLoading(true);
    try {
      const res = await fetch('/api/admin/backlinks/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          urls: moneySiteUrls.split('\n').map(u => u.trim()).filter(Boolean),
          keywords: keywords.split('\n').map(k => k.trim()).filter(Boolean)
        })
      });

      if (res.ok) {
        const data = await res.json();
        setArticleTitle(data.title);
        setArticleBody(data.body);
      } else {
        const err = await res.json();
        alert(`Failed to generate: ${err.error}`);
      }
    } catch (err) {
      alert('Error connecting to AI generation endpoint');
    } finally {
      setPreviewLoading(false);
    }
  };

  // Delete Campaign
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this campaign?')) return;
    try {
      const res = await fetch(`/api/admin/backlinks?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchCampaigns();
        if (selectedCampaign?._id === id) setSelectedCampaign(null);
      }
    } catch (err) {
      alert('Failed to delete campaign');
    }
  };

  // Trigger Execution
  const handleTrigger = async (id: string) => {
    setActionLoading(id);
    try {
      const res = await fetch('/api/admin/backlinks/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (res.ok) {
        fetchCampaigns();
      } else {
        const err = await res.json();
        alert(`Error triggering: ${err.error}`);
      }
    } catch (err) {
      alert('Network error triggering campaign');
    } finally {
      setActionLoading(null);
    }
  };

  // Count stats
  const total = campaigns.length;
  const pending = campaigns.filter(c => c.status === 'pending').length;
  const running = campaigns.filter(c => c.status === 'running').length;
  const completed = campaigns.filter(c => c.status === 'completed').length;
  const failed = campaigns.filter(c => c.status === 'failed').length;

  return (
    <div className="pb-12 text-[#E0E0E0]">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="p-2 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
              <Link2 size={24} />
            </span>
            MoneyRobot Backlink Campaigns
          </h1>
          <p className="text-sm text-[#B8B8B8] mt-2">
            Automate high-quality article creations via OpenAI and build backlinks via web.moneyrobot.com
          </p>
        </div>

        <button
          onClick={fetchCampaigns}
          className="flex items-center gap-2 bg-[#151515] border border-[#2A2A2A] hover:border-[#D4AF37] px-4 py-2.5 rounded-xl text-sm transition-all"
          id="btn-refresh-campaigns"
        >
          <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* Stats Board */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total', value: total, color: 'text-white', border: 'border-[#2A2A2A]' },
          { label: 'Pending Queue', value: pending, color: 'text-yellow-400', border: 'border-yellow-950/30' },
          { label: 'Running Now', value: running, color: 'text-blue-400', border: 'border-blue-950/30' },
          { label: 'Completed', value: completed, color: 'text-green-400', border: 'border-green-950/30' },
          { label: 'Failed', value: failed, color: 'text-red-400', border: 'border-red-950/30' }
        ].map((stat) => (
          <div key={stat.label} className={`bg-[#0D0D0D] border ${stat.border} rounded-2xl p-5 shadow-sm`}>
            <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-[#888] font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Creation Form (Left) */}
        <div className="lg:col-span-5 bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl p-6 shadow-md h-fit">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-[#2A2A2A] pb-3">
            <Plus size={18} className="text-[#D4AF37]" /> Create Backlinks Campaign
          </h2>

          <form onSubmit={handleCreate} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Campaign Name</label>
              <input
                id="campaign-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jaipur Escort Backlinks Tier 1"
                className="w-full bg-[#151515] border border-[#2A2A2A] focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Money Site URLs (One per line)</label>
              <textarea
                id="campaign-urls-input"
                rows={3}
                value={moneySiteUrls}
                onChange={(e) => setMoneySiteUrls(e.target.value)}
                placeholder="https://girlsofpassion.in/jaipur-escort-service"
                className="w-full bg-[#151515] border border-[#2A2A2A] focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">Keywords (One per line)</label>
              <textarea
                id="campaign-keywords-input"
                rows={3}
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="best escorts in jaipur&#10;jaipur escort service"
                className="w-full bg-[#151515] border border-[#2A2A2A] focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">SEO Diagram</label>
              <select
                value={diagramId}
                onChange={(e) => setDiagramId(e.target.value)}
                className="w-full bg-[#151515] border border-[#2A2A2A] focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
              >
                {DIAGRAMS.map(diag => (
                  <option key={diag.id} value={diag.id}>{diag.name}</option>
                ))}
              </select>
              <p className="text-[11px] text-[#666] mt-2 italic">
                {DIAGRAMS.find(d => d.id === diagramId)?.description}
              </p>
            </div>

            <div className="border-t border-[#2A2A2A] pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#888] uppercase tracking-wider">AI Content Generation</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={generateArticle}
                    onChange={(e) => setGenerateArticle(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#888] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#D4AF37] peer-checked:after:bg-black"></div>
                </label>
              </div>

              {generateArticle ? (
                <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 flex items-center justify-between">
                  <div className="text-xs text-[#888] max-w-[70%]">
                    Create article dynamically on-submit using GPT-4o-mini
                  </div>
                  <button
                    type="button"
                    onClick={handlePreviewCopy}
                    disabled={previewLoading}
                    className="flex items-center gap-1.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                  >
                    {previewLoading ? <Loader2 size={12} className="animate-spin" /> : <Eye size={12} />}
                    Preview Copy
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#666] mb-1.5">Custom Article Title</label>
                    <input
                      type="text"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      placeholder="Article Title"
                      className="w-full bg-[#151515] border border-[#2A2A2A] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#444] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#666] mb-1.5">Custom Article HTML Body</label>
                    <textarea
                      rows={4}
                      value={articleBody}
                      onChange={(e) => setArticleBody(e.target.value)}
                      placeholder="<p>Article body with <a href='URL'>Keyword</a> link.</p>"
                      className="w-full bg-[#151515] border border-[#2A2A2A] focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#444] outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Generated copy preview inline */}
            {articleTitle && articleBody && (
              <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 text-xs space-y-2 max-h-40 overflow-y-auto">
                <div className="font-semibold text-white border-b border-[#2A2A2A] pb-1">AI Article Preview:</div>
                <div className="text-[#D4AF37] font-medium">{articleTitle}</div>
                <div className="text-[#888] whitespace-pre-line" dangerouslySetInnerHTML={{ __html: articleBody }} />
              </div>
            )}

            <button
              id="submit-campaign-btn"
              type="submit"
              disabled={previewLoading}
              className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F3C63F] text-black font-semibold py-3 px-4 rounded-xl transition-all shadow-md text-sm mt-6"
            >
              {previewLoading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
              Queue Campaign
            </button>
          </form>
        </div>

        {/* Campaign Records List (Right) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-bold text-white mb-6 border-b border-[#2A2A2A] pb-3 flex items-center gap-2">
              <Terminal size={18} className="text-[#D4AF37]" /> Campaign Queue & Logs
            </h2>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-16 text-[#666] gap-3">
                <Loader2 size={32} className="animate-spin text-[#D4AF37]" />
                <p className="text-sm">Loading campaigns...</p>
              </div>
            ) : campaigns.length === 0 ? (
              <div className="text-center py-16 text-[#555] border-2 border-dashed border-[#2A2A2A] rounded-xl">
                <HelpCircle size={40} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm font-medium">No campaigns found in queue</p>
                <p className="text-xs text-[#444] mt-1">Configure parameters on the left to queue your first campaign.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {campaigns.map((camp) => (
                  <div key={camp._id} className="bg-[#151515] border border-[#2A2A2A] hover:border-[#333] rounded-xl p-5 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-white">{camp.name}</h3>
                        <span className="text-[10px] text-[#666]">Created: {new Date(camp.createdAt).toLocaleString()}</span>
                      </div>
                      
                      {/* Status Badge */}
                      <span className={`self-start sm:self-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        camp.status === 'completed' ? 'bg-green-950/50 text-green-400 border border-green-900/30' :
                        camp.status === 'failed' ? 'bg-red-950/50 text-red-400 border border-red-900/30' :
                        camp.status === 'running' ? 'bg-blue-950/50 text-blue-400 border border-blue-900/30 animate-pulse' :
                        'bg-yellow-950/50 text-yellow-400 border border-yellow-900/30'
                      }`}>
                        {camp.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#888] bg-[#0D0D0D] p-3 rounded-lg border border-[#2A2A2A] mb-4">
                      <div>
                        <span className="block font-semibold text-[#555] uppercase text-[9px] tracking-wider mb-1">Target URLs</span>
                        <div className="truncate text-white">{camp.moneySiteUrls.join(', ')}</div>
                      </div>
                      <div>
                        <span className="block font-semibold text-[#555] uppercase text-[9px] tracking-wider mb-1">Keywords</span>
                        <div className="truncate text-white">{camp.keywords.join(', ')}</div>
                      </div>
                    </div>

                    {/* Campaign Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 justify-between border-t border-[#2A2A2A] pt-3">
                      <div className="flex gap-2">
                        {camp.status !== 'running' && (
                          <button
                            onClick={() => handleTrigger(camp._id)}
                            disabled={actionLoading !== null}
                            className="flex items-center gap-1.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                          >
                            <Play size={12} />
                            Start Campaign
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedCampaign(camp)}
                          className="flex items-center gap-1.5 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                        >
                          <Terminal size={12} />
                          Logs ({camp.logs.length})
                        </button>
                        {camp.articleTitle && (
                          <button
                            onClick={() => setPreviewCampaign(camp)}
                            className="flex items-center gap-1.5 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                          >
                            <FileText size={12} />
                            View Article
                          </button>
                        )}
                      </div>

                      <button
                        onClick={() => handleDelete(camp._id)}
                        className="flex items-center gap-1 bg-red-950/20 hover:bg-red-950/50 text-red-400 px-2 py-1.5 rounded-lg text-xs transition-all"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Logs Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A] bg-[#121212]">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-[#D4AF37]" />
                <h3 className="font-bold text-white text-sm">{selectedCampaign.name} — Execution Logs</h3>
              </div>
              <button onClick={() => setSelectedCampaign(null)} className="text-[#555] hover:text-white transition-colors">✕</button>
            </div>
            
            <div className="p-6 bg-black text-[#84C748] font-mono text-xs h-96 overflow-y-auto space-y-1.5 selection:bg-[#84C748] selection:text-black">
              {selectedCampaign.logs.length === 0 ? (
                <div className="text-[#555] italic">No logs available for this campaign yet.</div>
              ) : (
                selectedCampaign.logs.map((log, index) => (
                  <div key={index} className="leading-relaxed border-l border-emerald-950 pl-2">
                    {log}
                  </div>
                ))
              )}
              {selectedCampaign.status === 'running' && (
                <div className="flex items-center gap-2 text-blue-400 italic mt-4 animate-pulse">
                  <Loader2 size={12} className="animate-spin" />
                  Running automated browser campaign... Logs will update dynamically.
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 px-6 py-4 border-t border-[#2A2A2A] bg-[#121212]">
              <button
                onClick={() => setSelectedCampaign(null)}
                className="bg-[#2A2A2A] hover:bg-[#333] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
              >
                Close Logs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Article Preview Modal */}
      {previewCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A] bg-[#121212]">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#D4AF37]" />
                <h3 className="font-bold text-white text-sm">Campaign Article Copy</h3>
              </div>
              <button onClick={() => setPreviewCampaign(null)} className="text-[#555] hover:text-white transition-colors">✕</button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[500px] space-y-4 text-sm leading-relaxed text-[#B8B8B8]">
              <h2 className="text-xl font-bold text-white border-b border-[#2A2A2A] pb-2">{previewCampaign.articleTitle}</h2>
              <div 
                className="article-preview-content space-y-4"
                dangerouslySetInnerHTML={{ __html: previewCampaign.articleBody }}
              />
            </div>

            <div className="flex justify-end gap-2 px-6 py-4 border-t border-[#2A2A2A] bg-[#121212]">
              <button
                onClick={() => setPreviewCampaign(null)}
                className="bg-[#2A2A2A] hover:bg-[#333] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
