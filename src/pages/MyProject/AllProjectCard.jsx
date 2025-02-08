import { Link } from "react-router-dom";

// Reusable ProjectCard Component
const AllProjectCard = ({ project }) => {
  // console.log(project);
  return (
    <div className="bg-white shadow-lg p-4 border rounded-xl">
      <div className="relative border h-[200px]">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-full object-cover"
        />
        <span className="top-3 left-3 absolute bg-red-500 px-3 py-1 rounded-full font-bold text-white text-xs">
          {project.tag}
        </span>
      </div>
      <h3 className="mt-4 font-bold text-gray-800 text-xl">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <Link
        state={project}
        to={`/projects/${project.id}`}
        className="bg-blue-500 hover:bg-blue-600 my-2 px-4 py-2 rounded-xl text-white transition btn"
      >
        Details
      </Link>
    </div>
  );
};

export default AllProjectCard;
