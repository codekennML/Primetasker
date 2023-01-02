import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageInfo: {},
};

const pageSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageInfo: (state, action) => {
      state.pageInfo = action.payload;
    },
  },
});

export const pageInfo = (state) => state.page.pageInfo;

export const { setPageInfo } = pageSlice.actions;
export default pageSlice.reducer;
