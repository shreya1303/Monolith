import React from "react";


const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 py-16">
      {/* Top Section - Heading and Images */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-full overflow-hidden">
        {/* Left: Bold Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 leading-tight max-w-lg">
          Empowering Creatives with World-Class Training!
        </h1>

        {/* Right: Two Small Images */}
        <div className="flex space-x-4 mt-6 lg:mt-0">
          <img
            src="small1.jpg"
            alt="Creative Work"
            className="w-40 h-32 rounded-lg shadow-lg"
          />
          <img
            src="small1.jpg"
            alt="VFX Training"
            className="w-40 h-32 rounded-lg shadow-lg"
          />
          <img
            src="small1.jpg"
            alt="VFX Training"
            className="w-40 h-32 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-12 gap-8">
        {/* Left: Large Image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="large.jpg"
            alt="Monolith Academy"
            className="w-full h-[400px] object-cover object-top rounded-lg shadow-2xl"
          />
        </div>

        {/* Right: About Us Text */}
        <div className="lg:w-1/2 text-gray-800">
          <h2 className="text-3xl font-semibold text-gray-700">
            About Monolith Academy
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Welcome to Monolith Academy, a premier destination for aspiring
            creatives looking to master the art of Graphic Design, 3D Animation,
            and VFX. Our institute is dedicated to nurturing talent, equipping
            students with industry-relevant skills, and empowering them to excel
            in the dynamic world of digital design and visual effects.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            At Monolith Academy, we believe that quality education is the
            foundation of professional success. Our structured curriculum,
            state-of-the-art infrastructure, and hands-on training approach
            create an immersive learning experience.
          </p>
        </div>
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
