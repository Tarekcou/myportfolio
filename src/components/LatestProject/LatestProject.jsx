import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./LatestProject.css";
import LatestProjectsCard from "./LatestProjectCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import tutorly from "../../assets/tutorly.JPG";
import equi from "../../assets/equi.png";
import tutorly from "../../assets/tutorly.png";
import bari from "../../assets/bari.png";
import career from "../../assets/career.png";
import { Link } from "react-router-dom";
import AllProjectCard from "../../pages/MyProject/AllProjectCard";
// Projects Object
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
    title: "Real Estate Marketplace",
    image: bari, // Replace with actual image URL
    title: "BariBazar",
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

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LatestProjects = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center gap-4 mx-auto w-10/12">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-3xl text-gray-900">
            <span className="text-red-500">•</span> Latest Projects
          </h2>
          <p className="text-gray-600">
            Here are some latest projects using react, tailwind, and Nodejs as
            Backend
          </p>
        </div>

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          // slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1240: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="">
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <AllProjectCard project={project} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          to="/allProjects"
          className="bg-red-500 hover:bg-red-600 mt-4 px-6 py-2 rounded-full text-white"
        >
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default LatestProjects;
