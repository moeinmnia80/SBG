import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "dark",
};
const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (state.theme === action.payload) return;
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
