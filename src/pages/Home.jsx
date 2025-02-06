import React, { useState, useEffect } from "react";

const Home = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Track if screen is small (sm: breakpoint)

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Update state based on screen width
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src={isMobile ? "mobile_greeting.mp4" : "greeting_1.mp4"}
              type="video/mp4"
            />
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
        <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 top-0 left-0 md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none"></div>
        <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 top-[30%] right-0 md:w-56 md:h-56 sm:w-20 sm:h-20 pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 z-0 bottom-0 right-[40%] md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none"></div>
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
    </div>
  );
};

export default Home;
