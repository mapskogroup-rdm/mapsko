import React from "react";
import ReadyToMoveInPropertyCard from "./ready-to-move-in-property-card";
import { client } from "@/lib/sanity.client";
import { readyToMoveInProjectsQuery } from "@/lib/sanity.queries";
import type { ReadyToMoveInProject } from "@/lib/sanity.types";

type Props = {};

const ReadyToMoveInProperties = async (props: Props) => {
  const projects = await client.fetch<ReadyToMoveInProject[]>(
    readyToMoveInProjectsQuery
  );

  const properties = projects
    .filter(
      (project) =>
        project.propertyLogo &&
        (project.propertyImageWithLogo || project.primaryPropertyPhoto)
    ) // Ensure required images exist
    .map((project) => ({
      imageSrc: project.propertyImageWithLogo || project.primaryPropertyPhoto!,
      logoSrc: project.propertyLogo!,
      title: `MAPSKO ${project.name}`,
      address: project.shortAddress || "",
      description: project.readyToMoveInContent || project.about || "",
      linkHref: `/project/${project.slug}`,
    }));

  if (properties.length === 0) {
    return null;
  }

  return (
    <div className="">
      {properties.map((property, index) => (
        <ReadyToMoveInPropertyCard
          key={property.linkHref}
          {...property}
          index={index}
        />
      ))}
    </div>
  );
};

export default ReadyToMoveInProperties;
