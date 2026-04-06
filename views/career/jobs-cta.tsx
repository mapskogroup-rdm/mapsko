import Link from "next/link";

const JobsCta = () => {
  return (
    <section className="pb-12 md:pb-16 lg:pb-20 xl:pb-24">
      <div className="common-frame-box">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B6BB8] p-8 text-white shadow-2xl sm:p-12 md:min-h-[350px] md:p-16">
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] opacity-30 md:translate-x-[10%]">
            <div className="flex h-[600px] w-[600px] items-center justify-center rounded-full bg-white/10 transition-transform md:h-[800px] md:w-[800px]">
              <div className="flex h-[450px] w-[450px] items-center justify-center rounded-full bg-white/20 md:h-[600px] md:w-[600px]">
                <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full bg-white/40 md:h-[400px] md:w-[400px]">
                  <div className="h-[150px] w-[150px] rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.5)] md:h-[200px] md:w-[200px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Vacancy.
            </h2>
            <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-sky-50 md:text-lg lg:text-xl">
              Explore current openings at MAPSKO and find the role that fits
              your experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/career/jobs"
                className="group flex w-fit items-center justify-between gap-6 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-black sm:px-8 sm:py-4 md:min-w-[200px] md:text-base"
              >
                <span>View Jobs</span>
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsCta;
