import React from "react";
import { PortableText } from "@portabletext/react";
import type { LandingPageDocument } from "@/lib/sanity.types";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import SanityImage from "@/components/sanity-image";
import ProjectCard from "@/views/projects/project-updates/project-card";

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
                {data.sections?.map((section) => {
                    switch (section._type) {
                        case "hero":
                            return (
                                <section key={section._key} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center overflow-hidden">
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
                                <section key={section._key} className="py-20 px-4 max-w-5xl mx-auto">
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
                                <section key={section._key} className="py-24 bg-[#F9F9F9]">
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
                                <section key={section._key} className="py-24 bg-white">
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
                                <section key={section._key} className="py-24 bg-[#F9F9F9]">
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
                        default:
                            return <div key={section._key} className="py-4 text-center text-red-500 border border-red-200 m-4">Unknown section type: {section._type}</div>;
                    }
                })}
            </main>

            <Footer />
        </div>
    );
};

export default PageBuilder;
