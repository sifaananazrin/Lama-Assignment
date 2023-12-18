import React from "react";
import Header from "../components/Navbar/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const AccountSettings = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-white p-8 ml-72">
        <Header />
        <h1 className="text-3xl font-bold mb-6 text-purple-600">
          Account Settings
        </h1>

        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://th.bing.com/th/id/OIP.mym1qB0KCJ99Uc2GVQ1G2wHaLH?rs=1&pid=ImgDetMain"
              alt="User"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Name
                  </label>
                  <input
                    type="text"
                    value="alphahuser"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value="alphahuser@gmail.com"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Subscriptions</h2>
          <div className="bg-purple-600 rounded-md p-4 flex justify-between items-center">
            <span className="text-white">
              You are currently on the Ques AI Basic Plan
            </span>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-m rounded-md transition-colors">
              Upgrade
            </button>
          </div>
          <button className="text-red-600 hover:underline mt-2">
            Cancel Subscription
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
