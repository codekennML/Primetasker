import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/apiSlice";
import { io } from "socket.io-client";
import { ErrorResponse } from "@remix-run/router";

const chatAdapter = createEntityAdapter({
  selectId: (chat) => chat._id,
});

const chatEvent = {
  SendMessage: "send_message",
  RequestAllMessages: "request_all_messages",
  SendAllMessages: "send_all_messages",
  receive: "receive_message",
};

const initialState = chatAdapter.getInitialState();

let socket;
function getSocket() {
  if (!socket) {
    socket = io("http://localhost:3500");
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
    }),

    getMessages: builder.query({
      query: () => "/chats/getMessages",

      transformResponse(response) {
        return chatAdapter.addMany(initialState, response);
      },
      // async onCacheEntryAdded(
      //   message,
      //   { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      // ) {
      //   const socket = getSocket();
      //   try {
      //     await cacheDataLoaded;

      //     socket.on("connect", () => {
      //       socket.emit(chatEvent.RequestAllMessages);
      //     });

      //     socket.on(chatEvent.SendAllMessages, (messages) => {
      //       updateCachedData((draft) => {
      //         chatAdapter.upsertMany(draft, ...messages);
      //       });
      //     });

      //     socket.on(chatEvent.receive, (message) => {
      //       updateCachedData((draft) => {
      //         chatAdapter.upsertOne(draft, message);
      //       });
      //     });
      //   } catch {
      //     // Errors
      //   }

      //   await cacheEntryRemoved;
      //   socket.off("connect");
      //   socket.off(chatEvent.SendAllMessages);
      //   socket.off(chatEvent.ReceiveMessage);
      // },
    }),
    sendMessage: builder.mutation({
      query: (message) => {
        console.log(message);
        // const socket = getSocket();
        // return new Promise((resolve) => {
        //   socket.emit(chatEvent.SendMessage, message, (chat) => {
        //     resolve({ data: chat });
        //   });
        // });
      },
    }),
  }),
});

export const { useGetChatsQuery, useGetMessagesQuery, useSendMessageMutation } =
  chatApiSlice;
