import React from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

const ChatTextbox = () => {
  return (
    <div class=" w-full bg-white sticky bottom-0 px-6 py-3">
      <form class="flex items-center">
        <label htmlFor="voice-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        // TODO::INSERT EMOJI BUTTON
        </div> */}
          <input
            type="text"
            id="document-upload"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-gray-500 focus:border-gray-400 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-blue-500"
            placeholder="Type a message"
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <FaPaperclip class="text-gray-400 text-base" />
          </button>
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatTextbox;
