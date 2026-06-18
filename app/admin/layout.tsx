import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Settings,
  BookOpen,
  Inbox,
  Store,
  Star,
  LogOut,
  Sparkles,
  Link2,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin/', icon: LayoutDashboard },
  { label: 'Blogs', href: '/admin/blogs/', icon: BookOpen },
  { label: 'AI Blog', href: '/admin/auto-blog/', icon: Sparkles },
  { label: 'Backlinks', href: '/admin/backlinks/', icon: Link2 },
  { label: 'Leads', href: '/admin/leads/', icon: Inbox },
  { label: 'Listings', href: '/admin/listings/', icon: Store },
  { label: 'Reviews', href: '/admin/reviews/', icon: Star },
  { label: 'Settings', href: '/admin/settings/', icon: Settings },
];

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect('/admin/login');

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col bg-[#0D0D0D] border-r border-[#2A2A2A] sticky top-0 h-screen">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-[#2A2A2A]">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-0.5">Control Panel</p>
          <p className="font-bold text-[#D4AF37] text-sm leading-tight">Girls of Passion</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 flex flex-col gap-0.5 overflow-y-auto">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#B8B8B8] hover:text-white hover:bg-[#1a1a1a] transition-colors"
            >
              <Icon size={16} className="shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="px-3 py-4 border-t border-[#2A2A2A]">
          <p className="text-xs text-[#555] px-3 mb-2 truncate">{session.user?.email}</p>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/admin/login' });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#B8B8B8] hover:text-red-400 hover:bg-red-950/20 transition-colors"
            >
              <LogOut size={16} className="shrink-0" />
              Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 bg-[#0D0D0D] border-b border-[#2A2A2A] flex items-center justify-between px-4 h-14">
        <p className="font-bold text-[#D4AF37] text-sm">GOP Admin</p>
        <div className="flex items-center gap-1 overflow-x-auto text-xs">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[#B8B8B8] hover:text-[#D4AF37] whitespace-nowrap"
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 min-w-0 lg:p-0 pt-14 lg:pt-0">
        <div className="p-6 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
