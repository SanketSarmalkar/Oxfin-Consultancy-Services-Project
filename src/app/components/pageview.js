// PageView.js
"use client";
import React, { useState, useEffect } from "react";

const placeholderTexts = [
    "try this", 
    "try that", 
    "try what",
];

const backgroundImages = [
  "./images/bg-1.jpg",
  "./images/bg-2.jpg",
  "./images/bg-3.jpg",
];

export default function PageView() {
  // search bar
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholderTexts.length
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const currentPlaceholder = placeholderTexts[placeholderIndex];

  // backgound image
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderDots = () => {
    return backgroundImages.map((_, index) => (
      <span
        key={index}
        className={`inline-block w-3 h-3 mx-1 rounded-full ${
          activeIndex === index ? "bg-blue-900" : "bg-gray-500"
        }`}
      />
    ));
  };

  // search bar
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
        className="mt-20 bg-cover bg-center bg-fixed h-[700px] bg-white"
        style={{
          backgroundImage: `url(${backgroundImages[activeIndex]})`,
          display: "flex",
        }}
      >
        <div className=" h-52 bg-transparent"> </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-blue-900 text-center">
          <h1 className="text-4xl font-bold mb-4">
            We register 10% of all Indian companies
          </h1>
          <p className="text-2xl">That’s one company every 9 minutes</p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="relative w-96">
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-grey-200 focus:border-transparent bg-white opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
              placeholder={`Try ${currentPlaceholder}`}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <span className="absolute left-3 top-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 18a9 9 0 100-18 9 9 0 000 18zm0-1a8 8 0 100-16 8 8 0 000 16zm-1.657-5.657a4 4 0 115.657-5.657 4 4 0 01-5.657 5.657z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Popular Searches</h2>
          <div className="flex flex-wrap justify-center">
            <div className="px-4 py-2 m-2 bg-blue-900 rounded-md">
              Company registration
            </div>
            <div className="px-4 py-2 m-2 bg-blue-900 rounded-md">
              GST Registration
            </div>
            <div className="px-4 py-2 m-2 bg-blue-900 rounded-md">
              Trademark
            </div>
            <div className="px-4 py-2 m-2 bg-blue-900 rounded-md">
              Accounting & Business Compliance
            </div>
            <div className="px-4 py-2 m-2 bg-blue-900 rounded-md">e-FIR</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        {renderDots()}
      </div>
    </div>
  );
}
