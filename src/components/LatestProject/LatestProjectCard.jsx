// Reusable ProjectCard Component
const LatestProjectsCard = ({ image, title, description, tag, link }) => {
  return (
    <div className="shadow-lg p-4 pb-8 rounded-lg min-h-[400px] cursor-pointer">
      <div className="relative border h-[200px]">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-full object-cover"
        />
        <span className="top-3 left-3 absolute bg-red-500 px-3 py-1 rounded-full font-bold text-white text-xs">
          {tag}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 font-semibold text-blue-500 underline">{link}</p>
    </div>
  );
};
export default LatestProjectsCard;
