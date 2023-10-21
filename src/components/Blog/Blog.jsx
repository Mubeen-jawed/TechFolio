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

const Blog = () => {
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
          topic="What are cors and why is it important for browsers?"
          topicCategory="Technology"
          time="5"
          img="https://miro.medium.com/v2/resize:fit:1024/0*zb0GzPvxSsnwuBOu.png"
        />
        <BlogBox
          topic="Five most amazing React libraries."
          topicCategory="Discover"
          time="3"
          img="https://blog.openreplay.com/images/how-to-build-your-own-react-components-library/images/hero.png"
        />
        <BlogBox
          topic="Best Resources to learn mern stack in 2023."
          topicCategory="Learn"
          time="6"
          img="https://devtechnosys.com/insights/wp-content/uploads/2022/12/Mern-Stack.png"
        />
      </div>
    </div>
  );
};

export default Blog;
