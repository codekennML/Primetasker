import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer from "../features/auth/slices/authSlice";
import pageReducer from "../features/pagination/paginate";
import modalReducer from "../features/modal/modalSlice";
import darkModeReducer from "../features/theme/themeSlice";
import draftTaskReducer, {
  draftTaskSlice,
  setTask,
} from "../features/tasks/slices/taskSlice";
import { useEffect } from "react";

const preloadedTask = JSON.parse(localStorage.getItem("draftTask"));
console.log(preloadedTask);
export const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: darkModeReducer,
    auth: authReducer,
    modal: modalReducer,
    draftTask: draftTaskReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  preloadedState: {
    draftTask: {
      draft: preloadedTask
        ? preloadedTask
        : draftTaskSlice.getInitialState().draft,
    },
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),

  // TODO :: Turn off in Production

  devTools: true,
});

// {
//   serializableCheck: {
//     ignoredActions: [setTask],
//   },
// }
