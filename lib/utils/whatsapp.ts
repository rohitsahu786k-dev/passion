export function createWhatsAppUrl(number: string, message: string) {
  const phone = number.replace(/\D/g, '');
  const params = new URLSearchParams();
  params.set('text', message);
  return `https://wa.me/${phone}?${params.toString()}`;
}
