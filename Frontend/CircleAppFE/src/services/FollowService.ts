import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const getFollow = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.get(`${baseURL}/follow`, config);
    return response.data;
  } catch (error) {
    console.error("error fetching follow data :", error);
    throw error;
  }
};

export const followed = async (id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.post(
      `${baseURL}/follow`,
      { userToFollow_id: id },
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
