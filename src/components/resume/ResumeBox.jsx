import React from "react";

function ResumeBox(props) {
  const { title, subTitle, BtnText, description } = props;
  // let titleLen = title?.length <= 0;

  console.log(title?.length);

  let render;

  if (title?.length == undefined) {
    render = false;
  } else {
    render = true;
  }

  return render ? (
    <div id="resume" className="btn-shadow feature-box mb-10 rounded-md">
      <div className="py-11 px-10 h-full">
        <div className="flex justify-between lg:items-center pb-6 lg:flex-row flex-col">
          <div className="mb-2">
            <h3 className="text-xl text-gray-300 mb-1">{title}</h3>
            <small className="text-gray-400 text-sm">{subTitle}</small>
          </div>

          <div>
            <button className="capitalize red-text px-4 rounded-md text-[10px] py-2 btn-shadow sm:font-light font-primary sm:text-sm tracking-wider lg:mt-0 mt-2">
              {BtnText}
            </button>
          </div>
        </div>

        <div className="border border-gray-900 mb-4"></div>

        <div>
          <p className=" text-gray-500 font-primary font-normal text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

export default ResumeBox;
