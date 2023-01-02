import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer from "../features/auth/slices/authSlice";
import pageReducer from "../features/pagination/paginate";
import modalReducer from "../features/modal/modalSlice";
import darkModeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: darkModeReducer,
    auth: authReducer,
    modal: modalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),

  // TODO :: Turn off in Production

  devTools: true,
});
