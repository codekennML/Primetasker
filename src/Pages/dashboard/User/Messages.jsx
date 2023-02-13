import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Messages = () => {
  return (
    <div class=" ">
      <article class="flex flex-row items-center justify-between space-x-2 mt-3  -b py-2">
        {/* <FaRegEnvelope class='w-5 h-5 text-indigo-800' /> */}
        <h3 class="font-medium text-gray-800 text-[16px] pl-3">
          Recent Messages
        </h3>
        <a
          href=""
          class="text-[13px] font-sans font-medium hover:text-indigo-600 pr-3"
        >
          View All
        </a>
      </article>

      <ul class=" mt-3 space-y-1.5 ">
        <li class="  hover:bg-gray-100 cursor-pointer py-2  px-2 ">
          <div class="flex flex-row justify-start w-full gap-x-2">
            <div>
              <img
                src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                class="w-[40px] h-[40px] rounded-full"
              />
            </div>

            <div class="flex flex-row flex-1 justify-between items-start">
              <p class="flex flex-col ">
                <span class="text-[12.5px] font-semibold">Widan Wari</span>
                <span class="text-[12px]">Pet Mulai besok kamu jadi ...</span>
              </p>

              <p class="flex flex-col space-y-1 pr-2 ">
                <span class="bg-indigo-500 rounded-full text-[10px]  py-[1px] text-white inline-flex justify-center items-center  ">
                  5
                </span>

                <span class="text-[11.5px] font-medium"> 07:51</span>
              </p>
            </div>
          </div>
        </li>

        <li class="  hover:bg-gray-100 cursor-pointer py-2  px-2 ">
          <div class="flex flex-row justify-start w-full gap-x-2">
            <div>
              <img
                src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                class="w-[40px] h-[40px] rounded-full"
              />
            </div>

            <div class="flex flex-row flex-1 justify-between items-start">
              <p class="flex flex-col ">
                <span class="text-[12.5px] font-semibold">Widan Wari</span>
                <span class="text-[12px]">Pet Mulai besok kamu jadi ...</span>
              </p>

              <p class="flex flex-col space-y-1 pr-2 ">
                {/* <span class='bg-indigo-500 rounded-full text-[10px]  py-[1px] text-white inline-flex justify-center items-center  '>
                5 
            </span> */}

                <span class="text-[11.5px] font-medium"> 07:51</span>
              </p>
            </div>
          </div>
        </li>

        <li class="  hover:bg-gray-100 cursor-pointer py-2  px-2 ">
          <div class="flex flex-row justify-start w-full gap-x-2">
            <div>
              <img
                src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                class="w-[40px] h-[40px] rounded-full"
              />
            </div>

            <div class="flex flex-row flex-1 justify-between items-start">
              <p class="flex flex-col ">
                <span class="text-[12.5px] font-semibold">Busayo Kensat</span>
                <span class="text-[12px]">Pet Mulai besok kamu jadi ...</span>
              </p>

              <p class="flex flex-col space-y-1 pr-2 ">
                <span class="bg-indigo-500 rounded-full text-[10px]  py-[1px] text-white inline-flex justify-center items-center  ">
                  5
                </span>

                <span class="text-[11.5px] font-medium"> 07:51</span>
              </p>
            </div>
          </div>
        </li>

        <li class="  hover:bg-gray-100 cursor-pointer py-2  px-2 ">
          <div class="flex flex-row justify-start w-full gap-x-2">
            <div>
              <img
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                class="w-[40px] h-[40px] rounded-full object-cover"
              />
            </div>

            <div class="flex flex-row flex-1 justify-between items-start">
              <p class="flex flex-col ">
                <span class="text-[12.5px] font-semibold">Omar Eledegbe</span>
                <span class="text-[12px]">Pet Mulai besok kamu jadi ...</span>
              </p>

              <p class="flex flex-col space-y-1 pr-2 ">
                {/* <span class='bg-indigo-500 rounded-full text-[10px]  py-[1px] text-white inline-flex justify-center items-center  '>
                5 
            </span> */}

                <span class="text-[11.5px] font-medium"> 07:51</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
