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

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex justify-between lg:flex-row flex-col w-full max-w-7xl xl:m-auto"
      data-aos="fade-up"
    >
      <div className="mb-10 lg:mb-0 sm:text-left text-center ">
        <div className="sticky top-60">
          <p className="red-text mb-3 tracking-widest lg:text-sm text-xs font-medium font-primary">
            PRICING
          </p>
          <h1 className="lg:text-5xl xl:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
            My Pricing
          </h1>
        </div>
      </div>

      <PricingBox />
    </div>
  );
};

export default Pricing;
