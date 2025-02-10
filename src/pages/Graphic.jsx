import React from "react";

const Graphic = () => {
  return (
    <div className="relative py-24 px-6 bg-white flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      {/* Background Circles */}
      <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 top-0 left-0 md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none"></div>
      <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 top-[30%] right-0 md:w-56 md:h-56 sm:w-20 sm:h-20 pointer-events-none"></div>
      <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 z-0 bottom-0 right-[40%] md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold z-10 relative text-center text-[#599960] mb-12 lg:text-5xl md:text-4xl sm:text-2xl">
          Graphic Design Course Curriculum
        </h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>

          {/* Timeline Events */}
          {[
            {
              title: "First Month: Foundations",
              topics: [
                "Design Principles",
                "Color Theory",
                "Typography Basics",
                "Visual Communication",
                "Elements of Designing",
              ],
            },
            {
              title: "Second Month: Software Skills",
              topics: [
                "Adobe Photoshop",
                "Photo Editing",
                "Layer Techniques",
                "Image Manipulation",
                "CorelDRAW",
                "Vector Graphics",
                "Design Creation",
                "Adobe Illustrator",
                "Vector Drawing",
                "Advanced Compositing",
                "UI/UX Design",
              ],
            },
            {
              title: "Third Month: Advanced Designing",
              topics: [
                "Publication Design",
                "Branding Concepts",
                "Layout Design",
                "Digital Illustration",
                "Professional Design Techniques",
                "Concept of Photography",
                "Advanced Camera Techniques",
                "Developing Your Style and Portfolio",
              ],
            },
            {
              title: "Fourth Month: Professional Preparation",
              topics: [
                "Portfolio Development",
                "Design Project",
                "Industry Workflow",
                "Printing Technologies",
                "Career Guidance",
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
                <h2 className="text-2xl font-semibold text-[#6ac2b2] mb-2 lg:text-xl md:text-lg sm:text-base">
                  {event.title}
                </h2>
                <ul className="list-none text-lg lg:text-base md:text-sm sm:text-xs text-left">
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

export default Graphic;
