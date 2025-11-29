import Image from "next/image";
import React from "react";
import Preview from "./Preview/Preview";
import Feature from "./Feature/Feature";
import Demo from "./Demo/Demo";

const Rasaku = () => {
  return (
    <div className="overflow-hidden h-100% pt-32 md:pt-46">
      <Preview />
      <Feature />
    </div>
  );
};

export default Rasaku;
