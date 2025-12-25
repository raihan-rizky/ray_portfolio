"use client";
import React from "react";
import Image from "next/image";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaUsers,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const previewImages = [
  "/images/landing-page-1.png",
  "/images/landing-page-3.png",
  "/images/landing-page-4.png",
];

const audiences = [
  {
    icon: FaUserGraduate,
    title: "For Students",
    description:
      "Learn faster with AI-powered explanations that break down complex algorithms and data structures.",
  },
  {
    icon: FaLaptopCode,
    title: "For Developers",
    description:
      "Onboard to new codebases instantly. Understand legacy code without hunting down documentation.",
  },
  {
    icon: FaUsers,
    title: "For Teams",
    description:
      "Share knowledge effortlessly. Make your codebase accessible to every team member.",
  },
];

const highlights = [
  "No credit card required",
  "Works with popular programming language",
  "Instant responses powered by Llama 3.3",
];

const Preview = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            Understand{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Code Faster
            </span>
          </h2>

          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built for developers, students, and anyone who wants to understand
            code faster.
          </p>
        </div>

        {/* Infinite Scroll Carousel */}
        <div
          className="relative mb-20 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none" />

          {/* Carousel Track */}
          <div className="flex animate-scroll hover:pause-animation">
            {/* First set of images */}
            {previewImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-3">
                <div className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[16/10] rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl shadow-black/50 group">
                  <Image
                    src={src}
                    alt={`Codexa Preview ${index + 1}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {previewImages.map((src, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 px-3">
                <div className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[16/10] rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl shadow-black/50 group">
                  <Image
                    src={src}
                    alt={`Codexa Preview ${index + 1}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Cards */}
        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1a2332]/80 to-[#151b27]/80 rounded-2xl border border-gray-800 hover:border-emerald-500/50 p-8 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                  <audience.icon className="w-7 h-7 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div
          className="flex flex-wrap justify-center gap-6 lg:gap-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-300">
              <FaCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-sm font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preview;
