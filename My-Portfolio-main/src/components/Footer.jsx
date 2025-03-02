import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F8FAFC] py-12">
      {/* Floating Glow Effects */}
      <div className="absolute -top-10 left-1/4 w-60 h-60 bg-blue-500 opacity-20 blur-[150px]"></div>
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-purple-600 opacity-20 blur-[150px]"></div>

      {/* Container */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        {/* Title & Tagline */}
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Gopinath
        </h3>
        <p className="mt-2 text-gray-400 italic">
          Made with pixels, passion, and a little bit of caffeine.
        </p>

        {/* Subscribe Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 
            rounded-full font-semibold text-lg shadow-lg transition-all duration-300 
            hover:scale-105 hover:shadow-blue-500/50"
          >
            Subscribe for Updates
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/the_pinet_services?igsh=bTE3OXNyNDBxbXg5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/in/gopinath-m-095b15282/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Gopinathm7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-2xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright & Links */}
        <div className="mt-6 border-t border-gray-600 pt-4 flex flex-col md:flex-row 
        justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gopinath. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
