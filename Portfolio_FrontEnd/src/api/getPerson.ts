import axios from "axios";

const baseURL = "http://13.39.162.91/api";

export const getPerson = async (personId: number) => {
  try {
    const response = await axios.get(`${baseURL}/people/${personId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
