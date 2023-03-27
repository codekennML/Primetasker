import React, {
  useDeferredValue,
  useRef,
  useState,
  useEffect,
  useId,
} from "react";
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
import { formatDistance } from "date-fns";

import { useDispatch, useSelector } from "react-redux";
import { HiReply } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  Link,
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

import { FaFacebookF, FaLinkedinIn, FaRegFlag } from "react-icons/fa";
// import { formatDate } from "../utils/formatDate";
import millify from "millify";
import TaskComments from "./TaskComments";
import { useGetTaskByIdQuery, useGetTasksQuery } from "../slices/taskApiSlice";
import useAuth from "../../../hooks/useAuth";
import { showModal, hideModal } from "../../modal/modalSlice";
import MemoizedImageForm from "../../../components/ImageForm";
import {
  useGetCommentsfortaskQuery,
  useCreateCommentMutation,
} from "../../comments/slices/commentApiAlice";
import Naira from "../../../../assets/svgs/Naira";
import Spinner from "../../../utils/Spinner";
import CustomTextarea from "../../../utils/CustomFieldComp/CustomTextarea";
import ImageUpload from "../../../components/ImageUpload";
import { formatDate } from "../../../utils/formatDate";
import "react-loading-skeleton/dist/skeleton.css";
import Map from "../Map";
import TextVisibility from "../../../components/TextVisibility";

const TaskMainDisplay = () => {
  const newId = useId();
  const location = useLocation();
  const urlId = location?.pathname.split("-").slice(-1)[0];

  const [taskId, setTaskId] = useState(undefined);
  const [open, setOpen, closeMap] = useOutletContext();
  const [clearValues, setClearValues] = useState(false);
  const [task, setTask] = useState();
  const navigate = useNavigate();
  const mapRef = useRef(null);

  useEffect(() => {
    if (urlId === "/tasks") {
      setTaskId(undefined);
      setOpen(false);
    } else {
      setTaskId(urlId);
    }
  }, [urlId]);

  const {
    data: selectedTask,
    isError: taskError,
    isLoading: taskLoading,
    isSuccess: taskSuccess,
  } = useGetTaskByIdQuery(taskId, {
    skip: taskId === "/tasks" || taskId === undefined,
  });

  useEffect(() => {
    if (taskSuccess) {
      const { ids, entities } = selectedTask;
      setTask(entities[ids[0]]);
    }
  }, [selectedTask]);

  useEffect(() => {
    if (closeMap) {
      mapRef?.current ? mapRef.current.click() : null;
    }
  }, [closeMap]);

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
      taskId: taskId,
    },
    {
      skip: taskId === "/tasks/" || commentPage === 1,
    }
  );

  useEffect(() => {
    setClearValues((prev) => !prev);
  }, [taskId]);

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

  const handleToggleDisplay = () => {
    setShowFullText(!showFullText);
    setDisplayText(showFullText ? text.slice(0, 200) : text);
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

  const handleShowMap = () => {
    setOpen(false);
    setTaskId(undefined);
  };

  const handleMakeOffer = () => {
    if (isLoggedIn) {
      dispatch(
        showModal({
          currentModal: "offerModal",
          modalData: task?._id,
        })
      );
    } else {
      navigate("/login", { state: { redirectUri: location } });
    }
  };

  return (
    <>
      <div className="w-full h-full absolute overflow-x-hidden top-0 right-0 bottom-0 left-0 z-0 ">
        <Map />
      </div>

      {task?.title ? (
        <>
          <motion.section
            initial="initial"
            animate={
              open || (taskId !== undefined && taskId !== "/tasks")
                ? "animate"
                : "initial"
            }
            variants={{
              initial: { y: taskId && closeMap ? -300 : -900, opacity: 1 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 1 },
              },
            }}
            className="bg-white absolute top-0 bottom-0 right-0  left-0 w-full flex px-6 py-4 overflow-y-scroll z-10 lg:flex  max-h-screen  scrollbar-thin scrollbar-thumb-gray-400/30 scrollbar-track-gray-300  scrollbar-thumb-rounded-full overflow-x-hidden  scrollbar-track-rounded-full "
          >
            <div className=" w-2/3 h-full  ">
              <div className="flex items-center  ">
                <div className="flex-1 ">
                  <ul className="flex flex-row justify-start space-x-6 my-3">
                    <li>
                      <button className="py-1 px-3 font-bold text-[0.9rem] rounded-full bg-purple-500/40 uppercase text-gray-600">
                        Open
                      </button>
                    </li>
                    <li>
                      <button className="py-1 px-3 font-semibold text-[0.9rem] rounded-full uppercase text-slate-400">
                        Assigned
                      </button>
                    </li>
                    <li>
                      <button className="py-1 px-4 rounded-full font-bold text-[0.9rem]  uppercase text-slate-400">
                        Completed
                      </button>
                    </li>
                  </ul>
                  <h2 className="text-[1.7rem] font-[400] text-slate-900/80 font-heading  pl-2 px-12 mt-8 ">
                    {" "}
                    {task.title}
                  </h2>
                  <button
                    ref={mapRef}
                    onClick={handleShowMap}
                    className="text-xs text-purple-700 font-medium mt-4 pl-2"
                  >
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
                      {`${task?.creator.firstname} ${task?.creator?.lastname}`}
                    </span>
                  </p>
                </div>
                <ul className="text-[13px] mt-6 flex items-center  space-x-3 border-y py-2  ">
                  <li className=" rounded-full flex  items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                    <p className="text-[20px] text-purple-500">
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[0.9rem] text-gray-500 font-bold capitalize">
                      {" "}
                      {task.taskType === "Remote" ? "Remote" : task.location}
                    </p>
                  </li>
                  <li className="  py-1 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[12px] px-3">
                    <p className="text-[15px] text-purple-500">
                      <AiOutlineCalendar />
                    </p>
                    <p>
                      {`Expires : ${formatDate(
                        task.taskDeadline,
                        "eee dd LLL"
                      )}`}
                    </p>
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
                <h3 className="  text-slate-900/80 font-bold text-lg font-heading mb-4">
                  Task Details
                </h3>

                <TextVisibility text={task.description} files={task.files} />
                {/* <p className="px-6 text-[13.5px] leading-[1.5rem] mt-4 text-slate-700/90 text-justify font-semibold ">
                  {task.description}
                </p>

                {task.files.length > 0 ? (
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() =>
                        dispatch(
                          showModal({
                            currentModal: "CommentImages",
                            modalData: task.files,
                          })
                        )
                      }
                      className="flex items-center space-x-1 mr-3"
                    >
                      <span className="text-purple-600 text-[16px]">
                        <FaImage />
                      </span>
                      <span className="text-[13px] font-bold text-purple-600">
                        ({task.files.length} )
                      </span>
                    </button>
                  </div>
                ) : null} */}
              </div>

              <article className=" pb-20">
                <div className="my-6 pr-4  mb-12 py-3">
                  <h3 className="  text-slate-900/80 font-bold text-lg font-heading mb-4">
                    All Offers
                  </h3>

                  <div className="space-y-8 ml-4 ">
                    {task.comments.length > 0
                      ? task.comments.map((comment, idx) => {
                          return (
                            <li key={idx} className="list-none">
                              <TaskComments comment={comment} />
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
              </article>
              <div className="pb-20">
                <MemoizedImageForm
                  name={`${
                    task.creator.firstname
                  } ${task.creator.lastname.charAt(0)}`}
                  handleCreate={true}
                  clearValues={clearValues}
                  ref={ref}
                  setClearValues={setClearValues}
                  taskId={task._id}
                />

                <div className="space-y-8 ml-4 ">
                  {task.comments.length > 0
                    ? task.comments.map((comment, idx) => {
                        return (
                          <li key={idx} className="list-none">
                            <TaskComments comment={comment} />
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

            <aside className="w-1/3 right-0 sticky  top-0     ">
              <section className="w-[250px]  left-0 bottom-0 top-0 mx-auto  ">
                <article className="relative    ">
                  <article className=" rounded-lg  mb-5 mt-2 bg-slate-100 pb-[0.5rem]  ">
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
                          {millify(Math.floor(Number(task.budget)), 2)}
                        </p>
                      </div>
                    </div>
                    <li className=" cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-full my-3 flex justify-center items-center text-white font-bold space-x-2 text-[16px] px-6 mx-3 py-3 ">
                      <button onClick={handleMakeOffer} className="text-center">
                        {" "}
                        Make an Offer
                      </button>
                    </li>
                  </article>

                  <div className="share ">
                    <div className="bg-slate-100 border text-[12px] font-medium mt-4 rounded-lg">
                      <button
                        onClick={() => createSimilarTask(task)}
                        className="py-4 border-b w-full flex items-center justify-center space-x-3 "
                      >
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
                      <button
                        onClick={handleFlag}
                        disabled={!isLoggedIn}
                        className="py-4 w-full  flex items-center justify-center space-x-3 "
                      >
                        <span>
                          <AiOutlineFlag />
                        </span>
                        <span>Report this task</span>
                      </button>
                    </div>
                  </div>
                  <article className="more options w-full mt-8 border p-3 rounded-lg bg-slate-200">
                    <h2 className="text-[13px] font-medium text-center">
                      Join the conversation ?{" "}
                    </h2>
                    <div className="text-[12px] flex flex-col justify-center items-center space-x-5  p-2 mt-2 rounded-lg  ">
                      <button className="p-2 text-[12px] rounded-full w-1/2 bg-purple-800 text-white">
                        <Link to="/login">Sign In</Link>
                      </button>
                    </div>
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
                            <button className="p-2 rounded-full bg-green-600 text-white">
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
                </article>
              </section>
            </aside>
          </motion.section>
        </>
      ) : null}
    </>
  );
};

export default TaskMainDisplay;
