import React from "react";
import BlogBox from "./BlogBox";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const Blog = (content) => {
  const {
    box1Img,
    box1Title,
    box1Miuntes,
    box1Category,
    box2Img,
    box2Title,
    box2Miuntes,
    box2Category,
    box3Img,
    box3Title,
    box3Miuntes,
    box3Category,
  } = content;

  return (
    <div
      style={{ maxWidth: "1320px" }}
      className="m-auto"
      id="blog"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="red-text tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
          READ MY BLOGS
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          My Blog
        </h1>
      </div>
      <div
        className="p-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center w-full gap-y-14 gap-x-7"
        style={{ maxWidth: "1320px" }}
      >
        <BlogBox
          topic={box1Title}
          topicCategory={box1Category}
          time={box1Miuntes}
          img={box1Img}
        />

        <BlogBox
          topic={box2Title}
          topicCategory={box2Category}
          time={box2Miuntes}
          img={box2Img}
        />
        <BlogBox
          topic={box3Title}
          topicCategory={box3Category}
          time={box3Miuntes}
          img={box3Img}
        />
      </div>
    </div>
  );
};

export default Blog;
