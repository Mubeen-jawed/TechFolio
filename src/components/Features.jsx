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

const Features = () => {
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
          title="Website Development"
          text="I am a proficient web developer with expertise in crafting websites using a combination of different technologies"
          icon="AiOutlineCodepen"
        />
        <FeatureBox
          title="Software Development"
          text="As a MERN stack development specialist, I offer expertise in crafting robust and dynamic web applications."
        />
        <FeatureBox
          title="AI Integration"
          text="In the realm of AI integration, I specialize in seamlessly merging artificial intelligence solutions into your existing systems and processes."
        />
        {/* <FeatureBox />
        <FeatureBox />
        <FeatureBox /> */}
      </div>
    </div>
  );
};

export default Features;
