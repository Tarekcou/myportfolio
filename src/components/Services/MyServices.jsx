import ServicesCard from "./ServicesCard";

// Main Component
const MyServices = () => {
  // Services Object
  const services = [
    {
      id: 1,
      icon: "📄", // Replace with an actual icon
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rem reprehenderit magnam molestiae dignissimos.",
    },
    {
      id: 2,
      icon: "💻", // Replace with an actual icon
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rem reprehenderit magnam molestiae dignissimos.",
    },
    {
      id: 3,
      icon: "💎", // Replace with an actual icon
      title: "App Development",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rem reprehenderit magnam molestiae dignissimos.",
    },
  ];
  return (
    <section className="py-12">
      <div className="mb-10 text-center">
        <h2 className="font-bold text-3xl text-gray-900">
          <span className="text-red-500">•</span> My Services
        </h2>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MyServices;
