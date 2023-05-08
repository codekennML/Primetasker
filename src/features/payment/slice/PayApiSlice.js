import { apiSlice } from "../../../app/apiSlice";

const offerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDeposits: builder.query({
      query: (query) => {
        return {
          url: "pay",
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

    createDeposit: builder.mutation({
      query: (paymentDetails) => {
        const method = paymentDetails.method;

        return {
          url: `/pay/${method}`,
          method: "POST",
          body: paymentDetails,
          //   invalidatesTags: (result, error, arg) => ["Offer"],
        };
      },
    }),
  }),
});

export const { useCreateDepositMutation } = offerApiSlice;
