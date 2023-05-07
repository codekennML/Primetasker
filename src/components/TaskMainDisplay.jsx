import React, { useDeferredValue, useRef, useState, useEffect } from "react";
import {
  AiOutlineFlag,
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineCopy,
  AiOutlineClockCircle,
  AiFillStar,
  AiOutlineBell,
} from "react-icons/ai";

import { FaImage, FaTimes } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import ImageUpload from "./ImageUpload";
import { formatDistance } from "date-fns";
import { showModal, hideModal } from "../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiReply } from "react-icons/hi";
import Naira from "../../assets/svgs/Naira";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { FaFacebookF, FaLinkedinIn, FaRegFlag } from "react-icons/fa";
import { formatDate } from "../utils/formatDate";
import millify from "millify";
import {
  useGetCommentsfortaskQuery,
  useCreateCommentMutation,
} from "../features/comments/slices/commentApiAlice";
import MemoizedImageForm from "./ImageForm";
import TaskComments from "../features/tasks/pages/TaskComments";
import Spinner from "../utils/Spinner";
import TextVisibility from "./TextVisibility";

const TaskMainDisplay = ({ task, showBrief, clearValues, setClearValues }) => {
  const [taskId, setTaskId] = useState();

  const [pagination, setPagination] = useState({});
  const [commentPage, setCommentPage] = useState(1);
  const [taskComments, setTaskComments] = useState([]);
  let text = task?.description;
  const [displayText, setDisplayText] = useState(text);

  const { userLoggedIn: isLoggedIn } = useAuth();

  const ref = useRef();
  const dispatch = useDispatch();

  const [showFullText, setShowFullText] = useState(false);

  const {
    data: comments,
    isLoading,
    isSuccess,
    isError,
  } = useGetCommentsfortaskQuery(
    {
      page: commentPage,
      taskId: task?._id,
    },
    {
      skip: !task?._id,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities, pageData } = comments;
      setPagination(pageData);
      setTaskComments((prev) => [...ids.map((id) => entities[id]), ...prev]);
    }
  }, [comments]);

  const loadMoreComments = () => {
    setCommentPage((prev) => prev + 1);
  };

  const handleToggleDisplay = () => {
    setShowFullText(!showFullText);
    setDisplayText(showFullText ? text.slice(0, 200) : text);
  };

  return (
    <motion.article
      initial="initial"
      animate={showBrief ? "animate" : "initial"}
      variants={{
        initial: {
          x: 700,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.7 },
        },
      }}
      className="bg-white overflow-scroll z-40 flex w-full  h-[calc(100vh_-_80px)] scrollbar-thin scrollbar-thumb-gray-400/30 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full overflow-x-hidden  scrollbar-track-rounded-full  "
    >
      {" "}
      {task?.title ? (
        <>
          <section className="bg-white w-full h-full flex px-6 py-4">
            <div className=" w-2/3 h-full  ">
              <div className="flex items-center  ">
                <div className="flex-1 ">
                  <p className="text-[25px] font-[400] text-slate-900/80 font-heading  pl-2 px-12 ">
                    {" "}
                    {task.title}
                  </p>
                  <button className="text-xs text-purple-700 font-medium mt-4 pl-2">
                    Back to Map
                  </button>
                </div>
              </div>
              <div className="  mt-6 ">
                <div className="flex items-center space-x-3  ">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt=""
                    className="w-[50px] h-[50px] rounded-full object-cover onject-center"
                  />

                  <p className="flex flex-col text-[14px] font-medium">
                    <span className="font-bold">Posted By</span>
                    <span className="text-[13px]">
                      {" "}
                      {`${task.creator_details.firstname} ${task.creator_details.lastname}`}
                    </span>
                  </p>
                </div>
                <ul className="text-[13px] mt-6 flex items-center  space-x-3 border-y py-2  ">
                  <li className=" rounded-full flex  items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                    <p className="text-[20px] text-purple-500">
                      <AiOutlineEnvironment />
                    </p>
                    <p>
                      {" "}
                      {task.taskType === "Remote" ? "Remote" : task.location}
                    </p>
                  </li>
                  <li className="  py-1 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[12px] px-3">
                    <p className="text-[15px] text-purple-500">
                      <AiOutlineCalendar />
                    </p>
                    <p>{`Expires : ${formatDate(
                      task.taskDeadline,
                      "eee dd LLL"
                    )}`}</p>
                  </li>
                  <li className="rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                    <p className="text-[20px] text-purple-500">
                      <AiOutlineClockCircle />
                    </p>
                    <p> {task.taskTime}</p>
                  </li>
                </ul>
              </div>
              <div className=" border-b px-2 py-6  ">
                <h3 className="  text-gray-900/80 font-bold text-xl ">
                  Task Details
                </h3>

                <TextVisibility
                  text={task.description}
                  files={task.files}
                  type="details"
                />
              </div>

              <MemoizedImageForm
                name={`${
                  task.creator_details.firstname
                } ${task.creator_details.lastname.charAt(0)}`}
                handleCreate={true}
                clearValues={open}
                ref={ref}
                setClearValues={setClearValues}
                taskId={task._id}
                // initialValues={emptyForm}
              />
              <article>
                <div className="my-6 pr-4  mb-12 py-3">
                  <h3 className=" py-2 text-gray-900/80 my-2 font-bold text-sm">
                    All Offers
                  </h3>
                  {console.log(task)}
                  <div className="space-y-8 ml-4 ">
                    {taskComments.length > 0
                      ? taskComments.map((comment, idx) => {
                          return (
                            <li key={idx} className="list-none">
                              <TaskComments
                                comment={comment}
                                pagination={pagination}
                                loadMoreComments={loadMoreComments}
                                commentPage={commentPage}
                              />
                            </li>
                          );
                        })
                      : null}
                  </div>

                  {commentPage < pagination?.pages ? (
                    <div className="flex justify-center my-4">
                      <button
                        onClick={loadMoreComments}
                        className="bg-gray-50 border text-purple-600 text-[14px] font-semibold px-4 py-2 rounded-full "
                      >
                        Load more comments
                      </button>
                    </div>
                  ) : null}
                </div>
              </article>
            </div>

            <aside className="w-1/3   ">
              <section className="w-[250px]  fixed h-screen top-24 right-[10%]">
                <article className="relative h-full  ">
                  <article className=" rounded-lg  bg-slate-100   ">
                    <div className=" text-[30px]      border-b   ">
                      <div>
                        <p className="text-[12px] uppercase text-center pt-3 pb-1 font-medium text-gray-500">
                          Task Budget
                        </p>
                      </div>
                      <div className="flex flex-row items-center justify-center font-bold  text-gray-700 ">
                        <p className="text-[50px]">
                          <Naira style={`w-8 h-8 font-medium`} />
                        </p>
                        <p className="text-[40px] ">
                          {millify(task.budget, 2)}{" "}
                        </p>
                      </div>
                    </div>
                    <li className=" cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-full my-3 flex justify-center items-center text-white font-bold space-x-2 text-[16px] px-6 mx-3 py-3">
                      <button
                        onClick={() => dispatch(showModal("offerModal"))}
                        className="text-center"
                      >
                        {" "}
                        Make an Offer
                      </button>
                    </li>
                  </article>

                  <div className="share ">
                    <div className="bg-gradient-to-br from-purple-50 via-gray-50 to-purple-50 border text-[12px] font-medium mt-4 rounded-lg">
                      <button className="py-4 border-b w-full flex items-center justify-center space-x-3 ">
                        <span>
                          <AiOutlineCopy />
                        </span>
                        <span>Post Similar Task</span>
                      </button>
                      <button className="py-4 w-full border-b flex items-center justify-center space-x-3 ">
                        <span>
                          <AiOutlineBell />
                        </span>
                        <span>Set Alerts for similar tasks</span>
                      </button>
                      <button className="py-4 w-full  flex items-center justify-center space-x-3 ">
                        <span>
                          <AiOutlineFlag />
                        </span>
                        <span>Report this task</span>
                      </button>
                    </div>
                  </div>
                  <article className="more options w-full mt-8 border p-3 rounded-lg  bg-gradient-to-br from-purple-50 via-gray-50 to-purple-50">
                    <h2 className="text-[13px] font-medium text-center">
                      Join the conversation ?{" "}
                    </h2>
                    <div className="text-[12px] flex flex-col justify-center items-center space-x-5  p-2 mt-2 rounded-lg  ">
                      <button className="p-2 text-[12px] rounded-full w-1/2 bg-purple-800 text-white">
                        <Link to="/login">Sign In</Link>
                      </button>
                    </div>
                  </article>
                  <div className="share  ">
                    <div className="bg-gradient-to-br from-purple-50 via-gray-50 to-purple-50 border text-[12px] font-medium mt-8 rounded-lg">
                      <button className="py-4  w-full  border-b ">
                        Share & Refer
                        <span></span>
                      </button>
                      <article className="more options  w-full">
                        <div className="text-[16px] flex flex-row justify-center items-center space-x-5  bg-gray-50 p-2 my-1   ">
                          <button className="p-2 rounded-full bg-blue-600 text-white">
                            <FaFacebookF />
                          </button>
                          <button className="p-2 rounded-full bg-brand-light text-white">
                            <AiOutlineWhatsApp />
                          </button>
                          <button className="p-2 rounded-full bg-[#00aced] text-white">
                            <AiOutlineTwitter />
                          </button>
                          <button className="p-2 rounded-full bg-[#1c6ed1] text-white">
                            <FaLinkedinIn />
                          </button>
                        </div>
                      </article>
                    </div>
                  </div>
                </article>
              </section>
            </aside>
          </section>
        </>
      ) : null}
    </motion.article>
  );
};

export default TaskMainDisplay;
