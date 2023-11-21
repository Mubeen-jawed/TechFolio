import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const Testimonial = (content) => {
  // const [nextBtnClick, setNextBtnClick] = useState(false);

  const { img, name, company, position, title, moreInfo, description, rating } =
    content;

  return (
    <div id="testimonial" data-aos="fade-up">
      {/* Heading */}

      <div className="text-center mb-10 ">
        <h6 className="red-text tracking-widest text-sm font-medium">
          WHAT CLIENTS SAY
        </h6>
        <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl mt-3 text-gray-300 font-secondary">
          Testimonial
        </h1>
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center lg:flex-row flex-col gap-x-10 p-5 items-center w-screen grid-cols-2 xl:m-auto max-w-7xl">
          {/* First Container */}

          <div className="testimonial-first-container feature-box btn-shadow xl:w-3/4 xl:p-8 p-5 rounded-md flex lg:flex-col sm:flex-row flex-col lg:mb-0 mb-8 lg:items-start items-center">
            <div>
              <img
                className="rounded-xl m-0 testimonial-img"
                src={img}
                alt="testimonial-img"
              />
            </div>

            <div className="h-28 sm:ml-6 ml-0 mt-4 flex flex-col justify-evenly w-3/4 items-start">
              <small className="red-text text-xs font-medium tracking-widest uppercase">
                {company}
              </small>
              <div className="h-16 flex flex-col w-56 justify-between">
                <h3 className="lg:text-xl text-2xl w-full font-bold text-gray-300 capitalize">
                  {name}
                </h3>
                <p className="text-sm text-gray-400 capitalize">{position}</p>
              </div>
            </div>
          </div>
          {/* ### */}

          <div className="">
            <div className="lg:flex justify-between w-full hidden">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/icons/quote.png"
                alt=""
                width={"120px"}
                className=""
              />
              <div className="flex mt-6">
                <div className="mr-4 w-14 h-14 btn-shadow feature-box flex justify-center items-center rounded-md">
                  <AiOutlineArrowLeft className="text-gray-400 text-2xl transition-all text" />
                </div>
                <div className=" w-14 h-14 btn-shadow feature-box flex justify-center items-center rounded-md">
                  <AiOutlineArrowRight
                    // onClick={() => setNextBtnClick(true)}
                    className="text-gray-400 text-2xl text"
                  />
                </div>
              </div>
            </div>

            {/* Second Container */}

            <div
              className="btn-shadow feature-box w-full p-10 rounded-xl h-2/4"
              style={{ minWidth: "260px" }}
            >
              <div className="flex sm:flex-row flex-col sm:items-center w-full sm:justify-between">
                <div className="w-2/3">
                  <h3 className="capitalize md:text-2xl sm:text-xl text-lg font-semibold text-gray-300 font-secondary">
                    {title}
                  </h3>
                  <span className="text-gray-500 font-primary md:text-lg sm:text-sm text-xs">
                    {moreInfo}
                  </span>
                </div>

                <div className="h-8 w-28 sm:m-0 mt-5 text-xs flex justify-center items-center rounded-md btn-shadow">
                  <i className="rating">{rating}</i>
                </div>
              </div>

              <div className="seperator py-5 w-full flex justify-center">
                <div
                  className="border-b border-black"
                  style={{ width: "100%" }}
                ></div>
              </div>

              <div className="">
                <p className="w-full text-gray-400 font-medium font-primary md:text-lg text-base leading-7">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </main> */}

        <div className="scroller w-full h-16 flex items-end justify-center ">
          <div className="">
            <button className="inner-shadow rounded-full w-3 h-3 btn-shadow feature-box"></button>
          </div>
          <div className="mx-4 ">
            <button className="inner-shadow rounded-full w-3 h-3 btn-shadow feature-box"></button>
          </div>
          <div className="">
            <button className="inner-shadow rounded-full w-3 h-3 btn-shadow feature-box"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
