'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Phone, MessageCircle, Mail, Globe, Instagram, Send, Save } from 'lucide-react';

type PageContact = {
  path: string;
  phone: string;
  whatsapp: string;
};

type Config = {
  phone: string;
  whatsapp: string;
  email: string;
  adminEmail: string;
  siteName: string;
  siteTagline: string;
  instagram: string;
  telegram: string;
  topStripEnabled: boolean;
  topStripText: string;
  topStripEmail: string;
  pageContacts: PageContact[];
};

type TextConfigKey = Exclude<keyof Config, 'topStripEnabled' | 'pageContacts'>;

const empty: Config = {
  phone: '+919999900101',
  whatsapp: '919999900101',
  email: '',
  adminEmail: '',
  siteName: 'Girls of Passion',
  siteTagline: 'Premium Escort Service Across India',
  instagram: '',
  telegram: '',
  topStripEnabled: true,
  topStripText: 'This website / page is available for rent! Drive targeted leads & calls to your business.',
  topStripEmail: 'pws1753@gmail.com',
  pageContacts: [],
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

  function set(key: TextConfigKey, val: string) {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }

  function setBool(key: 'topStripEnabled', val: boolean) {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }

  function updatePageContact(index: number, key: keyof PageContact, value: string) {
    setConfig((prev) => ({
      ...prev,
      pageContacts: prev.pageContacts.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
    }));
  }

  function addPageContact() {
    setConfig((prev) => ({
      ...prev,
      pageContacts: [...prev.pageContacts, { path: '/', phone: '', whatsapp: '' }],
    }));
  }

  function removePageContact(index: number) {
    setConfig((prev) => ({
      ...prev,
      pageContacts: prev.pageContacts.filter((_, i) => i !== index),
    }));
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
    key: TextConfigKey,
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

        {/* Top strip */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-white">Top Text Strip</h2>
              <p className="text-[11px] text-[#555] mt-1">Turn the strip above the header on/off and edit its text.</p>
            </div>
            <label className="flex items-center gap-2 text-xs text-[#B8B8B8]">
              <input
                type="checkbox"
                checked={config.topStripEnabled}
                onChange={(e) => setBool('topStripEnabled', e.target.checked)}
                className="h-4 w-4 accent-[#D4AF37]"
              />
              Enabled
            </label>
          </div>
          <div className="grid gap-4">
            <div>
              <label className="block text-xs font-medium text-[#B8B8B8] mb-1.5">Strip Text</label>
              <input
                type="text"
                value={config.topStripText}
                onChange={(e) => set('topStripText', e.target.value)}
                placeholder="This website / page is available for rent..."
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            {field('Strip Contact Email', 'topStripEmail', <Mail size={14} />, 'pws1753@gmail.com', undefined, 'email')}
          </div>
        </div>

        {/* Page contact overrides */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-white">Page-wise Numbers</h2>
              <p className="text-[11px] text-[#555] mt-1">Override phone/WhatsApp for a particular URL path.</p>
            </div>
            <button type="button" onClick={addPageContact} className="rounded-md border border-[#D4AF37]/40 px-3 py-2 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10">
              Add Page
            </button>
          </div>
          <div className="grid gap-3">
            {config.pageContacts.length === 0 && (
              <p className="rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] px-3 py-3 text-xs text-[#555]">
                No page-specific numbers yet. Add a page like /ajmer-escort-service/ to override all call and WhatsApp links on that page.
              </p>
            )}
            {config.pageContacts.map((item, index) => (
              <div key={`${item.path}-${index}`} className="grid gap-2 rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] p-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
                <input
                  value={item.path}
                  onChange={(e) => updatePageContact(index, 'path', e.target.value)}
                  placeholder="/ajmer-escort-service/"
                  className="rounded-md border border-[#2A2A2A] bg-[#050505] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  value={item.phone}
                  onChange={(e) => updatePageContact(index, 'phone', e.target.value)}
                  placeholder="+919999900101"
                  className="rounded-md border border-[#2A2A2A] bg-[#050505] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  value={item.whatsapp}
                  onChange={(e) => updatePageContact(index, 'whatsapp', e.target.value)}
                  placeholder="919999900101"
                  className="rounded-md border border-[#2A2A2A] bg-[#050505] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <button type="button" onClick={() => removePageContact(index)} className="rounded-md border border-red-500/30 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/10">
                  Remove
                </button>
              </div>
            ))}
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
