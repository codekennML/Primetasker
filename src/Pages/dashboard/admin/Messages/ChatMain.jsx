import { useEffect, useState, useRef, useMemo } from "react";
import {
  FaCamera,
  FaEllipsisH,
  FaMicrophone,
  FaPaperclip,
  FaPaperPlane,
  FaPhone,
  FaRegImages,
  FaRegPaperPlane,
  FaTelegramPlane,
  FaVideo,
} from "react-icons/fa";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../../../features/chats/slices/chatApiSlice";
import Image from "../../../../utils/Image";
import { format } from "date-fns";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../utils/Spinner";
import ChatBox from "./ChatBox";

const ChatMain = ({ details, selectedChat }) => {
  const [showFileBox, setShowFileBox] = useState(false);

  const { id: userId } = useAuth();
  const scrollRef = useRef(null);

  const {
    data: messages,
    isLoading: loadingMessages,
    isSuccess: messagesLoaded,
    isUninitialiazed,
  } = useGetMessagesQuery(selectedChat, {
    refetchOnMountOrArgChange: true,
  });

  let chatMessages;

  if (messagesLoaded) {
    // console.log(messages);
    const { ids, entities } = messages;
    chatMessages = [...ids.map((id) => entities[id])];
  }

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behaviour: "smooth" });
  }, [chatMessages]);

  // console.log(chatMessages);

  return (
    <>
      {loadingMessages ? (
        <div className="h-full w-full flex justify-center items-center ">
          <p>
            <Spinner visible={`visible`} />
          </p>
        </div>
      ) : (
        <article className="flex-1  shadow  bg-gray-100 border-l my-0  relative overflow-hidden  overflow-y-scroll scrollbar-hide">
          <section className=" sticky top-0 z-20 flex flex-row justify-between items-center border-b-2 pb-3 pt-2 px-8 bg-white border-gray-200">
            <div className=" flex flex-row items-center space-x-3">
              <Image avatar={details.avatar} width={`35px`} height={`35px`} />
              <p className="text-gray-600 text-[14px] font-medium">
                {details.name}
              </p>
            </div>
            <article className="flex flex-row space-x-6 text-purple-700 text-lg">
              <button>
                <FaVideo />
              </button>
              <button className="cursor-pointer">
                <FaPhone className="rotate-90" />
              </button>

              <button>
                <FaEllipsisH />
              </button>
            </article>
          </section>

          <article className="bg-neutral-50 bg-center flex flex-col  px-8 max-h-[calc(100%_-_100px)] overflow-scroll scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-gray-50 ">
            {chatMessages &&
              chatMessages.map((chatMessage) => {
                return (
                  <>
                    <div
                      className={`
                       ${
                         chatMessage.sender._id === userId
                           ? "bg-white  py-2  self-end after:absolute after:-top-3 after:-right-1 after:border-l-[12px] after:border-l-transparent after:border-b-[20px] after:border-b-white after:border-r-transparent after:border-t-[0px] after:-z-5  after:transform after:rotate-[45deg]"
                           : "bg-violet-200  py-2 self-start  before:absolute before:-top-3 before:-left-1 before:border-l-[12px] before:border-l-transparent before:border-t-[20px] before:border-t-violet-200 before:border-r-transparent before:border-b-[0px] before:-z-5  before:transform before:rotate-[135deg]"
                       }  max-w-[65%] relative  my-3 px-2 rounded-md mx-3 `}
                    >
                      {chatMessage?.files.length > 0
                        ? chatMessage.files.map((file) => (
                            <img
                              src={file.url}
                              width={200}
                              height={400}
                              className="rounded-lg"
                            />
                          ))
                        : null}
                      <p className="text-[12px] font-medium px-1  pr-8 messageText">
                        {chatMessage.body}
                      </p>
                      <span className="sub text-[9px] absolute right-1 bottom-0  inline float-right">{`${format(
                        new Date(chatMessage.createdAt),
                        "HH:mm"
                      )}`}</span>
                    </div>
                  </>
                );
              })}
            <div className="py-6" ref={scrollRef}></div>
          </article>

          <ChatBox
            showFileBox={showFileBox}
            setShowFileBox={setShowFileBox}
            selectedChat={selectedChat}
          />
        </article>
      )}
    </>
  );
};

export default ChatMain;
