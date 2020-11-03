import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../tasks/tasksSlice";
import menuReducer from "../menu/menuSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    menu: menuReducer,
  },
});
export default store;
