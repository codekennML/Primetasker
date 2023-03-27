import { createSlice } from "@reduxjs/toolkit";
import { tasksAdapter, initialState } from "./taskApiSlice";

export const draftTaskSlice = createSlice({
  name: "draftTask",
  initialState: initialState,

  reducers: {
    // Action creator for setting a draft task  if a user abandons the task creation process
    clearNotifis: (state) => {
      console.log(tasksAdapter);
      tasksAdapter.upsertOne(state, { newCount: 0 });
    },
    setNotifis: (state, action) => {
      state.notification = state.notification + 1;
      console.log(state.notification);
    },
  },
});
// tasksAdapter.getInitialState({ newCount: 0 }),
// clearNotifis
export const { clearNotifis } = draftTaskSlice.actions;

export default draftTaskSlice.reducer;
