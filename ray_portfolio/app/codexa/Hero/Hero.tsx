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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-400/15 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
              data-aos="fade-up"
            >
              <BsLightningChargeFill className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">
                Powered by Llama 3.3 70B
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              My Very First{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  End-to-end AI Project.
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full opacity-50" />
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Type your code and receive clear, instant explanations powered by
              AI, designed to break down complex logic into simple and
              understandable insights.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                href="https://codeexplain-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                <span>Try for Free</span>
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/raihan-rizky/codexa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-700 hover:border-emerald-500/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-emerald-500/10"
              >
                <FaPlay className="w-4 h-4" />
                <span>View Source</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  10+
                </div>
                <div className="text-sm text-gray-500">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  RAG
                </div>
                <div className="text-sm text-gray-500">Powered Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  ∞
                </div>
                <div className="text-sm text-gray-500">Code Uploads</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Preview Mockup */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            {/* Main Code Window */}
            <div className="relative bg-[#1a1f2e] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 text-xs text-gray-500">fibonacci.py</div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
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

            {/* AI Response Card */}
            <div
              className="absolute -bottom-8 -right-4 sm:right-0 lg:-right-8 w-[280px] sm:w-[320px] bg-[#1a2332] rounded-xl border border-emerald-500/30 shadow-xl p-4"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <FaRobot className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Codexa</div>
                  <div className="text-xs text-emerald-400">AI Response</div>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-emerald-400 font-medium">
                  Recursive Function:
                </span>{" "}
                This is a recursive implementation of the Fibonacci sequence. It
                returns the nth Fibonacci number by recursively calling
                itself...
              </p>
              <div className="flex gap-2 mt-3">
                <span className="px-2 py-1 text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  recursion
                </span>
                <span className="px-2 py-1 text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  algorithm
                </span>
                <span className="px-2 py-1 text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  O(2^n)
                </span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-2xl" />
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
