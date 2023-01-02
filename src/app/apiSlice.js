import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
// import { logout } from '../../../../backend/controllers/authController'
import { setCredentials, logOut } from "../features/auth/slices/authSlice";
// import {dispatchL}

// Send headers along with our requests
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token; //retrieve the current accessToken in state
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Revalidating accessToken with RefreshEndpoint call
const baseQuerywithRefreshToken = async (args, api, extraOptions) => {
  //args returns requesturl, method and body ,
  //api returns signal, method and body ,

  // Check if any api request to backend via baseQery has an error of 403(expired access token error)
  let response = await baseQuery(args, api, extraOptions);

  if (response?.error?.status === 403) {
    console.log("Refreshing Token");

    // Request a new Refresh token from refresh url
    const refreshTokenRequest = await baseQuery(
      "/auth/refresh",
      api,
      extraOptions
    );

    // if request has a data object,destructure and dispatch the setCredential actionCreator with new accessToken
    if (refreshTokenRequest?.data) {
      // console.log({...refreshTokenRequest.data})
      api.dispatch(setCredentials({ ...refreshTokenRequest.data }));

      response = await baseQuery(args, api, extraOptions);
    }
    // Retry the failed request (response) again with new accessToken
    else {
      // console.log(refreshTokenRequest)
      if (refreshTokenRequest?.error?.status === 403) {
        refreshTokenRequest.error.data.message =
          "Login Expired . Please Login again";

        setTimeout(() => {
          api.dispatch(logOut());

          api.dispatch(apiSlice.util.resetApiState());
        }, 3000);
      }
      return refreshTokenRequest;
    }
  }
  return response;
};

// API accesspoint for all calls to backend
export const apiSlice = createApi({
  // Name of api reducer
  name: "api",
  //  Request details
  baseQuery: baseQuerywithRefreshToken,
  // Caching & invalidation types
  tagTypes: ["Posts, Properties, Users, Bookings", "Files"],

  // EndPoint Injections go in here
  endpoints: () => ({}),
});
