import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../tasks/tasksSlice";
import menuReducer from "../menu/menuSlice";
import customersReducer from "../customers/customersSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    menu: menuReducer,
    customers: customersReducer,
  },
});
export default store;
