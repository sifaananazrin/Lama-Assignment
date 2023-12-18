import React from "react";
import { IoIosHome } from "react-icons/io";
import { AiOutlineSetting, AiOutlineBell, AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const handleLogout = () => {
    // Add your logout logic here
    // For example, you can clear the user's session or perform any necessary logout actions
    console.log("User logged out");
  };

  return (
    <>
      <nav className="bg-white shadow px-10 py-5 flex justify-between items-center">
        <div className="flex items-center">
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
          <span className="text-purple-500 font-bold text-2xl ml-4">LAMA.</span>
        </div>
        <div className="flex items-center">
          <AiOutlineSetting className="text-gray-700 text-xl mx-4" />
          <AiOutlineBell className="text-gray-700 text-xl" />
          <button onClick={handleLogout} className="text-gray-700 text-xl">
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
      <div className="pl-60 py-2 bg-white">
        <a
          href="/"
          className="flex items-center text-purple-500 hover:text-purple-700 transition-colors duration-200"
        >
          <IoIosHome className="text-lg mr-2" />
          Back to Home
        </a>
      </div>
    </>
  );
};

export default Navbar;
