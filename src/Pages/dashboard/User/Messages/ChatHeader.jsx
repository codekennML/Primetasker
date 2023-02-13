import { FaEllipsisH, FaPhone, FaTelegramPlane, FaVideo } from "react-icons/fa";
import Image from "../../../../utils/Image";
const ChatHeader = () => {
  return (
    <article class=" sticky top-0 z-20 flex flex-row justify-between items-center border-b-2 pb-3 pt-2 px-8 bg-white border-gray-200">
      <div class=" flex flex-row items-center space-x-3">
        <Image width={`40px`} height={`40px`} />
        <p class="text-gray-600 font-medium text-base">Kennaya Jay</p>
      </div>
      <article class="flex flex-row space-x-6 text-gray-500 text-lg">
        <button class="cursor-pointer">
          <FaPhone class="rotate-90" />
        </button>
        <button>
          <FaVideo />
        </button>
        <button>
          <FaEllipsisH />
        </button>
      </article>
    </article>
  );
};

export default ChatHeader;
