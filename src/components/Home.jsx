import React from "react";
import myPicture from "../assets/myPictures2.jpg";
import { RxArrowRight } from "react-icons/rx";
const Home = () => {
  return (
      <div
          name="home"
          className="h-screen w-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
          <div className="mt-24">
            <img
                src={myPicture}
                alt="myself"
                className="rounded-full mx-auto w-64 h-64 md:w-64 md:h-64"
            />
          </div>
          <div className="flex flex-col justify-center h-full text-center">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Passionate Fullstack Software Developer
            </h2>
            <p className="text-gray-100 py-4 max-w-md mx-auto">
              Dedicated third-year student at Polsko-Japońska Akademia Technik
              Komputerowych, specializing in Business Application with a strong
              passion for full-stack development. Enthusiastic about modern web
              development tech like FastAPI, JavaScript and React.
            </p>

            <div>
              <button
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-b from-beige-300 to-blue-300 cursor-pointer mx-auto"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <RxArrowRight size={15} className="ml-2" />
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;