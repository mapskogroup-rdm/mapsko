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
  const title = `${baseTitle} · Video gallery`;
  const description =
    project.seo?.description || "Watch the project video gallery.";
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

const YouTubeEmbed = ({ youtubeId }: { youtubeId: string }) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-black pt-[56.25%]">
    <iframe
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title="Project video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute left-0 top-0 h-full w-full"
    />
  </div>
);

export default async function VideoGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProject(slug);
  if (!project) notFound();

  const videos = project.videoGallery || [];

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
          {project.title} videos
        </h1>
        <p className="text-neutral-600">
          Watch walkthroughs, highlights, and project stories.
        </p>
      </div>

      {videos.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video._key}
              className="space-y-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
            >
              <YouTubeEmbed youtubeId={video.youtubeId} />
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {video.title || "Project video"}
                </p>
                <p className="text-xs text-neutral-600">
                  YouTube ID: {video.youtubeId}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-neutral-600">No videos have been added yet.</p>
      )}
    </main>
  );
}
