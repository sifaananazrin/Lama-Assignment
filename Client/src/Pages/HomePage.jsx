import React, { useEffect, useState } from "react";
import ProjectsList from "../components/HomePageComponents/ProjectsList";
import CreatProject from "../components/HomePageComponents/CreatProject";
import { getAllProject } from "../api-helpers/api-helpers";

const CreateProject = () => {
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const data = await getAllProject(token);

          if (data.status) {
            setProjects(data.projects);
          } else {
            setProjects(null);
          }
        } else {
          setProjects(null);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const token = localStorage.getItem("token");

  return projects && token ? (
    <ProjectsList projects={projects} setProjects={setProjects} />
  ) : (
    <CreatProject />
  );
};

export default CreateProject;
