'use client';

import { useState } from 'react';
import { BadgeIndianRupee, Send } from 'lucide-react';
import { cities } from '@/data/cities';
import { services } from '@/data/services';

const plans = [
  { name: 'Free', value: 'free', price: '₹0', note: 'Basic placement after approval' },
  { name: 'Silver', value: 'silver', price: '₹2,999/mo', note: 'Better placement in city pages' },
  { name: 'Gold', value: 'gold', price: '₹6,999/mo', note: 'Higher rank plus featured badge' },
  { name: 'Platinum', value: 'platinum', price: '₹14,999/mo', note: 'Top sponsored placement' }
];

export function ListingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function submit(formData: FormData) {
    setStatus('loading');
    const response = await fetch('/api/listings/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });
    setStatus(response.ok ? 'success' : 'error');
  }

  return (
    <form action={submit} className="grid gap-5 rounded-lg border border-line bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold">List your service</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Submit a legal local service profile. Sponsored plans influence ranking only after manual approval.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input name="businessName" required placeholder="Business name" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
        <input name="ownerName" required placeholder="Owner name" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
        <input name="email" required type="email" placeholder="Email" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
        <input name="phone" required placeholder="Phone" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
        <input name="whatsapp" required placeholder="WhatsApp number" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
        <input name="website" placeholder="Website or profile link" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
        <select name="city" required defaultValue="" className="focus-ring rounded-md border border-line px-3 py-3 text-sm">
          <option value="" disabled>
            Select city
          </option>
          {cities.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.name}
            </option>
          ))}
        </select>
        <select name="service" required defaultValue="" className="focus-ring rounded-md border border-line px-3 py-3 text-sm">
          <option value="" disabled>
            Select service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </div>
      <textarea name="description" required rows={5} placeholder="Describe your legal service, experience, coverage area, and pricing." className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
      <div className="grid gap-3 md:grid-cols-4">
        {plans.map((plan) => (
          <label key={plan.value} className="rounded-lg border border-line bg-linen p-4 text-sm">
            <input className="mr-2" type="radio" name="plan" value={plan.value} defaultChecked={plan.value === 'free'} />
            <span className="font-semibold">{plan.name}</span>
            <span className="mt-2 flex items-center gap-1 text-ink">
              <BadgeIndianRupee size={14} />
              {plan.price}
            </span>
            <span className="mt-2 block leading-5 text-muted">{plan.note}</span>
          </label>
        ))}
      </div>
      <input name="monthlyBudget" type="number" min="0" placeholder="Optional extra monthly sponsored budget" className="focus-ring rounded-md border border-line px-3 py-3 text-sm" />
      <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white" disabled={status === 'loading'}>
        <Send size={16} />
        {status === 'loading' ? 'Submitting...' : 'Submit listing'}
      </button>
      {status === 'success' && <p className="text-sm font-medium text-sage">Listing submitted for approval.</p>}
      {status === 'error' && <p className="text-sm font-medium text-coral">Submission failed. Please verify all required fields.</p>}
    </form>
  );
}
