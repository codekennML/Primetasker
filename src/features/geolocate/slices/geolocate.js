import { apiSlice } from "../../../app/apiSlice";
import { store } from "../../../app/Store";
import { setUserInfo } from "./geolocateSlice";

export const IPinfoSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    dispatchGetIP: builder.query({
      query: (credentials) => ({
        url: "/users/ip",
        method: "GET",
      }),
      transformResponse: (response) => {
        const { IPinfo } = response.data;
        console.log(IPinfo);

        store.dispatch(setUserInfo(IPinfo));
      },
    }),
  }),
});

export const { useDispatchGetIPMutation } = IPinfoSlice;
