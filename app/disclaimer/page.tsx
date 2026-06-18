import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Disclaimer | Girls of Passion',
  description:
    'Legal disclaimer for Girls of Passion – adult-only service for users aged 18 and above. Read our service disclaimer, terms of use, and legal notices.',
  alternates: { canonical: '/disclaimer/' },
  robots: { index: false, follow: false },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="border-b border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="container-shell py-12">
          <Breadcrumb items={[{ label: 'Disclaimer' }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight">
              <span className="text-[#D4AF37]">Disclaimer</span>
            </h1>
            <div className="divider-gold mt-4" />
            <p className="text-[#B8B8B8] mt-4">Last updated: June 2026</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell max-w-3xl space-y-8 text-[#B8B8B8] leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Adult-Only Service</h2>
            <p>
              Girls of Passion is strictly an adult-only platform. All content, services, and communications
              on this website are intended exclusively for adults aged 18 years and above. By accessing
              this website, you confirm that you are at least 18 years of age.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Legal Compliance</h2>
            <p>
              The use of this platform must comply with all applicable local, state, and national laws.
              Girls of Passion does not promote or facilitate any illegal activity. Users are solely
              responsible for ensuring that their use of this service is lawful in their jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">No Explicit Content</h2>
            <p>
              This website does not publish, promote, or contain any explicit sexual content. All
              companionship services offered through Girls of Passion are presented in a professional,
              tasteful, and non-explicit manner. Any explicit activity is neither solicited nor implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Professional Companionship Only</h2>
            <p>
              Girls of Passion offers adult companionship services in a professional capacity — including
              social companionship, dinner dates, event accompaniment, and leisure activities. The platform
              does not facilitate any services that are illegal under applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">No Guarantees</h2>
            <p>
              While we strive to provide verified, professional companions, Girls of Passion does not
              guarantee specific outcomes. Availability, pricing, and other details may vary and are
              subject to change without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">User Responsibility</h2>
            <p>
              By using this website, users agree to communicate respectfully, comply with all local laws,
              and acknowledge that they are adults choosing to access adult companionship services of their
              own free will. Girls of Passion is not responsible for any misuse of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For any queries related to this disclaimer or our services, please contact us via the
              <a href="/contact/" className="text-[#D4AF37] hover:underline ml-1">Contact page</a>.
            </p>
          </div>

          <div className="brand-card p-6 border-l-2 border-l-[#D4AF37]">
            <p className="text-sm font-medium text-white mb-1">Adult-Only Notice</p>
            <p className="text-sm">
              This service is strictly for adults aged 18 years and above. All users must follow applicable
              local laws and communicate respectfully. Access to this website constitutes agreement to these terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
