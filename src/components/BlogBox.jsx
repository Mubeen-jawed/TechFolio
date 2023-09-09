import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const BlogBox = () => {
  return (
    <>
      <div
        className={` rounded-3xl btn-shadow feature-box text-gray-300 font-secondary flex flex-col items-center justify-center `}
        style={{ height: "420px", width: "100%" }}
      >
        <div className="">
          <img
            className="portfolio-img m-0 p-6"
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg"
            alt="testimonial-img"
            style={{ borderRadius: "35px", width: "350px" }}
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex items-center justify-between w-3/4 ">
            <small className="red-text tracking-wider text-xs font-thin">
              DEVELOPMENT
            </small>
            <div className="flex items-center ml-7">
              <i className="">
                <AiOutlineClockCircle className="text-white text-sm hover:text-red-600 transition mr-1" />
              </i>
              <p className="font-primary text-xs font-semibold tracking-wider">
                4 min read
              </p>
            </div>
          </div>
          <div className="w-3/4 mt-3">
            <h2 className="text-lg font-semibold leading-7">
              The Best Ways to Do Market Research For Your Business Plan.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBox;
