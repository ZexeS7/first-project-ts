import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  isComplited: boolean;
};
type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      if (action.payload.trim().length) {
        state.list.push({
          id: new Date().toISOString(),
          title: action.payload,
          isComplited: false,
        });
      }
    },
    remove(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
