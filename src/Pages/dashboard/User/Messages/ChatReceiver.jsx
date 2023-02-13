import Image from "../../../../utils/Image";

const ChatReceiver = () => {
  return (
    <article class="flex flex-row pt-2 space-x-2 justify-end px-12 text-sm ">
      <div class="bg-violet-50 text-gray-600 py-4 px-3 rounded-xl rounded-tl-none w-[400px]">
        <p>
          Hi there. How are you ? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Libero odio,
        </p>
      </div>
      <div>
        <Image width={`40px`} height={`40px`} />
        <p class="text-gray-600 font-medium text-xs py-1 text-center">09:00</p>
      </div>
    </article>
  );
};

export default ChatReceiver;
