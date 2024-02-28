import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

function Portfolio() {
    return (
        <div
            name="portfolio"
            className="w-full h-screen bg-gradient-to-b from-blue-400 to-blue-500 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-black ">
                        Portfolio
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-20">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <p className="text-2xl font-bold">Array Destructuring</p>
                            <img
                                src={arrayDestruct}
                                alt="arrayDestruct"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">Install Node.js</p>
                            <img
                                src={installNode}
                                alt="installNode"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">Navbar</p>
                            <img
                                src={navbar}
                                alt="navbar"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <p className="text-2xl font-bold">React Parallax</p>
                            <img
                                src={reactParallax}
                                alt="reactParallax"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">React Smooth Scroll</p>
                            <img
                                src={reactSmooth}
                                alt="reactSmooth"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">React Weather</p>
                            <img
                                src={reactWeather}
                                alt="reactWeather"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;