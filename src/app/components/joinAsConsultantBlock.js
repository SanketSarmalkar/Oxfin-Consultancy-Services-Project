import React from "react";

const ConsultantBlock = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover bg-fixed h-[600px] flex justify-center items-center"
      style={{ backgroundImage: "url(/consultant.jpg)" }}
    >
      <div className="flex justify-center items-center h-full w-2/3">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Are you a consultant?
          </h1>
          <ul className="list-disc ml-8 mb-6">
            <li className="text-green-500 flex items-center mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
              Create your profile on the platform
            </li>
            <li className="text-green-500 flex items-center mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
              Get quality leads
            </li>
            <li className="text-green-500 flex items-center mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
              Consult online on this single platform and manage your engagements
              on our automated functionalities
            </li>
            <li className="text-green-500 flex items-center mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
              Amazing user experience while dealing with your clients’ complex
              issues
            </li>
          </ul>
          <div className="text-center mb-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
              Get Started
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
          <p className="text-center text-gray-600">
            Trust Us, your Data is Secure and Private
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultantBlock;
