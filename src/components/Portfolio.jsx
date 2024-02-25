import React from "react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="h-screen w-full bg-gradient-to-b from-blue-500 to-blue-600 flex justify-center items-center"
    >
      <h1 className="text-center w-full">Portfolio</h1>
      <div className="container grid grid-cols-3 gap-4">
        <div className="card">
          <div className="box">
            <img alt="" />
            <div className="text border-2 border-black p-2">Project 1</div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img alt="" />
            <div className="text border-2 border-black p-2">Project 2</div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img alt="" />
            <div className="text border-2 border-black p-2">Project 3</div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img alt="" />
            <div className="text border-2 border-black p-2">Project 4</div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
