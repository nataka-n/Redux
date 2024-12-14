import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        comleted: false,
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTaskStatus, setFilter } = todoSlice.actions;
export default todoSlice.reducer;