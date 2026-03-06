import TestimonialCardV2 from "@/components/testimonial-card-v2";
import Logo from "@/assets/icons/mapsko-logo.svg";
import { MarqueeTrack } from "@/components/marquee-track";

const testimonials = [
    {
        author: "Amit Sharma",
        position: "Resident, Mapsko Mount Ville",
        text: "Moving to Mount Ville was the best decision for my family. The quality of construction and the green spaces are exactly what we were looking for in Gurgaon.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    },
    {
        author: "Priya Verma",
        position: "Homeowner, Mapsko Royale Ville",
        text: "Mapsko Group stays true to their word. The handover was project-perfect and the amenities are top-notch. Truly a premium living experience.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
        author: "Rajesh Gupta",
        position: "Investor, Mapsko Garden Estate",
        text: "I have invested in multiple projects with Mapsko over the last decade. Their commitment to delivery and transparency makes them stand out in the NCR market.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    },
    {
        author: "Sneha Reddy",
        position: "Resident, Mapsko Krishna Apra Gardens",
        text: "The community life here is amazing. Everything from security to maintenance is handled with extreme professionalism. Mapsko truly builds homes, not just houses.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    }
];

export default function TestTestimonials() {
    return (
        <main className="min-h-screen bg-[#fcfcfc] pb-24">
            {/* --- OPTION 1: 1 ROW STATIC --- */}
            <section className="common-frame-box py-24">
                <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center">
                    <Logo className="w-12" />
                    <h2 className="text-sky-700 text-3xl md:text-4xl font-black uppercase tracking-tight">
                        Option 1: <span className="text-lime-500 text-2xl md:text-3xl font-bold">1-Row Static Grid (4 Cards)</span>
                    </h2>
                    <div className="w-20 h-1 bg-sky-700 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((item, index) => (
                        <TestimonialCardV2
                            key={index}
                            index={index}
                            author={item.author}
                            position={item.position}
                            text={item.text}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </section>

            {/* --- OPTION 2: 3-CARD SLIDER --- */}
            <section className="py-24 bg-white border-y border-neutral-100">
                <div className="common-frame-box">
                    <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center">
                        <h2 className="text-sky-700 text-3xl md:text-4xl font-black uppercase tracking-tight">
                            Option 2: <span className="text-lime-500 text-2xl md:text-3xl font-bold">3-Card Dynamic Slider</span>
                        </h2>
                        <div className="w-20 h-1 bg-sky-700 rounded-full"></div>
                    </div>
                </div>

                <MarqueeTrack direction="rtl">
                    {[0, 1].map((dupIndex) => (
                        <div key={dupIndex} className="flex flex-nowrap gap-6 pr-6">
                            {testimonials.map((item, index) => (
                                <div key={`${dupIndex}-${index}`} className="w-[85vw] sm:w-[350px] md:w-[450px] lg:w-[calc((100vw-8rem)/3)] shrink-0 h-full">
                                    <TestimonialCardV2
                                        index={index}
                                        author={item.author}
                                        position={item.position}
                                        text={item.text}
                                        imageUrl={item.imageUrl}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </MarqueeTrack>
            </section>

            {/* --- OPTION 3: 2-CARD SLIDER --- */}
            <section className="common-frame-box py-24">
                <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center">
                    <h2 className="text-sky-700 text-3xl md:text-4xl font-black uppercase tracking-tight">
                        Option 3: <span className="text-lime-500 text-2xl md:text-3xl font-bold">2-Card Dynamic Slider</span>
                    </h2>
                    <div className="w-20 h-1 bg-sky-700 rounded-full"></div>
                </div>

                <MarqueeTrack direction="ltr">
                    {[0, 1].map((dupIndex) => (
                        <div key={dupIndex} className="flex flex-nowrap gap-8 pr-8">
                            {testimonials.slice(0, 3).map((item, index) => (
                                <div key={`${dupIndex}-${index}`} className="w-[90vw] sm:w-[450px] md:w-[550px] lg:w-[calc((100vw-10rem)/2)] shrink-0">
                                    <TestimonialCardV2
                                        index={index}
                                        author={item.author}
                                        position={item.position}
                                        text={item.text}
                                        imageUrl={item.imageUrl}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </MarqueeTrack>
            </section>

            <div className="text-center py-10">
                <p className="text-neutral-400 font-bold uppercase tracking-[0.3em] text-xs">
                    Review these options and let me know your preference!
                </p>
            </div>
        </main>
    );
}
