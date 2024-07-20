import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-red-800 to-grey-800 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          FOR BIOSOC PROJECT WEB DEV FINAL PROJECT!!
        </p>

        <br />

        <p className="text-xl">
        NAMAN MOHAN SINGH
        </p>
      </div>
    </div>
  );
};

export default About;
