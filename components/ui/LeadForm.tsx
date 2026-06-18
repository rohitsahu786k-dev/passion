'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import { cities } from '@/data/cities';
import { services } from '@/data/services';

const inputCls =
  'w-full rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] px-4 py-3 text-sm text-white placeholder-[#555] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors';

const selectCls =
  'w-full rounded-lg border border-[#2A2A2A] bg-[#0D0D0D] px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors appearance-none cursor-pointer';

export function LeadForm({ defaultCity, defaultService }: { defaultCity?: string; defaultService?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function submit(formData: FormData) {
    setStatus('loading');
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('/api/leads/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#D4AF37]/30 bg-[#0D0D0D] p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">
          <CheckCircle size={28} className="text-[#D4AF37]" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg">Request Received!</p>
          <p className="mt-1 text-sm text-[#B8B8B8]">Our team will contact you shortly with verified options.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      action={submit}
      className="grid gap-3 rounded-xl border border-[#2A2A2A] bg-[#050505] p-5"
    >
      <div className="flex items-center gap-2 mb-1">
        <Lock size={14} className="text-[#D4AF37]" />
        <p className="text-xs text-[#555]">
          100% confidential. Details secured and deleted after coordination.
        </p>
      </div>

      <input
        name="name"
        required
        placeholder="Full name"
        className={inputCls}
        autoComplete="name"
      />
      <input
        name="phone"
        required
        placeholder="10 digit mobile number"
        className={inputCls}
        inputMode="tel"
        autoComplete="tel"
      />
      <input
        name="email"
        type="email"
        placeholder="Email address (optional)"
        className={inputCls}
        autoComplete="email"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="relative">
          <select
            name="city"
            defaultValue={defaultCity || ''}
            required
            className={selectCls}
          >
            <option value="" disabled className="text-[#555]">
              Select city
            </option>
            {cities.map((city) => (
              <option key={city.slug} value={city.slug} className="bg-[#151515] text-white">
                {city.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555]">
            ▾
          </div>
        </div>

        <div className="relative">
          <select
            name="service"
            defaultValue={defaultService || ''}
            className={selectCls}
          >
            <option value="" className="text-[#555]">
              Companion type
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug} className="bg-[#151515] text-white">
                {service.shortName}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555]">
            ▾
          </div>
        </div>
      </div>

      <textarea
        name="message"
        rows={3}
        placeholder="Requirement details (location, date, preferences)"
        className={`${inputCls} resize-none`}
      />

      <input type="hidden" name="source" value="lead-form" />

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2">
          <AlertCircle size={14} className="text-red-400 shrink-0" />
          <p className="text-xs text-red-400">Something went wrong. Please try again or call/WhatsApp us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C49B2A] px-5 py-3.5 text-sm font-bold text-black transition-all hover:from-[#E8C53A] hover:to-[#D4AF37] hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Discreet Request
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-[#333]">
        By submitting, you confirm you are 18+ and accept our{' '}
        <a href="/privacy-policy/" className="text-[#D4AF37]/60 hover:text-[#D4AF37] underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
