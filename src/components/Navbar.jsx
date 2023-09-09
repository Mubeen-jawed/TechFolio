import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Navbar = (props) => {
  const [hireMeClick, setHireMeClick] = useState(false);
  const [hamBurgerClick, setHamBurgerClick] = useState(false);
  // const [showing, setShowing] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setShowing(true);
  //     } else {
  //       setShowing(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // });

  // console.log(props.bodyClick);
  // `${
  //   showing ? "fixed" : "null"
  // }
  return (
    <div
      className={`
       
        navbar items-center fixed top-0 z-40 navbar-shadow w-full flex text-stone-100 justify-around h-24 max-[450px]:h-20`}
      style={{ backgroundColor: "#212428" }}
      id="navbar"
    >
      {/* {console.log(showing)} */}

      <a href="/" className="nav-first-wrapper pl-2">
        <img
          src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/logo.png"
          alt="profile-img"
          className=""
          style={{ minWidth: "70px" }}
        />
      </a>

      <div className="nav-second-wrapper" style={{ width: "60%" }}>
        <ul className="hidden xl:flex nav-second-wrapper justify-evenly font-secondary text-sm text-gray-300">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              FEATURES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              TESTIMONIAL{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PRICING
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              BLOG
            </Link>
          </li>
          {/* <li>CONTACT</li> */}
        </ul>
      </div>

      <div className="nav-third-wrapper xl:w-1/6 w-72 flex justify-around items-center">
        <button
          style={{ backgroundColor: "#1c1f23" }}
          className="max-[450px]:p-2 btn-shadow relative rounded-full flex justify-center items-center p-3 transition-all duration-300 text-lg bg-black"
        >
          <AiOutlineShoppingCart className="max-[450px]:text-sm" />
          <div className="bg-red-600 w-4 h-4 text-xs rounded-full font-bold flex justify-center items-center text-center absolute -top-1 -right-1 max-[450px]:-right-2 max-[450px]:-top-2">
            <p>0</p>
          </div>
        </button>

        <button
          onClick={() => {
            setHireMeClick(true);
            props.onHireMeClick(hireMeClick);
          }}
          className="red-text transition-all duration-500 sm:w-28 hover:mb-2 w-20 max-[450px]:w-20 max-[450px]:font-light max-[450px]:py-2 rounded-md text-xs py-3 btn-shadow mr-2 sm:ml-8 sm:mr-6 ml-3 sm:font-light font-primary sm:text-sm tracking-widest "
        >
          HIRE ME
        </button>

        {/* Hire Me Button Click UI */}

        <div
          className={`${
            hireMeClick ? "opacity-100" : "invisible opacity-0"
          } hireme z-50 max-w-6xl xl:m-auto transition-all flex ease-out duration-200 flex-col justify-center items-center rounded-2xl fixed top-6 bottom-4 sm:top-3 sm:bottom-3 btn-shadow`}
          style={{ backgroundColor: "#212428" }}
        >
          {/* <h2 className="font-semibold lg:text-3xl text-2xl mt-3 text-gray-300 font-primary pl-12">
            GET A QOUTE
          </h2> */}
          <div className="w-full flex justify-end pr-5 text-xl text-gray-300 ">
            {/* <div
              onClick={() => setHireMeClick(false)}
              className="w-9 h-9 cursor-pointer rounded-full flex justify-center transition-all duration-200 items-center hover:bg-slate-700"
            >
              <FaTimes className="" />
            </div> */}

            <button
              className="sm:w-8 sm:h-8 w-7 h-7 sm:text-md text-sm top-3 right-3 flex justify-center absolute items-center rounded-full btn-shadow cursor-pointer"
              onClick={() => {
                setHireMeClick(false);
                props.onHireMeClick(hireMeClick);
              }}
            >
              <FaTimes className="red-text" />
            </button>
          </div>

          <div className="flex flex-col justify-evenly font-secondary items-center w-full sm:px-12 sm:pt-4 sm:pb-6 px-6 py-3">
            <label
              className=" flex flex-col w-full sm:text-sm text-xs text-gray-300"
              htmlFor="fullName"
            >
              Full Name
              <input
                className="text-gray-200 focus:outline-none capitalize pl-3 mt-2 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                id="fullName"
                type="text"
                placeholder="eg: Jhon Doe"
                style={{ backgroundColor: "#212428" }}
              />
            </label>
            <label
              className="sm:mt-4 mt-3 flex flex-col w-full sm:text-sm text-xs text-gray-300"
              htmlFor="email"
            >
              Email
              <input
                className="text-gray-200 focus:outline-none pl-3 mt-2 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                id="email"
                type="email"
                placeholder="Eg: jhondoe@gmail.com"
              />
            </label>
            <label
              className="text-gray-300 sm:mt-4 mt-3 flex flex-col w-full sm:text-sm text-xs"
              htmlFor="subject"
            >
              Subject
              <input
                placeholder="eg: Website Development"
                className="text-gray-200 focus:outline-none capitalize pl-2 mt-3 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                id="subject"
                type="text"
              />
            </label>

            <label
              className="sm:mt-4 mt-3 flex flex-col w-full font-secondary sm:text-sm text-xs text-gray-300"
              htmlFor="message"
            >
              What Service Do You Want?
              <textarea
                className="text-gray-200 focus:outline-none capitalize pl-3 pt-3 mt-2 bg-transparent w-full rounded-lg border border-gray-600 border-solid"
                id="message"
                rows="5"
                placeholder="eg: I want you to develop a tinder like website for dogs and cats which should be..."
              ></textarea>
            </label>
          </div>

          <div className="flex justify-end items-end w-full absolute bottom-0 pr-6 pb-3 pt-2">
            <button
              onClick={() => {
                setHireMeClick(false);
                props.onHireMeClick(hireMeClick);
              }}
              className="text-red-600 sm:w-28 w-20 rounded-md text-xs py-2 btn-shadow ml-5 mr-3 sm:ml-8 sm:mr-6 sm:font-semibold sm:text-base"
            >
              SUBMIT
            </button>
          </div>
        </div>

        <button
          className="red-text xl:hidden m-3 p-3 max-[450px]:p-2 text-lg rounded-full btn-shadow"
          onClick={() => setHamBurgerClick(true)}
        >
          <GiHamburgerMenu className="max-[450px]:text-sm" />
        </button>

        {/* Small screen navbar UI */}

        <div
          className={`${
            hamBurgerClick ? "opacity-100 " : "opacity-0 invisible"
          } fixed flex overflow-y-auto flex-col top-0 bottom-0 left-0 py-6 px-10 transition-all duration-500 ease-out mr-10`}
          style={{
            backgroundColor: "#191b1e",
            width: "370px",
          }}
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/logo.png"
                alt="profile-img"
                className=""
              />
              <button
                className="w-12 h-12 flex justify-center items-center rounded-full btn-shadow"
                onClick={() => setHamBurgerClick(false)}
              >
                <FaTimes className="red-text" />
              </button>
            </div>

            <p className="leading-8 font-primary text-gray-400 w-11/12 py-5">
              Inbio is a all in one personal portfolio WordPress theme. You can
              customize everything.
            </p>
          </div>

          <div className="border-t text-gray-300 border-gray-700 border-b py-1 pb-20">
            <ul className="flex flex-col justify-evenly h-72 font-semibold font-secondary text-sm text-gray-300">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setHamBurgerClick(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setHamBurgerClick(false)}
                >
                  FEATURES
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setHamBurgerClick(false)}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setHamBurgerClick(false)}
                >
                  TESTIMONIAL{" "}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setHamBurgerClick(false)}
                >
                  PRICING
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setHamBurgerClick(false)}
                >
                  BLOG
                </Link>
              </li>
              {/* <li>CONTACT</li> */}
            </ul>
          </div>

          <div>
            <h6 className="uppercase tracking-wider text-sm text-gray-300 pt-6">
              find with me
            </h6>
            <div className="flex w-56 justify-evenly mt-7">
              <button
                className="w-14 h-14 rounded-md text-xl flex justify-center items-center"
                style={{ backgroundColor: "#212428" }}
              >
                <FiFacebook />
              </button>
              <button
                className="w-14 h-14 rounded-md text-xl flex justify-center items-center"
                style={{ backgroundColor: "#212428" }}
              >
                <FiTwitter />
              </button>
              <button
                style={{ backgroundColor: "#212428" }}
                className="w-14 h-14 rounded-md text-xl flex justify-center items-center"
              >
                <FiLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
