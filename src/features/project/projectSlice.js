import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: {
    id: 0,
    link: "",
    gitLink: "https://github.com/moeinmnia80",
    webTitle: "",
  },
};
const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.project = action.payload;
    },
  },
});

export default projectSlice.reducer;
export const { changeTab } = projectSlice.actions;
