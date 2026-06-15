import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  editUser,
  getRecommendationUser,
  getUser,
  searchUser,
} from "@/services/UserService";

export interface User {
  id: number;
  username: string;
  full_name: string;
  photo_profile: string;
  followerCount: number;
  followingCount: number;
  bio: string;
  created_at: string;
  isFollowed: boolean;
  followingList: followingList[];
  followerList: followerList[];
}

interface followingList {
  following_id: number;
  follower_id: number;
}

interface followerList {
  follower_id: number;
  following_id: number;
}

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
  recommendations: User[];
  searchResult: User[];
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
  recommendations: [],
  searchResult: [],
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

export const searchUserResult = createAsyncThunk(
  "user/searchUser",
  async (userData: string) => {
    try {
      const response = await searchUser(userData);
      return response;
    } catch (error) {
      console.log("error search users", error);
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
    updateRecommendationFollowState: (
      state,
      action: PayloadAction<{
        userId: number;
      }>,
    ) => {
      const recommendation = state.recommendations.find(
        (user) => user.id === action.payload.userId,
      );

      if (recommendation) {
        recommendation.isFollowed = !recommendation.isFollowed;
      }
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
      })
      //hasi search
      .addCase(searchUserResult.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResult = action.payload;
      });
  },
});

export const { updateUserProfile, clearUser, updateRecommendationFollowState } =
  userSlice.actions;
export default userSlice.reducer;
