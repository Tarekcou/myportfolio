import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllProjectCard from "./AllProjectCard";
import tutorly from "../../assets/tutorly.png";
import equi from "../../assets/equi.png";
import bari from "../../assets/bari.png";
import career from "../../assets/career.png";
// Projects Data

const projects = [
  {
    id: 1,
    title: "Tutor Finding Website",
    image: tutorly, // Replace with actual image URL
    techStack: "React, Firebase, Tailwind CSS",
    description:
      "The Tutor Finding React Application is a dynamic web platform designed to connect students with qualified tutors efficiently. It allows students to search for tutors based on subjects, expertise, location, and availability. The application is built using React for a responsive user interface, with seamless navigation and real-time updates.",
    link: "https://online-tutor-2c707.firebaseapp.com/",
    githubLink: "https://github.com/example/tutor-client",
    challenges:
      "Managing real-time updates and optimizing search functionality.",
    futurePlans:
      "Adding AI-based tutor recommendations and advanced analytics.",
    tag: ["React JS", "Fullstack"], // Use an array for multiple tags
  },
  {
    id: 2,
    title: "Sports Equipment Store",
    image: equi, // Replace with actual image URL
    techStack: "React, Node.js, MongoDB, Tailwind CSS",
    description:
      "The Sports Equipment Buying React Application is an intuitive e-commerce platform designed to help users easily find, compare, and purchase sports equipment from various categories. Built with React, the application ensures a fast, responsive, and engaging user experience across all devices.",
    tag: ["React JS", "Fullstack"], // Use an array for multiple tags
    link: "https://equi-sports-295ba.web.app/",
    githubLink: "https://github.com/example/sports-client",
    challenges: "Integrating secure payment gateways and managing inventory.",
    futurePlans:
      "Implementing AI-powered product recommendations and loyalty programs.",
  },
  {
    id: 3,
    title: "BariBazar (Real Estate Marketplace)",
    image: bari, // Replace with actual image URL
    description:
      "The BariBazar is a React Application is a modern, feature-rich platform designed to streamline the process of buying, renting, and managing properties such as plots and flats. It offers distinct roles for Admins, Agents, and Users, providing a comprehensive real estate marketplace with secure transactions and an intuitive interface.",
    link: "baribazar-9589d.web.app",
    techStack: "React, Express, PostgreSQL, Tailwind CSS",
    githubLink: "https://github.com/example/realestate-client",
    challenges: "Handling complex user roles and ensuring data security.",
    futurePlans: "Adding virtual tours and advanced property analytics.",
    tag: ["React JS", "Fullstack"], // Use an array for multiple tags
  },
  {
    id: 4,
    title: "Career Counseling",
    image: career, // Replace with actual image URL
    description:
      "This is a web application that helps users navigate their career choices through personalized guidance, assessments, and resources. Built with React for a dynamic, interactive, and responsive user interface, it allows career counselors and individuals to access tools and information seamlessly.",
    link: "https://career-counseling-65178.web.app/",
    techStack: "React, Express, PostgreSQL, Tailwind CSS",
    githubLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-Tarekcou",
    challenges: "Handling complex user roles and ensuring data security.",
    futurePlans: "Needs to be add backend.",
    tag: ["React JS"], // Use an array for multiple tags
  },
];
// MyProjects Component
const AllProjectPage = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Tracks selected tab index

  const categories = ["All Projects", "React JS", "Next JS", "Fullstack"];

  const getFilteredProjects = (category) => {
    return category === "All Projects"
      ? projects
      : projects.filter((project) => project.tag.includes(category));
  };
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
                  <AllProjectCard key={project.id} project={project} />
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
