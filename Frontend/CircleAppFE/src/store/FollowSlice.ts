import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followed, getFollow } from "@/services/FollowService";
import type { User } from "@/types/Like";

interface followData {
  id: number;
  follower_id: number;
  folowing_id: number;
  followersUser: User;
  followingUser: User;
}
interface FollowState {
  followers: any[];
  following: any[];
  followData: followData | null;
  loading: boolean;
  error: String | null;
  isFollowed: boolean;
}

const initialState: FollowState = {
  followers: [],
  following: [],
  loading: false,
  error: null,
  followData: null,
  isFollowed: false,
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

export const handlingFollow = createAsyncThunk(
  "follow/handleFollow",
  async (id: number) => {
    try {
      const response = await followed(id);
      return response;
    } catch (error) {
      return console.log(error);
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
      })
      //saat ingin follow/unfoll user
      .addCase(handlingFollow.fulfilled, (state, action) => {
        state.followData = action.payload.data;
        state.isFollowed = action.payload.isFollowed;
      });
  },
});

export default FollowSlice.reducer;
