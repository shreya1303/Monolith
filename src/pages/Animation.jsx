import React from "react";

const Animation = () => {
  return (
    <div className="relative py-24 px-6 bg-white flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      {/* Background Circles */}
      <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 top-0 left-0 md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none"></div>
      <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 top-[30%] right-0 md:w-56 md:h-56 sm:w-20 sm:h-20 pointer-events-none"></div>
      <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 z-0 bottom-0 right-[40%] md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold text-[#599960] mb-12 md:text-4xl sm:text-2xl">
          3D Animation Course Curriculum
        </h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>

          {/* Timeline Events */}
          {[
            {
              title: "First Two Months: Animation Fundamentals",
              topics: [
                "Animation Principles",
                "2D Animation Techniques",
                "Character Design",
                "Storyboarding",
                "Basic Motion Graphics",
              ],
            },
            {
              title: "Next Three Months: 3D Software",
              topics: [
                "Autodesk Maya",
                "3D Modeling",
                "Rigging",
                "Texturing",
                "Blender",
                "Advanced 3D Techniques",
                "Rendering",
                "Cinema 4D",
                "Motion Design",
                "Advanced Animation",
              ],
            },
            {
              title: "Final Three Months: Professional Skills",
              topics: [
                "Visual Effects",
                "Animation Production",
                "Industry Software",
                "Portfolio Creation",
                "Internship Preparation",
                "Final Animation Project",
              ],
            },
          ].map((event, index) => (
            <div
              key={index}
              className={`relative w-full flex items-center justify-between mb-16 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Timeline Circle */}
              <div className="w-6 h-6 bg-[#6ac2b2] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

              {/* Event Content */}
              <div className="w-5/12 bg-white shadow-lg p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-[#6ac2b2] mb-2 md:text-xl sm:text-lg">
                  {event.title}
                </h2>
                <ul className="list-none text-lg md:text-base sm:text-xs text-left">
                  {event.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-500 before:rounded-full"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animation;
