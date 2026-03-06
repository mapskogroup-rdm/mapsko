import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import SanityImage from "@/components/sanity-image";
import HeroSection from "@/views/blog/hero-section";
import { fetchBlog } from "@/views/blog/utils/blog-data";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { absoluteUrl, applyPageDefaults, toOgImage } from "@/lib/seo";
import { buildBlogPostingJsonLd } from "@/lib/jsonld";
import type { LandingPageSection } from "@/lib/sanity.types";
import ProjectCard from "@/views/projects/project-updates/project-card";
import SanityImageComponent from "@/components/sanity-image";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    return applyPageDefaults(
      {
        title: "Blogs | Mapsko",
        alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
        robots: { index: false, follow: false },
      },
      parent
    );
  }

  return applyPageDefaults(
    {
      title: blog.title,
      description: blog.shortDescription,
      alternates: { canonical: absoluteUrl(`/blog/${blog.slug}`) },
      openGraph: {
        url: absoluteUrl(`/blog/${blog.slug}`),
        type: "article",
        images: toOgImage(blog.coverImage, { alt: blog.title }),
      },
    },
    parent
  );
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    notFound();
  }

  const ogImage = toOgImage(blog.coverImage, { alt: blog.title })?.[0]?.url;
  const blogJsonLd = buildBlogPostingJsonLd({
    headline: blog.title,
    description: blog.shortDescription,
    image: ogImage,
    datePublished: blog.createdDate,
    url: absoluteUrl(`/blog/${blog.slug}`),
  });

  return (
    <div>
      <HeroSection />
      <div className="w-full flex justify-center py-5">
        <Navigator
          routes={[
            { label: "Home", href: "/blog" },
            { label: "Blogs", href: "" },
          ]}
        />
      </div>

      <div className="common-frame-box py-10">
        <SanityImage
          image={blog.coverImage}
          alt={blog.title}
          height={560}
          className="h-[560px] w-full object-cover"
        />

        <div className="py-10 md:py-24">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
          />
          <h1 className="text-3xl md:text-5xl font-bold pb-10 md:pb-20 md:leading-16 leading-10">
            {blog.title}
          </h1>
          <div className="prose">
            <PortableText value={blog.content} />
          </div>
        </div>
      </div>

      {blog.sections && blog.sections.length > 0 && (
        <div className="border-t border-neutral-200">
          <SectionsRenderer sections={blog.sections} />
        </div>
      )}

      <Footer />
    </div>
  );
};

const SectionsRenderer = ({ sections }: { sections: LandingPageSection[] }) => {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "hero":
            return (
              <section
                key={section._key}
                className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white text-center overflow-hidden"
              >
                <div className="z-10 px-4 common-frame-box">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tight leading-none">
                    {section.headline}
                  </h2>
                  {section.subHeadline && (
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
                      {section.subHeadline}
                    </p>
                  )}
                </div>
                {section.backgroundImage && (
                  <SanityImageComponent
                    image={section.backgroundImage}
                    alt={section.headline || "Hero background"}
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    priority
                    width={1920}
                  />
                )}
                <div className="absolute inset-0 bg-black/50 -z-10" />
              </section>
            );
          case "contentSection":
            return (
              <section key={section._key} className="py-16 px-4 max-w-4xl mx-auto">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-black text-sky-700 mb-8 text-center uppercase tracking-tight">
                    {section.heading}
                  </h2>
                )}
                {section.body && (
                  <div className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-headings:uppercase prose-headings:font-black">
                    <PortableText value={section.body} />
                  </div>
                )}
              </section>
            );
          case "iconBoxes":
            return (
              <section key={section._key} className="py-20 bg-[#F9F9F9]">
                <div className="common-frame-box">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black text-sky-700 mb-12 text-center uppercase tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items?.map((item, idx) => (
                      <div
                        key={item._key || idx}
                        className="flex flex-col items-center text-center p-8 bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
                      >
                        {item.icon && (
                          <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <SanityImageComponent
                              image={item.icon}
                              alt={item.title || "icon"}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <h3 className="text-lg font-black text-sky-700 mb-3 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-sm font-medium">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "imageBoxes":
            return (
              <section key={section._key} className="py-20 bg-white">
                <div className="common-frame-box">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black text-sky-700 mb-12 text-center uppercase tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {section.items?.map((item, idx) => (
                      <div
                        key={item._key || idx}
                        className="group overflow-hidden rounded-sm border border-neutral-100 shadow-sm bg-[#FCFCFC]"
                      >
                        {item.image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <SanityImageComponent
                              image={item.image}
                              alt={item.title || "image"}
                              width={800}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-black text-sky-700 mb-3 uppercase tracking-tighter">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed text-sm font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "projectSection":
            return (
              <section key={section._key} className="py-20 bg-[#F9F9F9]">
                <div className="common-frame-box">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black text-sky-700 mb-12 text-center uppercase tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.projects?.map((project) => (
                      <ProjectCard
                        key={project._id}
                        title={project.name}
                        address={project.shortAddress}
                        subtext={project.statusText || ""}
                        logoImage={project.propertyLogo}
                        href={`/projects/${project.projectType}/${project.slug}`}
                      />
                    ))}
                  </div>
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Page;
