import React from "react";

const Home = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="greeting_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* About Us Section 
      <section className="py-16 px-6 bg-[#e0e0e0] flex flex-col md:flex-row items-center justify-center">
        
        <div className="md:w-1/2 flex justify-center">
          <img
            src="about.jpg"
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

     
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-yellow-400">About Us</h2>
          <p className="mt-4 text-gray-400">
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
      </section> */}

      {/* About Us Section */}
      {/* About Us Section */}
      <section className="relative py-24 px-6 bg-white flex flex-col items-center justify-center min-h-screen">
        {/* Background Circles
        <div className="absolute top-0 left-[-50px] w-64 h-64 rounded-full bg-[#d5e5d8] opacity-70 z-0 transform translate-y-[30%] md:w-64 md:h-64 sm:w-48 sm:h-48 sm:left-[-30px]" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 md:w-64 md:h-64 sm:w-48 sm:h-48 sm:right-[-30px]" />
        <div className="absolute bottom-0 right-20 w-64 h-64 rounded-full bg-[#d9efec] opacity-70 z-0 md:w-64 md:h-64 sm:w-48 sm:h-48 sm:right-10 clip-path-circle" /> */}

        {/* Content */}
        <div className="max-w-3xl w-full text-center px-4">
          <h2 className="text-6xl font-semibold text-[#599960] md:text-5xl sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-black text-xl leading-8 sm:text-lg sm:leading-7">
            <span className="font-semibold" /> At Monolith Academy, we are
            dedicated to shaping the next generation of Graphic Designers, 3D
            Animators, and VFX Artists.
            <br /> Our industry-focused courses provide hands-on training,
            equipping students with the skills needed to thrive in the creative
            industry.
            <br /> To ensure excellence in education,
            <br /> we conduct comprehensive faculty training programs, keeping
            our instructors updated with the latest tools and trends.
            <br /> With a structured curriculum, cutting-edge facilities, and
            expert guidance, we bridge the gap between learning and real-world
            application.
            <br /> Join us and take your first step toward a successful career
            in digital design and animation!
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
