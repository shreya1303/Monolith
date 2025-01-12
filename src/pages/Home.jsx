import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#0c0c0c] text-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            Welcome to Monolith Academy
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            Master Graphic Design, VFX, and 3D Animation with expert-led
            courses.
          </p>
          <Link
            to="/courses"
            className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-md text-lg hover:bg-yellow-600 transition"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-[#0c0c0c] flex flex-col md:flex-row items-center justify-center">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="about.jpg"
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-yellow-400">About Us</h2>
          <p className="mt-4 text-gray-400">
            {/* Replace this text with the actual lines you want */}
            At Monolith Academy, we are dedicated to shaping the next generation
            of Graphic Designers, 3D Animators, and VFX Artists. Our
            industry-focused courses provide hands-on training, equipping
            students with the skills needed to thrive in the creative industry.
            To ensure excellence in education, we conduct comprehensive faculty
            training programs, keeping our instructors updated with the latest
            tools and trends. With a structured curriculum, cutting-edge
            facilities, and expert guidance, we bridge the gap between learning
            and real-world application. Join us and take your first step toward
            a successful career in digital design and animation!
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-6 bg-[#1a1a1a] flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center text-yellow-400">
          Courses We Provide
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <div className="p-6 bg-[#0c0c0c] shadow-lg rounded-lg text-center border border-yellow-500">
            <h3 className="text-2xl font-semibold text-yellow-300">
              Graphic Design
            </h3>
            <p className="mt-2 text-gray-400">
              Master the art of visual communication by creating stunning
              designs for digital and print media using industry-leading tools
              like Adobe Photoshop, Illustrator, and InDesign.
            </p>
          </div>
          <div className="p-6 bg-[#0c0c0c] shadow-lg rounded-lg text-center border border-yellow-500">
            <h3 className="text-2xl font-semibold text-yellow-300">
              3D Animation
            </h3>
            <p className="mt-2 text-gray-400">
              Master visual effects, 3D modeling, and animation using
              industry-standard tools.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
