import {
  createSelector,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";
import { store } from "../../../app/Store";

// import { setPaginationData } from "./UserSlice";
import { setPageInfo } from "../../pagination/paginate";
// import (selectPaginationData)

const usersAdapter = createEntityAdapter({
  //   Sort users according by most recent based on date created
  // sortComparer : ((a,b) => b.date.localeCompare(a.date))
  selectId: (user) => user._id,
});

// unpopulated initial  state of adapter
const initialState = usersAdapter.getInitialState();

// EndPoints injected to our api for everything users
export const usersApiCalls = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets everything associated with the baseUrl/users Endpoint
    getUsers: builder.query({
      query: (query) => {
        return {
          url: `users`,
          method: "GET",
          params: {
            ...query,
          },
        };
      },

      transformResponse: (responseData) => {
        const { data, ...payload } = responseData;
        const loadedUsers = data.map((user) => {
          user.id = user._id;
          return user;
        });

        store.dispatch(setPageInfo(payload));
        return usersAdapter.setAll(initialState, loadedUsers);
      },

      // Use response to granulate lookup tags for caching and invalidation
      providesTag: (result, error, arg) => [
        { type: "User", id: "id" },
        ...result.ids.map((id) => ({ type: "User", id })),
      ],
    }),

    //Get all users by an Individual user

    getUserById: builder.query({
      query: (id) => `/users/${id}`,

      transformResponse: (response) => {
        // response.id = response._id;

        // console.log(response);

        return usersAdapter.setAll(initialState, response);
      },

      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else return [{ type: "User", id: "LIST" }];
      },

      // (result, error, arg) => [
      //     { type: "User", id: arg },
      //     ...result.ids.map((id) => ({ type: "User", id: arg.id })),
      //   ],
    }),

    // ---------Update Individual User

    updateUser: builder.mutation({
      query: (initialUser) => ({
        url: "/users",
        method: "PATCH",
        body: {
          ...initialUser,
        },
        invalidatesTags: (result, error, arg) => [{ type: "User", id: arg }],
      }),
    }),

    // ---------Delete Individual User
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/users",
        method: "DELETE",
        body: { id },
        // console.log(id)
        invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
        // `console.log(id)`
      }),
    }),
  }),
});

// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the getusers is exported for use on dispactch
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiCalls;

// Access the result object from our query outside the UserApiCalls function
export const selectUsersResult = usersApiCalls.endpoints.getUsers.select();

// Create a memoized selector for  normalized state object with ids and entities
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data
);

// Custom Selectors used by RTK for granular control of lookups of the selectUsersData, LHS is inbuilt , RHS is destructured for understanding
// export const { userMetaAdded } = userSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);
