import React from "react";

const SectionHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional: Adds a dark overlay */}
      <h1 className="z-10 text-5xl sm:text-6xl font-bold">{title}</h1>
    </div>
  );
};

export default SectionHeader;
