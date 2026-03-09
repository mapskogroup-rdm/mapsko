"use client";

import TestimonialCardV2 from "@/components/testimonial-card-v2";
import Logo from "@/assets/icons/mapsko-white-logo.svg";
import { MarqueeTrack } from "@/components/marquee-track";

const testimonialsRow1 = [
  {
    author: "Vikram Taneja",
    text: "Loved Mapsko Casabella, Sector 82 Gurgaon. Green surroundings, clean environment, great amenities, and excellent connectivity. Chose a ready-to-move 3BHK with complete legal clarity.",
  },
  {
    author: "Ankit Sharma",
    text: "Finding luxury within budget seemed impossible until Mapsko. My new apartment is beautifully designed, affordable, well-built, and surrounded by great facilities. Truly impressive.",
  },
  {
    author: "Shweta Mishra",
    text: "Mapsko Group feels like one of the most genuine real estate companies. My spacious 3BHK apartment purchase was one of the best decisions I've made.",
  },
  {
    author: "Prashant Singh",
    text: "My first home buying experience with Mapsko was exceptional. Their professional team understood my needs and guided me perfectly throughout the entire process.",
  },
  {
    author: "Dikha Gupta",
    text: "Grateful to Mapsko Group for my first home at Mapsko Paradise. My wife and I absolutely love the apartment and the lifestyle it offers.",
  },
  {
    author: "Abhinav Mishra",
    text: "Stunning sunset and panoramic Gurgaon views from the top floor. Living here feels amazing and truly special every single day.",
  },
];

const testimonialsRow2 = [
  {
    author: "Gaurav Khurana",
    text: "Among the few mid-size builders delivering quality projects. Though slightly delayed, construction quality is good. My two Gurgaon investments still feel worthwhile.",
  },
  {
    author: "Anuj Kumar",
    text: "I was unsure about trusting a builder for my first home, but choosing Mapsko was the right decision. Happy to be one of their satisfied customers.",
  },
  {
    author: "Roopa Acharya",
    text: "5-star review for Mapsko Group. Excellent management, innovative ideas, and strong construction quality. The industry truly needs more genuine companies like this.",
  },
  {
    author: "Ajay Tiwari",
    text: "Mapsko projects consistently impress me. As a real estate investor, I appreciate their prime locations, great amenities, and reliable project quality.",
  },
  {
    author: "Lishu Bhatia",
    text: "Great place to live with spacious play areas for kids. Facilities are excellent, well-maintained, and the new society environment feels very pleasant.",
  },
  {
    author: "Nishant Pathak",
    text: "Currently living in Delhi, but soon moving to my dream home at Mapsko Casa Bella. After exploring many projects, this one felt perfect.",
  },
];

export default function TestTestimonials() {
  return (
    <main className="w-full bg-[#0B6BB8]">
      {/* Header */}
      <section className="w-full py-16 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Logo className="w-12" />
          <h2 className="text-sky-700 text-3xl md:text-4xl font-black uppercase tracking-tight">
            Voices of Satisfaction
          </h2>
          <div className="w-20 h-1 bg-sky-600 rounded-full" />
        </div>
      </section>

      {/* Row 1: Slides LEFT (rtl) - 6 testimonials */}
      <section className="w-full overflow-hidden border-y border-sky-100 bg-white/50">
        <MarqueeTrack direction="rtl">
          {[0, 1].map((dupIndex) => (
            <div key={dupIndex} className="flex flex-nowrap gap-6 pr-6 py-6">
              {testimonialsRow1.map((item, index) => (
                <div
                  key={`r1-${dupIndex}-${index}`}
                  className="w-[90vw] sm:w-[400px] md:w-[420px] lg:w-[380px] xl:w-[420px] shrink-0"
                >
                  <TestimonialCardV2
                    index={index}
                    author={item.author}
                    text={item.text}
                    variant="white"
                  />
                </div>
              ))}
            </div>
          ))}
        </MarqueeTrack>
      </section>

      {/* Row 2: Slides RIGHT (ltr) - 6 testimonials */}
      <section className="w-full overflow-hidden border-y border-green-100 bg-white/50">
        <MarqueeTrack direction="ltr">
          {[0, 1].map((dupIndex) => (
            <div key={dupIndex} className="flex flex-nowrap gap-6 pr-6 py-6">
              {testimonialsRow2.map((item, index) => (
                <div
                  key={`r2-${dupIndex}-${index}`}
                  className="w-[90vw] sm:w-[400px] md:w-[420px] lg:w-[380px] xl:w-[420px] shrink-0"
                >
                  <TestimonialCardV2
                    index={index + 6}
                    author={item.author}
                    text={item.text}
                    variant="white"
                  />
                </div>
              ))}
            </div>
          ))}
        </MarqueeTrack>
      </section>
    </main>
  );
}
