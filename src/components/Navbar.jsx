import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle link click (scroll to top + close mobile menu)
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto px-6 font-bold py-6 flex items-center justify-end">
        {/* Logo */}
        <Link
          to="/"
          className="absolute left-6 flex items-center"
          onClick={handleLinkClick}
        >
          <img src="/logo.png" alt="Monolith Academy Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link
            to="/"
            className="text-gray-800 relative group"
            onClick={handleLinkClick}
          >
            Home
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#f5979a] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-800 relative group"
            onClick={handleLinkClick}
          >
            About
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#f5979a] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/courses"
            className="text-gray-800 relative group"
            onClick={handleLinkClick}
          >
            Courses
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#f5979a] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 relative group"
            onClick={handleLinkClick}
          >
            Contact
            <span className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-[#f5979a] group-hover:w-full transition-all duration-300"></span>
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
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={handleLinkClick}
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
