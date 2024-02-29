import axios from "axios";

const baseURL = "https://butterflyloja.pt/api";

export const getProjects = async (personId: number) => {
  try {
    const response = await axios.get(`${baseURL}/people/${personId}/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
