import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleProjectFile = () => {
    navigate(`/user/upload-listPage/${project._id}`);
  };

  return (
    <div
      onClick={handleProjectFile}
      className="bg-white rounded-l-lg shadow-lg p-4 cursor-pointer"
    >
      <div className="flex items-center space-x-2 mb-4">
        <div className="p-2 rounded bg-purple-500 text-white"></div>
        <div>
          <div className="font-bold">
            {" "}
            {project.title ? project.title : project.name}
          </div>
          <div className="text-sm text-gray-600">
            {project.episodes} Episodes
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-600">{project.lastEdited}</div>
    </div>
  );
};

export default ProjectCard;
