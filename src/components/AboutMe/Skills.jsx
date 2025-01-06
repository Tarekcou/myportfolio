import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const categories = [
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "Daisy UI",
        "React",
        "Redux",
        "NextJS",
        "Express",
        "Node.js",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["C", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "UI/UX Design",
      skills: ["Figma", "Pixso"],
    },
  ];

  return (
    <div className="mx-auto p-8 w-10/12 text-white">
      <h1 className="my-5 font-bold text-3xl text-black text-center">
        Skills I have
      </h1>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-purple-500 pt-4 border-t-4"
          >
            <h3 className="mb-4 font-semibold text-lg">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 shadow-lg px-4 py-2 rounded-lg font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
