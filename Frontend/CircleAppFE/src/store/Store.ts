import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./ThreadSlice";
import userReducer from "./UserSlicer";
import followReducer from "./FollowSlice";

export const store = configureStore({
  reducer: {
    thread: threadReducer,
    user: userReducer,
    follow: followReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
