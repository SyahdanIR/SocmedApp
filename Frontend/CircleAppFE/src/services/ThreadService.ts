import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const createThread = async (content: string, image: File | null) => {
  try {
    const formData = new FormData();

    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }
    console.log("Content:", content);
    console.log("Image:", image);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.post(`${baseURL}/thread`, formData, config);
    if (response.status === 200) {
      alert("Berhasil posting thread");
    }
  } catch (error) {
    alert("Error posting thread");
  }
};

export const getThreads = async () => {
  const response = await axios.get(`${baseURL}/thread`);
  return response.data;
};
