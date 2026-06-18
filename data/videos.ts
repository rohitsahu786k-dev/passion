export type SeoVideo = {
  id: string;
  title: string;
  description: string;
  uploadDate: string;
  keywords?: string[];
};

export const seoVideos: SeoVideo[] = [
  {
    id: 'DznrFnmQHbg',
    title: 'India Travel Tips and Safety Guide',
    description: 'A practical India travel guide covering safety, planning, and city travel tips for visitors.',
    uploadDate: '2024-12-01',
    keywords: ['india travel tips', 'visitor safety', 'city guide'],
  },
  {
    id: 'nEyft-ScCgU',
    title: 'Delhi After Dark City Guide',
    description: 'A Delhi evening city guide with nightlife, public areas, and travel context for visitors.',
    uploadDate: '2025-03-01',
    keywords: ['delhi nightlife', 'delhi city guide', 'travel safety'],
  },
  {
    id: 'RrBDGIa-t8I',
    title: 'Udaipur Travel Guide',
    description: 'A Udaipur city travel guide covering local areas, tourist context, and trip planning.',
    uploadDate: '2025-08-01',
    keywords: ['udaipur travel guide', 'rajasthan travel', 'city guide'],
  },
  {
    id: '24WnWUXBirA',
    title: 'New Delhi First-Time Visitor Guide',
    description: 'A New Delhi visitor guide with travel planning and city context.',
    uploadDate: '2024-10-01',
    keywords: ['new delhi travel', 'delhi visitor guide', 'india travel'],
  },
];

export function getSeoVideo(citySlug?: string): SeoVideo {
  if (citySlug === 'delhi' || citySlug === 'noida') return seoVideos[1];
  if (citySlug === 'udaipur') return seoVideos[2];
  return seoVideos[0];
}

export function youtubeEmbedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}
