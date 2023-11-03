// Spinner.js
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader size={60} color="#f9004d" />
    </div>
  );
};

export default Spinner;
