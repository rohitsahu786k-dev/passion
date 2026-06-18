'use client';

import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await signIn('credentials', { username, password, redirect: false });
    setLoading(false);
    if (res?.error) setError('Invalid username or password');
    else router.push('/admin/');
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-full bg-[#D4AF37] items-center justify-center mb-4">
            <Lock size={24} className="text-black" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-[#B8B8B8] text-sm mt-1">Girls of Passion — Control Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium text-[#B8B8B8] mb-1.5">Username</label>
            <div className="relative">
              <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#B8B8B8] mb-1.5">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#B8B8B8] transition-colors"
              >
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-xs bg-red-950/30 border border-red-900/50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full justify-center py-2.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
