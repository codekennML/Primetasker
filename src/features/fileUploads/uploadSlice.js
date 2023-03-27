import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploading: false,
};

const uploadProgressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    uploading: (state) => {
      return (state.uploading = true);
    },
    uploaded: (state) => {
      return (state.uploading = false);
    },
  },
});

export const isUploading = (state) => state.progress.uploading;

export const { uploading, uploaded } = uploadProgressSlice.actions;

export default uploadProgressSlice.reducer;
