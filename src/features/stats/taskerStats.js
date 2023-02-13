import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";

const taskerStatsAdapter = createEntityAdapter({
  selectId: (taskerStats) => taskerStats._id,
});

const initialState = taskerStatsAdapter.getInitialState();

const taskerStatsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopTaskers: builder.query({
      query: () => `/stats/top-tasker`,
      transformResponse: (responseData) => {
        const taskers = responseData.map((response) => {
          response.id = response._id;
          return response;
        });
        return taskerStatsAdapter.setAll(initialState, taskers);
      },
      //  providesTag: (result, error, arg) => [
      //     { type: "Category", id: "id" },
      //     ...result.ids.map((id) => ({ type: "Category", id })),
      //   ],
    }),
  }),
});

export const { useGetTopTaskersQuery } = taskerStatsApi;
