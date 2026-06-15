import { login, register } from "@/services/AuthService";
import type { User } from "./UserSlicer";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface auth {
  LoginPayload: LoginPayload | null;
  RegisterPayload: RegisterPayload | null;
  token: string;
  user: User | null;
}

interface LoginPayload {
  emailorusername: string;
  password: string;
}

interface RegisterPayload {
  full_name: string;
  username: string;
  email: string;
  password: string;
}
const initialState: auth = {
  LoginPayload: null,
  RegisterPayload: null,
  token: "",
  user: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ emailorusername, password }: LoginPayload) => {
    const response = await login(emailorusername, password);

    localStorage.setItem("token", response.data.token);
    return response.data;
  },
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ full_name, username, email, password }: RegisterPayload) => {
    const response = await register(full_name, username, email, password);

    return response.data;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      //register
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export default authSlice.reducer;
