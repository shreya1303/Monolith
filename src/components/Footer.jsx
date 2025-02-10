import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic Year

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <footer className="bg-[#0E0E20] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <img
            src="/logo.png"
            alt="Monolith Academy Logo"
            className="h-16 mb-4 mx-auto sm:mx-0"
          />
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Monolith Academy is a premier institute for Graphic Design, 3D
            Animation, and VFX, shaping creative minds for the industry.
          </p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-4">
            <a
              href="https://www.instagram.com/cominggsoon.l?igsh=MXc1dnYxMzRpamZqcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/917276174216"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                to="/About"
                className="hover:text-white transition "
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Courses"
                className="hover:text-white transition"
                onClick={handleLinkClick}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:text-white transition"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> A8, Gatayri Apt., Bhande Plot
              chouk, Shakkardara , Nagpur. 440024
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+911234567890" className="hover:text-white">
                +917276174216
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:info@monolithacademy.com"
                className="hover:text-white"
              >
                monolithacademyofficial@gmail.com
              </a>
            </li>
            <li className="text-gray-400">Monday - Saturday: 11 AM - 7 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {currentYear} Monolith Academy - Developed by{" "}
        <span className="text-white-500">Shreya Mohod</span>
      </div>
    </footer>
  );
};

export default Footer;


<div className="relative">
  {/* Timeline Line shifted to the left */}
  <div className="absolute left-1/3 w-px h-full bg-gray-300 top-0 z-10"></div>
  {/* First Month */}
  <div className="flex items-center mb-12 relative">
    <div className="w-12 h-12 rounded-full bg-[#6ac2b2] text-white flex items-center justify-center font-semibold absolute left-1/3 transform -translate-x-1/2 z-20">
      1
    </div>
    <div className="ml-16 pl-8">
      <h2 className="text-3xl font-semibold text-[#6ac2b2] mb-4">
        First Month: Foundations
      </h2>
      <ul className="pl-8 text-left text-lg md:text-base space-y-2">
        <li>Design Principles</li>
        <li>Color Theory</li>
        <li>Typography Basics</li>
        <li>Visual Communication</li>
        <li>Elements of Designing</li>
      </ul>
    </div>
  </div>
  Second Month
  <div className="flex items-center mb-12 relative">
    <div className="w-12 h-12 rounded-full bg-[#6ac2b2] text-white flex items-center justify-center font-semibold absolute left-1/3 transform -translate-x-1/2 z-20">
      2
    </div>
    <div className="ml-16 pl-8">
      <h2 className="text-3xl font-semibold text-[#6ac2b2] mb-4">
        Second Month: Software Skills
      </h2>
      <ul className="pl-8 text-left text-lg md:text-base space-y-2">
        <li>Adobe Photoshop</li>
        <li>Photo Editing</li>
        <li>Layer Techniques</li>
        <li>Image Manipulation</li>
        <li>CorelDRAW</li>
        <li>Vector Graphics</li>
        <li>Design Creation</li>
        <li>Adobe Illustrator</li>
        <li>Vector Drawing</li>
        <li>Advanced Compositing</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  </div>
  {/* Third Month */}
  <div className="flex items-center mb-12 relative">
    <div className="w-12 h-12 rounded-full bg-[#6ac2b2] text-white flex items-center justify-center font-semibold absolute left-1/3 transform -translate-x-1/2 z-20">
      3
    </div>
    <div className="ml-16 pl-8">
      <h2 className="text-3xl font-semibold text-[#6ac2b2] mb-4">
        Third Month: Advanced Designing
      </h2>
      <ul className="pl-8 text-left text-lg md:text-base space-y-2">
        <li>Publication Design</li>
        <li>Branding Concepts</li>
        <li>Layout Design</li>
        <li>Digital Illustration</li>
        <li>Professional Design Techniques</li>
        <li>Concept of Photography</li>
        <li>Advanced Camera Techniques</li>
        <li>Developing Your Style and Portfolio</li>
      </ul>
    </div>
  </div>
  {/* Fourth Month */}
  <div className="flex items-center relative">
    <div className="w-12 h-12 rounded-full bg-[#6ac2b2] text-white flex items-center justify-center font-semibold absolute left-1/3 transform -translate-x-1/2 z-20">
      4
    </div>
    <div className="ml-16 pl-8">
      <h2 className="text-3xl font-semibold text-[#6ac2b2] mb-4">
        Fourth Month: Professional Preparation
      </h2>
      <ul className="pl-8 text-left text-lg md:text-base space-y-2">
        <li>Portfolio Development</li>
        <li>Design Project</li>
        <li>Industry Workflow</li>
        <li>Printing Technologies</li>
        <li>Career Guidance</li>
      </ul>
    </div>
  </div>
</div>;