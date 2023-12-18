import React, { useState } from "react";
import { FiUpload, FiYoutube, FiRss } from "react-icons/fi";
import { SiSpotify } from "react-icons/si";
import Header from "../components/Navbar/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import UploadModal from "./UploadModal";
import { addProjectFile } from "../api-helpers/api-helpers";
import { useParams } from "react-router-dom";

const UploadSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadType, setUploadType] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [fileData, setFileData] = useState({ fileName: "", description: "" });

  const onFileNameChange = (newFileName) => {
    setFileData((prevFileData) => ({ ...prevFileData, fileName: newFileName }));
  };

  const onDescriptionChange = (newDescription) => {
    setFileData((prevFileData) => ({
      ...prevFileData,
      description: newDescription,
    }));
  };

  const resetFileData = () => {
    setFileData({ fileName: "", description: "" });
  };

  const handleOpenModal = (type) => {
    resetFileData();
    setUploadType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    resetFileData();
    setModalOpen(false);
    setUploadType("");
  };

  const handleFileUpload = async () => {
    try {
      console.log("Sending to backend:", fileData);
      const data = await addProjectFile(token, fileData, id);
      window.location.reload();
      if (data.status === 201) {
        console.log("File added to the project successfully");

        handleCloseModal();
      }
    } catch (error) {
      console.error("Error adding file to the project:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="bg-white p-8 ml-72">
        <Header />

        <h1 className="text-3xl font-bold mb-6">Upload</h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* YouTube Upload */}
          <button
            className="flex flex-col items-center justify-center p-4 border rounded-lg bg-red-100"
            onClick={() => handleOpenModal("youtube")}
          >
            <FiYoutube className="mb-2 text-red-600" size={24} />
            <span className="text-red-600">Upload Youtube Video</span>
          </button>

          {/* Spotify Upload */}
          <button
            className="flex flex-col items-center justify-center p-4 border rounded-lg bg-green-100"
            onClick={() => handleOpenModal("spotify")}
          >
            <SiSpotify className="mb-2 text-green-600" size={24} />
            <span className="text-green-600">Upload Spotify Podcast</span>
          </button>

          {/* RSS Upload */}
          <button
            className="flex flex-col items-center justify-center p-4 border rounded-lg bg-orange-100"
            onClick={() => handleOpenModal("rss")}
          >
            <FiRss className="mb-2 text-orange-500" size={24} />
            <span className="text-orange-500">Upload from RSS Feed</span>
          </button>
        </div>

        <div className="flex items-center justify-center mb-6">
          <span className="text-gray-500">Or</span>
        </div>

        <div
          className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg cursor-pointer"
          onClick={() => handleOpenModal("file")}
        >
          <FiUpload className="text-purple-500 mb-2" size={48} />
          <p className="mb-2 text-center">
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p className="text-sm text-gray-500">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Select File
          </button>
        </div>

        <UploadModal
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          onFileNameChange={onFileNameChange}
          fileName={fileData.fileName}
          description={fileData.description}
          onDescriptionChange={onDescriptionChange}
          onUpload={handleFileUpload}
        />
      </div>
    </>
  );
};

export default UploadSection;
