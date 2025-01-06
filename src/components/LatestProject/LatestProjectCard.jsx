// Reusable ProjectCard Component
const LatestProjectsCard = ({ image, title, description, tag, link }) => {
  return (
    <div className="shadow-lg p-4 pb-8 rounded-lg cursor-pointer">
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
      <p className="mt-2 font-semibold text-blue-500 text-gray-600 underline">
        {link}
      </p>
    </div>
  );
};
export default LatestProjectsCard;
