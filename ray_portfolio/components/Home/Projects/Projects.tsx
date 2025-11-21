import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">Projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* First Project */}
        <div data-aos="fade-up">
          <Image
            src="/images/p1.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            Modern Finance Dashboard UI
          </h2>
          <p className="mt-2 font-medium text-gray-300"> Apps, UI/UX</p>
        </div>
        {/* 2nd Project */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Image
            src="/images/p2.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            Portfolio Website for Creatives
          </h2>
          <p className="mt-2 font-medium text-gray-300">Branding, Motion</p>
        </div>
        {/* 3rd Project */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white">
            Brand Identity for Startups
          </h2>
          <p className="mt-2 font-medium text-gray-300"> Branding , UI/UX</p>
        </div>
        {/* 4th Project */}
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
      </div>
    </div>
  );
};

export default Projects;
