import {
  createSelector,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";

const tasksAdapter = createEntityAdapter({
  selectId: (task) => task.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = tasksAdapter.getInitialState({
  pageData: {},
  newCount: 0,
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const task = JSON.parse(action.payload);
      console.log(task);
      state = {
        ...state,
        ids: state.ids.unshift(task._id),
        entities: { [task._id]: task, ...state.entities },
        newCount: state.newCount + 1,
      };
    },

    clearCount: (state, action) => {
      state = initialState;
    },
  },
});

const tasksApiCalls = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (query) => {
        const filterParams = JSON.stringify(query);
        return {
          url: "tasks",
          method: "GET",
          params: {
            filterParams,
          },
          // skipToken: true,
        };
      },
      transformResponse: (response) => {
        const { meta, tasks } = response.data;
        const loadedTasks = tasks.map((task) => {
          task.id = task._id;
          return task;
        });
        return tasksAdapter.setAll(
          { ...initialState, pageData: meta, newCount: 3 },
          loadedTasks
        );
      },
      providesTags: ["tasks"],
      //   async onCacheEntryAdded(
      //     arg,
      //     { getState, cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      //   ) {
      //     try {
      //       await cacheDataLoaded;

      //       console.log(getState());

      //       dispatch(getState())

      //       socket.on("message_received", (message) => {
      //         message?.chat._id === arg
      //           ? updateCachedData((draft) => {
      //               chatAdapter.upsertOne(draft, message);
      //             })
      //           : null;
      //       });
      //     } catch {}

      //     await cacheEntryRemoved;
      //   },
    }),

    getUserTasks: builder.query({
      query: (userId) => {
        return {
          url: `tasks/user/?${userId}`,
          method: "GET",
          params: {
            filterParams,
          },
          // skipToken: true,
        };
      },
      transformResponse: (response) => {
        const { meta, tasks } = response.data;
        const loadedTasks = tasks.map((task) => {
          task.id = task._id;
          return task;
        });
        return tasksAdapter.setAll(
          { ...initialState, pageData: meta, newCount: 3 },
          loadedTasks
        );
      },
      providesTags: ["tasks"],
      //   async onCacheEntryAdded(
      //     arg,
      //     { getState, cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      //   ) {
      //     try {
      //       await cacheDataLoaded;

      //       console.log(getState());

      //       dispatch(getState())

      //       socket.on("message_received", (message) => {
      //         message?.chat._id === arg
      //           ? updateCachedData((draft) => {
      //               chatAdapter.upsertOne(draft, message);
      //             })
      //           : null;
      //       });
      //     } catch {}

      //     await cacheEntryRemoved;
      //   },
    }),

    //Get all tasks by an Individual task

    getTaskById: builder.query({
      query: (id) => `/tasks/${id}`,
      transformResponse: (response) => {
        // console.log(response);
        var { task } = response.data;
        const loadedtask = task.map((task) => {
          task.id = task._id;
          return task;
        });
        return tasksAdapter.setAll(initialState, loadedtask);
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

    // ---------Create Individual Task

    createTask: builder.mutation({
      query: (initialTask) => ({
        url: "/tasks",
        method: "POST",
        body: {
          fields: initialTask,
        },
        invalidatesTags: (result, error, arg) => ["POST"],
      }),
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
  useCreateTaskMutation,
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
} = tasksAdapter.getSelectors((state) => state.tasks ?? initialState);

export const selectStreamedTasks = (state) => state.tasks;

console.log(selectStreamedTasks);

export const { clearCount, addTask } = taskSlice.actions;

export default taskSlice.reducer;
