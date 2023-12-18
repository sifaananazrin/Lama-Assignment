import React from "react";
import { FiEdit2 } from "react-icons/fi";
import Header from "../components/Navbar/Header";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const TranscriptPage = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-white p-8 ml-72">
        <Header>
          <span className="text-gray-500">Sample Project</span>
          <span>/</span>
          <span className="font-semibold">Transcript</span>
        </Header>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-purple-500">
            Edit Transcript
          </h1>
          <Link to="/saveTranscript">
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition duration-300 ease-in-out">
              <FiEdit2 className="text-white w-4 h-4 mr-2" />
              Edit Mode
            </button>
          </Link>
        </div>

        <div className="mb-4 p-4 bg-gray-100 rounded">
          <div className="flex items-center mb-2">
            <span className="text-purple-500 font-semibold">Speaker</span>
          </div>
          <p className="text-gray-700">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms... On
            the other hand, we denounce with righteous indignation and dislike
            men who are
          </p>
        </div>
      </div>
    </>
  );
};

export default TranscriptPage;
