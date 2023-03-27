import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";

const flagAdapter = createEntityAdapter({
  selectId: (flag) => flag._id,
});

const initialState = flagAdapter.getInitialState();

export const flagApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFlag: builder.mutation({
      query: (flagFields) => ({
        url: "/flags",
        method: "POST",
        body: flagFields,
      }),
    }),
  }),
});

export const { useCreateFlagMutation } = flagApiSlice;
