// import Logo from "@/assets/icons/mapsko-white-logo.svg";
// import TestimonialVideo from "@/components/testimonial-video";

// const FifthSection = () => {
//   const testimonials = [
//     {
//       videoUrl: "/assets/testimonials/1.mp4",
//       id: "1",
//       title: "",
//     },
//     {
//       videoUrl: "/assets/testimonials/2.mp4",
//       id: "2",
//       title: "",
//     },
//     {
//       videoUrl: "/assets/testimonials/3.mp4",
//       id: "3",
//       title: "",
//     },
//     {
//       videoUrl: "/assets/testimonials/4.mp4",
//       id: "4",
//       title: "",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#0B6BB8]">
//       <section className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28">
//         <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
//           <Logo className="w-10 sm:w-12 md:w-14" />
//           <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
//             Voices of Satisfaction
//           </h2>
//           <p className="text-center text-white text-sm sm:text-base md:text-lg font-light uppercase px-4">
//             What our customers say about us
//           </p>
//         </div>

//         <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
//           {testimonials.map((testimonial) => (
//             <TestimonialVideo
//               key={testimonial.id}
//               src={testimonial.videoUrl}
//               title={testimonial.title}
//               className="w-full aspect-9/16 max-h-[720px]"
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FifthSection;

"use client";

import TestimonialCardV2 from "@/components/testimonial-card-v2";
import Logo from "@/assets/icons/mapsko-white-logo.svg";
import { MarqueeTrack } from "@/components/marquee-track";

const testimonials = [
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
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center px-4">
            Voices of Satisfaction
          </h2>
          <p className="text-center text-white text-sm sm:text-base md:text-lg font-light uppercase px-4">
            What our customers say about us
          </p>
        </div>
      </section>

      <section className="w-full overflow-hidden">
        <MarqueeTrack direction="rtl">
          {[0, 1].map((dupIndex) => (
            <div key={dupIndex} className="flex flex-nowrap gap-5 pr-5 py-5">
              {testimonials.map((item, index) => (
                <div
                  key={`t-${dupIndex}-${index}`}
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
    </main>
  );
}
