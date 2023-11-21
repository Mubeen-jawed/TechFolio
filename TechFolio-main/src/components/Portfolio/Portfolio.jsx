import React from "react";
import PortfolioBox from "./PortfolioBox";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const Portfolio = (content) => {
  const {
    box1Img,
    box1Title,
    box1NumOfLikes,
    box2Img,
    box2Title,
    box2NumOfLikes,
    box3Img,
    box3Title,
    box3NumOfLikes,
  } = content;

  return (
    <div
      id="portfolio"
      style={{ maxWidth: "1320px" }}
      className="m-auto"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="red-text tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
          VISIT MY PORTFOLIO
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          My Portfolio
        </h1>
      </div>
      <div
        className="grid lg:grid-cols-3 p-5 md:grid-cols-2 grid-cols-1 place-items-center w-full gap-y-14 gap-x-7"
        style={{ maxWidth: "1320px" }}
      >
        <PortfolioBox
          type="external link"
          text={box1Title}
          img={box1Img}
          likes={box1NumOfLikes}
        />
        <PortfolioBox
          type="external link"
          text={box2Title}
          img={box2Img}
          likes={box2NumOfLikes}
        />
        <PortfolioBox
          type="external link"
          text={box3Title}
          img={box3Img}
          likes={box3NumOfLikes}
        />
        {/* <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox /> */}
      </div>
    </div>
  );
};

export default Portfolio;
