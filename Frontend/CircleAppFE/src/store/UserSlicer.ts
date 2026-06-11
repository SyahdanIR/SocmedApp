import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { editUser, getUser } from "@/services/UserService";
import type { User } from "lucide-react";
import axios from "axios";

export interface User {
  id: number;
  username: string;
  full_name: string;
  photo_profile: string;
  followerCount: number;
  followingCount: number;
  bio: string;
}

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const baseURL = "http://localhost:3000/api";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUser();
      return response;
    } catch (error) {
      return rejectWithValue("failed to fetch user");
    }
  },
);

export const updUserProfile = createAsyncThunk(
  "user/updateprofile",
  async (formData: FormData) => {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    // const response = await axios.patch(`${baseURL}/user`, formData, config);
    // if (response.status === 200) {
    //   console.log("Berhasil Update data profile");
    // }
    const response = await editUser(formData);
    return response;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.data) {
        state.data = { ...state.data, ...action.payload };
      }
    },
    clearUser: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //saat loading
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //jika suksess
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      //jika error
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateUserProfile, clearUser } = userSlice.actions;
export default userSlice.reducer;
