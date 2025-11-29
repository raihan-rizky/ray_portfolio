import React from "react";

const Demo = () => {
  return (
    <div className="pt-16 pb-16 w-[60%]  sm:w-[40%] mx-auto flex flex-col items-center">
      <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-bold text-center">
        {" "}
        See How It <span className="text-cyan-400">Works</span>
      </h1>
      <div className="pt-6 ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3rsECAjZ4Ck?si=jx4lPscqnR7U6V_Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Demo;
