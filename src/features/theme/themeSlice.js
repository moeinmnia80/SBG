import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem("theme") || "" };
const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (state.theme === action.payload) return;
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
