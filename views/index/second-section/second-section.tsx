import Logo from "@/assets/icons/mapsko-logo.svg";
import { client } from "@/lib/sanity.client";
import { projectsWithSliderQuery } from "@/lib/sanity.queries";
import type { ProjectWithSlider } from "@/lib/sanity.types";
import ProjectDisplayCardV2 from "@/components/project-display-card-v2";
import { MarqueeTrack } from "@/components/marquee-track";

const SecondSection = async () => {
  const projects = await client.fetch<ProjectWithSlider[]>(
    projectsWithSliderQuery
  );

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#F9F9F9] pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <Logo className="w-10 sm:w-12 md:w-14" />
        <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
          Discover Your Perfect Home
        </h2>
        <p className="text-center text-neutral-500 text-sm sm:text-base md:text-lg font-light uppercase px-4">
          Premium projects designed for modern living
        </p>
      </div>

      <MarqueeTrack direction="rtl">
        {[0, 1].map((dupIndex) => (
          <div key={dupIndex} className="flex flex-nowrap items-stretch">
            {projects.map((project, index) => (
              <div
                key={`${dupIndex}-${project._id}`}
                className="shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] xl:w-[calc((100vw-3rem)/3)]"
              >
                <ProjectDisplayCardV2
                  projectSlider={project}
                  gradientColor={
                    (index + dupIndex) % 2 === 0 ? "#0B6BB8" : "#8AC028"
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </MarqueeTrack>
    </div>
  );
};

export default SecondSection;
