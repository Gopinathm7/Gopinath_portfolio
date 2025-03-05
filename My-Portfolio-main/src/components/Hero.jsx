import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E2535] to-[#1E293B] text-[#F8FAFC] py-24 font-[Montserrat] overflow-hidden" id="hero">
      {/* Floating Blur Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-40 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-40 blur-[150px]"></div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-32 flex flex-col items-center text-center relative z-10">
        {/* Profile Image */}
        <img
          src={HeroImage}
          alt="Profile"
          className="mx-auto mb-6 w-48 h-48 rounded-full object-cover border-4 border-[#3B82F6] shadow-lg transform transition-transform duration-300 hover:scale-110"
        />
        
        <h1 className="text-6xl font-extrabold mb-8">
          <span className="text-white">I'm </span>
          <span className="text-[#A78BFA]">Gopinath</span>
          <span className="text-white">, UI/UX Designer</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          I am a passionate UI/UX Designer & Developer creating modern and engaging digital experiences.
        </p>
        
        {/* Buttons */}
        <div className="flex space-x-6">
          <motion.a
            href="#projects"
            className="px-6 py-3 text-lg font-bold text-white border-2 border-[#A78BFA] rounded-lg shadow-md transition-all relative overflow-hidden bg-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #A78BFA", backgroundColor: "rgba(167, 139, 250, 0.2)" }}
            whileTap={{ scale: 0.9, boxShadow: "0px 0px 30px #A78BFA" }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="#contact"
            className="px-6 py-3 text-lg font-bold text-white border-2 border-[#A78BFA] rounded-lg shadow-md transition-all relative overflow-hidden bg-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #A78BFA", backgroundColor: "rgba(167, 139, 250, 0.2)" }}
            whileTap={{ scale: 0.9, boxShadow: "0px 0px 30px #A78BFA" }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
