import axios from "axios";

const baseURL = "https://13.39.162.91/api";

export const getProjects = async (personId: number) => {
  try {
    const response = await axios.get(`${baseURL}/people/${personId}/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
