import React from "react";

const courses = [
  {
    title: "Augmented & Virtual Reality Development",
    description:
      "Learn AR/VR development using Unity, Unreal Engine, and WebXR.",
  },
  {
    title: "Visual Effects (VFX) Masterclass",
    description:
      "Master VFX techniques using Houdini, After Effects, and Nuke.",
  },
  {
    title: "Game Development with Unity & Unreal",
    description: "Build AAA-quality games with Unity and Unreal Engine.",
  },
  {
    title: "3D Animation & Motion Graphics",
    description: "Create stunning 3D animations with Blender and Maya.",
  },
  {
    title: "AI & Machine Learning in Gaming",
    description: "Explore AI-driven NPC behavior and game automation.",
  },
];

const Courses = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Our Courses
      </h1>
      <p className="text-lg text-center mb-8">
        Explore our industry-focused courses designed to take your Graphic
        Design, VFX, and 3D Animation skills to the next level.
      </p>
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-500">
              {course.title}
            </h2>
            <p className="text-lg mt-2 text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Courses;
