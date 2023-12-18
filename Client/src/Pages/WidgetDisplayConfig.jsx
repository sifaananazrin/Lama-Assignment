import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { FiUpload } from "react-icons/fi";
import Header from "../components/Navbar/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const WidgetDisplayConfig = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Sidebar />
      <div className="bg-white p-8 ml-72">
        <Header />

        <h1 className="text-3xl font-bold mb-6 text-purple-500">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Color Picker */}
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Value
              </label>
              <input
                type="text"
                defaultValue="#7B56B8"
                className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="#7B56B8"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <input
                type="color"
                defaultValue="#7B56B8"
                className="mt-2 h-10 w-10 cursor-pointer rounded border-gray-300 shadow-sm"
              />
            </div>
          </div>
          
            <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Value
              </label>
              <input
                type="text"
                defaultValue="#7B56B8"
                className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="#7B56B8"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <input
                type="color"
                defaultValue="#7B56B8"
                className="mt-2 h-10 w-10 cursor-pointer rounded border-gray-300 shadow-sm"
              />
            </div>
          </div>
          {/* 4 */}
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Value
              </label>
              <input
                type="text"
                defaultValue="#7B56B8"
                className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="#7B56B8"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <input
                type="color"
                defaultValue="#7B56B8"
                className="mt-2 h-10 w-10 cursor-pointer rounded border-gray-300 shadow-sm"
              />
            </div>
          </div>
          {/* 5 */}
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Value
              </label>
              <input
                type="text"
                defaultValue="#7B56B8"
                className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                placeholder="#7B56B8"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <input
                type="color"
                defaultValue="#7B56B8"
                className="mt-2 h-10 w-10 cursor-pointer rounded border-gray-300 shadow-sm"
              />
            </div>
          </div>
          {/* ... other configuration options ... */}

          {/* Toggle Switch */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Show Sources
            </label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? "bg-blue-600" : "bg-gray-200",
                "relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none my-2"
              )}
            >
              <span
                className={classNames(
                  enabled ? "translate-x-6" : "translate-x-1",
                  "inline-block w-4 h-4 transform bg-white rounded-full transition"
                )}
              />
            </Switch>
          </div>

          {/* File Upload */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bot Icon
            </label>
            <div className="flex items-center">
              <span className="inline-block rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-12 w-12 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 24H0V0h24v24z" fill="none" />
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H8v-2h2v2zm0-4H8V9h2v4zm0-6H8V5h2v2zm4 10h-2v-2h2v2zm0-4h-2V9h2v4zm0-6h-2V5h2v2zm4 4h-2v-2h2v2zm0-4h-2V5h2v2z" />
                </svg>
              </span>
              <button
                type="button"
                className="ml-4 bg-purple-600 text-white py-2 px-3 border border-transparent rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <FiUpload className="inline-block mr-2" />
                Upload Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetDisplayConfig;
