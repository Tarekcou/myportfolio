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

const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-center items-center mx-auto py-10 md:py-16 w-10/12">
      {/* Left Section */}
      <div className="flex-1 text-center lg:text-left">
        <p className="mb-2 font-bold text-primary text-sm uppercase tracking-wide">
          Web Developer
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
          <Link to="/contact" className="rounded-full btn btn-md btn-primary">
            Contact me
          </Link>
          <button className="rounded-full btn btn-md btn-neutral btn-outline">
            Download CV
          </button>
        </div>

        <div className="flex gap-5 mt-5 text-gray-600">
          <FaFacebookF />
          <FaGithub />
          <FaInstagram />
          <FaWhatsapp />
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
