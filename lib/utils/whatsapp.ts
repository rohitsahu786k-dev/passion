export function createWhatsAppUrl(number: string, message: string) {
  const params = new URLSearchParams();
  params.set('text', message);
  if (number) params.set('phone', number.replace(/\D/g, ''));
  return `/go/whatsapp?${params.toString()}`;
}
