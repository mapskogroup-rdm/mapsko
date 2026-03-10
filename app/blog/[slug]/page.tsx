import React from "react";
import Footer from "@/components/footer/footer";
import Navigator from "@/components/navigator/navigator";
import SanityImage from "@/components/sanity-image";
import HeroSection from "@/views/blog/hero-section";
import { fetchBlog } from "@/views/blog/utils/blog-data";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { absoluteUrl, applyPageDefaults, toOgImage } from "@/lib/seo";
import { buildBlogPostingJsonLd } from "@/lib/jsonld";
import type { LandingPageSection } from "@/lib/sanity.types";
import ProjectCard from "@/views/projects/project-updates/project-card";
import Link from "next/link";

const blogPortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-8 rounded-sm overflow-hidden">
        <SanityImage
          image={value}
          alt={value.alt || "Blog content image"}
          className="w-full h-auto object-cover"
          width={800}
          height={500}
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-sky-900 border-b border-sky-100 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-sky-800">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2 text-sky-800">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-base md:text-lg font-semibold mt-4 mb-2 text-sky-700">
        {children}
      </h4>
    ),
    h5: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="text-base font-semibold mt-4 mb-2 text-sky-700">
        {children}
      </h5>
    ),
    h6: ({ children }: { children?: React.ReactNode }) => (
      <h6 className="text-sm font-semibold mt-3 mb-1 text-sky-700 uppercase tracking-wide">
        {children}
      </h6>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-neutral-700 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-sky-300 pl-6 my-6 italic text-neutral-600">
        {children}
      </blockquote>
    ),
  },
};

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
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-sky-900 prose-headings:tracking-tight prose-p:text-neutral-700 prose-p:leading-relaxed">
            <PortableText value={blog.content as PortableTextBlock[]} components={blogPortableTextComponents} />
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
                  <SanityImage
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
          case "faqSection":
            return (
              <section
                key={section._key}
                className="py-16 bg-white"
              >
                <div className="common-frame-box max-w-3xl mx-auto">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black text-sky-700 mb-8 text-center uppercase tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-5">
                    {section.items?.map((item, idx) => (
                      <div
                        key={item._key || idx}
                        className="border border-neutral-200 rounded-sm p-4 md:p-5"
                      >
                        <h3 className="text-base md:text-lg font-bold text-sky-800 mb-2">
                          {(item as any).question}
                        </h3>
                        <div className="prose max-w-none text-neutral-700">
                          <PortableText value={(item as any).answer || []} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "ctaSection": {
            const variant = section.variant || "dark";
            const isDark = variant === "dark";
            return (
              <section
                key={section._key}
                className={isDark ? "py-16 bg-sky-900 text-white" : "py-16 bg-sky-50 text-sky-900"}
              >
                <div className="common-frame-box max-w-3xl mx-auto text-center">
                  {section.eyebrow && (
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2 opacity-80">
                      {section.eyebrow}
                    </p>
                  )}
                  {section.headline && (
                    <h2 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">
                      {section.headline}
                    </h2>
                  )}
                  {section.subtext && (
                    <p
                      className={
                        isDark
                          ? "text-sky-100 mb-6 max-w-2xl mx-auto"
                          : "text-sky-800 mb-6 max-w-2xl mx-auto"
                      }
                    >
                      {section.subtext}
                    </p>
                  )}
                  {section.buttonLabel && section.buttonHref && (
                    <Link
                      href={section.buttonHref}
                      className={
                        isDark
                          ? "inline-flex items-center justify-center px-7 py-2.5 bg-white text-sky-900 font-bold uppercase tracking-wide text-xs hover:bg-sky-100 transition-colors rounded-sm"
                          : "inline-flex items-center justify-center px-7 py-2.5 bg-sky-900 text-white font-bold uppercase tracking-wide text-xs hover:bg-sky-800 transition-colors rounded-sm"
                      }
                    >
                      {section.buttonLabel}
                    </Link>
                  )}
                </div>
              </section>
            );
          }
          case "statsSection":
            return (
              <section
                key={section._key}
                className="py-16 bg-[#050816] text-white"
              >
                <div className="common-frame-box">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black mb-10 text-center uppercase tracking-tight text-sky-300">
                      {section.heading}
                    </h2>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {section.items?.map((item, idx) => (
                      <div
                        key={item._key || idx}
                        className="text-center"
                      >
                        <div className="text-2xl md:text-3xl font-black text-sky-400 mb-1">
                          {item.value}
                        </div>
                        <div className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-sky-100 mb-1">
                          {item.label}
                        </div>
                        {item.description && (
                          <p className="text-[11px] md:text-xs text-sky-200/80">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "testimonialsSection":
            return (
              <section
                key={section._key}
                className="py-16 bg-[#F9F9F9]"
              >
                <div className="common-frame-box">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-black text-sky-700 mb-10 text-center uppercase tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.testimonials?.map((item, idx) => (
                      <figure
                        key={item._key || idx}
                        className="bg-white border border-neutral-200 shadow-sm p-6 flex flex-col h-full"
                      >
                        <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-5">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <div className="mt-auto flex items-center gap-4">
                          {item.avatar && (
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200">
                              <SanityImage
                                image={item.avatar}
                                alt={item.name || "avatar"}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <div className="font-bold text-sky-800 text-sm md:text-base">
                              {item.name}
                            </div>
                            {item.roleOrCompany && (
                              <div className="text-xs text-neutral-500">
                                {item.roleOrCompany}
                              </div>
                            )}
                          </div>
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
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
                    <PortableText value={section.body} components={blogPortableTextComponents} />
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
                            <SanityImage
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
                            <SanityImage
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
