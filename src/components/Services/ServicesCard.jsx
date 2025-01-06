import React from "react";
import { Fade } from "react-awesome-reveal";

// Reusable Card Component
const ServicesCard = ({ icon, title, description }) => {
  return (
    <Fade className="" delay={1e1} cascade damping={0.2}>
      <div className="shadow-md p-6 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-red-500 p-3 rounded-full">
            <span className="font-bold text-white text-xl">{icon}</span>
          </div>
        </div>
        <h3 className="mb-3 font-semibold text-gray-900 text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Fade>
  );
};
export default ServicesCard;
