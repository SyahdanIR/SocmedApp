import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Like } from "@/types/Like";

interface LikeState {
  likes: Like[];
}

const initialState: LikeState = {
  likes: [],
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
});
