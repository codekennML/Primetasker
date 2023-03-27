import ChatUser from "./Messages/ChatUser";
import ChatMain from "./Messages/ChatMain";

import { useState } from "react";
import { useGetChatsQuery } from "../../../features/chats/slices/chatApiSlice";

import TopBar from "./TopBar";

const Notes = () => {
  // const { id: userId } = useAuth();

  const [selectedChat, setSelectedChat] = useState(undefined);
  // const [skip, setSkip] = useState(selectedChat?.chatId ? false : true);

  const [partnerDetails, setPartnerDetails] = useState({});

  // console.log(newMessage);
  const { data: conversations, isLoading, isSuccess } = useGetChatsQuery();

  let chats;
  if (isSuccess) {
    const { ids, entities } = conversations;
    chats = [...ids.map((id) => entities[id])];
  }
  console.log(chats);
  return (
    <section className=" bg-[#f5f7fb] ">
      <div className=" bg-[#f5f7fb] ">
        <TopBar headerText={`Conversations`} />
      </div>

      <section className="flex flex-row w-full h-screen  max-h-[calc(100vh_-_95px)] pt-6 pb-12 pl-6 ">
        <article className=" shadow  py-2 text-center bg-white max-w-[350px]  overflow-hidden  overflow-y-scroll scrollbar-hide relative pb-16  w-full">
          <div className="relative flex items-center justify-start space-x-3 px-4 pb-2  border-b">
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-indigo-500 block w-full outline-none pl-10 py-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <ul className="space-y-0">
            {isLoading
              ? "Loading conversations"
              : chats.map((chat) => {
                  return (
                    <ChatUser
                      chat={chat}
                      setChat={setSelectedChat}
                      setDetails={setPartnerDetails}
                    />
                  );
                })}
          </ul>
        </article>

        {/* <article className="w-2/3"> */}
        {selectedChat ? (
          <ChatMain details={partnerDetails} selectedChat={selectedChat} />
        ) : (
          <article className="h-full w-full flex justify-center items-center w-2/3">
            <p>Hi, Kennaya</p>
            <p>Start a conversation</p>
          </article>
        )}
        {/* </article> */}
      </section>
    </section>
  );
};

export default Notes;
