import React, { useState } from "react";
import "./assets/style.css";
import "./assets/script";
import Navbar from "./Layouts/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Seperator from "./Elements/Seperator";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./Layouts/Footer";

import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  const [bodyClick, setBodyClick] = useState(false);
  const [onHireMeClick, setOnHireMeClick] = useState(true);

  const hireMeClick = (childStateValue) => {
    setOnHireMeClick(childStateValue);
  };

  return (
    <div
      className={`${!onHireMeClick ? "fixed " : null}`}
      onClick={() => setBodyClick(true)}
    >
      <Navbar bodyClick={bodyClick} onHireMeClick={hireMeClick} />
      <Home />
      <Seperator />
      <Features />
      <Seperator />
      <Resume />
      <Seperator />
      <Portfolio />
      <Seperator />
      <Testimonial />
      <Seperator />
      <Pricing />
      <Seperator />
      <Blog />
      <Seperator />
      <Footer />
      <Seperator />
      {/* <div className="flex justify-center items-center w-full h-full pb-5">
        <p className=" text-xl text-gray-400">© 2023. All rights reserved by Rainbow-Themes</p>
      </div> */}
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button
          className="w-12 h-12 flex justify-center items-center rounded-full btn-shadow fixed red-text text-xl md:bottom-12 bottom-4 z-10 sm:right-8 right-5"
          style={{ backgroundColor: "#212428" }}
        >
          <AiOutlineArrowUp />
        </button>
      </Link>
    </div>
  );
};

export default App;
