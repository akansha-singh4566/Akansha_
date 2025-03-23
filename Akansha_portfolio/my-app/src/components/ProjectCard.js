import React from "react";

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-500 px-3 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
