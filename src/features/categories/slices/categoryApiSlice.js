import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";
import { store } from "../../../app/Store";
import { setCategories } from "./categorySlice";

const categoryAdapter = createEntityAdapter({
  selectId: (category) => category._id,
});
const initialState = categoryAdapter.getInitialState();

export const categoryApiSlice = apiSlice.injectEndpoints({
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

    getCategories: builder.query({
      query: (id) => `/categories/${id ? id : ""}`,
      transformResponse: (responseData) => {
        console.log(responseData);
        const { data } = responseData;
        const categories = data.map((response) => {
          response.id = response._id;
          return response;
        });

        const primetaskerTaskCategories = [
          ...categories.map((category) => ({
            id: category?.id,
            name: category?.title,
            value: category?.categoryId,
          })),
        ];

        store.dispatch(setCategories(primetaskerTaskCategories));

        return categoryAdapter.setAll(initialState, categories);
      },
      providesTag: (result, error, arg) => [
        { type: "Category", id: "id" },
        ...result.ids.map((id) => ({ type: "Category", id })),
      ],
    }),

    createCategory: builder.mutation({
      query: (categoryDetails) => {
        //Comment details contains a userId, taskId, files, isParent:is a reply, parent:the parent,if reply
        return {
          url: "/categories",
          method: "POST",
          body: {
            categoryInfo: categoryDetails,
          },
        };
      },
    }),
  }),
});

export const {
  useGetTopCategoriesQuery,
  useCreateCategoryMutation,
  useGetCategoriesQuery,
} = categoryApiSlice;
