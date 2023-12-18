import React, { useState } from "react";
import { useLocation,useParams, useNavigate } from 'react-router-dom';
import { editfiles } from "../api-helpers/api-helpers";
import Header from "../components/Navbar/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const TranscriptEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileId, projectId } = useParams();
  const [fileData, setFileData] = useState({
    fileName: location.state?.file?.fileName || '',
    description: location.state?.file?.description || ''
  });
  // const fileId = location.state?.file?._id;
  // const projectId = location.state?.projectId;

  const handleInputChange = (e) => {
    setFileData({ ...fileData, [e.target.name]: e.target.value });
  };

  const saveEditedFile = async () => {
    try {
      const response = await editfiles(fileId, projectId, fileData);
      if (response) {
        console.log("File edited successfully");
        navigate(`/user/upload-listPage/${projectId}`)
      } else {
        console.error("File editing failed");
      }
    } catch (error) {
      console.error("Error editing file:", error);
    }
  };

  const discardChanges = () => {
    setFileData({
      fileName: location.state?.file?.fileName || '',
      description: location.state?.file?.description || ''
    });
  };

  return (
    <>
      <Sidebar/>
      <div className="max-w-3xl mx-auto bg-white shadow p-6 mt-12">
        <Header />

        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Edit File
        </h1>

        <div className="mb-4">
          <input
            type="text"
            name="fileName"
            value={fileData.fileName}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 text-gray-700 leading-tight border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="File Name"
          />
          <textarea
            name="description"
            value={fileData.description}
            onChange={handleInputChange}
            className="w-full p-2 text-gray-700 leading-tight border rounded-lg focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="File Description..."
          ></textarea>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={discardChanges}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Discard
          </button>
          <button
            onClick={saveEditedFile}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save & Exit
          </button>
        </div>
      </div>
    </>
  );
};

export default TranscriptEditor;
