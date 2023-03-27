import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaCheckCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import partnerImage from "../assets/images/partner-prime-bg.png";
const Partner = () => {
  return (
    <section class="text-gray-600  body-font bg-gray-100 py-20 my-12 ">
      <div class="relative container mx-auto flex rounded-xl   md:flex-row  flex-col items-center w-[80%] h-[400px]">
        <div class="lg:flex-grow md:w-1/2 lg:pr-8 md:pl-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="font-inter sm:text-2xl text-3xl mb-4 font-bold tracking-wide  ">
            {" "}
            <span class="text-purple-800 text-[2.5em]  font-bold">
              Perfect side hustle
            </span>
            {/* <span>Flexible Schedules</span> */}
          </h1>
          <p class="my-6 leading-relaxed">
            <ul className="list-none space-y-5 font-medium text-purple-900">
              <li className="flex flex-row space-x-4 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span>Earn extra income doing what you love </span>{" "}
              </li>
              <li className="flex flex-row space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <span>
                  Grow your business, client-base, or even just your skills
                </span>
              </li>
              <li className="flex flex-row space-x-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
                <span>Access thousands of job opportunities, for free</span>
              </li>
            </ul>
          </p>

          <div class="flex lg:flex-row md:flex-col mt-4">
            <button class="border-2 bg-purple-800 hover:bg-gray-800 inline-flex py-5 px-8 rounded-md text-lg  items-center  md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0   focus:outline-none">
              <Link to="/login">
                <span class="ml-0 flex items-start flex-col leading-none">
                  <span class="title-font  font-medium text-white  ">
                    Earn Money as a Tasker
                  </span>
                </span>
              </Link>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center items-center ">
          <img
            src={partnerImage}
            className="w-full  max-h-full  object-cover object-center"
          />
          <article className=" pt-4 absolute top-0 left-0 flex flex-col justify-center items-center rounded-xl ">
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
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                              stroke="#71717A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                              stroke="#71717A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
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

            <div className="absolute top-0 right-0 flex flex-wrap justify-center max-w-max -m-3 mb-3 scale-90 ">
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
            </div>

            <motion.div className="absolute top-72 -left-14 flex flex-wrap justify-center max-w-max -m-3 mb-3 scale-90 ">
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
          </article>
        </div>
      </div>
    </section>
  );
};

export default Partner;
