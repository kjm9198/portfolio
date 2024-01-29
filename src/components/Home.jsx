import React from "react";
import myPicture from "../assets/myPicture.jpg";
import { BiSolidRightArrow } from "react-icons/bi";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-blue-300 via-blue-300 to-blue-600">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a passionate Vietnamese software developer</h2>
          <p className="text-gray-100 py-4 max-w-md">
            Currently a Third-year student at Polsko-Japońska Akademia Technik
            Komputerowych, specializing in Business Application with a focus on
            Java and Python. Enthusiastic about modern web development tech like
            FastAPI, JavaScript, React, and speed typing.
          </p>

          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-blue-600 to-green-500 ">
              Portfolio <BiSolidRightArrow />
            </button>
          </div>
          <img src={myPicture}
               alt="myself"
               className="rounded-2xl mx-auto w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
