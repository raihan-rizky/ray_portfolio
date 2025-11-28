import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  school: string;
  date?: string;
  role?: React.ReactNode;
  position?: string;
};

const ResumeCard = ({ image, school, date, role, position }: Props) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className=" sm:w-14 sm:h-14 lg:w-22 lg:h-22 bg-blue-950 rounded-lg flex items-center justify-center flex-col mt-8 lg:mt-0">
          <Image src={image} alt="img" width={64} height={32} />
        </div>
        <div className="flex-1">
          {date && (
            <h1
              className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit
                sm:text-lg text-sm font-bold"
            >
              {date}
            </h1>
          )}
          <h1 className="text-gray-200 text-xl sm:text-2xl font-bold">
            {school}
          </h1>
          <p className="text-white text-base italic sm:text-lg pt-2 font-semibold">
            {position}
          </p>
          <div className="text-white text-sm sm:text-base pt-3">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
