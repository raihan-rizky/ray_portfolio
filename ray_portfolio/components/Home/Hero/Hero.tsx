"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import ParticlesHero from "./ParticleBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col py-20"
    >
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Status Badge */}
        <div
          data-aos="fade-down"
          className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-cyan-300/90 font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Profile Image with Animated Ring */}
        <div data-aos="fade-up" className="relative group">
          {/* Animated gradient ring */}
          <div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-spin-slow"
            style={{ animationDuration: "3s", animationDirection: "reverse" }}
          />

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />

          <div className="relative p-1 rounded-full bg-gradient-to-r from-slate-900 to-slate-800">
            <Image
              src="/images/raihan_foto.JPG"
              alt="Raihan - AI Engineer"
              width={150}
              height={150}
              className="rounded-full border-2 border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 text-center font-bold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
            Building intelligent systems,
          </span>
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            robust models, and
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            data-driven solutions.
          </span>
        </h1>

        {/* Subtitle with Typewriter */}
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-6 text-base sm:text-xl md:text-2xl font-medium flex flex-wrap items-center justify-center gap-1 text-slate-300"
        >
          <span>Hi! I&apos;m</span>
          <span className="font-semibold text-white">Raihan</span>
          <span>, an enthusiastic</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
            <Typewriter
              options={{
                strings: [
                  "AI Engineer",
                  "Frontend Developer",
                  "Data Scientist",
                  "ML Specialist",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-1",
              }}
            />
          </span>
        </h2>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA - Glassmorphism */}
          <Link href="#project">
            <button className="group hover:cursor-pointer relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient-x" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

              {/* Glass overlay */}
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50" />

              <span className="relative flex items-center gap-2 text-white font-semibold text-lg ">
                <HiSparkles className="w-5 h-5" />
                Explore My Work
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link href="#contact">
            <button className="group px-8 py-4 hover:cursor-pointer rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="text-slate-300 group-hover:text-cyan-300 font-medium text-lg transition-colors duration-300">
                Get in Touch
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
