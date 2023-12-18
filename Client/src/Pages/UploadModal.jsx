import React from "react";
import { FiX } from "react-icons/fi";

const UploadModal = ({
  isOpen,
  closeModal,
  onFileNameChange,
  onDescriptionChange,
  onUpload,
  fileName,
  description,
}) => {
  const handleUploadClick = () => {
    onUpload();
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Upload from Youtube</h3>
            <button onClick={closeModal}>
              <FiX className="text-xl" />
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
              value={fileName}
              onChange={(e) => onFileNameChange(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              onClick={handleUploadClick}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadModal;
