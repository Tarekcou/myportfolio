import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import tarek from "../../assets/tarek.jpeg";

const AboutMe = () => {
  return (
    <section className="bg-base-100 px-8 md:px-16 lg:px-24 py-16">
      <h2 className="mb-6 font-bold text-2xl text-center text-neutral md:text-3xl">
        About me
      </h2>

      <div className="flex lg:flex-row flex-col items-start gap-5">
        {/* Left Section: Profile Image */}
        <div className="md:flex justify-center items-center hidden w-full md:w-1/3">
          <div className="relative mx-auto lg:w-64 h-48 lg:h-64">
            <div className="absolute bg-primary/10 rounded-full w-full h-full"></div>
            <img
              src={tarek}
              alt="Ryan Davis"
              className="z-10 rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section: Info */}
        <div className="md:w-2/3">
          {/* Tabs */}

          <Tabs forceRenderTabPanel>
            <TabList className={"md:text-xl text-base font-bold text-gray-500"}>
              <Tab>Personal Info</Tab>
              <Tab>Educational Qualificaitons</Tab>
              {/* <Tab>Skills</Tab> */}
            </TabList>

            <TabPanel>
              <PersonalInfo />
            </TabPanel>

            <TabPanel>
              <Qualifications />
            </TabPanel>

            {/* <TabPanel>
              <Skills />
            </TabPanel> */}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
