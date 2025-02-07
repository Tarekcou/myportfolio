import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
import { Link } from "react-router-dom";
// Projects Object
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
    image: bari, // Replace with actual image URL
    title: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, excepturi facilis.",
    tag: "Next JS",
  },
];

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
            <SwiperSlide key={project.id} className="border">
              <LatestProjectsCard
                image={project.image}
                title={project.title}
                description={project.description}
                tag={project.tag}
                link={project.link}
              />
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
