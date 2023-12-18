
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const login = (email, password) => {
  return axios.post(`${API_BASE_URL}/user/login`, { email, password });
};

export const register = (name, email, password) => {
  return axios.post(`${API_BASE_URL}/user/register`, { name, email, password });
};

export const createProject = async (projectData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/projects/add`, projectData, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});


    return response.data;
  } catch (error) {
    console.error('Error in createProject API call', error);
    throw error;
  }
};

export const getAllProject = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllfile = async (token,id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/getfile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProjects = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
export const addProjectFile = async (token,fileData , projectId) => {
  try {

    const { fileName, description } = fileData;
    const data = {
      description: description,
      fileName: fileName,
    };

    const response = await axios.post(`${API_BASE_URL}/projects/addfile/${projectId}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding project file:', error);
    throw error;
  }
};

export const deleteFile = async (fileId,projectId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/projects/deletefile/${projectId}/${fileId}`)

    if (response.status === 204) {
    
      console.log("File deleted successfully");
    
    } else {
      console.error("File deletion failed");
    
    }
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};
export const editfiles = async (fileId,projectId,fileData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/projects/editfile/${projectId}/${fileId}`,fileData)

    return response.data;
  } catch (error) {
    console.error("Error Edit file:", error);
  }
};