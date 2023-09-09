import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <div
      id="home"
      className="max-w-7xl pt-24 max-[450px]:pt-14 xl:m-auto flex flex-col-reverse lg:flex-row font-secondary items-center justify-center h-full mt-24"
    >
      <div className="home-wrapper-1 md:w-2/3 w-full p-5 xl:pt-20">
        <div className="flex flex-col justify-center">
          <h6 className="text-gray-300 mb-6 tracking-widest lg:text-md text-xs">
            WELCOME TO MY WORLD
          </h6>
          <h1 className="text-white lg:text-6xl text-4xl font-bold mb-3">
            Hi, I’m{" "}
            <span style={{ color: "#ff014f" }} className="text-red-700">
              Muddasir
            </span>
          </h1>
          <h2 className="lg:text-5xl text-3xl text-white font-semibold">
            a Social Media Expert
          </h2>
          <p className="w-full text-gray-300 mt-8 lg:text-lg text-md leading-8 lg:leading-9">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>

        <div className="pl-3 md:flex-row flex flex-col md:items-end items-center justify-evenly text-gray-300 font-primary h-96 md:h-80 mt-9 md:mt-0">
          <div className="flex flex-col ">
            <p>FIND WITH ME</p>
            <div className="flex w-72 justify-evenly mt-7">
              <a
                href="https://www.facebook.com/mubeen.jawed.376"
                className="w-16 h-16 feature-box rounded-md btn-shadow text-2xl flex justify-center items-center"
              >
                <FiFacebook />
              </a>
              <a
                href="https://twitter.com/Mubeenjawed2"
                className="w-16 h-16 feature-box rounded-md btn-shadow text-2xl flex justify-center items-center"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/mubeen-jawed-7b5062231/"
                className="w-16 h-16 feature-box rounded-md btn-shadow text-2xl flex justify-center items-center"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div>
            <p>BEST SKILL ON</p>
            <div className="flex w-72 justify-evenly mt-7">
              <button className="w-16 h-16 cursor-default rounded-md btn-shadow text-2xl flex justify-center items-center">
                <img
                  width={"22px"}
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-01.png"
                  alt=""
                />
              </button>
              <button className="w-16 h-16 cursor-default rounded-md btn-shadow text-2xl flex justify-center items-center">
                <img
                  width={"22px"}
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-02.png"
                  alt=""
                />
              </button>
              <button className="w-16 h-16 cursor-default rounded-md btn-shadow text-2xl flex justify-center items-center">
                <img
                  width={"22px"}
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-03.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        {/* <div className='seperator w-full py-28 flex justify-center items-center'>
          <div className=" w-11/12 border-b  border-black"></div>
        </div> */}
      </div>

      {/* <div className="home-wrapper-2 flex justify-end">
        <div className='btn-shadow flex items-end justify-center w-full lg:w-3/4 ' style={{ height: '33rem' }}>
          <img className='' width={'100%'} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
