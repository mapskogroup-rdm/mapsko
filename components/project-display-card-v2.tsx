"use client";

import Link from "next/link";
import { ProjectWithSlider } from "@/lib/sanity.types";
import { SanityImageBackground } from "./sanity-image-background";

type Props = {
  projectSlider: ProjectWithSlider;
  initialColor: string;
  disableCycle?: boolean;
};

const ProjectDisplayCardV2 = ({ projectSlider }: Props) => {
  return (
    <Link
      href={`/project/${projectSlider.slug}`}
      aria-label={`View project ${projectSlider.name}`}
      className="block"
    >
      <SanityImageBackground
        image={projectSlider.sliderPhoto}
        alt={projectSlider.name}
        className="w-full cursor-pointer aspect-[48/85]"
      />
    </Link>
  );
};

export default ProjectDisplayCardV2;
