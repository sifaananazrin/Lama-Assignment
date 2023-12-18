import React, { useState } from "react";
import UploadModal from "../../Pages/UploadModal";
import { FiUploadCloud, FiYoutube, FiRadio } from "react-icons/fi";

const UploadModals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleFileNameChange = (name) => setFileName(name);

  const handleDescriptionChange = (desc) => setDescription(desc);

  const handleUpload = () => {
    console.log("Uploading:", fileName, description);
    closeModal();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-purple-500 mb-6">
        Sample Project
      </h1>

      {/* Upload options */}
      <div className="flex justify-center space-x-4 mb-4">
        <div className="p-4 border rounded-lg text-center " onClick={openModal}>
          <FiYoutube className="text-red-500 text-3xl mx-auto" />
          <p className="mt-2">Upload Youtube Video</p>
        </div>
        <div className="p-4 border rounded-lg text-center" onClick={openModal}>
          <FiRadio className="text-green-500 text-3xl mx-auto" />
          <p className="mt-2">Upload Spotify Podcast</p>
        </div>

        <div className="p-4 border rounded-lg text-center" onClick={openModal}>
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
        closeModal={closeModal}
        onFileNameChange={handleFileNameChange}
        onDescriptionChange={handleDescriptionChange}
        onUpload={handleUpload}
        fileName={fileName}
        description={description}
      />
    </>
  );
};

export default UploadModals;
