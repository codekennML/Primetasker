import React from "react";
import {
  AiOutlineLineChart,
  AiOutlineCheckCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineCalculator } from "react-icons/hi";

const features = [
  {
    id: 1,
    title: "Flexible Budget",
    content: "Breaking the bank isn't an option . You only pay what you choose",
    linkText: "Learn how to manage your budget",
    icon: <HiOutlineCalculator className="text-purple-800" />,
  },
  {
    id: 2,
    title: "Secure Processing",
    content: "Fingerstache flexitarian street art 8-bit waist co.",
    linkText: "Learn how to manage your budget",
    icon: <FaFingerprint className="text-purple-800" />,
  },
  {
    id: 3,
    title: "Trusted Ratings & Reviews",
    content: "Fingerstache flexitarian street art 8-bit waist co",
    linkText: "Learn how to manage your budget",
    icon: <AiOutlineStar className="text-purple-800" />,
  },
  {
    id: 4,
    title: "Satisfaction Guaranteed",
    content: "Fingerstache flexitarian street art 8-bit waist co",
    linkText: "Learn how to manage your budget",
    icon: <AiOutlineCheckCircle className="text-purple-800" />,
  },
];

const Features = () => {
  return (
    <section className="text-gray-600 body-font my-12 ">
      <div className="container px-5 py-12  mx-auto ">
        <div className="flex flex-wrap w-full mb-14 flex-col items-center text-cnter ">
          <h1 className="sm:text-2xl text-2xl font-extrabold title-font mb-4 text-gray-600">
            Designed for individuals &amp; Businesses
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man .
          </p>
        </div>
        <div className="flex flex-wrap justify-between p-3   ">
          {features.map((feature) => {
            return (
              <div className="xl:w-[24%] md:w-1/2 p-4  border-gray-300  bg-white/40   rounded-lg ">
                <div className=" p-4 rounded-lg flex flex-col justify-center items-center">
                  <div className="w-16 h-16 inline-flex items-center justify-center rounded-full  mb-8 p-2">
                    <span className="text-[4em]">{feature.icon}</span>
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-base text-center mb-4 ">
                    {feature.content}
                  </p>
                  <a href="http://" className="text-purple-700 text-sm">
                    {feature.linkText}
                  </a>
                </div>
              </div>
            );
          })}

          {/* <div className="xl:w-[31%] md:w-1/2 p-4 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-xl  ">
            <div className="p-4 rounded-lg flex flex-col justify-center items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-8 p-2 ">
                <svg
                  className="RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G oIyj6uBhU5BaKmBKDrV_ AATaQm5byhqNhQAf0t5v text-primary-600 dark:text-primary-500 text-[10px]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl text-gray-900 font-bold title-font mb-2">
                Secure Processing
              </h2>
              <p className="leading-relaxed text-base text-center mb-4">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
              <a href="http://" className="text-blue-600 text-sm ">
                Learn how payments are processed{" "}
              </a>
            </div>
          </div>
          <div className="xl:w-[31%] md:w-1/2 p-4 bg-gradient-to-tr from-blue-400 to-purple-400  rounded-xl ">
            <div className="p-4 rounded-lg flex flex-col justify-center items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-8">
                <svg
                  className="RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G oIyj6uBhU5BaKmBKDrV_ AATaQm5byhqNhQAf0t5v text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl text-gray-900 font-bold title-font mb-2">
                Satisfaction Guaranteed
              </h2>
              <p className="leading-relaxed text-base text-center mb-4">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
              <a href="http://" className="text-blue-600 text-sm">
                Learn how tasks are managed
              </a>
            </div>
          </div> */}
        </div>
        <div className="flex lg:flex-row md:flex-col mt-10 justify-center">
          {/* <button className="bg-white border-2 border-black  hover:bg-black hover:text-white text-black inline-flex py-4 px-6 rounded-lg items-center  focus:outline-none">
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="title-font font-medium">
                Get Started for Free
              </span>
            </span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
