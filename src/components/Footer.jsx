import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="max-w-7xl xl:m-auto h-full">
      <div className="flex justify-center sm:flex-row flex-col w-full">
        <div className="max-[450px]:pl-3 flex sm:flex-col max-[450px]:flex-col max-[500px]:items-start flex-row justify-evenly sm:justify-center sm:items-start items-center w-full sm:w-1/4 mb-9">
          <div className="xl:pl-5 pl-3">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/logo.png"
              alt="profile-img"
              className=""
            />
            {/* <h4>MUBEEN</h4> */}
          </div>
          <div className="flex justify-evenly sm:w-full w-3/12 max-[500px]:w-2/5 mt-7 text-gray-400">
            <button className="md:mr-5 mr-3 inner-shadow-effect max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center">
              <FiFacebook />
            </button>
            <button className="max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl md:mr-5 mr-3 lg:w-14 lg:h-14 max-[500px]:text-lg md:w-12 md:h-12 h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center">
              <FiTwitter />
            </button>
            <button className="max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 max-[500px]:text-lg h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center">
              <FiLinkedin />
            </button>
          </div>
        </div>
        <div className="flex justify-evenly max-[450px]:flex-col  max-[500px]:pl-4 sm:w-9/12 w-full">
          <div className="max-[500px]:mb-10">
            <h3 className="red-text lg:text-lg max-[450px]:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col text-gray-400 max-[450px]:text-lg lg:text-lg sm:text-md text-sm font-semibold">
              <a
                className=" hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                About
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Services
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Blog
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="max-[500px]:mb-10">
            <h3 className="red-text lg:text-lg max-[450px]:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              RESOURCES
            </h3>
            <div className="flex flex-col max-[450px]:text-lg text-gray-400 lg:text-lg sm:text-md text-sm font-semibold">
              <a
                className=" hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Authentication
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                System Status
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Pricingt
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Over Right
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="red-text max-[450px]:text-lg lg:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col max-[450px]:text-lg text-gray-400 lg:text-lg sm:text-md text-sm font-semibold">
              <a
                className=" hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                About
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Services
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Blog
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
