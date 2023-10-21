import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const BlogBox = (props) => {
  return (
    <>
      <div
        className={`py-5 rounded-3xl btn-shadow feature-box text-gray-300 font-secondary flex flex-col items-center justify-center `}
        style={{ width: "100%" }}
      >
        <div className="">
          <img
            className="portfolio-img m-0 p-6 w-full h-full"
            src={props.img}
            alt="testimonial-img"
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col pt-4">
          <div className="flex items-center justify-between w-3/4 ">
            <small className="red-text tracking-wider text-xs font-medium uppercase">
              {props.topicCategory}
            </small>
            <div className="flex items-center ml-7">
              <i className="">
                <AiOutlineClockCircle className="text-white text-sm hover:text-red-600 transition mr-1" />
              </i>
              <p className="font-primary text-xs font-semibold tracking-wider">
                {props.time} min read
              </p>
            </div>
          </div>
          <div className="w-3/4 mt-3 mb-2">
            <h2 className="text-lg lg:text-xl font-semibold leading-7 capitalize">
              {props.topic}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBox;
