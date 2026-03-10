import React from "react";
import { PortableText } from "@portabletext/react";
import type { LandingPageDocument, LandingPageSection } from "@/lib/sanity.types";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import SanityImage from "@/components/sanity-image";
import ProjectCard from "@/views/projects/project-updates/project-card";
import Link from "next/link";

interface PageBuilderProps {
    data: LandingPageDocument;
}

const PageBuilder = ({ data }: PageBuilderProps) => {
    if (!data) return null;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar with dark background to ensure visibility */}
            <div className="bg-black text-white">
                <Navbar />
            </div>

            <main className="flex-1">
                {data.sections?.map((section) => (
                    <SectionRenderer key={section._key} section={section} />
                ))}
            </main>

            <Footer />
        </div>
    );
};

const SectionRenderer = ({ section }: { section: LandingPageSection }) => {
    switch (section._type) {
        case "hero":
            return (
                <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center overflow-hidden">
                    <div className="z-10 px-4 common-frame-box">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-none">
                            {section.headline}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
                            {section.subHeadline}
                        </p>
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
        case "contentSection":
            return (
                <section className="py-20 px-4 max-w-5xl mx-auto">
                    {section.heading && (
                        <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-10 text-center uppercase tracking-tight">
                            {section.heading}
                        </h2>
                    )}
                    <div className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-headings:uppercase prose-headings:font-black">
                        <PortableText value={section.body || []} />
                    </div>
                </section>
            );
        case "iconBoxes":
            return (
                <section className="py-24 bg-[#F9F9F9]">
                    <div className="common-frame-box">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-16 text-center uppercase tracking-tight">
                                {section.heading}
                            </h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {section.items?.map((item, idx) => (
                                <div key={item._key || idx} className="flex flex-col items-center text-center p-8 bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
                                    {item.icon && (
                                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                                            <SanityImage image={item.icon} alt={item.title || "icon"} width={64} height={64} className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-black text-sky-700 mb-4 uppercase">{item.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed font-bold">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case "imageBoxes":
            return (
                <section className="py-24 bg-white">
                    <div className="common-frame-box">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-16 text-center uppercase tracking-tight">
                                {section.heading}
                            </h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {section.items?.map((item, idx) => (
                                <div key={item._key || idx} className="group overflow-hidden rounded-sm border border-neutral-100 shadow-sm bg-[#FCFCFC]">
                                    {item.image && (
                                        <div className="aspect-[16/9] overflow-hidden">
                                            <SanityImage image={item.image} alt={item.title || "image"} width={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    )}
                                    <div className="p-8 text-center md:text-left">
                                        <h3 className="text-2xl font-black text-sky-700 mb-4 uppercase tracking-tighter">{item.title}</h3>
                                        <p className="text-neutral-600 leading-relaxed text-lg font-bold">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case "projectSection":
            return (
                <section className="py-24 bg-[#F9F9F9]">
                    <div className="common-frame-box">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-16 text-center uppercase tracking-tight">
                                {section.heading}
                            </h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
        case "faqSection":
            return (
                <section className="py-24 bg-white">
                    <div className="common-frame-box max-w-4xl mx-auto">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-10 text-center uppercase tracking-tight">
                                {section.heading}
                            </h2>
                        )}
                        <div className="space-y-6">
                            {section.items?.map((item, idx) => (
                                <div key={item._key || idx} className="border border-neutral-200 rounded-sm p-5 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-sky-800 mb-3">{(item as any).question}</h3>
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
                <section className={isDark ? "py-16 bg-sky-900 text-white" : "py-16 bg-sky-50 text-sky-900"}>
                    <div className="common-frame-box max-w-4xl mx-auto text-center">
                        {section.eyebrow && <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 opacity-80">{section.eyebrow}</p>}
                        {section.headline && <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">{section.headline}</h2>}
                        {section.subtext && <p className={isDark ? "text-sky-100 mb-8 max-w-2xl mx-auto" : "text-sky-800 mb-8 max-w-2xl mx-auto"}>{section.subtext}</p>}
                        {section.buttonLabel && section.buttonHref && (
                            <Link
                                href={section.buttonHref}
                                className={
                                    isDark
                                        ? "inline-flex items-center justify-center px-8 py-3 bg-white text-sky-900 font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-sky-100 transition-colors rounded-sm"
                                        : "inline-flex items-center justify-center px-8 py-3 bg-sky-900 text-white font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-sky-800 transition-colors rounded-sm"
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
                <section className="py-24 bg-[#050816] text-white">
                    <div className="common-frame-box">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight text-sky-300">
                                {section.heading}
                            </h2>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                            {section.items?.map((item, idx) => (
                                <div key={item._key || idx} className="text-center">
                                    <div className="text-3xl md:text-4xl font-black text-sky-400 mb-2">{item.value}</div>
                                    <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-sky-100 mb-1">
                                        {item.label}
                                    </div>
                                    {item.description && <p className="text-xs md:text-sm text-sky-200/80">{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case "testimonialsSection":
            return (
                <section className="py-24 bg-[#F9F9F9]">
                    <div className="common-frame-box">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-16 text-center uppercase tracking-tight">
                                {section.heading}
                            </h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {section.testimonials?.map((item, idx) => (
                                <figure
                                    key={item._key || idx}
                                    className="bg-white border border-neutral-200 shadow-sm p-8 flex flex-col h-full"
                                >
                                    <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                                    <div className="mt-auto flex items-center gap-4">
                                        {item.avatar && (
                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200">
                                                <SanityImage image={item.avatar} alt={item.name || "avatar"} width={48} height={48} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold text-sky-800 text-sm md:text-base">{item.name}</div>
                                            {item.roleOrCompany && (
                                                <div className="text-xs md:text-sm text-neutral-500">{item.roleOrCompany}</div>
                                            )}
                                        </div>
                                    </div>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case "relatedContentSection":
            return (
                <section className="py-24 bg-white">
                    <div className="common-frame-box">
                        {section.heading && (
                            <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-12 text-center uppercase tracking-tight">
                                {section.heading}
                            </h2>
                        )}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {section.relatedBlogs && section.relatedBlogs.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-sky-800 mb-6 uppercase tracking-[0.18em]">Related Articles</h3>
                                    <div className="space-y-4">
                                        {section.relatedBlogs.map((blog) => (
                                            <Link
                                                key={blog._id}
                                                href={`/blog/${blog.slug}`}
                                                className="block border border-neutral-200 hover:border-sky-300 rounded-sm p-4 transition-colors"
                                            >
                                                <div className="text-sm text-neutral-500 mb-1">
                                                    {blog.createdDate && new Date(blog.createdDate).toLocaleDateString()}
                                                </div>
                                                <div className="font-bold text-sky-900 mb-1">{blog.title}</div>
                                                <p className="text-sm text-neutral-600 line-clamp-2">{blog.shortDescription}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {section.relatedProjects && section.relatedProjects.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-sky-800 mb-6 uppercase tracking-[0.18em]">Featured Projects</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {section.relatedProjects.map((project) => (
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
                            )}
                        </div>
                    </div>
                </section>
            );
        case "imageLeftTextRight":
            return (
                <section className="py-24 bg-white">
                    <div className="common-frame-box">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                                {section.image && (
                                    <SanityImage
                                        image={section.image}
                                        alt={section.heading || "Section image"}
                                        width={800}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                {section.heading && (
                                    <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-6 uppercase tracking-tight">
                                        {section.heading}
                                    </h2>
                                )}
                                {section.text && (
                                    <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                                        {section.text}
                                    </p>
                                )}
                                {section.linkText && section.linkUrl && (
                                    <Link
                                        href={section.linkUrl}
                                        className="inline-block px-8 py-3 bg-sky-900 text-white font-bold uppercase tracking-wide text-sm hover:bg-sky-800 transition-colors rounded-sm w-fit"
                                    >
                                        {section.linkText}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            );
        case "imageRightTextLeft":
            return (
                <section className="py-24 bg-[#F9F9F9]">
                    <div className="common-frame-box">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col justify-center order-2 md:order-1">
                                {section.heading && (
                                    <h2 className="text-3xl md:text-4xl font-black text-sky-700 mb-6 uppercase tracking-tight">
                                        {section.heading}
                                    </h2>
                                )}
                                {section.text && (
                                    <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                                        {section.text}
                                    </p>
                                )}
                                {section.linkText && section.linkUrl && (
                                    <Link
                                        href={section.linkUrl}
                                        className="inline-block px-8 py-3 bg-sky-900 text-white font-bold uppercase tracking-wide text-sm hover:bg-sky-800 transition-colors rounded-sm w-fit"
                                    >
                                        {section.linkText}
                                    </Link>
                                )}
                            </div>
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm order-1 md:order-2">
                                {section.image && (
                                    <SanityImage
                                        image={section.image}
                                        alt={section.heading || "Section image"}
                                        width={800}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            );
        default:
            return (
                <div className="py-4 text-center text-red-500 border border-red-200 m-4">
                    Unknown section type: {section._type}
                </div>
            );
    }
};

export default PageBuilder;
