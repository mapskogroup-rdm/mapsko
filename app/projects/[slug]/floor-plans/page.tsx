import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { urlForImage } from "@/lib/sanity.image";
import type { ProjectDocument } from "@/lib/sanity.types";
import { fetchProject, fetchProjectSlugs } from "../project-data";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await fetchProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProject(slug);
  if (!project) return { title: "Project not found" };

  const ogType = project.seo?.ogType === "article" ? "article" : "website";
  const baseTitle = project.seo?.title || project.title;
  const title = `${baseTitle} · Floor plans`;
  const description =
    project.seo?.description || "Browse downloadable floor plans.";
  const seoImage = project.highlightImage || project.coverImage || project.logo;
  const imageUrl = urlForImage(seoImage)?.width(1200).height(630).url();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: ogType,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

const FloorPlanCard = ({
  projectTitle,
  plan,
}: {
  projectTitle: string;
  plan: NonNullable<ProjectDocument["floorPlans"]>[number];
}) => {
  const planUrl = urlForImage(plan.image)?.width(900).height(700).url();
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {planUrl ? (
        <Image
          src={planUrl}
          alt={plan.name || projectTitle}
          width={900}
          height={700}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="flex h-64 items-center justify-center bg-neutral-100 text-sm text-neutral-700">
          No image provided
        </div>
      )}
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          {plan.downloadUrl ? (
            <a
              href={plan.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-neutral-900 underline underline-offset-4"
            >
              Download
            </a>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
          {plan.area ? <span>Area: {plan.area}</span> : null}
          {plan.bedrooms ? <span>{plan.bedrooms} BR</span> : null}
          {plan.bathrooms ? <span>{plan.bathrooms} Bath</span> : null}
          {plan.price ? <span>Price: {plan.price}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default async function FloorPlansPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProject(slug);
  if (!project) notFound();

  return (
    <main className="common-frame-box pb-16">
      <div className="flex flex-col gap-3 py-10">
        <Link
          href={`/projects/${project.slug || slug}`}
          className="text-sm font-semibold text-neutral-700 underline underline-offset-4"
        >
          ← Back to project
        </Link>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          {project.title} floor plans
        </h1>
        <p className="text-neutral-600">
          Browse the available layouts and download detailed plans.
        </p>
      </div>

      {project.floorPlans?.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {project.floorPlans.map((plan) => (
            <FloorPlanCard
              key={plan._key}
              plan={plan}
              projectTitle={project.title}
            />
          ))}
        </div>
      ) : (
        <p className="text-neutral-600">No floor plans added yet.</p>
      )}
    </main>
  );
}
