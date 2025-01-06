// Reusable ProjectCard Component
const AllProjectCard = ({ image, title, description, tag }) => {
  return (
    <div className="shadow-lg p-4 rounded-lg">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-40 object-cover"
        />
        <span className="top-3 left-3 absolute bg-red-500 px-3 py-1 rounded-full font-bold text-white text-xs">
          {tag}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default AllProjectCard;
