import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineArrowRight } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const FeatureBox = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <div
        className=" feature-box text-gray-300 rounded-xl font-primary flex justify-center items-center btn-shadow w-full"
        style={{ height: "360px" }}
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
        data-aos="fade-up"
      >
        <div className=" flex flex-col items-center w-full">
          <div className="w-3/4 h-full justify-center flex flex-col ">
            <i className=" text-5xl">
              <RxHamburgerMenu />
            </i>
            <h3 className="text-3xl font-medium my-5">Business Strategy</h3>
            <p className="text-lg font-normal w-full">
              I throw myself down among the tall grass by the stream as Ilie
              close to the earth.
            </p>
            <i
              className={`${
                onHover ? "opacity-100 pt-8" : "opacity-0"
              } text-3xl feature-box-arrow transition-all duration-300 ease-out`}
            >
              <AiOutlineArrowRight />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBox;
