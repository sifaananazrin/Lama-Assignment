import React from "react";
import Header from "../components/Navbar/Header"; 
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
const WidgetConfiguration = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-white p-8 ml-72">
        <Header />

        <h1 className="text-4xl text-purple-500 font-bold my-6">
          Configuration
        </h1>

        <div className="mb-4">
          <ul className="flex border-b">
            <li className="-mb-px mr-1">
              <Link
                className="bg-white inline-block py-2 px-4 text-purple-500 hover:text-purple-500 font-semibold"
                to="/widgetConfiguration"
              >
                General
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className="inline-block py-2 px-4 text-gray-500 hover:text-purple-500"
                to="/widgetDisplayConfig"
              >
                Display
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className="inline-block py-2 px-4 text-gray-500 hover:text-purple-500"
                to="#"
              >
                Advanced
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="chatbotName"
          >
            Chatbot Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="chatbotName"
            type="text"
            placeholder="Lorem ipsum dolor sit"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="welcomeMessage"
          >
            Welcome Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="welcomeMessage"
            type="text"
            placeholder="Lorem ipsum dolor sit"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="inputPlaceholder"
          >
            Input Placeholder
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="inputPlaceholder"
            type="text"
            placeholder="Lorem ipsum dolor sit"
          />
        </div>
      </div>
    </>
  );
};

export default WidgetConfiguration;
