import { FaEllipsisH, FaPhone, FaTelegramPlane, FaVideo } from "react-icons/fa";
import Image from "../../../../utils/Image";
const ChatHeader = () => {
  return (
    <article class=" sticky top-0 z-20 flex flex-row justify-between items-center border-b-2 pb-3 pt-2 px-8 bg-slate-100 border-gray-200">
      <div class=" flex flex-row items-center space-x-3">
        <Image width={`35px`} height={`35px`} />
        <p class="text-gray-600 text-[.9rem] font-semibold">Kennaya Jay</p>
      </div>
      <article class="flex flex-row space-x-6 text-gray-500 text-lg">
        <button class="cursor-pointer text-brand-text">
          <FaPhone class="rotate-[90deg]" />
        </button>
        {/*  <button>
          <FaVideo />
        </button>
        <button>
          <FaEllipsisH />
        </button> */}

        <p className="text-brand-text-deep font-medium text-[.8rem]">
          View Profile
        </p>
      </article>
    </article>
  );
};

export default ChatHeader;
