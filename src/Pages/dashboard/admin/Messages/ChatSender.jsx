import Image from "../../../../utils/Image";
import ChatHeader from "./ChatHeader";

const ChatSender = () => {
  return (
    <div className=" px-8 text-sm ">
      <article className="flex flex-row pt-6 pb-6 space-x-3 ">
        <div className="space-x-2">
          <Image width={`40px`} height={`40px`} />
          <p className="text-gray-600 font-medium text-xs py-1 text-center">
            09:00
          </p>
        </div>
        <div className="bg-neutral-100 text-gray-600 py-4 px-3 rounded-xl rounded-tl-none w-[450px]">
          <p>
            Hi there. How are you ? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Libero odio, lloloolkiol
          </p>
        </div>
      </article>
    </div>
  );
};

export default ChatSender;
