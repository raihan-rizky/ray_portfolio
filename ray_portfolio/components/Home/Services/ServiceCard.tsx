import React from "react";
import Image from "next/image";
type Props = {
  icon: string;
  name: string;
  description: string;
};
const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div>
      <Image src={icon} alt="img" width={60} height={60} />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-cyan-400">
        {name}
      </h1>
      <p className="mt-6 text-white">{description}</p>
    </div>
  );
};

export default ServiceCard;
