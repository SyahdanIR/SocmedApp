import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFollow } from "@/services/FollowService";

interface FollowState {
  followers: any[];
  following: any[];
  loading: boolean;
  error: String | null;
}

const initialState: FollowState = {
  followers: [],
  following: [],
  loading: false,
  error: null,
};

export const getFollowData = createAsyncThunk(
  "follow/getFollowData",
  async (__, { rejectWithValue }) => {
    try {
      const response = await getFollow();
      return response;
    } catch (error) {
      return rejectWithValue("failed getting follow data");
    }
  },
);

const FollowSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //saat loading
      .addCase(getFollowData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //saat selesai dimuat
      .addCase(getFollowData.fulfilled, (state, action) => {
        state.loading = false;
        state.followers = action.payload.followers;
        state.following = action.payload.following;
      })
      //saat error
      .addCase(getFollowData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "failed to fetch follow data";
      });
  },
});

export default FollowSlice.reducer;
