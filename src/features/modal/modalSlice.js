import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModalStatus: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      return {
        ...state,
        openModalStatus: true,
      };
    },

    closeAnyModal(state) {
      return {
        ...state,
        openModalStatus: false,
      };
    },
  },
});

export const { openModal, closeAnyModal } = modalSlice.actions;
export default modalSlice.reducer;
