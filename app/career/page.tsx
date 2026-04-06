import { absoluteUrl, toOgImage } from "@/lib/seo";
import Navigator from "@/components/navigator/navigator";
import HeroSection from "@/views/career/hero-section";
import Logo from "@/assets/icons/mapsko-logo.svg";
import CareerForm from "@/views/career/career-form/career-form";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Mapsko Careers – Jobs, Culture & Work Opportunities",
  description:
    "Explore careers at Mapsko Group, current job openings, company culture and opportunities to grow in the real estate industry.",
  alternates: {
    canonical: absoluteUrl("/career"),
  },
  openGraph: {
    url: absoluteUrl("/career"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

const Page = () => {
  return (
    <main>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Careers",
              href: "/career",
            },
          ]}
        />
      </div>

      <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <Logo className="w-10 sm:w-12 md:w-14" />
          <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Careers at MAPSKO
          </h2>
          <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
            Build the Future With Us
          </p>
        </div>

        <section className="mx-auto mb-12 max-w-6xl px-4 md:mb-16 md:px-6 lg:mb-20">
          <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Vacancy
                </p>
                <h3 className="text-2xl font-bold uppercase text-stone-900 md:text-3xl">
                  Civil Engineer (Structure &amp; Finishing)
                </h3>
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
                  <h4 className="text-lg font-semibold uppercase text-stone-900">
                    Key Requirements
                  </h4>
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

        <CareerForm />
      </div>

      <Footer />
    </main>
  );
};

export default Page;
