import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";
import { io } from "socket.io-client";

const chatAdapter = createEntityAdapter({
  selectId: (chat) => chat._id,
});

const chatEvent = {
  joinChat: "join chat",
  SendMessage: "new_message",
  RequestAllMessages: "request_all_messages",
  SendAllMessages: "send_all_messages",
  receive: "message_received",
};

const initialState = chatAdapter.getInitialState();

let socket;
function getSocket() {
  if (!socket) {
    try {
      socket = io("http://localhost:3500");
      console.log("Socket Connected");
    } catch (err) {
      console.log("Socket Disconnected");
    }
  }
  return socket;
}
const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => `/chats/`,
      transformResponse: (response) => {
        return chatAdapter.setAll(initialState, response);
      },
      providesTags: (_) => {
        return ["Chat"];
      },
    }),
    getMessages: builder.query({
      query: (arg) => `/messages/getMessages/${arg}`,

      transformResponse: (response) => {
        return chatAdapter.addMany(initialState, response);
      },

      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      ) {
        const socket = getSocket();
        socket.emit(chatEvent.joinChat, arg);

        try {
          await cacheDataLoaded;

          socket.on("message_received", (message) => {
            message?.chat._id === arg
              ? updateCachedData((draft) => {
                  chatAdapter.upsertOne(draft, message);
                })
              : null;
          });
        } catch {}

        await cacheEntryRemoved;
        socket.disconnect();
      },
    }),

    sendMessage: builder.mutation({
      query: (message) => ({
        url: "/messages",
        method: "POST",
        body: {
          messageText: message.messageText,
          files: message.files,
          chatId: message.chatId,
        },
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        const { chatId } = args;
        try {
          const { data: latestMessage } = await queryFulfilled;
          console.log("latest");
          await dispatch(
            apiSlice.util.updateQueryData("getMessages", chatId, (draft) => {
              chatAdapter.upsertOne(draft, latestMessage);
            })
          );
          const socket = getSocket();
          socket.emit("new_message", latestMessage);
        } catch {}
      },
      invalidatesTags: (_) => {
        return ["Chat"];
      },
    }),
  }),
});

export const { useGetChatsQuery, useGetMessagesQuery, useSendMessageMutation } =
  chatApiSlice;
