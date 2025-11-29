import React from "react";
import Image from "next/image";

const Preview = () => {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto lg:w-[38%]">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
        RASAKU App <span className="text-cyan-400">Preview</span>
      </h1>
      <div className="relative pt-6">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg lg:w-[720px] lg:h-[480px]"
          src="https://www.youtube.com/embed/3rsECAjZ4Ck?si=jx4lPscqnR7U6V_Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p className="pt-6 text-justify text-white font-semibold">
        In the current era of globalization, the prestige of traditional food is
        declining every year with the entry of foreign products. Through Rasaku,
        discover the richness of Indonesia's culinary heritage. <br />
        <br />
        Experience the power of precise food classification and explore a vast
        library of authentic recipes with our advanced features.
      </p>
    </div>
  );
};

export default Preview;
