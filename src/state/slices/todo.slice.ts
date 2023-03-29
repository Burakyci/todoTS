import { ThunkAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../models/TodoModel";
import { ITodosState, ITodo, IOperationsType } from "../../types/todoType";
import todoService from "../../services/todoService";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkApi) => {
    const res = await todoService.getdata();
    if (Array.isArray(res)) {
      return res;
    } else if (typeof res === "string") {
      return thunkApi.rejectWithValue(res);
    } else {
      return thunkApi.rejectWithValue(res);
    }
  }
);

const initialState: ITodosState = {
  activeItemIndex: undefined,
  list: [],
  loading: false,
  error: null,
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
      const { title: message } = action.payload;
      const data = new TodoModel(message, false, state.list.length + 1, 1);
      const currentList = [...state.list];
      currentList.push({ ...data });
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
    activeTodoActive: (
      state,
      action: { payload: { index: number | undefined } }
    ) => {
      const { index } = action.payload;
      state.activeItemIndex = index;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.list = action.payload as ITodo[];
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { toggleDone, update, add, remove, activeTodoActive } =
  todoSlice.actions;
export default todoSlice.reducer;
