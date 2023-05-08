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
// import banner from "../assets/images/banner.png";
import Features from "./Feature";
import Partner from "./Partner";
import Steps from "./Steps";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import banner from "../assets/icons/banner.svg";

const HomePage = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="w-full ">
        <section className="overflow-hidden  ">
          {/* */}
          <section className=" w-full  ">
            <div className="  ">
              <div className="w-full lg:w-[85%] mx-auto  px-2 md:px-0 ">
                <div className="flex flex-col sm:flex-row    ">
                  <div className=" pt-6 lg:pt-16  w-full lg:w-3/5 xl:w-1/2 lg:p-3 lg:pb-[5em]  ">
                    <h1 className="mt-4 mb-8 font-inter font-extrabold  text-[2rem] md:text-[3.5em] xl:text-11xl text-brand-text text-center lg:text-left    ">
                      Manage{" "}
                      <span className="text-brand-accent italic">daily</span>{" "}
                      tasks, <br className="hidden lg:block" /> with ease
                    </h1>

                    <div className=" lg:max-w-lg my-8">
                      <p className="mb-4 text-brand-text-deep text-[.9rem] font-medium">
                        Join over 250,000 people currently making things happen
                        and getting more done on Primetasker.
                      </p>
                    </div>

                    <div className="flex  flex-col-reverse lg:flex-row  mb-8 gap-4 ">
                      <div className="w-full lg:w-auto ">
                        <Link to="/create/post-a-task">
                          <button className="font-inter w-full px-5 py-3.5 text-[18px] text-brand-text font-medium border border-brand-light  hover:bg-slate-300 rounded-md">
                            Post a task for free
                          </button>
                        </Link>
                      </div>
                      <div className="max-w-full  ">
                        <Link to="login">
                          <button className="font-inter w-full px-5 py-3.5   text-white font-semibold bg-brand-light rounded-md text-primary text-[1rem] ">
                            Earn with Primetasker
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="lg:max-w-xl mt-3 hidden sm:block">
                      <article className="mt-4 flex items-center justify-between">
                        <div className="flex space-x-8">
                          <p className="flex items-center space-x-2">
                            {" "}
                            <span className="text-[40px] font-heading text-brand-text">
                              <AiOutlineUser />
                            </span>
                            <span className="text-brand-text-deep font-semibold text-md">
                              {" "}
                              250k+ Customers
                            </span>
                          </p>
                          <p className="flex items-center space-x-2">
                            {" "}
                            <span className="text-[40px] font-heading text-brand-text">
                              <HiOutlineCheckCircle />
                            </span>
                            <span className="text-brand-text-deep font-medium text-md">
                              {" "}
                              1.5M+ tasks
                            </span>
                          </p>
                          <p className="flex items-center space-x-2">
                            <span className="text-[40px] font-heading text-brand-text">
                              <HiOutlineStar />
                            </span>
                            <span className="text-brand-text-deep font-medium text-md">
                              {" "}
                              4.9 user reviews
                            </span>
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="  w-full lg:w-2/5 xl:w-1/2 rounded-2xl  relative   ">
                    <img
                      src={banner}
                      alt="hero-prime-image"
                      className="h-[450px] w-full max-w-full max-h-full object-cover object-center "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section>
        <Categories />
        <Steps />
        {/* <LatestTasks /> */}
        <Features />
        <Partner />
        {/* <NewsLetter /> */}

        {/* <Footer /> */}
      </section>
    </>
  );
};

export default HomePage;
