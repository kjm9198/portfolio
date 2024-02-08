import React from "react";

function Portfolio() {
    return (
        <div id="portfolio" className="h-screen w-full bg-gradient-to-b from-blue-500 to-blue-600">
            <h1>Portfolio</h1>
            <div className="container">
                <div className="card">
                    <div className="box">
                        <img alt=""/>
                        <div className="text">Project 1</div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img alt=""/>
                        <div className="text">Project 2</div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img alt=""/>
                        <div className="text">Project 3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img alt=""/>
                        <div className="text">Project 4</div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img alt=""/>
                        <div className="text">Project 5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;