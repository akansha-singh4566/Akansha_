import React from "react";
import { projects } from "./ProjectsData"; // Ensure correct import
import ProjectCard from "./ProjectCard"; // Ensure correct import

const Projects = () => {
  return (
    <section className="bg-[#121212] text-white py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
        <p className="text-center mb-10">
          Explore my projects showcasing skills in web development, 3D modeling, and UI/UX design.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard/>
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
