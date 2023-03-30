import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../models/TodoModel";
import { ITodosState, ITodo } from "../../types/todoType";
import todoServices from "../../services/todoServices";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkApi) => {
    const result = await todoServices.getTodos();
    if (Array.isArray(result)) {
      return result;
    } else if (typeof result === "string") {
      return thunkApi.rejectWithValue(result);
    } else {
      return thunkApi.rejectWithValue("Unknown error");
    }
  }
);

const initialState: ITodosState = {
  activeItemIndex: undefined,
  list: [],
  error: undefined,
  loading: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    update: (state, action: { payload: { id: number; message: string } }) => {
      const { id, message } = action.payload;
      const currentList = [...state.list];
      const targetIndex = currentList.findIndex((c) => c.id === id);
      if (targetIndex > -1) {
        const _todo = currentList[targetIndex];
        _todo.title = message;
        currentList.splice(targetIndex, 1, _todo);
      }
      state.list = currentList;
    },
    remove: (state, action: { payload: { id: number } }) => {
      const { id } = action.payload;
      const currentList = state.list.filter((td) => td.id !== id);
      state.list = currentList;
    },
    add: (state, action: { payload: ITodo }) => {
      const { title: message, id } = action.payload;

      const data = new TodoModel(message, false, state.list.length + 1);
      const currentList = [...state.list];
      currentList.push({
        ...data,
      });
      state.list = currentList;
    },
    toggleDone: (state, action: { payload: { id: number } }) => {
      const { id } = action.payload;
      const currentList = [...state.list];
      const targetIndex = currentList.findIndex((c) => c.id === id);
      if (targetIndex > -1) {
        const _todo = currentList[targetIndex];
        _todo.complated = !_todo.complated;
        currentList.splice(targetIndex, 1, _todo);
      }
      state.list = currentList;
    },
    setActiveItemIndex: (state, action: { payload: number | undefined }) => {
      state.activeItemIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.list = action.payload as ITodo[];
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { toggleDone, update, add, remove, setActiveItemIndex } =
  todoSlice.actions;

export default todoSlice.reducer;
