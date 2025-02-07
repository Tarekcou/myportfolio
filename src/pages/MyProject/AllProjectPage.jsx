import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllProjectCard from "./AllProjectCard";
import tutorly from "../../assets/tutorly.png";
import equi from "../../assets/equi.png";
import bari from "../../assets/bari.png";
// Projects Data
const projects = [
  {
    id: 1,
    image: tutorly, // Replace with actual image URL
    title: "Tutor Finding Website",
    description:
      "The Tutor Finding React Application is a dynamic web platform designed to connect students with qualified tutors efficiently. It allows students to search for tutors based on subjects, expertise, location, and availability. The application is built using React for a responsive user interface, with seamless navigation and real-time updates.",
    tag: "React JS",
    link: "https://online-tutor-2c707.firebaseapp.com/",
  },
  {
    id: 2,
    image: equi, // Replace with actual image URL
    title: "Equipment Sports Website",
    description:
      "The Sports Equipment Buying React Application is an intuitive e-commerce platform designed to help users easily find, compare, and purchase sports equipment from various categories. Built with React, the application ensures a fast, responsive, and engaging user experience across all devices.",
    tag: "React JS",
    link: "https://equi-sports-295ba.web.app/",
  },
  {
    id: 3,
    image: bari, // Replace with actual image URL
    title: "BariBazar",
    description:
      "The BariBazar is a React Application is a modern, feature-rich platform designed to streamline the process of buying, renting, and managing properties such as plots and flats. It offers distinct roles for Admins, Agents, and Users, providing a comprehensive real estate marketplace with secure transactions and an intuitive interface.",
    tag: "React JS",
    link: "baribazar-9589d.web.app",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200.png?text=Project+3", // Replace with actual image URL
    title: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, excepturi facilis.",
    tag: "Next JS",
  },
];

// MyProjects Component
const AllProjectPage = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Tracks selected tab index

  const categories = ["All Projects", "React JS", "Next JS", "Fullstack"];

  const getFilteredProjects = (category) =>
    category === "All Projects"
      ? projects
      : projects.filter((project) => project.category === category);
  return (
    <section className="mx-auto py-12 w-11/12 md:w-10/12">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-3xl text-gray-900">
            <span className="text-red-500">•</span> My Projects
          </h2>
        </div>

        {/* Tabs */}
        <Tabs>
          <TabList className="flex justify-center space-x-4 mb-6">
            {categories.map((category) => (
              <Tab
                key={category}
                className="hover:bg-red-500 border rounded-full text-gray-600 hover:text-white transition cursor-pointer btn btn-sm md:btn-wide md:btn-md"
                selectedClassName="bg-red-500 text-white"
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          {categories.map((category) => (
            <TabPanel key={category}>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredProjects(category).map((project) => (
                  <AllProjectCard
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tag={project.tag}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AllProjectPage;
