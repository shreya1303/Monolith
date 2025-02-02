import React, { useState, useEffect } from "react";

const Home = () => {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      if (aboutUsSection) {
        const rect = aboutUsSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsOpaque(true);
        } else {
          setIsOpaque(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {/* About Us Section */}
      <section
        id="about-us"
        className={`relative py-24 px-6 flex flex-col items-center justify-center min-h-screen transition-all duration-700 ease-in-out ${
          isOpaque
            ? "bg-white opacity-100"
            : "bg-gradient-to-b from-transparent to-white opacity-90"
        }`}
      >
        {/* Background Circles */}
        <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 top-0 left-0 md:w-52 md:h-52 sm:w-26 sm:h-26 pointer-events-none"></div>
        <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 top-[30%] right-0 md:w-56 md:h-56 sm:w-22 sm:h-22 pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 z-0 bottom-0 right-[40%] md:w-52 md:h-52 sm:w-24 sm:h-24 pointer-events-none"></div>
        {/* Content */}
        <div className="relative max-w-3xl w-full text-center px-4 z-10">
          <h2 className="text-6xl font-bold text-[#599960] md:text-4xl sm:text-2xl">
            About Us
          </h2>
          <p className="mt-4 text-black text-xl leading-8 md:text-lg sm:text-base sm:leading-7">
            At Monolith Academy, we are dedicated to shaping the next generation
            of Graphic Designers, 3D Animators, and VFX Artists. <br /> Our
            industry-focused courses provide hands-on training, equipping
            students with the skills needed to thrive in the creative industry.
            <br /> To ensure excellence in education, we conduct comprehensive
            faculty training programs, keeping our instructors updated with the
            latest tools and trends. <br /> With a structured curriculum,
            cutting-edge facilities, and expert guidance, we bridge the gap
            between learning and real-world application. <br /> Join us and take
            your first step toward a successful career in digital design and
            animation!
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-28 px-6 bg-white relative">
        <h2 className="text-4xl font-bold text-center text-[#599960] md:text-4xl sm:text-2xl">
          Courses We Provide
        </h2>

        {/* Cards */}
        <div className="mt-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto relative z-10">
          {/* Card 1 */}
          <div className="relative p-8 bg-[#ffffff] shadow-xl rounded-lg border border-[#f5979a] hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#f5979a] rounded-full flex items-center justify-center shadow-lg">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/paint-palette.png"
                alt="Graphic Design Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#f5979a] mt-8">
              Graphic Design
            </h3>
            <p className="mt-4 text-gray-700">
              Master the art of visual communication by creating stunning
              designs for digital and print media using industry-leading tools
              like Adobe Photoshop, Illustrator, and InDesign.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative p-8 bg-[#ffffff] shadow-xl rounded-lg border border-[#f5979a] hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#f5979a] rounded-full flex items-center justify-center shadow-lg">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/3d-glasses.png"
                alt="3D Animation Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#f5979a] mt-8">
              3D Animation
            </h3>
            <p className="mt-4 text-gray-700">
              Bring your imagination to life by mastering the art of 3D
              animation with powerful tools like Blender, Maya, and Cinema 4D,
              creating captivating visual experiences.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-[#f5979a] text-white font-bold text-lg rounded-full shadow-md hover:bg-[#fc888c] transition-colors duration-300">
            Details
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
