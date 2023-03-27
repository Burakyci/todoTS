import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todo.slice";

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
