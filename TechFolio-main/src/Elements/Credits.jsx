import React from "react";

const Credits = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <div className="flex justify-center items-center w-full h-full pb-5 p-2">
        <p className="sm:text-xl text-sm text-gray-400">
          © {currentYear}. Developed by{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/mubeen-jawed-7b5062231/"
          >
            Mubeen jawed
          </a>
        </p>
      </div>
    </>
  );
};

export default Credits;
