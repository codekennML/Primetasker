import React from "react";
import {
  AiOutlineLineChart,
  AiOutlineCheckCircle,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { GrSecure, GrMoney, GrStatusGood, GrYoga } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineCalculator } from "react-icons/hi";
import money from "../assets/icons/coins.svg";
import shield from "../assets/icons/shield.svg";
import check from "../assets/icons/satisfaction.svg";

import fingerprint from "../assets/icons/fingerprint.svg";

const features = [
  {
    id: 1,
    title: "Flexible Budget",
    content: "Breaking the bank isn't an option . You only pay what you choose",
    linkText: "Learn how to manage your budget",
    icon: money,
  },
  {
    id: 2,
    title: "Secure Processing",
    content: "Fingerstache flexitarian street art 8-bit waist co.",
    linkText: "Learn how payments are processed",
    icon: fingerprint,
  },
  {
    id: 3,
    title: "Trusted Reviews",
    content: "Fingerstache flexitarian street art 8-bit waist co",
    linkText: "Learn how to manage your budget",
    icon: check,
  },
  {
    id: 4,
    title: "Satisfaction Guaranteed",
    content: "Fingerstache flexitarian street art 8-bit waist co",
    linkText: "Learn how to manage your budget",
    icon: shield,
  },
];

const Features = () => {
  return (
    <section className="text-gray-600 body-font my-12 ">
      <div className="container px-5 py-12  mx-auto ">
        <div className="flex flex-wrap w-full mb-14 flex-col items-center text-center ">
          <h1 className="sm:text-2xl text-2xl font-extrabold title-font mb-4 text-brand-text-deep">
            Designed for individuals &amp; Businesses
          </h1>
          <p className="lg:w-2/4 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man .
          </p>
        </div>
        <div className=" w-full lg:w-[85%] lg:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  ">
            {features.map((feature) => {
              return (
                <div className=" w-full p-4  border-gray-300  bg-white/40   rounded-lg ">
                  <div className=" p-4 rounded-lg flex flex-col justify-center items-center">
                    <div className="w-32 h-16 inline-flex items-center justify-center rounded-full  mb-8 p-2">
                      <img
                        src={feature.icon}
                        height="40px"
                        width="40px"
                        className="t text-brand-light w-full"
                      />
                    </div>
                    <h2 className="text-[1.2rem] text-brand-text font-bold title-font mb-2 mt-8">
                      {feature.title}
                    </h2>
                    <p className="text-[.85rem] text-center mb-4 whitespace-wrap ">
                      {feature.content}
                    </p>
                    <a href="http://" className="text-green-600 text-sm">
                      {feature.linkText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex lg:flex-row md:flex-col mt-10 justify-center">
            <button className="bg-brand-text transition hover:bg-brand-text hover:text-white text-white inline-flex py-4 px-6 rounded-lg items-center  focus:outline-none">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-semibold">
                  Get Started for Free
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
