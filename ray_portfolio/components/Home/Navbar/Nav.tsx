"use client";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.addEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? " bg-{#0f142ed9} shadow-md" : "fixed"
      }
     duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOQGO */}
        <div className="flex items-center space-x-2">
          <div className="w-40 h-30 flex items-center justify-center flex-col">
            <Image
              src="/images/raihan_logo.png"
              alt="logo"
              width={300}
              height={500}
            />
          </div>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex space-x-10 items-center">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-[#6E8CFB] text-[#e6eafa] font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Button */}
          <button
            className="px-5 py-2.5 md:px-8 md:py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all 
                        duration-300 text-white flex items-center space-x-2"
          >
            <BiDownload className="text-lg" />
            <Link href="https://drive.google.com/file/d/1AeUVuZ_wQpL6P8M2ZSO9zRxwksqMN9Iw/view?usp=sharing">
              <p>
                <span className="hidden md:inline-block">Download</span> CV
              </p>
            </Link>
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
