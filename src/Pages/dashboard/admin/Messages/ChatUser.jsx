import useAuth from "../../../../hooks/useAuth";
import { format } from "date-fns";
import { useGetMessagesQuery } from "../../../../features/chats/slices/chatApiSlice";

const ChatUser = ({ chat }) => {
  const { id: currentUserId } = useAuth();

  const { users, _id: chatId, latestMessage } = chat;

  // const { messages, isLoading, isSuccess } = useGetMessagesQuery({
  //   chatId : chatId
  // });

  function getChatPartner(users) {
    return users[0]._id === currentUserId ? users[1] : users[0];
  }

  const user = getChatPartner(users);

  const accessChat = async (chatId) => {
    //get individual chat using getIndividual chat endpoint at backend
  };

  return (
    <li
      className=" border-y list-none hover:bg-gray-100 cursor-pointer  px-3   "
      onClick={() => accessChat({ chatId })}
    >
      <div className="flex flex-row justify-start w-full ">
        <div className="py-2">
          <img
            src={user.avatar}
            alt=""
            className="w-[45px] h-[45px] rounded-full object-cover object-center"
          />
        </div>

        <div className="flex flex-row flex-1 justify-between items-center  py-2 border-x-0">
          <div className="pl-3 space-y-1">
            <p className="text-[14px] font-semibold text-gray-600 text-left">
              {`${user.firstname} ${user.lastname}`}
            </p>
            <p className="  text-left text-[12px]  text-gray-700 text-ellipsis overflow-hidden w-52 whitespace-nowrap">
              {latestMessage.body}
            </p>
            {/* <p className="text-xs"> Hi there, how are you ?</p> */}
          </div>

          <p className="flex flex-col space-y-1 px-3 ">
            <span className="text-[11.5px] font-medium">
              {format(new Date(latestMessage.createdAt), "HH:mm")}
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
