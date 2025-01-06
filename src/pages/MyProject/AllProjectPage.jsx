import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllProjectCard from "./AllProjectCard";

// Projects Data
const projects = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200.png?text=Project+1",
    title: "Nexa Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tag: "React JS",
    category: "React JS",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200.png?text=Project+2",
    title: "Solstice Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tag: "React JS",
    category: "React JS",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200.png?text=Project+3",
    title: "Lumina Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tag: "Next JS",
    category: "Next JS",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200.png?text=Project+4",
    title: "Fullstack App",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tag: "Fullstack",
    category: "Fullstack",
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
