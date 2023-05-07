// import { FaComment, FaLayerGroup, FaTools } from "react-icons/fa";

import ChatHeader from "./Messages/ChatHeader";
import ChatReceiver from "./Messages/ChatReceiver";
import ChatSender from "./Messages/ChatSender";
import ChatTextbox from "./Messages/ChatTextbox";
import ChatUser from "./Messages/ChatUser";

const Notes = () => {
  return (
    <section class="   flex justify-center items-center">
      <section class="flex flex-row max-w-screen-xl mx-auto max-h-[75vh]  ">
        <article class=" bg-slate-100  py-3 text-center space-y-4 min-w-[260px]  overflow-hidden rounded-l-xl overflow-y-scroll scrollbar-hide relative pb-3 border-r-2 border-green-100 ">
          <div class="relative ">
            <form action="sticky top-0 ">
              <h2 className="font-semibold text-gray-600 ">
                All conversations
              </h2>
            </form>
          </div>
          <ul class="space-y-3  ">
            <ChatUser
              name={`Amelia Nelson`}
              img={`https://images.pexels.com/photos/1170261/pexels-photo-1170261.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
            <ChatUser
              name={`Jessie Rhodes`}
              img={`https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
            <ChatUser
              name={`Samantha Martin`}
              img={`https://images.pexels.com/photos/3813342/pexels-photo-3813342.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
            <ChatUser
              name={`Alicia Keys`}
              img={`https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
          </ul>
        </article>

        <article class=" bg-gray-50 border-l my-0  relative overflow-hidden  overflow-y-scroll scrollbar-hide">
          <ChatHeader />
          <ChatSender />
          <ChatReceiver />
          <ChatReceiver />
          <ChatSender />
          <ChatReceiver />
          <ChatSender />
          <ChatReceiver />
          <ChatSender />
          <ChatReceiver />
          <ChatTextbox />
        </article>
      </section>
    </section>
  );
};

export default Notes;
