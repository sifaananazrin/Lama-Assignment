import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiBell } from "react-icons/fi";

const Header = ({ children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-2 text-sm">{children}</div>
      <div className="flex items-center">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            className="flex items-center px-4 py-2 mr-4 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            EN <BiChevronDown className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-40 bg-white border rounded shadow-xl z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                EN
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                ES
              </a>
            </div>
          )}
        </div>
        {/* Notification  */}
        <FiBell className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
