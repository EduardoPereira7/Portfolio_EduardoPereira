import axios from "axios";

const baseURL = "https://13.39.162.91/api";

export const getProjectImages = async (projectId: number) => {
  try {
    const response = await axios.get(`${baseURL}/projects/${projectId}/images`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
