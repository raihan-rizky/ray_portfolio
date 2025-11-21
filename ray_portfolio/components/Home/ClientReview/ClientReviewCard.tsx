import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  name: string;
  role: string;
};
const ClientReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="m-6">
      <div className="bg-white/5 rounded-md p-6 text-white">
        <Image
          src={image}
          alt="img"
          width={60}
          height={60}
          className="rounded-full"
        />
        <p className="mt-6 text-gray-200 font-medium">
          "Great work, delivered on time — highly recommend!"
        </p>
        <h2 className="mt-6 text-sm md:text-xl font-semibold text-cyan-300">
          {name}
        </h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
