"use client";
import React from "react";
import Image from "next/image";
import {
  FaRocket,
  FaBolt,
  FaMicrochip,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const previewImages = [
  "/images/landing-page-1.png",
  "/images/landing-page-3.png",
  "/images/landing-page-4.png",
];

const performanceStats = [
  {
    icon: FaBolt,
    metric: "96%",
    title: "Latency Reduction",
    description:
      "Reduced response time from 15s to <500ms using real-time LLM token streaming via SSE.",
    highlight: "15s → <500ms",
  },
  {
    icon: FaChartLine,
    metric: "95%+",
    title: "Relevance Accuracy",
    description:
      "Production RAG pipeline with LangChain and Llama-3.3-70B achieving high precision at 75% similarity threshold.",
    highlight: "pgvector powered",
  },
  {
    icon: FaMicrochip,
    metric: "<50ms",
    title: "Embedding Speed",
    description:
      "Local embedding generation using Xenova Transformers.js, eliminating external API costs entirely.",
    highlight: "Zero API costs",
  },
  {
    icon: FaRocket,
    metric: "42%",
    title: "Query Optimization",
    description:
      "Optimized with embedding model preloading and lightweight 384-dim vector embeddings.",
    highlight: "384-dim vectors",
  },
];

const highlights = [
  "Powered by Llama-3.3-70B",
  "Real-time SSE Streaming",
  "LangChain RAG Pipeline",
  "pgvector Similarity Search",
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

        {/* Performance Stats Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {performanceStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1a2332]/80 to-[#151b27]/80 rounded-2xl border border-gray-800 hover:border-emerald-500/50 p-6 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon & Metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {stat.description}
                </p>

                {/* Highlight Badge */}
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <BsLightningChargeFill className="w-3 h-3" />
                  {stat.highlight}
                </span>
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
