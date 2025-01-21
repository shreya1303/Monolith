import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff] fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Monolith Academy Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600 relative">
            Home
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 relative"
          >
            About
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500"></span>
          </Link>
          <Link
            to="/courses"
            className="text-gray-800 hover:text-blue-600 relative"
          >
            Courses
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-600 relative"
          >
            Contact
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="text-center py-4">
            <li>
              <Link
                to="/"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
