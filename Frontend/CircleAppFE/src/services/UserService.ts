import axios from "axios";
import { toast } from "sonner";

const baseURL = "http://localhost:3000/api";

export const getUser = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${baseURL}/auth/me`, config);
  return response.data;
};

export const editUser = async (formData: FormData) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "multipart/form-data",
      },
    };

    const response = await axios.patch(`${baseURL}/user`, formData, config);
    if (response.status === 200) {
      console.log("Berhasil Update data profile");
    }
  } catch (error) {
    toast("error update data");
    console.log(error);
  }
};

export const getRecommendationUser = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get(`${baseURL}/user/recommended`, config);
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const searchUser = async (userData: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get(
      `${baseURL}/user/search?userData=${userData}`,
      config,
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
