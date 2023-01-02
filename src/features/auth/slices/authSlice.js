import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Action creator for setting accessToken after a user has clicked the login button
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      // console.log(state.token);
    },
    // Action creator for setting accessToken aftesr a user has clicked the logout button
    logOut: (state) => {
      state.token = null;
      // console.log(state.token)
    },
  },
});

export const selectCurrentToken = (state) => state.auth.token;

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
