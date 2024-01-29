import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: {
    id: 1,
    link: "https://monet-camping.netlify.app/",
    gitLink: "https://github.com/moeinmnia80/camping-project",
    webTitle: "Camping",
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
