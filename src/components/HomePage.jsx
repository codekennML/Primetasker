import { faClose, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import {
  FaCheckCircle,
  FaRegUser,
  FaTelegramPlane,
  FaThumbsUp,
} from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCheckCircle, HiOutlineStar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sub from "../assets/Sub";
import Icon from "../utils/Icon";
import Footer from "./Footer";
import GenPromotion from "./GenPromotion";
import LocationCard from "./LocationCard";
import NewsLetter from "./NewsLetter";
import OfferCard from "./OfferCard";
import PropertyTypes from "./PropertyTypes";
import RecentSearch from "./RecentSearch";
import ReviewCard from "./ReviewCard";
import ReviewCards from "./ReviewCards";
import SwiperScroll from "./SwiperScroll";
import TabComp from "./TabComp";
import TravelConnect from "./TravelConnect";
import Nav from "./Nav";

const HomePage = () => {
  const [open, setOpen] = useState(true);

  return (
    <main>
      <section className="w-full ">
        {/* <article className="w-full border-gray-200 border flex flex-row space-x-6 py-4 items-center">
          <div className="bg-[#fff0e0] p-1.5 px-3 ml-4">
            <Icon icon={faInfoCircle} className={`w-5 h-5 text-red-400`} />
          </div>
          <div className="text-xs">
            <p>
              Get the advice you need. Check the latest COVID-19 restrictions
              before you travel.
              <a href="#" className="pl-1 text-blue-600">
                Learn More
              </a>
            </p>
          </div>
        </article> */}

        {/* <article className="mt-6">
          <h2 className="text-xl font-bold mb-4">Your recent Searches</h2>

          <article className="relative">
            <SwiperScroll content={<RecentSearch />} slide={3} />
          </article>
        </article> */}

        <section
          className="overflow-hidden  "
          // style="background: url(gradia-assets/images/hero/bg.png) no-repeat; background-size: cover;"
          // bg-gradient-to-br from-amber-800/80 via-purple-800/70  to-gray-600/80
        >
          <section className=" w-full  ">
            <Nav />
            <div className="">
              <div className="flex flex-wrap pb-[120px]   ">
                <div className="w-full lg:w-1/4 xl:w-1/2 p-3 pt-16 ">
                  <p className="mb-5 font-heading text-gray-600 font-medium text-sm pl-4 py-1.5 bg-gray-200/50 w-2/5 rounded-full ">
                    Grow fast, do more , spend less !
                  </p>
                  {/* bg-gradient-to-r from-purple-500  to-pink-600 */}
                  <h1 className="mb-4 font-heading text-7xl md:text-5xl xl:text-11xl text-purple-900 font-bold  max-w-[600px] tracking-wide">
                    Achieve more with ease
                  </h1>
                  <ul className="marker:text-gray-400 mb-8 font-medium flex items-center space-x-4  text-sm text-gray-900 text-center ">
                    <li> Post a task</li>
                    <li className="text-[30px]">&middot;</li>
                    <li>Pick the best person</li>
                    <li className="text-[30px]">&middot;</li>
                    {<li>Get it done</li>}
                    <li className="text-[30px]">&middot;</li>
                    <li>It's that simple.</li>
                  </ul>

                  <div className="flex flex-wrap -m-3 mb-8">
                    <div className="w-full lg:w-auto py-7 p-3">
                      <Link
                        to="/create/post-a-task"
                        className="font-heading w-full px-6 py-3.5 text-base text-gray-100 font-medium bg-purple-900 border border-gray-500 hover:bg-gray-800 rounded-full"
                      >
                        Post a task for free
                      </Link>
                    </div>
                    <div className="w-full lg:w-auto py-7 p-3">
                      <Link
                        to="login"
                        className="font-heading w-full px-12 py-3.5 text-base text-gray-800 font-medium bg-purple-100/90  hover:border border-gray-600 rounded-full"
                      >
                        Earn with Primetasker
                      </Link>
                    </div>
                  </div>
                  <div className="lg:max-w-xl mt-3">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-auto p-3">
                        <img
                          className=" w-[50px] h-[50px] rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 p-3 lg:max-w-lg">
                        <p className="mb-4 text-gray-600 text-base font-medium">
                          &ldquo;Join over 250,000 people currently making
                          things happen and getting more done on
                          Primetasker.&rdquo;
                        </p>
                      </div>
                    </div>
                    <article className="mt-4 flex items-center justify-between">
                      <div className="flex space-x-4">
                        <p className="flex items-center space-x-2">
                          {" "}
                          <span className="text-[30px] font-heading text-purple-700">
                            <AiOutlineUser />
                          </span>
                          <span className="text-gray-800 font-medium text-md">
                            {" "}
                            250k+ Customers
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          {" "}
                          <span className="text-[30px] font-heading text-purple-700">
                            <HiOutlineCheckCircle />
                          </span>
                          <span className="text-gray-800 font-medium text-md">
                            {" "}
                            1.5M+ tasks
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="text-[28px] font-heading text-purple-700">
                            <HiOutlineStar />
                          </span>
                          <span className="text-gray-800 font-medium text-md">
                            {" "}
                            4.9 user reviews
                          </span>
                        </p>
                      </div>
                    </article>
                  </div>
                </div>

                <div className=" w-full lg:w-3/4 xl:w-1/2 rounded-2xl  relative  bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 ">
                  <div className="max-w-max ">
                    <motion.article
                      initial={{ y: 100, opacity: 0, scale: 0.3 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 0.75,
                        transition: {
                          delay: -3,
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 5,
                        },
                        // transitionEnd: { display: "none" },
                      }}
                      className=" absolute z-50 top-32 -left-4 rounded-bl-lg scale-75 animate-pulse"
                    >
                      <div className="flex flex-wrap justify-center -m-3 mb-0 ">
                        <div className="w-full p-3">
                          <div className="mx-auto w-full p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-auto p-3">
                                <img
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt=""
                                  className="w-[40px] h-[40px] rounded-full"
                                />
                                <p className="font-bold text-purple-700 pt-4 text-[13px]">
                                  N5,000
                                </p>
                              </div>
                              <div className="w-auto p-2">
                                <p className="font-heading text-base text-purple-900 font-medium">
                                  I can move your sofa
                                </p>
                                <p className="mb-2 text-sm text-gray-500 text-xs">
                                  Taiwo Johnson
                                </p>
                                <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                                  <p className="text-red-600">
                                    <svg
                                      className="mr-1 "
                                      width="13"
                                      height="13"
                                      viewbox="0 0 13 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </p>

                                  <p className="text-xs text-gray-700 font-medium">
                                    Ikate, Lekki
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>

                    {/* <motion.img
                      initial={{ x: -200, opacity: 0, scale: 0.7 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          ease: "easeIn",
                          duration: 0.7,
                          delay: 0.5,
                        },
                    
                      }}
                      src="../banner.png"
                      className="h-[650px] w-[550px]  -mt-8 absolute left-0 "
                    /> */}

                    {/* <article className="bg-purple-200 w-[200px] h-[200px] rounded-lg absolute -top-10 -z-10 -right-10"></article> */}
                    <motion.article
                      initial={{ y: 100, opacity: 0, scale: 0.3 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 0.75,
                        transition: {
                          delay: -3,
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 3,
                        },
                        // transitionEnd: { display: "none" },
                      }}
                      className="absolute top-32 -right-4 rounded-bl-lg scale-75 animate-pulse"
                    >
                      <div className="flex flex-wrap justify-center -m-3 mb-0 z-50">
                        <div className="w-full p-3">
                          <div className="mx-auto w-full p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-auto p-3">
                                <img
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt=""
                                  className="w-[40px] h-[40px] rounded-full"
                                />
                                <p className="font-bold text-purple-700 pt-4 text-[13px]">
                                  N4,500
                                </p>
                              </div>
                              <div className="w-auto p-2">
                                <p className="font-heading text-base text-purple-900 font-medium">
                                  I can move your sofa
                                </p>
                                <p className="mb-2 text-sm text-gray-500 text-xs">
                                  Enobong Jones
                                </p>
                                <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                                  <p className="text-red-600">
                                    <svg
                                      className="mr-1 "
                                      width="13"
                                      height="13"
                                      viewbox="0 0 13 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </p>

                                  <p className="text-xs text-gray-700 font-medium">
                                    Ikate, Lekki
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>

                    {/* <article className="bg-purple-200 w-[200px] h-[200px] rounded-lg -z-10 absolute -bottom-10 -right-10"></article> */}
                    <motion.article
                      initial={{ y: 100, opacity: 0, scale: 0.3 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 0.75,
                        transition: {
                          delay: -3,
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 4,
                        },
                        // transitionEnd: { display: "none" },
                      }}
                      className=" absolute bottom-16 right-4 rounded-br-lg scale-75 animate-pulse"
                    >
                      <div className="flex flex-wrap justify-center -m-3 mb-0 z-50">
                        <div className="w-full p-3">
                          <div className="mx-auto w-full p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-auto p-3">
                                <img
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt=""
                                  className="w-[40px] h-[40px] rounded-full"
                                />
                                <p className="font-bold text-purple-700 pt-4 text-[13px]">
                                  N5,000
                                </p>
                              </div>
                              <div className="w-auto p-2">
                                <p className="font-heading text-base text-purple-900 font-medium">
                                  I can move your sofa
                                </p>
                                <p className="mb-2 text-sm text-gray-500 text-xs">
                                  Usman Dantata
                                </p>
                                <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                                  <p className="text-red-600">
                                    <svg
                                      className="mr-1 "
                                      width="13"
                                      height="13"
                                      viewbox="0 0 13 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </p>

                                  <p className="text-xs text-gray-700 font-medium">
                                    Ikate, Lekki
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>

                    {/* <article className="bg-blue-100 w-[200px] h-[200px] rounded-lg absolute -z-10 -bottom-10 -left-10"></article> */}

                    {/* <article className="bg-purple-200 w-[200px] h-[200px] rounded-lg absolute -z-10 -bottom-10 -left-10"></article> */}
                    <motion.article
                      initial={{ y: 100, opacity: 0, scale: 0.3 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 0.75,
                        transition: {
                          delay: -3,
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 2,
                        },
                        // transitionEnd: { display: "none" },
                      }}
                      className="  absolute bottom-20 left-10 rounded-tr-lg "
                    >
                      <div className="flex flex-wrap justify-center -m-3 mb-0 z-50 animate-pulse">
                        <div className="w-full ">
                          <div className="mx-auto w-full p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-auto p-3">
                                <img
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt=""
                                  className="w-[40px] h-[40px] rounded-full"
                                />
                                <p className="font-bold text-purple-700 pt-4 text-[13px]">
                                  N5,000
                                </p>
                              </div>
                              <div className="w-auto p-2">
                                <p className="font-heading text-base text-purple-900 font-medium">
                                  I can move your sofa
                                </p>
                                <p className="mb-2 text-sm text-gray-500 text-xs">
                                  Kehinde Afolabi
                                </p>
                                <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                                  <p className="text-red-600">
                                    <svg
                                      className="mr-1 "
                                      width="13"
                                      height="13"
                                      viewbox="0 0 13 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </p>

                                  <p className="text-xs text-gray-700 font-medium">
                                    Ikate, Lekki
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>

                    <motion.article
                      initial={{ y: 200, opacity: 0, scale: 0.3 }}
                      animate={{ y: 0, opacity: 1, scale: 0.9 }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                      className=" pt-4 absolute top-14 left-[13.5rem] flex flex-col justify-center items-center rounded-xl "
                    >
                      {/* <img
                        src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-[80px] h-[80px]  rounded-full object-cover object-fit z-"
                      /> */}
                      <div className="flex flex-col  ">
                        <div className="flex flex-wrap justify-center max-w-max  mb-3 xl:-ml-12   ">
                          <div className="w-full sm:w-1/2 p-2">
                            <div className="mx-auto w-56 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl ">
                              <div className="flex flex-wrap -m-2 shadow-lg rounded-2xl py-2 ">
                                <div className="w-auto p-2">
                                  <img
                                    src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                    className="w-[40px] h-[40px] rounded-full"
                                  />
                                  <p className="font-bold text-blue-700 pt-4 text-[13px]">
                                    N3,000
                                  </p>
                                </div>
                                <div className="w-auto p-1 flex-1">
                                  <p className="font-heading text-sm text-gray-900 font-medium">
                                    Help move a sofa
                                  </p>
                                  <p className="mb-2 text-[12px] text-gray-500 text-xs">
                                    Jay Williams
                                  </p>

                                  <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full ">
                                    <svg
                                      className="mr-1"
                                      width="13"
                                      height="13"
                                      viewbox="0 0 13 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                        stroke="#71717A"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                    <p className="text-[11px] text-gray-700 font-medium">
                                      Lekki, Lagos
                                    </p>
                                    <span className="pl-4 text-[11px] text-purple-900">
                                      9AM
                                    </span>
                                  </div>
                                  <div>
                                    <button className="flex items-center space-x-1 text-[13px] pl-2  py-1">
                                      <span className="text-purple-400">
                                        <FaTelegramPlane />
                                      </span>
                                      <span className="text-[11px] text-purple-800">
                                        Task Posted
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="absolute top-40 -left-14 flex flex-wrap justify-center max-w-max -m-3 mb-3 scale-90 ">
                        <div className="w-full sm:w-1/2 p-3">
                          <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                            <div className="flex  flex-wrap -m-2">
                              <div className="flex flex-col justify-center p-2 items-center">
                                <p className="text-green-500  text-[26px] ">
                                  <FaCheckCircle />
                                </p>
                              </div>

                              <div className="w-auto p-2">
                                <p className="font-medium text-base text-green-500 ">
                                  Task assigned
                                </p>
                                <p className="font-heading text-base text-gray-900 text-[12.5px]">
                                  Bolaji Jonas
                                </p>

                                <p className="mb-2 text-sm text-gray-600 text-[13px]">
                                  N3,500
                                </p>
                                <div className="flex items-center px-2 py-1 bg-green-100 rounded">
                                  <p className="text-xs text-green-700 font-medium">
                                    Accepted
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, scale: 0.9 }}
                        transition={{ delay: 7, duration: 1 }}
                        className="absolute top-72 -left-14 flex flex-wrap justify-center max-w-max -m-3 mb-3 scale-90 "
                      >
                        <div className="w-full sm:w-1/2 p-3">
                          <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                            <div className="flex  flex-wrap -m-2">
                              <div className="flex flex-col justify-center p-2 items-center">
                                <p className="text-purple-500  text-[26px] ">
                                  <FaCheckCircle />
                                </p>
                              </div>

                              <div className="w-auto p-2 space-y-2  ">
                                <p className=" text-sm text-gray-600 text-[13px] flex items-center  items-center space-x-2">
                                  <span className="text-purple-500 text-[20px]   ">
                                    <AiFillStar />
                                  </span>
                                  <span className="text-[13px] font-medium text-gray-700">
                                    4.9 rating
                                  </span>
                                </p>
                                <p className="font-medium text-[12px] text-purple-800 bg-gray-100 py-1  px-2 rounded-full flex items-center space-x-4">
                                  <span>Task completed 5m ago</span>
                                </p>

                                <div className="flex items-center px-2 py-1 bg-green-100 rounded">
                                  <p className="text-xs text-green-700 font-medium">
                                    Payment Released 3m ago
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.article>

                    <div className="flex flex-wrap justify-center max-w-max -m-3">
                      {/* <div className="w-full sm:w-1/2 p-3">
                        <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                          <div className="flex flex-wrap -m-2">
                            <div className="w-auto p-2">
                              <img
                                src="gradia-assets/images/hero/avatar-circle.png"
                                alt=""
                              />
                            </div>
                            <div className="w-auto p-2">
                              <p className="font-heading text-base text-gray-900">
                                Robert Fox
                              </p>
                              <p className="mb-2 text-sm text-gray-500">
                                UI/UX Designer
                              </p>
                              <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                                <svg
                                  className="mr-1"
                                  width="13"
                                  height="13"
                                  viewbox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                    stroke="#71717A"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                    stroke="#71717A"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                <p className="text-xs text-gray-700 font-medium">
                                  Maine, USA
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="w-full sm:w-1/2 p-3">
                        <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                          <div className="flex flex-wrap -m-2">
                            <div className="w-auto p-2">
                              <img
                                src="gradia-assets/images/hero/avatar-circle2.png"
                                alt=""
                              />
                            </div>
                            <div className="w-auto p-2">
                              <p className="font-heading text-base text-gray-900">
                                Cody Fisher
                              </p>
                              <p className="mb-2 text-sm text-gray-500">
                                Ethical Hacker
                              </p>
                              <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                                <svg
                                  className="mr-1"
                                  width="13"
                                  height="13"
                                  viewbox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                    stroke="#71717A"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                    stroke="#71717A"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                <p className="text-xs text-gray-700 font-medium">
                                  Alaska, USA
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Offers */}
        {/* <article className="mt-6">
          <h2 className="text-xl font-bold ">Offers</h2>
          <p>Promotions, deals and special offers for you</p>

          <article className="relative pt-4">
            <SwiperScroll content={<OfferCard />} slide={2} />
          </article>
        </article> */}

        {/*  */}

        {/* <article className="mt-6">
          <h2 className="text-xl font-bold mb-1">Browse by Property type</h2>
          <article className="relative pt-2">
            <SwiperScroll content={<PropertyTypes />} slide={4} gap={0} />
          </article>
        </article> */}

        {/*  */}
        {/* <article className="mt-6">
          <h2 className="text-xl font-bold ">Explore Nigeria</h2>
          <p>These popular destinations have a lot to offer</p>
          <article className="relative pt-4">
            <SwiperScroll content={<LocationCard />} slide={6} gap={0} />
          </article>
        </article> */}

        {/* Subscribe Bar */}
        {/* {open && (
          <article className="border border-gray-200 rounded flex flex-row p-3 pr-8 pt-4 justify-between items-start mt-10  mb-6">
            <div className="flex flex-row space-x-6 ">
              <div className="bg-blue-900 rounded-full">
                <Sub />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-md">
                  Subscribe to our deals
                </h3>
                <p className="text-xs">Prices drop the moment you sign up</p>
                <div className="flex flex-row items-center space-x-4 w-[500px]">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="indent-4 flex-1 text-gray-800 border py-1.5 text-[12px] focus:outline-0  focus:border-blue-500 focus:border-2"
                    placeholder="Enter e-mail "
                  />
                  <button className="border border-blue-800 font-semibold text-[14px] rounded px-2 py-0.5  text-blue-900">
                    Sign me up
                  </button>
                </div>
              </div>
            </div>
            <div onClick={() => setOpen(!open)}>
              <Icon
                icon={faClose}
                className={`w-5 h-5 text-gray-500 cursor-pointer`}
              />
            </div>
          </article>
        )} */}

        {/* <article className="mt-6">
          <h2 className="text-xl font-bold ">Homes guests love</h2>
          <p>Promotions, deals and special offers for you</p>

          <article className="relative pt-4">
            <SwiperScroll content={<ReviewCard />} slide={4} />
          </article>
        </article> */}

        {/* <article className="mt-6">
          <h2 className="text-xl font-bold ">Explore Nigeria</h2>
          <p>These popular destinations have a lot to offer</p>
          <article className="relative pt-4">
            <SwiperScroll content={<TravelConnect />} slide={4} gap={0} />
          </article>
        </article> */}

        {/* <article>
          <GenPromotion />
        </article> */}

        {/* <article className="mb-8">
          <TabComp />
        </article> */}
      </section>

      {/* <section>
        <NewsLetter />
        <Footer />
      </section> */}
    </main>
  );
};

export default HomePage;
