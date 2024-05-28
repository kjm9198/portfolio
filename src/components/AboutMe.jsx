import React from "react";

const AboutMe = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About me
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-xl">
            Hey there! I'm Michał Bożek, a data analyst with a passion for
            uncovering insights from data and transforming them into actionable
            strategies. Since transitioning to data analytics in 2023, I've
            focused on utilizing data-driven approaches to solve complex
            problems and improve business outcomes.
          </p>
          <p className="text-xl">
            My toolkit includes Python, SQL, and Tableau, which I use to clean,
            analyze, and visualize data to uncover trends and insights. Recent
            projects include a customer segmentation analysis for an insurance
            company and a predictive model for churn reduction in a
            subscription-based business.
          </p>
          <p className="text-xl">
            I hold certifications in Data Science and Machine Learning from
            Coursera, and I'm currently pursuing advanced studies in statistical
            modeling. I'm particularly interested in leveraging machine learning
            for predictive analytics and exploring big data technologies to
            handle large datasets efficiently.
          </p>
          <p className="text-xl">
            Explore my GitHub to discover my latest projects where I apply
            statistical analysis, machine learning, and data visualization to
            drive decision-making and enhance user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
