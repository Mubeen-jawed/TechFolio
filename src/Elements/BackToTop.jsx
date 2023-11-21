import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // const handleScroll = () => {

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 700);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  // };

  return (
    showButton && (
      <div className="">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="w-12 h-12 bg-[#212428] flex justify-center items-center rounded-full btn-shadow fixed red-text text-xl md:bottom-12 bottom-4 z-10 sm:right-8 right-5 transition-all duration-300 opacity-100">
            <AiOutlineArrowUp />
          </button>
        </Link>
      </div>
    )
  );
};

export default BackToTop;
