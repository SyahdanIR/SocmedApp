import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const getThreads = async () => {
  const response = await axios.get(`${baseURL}/thread`);
  return response.data;
};
