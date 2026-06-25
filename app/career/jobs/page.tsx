import Navigator from "@/components/navigator/navigator";
import Footer from "@/components/footer/footer";
import HeroSection from "@/views/career/hero-section";
import { absoluteUrl, toOgImage } from "@/lib/seo";

export const metadata = {
  title: "Mapsko Career Jobs - Current Openings",
  description:
    "Explore current job openings at Mapsko Group and apply for available positions in Gurugram.",
  alternates: {
    canonical: absoluteUrl("/career/jobs"),
  },
  openGraph: {
    url: absoluteUrl("/career/jobs"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const JobsPage = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/" },
            { label: "Career", href: "/career" },
            { label: "Jobs", href: "/career/jobs" },
          ]}
        />
      </div>

      <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Listed Job
              </p>
              <h2 className="text-2xl font-bold uppercase text-stone-900 md:text-3xl">
                Sr. Manager / Manager &ndash; Legal (Real Estate)
              </h2>
              <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
                We are seeking an experienced Sr. Manager / Manager – Legal to
                join our real estate team. The successful candidate will provide
                legal support and guidance to the business, ensuring compliance
                with laws and regulations, and managing legal risks.
              </p>
            </div>

            <a
              href="mailto:hr@mapskogroup.com"
              className="inline-flex w-full items-center justify-center rounded-sm border border-sky-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-sky-700 transition-colors hover:bg-sky-700 hover:text-white md:w-auto"
            >
              Apply via Email
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Industry
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    Real Estate
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    Sector 56, Gurugram
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Experience Required
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    10 – 15 Years
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Qualification
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    LLB or Equivalent
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 p-5">
                <h3 className="text-lg font-semibold uppercase text-stone-900">
                  Key Responsibilities
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700 md:text-base">
                  <li>
                    <strong>Provide legal support:</strong> Assist in drafting,
                    reviewing, and negotiating contracts, agreements, RERA
                    compliance and other legal documents
                  </li>
                  <li>
                    <strong>Handling arbitration and Other Legal proceedings</strong>
                  </li>
                  <li>
                    <strong>Compliance and risk management:</strong> Ensure
                    compliance with relevant laws, regulations, and industry
                    standards, and identify and mitigate legal risks
                  </li>
                  <li>
                    <strong>Manage litigation:</strong> Assist in managing
                    litigation and disputes related to real estate transactions
                  </li>
                  <li>
                    <strong>Collaborate with external counsel:</strong> Work with
                    external lawyers and other experts to ensure high-quality
                    legal advice
                  </li>
                  <li>
                    <strong>Develop and implement policies:</strong> Assist in
                    developing and implementing policies and procedures to ensure
                    compliance with laws and regulations
                  </li>
                  <li>
                    <strong>Old case Follow-up:</strong> Pursue ongoing old cases
                    and provide necessary updates
                  </li>
                  <li>
                    <strong>Signing Authority on Legal Matters:</strong> Act as
                    the signing authority on behalf of the company for all legal
                    matters, ensuring timely and appropriate decision-making
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 p-5">
                <h3 className="text-lg font-semibold uppercase text-stone-900">
                  Requirements
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700 md:text-base">
                  <li>
                    LLB or equivalent law degree with a valid bar council
                    registration
                  </li>
                  <li>
                    10+ years of experience in a real estate law firm or
                    in-house legal team
                  </li>
                  <li>
                    Strong knowledge of real estate laws and regulations,
                    excellent drafting and negotiation skills, and ability to
                    work under pressure
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-sky-700 p-6 text-white md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">
                How to Apply
              </p>
              <p className="mt-4 text-base leading-7 text-sky-50 md:text-lg">
                Interested candidates are requested to share their updated
                resume at{" "}
                <a
                  href="mailto:hr@mapskogroup.com"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  hr@mapskogroup.com
                </a>
                .
              </p>
              <p className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-6 text-sky-50 md:text-base">
                Please note: Candidates are requested to share their contact
                numbers with their applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JobsPage;
