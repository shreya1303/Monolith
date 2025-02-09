import React from "react";

const courses = [
  {
    title: "Graphic Design",
    description:
      "Master the art of visual communication by creating stunning designs for digital and print media using industry-leading tools like Adobe Photoshop, Illustrator, and InDesign.",
    image: "/course1.png", // Add correct image path
  },
  {
    title: "3D Animation",
    description:
      "Bring your imagination to life by mastering the art of 3D animation with powerful tools like Blender, Maya, and Cinema 4D, creating captivating visual experiences.",
    image: "/course2.png", // Add correct image path
  },
];

const Courses = () => {
  return (
    <div className="relative max-w-6xl py-24 mx-auto px-6 text-gray-800 min-h-screen overflow-hidden">
      {/* Background Circles (Set z-0 to keep them behind content) */}
      <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 top-0 left-0 md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none z-0"></div>
      <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 top-[30%] right-0 md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none z-0"></div>
      <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 bottom-[5%] right-[30%] md:w-52 md:h-52 sm:w-20 sm:h-20 pointer-events-none z-0"></div>

      {/* Courses Heading (Set z-10 to stay above circles) */}
      <h1 className="text-6xl font-bold z-10 relative text-center text-[#599960] mb-12 md:text-4xl sm:text-2xl">
        Courses
      </h1>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12 relative z-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-60 h-60 object-cover rounded-lg"
            />
            <h2 className="text-3xl font-bold text-[#6ac2b2] mt-4 sm:text-lg md:text-xl">
              {course.title}
            </h2>
            <p className="mt-4 text-black text-lg leading-8 md:text-lg sm:text-base sm:leading-7">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
