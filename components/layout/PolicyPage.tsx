import { Breadcrumb } from './Breadcrumb';

type PolicySection = {
  title: string;
  body: string[];
};

type PolicyPageProps = {
  title: string;
  eyebrow: string;
  updated?: string;
  intro: string;
  sections: PolicySection[];
};

export function PolicyPage({
  title,
  eyebrow,
  updated = 'June 2026',
  intro,
  sections,
}: PolicyPageProps) {
  return (
    <>
      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <Breadcrumb items={[{ label: title }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">{eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
            <div className="divider-gold mt-4" />
            <p className="mt-5 text-sm leading-7 text-[#B8B8B8]">{intro}</p>
            <p className="mt-4 text-xs text-[#555]">Last updated: {updated}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#050505]">
        <div className="container-shell max-w-4xl">
          <div className="grid gap-5">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-xl border border-[#2A2A2A] bg-[#0D0D0D] p-6"
              >
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <div className="mt-4 grid gap-3 text-sm leading-7 text-[#B8B8B8]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
            <p className="text-sm font-semibold text-white">Adult-only notice</p>
            <p className="mt-2 text-sm leading-7 text-[#B8B8B8]">
              Girls of Passion is intended only for adults aged 18 years and above. Visitors are
              responsible for following applicable local laws and using the platform respectfully.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
