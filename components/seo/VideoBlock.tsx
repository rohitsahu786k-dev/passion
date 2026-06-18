import { getSeoVideo, youtubeEmbedUrl, youtubeWatchUrl, type SeoVideo } from '@/data/videos';
import { absoluteUrl } from '@/lib/seo/site';

type VideoBlockProps = {
  citySlug?: string;
  video?: SeoVideo;
  title?: string;
};

export function VideoBlock({ citySlug, video, title = 'Related City Video Guide' }: VideoBlockProps) {
  const selectedVideo = video || getSeoVideo(citySlug);
  const embedUrl = youtubeEmbedUrl(selectedVideo.id);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: selectedVideo.title,
    description: selectedVideo.description,
    uploadDate: selectedVideo.uploadDate,
    thumbnailUrl: [`https://i.ytimg.com/vi/${selectedVideo.id}/hqdefault.jpg`],
    embedUrl,
    contentUrl: youtubeWatchUrl(selectedVideo.id),
    publisher: {
      '@type': 'Organization',
      name: 'Girls of Passion',
      url: absoluteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.svg'),
      },
    },
    keywords: (selectedVideo.keywords || []).join(', '),
  };

  return (
    <section className="section-pad bg-[#0D0D0D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-shell">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="mt-2 h-0.5 w-12 rounded-full bg-[#D4AF37]" />
        </div>
        <div className="overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#050505]">
          <div className="aspect-video">
            <iframe
              src={embedUrl}
              title={selectedVideo.title}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-white">{selectedVideo.title}</p>
            <p className="mt-1 text-xs leading-6 text-[#888]">{selectedVideo.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
