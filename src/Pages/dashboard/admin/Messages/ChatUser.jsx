import useAuth from "../../../../hooks/useAuth";
import { format } from "date-fns";
import { useGetMessagesQuery } from "../../../../features/chats/slices/chatApiSlice";

const ChatUser = ({ chat, setChat, setDetails }) => {
  const { id: currentUserId } = useAuth();

  const { users, _id: chatId, latestMessage } = chat;

  function getChatPartner(users) {
    return users[0]._id === currentUserId ? users[1] : users[0];
  }

  const user = getChatPartner(users);

  const handleChatDetails = () => {
    setChat(chatId);
    setDetails({
      name: `${user.firstname} ${user.lastname}`,
      avatar: `${user.avatar}`,
    });
  };

  return (
    <li
      key={chatId}
      className=" list-none hover:bg-gray-100 cursor-pointer  px-3   "
      onClick={handleChatDetails}
    >
      <div className="flex flex-row justify-start w-full space-x-3">
        <div className="py-2">
          <img
            src={user.avatar}
            alt=""
            className="w-[45px] h-[45px] rounded-full object-cover object-center"
          />
        </div>

        <div className=" border-b flex flex-row flex-1 justify-between items-center   border-x-0">
          <div className="pl-0 space-y-1">
            <p className="text-[13px] font-semibold text-gray-600 text-left">
              {`${user.firstname} ${user.lastname}`}
            </p>
            <p className="  text-left text-[12px]  text-gray-700 text-ellipsis overflow-hidden w-52 whitespace-nowrap">
              {latestMessage?.body}
            </p>
          </div>

          <p className="flex flex-col space-y-1 px-3 ">
            <span className="text-[11.5px] font-medium">
              {latestMessage?.createdAt
                ? format(new Date(latestMessage?.createdAt), "HH:mm")
                : null}
            </span>
            <span className="bg-purple-700 rounded-full text-[10px] w-[20px] h-[20px] text-white inline-flex justify-center items-center  ">
              5
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ChatUser;
