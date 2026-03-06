import TestimonialCardV2 from "@/components/testimonial-card-v2";
import Logo from "@/assets/icons/mapsko-logo.svg";

const testimonials = [
    {
        author: "Amit Sharma",
        position: "Resident, Mapsko Mount Ville",
        text: "Moving to Mount Ville was the best decision for my family. The quality of construction and the green spaces are exactly what we were looking for in Gurgaon.",
    },
    {
        author: "Priya Verma",
        position: "Homeowner, Mapsko Royale Ville",
        text: "Mapsko Group stays true to their word. The handover was project-perfect and the amenities are top-notch. Truly a premium living experience.",
    },
    {
        author: "Rajesh Gupta",
        position: "Investor, Mapsko Garden Estate",
        text: "I have invested in multiple projects with Mapsko over the last decade. Their commitment to delivery and transparency makes them stand out in the NCR market.",
    },
    {
        author: "Sneha Reddy",
        position: "Resident, Mapsko Krishna Apra Gardens",
        text: "The community life here is amazing. Everything from security to maintenance is handled with extreme professionalism. Mapsko truly builds homes, not just houses.",
    }
];

export default function TestTestimonials() {
    return (
        <main className="min-h-screen bg-white">
            <section className="common-frame-box py-12 md:py-24">
                {/* Header */}
                <div className="flex flex-col items-center justify-center space-y-6 pb-16 md:pb-24 text-center">
                    <Logo className="w-12 md:w-16" />
                    <h2 className="text-sky-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
                        Voices of <span className="text-lime-500">Satisfaction</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-sky-700 rounded-full"></div>
                    <p className="max-w-2xl text-neutral-500 text-base md:text-xl font-medium uppercase tracking-wider">
                        Discover why hundreds of families trust Mapsko for their dream homes.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {testimonials.map((item, index) => (
                        <TestimonialCardV2
                            key={index}
                            index={index}
                            author={item.author}
                            position={item.position}
                            text={item.text}
                        />
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-24 text-center">
                    <p className="text-neutral-400 font-bold uppercase tracking-[0.2em] text-sm">
                        Scroll to explore the premium experience
                    </p>
                </div>
            </section>
        </main>
    );
}
