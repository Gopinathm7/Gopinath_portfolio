import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "App Design",
    description: "Crafting visually stunning and user-friendly app interfaces.",
    details:
      "Specializing in UI/UX design for mobile apps, ensuring seamless usability and aesthetics with modern design principles.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Developing responsive and interactive user interfaces.",
    details:
      "Building dynamic and scalable web applications using HTML, CSS, JavaScript, and modern frameworks like React.",
  },
  {
    id: 3,
    title: "Web Design",
    description: "Designing elegant and intuitive digital experiences.",
    details:
      "Creating responsive layouts with pixel-perfect precision, focusing on usability, accessibility, and branding.",
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Transforming ideas into impactful visuals.",
    details:
      "Expert in branding, logo creation, marketing materials, and stunning visual content tailored for businesses.",
  },
  {
    id: 5,
    title: "Social Media Management",
    description: "Building a strong online presence for brands.",
    details:
      "Creating engaging content, analyzing audience insights, and managing brand reputation across social platforms.",
  },
];

const Service = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleDetails = (id) => {
    setActiveService((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F8FAFC] py-20 font-[Montserrat]"
      id="service"
    >
      {/* Floating Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-60 h-60 bg-blue-500 opacity-20 blur-[150px]"></div>
      <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-purple-600 opacity-20 blur-[150px]"></div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative bg-[#1E293B] p-6 rounded-2xl shadow-lg border border-gray-700 overflow-hidden group hover:shadow-blue-500/50 transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <motion.div
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                {service.id}
              </motion.div>

              <h3 className="mt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-300">{service.description}</p>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.p
                    className="mt-3 text-gray-400"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.details}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                onClick={() => toggleDetails(service.id)}
                className="mt-4 inline-block text-blue-400 hover:text-green-400 cursor-pointer transition-colors duration-300"
              >
                {activeService === service.id ? "Show Less" : "Read More"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
