import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";

const customerStatsAdapter = createEntityAdapter({
  selectId: (customerStats) => customerStats._id,
});

const initialState = customerStatsAdapter.getInitialState();

const customerStatsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopCustomers: builder.query({
      query: () => `/stats/top-customers`,
      transformResponse: (responseData) => {
        const customers = responseData.map((response) => {
          response.id = response._id;
          return response;
        });
        return customerStatsAdapter.setAll(initialState, customers);
      },
      //  providesTag: (result, error, arg) => [
      //     { type: "Category", id: "id" },
      //     ...result.ids.map((id) => ({ type: "Category", id })),
      //   ],
    }),
  }),
});

export const { useGetTopCustomersQuery } = customerStatsApi;
