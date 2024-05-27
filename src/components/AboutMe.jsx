import React from "react";

const AboutMe = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-black ">
            About me
          </p>
        </div>
        <p className="text-xl mt-20">
          Hey there! I'm Michał Bożek, a web developer passionate about crafting
          digital experiences that bring people together. Since 2022, my focus
          has been on creating meaningful connections through intuitive and
          user-friendly web solutions.
        </p>
        <br />
        <br />
        <p className="text-xl">
          Explore my GitHub to discover my latest web development projects,
          where I combine creativity with coding to build engaging online
          spaces.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
