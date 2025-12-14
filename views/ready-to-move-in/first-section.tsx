import Logo from "@/assets/icons/mapsko-logo.svg";

const FirstSection = () => {
  return (
    <div className="common-frame-box py-12 md:py-16 lg:py-20 xl:py-28 space-y-12">
      <div className="">
        <Logo className="h-[100px]" />
        <h2 className="text-sky-700 text-4xl font-extrabold uppercase py-6">
          Ready to Move In Property for Your Dream Home
        </h2>

        <div className="space-y-8">
          <p className="text-neutral-500 text-lg font-light">
            Looking for a ready to move property in Gurgaon, Delhi NCR? As per
            the picture and scenario of the current market, home-seekers often
            get confused between buying ready to move apartments or
            under-construction apartments. Without any second thought, we will
            recommend you ready to move property. Here we will help you
            understand the financial advantages of investing in a ready to move
            in apartments.
            <br />
            Because of the options of lower rates and better payment plans, most
            of the people take the risk of going for under-construction
            properties. But, investing in under-construction comes with more
            cons than pros. Written below are some benefits of choosing ready to
            move apartments over other options.
          </p>

          <ul className="text-neutral-500 text-lg font-light list-disc pl-8">
            <li>
              We all are already aware that with the under-construction
              property, there is a risk of delay in possession. The reasons are
              manifold. The delays in pumping funds could be one for the
              developer, but the larger reason could be delays in infrastructure
              development. RERA shall bring all perspectives in place,
              compounded with an upward thrust by the government Vis a Vis
              infrastructure development, we can expect a better future for
              possession in properties under strict guidelines.
            </li>
            <li>
              By selecting ready to move in property, you get to save the
              rentals by moving in your property and earn the rental if you let
              it out. You can also save or earn the money by supplementing the
              EMI payments. People going for other options should be aware of
              the fact that they are going to pay a higher rate of interest.
            </li>
            <li>
              The current state of real estate is the risk with the probability
              of defaults that might happen in the future. This is the condition
              all around the country. There are some issues that developers
              sometimes have allotted the same property to more than one buyer.
            </li>
          </ul>

          <div className="text-neutral-500 text-lg font-light ">
            Thus, going for a ready to move in property is the best option.
            Contact Mapsko if you are interested in buying a ready to move flats
            in Gurgaon or NCR. We have many projects available and you can
            choose the best one for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
