import React from "react";
import PricingBox from "./PricingBox";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const Pricing = (content) => {
  const {
    basicTitle,
    basicPrice,
    basicDescription,
    standardTitle,
    standardPrice,
    standardDescription,
    premiumTitle,
    premiumPrice,
    premiumDescription,
  } = content;

  return (
    <div
      id="pricing"
      className="flex p-5 justify-between lg:flex-row flex-col w-full max-w-7xl xl:m-auto"
      data-aos="fade-up"
    >
      <div className="mb-10 lg:mb-0 sm:text-left text-center ">
        <div className="sticky top-56">
          <p className="red-text  tracking-widest lg:text-sm text-xs font-medium font-primary">
            PRICING
          </p>
          <h1 className=" lg:text-5xl xl:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
            My Pricing
          </h1>
        </div>
      </div>

      <PricingBox
        basicTitle={basicTitle}
        basicPrice={basicPrice}
        basicDescription={basicDescription}
        standardTitle={standardTitle}
        standardPrice={standardPrice}
        standardDescription={standardDescription}
        premiumTitle={premiumTitle}
        premiumPrice={premiumPrice}
        premiumDescription={premiumDescription}
      />
    </div>
  );
};

export default Pricing;
