import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state;
  console.log(project);

  return (
    <div className="space-y-3 bg-white shadow-md mx-auto mt-5 p-6 rounded-xl max-w-4xl">
      <h2 className="mb-4 font-bold text-2xl text-gray-900">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded-md w-full h-60 object-cover"
      />
      <p>
        <strong>Main Technology Stack:</strong> {project.techStack}
      </p>
      <p>
        <strong>Description:</strong> {project.description}
      </p>
      <p>
        <strong>Live Project:</strong>{" "}
        <a
          href={project.link}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.link}
        </a>
      </p>
      <p>
        <strong>GitHub Repository:</strong>{" "}
        <a
          href={project.githubLink}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.githubLink}
        </a>
      </p>
      <p>
        <strong>Challenges Faced:</strong> {project.challenges}
      </p>
      <p>
        <strong>Potential Improvements & Future Plans:</strong>{" "}
        {project.futurePlans}
      </p>
    </div>
  );
};

export default ProjectDetails;
