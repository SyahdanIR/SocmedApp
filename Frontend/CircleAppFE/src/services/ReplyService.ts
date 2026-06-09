import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const createReply = async (
  content: string,
  image: File | null,
  id: any,
) => {
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
    const response = await axios.post(
      `${baseURL}/reply/${id}`,
      formData,
      config,
    );
    return response.data;
  } catch (error) {
    alert("Error posting reply");
  }
};
