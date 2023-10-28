import React from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  return (
    <div>
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

export default BackToTop;
