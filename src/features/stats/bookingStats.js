import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";

const bookingStatsAdapter = createEntityAdapter({
  selectId: (bookingStats) => bookingStats._id,
});

const initialState = bookingStatsAdapter.getInitialState();

const bookingStatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopTaskers: builder.query({
      query: () => `/stats/top-tasker`,
      transformResponse: (responseData) => {
        const taskers = responseData.map((response) => {
          response.id = response._id;
          return response;
        });
        return bookingStatsAdapter.setAll(initialState, taskers);
      },
      providesTag: (result, error, arg) => [
        { type: "Category", id: "id" },
        ...result.ids.map((id) => ({ type: "Category", id })),
      ],
    }),
  }),
});
