import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer from "../features/auth/slices/authSlice";
import pageReducer from "../features/pagination/paginate";
import modalReducer from "../features/modal/modalSlice";
import darkModeReducer from "../features/theme/themeSlice";
import uploadReducer from "../features/fileUploads/uploadSlice";

import draftTaskReducer, {
  draftTaskSlice,
} from "../features/tasks/slices/taskSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const preloadedTask = JSON.parse(localStorage.getItem("draftTask"));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Name of the slice to persist
};

const reducer = combineReducers({
  page: pageReducer,
  theme: darkModeReducer,
  auth: authReducer,
  modal: modalReducer,
  draftTask: draftTaskReducer,
  progress: uploadReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),

  // TODO :: Turn off in Production

  devTools: true,
});

// {
//   serializableCheck: {
//     ignoredActions: [setTask],
//   },
// }
