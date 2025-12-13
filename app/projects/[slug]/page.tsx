import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { urlForImage } from "@/lib/sanity.image";
import type { ProjectDocument } from "@/lib/sanity.types";
import { fetchProject, fetchProjectSlugs } from "./project-data";

export const revalidate = 60;

const getSeoImage = (project: ProjectDocument) => {
  const fallback = project.highlightImage || project.coverImage || project.logo;
  return project.seo?.image || fallback;
};

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

  if (!project) {
    return { title: "Project not found" };
  }

  const ogType = project.seo?.ogType === "article" ? "article" : "website";
  const title = project.seo?.title || project.title;
  const description =
    project.seo?.description ||
    project.location ||
    "Explore project details, amenities, and media.";
  const seoImage = getSeoImage(project);
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

const InfoBadge = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null;
  return (
    <div className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700">
      <span className="font-semibold">{label}: </span>
      <span>{value}</span>
    </div>
  );
};

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="common-frame-box my-10 space-y-4">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  </section>
);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    notFound();
  }

  const projectSlug = project.slug || slug;
  const coverUrl = urlForImage(project.coverImage)
    ?.width(1600)
    .height(900)
    .url();
  const highlightUrl = urlForImage(project.highlightImage)
    ?.width(1200)
    .height(800)
    .url();
  const logoUrl = urlForImage(project.logo)?.width(320).height(160).url();

  return (
    <main className="space-y-10 pb-16">
      <header className="relative isolate overflow-hidden bg-neutral-950 text-white">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={project.title}
            fill
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
          />
        ) : null}
        <div className="common-frame-box relative z-10 flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={`${project.title} logo`}
                  width={120}
                  height={64}
                  className="h-12 w-auto"
                />
              ) : null}
              <p className="rounded-full bg-white/15 px-3 py-1 text-sm">
                Project overview
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {project.title}
              </h1>
              {project.location ? (
                <p className="text-lg text-neutral-200">{project.location}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-100">
              <InfoBadge label="Status" value={project.status} />
              <InfoBadge label="Price" value={project.priceRange} />
              <InfoBadge label="Possession" value={project.possession} />
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href={`/projects/${projectSlug}/floor-plans`}
                className="rounded-full bg-white px-4 py-2 font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                View floor plans
              </Link>
              <Link
                href={`/projects/${projectSlug}/gallery`}
                className="rounded-full border border-white/50 px-4 py-2 font-semibold transition hover:bg-white/10"
              >
                Image gallery
              </Link>
              <Link
                href={`/projects/${projectSlug}/videos`}
                className="rounded-full border border-white/50 px-4 py-2 font-semibold transition hover:bg-white/10"
              >
                Video gallery
              </Link>
            </div>
          </div>
          {highlightUrl ? (
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl">
              <Image
                src={highlightUrl}
                alt={`${project.title} highlight`}
                width={520}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </header>

      <SectionCard title="About the project">
        {project.about ? (
          <div className="prose max-w-none prose-headings:mt-6 prose-headings:mb-3">
            <PortableText value={project.about} />
          </div>
        ) : (
          <p className="text-neutral-600">Project description coming soon.</p>
        )}
      </SectionCard>

      <SectionCard title="Amenities">
        {project.amenities?.length ? (
          <div className="flex flex-wrap gap-3">
            {project.amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-800"
              >
                {amenity}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-neutral-600">Amenities will be listed soon.</p>
        )}
      </SectionCard>

      <SectionCard title="Floor plans preview">
        {project.floorPlans?.length ? (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              {project.floorPlans.slice(0, 3).map((plan) => {
                const planUrl = urlForImage(plan.image)
                  ?.width(800)
                  .height(600)
                  .url();
                return (
                  <div
                    key={plan._key}
                    className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
                  >
                    {planUrl ? (
                      <Image
                        src={planUrl}
                        alt={plan.name}
                        width={800}
                        height={600}
                        className="h-56 w-full object-cover"
                      />
                    ) : null}
                    <div className="space-y-2 p-4">
                      <h3 className="text-lg font-semibold">{plan.name}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-neutral-600">
                        {plan.area ? <span>Area: {plan.area}</span> : null}
                        {plan.bedrooms ? <span>{plan.bedrooms} BR</span> : null}
                        {plan.bathrooms ? (
                          <span>{plan.bathrooms} Bath</span>
                        ) : null}
                        {plan.price ? <span>Price: {plan.price}</span> : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4">
              <Link
                href={`/projects/${projectSlug}/floor-plans`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline underline-offset-4"
              >
                View all floor plans
              </Link>
            </div>
          </>
        ) : (
          <p className="text-neutral-600">No floor plans added yet.</p>
        )}
      </SectionCard>

      <SectionCard title="Image gallery preview">
        {project.imageGallery?.length ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.imageGallery.slice(0, 6).map((img, idx) => {
                const imgUrl = urlForImage(img)?.width(800).height(600).url();
                if (!imgUrl) return null;
                return (
                  <div
                    key={img._key || `${projectSlug}-img-${idx}`}
                    className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
                  >
                    <Image
                      src={imgUrl}
                      alt={img.alt || project.title}
                      width={800}
                      height={600}
                      className="h-56 w-full object-cover"
                    />
                    {img.caption ? (
                      <p className="px-3 py-2 text-sm text-neutral-700">
                        {img.caption}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="pt-4">
              <Link
                href={`/projects/${projectSlug}/gallery`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline underline-offset-4"
              >
                View full gallery
              </Link>
            </div>
          </>
        ) : (
          <p className="text-neutral-600">No images have been added yet.</p>
        )}
      </SectionCard>

      <SectionCard title="Video gallery preview">
        {project.videoGallery?.length ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.videoGallery.slice(0, 3).map((video, idx) => {
                const posterUrl = urlForImage(video.poster)
                  ?.width(800)
                  .height(450)
                  .url();
                return (
                  <div
                    key={video._key || `${projectSlug}-video-${idx}`}
                    className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
                  >
                    {posterUrl ? (
                      <Image
                        src={posterUrl}
                        alt={video.title || "Video poster"}
                        width={800}
                        height={450}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-48 items-center justify-center bg-neutral-200 text-sm text-neutral-700">
                        No poster uploaded
                      </div>
                    )}
                    <div className="space-y-1 px-3 py-3">
                      <p className="text-sm font-semibold">
                        {video.title || "Video"}
                      </p>
                      <p className="text-xs text-neutral-600">
                        YouTube ID: {video.youtubeId}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4">
              <Link
                href={`/projects/${projectSlug}/videos`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline underline-offset-4"
              >
                View all videos
              </Link>
            </div>
          </>
        ) : (
          <p className="text-neutral-600">No videos have been added yet.</p>
        )}
      </SectionCard>
    </main>
  );
}
