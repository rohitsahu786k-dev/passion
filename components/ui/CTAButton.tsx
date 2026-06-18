import { MessageCircle, Phone } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/utils/whatsapp';

type CTAButtonProps = {
  phone: string;
  whatsapp: string;
  label?: string;
};

export function CTAButton({ phone, whatsapp, label = 'Get verified options' }: CTAButtonProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={`tel:${phone}`} className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
        <Phone size={17} />
        Call now
      </a>
      <a
        href={createWhatsAppUrl(whatsapp, `Hello Girls of Passion, I want help with ${label}.`)}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}
