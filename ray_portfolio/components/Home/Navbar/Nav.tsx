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
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="relative group w-40 h-30 flex items-center justify-center flex-col">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/20 to-purple-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <Image
              src="/images/raihan_logo.png"
              alt="logo"
              width={300}
              height={500}
              className="relative transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
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
          {/* CV Button with Animated Gradient on Hover */}
          <Link
            href="https://drive.google.com/file/d/1ESrESGdvRb7cn8CA0hHy7ZGCCDTv0mL_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-lg p-[2px] overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Animated gradient - only visible on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300" />
            <span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-50 group-hover:animate-spin-slow transition-opacity duration-300"
              style={{ animationDirection: "reverse", animationDuration: "4s" }}
            />

            {/* Button content */}
            <span className="relative flex items-center space-x-2 px-5 py-2.5 md:px-8 md:py-3.5 text-sm bg-blue-800 group-hover:bg-blue-900 rounded-lg text-white transition-all duration-300">
              <BiDownload className="text-lg" />
              <span>
                <span className="hidden md:inline-block">Download</span> CV
              </span>
            </span>
          </Link>
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
