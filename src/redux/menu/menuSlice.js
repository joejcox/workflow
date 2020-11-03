import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
    isSlim: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleMenuSlim: (state) => {
      state.isSlim = !state.isSlim;
    },
  },
});

export const { toggleMenu, toggleMenuSlim } = menuSlice.actions;

export const menuIsOpen = (state) => state.menu.isOpen;
export const menuIsSlim = (state) => state.menu.isSlim;

export default menuSlice.reducer;
