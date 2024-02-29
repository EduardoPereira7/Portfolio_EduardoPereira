import axios from "axios";

const baseURL = "https://butterflyloja.pt/api";

export const getProjectImages = async (projectId: number) => {
  try {
    const response = await axios.get(`${baseURL}/projects/${projectId}/images`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
