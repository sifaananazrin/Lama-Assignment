import React from "react";
import {
  FaCog,
  FaProjectDiagram,
  FaFileAlt,
  FaBroadcastTower,
  FaPowerOff,
  FaSignOutAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/'); 
    console.log("User logged out");
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-20 md:w-72 bg-white text-purple-600 shadow-xl overflow-y-auto">
      <div className="flex items-center justify-center md:justify-start md:px-6 py-6 border-b border-purple-200">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
        >
          <path
            d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
            fill="#7E22CE"
          />
          <path
            opacity="0.4"
            d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
            fill="#7E22CE"
          />
        </svg>
        <span className="hidden md:block font-bold text-2xl ml-3">LAMA.</span>
      </div>
      
      <ul className="text-lg">
        {/* Projects item */}
        <li className="group transition duration-300 ease-in-out transform hover:scale-110">
          <Link
            to="/uploadSection"
            className="flex items-center justify-center md:justify-start py-4 md:px-8 w-full h-full"
          >
            <FaProjectDiagram className="md:mr-4" size={24} />
            <span className="hidden md:block md:ml-4 group-hover:rounded-lg group-hover:bg-purple-700 group-hover:text-white">
              Projects
            </span>
          </Link>
        </li>
        
        {/* Edit Transcription item */}
        <li className="group transition duration-300 ease-in-out transform hover:scale-110">
          <Link
            to="/transcriptEditor"
            className="flex items-center justify-center md:justify-start py-4 md:px-8 w-full h-full"
          >
            <FaFileAlt className="md:mr-4" size={24} />
            <span className="hidden md:block md:ml-4 group-hover:rounded-md group-hover:bg-purple-700 group-hover:text-white">
              Edit Transcription
            </span>
          </Link>
        </li>
        
        {/* Choose Platform item */}
        <li className="group transition duration-300 ease-in-out transform hover:scale-110">
          <Link
            to="/widgetDisplayConfig"
            className="flex items-center justify-center md:justify-start py-4 md:px-8 w-full h-full"
          >
            <FaBroadcastTower className="md:mr-4" size={24} />
            <span className="hidden md:block md:ml-4 group-hover:rounded-md group-hover:bg-purple-700 group-hover:text-white">
              Choose Platform
            </span>
          </Link>
        </li>
        
        {/* Activate item */}
        <li className="group transition duration-300 ease-in-out transform hover:scale-110">
          <Link
            to="/activate"
            className="flex items-center justify-center md:justify-start py-4 md:px-8 w-full h-full"
          >
            <FaPowerOff className="md:mr-4" size={24} />
            <span className="hidden md:block md:ml-4 group-hover:rounded-full group-hover:bg-purple-700 group-hover:text-white">
              Activate
            </span>
          </Link>
        </li>
        
        {/* Settings item */}
        <li className="group transition duration-300 ease-in-out transform hover:scale-110 absolute bottom-0 w-full">
          <Link
            to="/accountSettings"
            className="flex items-center justify-center md:justify-start py-4 md:px-8 w-full h-full"
          >
            <FaCog className="md:mr-4" size={24} />
            <span className="hidden md:block md:ml-4 group-hover:rounded-md group-hover:bg-purple-700 group-hover:text-white">
              Settings
            </span>
          </Link>
        </li>
        <li className="group transition duration-300 ease-in-out transform hover:scale-110">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center md:justify-start py-4 md:px-8 w-full h-full"
          >
            <FaSignOutAlt className="md:mr-4" size={24} />
            <span className="hidden md:block md:ml-4 group-hover:rounded-full group-hover:bg-purple-700 group-hover:text-white">
              Logout
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
