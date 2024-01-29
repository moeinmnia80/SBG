import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.js";
import projectReducer from "../features/project/projectSlice.js";

const store = configureStore({
  reducer: { theme: themeReducer, project: projectReducer },
});

export default store;
