import React from "react";
import { PortableText } from "@portabletext/react";
import type { LandingPageDocument } from "@/lib/sanity.types";
import HeroSection from "@/views/index/hero-section"; // Reusing existing hero style if possible or making generic
import Footer from "@/components/footer/footer";

interface PageBuilderProps {
    data: LandingPageDocument;
}

const PageBuilder = ({ data }: PageBuilderProps) => {
    if (!data) return null;

    return (
        <main>
            {data.sections?.map((section) => {
                switch (section._type) {
                    case "hero":
                        return (
                            <section key={section._key} className="relative h-[60vh] flex items-center justify-center text-white text-center">
                                {/* Simplified Hero for now, can be expanded to match the real Hero design */}
                                <div className="z-10 px-4">
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{section.headline}</h1>
                                    <p className="text-xl max-w-2xl mx-auto">{section.subHeadline}</p>
                                </div>
                                {section.backgroundImage && (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center -z-10"
                                        style={{ backgroundImage: `url(${section.backgroundImage.asset?._ref})` }} // Mocking bg logic
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/40 -z-10" />
                            </section>
                        );
                    case "contentSection":
                        return (
                            <section key={section._key} className="py-20 px-4 max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold mb-8">{section.heading}</h2>
                                <div className="prose max-w-none">
                                    <PortableText value={section.body || []} />
                                </div>
                            </section>
                        );
                    default:
                        return <div key={section._key}>Unknown section type: {section._type}</div>;
                }
            })}
            <Footer />
        </main>
    );
};

export default PageBuilder;
