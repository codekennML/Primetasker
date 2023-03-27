import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentModal: "",
  modalData: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      console.log(action);
      return {
        ...state,
        ...action.payload,
      };
    },

    hideModal(state) {
      return {
        ...state,
        currentModal: "",
        modalData: null,
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
