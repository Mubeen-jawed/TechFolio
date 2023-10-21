import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
// import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

const PortfolioBox = (props) => {
  const [onHover, setOnHover] = useState(false);

  // useEffect(() => {
  // Initialize AOS when the component mounts
  AOS.init({
    duration: 400, // Duration of animations in milliseconds
    offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
    easing: "ease-in-out",
    once: true,
  });
  // }, []);

  return (
    <>
      <div
        className="p-6 rounded-xl btn-shadow h-full w-full feature-box text-gray-300 font-secondary flex flex-col items-center justify-center "
        // style={{ height: "100%", width: "91%" }}
        data-aos="fade-up"
      >
        <div className="">
          <img
            className="portfolio-img m-0 rounded-lg"
            src={props.img}
            alt="testimonial-img"
            style={{}}
          />
        </div>
        <div
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="w-full cursor-default flex justify-center items-center px-2 flex-col"
        >
          <div className="flex items-center justify-between w-full mt-5 mb-3">
            <small className="red-text tracking-wider text-xm uppercase">
              {props.type}
            </small>
            <div className="flex items-center">
              <i className="cursor-pointer">
                <BiHeart className="text-white hover:text-red-600  transition mr-1" />
              </i>
              <p className="font-primary">{props.likes}</p>
            </div>
          </div>
          <div
            className={`w-full ${
              onHover ? "red-text" : null
            } transition-all duration-200 ease-in w-full`}
          >
            <h2 className="text-2xl font-semibold leading-9 w-full">
              {props.text}
              <FiArrowUpRight
                className={`${
                  onHover ? "opacity-100" : "opacity-0"
                } red-text transition-all duration-200 ease-in`}
              />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioBox;
