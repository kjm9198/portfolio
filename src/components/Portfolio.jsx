import React from "react";
import myPortfolio from "../assets/portfolio/Portfolio.webp";
import houseManagement from "../assets/portfolio/houseManagement.webp";
import groceryList from "../assets/portfolio/groceryList.webp";
import snakeGame from "../assets/portfolio/Snake.webp";
import seniorSocial from "../assets/portfolio/seniorSocial.webp";
import serverCalculator from "../assets/portfolio/serverCalculator.webp";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: myPortfolio,
      name: "Portfolio Code",
    },
    {
      id: 2,
      src: houseManagement,
      name: "House Management",
    },
    {
      id: 3,
      src: groceryList,
      name: "Grocery List",
    },
    {
      id: 4,
      src: snakeGame,
      name: "Snake Game",
    },
    {
      id: 5,
      src: seniorSocial,
      name: "Senior Social",
    },
    {
      id: 6,
      src: serverCalculator,
      name: "Server Calculator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-blue-900 to-blue-950 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-900">
            Portfolio
          </p>
          <p className="py-6">Check my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name }) => (
            <div
              key={id}
              className="shadow-md shadow-blue-900 rounded-lg project-div"
            >
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-100"
              />
              <div className="flex items-center justify-center">
                <button className="text-2xl w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                  {name}
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
