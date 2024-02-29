import axios from "axios";

const baseURL = "https://butterflyloja.pt/api";

export const getPlatforms = async (personId: number) => {
  try {
    const response = await axios.get(
      `${baseURL}/social-networks/person/${personId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
