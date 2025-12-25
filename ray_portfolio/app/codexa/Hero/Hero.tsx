"use client";
import React from "react";
import Image from "next/image";
import { BsArrowRight, BsLightningChargeFill } from "react-icons/bs";
import { FaPlay, FaCode, FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />

        {/* Gradient Orbs - Smaller on mobile */}
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-40 sm:w-72 h-40 sm:h-72 bg-emerald-500/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-10 sm:-right-20 w-52 sm:w-96 h-52 sm:h-96 bg-emerald-400/15 rounded-full blur-[100px] sm:blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/5 rounded-full blur-[150px] sm:blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 sm:mb-8"
              data-aos="fade-up"
            >
              <BsLightningChargeFill className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-emerald-400">
                Powered by Llama 3.3 70B
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              My Very First{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  End-to-end AI Project:{" "}
                </span>
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                  Codexa.
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full opacity-50 animate-gradient-x" />
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I set out to build an efficient, budget-friendly AI app, but the
              journey taught me a crucial lesson: balancing performance and cost
              is rarely simple—it requires navigating deep technical trade-offs.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Try for Free - Glow Effect */}
              <a
                href="https://codexa-ai.site/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-[0_0_20px_rgba(16,185,129,0.5),0_0_40px_rgba(16,185,129,0.3),0_0_60px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6),0_0_50px_rgba(16,185,129,0.4),0_0_75px_rgba(16,185,129,0.2)]"
              >
                <span>Try Here</span>
                <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/raihan-rizky/codexa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 hover:border-emerald-500/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-emerald-500/10 text-sm sm:text-base"
              >
                <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>View Source</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-12 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  6+
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Languages Supported
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  RAG
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Powered Analysis
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Preview Mockup */}
          <div
            className="relative mt-8 lg:mt-0 px-2 sm:px-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Main Code Window */}
            <div className="relative bg-[#1a1f2e] rounded-xl sm:rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#0d1117] border-b border-gray-800">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-3 sm:ml-4 text-[10px] sm:text-xs text-gray-500">
                  fibonacci.py
                </div>
              </div>

              {/* Code Content */}
              <div className="p-3 sm:p-4 md:p-6 font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-emerald-400">fibonacci</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-400">n</span>
                    <span className="text-gray-400">)</span>{" "}
                    <span className="text-gray-400">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">if</span>{" "}
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-400">n</span>{" "}
                    <span className="text-gray-400">&lt;=</span>{" "}
                    <span className="text-blue-400">1</span>
                    <span className="text-gray-400">)</span>{" "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-orange-400">n</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-emerald-400">fibonacci</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-400">n</span>
                    <span className="text-gray-400">-</span>
                    <span className="text-blue-400">1</span>
                    <span className="text-gray-400">)</span>{" "}
                    <span className="text-gray-400">+</span>{" "}
                    <span className="text-emerald-400">fibonacci</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-400">n</span>
                    <span className="text-gray-400">-</span>
                    <span className="text-blue-400">2</span>
                    <span className="text-gray-400">)</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    <span className="text-gray-400">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* AI Response Card - Responsive positioning */}
            <div
              className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-8 left-0 right-0 sm:left-auto sm:-right-4 md:right-0 lg:-right-8 w-full sm:w-[280px] md:w-[320px] bg-[#1a2332] rounded-xl border border-emerald-500/30 shadow-xl p-3 sm:p-4 mx-auto sm:mx-0"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <FaRobot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Codexa
                  </div>
                  <div className="text-[10px] sm:text-xs text-emerald-400">
                    AI Response
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
                <span className="text-emerald-400 font-medium">
                  Recursive Function:
                </span>{" "}
                This is a recursive implementation of the Fibonacci sequence. It
                returns the nth Fibonacci number by recursively calling
                itself...
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  recursion
                </span>
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  algorithm
                </span>
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  O(2^n)
                </span>
              </div>
            </div>

            {/* Floating Elements - Hidden on very small screens */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-xl" />
            <div className="hidden sm:block absolute -bottom-4 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
