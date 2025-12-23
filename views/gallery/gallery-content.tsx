"use client";

import React, { useMemo, useState } from "react";
import SanityImage from "@/components/sanity-image";
import { ProjectGallery } from "./projects-gallery-data";

type Props = {
  projectsGallery: ProjectGallery[];
};

const GalleryContent = (props: Props) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    props.projectsGallery?.[0]?._id || ""
  );

  const selectedProject = useMemo(() => {
    return (
      props.projectsGallery.find((p) => p._id === selectedProjectId) ||
      props.projectsGallery[0] ||
      null
    );
  }, [props.projectsGallery, selectedProjectId]);

  const images = selectedProject?.imageGallery || [];

  return (
    <section className="bg-stone-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="common-frame-box">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-center gap-2 sm:gap-3 md:gap-4 pb-10 sm:pb-12">
          {props.projectsGallery.map((project) => {
            const isActive = project._id === selectedProjectId;
            return (
              <button
                key={project._id}
                type="button"
                onClick={() => setSelectedProjectId(project._id)}
                aria-pressed={isActive}
                className={[
                  "px-4 py-2 sm:px-5 sm:py-2.5 cursor-pointer",
                  "border border-sky-700",
                  "uppercase font-bold text-xs sm:text-sm tracking-wide",
                  "transition-colors",
                  "min-w-[150px] sm:min-w-[170px]",
                  isActive
                    ? "bg-sky-700 text-white"
                    : "bg-white text-sky-700 hover:bg-sky-50",
                ].join(" ")}
              >
                MAPSKO {project.name}
              </button>
            );
          })}
        </div>
        {selectedProject ? (
          images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {images.map((imageItem, idx) => (
                <div key={imageItem._key || `${selectedProject._id}-${idx}`}>
                  {imageItem.image && (
                    <SanityImage
                      image={imageItem.image}
                      alt={
                        imageItem.label ||
                        `${selectedProject.name} gallery image`
                      }
                      width={1200}
                      className="w-full object-cover h-[230px] sm:h-[240px] md:h-[260px] lg:h-[240px] xl:h-[260px]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <p className="p-4 bg-lime-500 text-center text-white text-base sm:text-lg md:text-xl font-extrabold">
                    {imageItem.label || `Mapsko ${selectedProject.name}`}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-500">
              No images found for this project.
            </div>
          )
        ) : (
          <div className="text-center text-neutral-500">
            No gallery projects found.
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryContent;
