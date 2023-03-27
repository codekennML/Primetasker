import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";

const commentAdapter = createEntityAdapter({
  selectId: (comment) => comment._id,
});

const initialState = commentAdapter.getInitialState({
  pageData: {},
});

const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsfortask: builder.query({
      query: (query) => {
        return {
          url: `comments/task`,
          method: "GET",
          params: {
            ...query,
          },
        };
      },
      transformResponse: (response) => {
        const { comments, meta } = response.data;
        const loadedComments = comments.map((comment) => {
          comment.id = comment._id;
          return comment;
        });
        // console.log(comments);
        return commentAdapter.setAll(
          { ...initialState, pageData: meta },
          loadedComments
        );
      },
    }),

    getCommentsReplies: builder.query({
      query: (query) => {
        return {
          url: `comments/reply`,
          method: "GET",
          params: {
            ...query,
          },
        };
      },
      transformResponse: (response) => {
        console.log(response.data);
        const { replies, meta } = response.data;
        const loadedReplies = replies.map((reply) => {
          reply.id = reply._id;
          return reply;
        });
        // console.log(comments);
        return commentAdapter.setAll(
          { ...initialState, pageData: meta },
          loadedReplies
        );
      },
    }),

    createComment: builder.mutation({
      query: (commentDetails) => {
        //Comment details contains a userId, taskId, files, isParent:is a reply, parent:the parent,if reply
        return {
          url: "/comments",
          method: "POST",
          body: {
            id: commentDetails.taskId,
            commentDetails: commentDetails,
          },
        };
      },
    }),

    createCommentReply: builder.mutation({
      query: (commentDetails) => {
        console.log(commentDetails);
        // console.log(commentDetails);
        //Comment details contains a userId, taskId, files, parent:is a reply, parent:the parent,if reply
        return {
          url: "/comments/reply",
          method: "POST",
          body: {
            commentDetails: commentDetails,
          },
        };
      },
    }),

    updateComment: builder.mutation({
      query: (id, commentDetails) => {
        return {
          url: "/comments",
          method: "PATCH",
          body: {
            id: id,
            fields: commentDetails,
          },
        };
      },
    }),

    deleteComment: builder.mutation({
      query: (id) => ({
        url: "/comments",
        method: "DELETE",
        body: {
          id: id,
        },
      }),
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useGetCommentsRepliesQuery,
  useCreateCommentReplyMutation,
  useGetCommentsfortaskQuery,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentApiSlice;
