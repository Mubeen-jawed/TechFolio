import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const PricingBox = () => {
  const [handleStatic, setHandleStatic] = useState(true);
  const [handleStandard, setHandleStandard] = useState(false);
  const [handlePremimum, setHandlePremimum] = useState(false);

  return (
    <div className="lg:w-7/12 w-full p-5 lg:p-0 lg:mr-6" data-aos="fade-up">
      <div
        className="w-full h-full btn-shadow font-secondary flex flex-col rounded-xl"
        style={{}}
      >
        <div className="flex max-[500px]:flex-col btn-shadow w-full justify-between items-center font-primary text-lg">
          <button
            onClick={() => {
              setHandleStatic(true);
              setHandleStandard(false);
              setHandlePremimum(false);
            }}
            className={`${
              handleStatic ? "pricing-btn-click" : null
            } px-3 flex-1 py-8 max-[500px]:w-full transition-all duration-500 rounded-md pricing-btn text-white`}
          >
            Basic
          </button>
          <button
            onClick={() => {
              setHandleStatic(false);
              setHandleStandard(true);
              setHandlePremimum(false);
            }}
            className={`${
              handleStandard ? "pricing-btn-click" : null
            } px-3 flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
          >
            Standard
          </button>
          <button
            onClick={() => {
              setHandleStatic(false);
              setHandleStandard(false);
              setHandlePremimum(true);
            }}
            className={`${
              handlePremimum ? "pricing-btn-click" : null
            } px-3 flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
          >
            Premium
          </button>
        </div>

        {/* Static */}

        {handleStatic && (
          <div className="xl:p-8 md:p-12 p-6 mt-9 ">
            <div className="flex justify-between lg:flex-row flex-col mb-10 max-[500px]:mb-5">
              <div>
                <h2 className="sm:text-3xl text-2xl font-bold text-gray-300 leading-9">
                  Make Your Single Page
                </h2>
                <p className="text-gray-500 mt-02 xl:text-lg text-md">
                  Elementor / WPBakery
                </p>
              </div>

              <button className="xl:w-44 sm:w-36 sm:h-16 xl:h-20 w-32 h-14 max-[500px]:w-24 max-[500px]:h-10 flex justify-center items-center cursor-default rounded-lg btn-shadow lg:ml-4 mt-6 max-[500px]:mt-3 lg:mt-0">
                <span className="sm:text-3xl text-2xl max-[500px]:text-lg red-text font-primary">
                  $30.00
                </span>
              </button>
            </div>

            <div>
              <p className="text-gray-400 font-primary sm:text-lg text-md leading-8 font-normal max-[500px]:w-10/12 w-full">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary
              </p>
            </div>

            <div className="flex justify-between sm:items-center items-start max-[500px]:flex-col font-medium text-gray-300 lg:text-lg sm:text-md text-sm tracking-wide mt-8 w-full px-5">
              <ul
                className="leading-10 max-[500px]:mb-3"
                style={{ listStyleType: "square" }}
              >
                <li>1 Page with Elementor</li>
                <li>Design Customization</li>
                <li>Responsive Design</li>
                <li>Content Upload</li>
                <li>Design Customization</li>
                <li>2 Plugins/Extensions</li>
              </ul>

              <ul className="leading-10" style={{ listStyleType: "square" }}>
                <li>Multipage Elementor</li>
                <li>Design Figma</li>
                <li>MAintaine Design</li>
                <li>Content Upload</li>
                <li>Design With XD</li>
                <li>8 Plugins/Extensions</li>
              </ul>
            </div>

            <div className="flex flex-col w-full justify-center items-center md:mt-16 sm:mt-10 mt-6">
              <button className="feature-box flex justify-center items-center inner-shadow-effect w-full sm:h-16 h-12 rounded-lg btn-shadow transition-all duration-200 red-text tracking-wider text-sm">
                ORDER NOW <BiRightArrowAlt className="text-" />
              </button>
              <div className="text-gray-400 text-xs flex max-[500px]:flex-col max-[500px]:w-full font-semibold mt-7 mb-1">
                <h6 className="flex mr-4">
                  <AiOutlineClockCircle className="mr-2" />2 Days Delivery
                </h6>
                <h6 className="flex max-[500px]:mt-3">
                  <FiActivity className="mr-2" />
                  Unlimited Revision
                </h6>
              </div>
            </div>
          </div>
        )}

        {/* Standard */}

        {handleStandard && (
          <div className="xl:p-8 md:p-12 p-6 mt-9 ">
            <div className="flex justify-between lg:flex-row flex-col mb-10 max-[500px]:mb-5">
              <div>
                <h2 className="sm:text-3xl text-2xl font-bold text-gray-300 leading-9">
                  Make Your Single Page
                </h2>
                <p className="text-gray-500 mt-02 xl:text-lg text-md">
                  Elementor / WPBakery
                </p>
              </div>

              <button className="xl:w-44 sm:w-36 sm:h-16 xl:h-20 w-32 h-14 max-[500px]:w-24 max-[500px]:h-10 flex justify-center items-center cursor-default rounded-lg btn-shadow lg:ml-4 mt-6 max-[500px]:mt-3 lg:mt-0">
                <span className="sm:text-3xl text-2xl max-[500px]:text-lg red-text font-primary">
                  $50.00
                </span>
              </button>
            </div>

            <div>
              <p className="text-gray-400 font-primary sm:text-lg text-md leading-8 font-normal max-[500px]:w-10/12 w-full">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary
              </p>
            </div>

            <div className="flex justify-between sm:items-center items-start max-[500px]:flex-col font-medium text-gray-300 lg:text-lg sm:text-md text-sm tracking-wide mt-8 w-full px-5">
              <ul
                className="leading-10 max-[500px]:mb-3"
                style={{ listStyleType: "square" }}
              >
                <li>1 Page with Elementor</li>
                <li>Design Customization</li>
                <li>Responsive Design</li>
                <li>Content Upload</li>
                <li>Design Customization</li>
                <li>2 Plugins/Extensions</li>
              </ul>

              <ul className="leading-10" style={{ listStyleType: "square" }}>
                <li>Multipage Elementor</li>
                <li>Design Figma</li>
                <li>MAintaine Design</li>
                <li>Content Upload</li>
                <li>Design With XD</li>
                <li>8 Plugins/Extensions</li>
              </ul>
            </div>

            <div className="flex flex-col w-full justify-center items-center md:mt-16 sm:mt-10 mt-6">
              <button className="feature-box flex justify-center items-center inner-shadow-effect w-full sm:h-16 h-12 rounded-lg btn-shadow transition-all duration-200 red-text tracking-wider text-sm">
                ORDER NOW <BiRightArrowAlt className="text-" />
              </button>
              <div className="text-gray-400 text-xs flex max-[500px]:flex-col max-[500px]:w-full font-semibold mt-7 mb-1">
                <h6 className="flex mr-4">
                  <AiOutlineClockCircle className="mr-2" />2 Days Delivery
                </h6>
                <h6 className="flex max-[500px]:mt-3">
                  <FiActivity className="mr-2" />
                  Unlimited Revision
                </h6>
              </div>
            </div>
          </div>
        )}

        {/* Premimum */}

        {handlePremimum && (
          <div className="xl:p-8 md:p-12 p-6 mt-9 ">
            <div className="flex justify-between lg:flex-row flex-col mb-10 max-[500px]:mb-5">
              <div>
                <h2 className="sm:text-3xl text-2xl font-bold text-gray-300 leading-9">
                  Make Your Single Page
                </h2>
                <p className="text-gray-500 mt-02 xl:text-lg text-md">
                  Elementor / WPBakery
                </p>
              </div>

              <button className="xl:w-44 sm:w-36 sm:h-16 xl:h-20 w-32 h-14 max-[500px]:w-24 max-[500px]:h-10 flex justify-center items-center cursor-default rounded-lg btn-shadow lg:ml-4 mt-6 max-[500px]:mt-3 lg:mt-0">
                <span className="sm:text-3xl text-2xl max-[500px]:text-lg red-text font-primary">
                  $100.00
                </span>
              </button>
            </div>

            <div>
              <p className="text-gray-400 font-primary sm:text-lg text-md leading-8 font-normal max-[500px]:w-10/12 w-full">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary
              </p>
            </div>

            <div className="flex justify-between sm:items-center items-start max-[500px]:flex-col font-medium text-gray-300 lg:text-lg sm:text-md text-sm tracking-wide mt-8 w-full px-5">
              <ul
                className="leading-10 max-[500px]:mb-3"
                style={{ listStyleType: "square" }}
              >
                <li>1 Page with Elementor</li>
                <li>Design Customization</li>
                <li>Responsive Design</li>
                <li>Content Upload</li>
                <li>Design Customization</li>
                <li>2 Plugins/Extensions</li>
              </ul>

              <ul className="leading-10" style={{ listStyleType: "square" }}>
                <li>Multipage Elementor</li>
                <li>Design Figma</li>
                <li>MAintaine Design</li>
                <li>Content Upload</li>
                <li>Design With XD</li>
                <li>8 Plugins/Extensions</li>
              </ul>
            </div>

            <div className="flex flex-col w-full justify-center items-center md:mt-16 sm:mt-10 mt-6">
              <button className="feature-box flex justify-center items-center inner-shadow-effect w-full sm:h-16 h-12 rounded-lg btn-shadow transition-all duration-200 red-text tracking-wider text-sm">
                ORDER NOW <BiRightArrowAlt className="text-" />
              </button>
              <div className="text-gray-400 text-xs flex max-[500px]:flex-col max-[500px]:w-full font-semibold mt-7 mb-1">
                <h6 className="flex mr-4">
                  <AiOutlineClockCircle className="mr-2" />2 Days Delivery
                </h6>
                <h6 className="flex max-[500px]:mt-3">
                  <FiActivity className="mr-2" />
                  Unlimited Revision
                </h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingBox;
