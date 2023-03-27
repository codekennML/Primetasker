import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isEstablishingConnection: false,
  isConnected: false,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    startConnecting: (state, action) => {
      state.isEstablishingConnection = true;
    },
    connectionEstablished: (state) => {
      (state.isConnected = true), (state.isEstablishingConnection = true);
    },
  },
  extraReducers: {},
});

export const { startConnecting, connectionEstablished } = chatSlice.actions;

export default chatSlice;
