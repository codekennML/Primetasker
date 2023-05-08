import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../../app/apiSlice";

const sortComparer = (a, b) => {
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();

  if (dateA > dateB) {
    return -1;
  } else if (dateA === dateB) {
    return 0;
  } else {
    return 1;
  }
};

const offerAdapter = createEntityAdapter({
  selectId: (offer) => offer._id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const offerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOffer: builder.query({
      query: (query) => {
        return {
          url: "offers",
          method: "GET",
          params: {
            ...query,
          },
        };
      },
      transformResponse: (response) => {
        const { offers, meta } = response.data;

        const loadedOffers = offers.map((offer) => {
          offer.id = offer._id;
          return offer;
        });

        return offerAdapter.setAll(
          { ...initialState, pageData: meta },
          loadedOffers
        );
      },
    }),

    createOffer: builder.mutation({
      query: (offer) => ({
        url: "offers",
        method: "POST",
        body: {
          offerDetails: offer,
        },
        invalidatesTags: (result, error, arg) => ["Offer"],
      }),
    }),

    // ---------Update Individual Task
    updateOffer: builder.mutation({
      query: (offer) => ({
        url: "offers",
        method: "PATCH",
        body: {
          ...initialTask,
        },
        invalidatesTags: (result, error, arg) => ["Offer"],
      }),
    }),

    // ---------Delete Individual Task
    deleteOffer: builder.mutation({
      query: ({ id }) => ({
        url: "offers",
        method: "DELETE",
        body: { id },

        invalidatesTags: (result, error, arg) => ["Offer"],
      }),
    }),
  }),
});

export const {
  useGetOfferQuery,
  useCreateOfferMutation,
  useUpdateOfferMutation,
  useDeleteOfferMutation,
} = offerApiSlice;
