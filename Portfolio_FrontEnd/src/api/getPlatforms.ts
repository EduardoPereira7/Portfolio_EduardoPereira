import axios from "axios";

const baseURL = "http://13.39.162.91/api";

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
