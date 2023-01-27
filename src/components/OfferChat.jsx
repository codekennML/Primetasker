import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaImage } from "react-icons/fa";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";

const OfferChat = () => {
  return (
    <div className="bg-white w-[550px] pt-2 pb-4  relative rounded-lg">
      <section className=" overflow-y-scroll h-[450px] px-6 space-y-4">
        <article>
          <div className="   rounded-l-lg flex flex-row space-x-2 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-start text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[16px]">Kamsi Jaja</h3>

              <p className="flex items-center space-x-1 py-1">
                <span className="text-[17px] text-yellow-500">
                  <AiFillStar />
                </span>
                <span className="text-purple-900 text-[13px]">5.0 (95) </span>
              </p>
              <p className="text-gray-600 text-[13px]">57% completion rate</p>
            </div>
          </div>
          <p className="text-[14px] text-gray-600 font-medium text-justify mt-2 bg-[#f3f3f7] px-3 rounded-lg py-2 leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
        <article className="border-b py-3">
          <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
            <div>
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-center text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[14px]">Kamsi J.</h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-700  text-justify   px-10 rounded-lg  leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
        <article className="border-b">
          <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-center text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[14px]">Kamsi Jaja</h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-700  text-justify   px-10 rounded-lg  leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
        <article className="border-b">
          <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-center text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[14px]">Kamsi Jaja</h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-700  text-justify   px-10 rounded-lg  leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
      </section>

      <div className="px-6 pt-2.5">
        {/* <div>
          <p>Lol</p>
        </div> */}
        <CustomTextarea placeholder={`Reply to Kamsi Jaja`} name="replytext" />
        <div className="flex items-center justify-between py-1 mt-2">
          <button
            type="file"
            className=" rounded-full border border-purple-800 p-1"
          >
            {" "}
            <FaImage className="text-purple-600" />{" "}
          </button>
          <button className="px-12 py-2 text-purple-700 border border-violet-500 hover:bg-purple-800 hover:text-white rounded-lg font-semibold ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferChat;
