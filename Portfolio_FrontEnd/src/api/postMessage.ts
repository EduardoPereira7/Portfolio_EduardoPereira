import axios from "axios";

const baseURL = "https://butterflyloja.pt/api";

export const sendMessage = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const data = JSON.stringify({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}/contact`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data.message;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send message");
  }
};
