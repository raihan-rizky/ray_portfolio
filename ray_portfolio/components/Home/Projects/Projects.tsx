import Image from "next/image";
import Link from "next/link";
import React from "react";
const skills_bangkit = [
  "App",
  "UI/UX",
  "Machine Learning",
  "Tensorflow",
  "Android Studio",
  "Python",
  "Keras",
];
const skills_codexa = [
  "RAG",
  "UI/UX",
  "Chatbot",
  "PostgreSQL",
  "React",
  "Node.js",
  "Vite",
  "Artificial Intelligence",
  "LangChain",
];
const skills_bdt = [
  "Web Development",
  "Javascript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Vite",
];
const skills_electrospinning = [
  "UI/UX",
  "Front-End Development",
  "Arduino",
  "HMI Interface",
];
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
          <Link href="/codexa">
            <Image
              src="/images/codexa-landing.gif"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />

            <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white  hover:text-cyan-400 cursor-pointer transition-all duration-300">
              Codexa - AI Code Explainer
            </h2>
          </Link>
          <p className="mt-2 font-medium text-gray-300 text-justify">
            Codexa is an AI code explainer that leverages RAG capabilities to
            help users understand code faster with its hybrid processing.
          </p>
          <div>
            {skills_codexa.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-blue-950 text-white text-medium font-semibold px-4 py-2 rounded-full mr-2 mt-4"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div data-aos="fade-up">
          <Link href="/rasaku">
            <Image
              src="/images/rasaku-app.gif"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />

            <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white  hover:text-cyan-400 cursor-pointer transition-all duration-300">
              RASAKU - Indonesian Culinary Classifier
            </h2>
          </Link>
          <p className="mt-2 font-medium text-gray-300 text-justify">
            RASAKU is an app that transforms your camera into a gateway for
            Nusantara’s gastronomy, using AI to classify Indonesian dishes and
            providing you with their cultural identity, historical background,
            and its recipe in seconds.
          </p>
          <div>
            {skills_bangkit.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-blue-950 text-white text-medium font-semibold px-4 py-2 rounded-full mr-2 mt-4"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* 2nd Project */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Link href="https://github.com/raihan-rizky/banten-panglipur">
            <Image
              src="/images/banten-panglipur.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />

            <h2 className="mt-4 text-xl font-semibold sm:text-2xl text-white hover:text-cyan-400 cursor-pointer transition-all duration-300">
              Banten Panglipur - Cultural Preservation Website
            </h2>
          </Link>
          <p className="mt-2 font-medium text-gray-300 text-justify">
            Banten Panglipur is an online platform that aims to showcase,
            preserve, and promote the rich cultural heritage of the Banten
            region in Indonesia. The website serves as a comprehensive resource
            for information and insights into the unique traditions, customs,
            arts, cuisine, and history of the Banten people.
          </p>
          <div>
            {skills_bdt.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-blue-950 text-white text-medium font-semibold px-4 py-2 rounded-full mr-2 mt-4"
              >
                {skill}
              </span>
            ))}
          </div>
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
          <p className="mt-2 font-medium text-gray-300 text-justify">
            Electrospinning is a device that can produce nanofiber by use
            electric force to draw charged threads of polymer solutions or
            polymer melts up to fiber diameters in the order of some hundred
            nanometers. This project held in Laboratory of Material and
            Instrumental Physics
          </p>
          <div>
            {skills_electrospinning.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-blue-950 text-white text-medium font-semibold px-4 py-2 rounded-full mr-2 mt-4"
              >
                {skill}
              </span>
            ))}
          </div>
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
