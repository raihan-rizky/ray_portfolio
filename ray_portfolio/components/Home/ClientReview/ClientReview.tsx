"use client";
import Image from "next/image";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive: any = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white ">
        Kind Words From Satisfied <br />
        <span className="text-cyan-300">Clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel responsive={responsive} ssr infinite>
          <ClientReviewCard
            image="/images/c1.png"
            name="Jenny Doe"
            role="CEO of Racism"
          />
          <ClientReviewCard
            image="/images/c2.png"
            name="Jane Doe"
            role="CEO of ZZZ"
          />
          <ClientReviewCard image="/images/c3.png" name="John Doe" role="CEO" />
          <ClientReviewCard image="/images/c4.png" name="Ray Doe" role="CEO" />
          <ClientReviewCard image="/images/c5.png" name="Neo Doe" role="CEO" />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
