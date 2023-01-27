import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";

const categoryAdapter = createEntityAdapter({
  selectId: (category) => category._id,
});
const initialState = categoryAdapter.getInitialState();

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopCategories: builder.query({
      query: () => `/stats/top-categories`,
      transformResponse: (responseData) => {
        const categoryStat = responseData.map((response) => {
          response.id = response._id;
          return response;
        });
        return categoryAdapter.setAll(initialState, categoryStat);
      },
      providesTag: (result, error, arg) => [
        { type: "Category", id: "id" },
        ...result.ids.map((id) => ({ type: "Category", id })),
      ],
    }),
  }),
});

export const { useGetTopCategoriesQuery } = categoryApiSlice;
