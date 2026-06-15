import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Like } from "@/types/Like";
import type { Thread } from "@/types/Thread";
import { toggleLike } from "@/services/ThreadService";

interface LikeState {
  likes: Like | null;
  threads: Thread[];
}

const initialState: LikeState = {
  likes: null,
  threads: [],
};

export const toggleLikes = createAsyncThunk(
  "like/toggleLike",
  async (thread_id: number) => {
    try {
      const response = await toggleLike(thread_id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLikeLocal: (state, action) => {
      const thread = state.threads.find((t) => t.id === action.payload);
      if (thread) {
        thread.isLiked = !thread.isLiked;
        thread.likeCount += thread.isLiked ? 1 : -1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleLikes.fulfilled, (state, action) => {
      state.likes = action.payload;
    });
  },
});
export const { toggleLikeLocal } = likeSlice.actions;
export default likeSlice.reducer;
