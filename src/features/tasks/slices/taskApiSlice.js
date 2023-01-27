import {
  createSelector,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";
import { store } from "../../../app/Store";

import { setPageInfo } from "../../pagination/paginate";

const tasksAdapter = createEntityAdapter({
  //   Sort tasks according by most recent based on date created
  // sortComparer : ((a,b) => b.date.localeCompare(a.date))
  selectId: (task) => task._id,
});

// unpopulated initial  state of adapter
const initialState = tasksAdapter.getInitialState();

// EndPoints injected to our api for everything tasks
export const tasksApiCalls = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Gets everything associated with the baseUrl/tasks Endpoint
    getTasks: builder.query({
      query: (query) => {
        return {
          url: `tasks`,
          method: "GET",
          params: {
            ...query,
          },
        };
      },

      transformResponse: (responseData) => {
        // console.log(responseData);
        const { tasks, meta } = responseData.data;
        const loadedtasks = tasks.map((task) => {
          task.id = task._id;
          return task;
        });

        store.dispatch(setPageInfo(meta));
        return tasksAdapter.setAll(initialState, loadedtasks);
      },

      // Use response to granulate lookup tags for caching and invalidation
      providesTag: (result, error, arg) => [
        { type: "Task", id: "id" },
        ...result.ids.map((id) => ({ type: "Task", id })),
      ],
    }),

    //Get all tasks by an Individual task

    getTaskById: builder.query({
      query: (id) => `/tasks/${id}`,

      transformResponse: (response) => {
        return tasksAdapter.setAll(initialState, response);
      },

      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Task", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Task", id })),
          ];
        } else return [{ type: "Task", id: "LIST" }];
      },
    }),

    // ---------Update Individual Task

    updateTask: builder.mutation({
      query: (initialTask) => ({
        url: "/tasks",
        method: "PATCH",
        body: {
          ...initialTask,
        },
        invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg }],
      }),
    }),

    // ---------Delete Individual Task
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: "/tasks",
        method: "DELETE",
        body: { id },

        invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
      }),
    }),
  }),
});

// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the gettasks is exported for use on dispactch
export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApiCalls;

// Access the result object from our query outside the TaskApiCalls function
export const selectTasksResult = tasksApiCalls.endpoints.getTasks.select();

// Create a memoized selector for  normalized state object with ids and entities
const selectTasksData = createSelector(
  selectTasksResult,
  (tasksResult) => tasksResult.data
);

// Custom Selectors used by RTK for granular control of lookups of the selectTasksData, LHS is inbuilt , RHS is destructured for understanding
// export const { taskMetaAdded } = taskSlice.actions;

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors(
  (state) => selectTasksData(state) ?? initialState
);
