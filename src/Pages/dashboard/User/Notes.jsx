import { FaComment, FaLayerGroup, FaTools } from "react-icons/fa";
import DatePicker from "../../../utils/DatePicker";
import ChatHeader from "./Messages/ChatHeader";
import ChatReceiver from "./Messages/ChatReceiver";
import ChatSender from "./Messages/ChatSender";
import ChatTextbox from "./Messages/ChatTextbox";
import ChatUser from "./Messages/ChatUser";

const Notes = () => {
  return (
    <section class=" bg-[#f5f7fb] h-screen flex justify-center items-center">
      {/* <div class='h-20 bg-[#f5f7fb] '>
      <div class='flex flex-row space-x-1 items-center py-4 px-4'>
          <p class="text-2xl bg-indigo-800 text-white p-1.5 rounded">
          <FaComment />
            </p>  
            <h2 class='text-2xl text-indigo-800 font-bold pl-3'>  Inbox</h2>
        </div>

      </div> */}

      <section class="flex flex-row max-w-screen-xl mx-auto max-h-[650px] pb-12 ">
        <article class=" shadow  py-3 text-center bg-white space-y-4 min-w-[320px]  overflow-hidden  overflow-y-scroll scrollbar-hide relative pb-16  ">
          <div class="relative">
            <form action="sticky top-2 ">
              <div class="relative px-4 pt-1  ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-8 pt-1 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-indigo-500 block w-full outline-none pl-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
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
            <ChatUser
              name={`Alexa Doe`}
              img={`https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
            <ChatUser
              name={` Nicolas Plum`}
              img={`https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
            <ChatUser
              name={`Samantha Martin`}
              img={`https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
            <ChatUser
              name={`Jessie Rhodes`}
              img={`https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600`}
            />
          </ul>
          {/* <ChatUser name = {`Jessie Rhodes`} img = {`https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600`}/>
       <ChatUser name = {`Jessie Rhodes`} img = {`https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600`}/>
       <ChatUser name = {`Jessie Rhodes`} img = {`https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600`}/> */}
        </article>

        <article class="shadow bg-gray-50 border-l my-0  relative overflow-hidden  overflow-y-scroll scrollbar-hide">
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
