import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  editUser,
  getRecommendationUser,
  getUser,
} from "@/services/UserService";
import { getFollow } from "@/services/FollowService";

export interface User {
  id: number;
  username: string;
  full_name: string;
  photo_profile: string;
  followerCount: number;
  followingCount: number;
  bio: string;
  created_at: string;
}

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
  recommendations: User[];
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
  recommendations: [],
};

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
    const response = await editUser(formData);
    return response;
  },
);

export const getRecommendedUser = createAsyncThunk(
  "user/getRecommendedUser",
  async (__, { rejectWithValue }) => {
    try {
      const response = await getRecommendationUser();
      return response;
    } catch (error) {
      return rejectWithValue("failed getting recommendation");
    }
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
      })
      //ambil data rekomendasi user
      .addCase(getRecommendedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload.data;
      });
  },
});

export const { updateUserProfile, clearUser } = userSlice.actions;
export default userSlice.reducer;
