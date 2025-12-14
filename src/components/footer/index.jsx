import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="max-w-305 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Upper Row: Logo + Contact + Social */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4">
        <svg width="150" height="40">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#13B0F5", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#CA24B4", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <text x="0" y="30" fontSize="30" fontWeight="bold" fill="url(#grad1)">
            Mr.Odil
          </text>
        </svg>

        {/* Contact Info */}
        <div className="flex space-x-4 mb-2 md:mb-0">
          <span>+998 90 094 00 83</span>
          <span>nurmamatovmirodil978@gmail.com</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/murodil01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://t.me/Murodil_N"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            <FaTelegram />
          </a>

          <a
            href="https://linkedin.com/in/murodil01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2" />

      {/* Lower Row: Links + Credits */}
      <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
        {/* Links */}
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a className="text-[17px] font-medium" href="#">
            Home
          </a>
          <a className="text-[17px] font-medium" href="/about">
            About
          </a>
          <a className="text-[17px] font-medium" href="#techno">
            Technologies
          </a>
          <a className="text-[17px] font-medium" href="#projects">
            Projects
          </a>
          <a className="text-[17px] font-medium" href="#contact">
            Contact
          </a>
        </div>

        {/* Credits */}
        <p className="text-center md:text-right text-[17px] font-medium">
          Designed and built by Murodil
        </p>
      </div>
    </div>
  );
};

export default Footer;
