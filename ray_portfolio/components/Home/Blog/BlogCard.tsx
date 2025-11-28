import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  image: string;
  hyperlink: string;
  date: string;
  title: string;
  keywords: string[];
};
const BlogCard = ({ image, date, title, keywords, hyperlink }: Props) => {
  return (
    <div className="m-6">
      <Image
        src={image}
        alt="img"
        width={500}
        height={500}
        className="object-cover"
      />
      <p className="mt-2 text-gray-300 text-base sm:text-lg">{date}</p>
      <Link href={hyperlink}>
        <h2 className="mt-6 text-lg sm:text-xl font-semibold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300">
          {title}
        </h2>
      </Link>
      <div>
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="inline-block bg-blue-950 text-white text-medium font-semibold px-4 py-2 rounded-full mr-2 mt-4"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
