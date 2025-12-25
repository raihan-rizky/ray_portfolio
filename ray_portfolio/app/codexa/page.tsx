import React from "react";
import Hero from "./Hero/Hero";
import Preview from "./Preview/Preview";
import Demo from "./Demo/Demo";
import Feature from "./Feature/Feature";

const Codexa = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Preview />
      {/* <Feature /> */}
      <Demo />
      {/* <About /> */}
    </div>
  );
};

export default Codexa;
