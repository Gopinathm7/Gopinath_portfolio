import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Website Design",
    technologies: "Vs code",
    image: employeeMSImage,
    github: "https://zadastar.com/",
  },
  {
    id: 2,
    name: "Car App",
    technologies: "Figma",
    image: bookMSImage,
    github: "https://github.com/Gopinathm7/Car-App.git",
  },
  {
    id: 3,
    name: "Other Projects",
    technologies: "Figma , Vscode , Coreldraw , Canva",
    image: employeeMSImage,
    github: "https://github.com/Gopinathm7",
  },
];

const Projects = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F8FAFC] py-20 font-[Montserrat]" id="projects">
      {/* Floating Background Glow Effects */}
      <div className="absolute -top-10 left-1/4 w-60 h-60 bg-blue-500 opacity-20 blur-[150px]"></div>
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-purple-600 opacity-20 blur-[150px]"></div>

      {/* Container */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-gray-700 overflow-hidden group hover:shadow-blue-500/50 transition-transform duration-300 hover:scale-105"
            
            >
              {/* Image Animation */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
              />

              <h3 className="text-2xl font-bold mt-4 mb-2 text-gray-300">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

            
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition-transform duration-300 hover:scale-105"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
