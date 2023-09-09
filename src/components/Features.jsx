import React from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <div id="features" style={{ maxWidth: "1320px" }} className="xl:m-auto">
      <div className="mx-3">
        <h6 className="red-text tracking-widest mb-4">FEATURES</h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold">
          What I Do
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-1 gap-y-14 place-items-center h-full mt-9">
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
        </div>
      </div>
    </div>
  );
};

export default Features;
