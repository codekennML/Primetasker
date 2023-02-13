import { FaComment, FaLayerGroup, FaTools } from "react-icons/fa";
import DatePicker from "../../../utils/DatePicker";
import ChatHeader from "./Messages/ChatHeader";
// import ChatReceiver from "./Messages/ChatReceiver";
// import ChatSender from "./Messages/ChatSender";
// import ChatTextbox from "./Messages/ChatTextbox";
import ChatUser from "./Messages/ChatUser";
import Image from "../../../utils/Image";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { useGetChatsQuery } from "../../../features/chats/slices/chatApiSlice";
import useAuth from "../../../hooks/useAuth";
import TopBar from "./TopBar";

const Notes = () => {
  const { data: conversations, isLoading, isSuccess } = useGetChatsQuery();

  console.log(conversations);
  let chats;
  if (isSuccess) {
    const { ids, entities } = conversations;
    chats = [...ids.map((id) => entities[id])];
  }
  // const [messages, setMessages] = useState([]);
  // const [loading, setloading] = useState();

  // const { data, isSuccess, isLoading } = useGetMessagesQuery();
  // console.log(data)

  // let messages;
  // if (isSuccess) {
  //   const { ids, entities } = data;
  //   messages = [...ids.map((id) => entities[id])];
  // }

  return (
    <section className=" bg-[#f5f7fb] ">
      <div className=" bg-[#f5f7fb] ">
        <TopBar headerText={`Conversations`} />
      </div>

      <section className="flex flex-row w-full h-screen  max-h-[calc(100vh_-_75px)] pb-12  ">
        <article className=" shadow  py-3 text-center bg-white space-y-4 min-w-[320px]  overflow-hidden  overflow-y-scroll scrollbar-hide relative pb-16  w-1/3">
          <div className="relative flex items-center justify-start space-x-3 px-4">
            <form action=" " className="flex-1">
              <div className="relative pt-1  ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-1 pointer-events-none text-[12px]">
                  <span className="text-[12px]">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-indigo-500 block w-full outline-none pl-10 py-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search or start new chat"
                  required
                />
              </div>
            </form>
            <div>
              <img
                src="https://res.cloudinary.com/dpmj4sjm9/image/upload/v1670936724/shgglnhsftrwpjpbs5cp.jpg"
                className="rounded-full w-[35px] h-[35px] "
                width="50"
                height="50"
              />
            </div>
          </div>
          <ul className="space-y-3">
            {isLoading
              ? "Loading "
              : chats.map((chat) => {
                  return <ChatUser chat={chat} />;
                })}
          </ul>
        </article>

        <article className="flex-1 shadow  bg-gray-50 border-l my-0  relative overflow-hidden  overflow-y-scroll scrollbar-hide">
          <ChatHeader />
          {/* {messages.map((message) => {
            return (
              <>
                <div className="bg-violet-50 text-gray-600 py-4 px-3 rounded-xl rounded-tl-none w-[400px]">
                  <p>
                    Hi there. How are you ? Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Libero odio,
                    {message}
                  </p>
                </div>
                <div>
                  <Image width={`40px`} height={`40px`} />
                  <p className="text-gray-600 font-medium text-xs py-1 text-center">
                    09:00
                  </p>
                </div>
              </>
            );
          })} */}
          {/* <ChatSender /> */}
          <div className=" px-8 text-sm relative">
            <article className="flex flex-row pt-6 pb-6 space-x-3 ">
              <div className="space-x-2">
                <Image width={`40px`} height={`40px`} />
                <p className="text-gray-600 font-medium text-xs py-1 text-center">
                  09:00
                </p>
              </div>
              <div className="bg-neutral-100 text-gray-600 py-4 px-3 rounded-xl rounded-tl-none w-[450px]">
                <p>
                  Hi there. How are you ? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Libero odio, lloloolkiol
                </p>
              </div>
            </article>
          </div>

          {/* <ChatReceiver /> */}
          <article className="flex flex-row pt-2 space-x-2 justify-end px-12 text-sm ">
            <div className="bg-violet-50 text-gray-600 py-4 px-3 rounded-xl rounded-tl-none w-[400px]">
              <p>
                Hi there. How are you ? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Libero odio,
              </p>
            </div>
            <div>
              <Image width={`40px`} height={`40px`} />
              <p className="text-gray-600 font-medium text-xs py-1 text-center">
                09:00
              </p>
            </div>
          </article>

          {/* <ChatTextbox /> */}
          <div className=" w-full  bg-white absolute bottom-0 px-6 py-3">
            <form className="flex items-center">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        // TODO::INSERT EMOJI BUTTON
        </div> */}
                <input
                  type="text"
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
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Notes;
