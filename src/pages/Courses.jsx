import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For "Why Choose Us" icons

const courses = [
  {
    title: "Graphic Design",
    description:
      "Master the art of visual communication by creating stunning designs for digital and print media using industry-leading tools like Adobe Photoshop, Illustrator, and InDesign.",
    image: "course1.png", // Add correct image path
  },
  {
    title: "3D Animation",
    description:
      "Bring your imagination to life by mastering the art of 3D animation with powerful tools like Blender, Maya, and Cinema 4D, creating captivating visual experiences.",
    image: "course2.png", // Add correct image path
  },
];

const Courses = () => {
  return (
    <div className="max-w-6xl py-24 mx-auto px-6 text-gray-800">
      {/* Two Courses Section */}
      <h1 className="text-4xl font-bold text-center text-[#599960] mb-12">
        Courses
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        {courses.map((course, index) => (
          <div key={index} className="flex flex-col text-center items-center py-10 p-6 ">
            <img
              src={course.image}
              alt={course.title}
              className="mt-4 w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-3xl font-bold text-[#6ac2b2] mb-4">
              {course.title}
            </h2>
            <p className="text-lg text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Courses;
