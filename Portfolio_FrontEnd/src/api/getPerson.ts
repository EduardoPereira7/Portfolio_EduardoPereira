import axios from "axios";

const baseURL = "https://butterflyloja.pt/api";

export const getPerson = async (personId: number) => {
  try {
    const response = await axios.get(`${baseURL}/people/${personId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
