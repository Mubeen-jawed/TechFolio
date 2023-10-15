import React, { useState } from "react";
import ResumeBox from "./ResumeBox";
import SkillsProgress from "./SkillProgress";

function Resume() {
  const [handleSkills, setHandleSkills] = useState(false);
  const [handleExperience, setHandleExperience] = useState(true);
  const [handleEducation, setHandleEducation] = useState(false);

  return (
    <div id="resume" className="xl:m-auto max-w-7xl px-5">
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
          7+ Years Of Experience
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          My Resume
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col btn-shadow w-full justify-between items-center font-primary text-lg">
        <button
          onClick={() => {
            setHandleSkills(false);
            setHandleExperience(true);
            setHandleEducation(false);
          }}
          className={`${
            handleExperience ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
        >
          Experience
        </button>
        <button
          onClick={() => {
            setHandleSkills(true);
            setHandleExperience(false);
            setHandleEducation(false);
          }}
          className={`${
            handleSkills ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
        >
          Professional Skills
        </button>

        <button
          onClick={() => {
            setHandleSkills(false);
            setHandleExperience(false);
            setHandleEducation(true);
          }}
          className={`${
            handleEducation ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-white`}
        >
          Education
        </button>
      </div>

      <div
        className={`${
          handleSkills || handleEducation || handleExperience
            ? "opacity-100"
            : ""
        } sm:flex-row w-full flex-col flex transition-all duration-1000 opacity-0`}
      >
        <div className={`sm:pr-7 mt-10 sm:w-1/2 w-full`}>
          {/* {handleSkills ? null : ( */}
          <div className="w-full flex flex-col mb-14 items-start justify-center">
            <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-light font-primary text-center">
              {handleSkills ? "features" : "2019 - 2023"}
            </h6>
            <h1 className="lg:text-4xl text-2xl font-secondary text-gray-300 font-bold mt-3">
              {handleSkills
                ? "Frontend Skills"
                : handleExperience
                ? "Job Experience"
                : handleEducation
                ? "Education Qaulity"
                : null}
            </h1>
          </div>
          {/* )} */}

          {handleEducation || handleExperience ? (
            <div>
              <ResumeBox
                title={
                  handleExperience
                    ? "MERN Developer"
                    : handleEducation
                    ? "City College"
                    : null
                }
                subTitle={
                  handleExperience
                    ? "Zaavia"
                    : handleEducation
                    ? "High School (2023 - present)"
                    : null
                }
                BtnText={
                  handleExperience ? "Pak" : handleEducation ? "A Grade" : null
                }
                description={
                  handleExperience
                    ? "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    : handleEducation
                    ? "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    : null
                }
              />
              <ResumeBox
                title={handleEducation ? "Al Badar Higher Secondary" : null}
                subTitle={
                  handleEducation ? "Middle School (2019 - 2022)" : null
                }
                BtnText={handleEducation ? "A Grade" : null}
                description={
                  handleEducation
                    ? "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    : null
                }
              />
            </div>
          ) : (
            <div className="w-full sm:pr-7">
              <SkillsProgress progressMeter="100%" skillName="Html" />
              <SkillsProgress progressMeter="90%" skillName="Css" />
              <SkillsProgress progressMeter="82%" skillName="Bootstrap" />
              <SkillsProgress progressMeter="91%" skillName="TailwindCss" />
              <SkillsProgress progressMeter="78%" skillName="Javascript" />
              <SkillsProgress progressMeter="76%" skillName="JQuery" />
              <SkillsProgress progressMeter="67%" skillName="React" />
            </div>
          )}
        </div>

        <div className={`sm:pl-7 mt-10 sm:w-1/2 w-full`}>
          <div className="w-full flex flex-col mb-14 items-start justify-center">
            <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-light font-primary text-center">
              {handleSkills ? "features" : "2023 - 2024"}
            </h6>
            <h1 className="lg:text-4xl text-2xl font-secondary text-gray-300 font-bold mt-3">
              {handleSkills
                ? "Backend Skills"
                : handleExperience
                ? "Freelance Experience"
                : handleEducation
                ? "Certifications"
                : null}
            </h1>
          </div>

          {handleEducation || handleExperience ? (
            <div>
              <ResumeBox
                title={
                  handleExperience
                    ? "Frontend Developer"
                    : handleEducation
                    ? "Web Development Course"
                    : null
                }
                subTitle={
                  handleExperience
                    ? "Upwork (2023 - present)"
                    : handleEducation
                    ? "Udemy | The App Brewry (2022 - 2023)"
                    : null
                }
                BtnText={
                  handleExperience
                    ? "5/5"
                    : handleEducation
                    ? "Completed"
                    : null
                }
                description={
                  handleExperience
                    ? "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    : handleEducation
                    ? "Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    : null
                }
              />
              <ResumeBox
                title={handleEducation ? "Python Certification" : null}
                subTitle={
                  handleEducation
                    ? "Coursera | University Of Michigan (2022 - 2022)"
                    : null
                }
                BtnText={handleEducation ? "Certified" : null}
                description={
                  handleEducation
                    ? "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    : null
                }
              />
            </div>
          ) : (
            <div className="sm:pr-7">
              <SkillsProgress progressMeter="62%" skillName="Node JS" />
              <SkillsProgress progressMeter="74%" skillName="Express" />
              <SkillsProgress progressMeter="81%" skillName="MongoDB" />
              <SkillsProgress progressMeter="83%" skillName="API" />
              {/* <SkillsProgress progressMeter="95%" skillName="MongoDB" /> */}
              {/* <SkillsProgress progressMeter="95%" skillName="MongoDB" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
