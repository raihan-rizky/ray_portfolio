"use client";
import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaGraduationCap,
  FaBrain,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { BsTwitterX, BsStars } from "react-icons/bs";
import { SiPhysics } from "react-icons/si";

const skills = [
  { icon: FaBrain, label: "AI/ML", color: "emerald" },
  { icon: FaCode, label: "Full Stack", color: "blue" },
  { icon: FaServer, label: "RAG Systems", color: "purple" },
];

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            data-aos="fade-up"
          >
            <BsStars className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              My Mission
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Building a world where anyone can{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              understand any code
            </span>
          </h2>

          <p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Codexa uses Conversational AI to help developers, students, and
            curious minds understand complex code instantly — make expert-level
            code explanations accessible to everyone, anytime.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Story */}
          <div data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I started Codexa because{" "}
                <span className="text-white font-medium">
                  understanding code is hard
                </span>
                . Whether you&apos;re a student learning to program, a developer
                joining a new team, or someone trying to understand a complex
                codebase, you deserve clarity.
              </p>

              <p>
                Traditional documentation is often outdated or incomplete.
                Senior developers are limited by time. Knowledge stays locked in
                codebases, unreachable to most who need it.
              </p>

              <p>
                <span className="text-emerald-400 font-semibold">
                  AI changes this.
                </span>{" "}
                With RAG-powered analysis, Codexa can now help thousands
                understand code at once. Upload any file, ask any question, get
                instant clarity.
              </p>

              <p>
                Today, Codexa is building the platform where code understanding
                is no longer a barrier. I&apos;m creating a world where learning
                from the best is no longer a privilege, it&apos;s a reality for
                everyone.
              </p>
            </div>
          </div>

          {/* Right - Founder Card */}
          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-[#1a2332] to-[#151b27] rounded-3xl border border-emerald-500/30 p-8 max-w-sm">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse opacity-50" />
                  <div className="absolute inset-1 bg-[#1a2332] rounded-full" />
                  <Image
                    src="/images/almet-me.png"
                    alt="Raihan Rizki Dwiputra"
                    fill
                    className="rounded-full object-cover p-1"
                  />
                </div>

                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
                    <FaRocket className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-400">
                      Founder & Creator
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-2xl font-bold text-white text-center mb-2">
                  Raihan Rizki Dwiputra
                </h4>

                {/* Title */}
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-6">
                  <FaGraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Physics Graduate • Tech Enthusiast</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center mb-6">
                  Combining{" "}
                  <span className="text-emerald-400 font-medium">
                    scientific thinking
                  </span>{" "}
                  with{" "}
                  <span className="text-emerald-400 font-medium">
                    software engineering
                  </span>{" "}
                  to make code understanding accessible to everyone.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium"
                    >
                      <skill.icon className="w-3 h-3" />
                      <span>{skill.label}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/raihan-rizky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/raihan-rizki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/raihan_rizky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-300"
                  >
                    <BsTwitterX className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
