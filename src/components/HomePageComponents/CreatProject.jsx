import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectButton from "../Button/AddProjectButton";
import projectIllustration from "../../assets/image.png";
import Navbar from "../Navbar/Navbar";
import AddProject from "../Modals/AddProject";
import LoginModal from "../Modals/Login";
import { createProject } from "../../api-helpers/api-helpers";
import { useNavigate } from "react-router-dom";

function Project() {
  const Navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [createdProject, setCreatedProject] = useState(null);
  const token = localStorage.getItem("token");
  console.log("token", token);

  const handleOpenModal = () => {
    if (!token) {
      setLoginModalOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setLoginModalOpen(false);
  };

  const handleProjectSubmit = async (projectName) => {
    try {
      const projectData = { title: projectName };
      const response = await createProject(projectData, token);

      console.log("Response from createProject:", response);

      setCreatedProject(response);
      toast.success(`Project "${response.name}" created successfully!`);

      handleCloseModal();
      window.location.reload();
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
          <h1 className="text-5xl font-bold text-purple-500 my-10">
            Create a New Project
          </h1>

          <img
            src={projectIllustration}
            alt="Project Illustration"
            className="mb-6 w-auto"
          />

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ProjectButton onClick={handleOpenModal} />

          <AddProject
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSubmit={handleProjectSubmit}
          />
          <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
        </main>
      </div>
    </>
  );
}

export default Project;
