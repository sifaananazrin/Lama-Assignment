import React from "react";
import { FiCheckCircle, FiEdit2, FiTrash2 } from "react-icons/fi";
import Header from "../Navbar/Header";
import UploadModals from "../Modals/UploadModals";

import { deleteFile } from "../../api-helpers/api-helpers";
export default function UploadHome({ project, projectId }) {
  const deleteFiledata = async (fileId) => {
    try {
      const response = deleteFile(fileId, projectId);

      window.location.reload();
      if (response.status === 204) {
        console.log("File deleted successfully");
      } else {
        console.error("File deletion failed");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  console.log("props data", project);

  return (
    <div className="bg-white p-8 ml-72">
      <Header />
      <UploadModals />

      <h1 className="text-3xl font-bold text-purple-500 mb-6">
        Sample Project
      </h1>

      <div className="overflow-x-auto bg-white">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="text-left text-purple-700 bg-purple-50">
              <th className="px-5 py-3 border-b-2 border-gray-200 text-sm font-semibold">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-sm font-semibold">
                Upload Date & Time
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-sm font-semibold">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {project.map((file, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {file.fileName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {file.timeStamp}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {file.status === "done" ? (
                    <span>
                      <FiCheckCircle className="inline-block mr-2 text-green-500" />{" "}
                      Done
                    </span>
                  ) : (
                    <span>Pending</span>
                  )}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <FiEdit2 className="inline-block mr-2 text-blue-500 cursor-pointer" />
                  <FiTrash2
                    className="inline-block text-red-500 cursor-pointer"
                    onClick={() => deleteFiledata(file._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
