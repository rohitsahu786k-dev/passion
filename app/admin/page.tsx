import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Inbox, Store, Star, TrendingUp, PenLine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin — Dashboard',
  robots: { index: false, follow: false },
};

async function getStats() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/admin/stats`, {
      headers: { cookie: '' },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    {
      label: 'Total Blogs',
      value: stats?.blogs?.total ?? '—',
      sub: `${stats?.blogs?.published ?? 0} published · ${stats?.blogs?.scheduled ?? 0} scheduled`,
      href: '/admin/blogs/',
      icon: BookOpen,
      color: '#D4AF37',
    },
    {
      label: 'Leads',
      value: stats?.leads?.total ?? '—',
      sub: `${stats?.leads?.new ?? 0} new`,
      href: '/admin/leads/',
      icon: Inbox,
      color: '#C084FC',
    },
    {
      label: 'Pending Listings',
      value: stats?.listings?.pending ?? '—',
      sub: 'awaiting approval',
      href: '/admin/listings/',
      icon: Store,
      color: '#60A5FA',
    },
    {
      label: 'Pending Reviews',
      value: stats?.reviews?.pending ?? '—',
      sub: 'awaiting moderation',
      href: '/admin/reviews/',
      icon: Star,
      color: '#34D399',
    },
  ];

  const quickActions = [
    { label: 'Write New Blog', href: '/admin/blogs/new/', icon: PenLine },
    { label: 'View Leads', href: '/admin/leads/', icon: Inbox },
    { label: 'Site Settings', href: '/admin/settings/', icon: TrendingUp },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-[#B8B8B8] text-sm mt-1">Girls of Passion — Admin Control Panel</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#3a3a3a] transition-colors"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${card.color}20` }}
              >
                <Icon size={18} style={{ color: card.color }} />
              </div>
              <div className="text-2xl font-bold text-white">{card.value}</div>
              <div className="text-xs text-[#B8B8B8] mt-0.5">{card.label}</div>
              <div className="text-[11px] text-[#555] mt-1">{card.sub}</div>
            </Link>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-[#B8B8B8] uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-2 bg-[#151515] border border-[#2A2A2A] hover:border-[#D4AF37] text-[#B8B8B8] hover:text-[#D4AF37] px-4 py-2.5 rounded-lg text-sm transition-colors"
              >
                <Icon size={15} />
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Blog breakdown */}
      {stats?.blogs && (
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Blog Status</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'DB Blogs', value: stats.blogs.db, color: '#D4AF37' },
              { label: 'Seed Posts', value: stats.blogs.seeds, color: '#B8B8B8' },
              { label: 'Drafts', value: stats.blogs.draft, color: '#F87171' },
              { label: 'Scheduled', value: stats.blogs.scheduled, color: '#60A5FA' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}</div>
                <div className="text-xs text-[#555] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
