import React from "react";
import myPortfolio from "../assets/portfolio/Portfolio.webp";
import houseManagement from "../assets/portfolio/houseManagement.webp";
import groceryList from "../assets/portfolio/groceryList.webp";
import snakeGame from "../assets/portfolio/Snake.webp";
import seniorSocial from "../assets/portfolio/seniorSocial.webp";
import serverCalculator from "../assets/portfolio/serverCalculator.webp";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: myPortfolio,
      name: "Portfolio Code",
      href: "https://github.com/kjm9198/portfolio",
    },
    {
      id: 2,
      src: houseManagement,
      name: "House Management",
      href: "https://github.com/kjm9198/Housing_Estate_System",
    },
    {
      id: 3,
      src: groceryList,
      name: "Grocery List",
      href: "https://github.com/kjm9198/ease_list",
    },
    {
      id: 4,
      src: snakeGame,
      name: "Snake Game",
      href: "https://github.com/kjm9198/Snake",
    },
    {
      id: 5,
      src: seniorSocial,
      name: "Senior Social",
      href: "https://github.com/kjm9198/Senior_Social_Algorithm",
    },
    {
      id: 6,
      src: serverCalculator,
      name: "Server Calculator",
      href: "https://github.com/kjm9198/ServerSocket_Calculator",
    },
  ];

  return (
    <div
      name="projects"
      id="projects"
      className="bg-gradient-to-b from-blue-900 to-blue-950 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-900">
            Portfolio
          </p>
          <p className="py-6">Dive into my projects and see what I've been working on.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, href }) => (
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
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                  <button className="text-2xl px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                    {name}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
