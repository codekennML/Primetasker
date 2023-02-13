import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentModal: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      return {
        ...state,
        currentModal: action.payload,
      };
    },

    hideModal(state) {
      return {
        ...state,
        currentModal: "",
      };
    },

    closeAnyModal(state) {
      return {
        ...state,
      };
    },
  },
});

export const { showModal, hideModal, closeAnyModal } = modalSlice.actions;
export default modalSlice.reducer;
