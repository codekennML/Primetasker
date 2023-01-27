import React from "react";
import {
  AiFillStar,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlineStar,
} from "react-icons/ai";
import {
  FaCommentAlt,
  FaFlag,
  FaRegComment,
  FaRegCommentAlt,
  FaRegFlag,
  FaSearch,
} from "react-icons/fa";
import Naira from "../../public/svgs/Naira.jsx";
import CustomText from "../utils/CustomFieldComp/CustomText.jsx";
import Nav from "./Nav";
import { Formik, Form, FieldArray } from "formik";
import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../features/modal/modalSlice";
import Megamenu from "./Megamenu.jsx";
import TaskFilters from "./TaskFilters.jsx";
import { HiReply } from "react-icons/hi";
// import { showModal } from "../features/modal/modalSlice";
const BrowseTasks = () => {
  const dispatch = useDispatch();
  return (
    <section className="max-w-screen-lg max-h-screen  mx-auto  ">
      <div className=" bg-white ">
        <div className=" px-6 py-2">
          <Nav />
        </div>
      </div>

      <div className=" relative justify-start  flex mt-3  ">
        <section className=" w-1/3  pr-0   overflow-y-scroll h-[calc(100vh_-_50px)]  mb-24 space-y-3 ">
          <TaskFilters />
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[15px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors for kids room in the house for her
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-purple-600 shadow-md  ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[13px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p>Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p> Lekki, LA</p>
                  </li>

                  {/* <li className="bg-gray-200/30 ">Midday</li>
                  <li className="bg-gray-200/30 ">25 Jan</li> */}
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-800 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-green-700/70">Open</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  {/* <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li> */}
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700/70">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-purple-600 shadow-md  ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[13px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p>Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p> Lekki, LA</p>
                  </li>

                  {/* <li className="bg-gray-200/30 ">Midday</li>
                  <li className="bg-gray-200/30 ">25 Jan</li> */}
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[17px] text-purple-800 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-green-700/70">Open</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="flex-1  overflow-y-scroll h-[calc(100vh_-_50px)] scrollbar-reduce  mb-20 ">
          <article className="py-4  bg-white px-6  ">
            <div className="flex items-center  ">
              <div className="flex-1 ">
                <p className="text-[25px] font-bold text-slate-600  pl-6 ">
                  {" "}
                  Looking For Figma Designer For Gaming Long Term Position{" "}
                </p>
              </div>
              <div className="flex flex-col  p-6 rounded-lg bg-gray-100">
                <div className="flex items-center  text-[25px]   ml-6  text-purple-900 font-bold ">
                  <p className="text-[30px]">
                    <Naira />
                  </p>
                  <p>50k </p>
                </div>
                <li className=" cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-full mt-2 flex items-center text-white font-medium space-x-2 text-[13px] px-6 py-2.5">
                  <button onClick={() => dispatch(showModal("offerModal"))}>
                    {" "}
                    Make an Offer
                  </button>
                </li>
              </div>
            </div>

            <div className=" px-6 ">
              <div className="flex items-center space-x-3 ">
                <img
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover onject-center"
                />

                <p className="flex flex-col text-[14px] font-medium">
                  <span>Posted By</span>
                  <span className="text-[13px]">Rebecca Akinyemi</span>
                </p>
              </div>
              <ul className="text-[13px] my-4 flex items-center  space-x-3 ">
                <li className=" bg-gray-50 py-1 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3">
                  <p className="text-[20px] text-purple-500">
                    <AiOutlineCalendar />
                  </p>
                  <p>Expires : Monday, 26 Jan 2022</p>
                </li>
                <li className="bg-gray-50 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                  <p className="text-[20px] text-purple-500">
                    <AiOutlineClockCircle />
                  </p>
                  <p> Mid-day</p>
                </li>
                <li className=" bg-gray-50 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                  <p className="text-[20px] text-purple-500">
                    <AiOutlineEnvironment />
                  </p>
                  <p> Lekki, LA</p>
                </li>
              </ul>
            </div>

            <div className="mt-2 ">
              <h3 className=" py-2 text-purple-700 font-bold">Task Details</h3>
              <p className="px-6 text-sm leading-relaxed text-gray-700 text-justify">
                Are you in search of a talented Figma designer to help bring
                your gaming project to life? Look no further! We are currently
                seeking a skilled designer with experience in Figma to join our
                team for a potential long-term position. The ideal candidate
                will have a strong portfolio showcasing their experience with
                designing for gaming themes....{" "}
                <span className="text-purple-700">Read More</span>
              </p>
            </div>

            <div className="my-6 pr-4">
              <h3 className=" py-2 text-purple-700 my-2 font-bold">
                All Offers
              </h3>
              <div className="space-y-4 ml-4">
                <article className="flex flex-col ">
                  <div className=" h-full  rounded-l-lg flex flex-row items-center space-x-2">
                    <div>
                      <img
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-gray-500 font-semibold text-[15px]">
                        Kamsi Jaja
                      </h3>

                      <p className="flex items-center space-x-1 py-1">
                        <span className="text-[16px] text-yellow-500">
                          <AiFillStar />
                        </span>
                        <span className="text-gray-800/70 font-semibold text-[15px]">
                          5.0 (95){" "}
                        </span>
                      </p>
                      {/* <p>57% completion rate</p> */}
                    </div>
                  </div>

                  <div className=" bg-[#f3f3f7]   py-2  px-3 text-sm  text-[#061257]  rounded-lg mt-2">
                    <p className="py-2 text-slate-800 leading-relaxed tracking-wide  text-justify px-2 text-[14px] ">
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      <span className="text-purple-700">read more</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center  space-x-4 pl-4 justify-end text-[12px] ">
                    <p className="text-[12px] text-purple-700 flex items-center space-x-2">
                      <span>Posted 40 mins ago</span>
                    </p>
                    <button
                      onClick={() => dispatch(showModal("OfferChat"))}
                      className="ml-auto  rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                    >
                      <span>
                        <HiReply />
                      </span>
                      <span> Reply</span>
                    </button>
                    <button className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                      <span>
                        <FaRegFlag />
                      </span>
                      <span>report</span>
                    </button>
                  </div>
                </article>
                <article className="flex flex-col ">
                  <div className=" h-full  rounded-l-lg flex flex-row items-center space-x-2">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-gray-500 font-semibold text-[15px]">
                        Kamsi Jaja
                      </h3>

                      <p className="flex items-center space-x-1 py-1">
                        <span className="text-[16px] text-yellow-500">
                          <AiFillStar />
                        </span>
                        <span className="text-gray-800/70 font-semibold text-[15px]">
                          5.0 (95){" "}
                        </span>
                      </p>
                      {/* <p>57% completion rate</p> */}
                    </div>
                  </div>

                  <div className=" bg-[#f3f3f7]   py-2  px-3 text-sm  text-[#061257]  rounded-lg mt-2">
                    <p className="py-2 text-slate-800 leading-relaxed tracking-wide  text-justify px-2 text-[14px] ">
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      .. <span className="text-purple-700">read more</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center  space-x-4 pl-4 justify-end text-[12px] ">
                    <p className="text-[12px] text-purple-700 flex items-center space-x-2">
                      <span>Posted 40 mins ago</span>
                    </p>
                    <button
                      onClick={() => showModal("replyModal")}
                      className="ml-auto  rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                    >
                      <span>
                        <HiReply />
                      </span>
                      <span> Reply</span>
                    </button>
                    <button className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                      <span>
                        <FaRegFlag />
                      </span>
                      <span>report</span>
                    </button>
                  </div>
                </article>
                <article className="flex flex-col ">
                  <div className=" h-full  rounded-l-lg flex flex-row items-center space-x-2">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-gray-500 font-semibold text-[15px]">
                        Kamsi Jaja
                      </h3>

                      <p className="flex items-center space-x-1 py-1">
                        <span className="text-[16px] text-yellow-500">
                          <AiFillStar />
                        </span>
                        <span className="text-gray-800/70 font-semibold text-[15px]">
                          5.0 (95){" "}
                        </span>
                      </p>
                      {/* <p>57% completion rate</p> */}
                    </div>
                  </div>

                  <div className=" bg-[#f3f3f7]   py-2  px-3 text-sm  text-[#061257]  rounded-lg mt-2">
                    <p className="py-2 text-slate-800 leading-relaxed tracking-wide  text-justify px-2 text-[14px] ">
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      <span className="text-purple-700">read more</span>
                    </p>
                    {/* <div className="w-full flex items-center  space-x-4 pt-2">
                      <p className="text-[12px] text-purple-700 ">
                        40 mins ago
                      </p>
                      <button
                        onClick={() => showModal("replyModal")}
                        className="ml-auto text-[13px] rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                      >
                        <span>
                          <HiReply />
                        </span>
                        <span> reply</span>
                      </button>
                      <button className="text-[13px]  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                        <span>
                          <FaRegFlag />
                        </span>
                        <span>report</span>
                      </button>
                    </div> */}
                  </div>
                  <div className="w-full flex items-center  space-x-4 pl-4 justify-end text-[12px] ">
                    <p className="text-[12px] text-purple-700 flex items-center space-x-2">
                      <span>Posted 40 mins ago</span>
                    </p>
                    <button
                      onClick={() => showModal("replyModal")}
                      className="ml-auto  rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                    >
                      <span>
                        <HiReply />
                      </span>
                      <span> Reply</span>
                    </button>
                    <button className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                      <span>
                        <FaRegFlag />
                      </span>
                      <span>report</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default BrowseTasks;
