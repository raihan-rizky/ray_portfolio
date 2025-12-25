"use client";
import React from "react";
import Image from "next/image";
import { FaCode, FaRocket, FaExternalLinkAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Demo = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            data-aos="fade-up"
          >
            <FaCode className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Live Demo
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            See Codexa{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              in Action
            </span>
          </h2>

          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Watch how Codexa transforms complex code into clear, understandable
            explanations with just a few clicks.
          </p>
        </div>

        {/* Demo Preview */}
        <div
          className="relative max-w-5xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl transform scale-105" />

          {/* Browser Window Frame */}
          <div className="relative bg-[#0d1117] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Browser Header */}
            <div className="flex items-center gap-4 px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#0d1117] border border-gray-700 text-sm">
                  <span className="text-gray-500">🔒</span>
                  <span className="text-gray-400">codexa-ai.site</span>
                </div>
              </div>
              <a
                href="https://codexa-ai.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-400 text-xs font-medium transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                <span>Open App</span>
              </a>
            </div>

            {/* Demo GIF */}
            <div className="relative aspect-video">
              <Image
                src="/images/codexa-rag-demo.gif"
                alt="Codexa Demo"
                fill
                className="object-cover"
                unoptimized
              />

              {/* Play Overlay - Hidden by default, shown when gif is loading */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Feature Tags */}
          <div
            className="absolute -right-4 top-1/4 hidden lg:flex flex-col gap-3"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="px-4 py-2 rounded-lg bg-[#1a2332] border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              🚀 RAG Powered
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#1a2332] border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              ⚡ Real-time Analysis
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#1a2332] border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              💬 Natural Language
            </div>
          </div>

          <div
            className="absolute -left-4 bottom-1/4 hidden lg:flex flex-col gap-3"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="px-4 py-2 rounded-lg bg-[#1a2332] border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              🔐 Secure & Private
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://codexa-ai.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
          >
            <FaRocket className="w-5 h-5" />
            <span>Try Codexa Now</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demo;
