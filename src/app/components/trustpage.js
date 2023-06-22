import React, { useState, useEffect } from "react";

const TrustPage = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) =>
        prevBackground === 0 ? 1 : 0
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgrounds = [
    "/trust.jpg",
    "/trust-1.jpg",
  ];

  const trustLines = [
    "TRUST is the foundation stone of our platform",
    "SAFETY of your data is our foremost priority",
  ];

  const trustPoints = [
    "We do not have access to your data",
    "We do not sell your data to third parties",
    "Stringent data privacy policies",
  ];

  const currentBackgroundImage = backgrounds[currentBackground];

  return (
    <div
      className="flex justify-center items-center bg-center bg-fixed bg-no-repeat bg-cover h-[500px]"
      style={{ backgroundImage: `url(/trust.jpg)` }}
    >
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="text-left">
          {trustLines.map((line, index) => (
            <p
              key={index}
              className={`text-2xl font-bold mb-4 text-blue-900` }
            >
              {line}
            </p>
          ))}
        </div>
        <div className="ml-6 mt-20">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l8 8a1 1 0 1 1-1.414 1.414L11 10.414l-3.293 3.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustPage;
