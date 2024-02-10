import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

export const getProjects = async (personId: number) => {
  try {
    const response = await axios.get(`${baseURL}/people/${personId}/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
