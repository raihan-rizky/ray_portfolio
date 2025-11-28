import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        About <span className="text-cyan-400">Me</span>
      </h1>
      <div className="w-[80%]  sm:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* about me paragraph */}
        <div className="text-base text-justify mt-10 pt-12 lg:pr-20">
          <p className="text-white">
            Hi! I am an undergraduate physics student at Gadjah Mada University.
            I am a highly motivated and energetic individual who thrives in a
            team- oriented environment. <br /> <br />
            My insatiable curiosity about the world of data is a driving force
            in my academic pursuits, as I believe that data can unveil a wealth
            of insightful information that we may not have even considered
            before. <br /> <br /> Despite coming from a non-IT background, my
            enthusiasm for the world of data is unparalleled. I am particularly
            drawn to the field of machine learning, recognizing its potential to
            unlock new possibilities and transform how I understand and
            interpret data. I am eager to contribute to the advancements of
            machine learning and its potential to revolutionize various
            industries.
          </p>
        </div>
        {/* Image of Me */}
        <div className="relative pt-16">
          <Image
            src="/images/me.png"
            alt="My Image"
            width={360}
            height={640}
            className="lg:shadow-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
