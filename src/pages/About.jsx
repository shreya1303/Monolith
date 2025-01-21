import React from "react";

const About = () => {
  return (
    <div className="relative py-24 px-6 bg-white flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-[-10%] w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 transform translate-y-[30%] md:w-48 md:h-48 sm:w-40 sm:h-40" />
      <div className="absolute top-0 right-[-10%] w-56 h-56 rounded-full bg-[#ffe6e9] opacity-70 z-0 md:w-48 md:h-48 sm:w-40 sm:h-40" />
      <div className="absolute bottom-0 right-[5%] w-56 h-56 rounded-full bg-[#d9efec] opacity-70 z-0 md:w-48 md:h-48 sm:w-40 sm:h-40" />

      {/* Content */}
      <div className="max-w-3xl w-full text-center px-4">
        <h2 className="text-6xl font-semibold text-[#599960] md:text-5xl sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-black text-xl leading-8 sm:text-lg sm:leading-7">
          At Monolith Academy, we are dedicated to shaping the next generation
          of Graphic Designers, 3D Animators, and VFX Artists. <br />
          Our industry-focused courses provide hands-on training, equipping
          students with the skills needed to thrive in the creative industry.{" "}
          <br />
          To ensure excellence in education, we conduct comprehensive faculty
          training programs, keeping our instructors updated with the latest
          tools and trends. <br />
          With a structured curriculum, cutting-edge facilities, and expert
          guidance, we bridge the gap between learning and real-world
          application. <br />
          Join us and take your first step toward a successful career in digital
          design and animation!
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-full overflow-hidden mt-20">
        <h3 className="text-2xl font-semibold mt-6 text-gray-700">
          Why Choose Us?
        </h3>
        <ul className="list-disc ml-6 mt-4 text-lg text-gray-600 space-y-2">
          <li>Experienced industry professionals as mentors.</li>
          <li>State-of-the-art labs equipped with the latest tools.</li>
          <li>Hands-on projects & real-world case studies.</li>
          <li>Placement assistance with top gaming & VFX studios.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
