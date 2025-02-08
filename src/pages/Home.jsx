import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import MyServices from "../components/Services/MyServices";
import LatestProjects from "../components/LatestProject/LatestProject";
import { Link } from "react-router-dom";
import Framer from "../components/FadeInSection";
import FadeInSection from "../components/FadeInSection";
import Skills from "../components/AboutMe/Skills";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className="bg-base-100">
      <Hero />
      <AboutMe />

      <Skills />
      <LatestProjects />
      <FadeInSection>
        <MyServices />
      </FadeInSection>
      <div className="space-y-2 mx-auto py-5 text-center">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
