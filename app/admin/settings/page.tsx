'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Phone, MessageCircle, Mail, Globe, Instagram, Send, Save } from 'lucide-react';

type Config = {
  phone: string;
  whatsapp: string;
  email: string;
  adminEmail: string;
  siteName: string;
  siteTagline: string;
  instagram: string;
  telegram: string;
};

const empty: Config = {
  phone: '', whatsapp: '', email: '', adminEmail: '',
  siteName: '', siteTagline: '', instagram: '', telegram: '',
};

export default function SettingsPage() {
  const [config, setConfig] = useState<Config>(empty);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((r) => r.json())
      .then((d) => { setConfig({ ...empty, ...d }); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  function set(key: keyof Config, val: string) {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      const data = await res.json();
      setToast(data.success ? { msg: 'Settings saved!', ok: true } : { msg: data.error || 'Failed', ok: false });
    } catch {
      setToast({ msg: 'Network error', ok: false });
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 3500);
    }
  }

  const field = (
    label: string,
    key: keyof Config,
    icon: React.ReactNode,
    placeholder: string,
    hint?: string,
    type = 'text'
  ) => (
    <div>
      <label className="block text-xs font-medium text-[#B8B8B8] mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]">{icon}</span>
        <input
          type={type}
          value={config[key]}
          onChange={(e) => set(key, e.target.value)}
          placeholder={placeholder}
          className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
        />
      </div>
      {hint && <p className="text-[11px] text-[#555] mt-1">{hint}</p>}
    </div>
  );

  if (loading) return <div className="text-[#555] text-sm">Loading…</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Site Settings</h1>
        <p className="text-[#B8B8B8] text-sm mt-1">Manage contact details and branding. Changes go live within 1 hour.</p>
      </div>

      <form onSubmit={handleSave} className="grid gap-6 max-w-2xl">
        {/* Contact */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Contact Numbers</h2>
          <div className="grid gap-4">
            {field('Phone Number', 'phone', <Phone size={14} />, '+919999900101', 'With + and country code')}
            {field('WhatsApp Number', 'whatsapp', <MessageCircle size={14} />, '919999900101', 'Digits only, with country code (no +)')}
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Email</h2>
          <div className="grid gap-4">
            {field('Public Email', 'email', <Mail size={14} />, 'hello@girlsofpassion.in', undefined, 'email')}
            {field('Admin Email', 'adminEmail', <Mail size={14} />, 'admin@girlsofpassion.in', 'Receives lead notifications', 'email')}
          </div>
        </div>

        {/* Branding */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Branding</h2>
          <div className="grid gap-4">
            {field('Site Name', 'siteName', <Globe size={14} />, 'Girls of Passion')}
            <div>
              <label className="block text-xs font-medium text-[#B8B8B8] mb-1.5">Site Tagline</label>
              <input
                type="text"
                value={config.siteTagline}
                onChange={(e) => set('siteTagline', e.target.value)}
                placeholder="Premium Escort Service Across India"
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Social Links</h2>
          <div className="grid gap-4">
            {field('Instagram URL', 'instagram', <Instagram size={14} />, 'https://instagram.com/...')}
            {field('Telegram URL / Username', 'telegram', <Send size={14} />, 'https://t.me/...')}
          </div>
        </div>

        {/* Save */}
        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving} className="btn-gold gap-2 disabled:opacity-60">
            <Save size={15} />
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
          {toast && (
            <span className={`text-sm ${toast.ok ? 'text-green-400' : 'text-red-400'}`}>
              {toast.msg}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
