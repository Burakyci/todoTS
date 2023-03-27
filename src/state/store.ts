import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todo.slice';

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})