import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#F8FAFC] py-20" id="contact">
      {/* Floating Glow Effects */}
      <div className="absolute -top-10 left-1/4 w-60 h-60 bg-blue-500 opacity-20 blur-[150px]"></div>
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 bg-purple-600 opacity-20 blur-[150px]"></div>

      {/* Container */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-400">
              I'm open to discussing web development projects, collaborations, or partnership opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 text-xl" />
                <a href="mailto:Gopinathm04@outlook.com" className="text-gray-300 hover:text-blue-400 transition duration-300">
                  Gopinathm04@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 text-xl" />
                <span className="text-gray-300">+91 82200 73478</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkedAlt className="text-blue-400 text-xl" />
                <span className="text-gray-300">10/58, Alandur, Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full bg-[#1E293B] p-8 rounded-2xl shadow-lg border border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
                  rows="5"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
