import React, { useRef, useState, useEffect, useId, useCallback } from "react";
import {
  // AiOutlineFlag,
  AiOutlineEnvironment,
  // AiOutlineCalendar,
  // AiOutlineTwitter,
  // AiOutlineWhatsApp,
  // AiOutlineCopy,
  // AiOutlineClockCircle,
  // AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { CiTimer } from "react-icons/ci";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
// import { FaFacebookF, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import millify from "millify";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import TaskComments from "../../../features/tasks/pages/TaskComments";
import { useGetCommentsfortaskQuery } from "../../../features/comments/slices/commentApiAlice";
import Naira from "../../../../assets/svgs/Naira";
import useAuth from "../../../hooks/useAuth";
import { useGetTaskByIdQuery } from "../../../features/tasks/slices/taskApiSlice";
import { formatDate } from "../../../utils/formatDate";
import TextVisibility from "../../../components/TextVisibility";

import "react-loading-skeleton/dist/skeleton.css";
import ManageTaskAlert from "../../../features/tasks/pages/ManageTaskAlert";

const MyTasksView = () => {
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
    if (urlId !== "/my-tasks") {
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
        <div className="w-full h-full px-3 lg:w-[60%] ">
          {task.status === "Assigned" && <ManageTaskAlert task={task} />}

          <div className="flex items-center ">
            <div className=" ">
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
                  {!taskLoading && !taskError ? (
                    <button className=" text-slate-400 py-1 px-3 font-bold text-[0.9rem] rounded-full  uppercase ">
                      Assigned
                    </button>
                  ) : (
                    <Skeleton width="60px" />
                  )}
                </li>

                <li className="hidden md:block">
                  {!taskLoading && !taskError ? (
                    <button className=" text-slate-400 py-1 px-3 font-bold text-[0.9rem] rounded-full  uppercase ">
                      Completed
                    </button>
                  ) : (
                    <Skeleton width="60px" />
                  )}
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
              <div className=""></div>
              <div className="flex items-end justify-between pr-4">
                <div>
                  <div className=" rounded-full flex  items-start text-gray-700/90 font-medium space-x-2 text-[13px]  py-1 pl-1">
                    <p className="text-[20px] md:text-[20px] text-brand-text-deep">
                      <AiOutlineEnvironment />
                    </p>
                    <div className="flex flex-col space-y-.5">
                      <p className="text-[.85rem] text-green-800 font-bold capitalize">
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
                  </div>
                  <button
                    ref={mapRef}
                    onClick={() => setShowMap((prev) => !prev)}
                    className="hidden pl-6  text-xs font-medium text-brand-light md:block"
                  >
                    {!taskLoading && !taskError ? "Show on Map" : <Skeleton />}
                  </button>
                </div>

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
            <div className="flex flex-col  gap-x-2">
              <article className="">
                <div className=" ">
                  <div className="flex gap-x-3 w-full">
                    {task?.creator ? (
                      <img
                        src={task?.creator?.Avatar}
                        alt=""
                        className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] rounded-full object-cover onject-center"
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
                </div>

                <ul className="text-[13px]  flex flex-col sm:flex-row sm:justify-between lg:flex-col lg:items-start sm:gap-x-4 items-start gap-y-5  md:space-y-0 md:items-center   md:space-x-3  rounded-lg py-4  ">
                  <li className="xs:w-full sm:max-w-max lg:w-full">
                    <div className="flex flex-col justify-between gap-5 mr-8 sm:justify-between md:space-x-3 md xs:flex-row lg:w-full ">
                      <li className="  py-1 rounded-full flex items-center lg:items-start text-gray-700/90 font-medium space-x-2 lg:space-x-0 text-[12px] md:px-3 gap-x-3">
                        <p className="text-[25px] md:text-[20px] text-brand-text-deep ">
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
                          <p className="text-[.85rem] text-green-800 font-bold capitalize">
                            {task?.taskDeadline ? (
                              ` ${formatDate(task?.taskDeadline, "eee dd LLL")}`
                            ) : (
                              <Skeleton height="20px" width="60px" />
                            )}
                          </p>
                        </div>
                      </li>
                      {/* <li className="sm:hidden  rounded-full lg:flex lg:flex-row lg:justify-between items-center lg:items-start text-gray-700/90 font-medium space-x-2 text-[13px] md:px-3 py-1">
                    <p className="text-[20px] md:text-[20px] text-brand-text-deep">
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
                      <p className="text-[.85rem] text-green-800 font-bold capitalize">
                        {" "}
                        {task?.taskTime || (
                          <Skeleton height="20px" width="60px" />
                        )}
                      </p>
                    </div>
                  </li> */}
                    </div>
                  </li>
                  {/* <li className="hidden  rounded-full sm:flex  items-center text-gray-700/90 font-medium space-x-2 text-[13px] md:px-3 py-1">
                <p className="text-[20px] md:text-[20px] text-brand-text-deep">
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
              </li> */}
                  <li className="sm:hidden  rounded-full lg:flex lg:flex-row lg:justify-between items-center lg:items-start text-gray-700/90 font-medium space-x-2 text-[13px]  py-1">
                    <p className="text-[20px] md:text-[20px] text-brand-text-deep">
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
                      <p className="text-[.85rem] text-green-800 font-bold capitalize">
                        {" "}
                        {task?.taskTime || (
                          <Skeleton height="20px" width="60px" />
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
              </article>

              {/* BUDGET BAR SMALL SCREENS */}
              <div className="">
                <article className="flex-1 rounded-lg  mb-5  bg-slate-100 pb-[0.5rem]  ">
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
                          millify(
                            Math.floor(Number(task.budget.initialBudget)),
                            2
                          )
                        ) : (
                          <Skeleton height="60px" width="40px" />
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mx-3">
                    <button
                      // onClick={handleMakeOffer}
                      className="text-center bg-green-500 hover:bg-brand-light rounded-full my-3  text-white font-bold  text-[16px]  py-3  w-full"
                    >
                      Post Similar Task
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* END OF BUDGET BAR  */}

          <div className="py-2 md:pb-44 ">
            <h3 className="mb-4 font-bold text-slate-900/80 text-md md:px-2">
              Task Details
            </h3>

            <TextVisibility text={task?.description} files={task?.files} />
          </div>

          <div className="">
            {task?.comments?.length > 0 ? (
              <div className="">
                <div className="pt-6 mt-6 ml-4 space-y-8 border-t">
                  <h3 className=" text-gray-900/80 font-bold  mb-2 text-[.7rem] uppercase">
                    {`Questions (${task?.comments?.length} )` || (
                      <Skeleton height="" />
                    )}
                  </h3>

                  {task.comments.map((comment, idx) => {
                    return (
                      <li key={idx} className="list-none">
                        <TaskComments comment={comment} type="comment" />
                      </li>
                    );
                  })}
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
            ) : null}
          </div>
        </div>

        <aside className=" hidden lg:w-[40%] lg:block overflow-scroll scrollbar-thin  ">
          <section className="   left-0 bottom-0 top-0 mx-auto  ">
            <article className="relative ">
              <article className="pb-4 ">
                <div className="py-3 my-6 mb-2 ">
                  <h3 className="mb-4 font-bold text-slate-900/80 text-md ">
                    All Offers
                  </h3>
                  <div className="space-y-12">
                    {task?.offers?.length > 0 ? (
                      task?.offers.map((offer, idx) => {
                        if (!offer.userDeleted) {
                          return (
                            <li key={idx} className="list-none border ">
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
                        </div>
                      </div>
                    )}
                  </div>
                  {task?.hasMoreOffers && (
                    <div className="flex justify-center my-4">
                      <button
                        onClick={loadMoreOffers}
                        className="bg-gray-50 border text-brand-light text-[14px] font-semibold px-4 py-2 rounded-full "
                      >
                        More Offers
                      </button>
                    </div>
                  )}
                </div>
              </article>
            </article>
          </section>
        </aside>
      </motion.section>
    </SkeletonTheme>
  );
};

export default MyTasksView;
