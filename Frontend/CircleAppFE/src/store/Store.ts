import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./ThreadSlice";
import userReducer from "./UserSlicer";

export const store = configureStore({
  reducer: {
    thread: threadReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
