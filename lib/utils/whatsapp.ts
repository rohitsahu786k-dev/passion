export function createWhatsAppUrl(number: string, message: string) {
  const phone = number.replace(/\D/g, '');
  const params = new URLSearchParams();
  params.set('phone', phone);
  params.set('text', message);
  return `/go/whatsapp?${params.toString()}`;
}
