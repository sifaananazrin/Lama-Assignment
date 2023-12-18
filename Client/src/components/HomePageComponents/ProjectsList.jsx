import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import ProjectCard from "./ProjectCard";
import ProjectButton from "../Button/AddProjectButton";
import AddProject from "../Modals/AddProject";
import { createProject } from "../../api-helpers/api-helpers";

const ProjectsList = ({ projects, setProjects }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleProjectSubmit = async (projectName) => {
    try {
      const projectData = { title: projectName };
      setLoading(true);
      const response = await createProject(projectData, token);
      setLoading(false);
      if (response && response.message === "Project created successfully") {
        const newProjectDetails = response;
        setProjects((prevProjects) => [...prevProjects, newProjectDetails]);

        toast.success(`Project "${response.name}" created successfully!`);
      } else {
        toast.error("Failed to create project.");
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project.");
    }
  };

  if (loading) {
    return  <Spinner loading={loading} />
  }
  
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center pb-6">
          <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
          <ProjectButton onClick={handleOpenModal} />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>

      <AddProject
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleProjectSubmit}
      />

      <ToastContainer />
    </div>
  );
};

export default ProjectsList;
