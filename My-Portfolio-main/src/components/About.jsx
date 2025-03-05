import React from "react";
import { motion } from "framer-motion";
import ResumeImage from "../assets/resume.jpg";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E2535] to-[#1E293B] text-[#F8FAFC] py-24 font-[Montserrat] overflow-hidden" id="about">
      {/* Floating Blur Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-40 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-40 blur-[150px]"></div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-32 flex flex-col items-center text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-[#A78BFA] mb-16">About Me</h2>
        <div className="flex flex-col items-center justify-center w-full space-y-12 md:space-y-0 md:space-x-16">
          <div className="flex-1 space-y-8 text-lg leading-relaxed text-left text-gray-300">
            <p>
              I create clean, user-friendly, and visually engaging designs. With expertise in UI/UX and graphic design, I specialize in wireframing, prototyping, and branding using tools like Figma and Adobe Creative Suite. My focus is on blending aesthetics with usability to craft impactful digital experiences.
            </p>
            {/* View Resume Button */}
            <div className="flex justify-center">
              <motion.a
                href={ResumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-bold text-[#A78BFA] border-2 border-[#A78BFA] rounded-lg shadow-md transition-all relative overflow-hidden bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #A78BFA", backgroundColor: "rgba(167, 139, 250, 0.2)" }}
                whileTap={{ scale: 0.9, boxShadow: "0px 0px 30px #A78BFA" }}
              >
                View Resume
              </motion.a>
            </div>
            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "HTML & CSS", percentage: 70, color: "purple-400" },
                { label: "JavaScript", percentage: 70, color: "blue-400" },
                { label: "UI/UX Design", percentage: 90, color: "indigo-400" },
                { label: "Graphic Design", percentage: 90, color: "violet-400" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-5 rounded-lg bg-[#1E293B] hover:bg-[#334155] transition transform hover:scale-110 border border-[#A78BFA] shadow-lg hover:shadow-[0_0_15px_#A78BFA]"
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
                        whileHover={{ stroke: "#A78BFA", strokeWidth: 12, boxShadow: "0px 0px 20px #A78BFA" }}
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
