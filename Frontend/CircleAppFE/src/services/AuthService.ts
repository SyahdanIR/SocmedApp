import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const register = async (
  full_name: string,
  username: string,
  email: string,
  password: string,
) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      `${baseURL}/auth/register`,
      { full_name, username, email, password },
      config,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (emailorusername: string, password: string) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      `${baseURL}/auth/login`,
      { emailorusername, password },
      config,
    );
    return response;
  } catch (error) {
    throw error;
  }
};
