import React, { useState, useEffect } from "react";

const consultants = [
    {
        name: "Consultant 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 13",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 14",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Consultant 16",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
];

const PopularConsultant = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [numCards, setNumCards] = useState(getNumCards());

  useEffect(() => {
    function handleResize() {
      setNumCards(getNumCards());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveScreen((prevScreen) => (prevScreen + 1) % numScreens());
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeScreen, numScreens]);

  function getNumCards() {
    var screenWidth;
    if(typeof window !== 'undefined') {
      screenWidth = window.innerWidth;
    }
    if (screenWidth >= 1280) {
      return 7;
    } else if (screenWidth >= 768) {
      return 4;
    } else {
      return 2;
    }
  }

  function numScreens() {
    return Math.ceil(consultants.length / numCards);
  }

  function renderConsultants() {
    const start = activeScreen * numCards;
    const end = start + numCards;
    const displayedConsultants = consultants.slice(start, end);

    return displayedConsultants.map((consultant, index) => (
      <div key={index} className="w-64 p-4 m-2 bg-white rounded-lg shadow">
        <div
          className="w-32 h-32 mx-auto mb-4 rounded-full flex justify-center items-center bg-center bg-no-repeat bg-cover"
          style={{
            // backgroundImage: `url(https://picsum.photos/seed/${consultant.name}/200)`,
            backgroundImage: `url("./images/profile.jpg")`,
          }}
        />
        <h2 className="text-l font-bold mb-2 text-gray-600 text-center">
          {consultant.name}
        </h2>
        <p className="text-gray-500 text-sm text-center">
          {consultant.description}
        </p>
      </div>
    ));
  }

  function renderDots() {
    const dots = [];
    for (let i = 0; i < numScreens(); i++) {
      dots.push(
        <span
          key={i}
          className={`inline-block w-3 h-3 mx-1 rounded-full ${
            activeScreen === i ? "bg-blue-900" : "bg-gray-400"
          }`}
        />
      );
    }
    return dots;
  }

  return (
    <div className="bg-gray-300 h-[750px]">
      <div className="justify-center items-center flex-wrap h-[100px]">
        <h1 className="text-4xl font-bold text-black text-center p-12">
          Popular Consultants
        </h1>
      </div>
      <div className="bg-gray-300 h-[650px] flex flex-col justify-center">
        <div className="flex flex-wrap justify-center">{renderConsultants()}</div>
        <div className="flex justify-center mt-10">{renderDots()}</div>
      </div>
    </div>
  );
};

export default PopularConsultant;
