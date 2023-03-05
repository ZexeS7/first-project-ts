import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import newsSlice from "./newsSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    news: newsSlice,
    login: loginSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
