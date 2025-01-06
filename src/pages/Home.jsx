import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import MyServices from "../components/Services/MyServices";
import LatestProjects from "../components/LatestProject/LatestProject";
import { Link } from "react-router-dom";
import Framer from "../components/FadeInSection";
import FadeInSection from "../components/FadeInSection";
import Skills from "../components/AboutMe/Skills";

const Home = () => {
  return (
    <div className="bg-base-100">
      <Hero />
      <AboutMe />
      <FadeInSection>
        <MyServices />
      </FadeInSection>
      <Skills />
      <LatestProjects />

      <div className="space-y-5 mx-auto py-10 w-6/12 text-center">
        <h1 className="font-bold text-4xl">
          Prepare to turn your ideas into reality? I am here to help
        </h1>
        <Link to="/contact" className="btn btn-primary">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
