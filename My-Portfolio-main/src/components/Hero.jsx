import React, { useState } from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F8FAFC] text-center py-20">
      {/* Floating Blur Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-30 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-30 blur-[120px]"></div>

      {/* Profile Image */}
      <div className="relative">
        <img
          src={HeroImage}
          alt="Profile"
          className="mx-auto mb-6 w-48 h-48 rounded-full object-cover border-4 border-[#3B82F6] shadow-lg transform transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-5xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#A855F7]">
          Gopinath
        </span>
        , UI/UX Designer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I create seamless and visually stunning digital experiences.
      </p>

      {/* Call to Actions */}
      <div className="mt-8 flex justify-center space-x-6">
        <button className="bg-gradient-to-r from-[#3B82F6] to-[#A855F7] px-6 py-3 text-lg font-semibold rounded-full shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
          Contact Me
        </button>
        <button
          onClick={toggleModal}
          className="relative px-6 py-3 text-lg font-semibold rounded-full border border-[#3B82F6] text-[#3B82F6] transition duration-300 hover:bg-[#3B82F6] hover:text-white"
        >
          View Resume
        </button>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-[#1E293B] text-white p-6 rounded-lg w-3/4 max-w-4xl shadow-lg">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-white"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold mb-4">My Resume</h2>

            {/* Resume PDF */}
            <iframe
              src="/Gopinath Resume.pdf"
              width="100%"
              height="600px"
              title="Resume"
              className="border rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
