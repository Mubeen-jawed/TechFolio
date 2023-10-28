import React from "react";
import FeatureBox from "./FeatureBox";
import { AiOutlineCodepen } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 5000, // Duration of animations in milliseconds
  offset: 20, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-out",
  once: true,
});

const Features = (content) => {
  const {
    box1Title,
    box1Description,
    box2Title,
    box2Description,
    box3Title,
    box3Description,
  } = content;

  return (
    <div
      id="features"
      style={{ maxWidth: "1320px" }}
      className="xl:m-auto p-5"
      data-aos="fade-up"
    >
      <div className="">
        <h6 className="red-text font-medium tracking-widest mb-4">FEATURES</h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold">
          What I Do
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-14 place-items-center h-full mt-9">
        <FeatureBox
          title={box1Title}
          text={box1Description}
          icon="AiOutlineCodepen"
        />
        <FeatureBox title={box2Title} text={box2Description} />
        <FeatureBox title={box3Title} text={box3Description} />
        {/* <FeatureBox />
        <FeatureBox />
        <FeatureBox /> */}
      </div>
    </div>
  );
};

export default Features;
