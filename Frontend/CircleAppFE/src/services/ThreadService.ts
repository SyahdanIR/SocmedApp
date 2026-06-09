import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const createThread = async (content: string, image: File | null) => {
  try {
    const formData = new FormData();

    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.post(`${baseURL}/thread`, formData, config);
    if (response.status === 200) {
      console.log("Thread created successfully");
    }
  } catch (error) {
    alert("Error posting thread");
  }
};

export const getThreads = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${baseURL}/thread`, config);
  return response.data;
};

export const getThreadsById = async (id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.get(`${baseURL}/thread/${id}`, config);
  return response.data.data;
};

export const toggleLike = async (thread_id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await axios.post(`${baseURL}/like/${thread_id}`, {}, config);
  return response.data;
};
