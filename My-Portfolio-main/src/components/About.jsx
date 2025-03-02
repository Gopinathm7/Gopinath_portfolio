import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <section className="bg-[#0D0D0D] text-white py-24 font-[Montserrat]" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold text-[#00FFC2] mb-16">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-12 md:space-y-0 md:space-x-16">
          <motion.img
            src={AboutImage}
            alt="Profile"
            className="w-80 h-[450px] rounded-2xl object-cover shadow-xl border-4 border-[#00FFC2]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          />
          <div className="flex-1 space-y-8 text-lg leading-relaxed text-left text-gray-300">
            <p>
              I create clean, user-friendly, and visually engaging designs. With expertise in UI/UX and graphic design, I specialize in wireframing, prototyping, and branding using tools like Figma and Adobe Creative Suite. My focus is on blending aesthetics with usability to craft impactful digital experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-8">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "10+", label: "Projects Completed" },
                { value: "7+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="w-36 text-center p-5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition transform hover:scale-110 border border-[#00FFC2]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3 className="text-4xl font-bold text-[#00FFC2]">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "HTML & CSS", percentage: 90, color: "yellow-400" },
                { label: "JavaScript", percentage: 70, color: "red-400" },
                { label: "UI/UX Design", percentage: 90, color: "green-400" },
                { label: "Graphic Design", percentage: 90, color: "blue-400" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition transform hover:scale-110 border border-[#00FFC2]"
                >
                  <span className="font-semibold text-white mb-2">{skill.label}</span>
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-700 stroke-current"
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                      />
                      <motion.circle
                        className={`text-${skill.color} stroke-current`}
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray="251.2"
                        strokeDashoffset="251.2"
                        animate={{ strokeDashoffset: 251.2 - (251.2 * skill.percentage) / 100 }}
                        transition={{ duration: 1.2 }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                      {skill.percentage}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;