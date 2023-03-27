import { createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../models/TodoModel";
import { ITodosState, ITodoType } from "../../types/todoType";

const initialState: ITodosState = {
  activeItemIndex: undefined,
  list: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    update: (state, action: {
      payload: {
        id: number,
        message: string
      }
    }) => {
      const { id, message } = action.payload;
      const currentList = [...state.list];
      const targetIndex = currentList.findIndex(c => c.id === id);
      if (targetIndex > -1) {
        const _todo = currentList[targetIndex];
        _todo.message = message;
        currentList.splice(targetIndex, 1, _todo);
      }
      state.list = currentList;
    },
    delete: (state, action: {
      payload: {
        id: number
      }
    }) => {

    },
    add: (state, action: {
      payload: ITodoType
    }) => {
      const { message } = action.payload;
      const data = new TodoModel(message);
      const currentList = [...state.list];
      currentList.push({
        ...data
      });
      state.list = currentList;
    },
    toggleDone: (state, action: {
      payload: {
        id: number
      }
    }) => {
      const { id } = action.payload;
      const currentList = [...state.list];
      const targetIndex = currentList.findIndex(c => c.id === id);
      if (targetIndex > -1) {
        const _todo = currentList[targetIndex];
        _todo.done = !_todo.done;
        currentList.splice(targetIndex, 1, _todo);
      }
      state.list = currentList;
    }
  },
  extraReducers: {

  }
});

export default todoSlice;

