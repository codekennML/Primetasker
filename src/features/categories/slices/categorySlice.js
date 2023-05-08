import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const allTaskCategories = (state) => state.category.categories;

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
