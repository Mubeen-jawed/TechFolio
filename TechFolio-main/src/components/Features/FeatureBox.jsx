import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PiCodepenLogoThin } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const FeatureBox = (props) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <div
        className="min-h-[380px] feature-box text-gray-300 rounded-xl font-primary flex justify-center items-center btn-shadow w-full"
        // style={{ height: "380px" }}
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
        // data-aos="fade-up"
      >
        <div className=" flex flex-col items-center w-full">
          <div className="w-3/4 h-full justify-center flex flex-col mt-5">
            <i className=" text-5xl">
              <PiCodepenLogoThin />
            </i>
            <h3 className="text-3xl font-medium my-5">{props.title}</h3>
            <p className="text-lg font-normal w-full">{props.text}</p>
            <i
              className={`${
                onHover ? "opacity-100 pt-4 " : "opacity-0"
              } text-3xl pb-4 feature-box-arrow transition-all duration-300 ease-out`}
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
