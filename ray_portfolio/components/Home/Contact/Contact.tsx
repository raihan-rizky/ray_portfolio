import Link from "next/link";
import React from "react";
import { BiEnvelope, BiMap } from "react-icons/bi";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let's discuss how I can help you achive
            your goals.
          </p>
          {/* info */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BsTelephone className="w-9 h-9 text-cyan-400" />
              <Link href="https://api.whatsapp.com/send/?phone=%2B6281991029210&text&type=phone_number&app_absent=0">
                <p className="text-xl font-bold text-gray-400 hover:underline hover:text-cyan-400 cursor-pointer transition-all duration-300">
                  +6281991029210
                </p>
              </Link>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-400" />
              <Link href="mailto:raihanrizki70@gmail.com">
                <p className="text-xl font-bold text-gray-400 hover:underline hover:text-cyan-400 cursor-pointer transition-all duration-300">
                  raihanrizki70@gmail.com
                </p>
              </Link>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-400" />
              <p className="text-xl font-bold text-gray-400">
                Banten, Indonesia
              </p>
            </div>
          </div>
          {/* Social icon */}
          <div className="flex items-center mt-8 space-x-3">
            <Link href="https://www.linkedin.com/in/raihan-rizki">
              <div
                className="w-14 h-14 bg-blue-950 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-[#0077B5] transition-all duration-300"
              >
                <FaLinkedin className="text-white w-6 h-6" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/raihnrz/">
              <div
                className="w-14 h-14 bg-blue-950 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-[#C13584] transition-all duration-300"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </div>
            </Link>
            <Link href="https://github.com/raihan-rizky">
              <div
                className="w-14 h-14 bg-blue-950 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-black transition-all duration-300"
              >
                <FaGithub className="text-white w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
        {/* Form */}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 h-40 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <button
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all 
          duration-300 cursor-pointer text-white rounded-lg "
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
