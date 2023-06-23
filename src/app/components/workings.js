"use client";
import React, { useState, useEffect } from "react";

const PageWithCards = () => {
  const cards = [
    {
      title: "Find Consultant",
      description:
        "Search consultants preferred to suit your requirement with our wide selection criteria.",
    },
    {
      title: "Schedule Online Meeting",
      description:
        "View detailed profile of the consultant and schedule a virtual meeting in just 3 clicks.",
    },
    {
      title: "Interact and Engage",
      description:
        "Interact with the consultant and formalise the relationship with clear terms of scope of work, timelines and payment milestones. Explore our automated processes.",
    },
    {
      title: "Manage Engagement",
      description:
        "Virtual Meetings for interactions, Chat, Share Documents, Pay basis- work done as per agreed milestones and Payment reminders. Get notifications of engagement’s progress.",
    },
  ];

  const getCardStyle = () => {
    var screenWidth;
    useEffect(() => {
      screenWidth = window.innerWidth;
    }, []);
    const cardWidth = `${Math.floor((screenWidth / 3)-200)}px`;

    return {
      width: cardWidth,
    };
  };

  const renderCards = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-1/3 p-2 m-2 bg-white rounded-lg shadow-md hover:bg-gray-200"
            style={getCardStyle()}
          >
            <div className="relative mb-2 ">
              <div className="top-0 bg-blue-900 text-white text-center rounded py-1 px-2">
                {index + 1}
              </div>
            </div>
            <h2 className="text-l font-bold text-center mb-2 text-black">{card.title}</h2>
            <p className="text-gray-600 text-center text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-gray-300" style={{ height: `550px` }}>
      <div className="pt-12 pb-8">
        <h1 className="text-4xl font-bold text-black text-center">How it works</h1>
      </div>
      {renderCards()}
    </div>
  );
};

export default PageWithCards;
