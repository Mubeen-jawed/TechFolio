import React from "react";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex justify-between lg:flex-row flex-col w-full max-w-7xl xl:m-auto"
    >
      <div className="ml-6 mb-10 lg:mb-0 sm:text-left text-center">
        <p className="red-text  tracking-widest lg:text-sm text-xs font-thin font-primary">
          PRICING
        </p>
        <h1 className="lg:text-5xl xl:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          My Pricing
        </h1>
      </div>

      <PricingBox />
    </div>
  );
};

export default Pricing;
