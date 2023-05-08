import Image from "../../../../utils/Image";
import ChatHeader from "./ChatHeader";

const ChatSender = () => {
  return (
    <div class=" px-8 text-sm ">
      <article class="flex flex-row pt-6 pb-6 space-x-3 ">
        <div class="space-x-2">
          <Image width={`40px`} height={`40px`} />
          <p class="text-gray-600 font-medium text-xs py-1 text-center">
            09:00
          </p>
        </div>
        <div class="bg-neutral-100 text-gray-600 py-4 px-3 text-[.8rem] rounded-xl rounded-tl-none w-[350px] font-medium">
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
