import React, { useRef, useState, useEffect, useId, useCallback } from "react";
import {
  AiOutlineFlag,
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineCopy,
  AiOutlineClockCircle,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { CiTimer } from "react-icons/ci";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import { FaFacebookF, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
// import { formatDate } from "../utils/formatDate";
import millify from "millify";
import TaskComments from "./TaskComments";
import { useGetTaskByIdQuery } from "../slices/taskApiSlice";
import useAuth from "../../../hooks/useAuth";
import { showModal } from "../../modal/modalSlice";

import { useGetCommentsfortaskQuery } from "../../comments/slices/commentApiAlice";
import Naira from "../../../../assets/svgs/Naira";

import { formatDate } from "../../../utils/formatDate";
import "react-loading-skeleton/dist/skeleton.css";

import TextVisibility from "../../../components/TextVisibility";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdAlarmOn, MdNewLabel, MdOutlineAddTask } from "react-icons/md";

const TaskMainDisplay = () => {
  const [
    open,
    setOpen,
    closeMap,
    // taskId,
    showTaskSidebar,
    // setTaskId,
    setShowTaskSidebar,
  ] = useOutletContext();

  const location = useLocation();
  const urlId = location?.pathname.split("-").slice(-1)[0];

  console.log(urlId);
  const [showMap, setShowMap] = useState(true);
  const [taskId, setTaskId] = useState("");

  const handleShowMap = useCallback(() => {
    setOpen(false);
    setTaskId(undefined);
  }, [showMap]);

  useEffect(() => {
    console.log(typeof urlId);
    if (urlId !== "/tasks") {
      setTaskId(urlId);
      setShowTaskSidebar(false);
    } else {
      setTaskId(undefined);

      setOpen(false);
    }
  }, [urlId]);

  console.log(taskId);

  const [clearValues, setClearValues] = useState(false);
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  const mapRef = useRef(null);

  // console.log(taskId);

  const {
    data: selectedTask,
    isError: taskError,
    isLoading: taskLoading,
    isSuccess: taskSuccess,
  } = useGetTaskByIdQuery(taskId, {
    skip: taskId === "/tasks" || taskId == undefined,
    refetchOnMountOrArgChange: true,
  });

  console.log(selectedTask);

  useEffect(() => {
    console.log(selectedTask);
    if (selectedTask) {
      const { ids, entities } = selectedTask;
      setTask(entities[ids[0]]);
    }
  }, [selectedTask]);

  console.log(task);

  useEffect(() => {
    if (closeMap) {
      mapRef?.current ? mapRef.current.click() : null;
    }
  }, [closeMap]);

  const [pagination, setPagination] = useState({});
  const [offerPage, setOfferPage] = useState(1);
  const [commentPage, setCommentPage] = useState(1);
  const [taskComments, setTaskComments] = useState([]);
  const [taskOffers, setTaskOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  // let text = task?.description;

  const { userLoggedIn: isLoggedIn, canMakeOffer } = useAuth();

  const ref = useRef();
  const dispatch = useDispatch();

  const {
    data: comments,
    isLoading,
    isSuccess,
    isError,
  } = useGetCommentsfortaskQuery(
    {
      page: commentPage,
      taskId: taskId,
    },
    {
      skip: taskId === "/tasks/" || commentPage === 1,
    }
  );
  const {
    data: offers,
    isLoading: offerLoading,
    isSuccess: offerSuccess,
    isError: offerError,
  } = useGetCommentsfortaskQuery(
    {
      page: offerPage,
      taskId: taskId,
    },
    {
      skip: taskId === "/tasks/" || offerPage === 1,
    }
  );

  useEffect(() => {
    setClearValues((prev) => !prev);
  }, [taskId]);

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities, pageData } = offers;
      setPagination(pageData);
      setTask((prev) => {
        return {
          ...prev,
          offers: [...prev.comments, ...ids.map((id) => entities[id])],
        };
      });
    }
    return () => {
      setTask([]);
    };
  }, [offers]);

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities, pageData } = comments;
      setPagination(pageData);
      setTask((prev) => {
        return {
          ...prev,
          comments: [...prev.comments, ...ids.map((id) => entities[id])],
        };
      });
    }
    return () => {
      setTask([]);
    };
  }, [comments]);

  const loadMoreComments = () => {
    setCommentPage((prev) => prev + 1);
  };

  const loadMoreOffers = () => {
    setOfferPage((prev) => prev + 1);
  };

  const createSimilarTask = (task) => {
    const similarTaskPost = {
      title: task.title,
      details: task.description,
      budget: task.budget,
      taskType: task.taskType,
      category: task?.category,
      date: [{ startDate: new Date(), endDate: new Date() }],
      taskTime: task.taskTime,
      files: [],
    };

    navigate("/create/post-a-task", {
      state: { from: location, initialValues: similarTaskPost },
      replace: true,
    });
  };

  const handleFlag = (values) => {
    !isLoggedIn
      ? null
      : dispatch(
          showModal({
            currentModal: "Flag",
            modalData: { flagId: task._id, type: "task" },
          })
        );
  };

  const handleMakeOffer = () => {
    if (!isLoggedIn) {
      navigate("/login", { state: { redirectUri: location } });
    } else if (isLoggedIn && !canMakeOffer) {
      dispatch(
        showModal({
          currentModal: "TaskVerifyModal",
          modalData: null,
        })
      );
    } else {
      dispatch(
        showModal({
          currentModal: "offerModal",
          modalData: task?._id,
        })
      );
    }
  };
  <div className="z-50 h-screen bg-white">
    {/* {isLoading && ( */}

    <div className="w-16 h-16 rounded-full"></div>

    {/* )} */}
  </div>;
  return (
    <SkeletonTheme baseColor="#f7f9fb">
      {/* {!taskLoading && !taskError ? ( */}

      <motion.section
        // initial="initial"
        // animate={
        //   open || (taskId !== undefined && taskId !== "/tasks")
        //     ? "animate"
        //     : "initial"
        // }
        // variants={{
        //   initial: { y: taskId && closeMap ? -300 : -900, opacity: 1 },
        //   animate: {
        //     y: 0,
        //     opacity: 1,
        //     transition: { duration: 0 },
        //   },
        // }}
        className="bg-white absolute top-0 bottom-0 right-0  left-0 w-full flex px-2.5 md:px-4 lg:px-6 py-4 overflow-y-scroll z-5 lg:flex  max-h-screen  scrollbar-thin scrollbar-thumb-gray-300/30 scrollbar-track-gray-200  scrollbar-thumb-rounded-full overflow-x-hidden  scrollbar-track-rounded-full "
      >
        <div className="w-full h-full px-3 lg:w-2/3 ">
          <div className="flex items-center ">
            <div className="flex-1 ">
              <ul className="flex flex-row justify-between md:justify-start my-2 space-x-6 md:my-5">
                <li className="flex items-center justify-between w-full md:w-max">
                  {!taskLoading && !taskError ? (
                    <button className="py-1 px-3 font-bold text-[0.9rem] rounded-full bg-brand-light/80 uppercase text-white">
                      Open
                    </button>
                  ) : (
                    <Skeleton width="60px" />
                  )}
                </li>

                <li className="hidden md:block">
                  {/* <button className="py-1 px-3 font-semibold text-[0.9rem] rounded-full uppercase text-slate-400"> */}
                  {!taskLoading && !taskError ? (
                    <button className=" text-slate-400 py-1 px-3 font-bold text-[0.9rem] rounded-full  uppercase ">
                      Assigned
                    </button>
                  ) : (
                    <Skeleton width="60px" />
                  )}
                  {/* </button> */}
                </li>

                <li className="hidden md:block">
                  {/* <button className="py-1 px-3 font-semibold text-[0.9rem] rounded-full uppercase text-slate-400"> */}
                  {!taskLoading && !taskError ? (
                    <button className=" text-slate-400 py-1 px-3 font-bold text-[0.9rem] rounded-full  uppercase ">
                      Completed
                    </button>
                  ) : (
                    <Skeleton width="60px" />
                  )}
                  {/* </button> */}
                </li>

                <li className="md:hidden">
                  {!taskLoading && !taskError ? (
                    <button className=" text-slate-400 py-1 px-3 font-medium text-[0.8rem] rounded-full brand-text-deep md:hidden ">
                      4 hours ago
                    </button>
                  ) : (
                    <Skeleton width="60px" />
                  )}
                </li>
              </ul>
              <h2 className="text-[1.7rem] md:text-[1.7rem] pr-4 font-extrabold text-gray-700  pl-2 whitespace-normal text-left mt-8 md:mt-6 ">
                {" "}
                {!taskLoading && !taskError ? (
                  task.title
                ) : (
                  <Skeleton width="200px" />
                )}
              </h2>
              <div className="flex items-center justify-between pr-4">
                <button
                  ref={mapRef}
                  onClick={() => setShowMap((prev) => !prev)}
                  className="hidden pl-2 mt-4 text-xs font-medium text-brand-light md:block"
                >
                  {!taskLoading && !taskError ? "Back to Map" : <Skeleton />}
                </button>

                <button
                  onClick={() => setShowTaskSidebar(true)}
                  className="pl-2 mt-4 text-xs font-medium text-brand-light md:hidden"
                >
                  {!taskLoading && !taskError ? "Back to tasks" : <Skeleton />}
                </button>

                <p className="text-xs font-medium text-brand-text">
                  about 4 hours ago
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 ml-2 ">
            <div className="flex items-center space-x-4 ">
              {task?.creator ? (
                <img
                  src={task?.creator?.Avatar}
                  alt=""
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover onject-center"
                />
              ) : (
                <Skeleton height="50px" width="50px" circle />
              )}

              <p className="flex flex-col text-[.8rem] font-medium">
                {task?.creator ? (
                  <span className="font-bold text-[.7rem] text-slate-600 uppercase tracking-wider">
                    Posted By
                  </span>
                ) : (
                  <Skeleton width="60px" height="20px" />
                )}

                <span className="text-[.9rem] tracking-tight brand-text mt-1 ">
                  {task?.creator ? (
                    `${task?.creator?.firstname} ${task?.creator?.lastname} .`
                  ) : (
                    <span className="flex ">
                      {" "}
                      <Skeleton width="80px" /> <Skeleton width="40px" />
                    </span>
                  )}
                </span>
              </p>
            </div>

            <ul className="text-[13px] mt-6 flex flex-col sm:flex-row sm:justify-between lg:flex-col lg:items-start sm:gap-x-4 items-start gap-y-5  md:space-y-0 md:items-center   md:space-x-3 md:border rounded-lg py-4  ">
              <li className="xs:w-full sm:max-w-max lg:w-full">
                <div className="flex flex-col justify-between gap-5 mr-8 sm:justify-between md:space-x-3 md xs:flex-row lg:w-full ">
                  <li className="  py-1 rounded-full flex items-center lg:items-start text-gray-700/90 font-medium space-x-2 lg:space-x-0 text-[12px] md:px-3 gap-x-3">
                    <p className="text-[25px] md:text-[40px] text-brand-text-deep ">
                      <BsCalendar4Week />
                    </p>
                    <div className="flex flex-col  lg:flex-col lg:gap-x-4 space-x-.5 items-start ">
                      <h3 className="uppercase font-bold text-[.75rem] text-slate-600">
                        {!taskLoading && !taskError ? (
                          "DUE DATE"
                        ) : (
                          <Skeleton height="20px" width="60px" />
                        )}
                      </h3>
                      <p className="text-[1rem] text-green-800 font-bold capitalize">
                        {task?.taskDeadline ? (
                          ` ${formatDate(task?.taskDeadline, "eee dd LLL")}`
                        ) : (
                          <Skeleton height="20px" width="60px" />
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="sm:hidden  rounded-full lg:flex lg:flex-row lg:justify-between items-center lg:items-start text-gray-700/90 font-medium space-x-2 text-[13px] md:px-3 py-1">
                    <p className="text-[20px] md:text-[40px] text-brand-text-deep">
                      <CiTimer />
                    </p>
                    <div className="flex flex-col lg:flex-col lg:items-start space-y-.5 lg:gap-x-4">
                      <h3 className="uppercase font-bold text-[.75rem]">
                        {task?.taskTime ? (
                          `TO BE DONE ON`
                        ) : (
                          <Skeleton height="" />
                        )}
                      </h3>
                      <p className="text-[1rem] text-green-800 font-bold capitalize">
                        {" "}
                        {task?.taskTime || (
                          <Skeleton height="20px" width="60px" />
                        )}
                      </p>
                    </div>
                  </li>
                </div>
              </li>
              <li className="hidden  rounded-full sm:flex lg:hidden items-center text-gray-700/90 font-medium space-x-2 text-[13px] md:px-3 py-1">
                <p className="text-[20px] md:text-[40px] text-brand-text-deep">
                  <CiTimer />
                </p>
                <div className="flex flex-col space-y-.5">
                  <h3 className="uppercase font-bold text-[.75rem]">
                    {task?.taskTime ? (
                      `TO BE DONE ON`
                    ) : (
                      <Skeleton height="20px" width="60px" />
                    )}
                  </h3>
                  <p className="text-[0.9rem] text-green-800 font-bold capitalize">
                    {" "}
                    {task?.taskTime || <Skeleton height="20px" width="60px" />}
                  </p>
                </div>
              </li>
              <li className=" rounded-full flex  items-start text-gray-700/90 font-medium space-x-2 text-[13px]  py-1">
                <p className="text-[20px] md:text-[40px] text-brand-text-deep">
                  <AiOutlineEnvironment />
                </p>
                <div className="flex flex-col space-y-.5">
                  <h3 className="uppercase font-bold text-[.75rem] text-slate-600">
                    Location
                  </h3>
                  <p className="text-[1rem] text-green-800 font-bold capitalize">
                    {" "}
                    {task?.taskType ? (
                      task?.taskType === "Remote" ? (
                        "Remote"
                      ) : (
                        task?.taskAddress
                      )
                    ) : (
                      <Skeleton width="60px" />
                    )}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* BUDGET BAR SMALL SCREENS */}

          <article className=" rounded-lg  mb-5 mt-6 bg-slate-100 pb-[0.5rem] lg:hidden ">
            <div className=" text-[30px]      border-b   ">
              <div>
                <p className="text-[12px] uppercase text-center pt-3 pb-1 font-medium text-gray-500">
                  Task Budget
                </p>
              </div>
              <div className="flex flex-row items-center justify-center font-bold text-gray-700 ">
                <p className="text-[4.2rem]">
                  <Naira style={`w-8 h-8 font-medium`} />
                </p>
                <p className="text-[40px] ">
                  {task?.budget ? (
                    millify(Math.floor(Number(task.budget)), 2)
                  ) : (
                    <Skeleton height="60px" width="40px" />
                  )}
                </p>
              </div>
            </div>
            <div className="mx-3">
              <button
                onClick={handleMakeOffer}
                className="text-center bg-green-500 hover:bg-brand-light rounded-full my-3  text-white font-bold  text-[16px]  py-3  w-full"
              >
                Make an Offer
              </button>
            </div>
          </article>

          {/* END OF BUDGET BAR  */}

          <div className="py-2 md:py-6 ">
            <h3 className="mb-4 font-bold text-slate-900/80 text-md md:px-2">
              Task Details
            </h3>

            <TextVisibility text={task?.description} files={task?.files} />
          </div>

          <div className="pt-2 ">
            {/* <MemoizedImageForm
              name={`${
                task?.creator?.firstname
              } ${task?.creator?.lastname.charAt(0)}`}
              handleCreate={true}
              clearValues={clearValues}
              ref={ref}
              setClearValues={setClearValues}
              taskId={task?._id}
            /> */}
          </div>

          <article className="pb-4 ">
            <div className="py-3 my-6 mb-2 md:pr-4">
              <h3 className="mb-4 font-bold text-slate-900/80 text-md ">
                All Offers
              </h3>
              <div className="space-y-12">
                {task?.offers?.length > 0 ? (
                  task?.offers.map((offer, idx) => {
                    if (!offer.userDeleted) {
                      return (
                        <li key={idx} className="list-none">
                          <TaskComments comment={offer} type="offer" />
                        </li>
                      );
                    }
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center ">
                    <p>
                      <AiOutlineShoppingCart className="text-[6rem] text-brand-text -rotate-12" />
                    </p>

                    <div className="text-[.95rem] font-semibold text-gray-800 mt-6 font-inter  ">
                      No offers for this task yet.
                      <button className="pl-2 text-brand-light">
                        {" "}
                        Be the first ?
                      </button>
                    </div>

                    <button
                      onClick={handleMakeOffer}
                      className="bg-slate-100 text-green-800 mt-8 w-60 rounded-full py-3 font-bold"
                    >
                      Make offer
                    </button>
                  </div>
                )}
              </div>
              {task?.hasMoreOffers && isLoggedIn ? (
                <div className="flex justify-center my-4">
                  <button
                    onClick={loadMoreOffers}
                    className="bg-gray-50 border text-brand-light text-[14px] font-semibold px-4 py-2 rounded-full "
                  >
                    More Offers
                  </button>
                </div>
              ) : task?.hasMoreOffers && !isLoggedIn ? (
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[.8rem] font-medium text=brand-text-deep pb-4 ">
                    To see more offers ?
                  </p>
                  <div className="flex flex-row items-center space-x-3 text-[.75rem]">
                    <button className="px-4 py-2 font-semibold text-white rounded-full bg-brand-light/90  ">
                      Join Primetasker
                    </button>
                    <p className="font-medium">or</p>
                    <button className="px-5 py-2 font-semibold text-green-800 rounded-full bg-green-50 ">
                      Log In
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </article>

          <div className="pb-60 ">
            <div className="pt-6 mt-6 ml-4 space-y-8 border-t">
              <h3 className=" text-gray-900/80 font-bold  mb-2 text-[.7rem] uppercase">
                {`Questions (${task?.comments?.length} )` || (
                  <Skeleton height="" />
                )}
              </h3>
              <p className="text-[.85rem] text-brand-text font-medium">
                Please don't share personal info - insurance won't apply to
                tasks not done through Primetasker!
              </p>

              {task?.comments?.length > 0
                ? task.comments.map((comment, idx) => {
                    return (
                      <li key={idx} className="list-none">
                        <TaskComments comment={comment} type="comment" />
                      </li>
                    );
                  })
                : null}
            </div>

            {task?.hasMoreComments ? (
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
        </div>

        <aside className="sticky top-0 right-0 hidden lg:w-1/3 lg:block ">
          <section className="w-[250px]   left-0 bottom-0 top-0 mx-auto  ">
            <article className="relative ">
              <article className=" rounded-lg  mb-5  bg-slate-100 pb-[0.5rem]  ">
                <div className=" text-[30px]      border-b   ">
                  <div>
                    <p className="text-[12px] uppercase text-center pt-3 pb-1 font-medium text-gray-500">
                      Task Budget
                    </p>
                  </div>
                  {task?.budget ? (
                    <div className="flex flex-row items-center justify-center font-bold text-gray-700 ">
                      <p className="text-[4.2rem]">
                        <Naira style={`w-8 h-8 font-medium`} />
                      </p>
                      <p className="text-[40px] text-brand-text-deep ">
                        {millify(Math.floor(Number(task.budget)), 2)}
                      </p>
                    </div>
                  ) : (
                    <Skeleton height="30px" width="30px" />
                  )}
                </div>
                <div className="mx-3">
                  <button
                    onClick={handleMakeOffer}
                    className="text-center  border border-green-600 hover:bg-brand-light hover:text-white rounded my-3  text-brand-text font-bold  text-[16px]  py-3  w-full"
                  >
                    Make an Offer
                  </button>
                </div>
              </article>

              <div className="share ">
                <div className="bg-slate-100 flex flex-col-reverse border text-[12px] font-medium mt-8 rounded-lg text-brand-text-deep">
                  <button
                    onClick={() => createSimilarTask(task)}
                    className="flex items-center justify-center w-full p-4  space-x-3 "
                  >
                    <span>
                      <MdOutlineAddTask size={20} />
                    </span>
                    <span>Post a similar task</span>
                  </button>

                  <button
                    onClick={handleFlag}
                    disabled={!isLoggedIn}
                    className="flex items-center justify-center  w-full p-4 space-x-3  border-b  "
                  >
                    <span>
                      <AiOutlineFlag size={20} />
                    </span>
                    <span>Report this task</span>
                  </button>
                  <button className="flex items-center justify-center  w-full p-4 space-x-3  border-b ">
                    <span>
                      <MdAlarmOn size={20} />
                    </span>
                    <span>Set up Alerts </span>
                  </button>
                </div>
              </div>
              <article className="w-full  mt-4  rounded-lg more options ">
                <div className="share ">
                  <div className="  text-[12px] font-medium mt-8 rounded-lg">
                    <article className="w-full more options">
                      <p className="px-2 text-[.8rem] font-semibold mb-4">
                        Know someone who can do this ?{" "}
                      </p>
                      <div className="text-[16px] flex flex-row gap-x-8 justify-center items-center   p-2 my-1  border rounded   ">
                        <button className=" p-2 text-white bg-blue-600 rounded-full  align-middle space-x-2 flex items-center">
                          <FaFacebookF size={15} className="text-white" />
                        </button>
                        <button className="p-2 bg-green-500 text-white  rounded-full align-middle space-x-2 flex items-center">
                          <AiOutlineWhatsApp size={15} className="text-white" />
                        </button>
                        <button className="p-2 bg-[#00aced]  text-white rounded-full align-middle  flex items-center">
                          <AiOutlineTwitter size={15} className="text-white" />
                        </button>
                        <button className="p-2 bg-[#0869d8]  text-white   rounded-full align-middle flex items-center">
                          <FaLinkedin size={15} className="text-white" />
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
              </article>
            </article>
          </section>
        </aside>
      </motion.section>
    </SkeletonTheme>
  );
};

export default TaskMainDisplay;
