import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Thread } from "@/types/Thread";

interface ThreadState {
  threads: Thread[];
}

const initialState: ThreadState = {
  threads: [],
};

const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    setThreads: (state, action: PayloadAction<Thread[]>) => {
      state.threads = action.payload;
    },

    addThread: (state, action: PayloadAction<Thread>) => {
      state.threads.unshift(action.payload);
    },

    toggleLikeLocal: (state, action) => {
      const thread = state.threads.find((t) => t.id === action.payload);
      if (thread) {
        thread.isLiked = !thread.isLiked;
        thread.likeCount += thread.isLiked ? 1 : -1;
      }
    },
  },
});

export const { setThreads, addThread, toggleLikeLocal } = threadSlice.actions;

export default threadSlice.reducer;
