import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

export const getProjectImages = async (projectId: number) => {
  try {
    const response = await axios.get(`${baseURL}/projects/${projectId}/images`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
