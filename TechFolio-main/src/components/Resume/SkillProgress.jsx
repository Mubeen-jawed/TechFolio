import React from "react";

function SkillsProgress(props) {
  const { skillName, progressMeter } = props;

  return (
    <div className="mt-7">
      <p className="uppercase mb-3 text-gray-400 font-secondary text-sm tracking-widest font-medium">
        {skillName}
      </p>
      <div className="h-[14px] w-full bg-[#212428] p-[3px] progress-bar-shadow rounded-xl">
        <div
          className={`rounded-2xl w-[${progressMeter}] h-full progress-bar-inner-color flex justify-end`}
        >
          <span className="text-gray-400 font-primary font-medium tracking-wider -mt-8">
            {progressMeter}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsProgress;
