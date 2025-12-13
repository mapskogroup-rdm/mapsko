import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { urlForImage } from "@/lib/sanity.image";
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
  const title = `${baseTitle} · Image gallery`;
  const description =
    project.seo?.description || "View the image gallery for this project.";
  const seoImage = project.coverImage || project.highlightImage || project.logo;
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

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProject(slug);
  if (!project) notFound();

  const gallery = project.imageGallery || [];

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
          {project.title} gallery
        </h1>
        <p className="text-neutral-600">
          Browse photos for an inside look at the project.
        </p>
      </div>

      {gallery.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img, idx) => {
            const imgUrl = urlForImage(img)?.width(1200).height(900).url();
            if (!imgUrl) return null;
            return (
              <div
                key={img._key || `${project._id}-img-${idx}`}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
              >
                <Image
                  src={imgUrl}
                  alt={img.alt || project.title}
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover"
                />
                {img.caption ? (
                  <p className="px-4 py-3 text-sm text-neutral-700">
                    {img.caption}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-neutral-600">No images have been added yet.</p>
      )}
    </main>
  );
}
