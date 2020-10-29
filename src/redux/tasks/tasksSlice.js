import { createSlice } from "@reduxjs/toolkit";
import tasks_data from "data/tasks_data.json";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    data: tasks_data,
  },
  reducers: {
    removeTask: (state, action) => {
      state.data = state.data.filter(
        (item) => item.customer_id !== action.payload
      );
    },
  },
});

export const { removeTask } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.data;

export default tasksSlice.reducer;
