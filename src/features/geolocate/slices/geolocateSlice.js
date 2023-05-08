import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAgent: {},
};

const userAgentSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userAgent = action.payload;
    },
  },
});

export const userLocaleInfo = (state) => state.userInfo.userAgent;

export const { setUserInfo } = userAgentSlice.actions;
export default userAgentSlice.reducer;
