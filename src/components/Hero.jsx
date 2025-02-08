import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import tarek from "../assets/tarek.jpeg";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure the PDF is in the public folder
    link.download = "My_Resume.pdf";
    link.click();
  };
  return (
    <section className="flex lg:flex-row flex-col justify-center items-center mx-auto py-10 md:py-16 w-10/12">
      {/* Left Section */}
      <div className="flex-1 text-center lg:text-left">
        <p className="mb-2 font-bold text-primary text-sm uppercase tracking-wide">
          Frontend Developer(React)
        </p>

        <Fade
          className="mb-4 font-extrabold text-4xl md:text-5xl"
          delay={1e3}
          cascade
          damping={0.2}
        >
          <span>
            Hello, I am <br />
          </span>
          <p>Md. Shoriful Islam Tarek</p>
        </Fade>

        <p className="mb-6 text-base-content text-sm md:text-base">
          Brief description with insights into myself, my vocational journey,
          and what I engage in professionally.
        </p>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 rounded-xl text-white btn btn-md"
          >
            Contact me
          </Link>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white transition duration-300 btn btn-md btn-neutral btn-outline"
          >
            <Download className="w-5 h-5" />
            Resume
          </button>
        </div>

        <div className="flex gap-5 mt-5 text-gray-600">
          <a
            href="https://github.com/Tarekcou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl hover:text-black cursor-pointer" />
          </a>
          <a
            href="https://wa.me/01818424256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl hover:text-green-500 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/shoriful_tarek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
          </a>

          <a
            href="https://www.facebook.com/Tarekict/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-xl hover:text-blue-600 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-1 justify-center lg:justify-end mt-12 lg:mt-0">
        {/* Background Circle */}
        <div className="absolute bg-primary/10 rounded-full w-[300px] lg:w-[400px] h-[300px] lg:h-[400px]"></div>

        {/* Image */}
        <img
          src={tarek}
          alt="Ryan Davis"
          className="relative top-2 right-10 z-10 rounded-full w-[200px] lg:w-[300px]"
        />

        {/* Info Boxes */}
        <div className="top-16 right-0 z-20 absolute flex flex-col gap-6 lg:gap-8 transform translate-x-16">
          <div className="bg-base-200 shadow-md p-4 rounded-lg text-center">
            <p className="font-bold text-primary text-xl">2</p>
            <p className="text-sm">Years of Experience</p>
          </div>
          {/* <div className="left-0 z-30 absolute bg-base-200 shadow-md p-4 rounded-lg text-center">
            <p className="font-bold text-primary text-xl">5k</p>
            <p className="text-sm">Finished Projects</p>
          </div> */}
          <div className="bg-base-200 shadow-md p-4 rounded-lg text-center">
            <p className="font-bold text-primary text-xl">7k</p>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
