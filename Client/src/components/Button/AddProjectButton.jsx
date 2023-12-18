import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProjectButton = ({ onClick }) => {
  const navyBlueStyle = {
    backgroundColor: "#041E42",
  };

  return (
    <button
      onClick={onClick}
      className="flex  items-center justify-center bg-blue-900 text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out mb-10 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
      style={navyBlueStyle}
    >
      <AiOutlinePlus
        className="text-xl text-blue-900 bg-white rounded-full mr-2"
        style={{ padding: "2px" }}
      />
      Create New Project
    </button>
  );
};

export default ProjectButton;
