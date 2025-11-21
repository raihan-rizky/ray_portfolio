import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part */}
        <div>
          <h1 className="text-xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-300">Experience</span>
          </h1>
          <div className="mt-10">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <ResumeCard Icon={FaCodepen} role="Full-stack Developer" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="200"
            >
              <ResumeCard Icon={FaReact} role="Front-End Developer" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="400"
            >
              <ResumeCard Icon={BsDatabase} role="Backend Developer" />
            </div>
          </div>
        </div>
        {/* Education Part */}
        <div>
          <h1 className="text-xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-300">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <ResumeCard
              Icon={BiBadge}
              role="SMAN 3 Kota Serang"
              date="Jan 2023 - Dec 2024"
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelor in Physics"
              date="Jan 2021 - Jan 2025"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in Digital Marketing"
              date="Jan 2021 - Dec 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
