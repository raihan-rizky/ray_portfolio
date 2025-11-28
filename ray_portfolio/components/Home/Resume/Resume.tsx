import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part */}
        <div>
          <h1 className="text-xl sm:text-4xl font-bold text-white ">
            My Project <span className="text-cyan-400">Experience</span>
          </h1>
          <div className="mt-10 text-justify">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <ResumeCard
                image="/images/bangkit.png"
                school="Bangkit Academy 2023 Batch 2"
                date="Aug 2023 - Jan 2023"
                role={
                  <>
                    Bangkit is a unique career readiness program led by Google
                    and delivered with support from industry experts from our
                    industry partners like Gojek, GoTo, and Google.
                    <br />
                    <ul className="list-disc pl-4">
                      <li>
                        Selected as one of the top candidates (top 7.5%) from
                        67,000+ applicants to participate in an intensive,
                        industry-led career acceleration program.
                      </li>
                      <li>
                        Optimized baseline model performance from 85.3% to
                        92.34% by implementing Keras Tuner for hyperparameter
                        optimization and utilizing robust data augmentation
                        techniques.
                      </li>
                      <li>
                        Reduced model storage requirements by 45% (20.9MB to
                        11.5MB) while maintaining accuracy, enabling efficient
                        low-latency inference on Android devices.
                      </li>
                    </ul>
                  </>
                }
                position="Machine Learning Cohort"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="200"
            >
              <ResumeCard
                image="/images/bdt.png"
                school="Baparekraf Digital Talent"
                date="Feb 2024 - Aug 2024"
                position="Mentee Web Developer"
                role={
                  <>
                    Baparekraf Digital Talent (BDT) is an intensive online
                    programming program at Dicoding, funded by the Ministry of
                    Tourism and Creative Economy (Kemenparekraf/Baparekraf)
                    <br />
                    <ul className="list-disc pl-4">
                      <li>
                        Completed over 12 intensive technical courses, including
                        Intermediate Web Development, through the Baparekraf
                        Digital Talent (BDT) curriculum at Dicoding, mastering
                        industry-standard software practices.
                      </li>
                      <li>
                        Secured a Top 3 Outstanding Capstone Project award out
                        of 95 participants, recognized for delivering an
                        innovative solution that drives environmental and
                        cultural sustainability.
                      </li>
                      <li>
                        Orchestrated a 3-person team to achieve 100% on-time
                        delivery of a responsive web platform, successfully
                        digitizing and promoting the cultural heritage of the
                        Banten region
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="400"
            >
              <ResumeCard
                image="/images/arduino.png"
                school="Electrospinning"
                position="Front-End Developer"
                date="Jun 2022 - Jul 2023"
                role={
                  <>
                    Electrospinning is a device that can produce nanofiber by
                    use electric force to draw charged threads of polymer
                    solutions or polymer melts up to fiber diameters in the
                    order of some hundred nanometers. This project held in
                    Laboratory of Material and Instrumental Physics
                    <br />
                    <ul className="list-disc pl-4">
                      <li>
                        Developed a fully interactive motion control system,
                        integrating a custom-designed Nextion GUI with Arduino
                        Mega to enable precise, code-free adjustments of stepper
                        motor parameters.
                      </li>
                      <li>
                        Engineered an embedded solution using Arduino Mega, CNC
                        Shield, and Stepper Drivers, featuring a UART-connected
                        Nextion Display interface designed with Adobe
                        Illustrator for high-fidelity user interaction.
                      </li>
                      <li>
                        Built and configured a CNC motor controller with a
                        custom touch interface, utilizing Nextion Editor and
                        Arduino IDE to bridge complex hardware logic with
                        user-friendly controls.
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>
        {/* Education Part */}
        <div>
          <h1 className="text-xl sm:text-4xl font-bold text-white text-justify">
            My <span className="text-cyan-400">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <ResumeCard
              image="/images/sma.png"
              school="SMAN 3 Kota Serang"
              date="Jan 2018 - Dec 2020"
            />
            <ResumeCard
              image="/images/ugm.png"
              school="Gadjah Mada University"
              date="Aug 2021 - Nov 2025"
              role={
                <>
                  <p className="italic">
                    Bachelor of Physics with GPA 3.52/4.00
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
