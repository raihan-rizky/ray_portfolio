import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="project" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">Projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* First Project */}
        <div data-aos="fade-up">
          <Image
            src="/images/rasaku-app.gif"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            RASAKU - Indonesian Culinary Classifier
          </h2>
          <p className="mt-2 font-medium text-gray-300">
            {" "}
            Apps, UI/UX, Machine Learning, Tensorflow, Android Studio, Python,
            Keras
          </p>
        </div>
        {/* 2nd Project */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Image
            src="/images/banten-panglipur.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            Banten Panglipur - Cultural Preservation Website
          </h2>
          <p className="mt-2 font-medium text-gray-300">
            Web Development, Javascript, React, Tailwind CSS, Node.js, Vite
          </p>
        </div>
        {/* 3rd Project */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Image
            src="/images/portfolio-elspin.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            Electrospinning Interface - Nextion Device
          </h2>
          <p className="mt-2 font-medium text-gray-300">
            UI/UX, Front-End Development, Arduino, HMI Interface
          </p>
        </div>
        {/* 4th Project 
        <div data-aos="fade-up" data-aos-delay="600">
          <Image
            src="/images/p4.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            SaaS Dashboard Development
          </h2>
          <p className="mt-2 font-medium text-gray-300">Apps , UI/UX</p>
        </div>
        */}
      </div>
    </div>
  );
};

export default Projects;
