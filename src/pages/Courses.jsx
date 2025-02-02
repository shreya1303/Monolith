import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For "Why Choose Us" icons

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
    <div className="max-w-6xl py-24 mx-auto px-6 text-gray-800  min-h-screen overflow-x-hidden">
      {/* Background Circles */}
      <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 top-0 left-0 md:w-52 md:h-52 sm:w-20 sm:h-20 sm:top-0 sm:left-0 pointer-events-none"></div>
      <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 top-[30%] right-0 md:w-56 md:h-56 sm:w-20 sm:h-20 sm:top-[30%] sm:right-0 pointer-events-none"></div>
      <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 z-0 bottom-0 right-[40%] md:w-52 md:h-52 sm:w-20 sm:h-20 sm:bottom-0 sm:right-[40%] pointer-events-none"></div>

      {/* Courses Heading */}
      <h1 className="text-6xl font-bold text-center text-[#599960] mb-12 md:text-4xl sm:text-xl relative z-10">
        Courses
      </h1>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12 relative z-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center py-4 px-6 relative z-10"
          >
            <img
              src={course.image}
              alt={course.title}
              className="mt-4 w-60 h-60 object-cover rounded-lg"
            />
            <h2 className="text-3xl py-4 font-bold text-[#6ac2b2] mb-4 sm:text-lg md:text-xl">
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
