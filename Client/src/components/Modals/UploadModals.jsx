import React, { useState } from "react";
import UploadModal from "../../Pages/UploadModal";
import { FiUploadCloud, FiYoutube, FiRadio } from "react-icons/fi";
import { addProjectFile } from "../../api-helpers/api-helpers";
import { useParams } from "react-router-dom";

const UploadModals = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadType, setUploadType] = useState(""); // Track the upload type
  const { id } = useParams();

  const handleFileNameChange = (name) => setFileName(name);
  const handleDescriptionChange = (desc) => setDescription(desc);
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
      <h1 className="text-3xl font-bold text-purple-500 mb-6">
        Sample Project
      </h1>

      {/* Upload options */}
      <div className="flex justify-center space-x-4 mb-4">
        <div
          className="cursor-pointer p-4 border rounded-lg text-center"
          onClick={() => handleOpenModal("youtube")}
        >
          <FiYoutube className="text-red-500 text-3xl mx-auto" />
          <p className="mt-2">Upload Youtube Video</p>
        </div>
        <div
          className="p-4 border rounded-lg text-center"
          onClick={() => handleOpenModal("spotify")}
        >
          <FiRadio className="text-green-500 text-3xl mx-auto" />
          <p className="mt-2">Upload Spotify Podcast</p>
        </div>

        <div
          className="p-4 border rounded-lg text-center"
          onClick={() => handleOpenModal("file")}
        >
          <FiUploadCloud className="text-purple-500 text-3xl mx-auto" />
          <p className="mt-2">Upload Media or Text File</p>
        </div>
      </div>

      {/* Notification bar */}
      <div
        className="bg-purple-100 border-l-4 border-purple-600 text-purple-700 p-4 mb-6"
        role="alert"
      >
        <p className="font-bold">
          All files are processed! Your widget is ready to go!
        </p>
        <p>Try it out!</p>
      </div>

      {/* Table of uploaded items */}
      <UploadModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        onFileNameChange={onFileNameChange}
        fileName={fileData.fileName}
        description={fileData.description}
        onDescriptionChange={onDescriptionChange}
        onUpload={handleFileUpload}
        uploadType={uploadType}
      />
    </>
  );
};

export default UploadModals;
