import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";

const otpAdapter = createEntityAdapter({
  selectId: (otp) => otp._id,
});

const initialState = otpAdapter.getInitialState();

export const otpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOtp: builder.query({
      query: (taskId) => `otp/${taskId}`,
      transformResponse: (response) => console.log(response),
    }),
  }),
});

export const { useCreateOtpQuery } = otpApiSlice;
