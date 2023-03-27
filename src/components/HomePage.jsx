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
import Categories from "./Categories";
import LatestTasks from "./LatestTasks";
import Nav from "./Navbar";
import banner from "../assets/images/banner.png";
import Features from "./Feature";
import Partner from "./Partner";
import Steps from "./Steps";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const HomePage = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="w-full ">
        <section
          className="overflow-hidden  "
          //  bg-gradient-to-br from-amber-800/80 via-purple-800/70  to-gray-800/80
        >
          <section className=" w-full bg-gray-800 ">
            <div className="w-[85%]  mx-auto pt-32  ">
              <div className="flex flex-wrap pb-[5em]   ">
                <div className="w-full lg:w-3/5 xl:w-3/5 p-3 pt-6 ">
                  <h1 className="mt-4 mb-8 font-heading text-7xl md:text-[3.4em] xl:text-11xl text-purple-100 font-bold font-gilda  max-w-[750px] tracking-[0.1em] ">
                    Everyday tasks, done with ease
                  </h1>

                  <div className=" lg:max-w-lg my-8">
                    <p className="mb-4 text-gray-300 text-md font-medium">
                      &ldquo;Join over 250,000 people currently making things
                      happen and getting more done on Primetasker.&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap -m-3 mb-8">
                    <div className="w-full lg:w-auto py-7 p-3">
                      <Link
                        to="/create/post-a-task"
                        className="font-heading w-full px-8 py-3.5 text-[18px] text-gray-100 font-bold font-medium bg-gray-800 border border-gray-500 hover:bg-gray-800 rounded"
                      >
                        Post a task for free
                      </Link>
                    </div>
                    <div className="w-full lg:w-auto py-7 p-3">
                      <Link
                        to="login"
                        className="font-heading w-full px-12 py-3.5  text-[18px] font-bold  text-gray-800 font-medium bg-purple-100/90  hover:border border-gray-600 rounded"
                      >
                        Earn with Primetasker
                      </Link>
                    </div>
                  </div>
                  <div className="lg:max-w-xl mt-3">
                    <article className="mt-4 flex items-center justify-between">
                      <div className="flex space-x-8">
                        <p className="flex items-center space-x-2">
                          {" "}
                          <span className="text-[40px] font-heading text-purple-400">
                            <AiOutlineUser />
                          </span>
                          <span className="text-gray-100 font-medium text-md">
                            {" "}
                            250k+ Customers
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          {" "}
                          <span className="text-[40px] font-heading text-purple-400">
                            <HiOutlineCheckCircle />
                          </span>
                          <span className="text-gray-100 font-medium text-md">
                            {" "}
                            1.5M+ tasks
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="text-[40px] font-heading text-purple-400">
                            <HiOutlineStar />
                          </span>
                          <span className="text-gray-100 font-medium text-md">
                            {" "}
                            4.9 user reviews
                          </span>
                        </p>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="  w-full lg:w-2/5 xl:w-2/5 rounded-2xl  relative   ">
                  <img src={banner} alt="hero-prime-image" />
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

      <section>
        <Categories />
        <Steps />
        <LatestTasks />
        <Features />
        <Partner />
        <NewsLetter />

        <Footer />
      </section>
    </>
  );
};

export default HomePage;
