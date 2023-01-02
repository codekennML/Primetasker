import { apiSlice } from "../../../app/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    dispatchLogin: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    dispatchGoogleSSO: builder.mutation({
      query: () => ({
        url: "/auth/google/callback",
        method: "GET",
        // body: { ...credentials },
      }),
    }),

    dispatchSignup: builder.mutation({
      query: (User) => ({
        url: "/auth/signup",
        method: "POST",
        body: {
          ...User,
          // userId : Number(User.userId)
        },
        providesTags: (result, error, arg) => [
          { type: "User", id: "ids" },
          ...result.ids.map((id) => ({ type: "User", id })),
        ],
        invalidatesTag: [{ type: "User", id: "ids" }],
      }),
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: {
          email,
        },
        providesTags: (result, error, arg) => [
          { type: "User", id: "ids" },
          ...result.ids.map((id) => ({ type: "User", id })),
        ],

        invalidatesTag: [{ type: "User", id: "ids" }],
      }),
    }),

    resetPassword: builder.mutation({
      query: (password, token) => ({
        url: "/auth/password-reset",
        method: "GET",
        body: {
          password: password,
          token: token,
        },
        providesTags: (result, error, arg) => [
          { type: "User", id: "ids" },
          ...result.ids.map((id) => ({ type: "User", id })),
        ],

        invalidatesTag: [{ type: "User", id: "ids" }],
      }),
    }),

    // Send a logout request to the logout handler url
    dispatchLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      // Watch for fufilment of logout request
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // Ensure request was successfull
        try {
          //TODO only await queryfulfilled // data returned is the cookie cleared message from our authcontroller
          // const { data }  =
          await queryFulfilled;

          dispatch(logOut()); //trigger the imported logout reducer action

          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000); //Reset and unmount state of ApiSlice after 1s
        } catch (err) {
          console.log(err);
        }
      },
    }),
    // Refresh AccessToken on expiry endpoint if any
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // Ensure request was successfull
        try {
          //TODO only await queryfulfilled no destructuring
          const { data } = await queryFulfilled;
          const { token } = data;
          dispatch(setCredentials({ token })); //trigger the imported logout reducer action
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useDispatchLogoutMutation,
  useDispatchLoginMutation,
  useDispatchGoogleSSOMutation,
  useDispatchSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
} = authApiSlice;
