import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAllfile } from "../api-helpers/api-helpers";
import UploadHome from "../components/Upload/UploadHome";
import UploadSection from "./UploadSection";

const UploadListPage = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(project);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const data = await getAllfile(token, id);
          if (data && data.files && data.files.length > 0) {
            setProject(data.files);
          } else {
            setProject([]);
          }
        } else {
          setProject([]);
        }
      } catch (error) {
        setError(error);
        setProject([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Sidebar />
      {isLoading ? (
        <div>Loading...</div>
      ) : project === null || project.length === 0 ? (
        <UploadSection />
      ) : (
        <UploadHome projectId={id} project={project} />
      )}
    </>
  );
};

export default UploadListPage;
