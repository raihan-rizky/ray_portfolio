"use client";
import React from "react";
import {
  FaUpload,
  FaBrain,
  FaComments,
  FaBolt,
  FaShieldAlt,
  FaInfinity,
  FaHistory,
} from "react-icons/fa";
import { BsFileCode, BsLightningChargeFill } from "react-icons/bs";

const features = [
  {
    step: 1,
    icon: FaUpload,
    title: "Upload Your Code",
    description:
      "Drag & drop or click to upload any coding file — py, js, tsx, cpp, go, rs, and more. No size limits, no formatting required.",
    tags: ["Python", "JavaScript", "C++", "Java"],
    highlight: null,
  },
  {
    step: 2,
    icon: FaBrain,
    title: "AI Processes & Indexes",
    description:
      "The RAG engine intelligently chunks your code, creates embeddings, and indexes it for lightning-fast semantic search and retrieval.",
    tags: null,
    highlight: "Semantic chunking enabled",
  },
  {
    step: 3,
    icon: FaComments,
    title: "Ask & Get Answers",
    description:
      "Ask anything about your code in natural language. Get detailed, accurate explanations with context from your actual codebase.",
    tags: null,
    highlight: '"What does the handleSubmit function do?"',
  },
];

const benefits = [
  {
    icon: FaBolt,
    label: "Instant Processing",
  },
  {
    icon: FaShieldAlt,
    label: "Secure & Private",
  },
  {
    icon: FaInfinity,
    label: "Unlimited Uploads",
  },
  {
    icon: FaHistory,
    label: "Chat History Saved",
  },
];

const Feature = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f1419] to-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            data-aos="fade-up"
          >
            <BsFileCode className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              RAG-Powered
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Upload Any Code File.{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Get Instant Clarity.
            </span>
          </h2>

          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Codexa uses Retrieval-Augmented Generation to deeply understand your
            code and provide accurate, context-aware explanations.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1a2332] to-[#151b27] rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/30">
                {feature.step}
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Tags or Highlight */}
                {feature.tags && (
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {feature.highlight && (
                  <div className="px-4 py-3 rounded-lg bg-[#0d1117] border border-gray-800">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <BsLightningChargeFill className="w-3 h-3" />
                      <span>{feature.highlight}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Benefits Bar */}
        <div
          className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 py-6 px-8 rounded-2xl bg-[#1a2332]/60 border border-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <benefit.icon className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium whitespace-nowrap">
                {benefit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
