import Navigator from "@/components/navigator/navigator";
import Footer from "@/components/footer/footer";
import HeroSection from "@/views/career/hero-section";
import { absoluteUrl, toOgImage } from "@/lib/seo";

export const metadata = {
  title: "Mapsko Career Jobs - Current Openings",
  description:
    "Explore current job openings at Mapsko Group and apply for available positions in Gurgaon.",
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
              <h1 className="text-2xl font-bold uppercase text-stone-900 md:text-3xl">
                Civil Engineer (Structure &amp; Finishing)
              </h1>
              <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
                We are hiring for an immediate opening on kothi and villa
                projects in Gurgaon.
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
                    Project Type
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    Kothi / Villa
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    Gurgaon
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Experience Required
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    4 to 6 Years
                  </p>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Joining
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    Immediate
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 p-5">
                <h2 className="text-lg font-semibold uppercase text-stone-900">
                  Key Requirements
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700 md:text-base">
                  <li>Bachelor&apos;s Degree in Civil Engineering</li>
                  <li>
                    4 to 6 years of hands-on experience in structural and
                    finishing works
                  </li>
                  <li>
                    Strong knowledge of construction methods, materials, and
                    local regulations
                  </li>
                  <li>
                    Ability to manage site execution and ensure quality
                    standards
                  </li>
                  <li>Immediate joiners will be preferred</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-sky-700 p-6 text-white md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">
                How to Apply
              </p>
              <p className="mt-4 text-base leading-7 text-sky-50 md:text-lg">
                Interested candidates can mail their resume and CV at{" "}
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
