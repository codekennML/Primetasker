import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleChat: 0,
  signup: 0,
  deposit: 0,
  withdrawal: 0,
  taskCreated: 0,
  bookingCreated: 0,
  bookingCompleted: 0,
};

const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    // addChatNotification : (state) =>{
    //     return ({...state, state.singleChat + 1 })
    // },

    clearNotifications: (state) => {
      return Object.keys(state).forEach((key) => (state[key] = 0));
    },
  },
  extraReducers: {},
});

export const singleChatNotify = (state) => state.notify.singleChat;
export const { clearNotifications } = notifySlice.actions;
export default notifySlice.reducer;
