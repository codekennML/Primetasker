import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draft: {
    title: "",
    taskTime: "",
    date: [{ startDate: "", endDate: "" }],
    category: "",
    taskType: "",
    location: "",
    details: "",
    files: [],
    budget: "",
  },
};

export const draftTaskSlice = createSlice({
  name: "draftTask",
  initialState: initialState,
  reducers: {
    // Action creator for setting a draft task  if a user abandons the task creation process
    setTask: (state, action) => {
      state.draft = action.payload;
      // console.log(state.token);
    },
  },
});

export const selectDraftTask = (state) => state.draftTask.draft;
export const { setTask } = draftTaskSlice.actions;

export default draftTaskSlice.reducer;
