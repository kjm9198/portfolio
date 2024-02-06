import React from "react";

const AboutMe = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-blue-400 to-blue-500 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>


        <p className="text-4xl font-bold inline border-b-4 border-black ">About me</p>
        </div>
        <p className="text-xl mt-20">
          Hi! I'm a software engineer and I'm always looking for new
          opportunities to learn and grow. I'm passionate about building things
          and solving problems. I'm also a big fan of open source and I love to
          contribute to projects when I can.
        </p>
        <br />
          <p className="text-xl">
            I'm currently working at a company called Devs United, where I'm
            building a platform to help developers find jobs. I'm also working on
            a few side projects, including a personal website and a few open
            source projects.
          </p>
      </div>
    </div>
  );
};

export default AboutMe;
