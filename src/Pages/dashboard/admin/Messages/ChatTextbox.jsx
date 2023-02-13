import React from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { useSendMessageMutation } from "../../../../features/chats/slices/chatApiSlice";

const ChatTextbox = () => {
  const [message, setMessage] = useState("");
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage(message);
    setMessage("");
  };

  return (
    <div className=" w-full bg-red-300 fixed bottom-0 px-6 py-3">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        // TODO::INSERT EMOJI BUTTON
        </div> */}
          <input
            onChange={handleChange}
            type="text"
            id="document-upload"
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-gray-500 focus:border-gray-400 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-blue-500"
            placeholder="Type a message"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <FaPaperclip className="text-gray-400 text-base" />
          </button>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatTextbox;
