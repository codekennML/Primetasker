import {
  createSelector,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";
import { store } from "../../../app/Store";

import { setPageInfo } from "../../pagination/paginate";

const bookingsAdapter = createEntityAdapter({
  // sortComparer : ((a,b) => b.date.localeCompare(a.date))
  selectId: (booking) => booking._id,
});

// unpopulated initial  state of adapter
const initialState = bookingsAdapter.getInitialState();

// EndPoints injected to our api for everything bookings
export const bookingsApiCalls = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets everything associated with the baseUrl/bookings Endpoint
    getBookings: builder.query({
      query: (query) => {
        return {
          url: `bookings`,
          method: "GET",
          params: {
            ...query,
          },
        };
      },

      transformResponse: (responseData) => {
        const { bookings, meta } = responseData.data;
        const loadedBookings = bookings.map((booking) => {
          booking.id = booking._id;
          return booking;
        });

        store.dispatch(setPageInfo(meta));
        return bookingsAdapter.setAll(initialState, loadedBookings);
      },

      // Use response to granulate lookup tags for caching and invalidation
      providesTag: (result, error, arg) => [
        { type: "Booking", id: "id" },
        ...result.ids.map((id) => ({ type: "Booking", id })),
      ],
    }),

    getBookingStats: builder.query({
      query: () => {
        return {
          url: "bookings/stats",
        };
      },

      transformResponse: (responseData) => {
        const { stats } = responseData;
        const loadedStats = stats.map((stat) => {
          stat.id = stat._id;
          return stat;
        });
        return bookingsAdapter.setAll(initialState, loadedStats);
      },
    }),

    //Get all bookings by an Individual booking

    getBookingById: builder.query({
      query: (id) => `bookings/${id}`,

      transformResponse: (response) => {
        return bookingsAdapter.setAll(initialState, response);
      },

      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Booking", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Booking", id })),
          ];
        } else return [{ type: "Booking", id: "LIST" }];
      },
    }),

    // ---------Update Individual Booking

    updateBooking: builder.mutation({
      query: (initialBooking) => ({
        url: "/bookings",
        method: "PATCH",
        body: {
          ...initialBooking,
        },
        invalidatesTags: (result, error, arg) => [{ type: "Booking", id: arg }],
      }),
    }),

    // ---------Delete Individual Booking
    deleteBooking: builder.mutation({
      query: ({ id }) => ({
        url: "/bookings",
        method: "DELETE",
        body: { id },
        // console.log(id)
        invalidatesTags: (result, error, arg) => [
          { type: "Booking", id: arg.id },
        ],
        // `console.log(id)`
      }),
    }),
  }),
});

// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the getbookings is exported for use on dispactch
export const {
  useGetBookingsQuery,
  useGetBookingStatsQuery,
  useGetBookingsByIdQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingsApiCalls;

// Access the result object from our query outside the BookingApiCalls function
export const selectBookingsResult =
  bookingsApiCalls.endpoints.getBookings.select();

// Create a memoized selector for  normalized state object with ids and entities
const selectBookingsData = createSelector(
  selectBookingsResult,
  (bookingsResult) => bookingsResult.data
);

// Custom Selectors used by RTK for granular control of lookups of the selectBookingsData, LHS is inbuilt , RHS is destructured for understanding
// export const { bookingMetaAdded } = bookingSlice.actions;

export const {
  selectAll: selectAllBookings,
  selectById: selectBookingById,
  selectIds: selectBookingIds,
} = bookingsAdapter.getSelectors(
  (state) => selectBookingsData(state) ?? initialState
);
