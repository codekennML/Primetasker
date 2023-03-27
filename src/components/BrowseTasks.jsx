import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";

import Naira from "../../assets/svgs/Naira.jsx";
// import CustomText from "../utils/CustomFieldComp/CustomText.jsx";

import TaskFilters from "../features/tasks/pages/TaskFilters.jsx";

import { pageInfo, setPageInfo } from "../features/pagination/paginate.js";

// import InfiniteScroll from "react-infinite-scroll-component";
import { useGetTasksQuery } from "../features/tasks/slices/taskApiSlice.js";
import { formatDate } from "../utils/formatDate.js";
import Spinner from "../utils/Spinner.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import TaskMainDisplay from "./TaskMainDisplay";
import { useSelector } from "react-redux";
import millify from "millify";
import useAuth from "../hooks/useAuth.js";

const BrowseTasks = () => {
  const { userLoggedIn: isLoggedIn } = useAuth();
  const [currTask, setCurrTask] = useState(null);
  const [loginShow, setLoginShow] = useState(false);
  const [clearValues, setClearValues] = useState(false);
  const [pageInfo, setPageInfo] = useState({});

  const [showBrief, setShowBrief] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);

  // const lastResult = useGetTasksQuery(currentPage - 1, {
  //   // skip: currentPage === 1,
  // }); // don't fetch pages before 0
  // const currentResult = useGetTasksQuery(currentPage);
  // const nextResult = useGetTasksQuery(currentPage + 1);

  const {
    data: taskData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetTasksQuery({
    page: currentPage,
  });

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities, pageData } = taskData;
      setPageInfo(pageData);
      setTasks((prev) => {
        return [...prev, ...ids.map((id) => entities[id])];
      });
    }
  }, [taskData]);

  const handleChange = () => {
    isLoggedIn ? setCurrentPage((prev) => prev + 1) : setLoginShow(true);
  };

  const handleTask = (task) => {
    setCurrTask(task);
    setClearValues((prev) => !prev);
  };

  // useEffect(() => {
  // }, [tasks]);

  const renderTasks = tasks.map((task, idx) => {
    return (
      <li
        key={idx}
        onClick={() => handleTask(task)}
        className="bg-white px-4  rounded-lg cursor-pointer pt-3 pb-1 border-l-[1px] shadow-md hover:shadow-lg shadow-purple-50 "
      >
        <div className="flex justify-between px-3 ">
          <div className="flex-1 flex-wrap space-y-2">
            <p className="text-[15px] font-roboto font-semibold text-slate-800/70 text-left  tracking-tight">
              {task.title}
            </p>
            <ul className="text-[14px] space-y-0.5 my-2 ">
              <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                <p>
                  <AiOutlineCalendar />
                </p>
                <p className="text-[12px] capitalize">
                  {" "}
                  {formatDate(task.taskEarliestDone, "EEEE dd LLL")}
                </p>
              </li>
              <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                <p>
                  <AiOutlineClockCircle />
                </p>
                <p className="text-[12px] capitalize">
                  {" "}
                  {/* {formatDate(task.taskEarliestDone, "HH:mm")} */}
                  {task.taskTime}
                </p>
              </li>
              <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                <p>
                  <AiOutlineEnvironment />
                </p>
                <p className="text-[12px] capitalize ">
                  {task.taskType === "Physical" ? task.location : "Remote"}
                </p>
              </li>
            </ul>
          </div>

          <div className="pl-2.5 flex flex-col justify-start">
            <p className="justify-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
              <span className="text-[16px] font-semibold tracking-wide">
                &#8358;{millify(Number(task.budget), 2)}
              </span>
            </p>
            <div className="flex-1 justify-center items-center flex ">
              <img
                src={
                  task.creator_details?.Avatar
                    ? task.creator_details.Avatar
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt={`${task.title}-prime-task-image-${idx}`}
                className="align-end w-[50px] h-[50px] object-cover object-fit rounded-full mt-4"
              />
            </div>
          </div>
        </div>
        <div className="border-t py-0.5 mt-2">
          <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
            <li className="flex items-center  ">
              <p className="text-[13px] text-purple-700 capitalize">
                {task.status}
              </p>
            </li>
            <li className="text-[20px]">&middot;</li>
            <li className="text-[13px]">7 offers</li>
          </ul>
        </div>
      </li>
    );
  });

  return (
    <section className="max-w-screen-xl max-h-screen h-screen  mx-auto  bg-transparent  ">
      <div className=" relative justify-start pt-20  flex  ">
        <section
          id="scrollableDiv"
          className=" w-1/3  h-[calc(100vh_-_80px)]    scrollbar-thin scrollbar-thumb-gray-400/30 scrollbar-track-gray-300 overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full pl-6 pr-5 space-y-4 "
        >
          <TaskFilters />

          <div className=" mx-2 text-center  top-16 left-[25%] sticky">
            <button
              // onClick={}
              className="bg-purple-600 text-white font-medium py-2 text-[14px] px-4 rounded-lg"
            >
              <span>New tasks available</span>
            </button>
          </div>

          <InfiniteScroll
            dataLength={tasks.length}
            scrollableTarget="scrollableDiv"
            next={handleChange}
            hasMore={Number(pageInfo.page) < Number(pageInfo.pages)}
            loader={
              <Spinner
                height={20}
                width={20}
                visible={true}
                color="purple"
                position="justify-center"
              />
            }
          >
            <ul className="space-y-4 list-none">{renderTasks}</ul>
          </InfiniteScroll>

          {!loginShow && <div>Login to view more conversations</div>}
        </section>

        <section className="flex-1 w-2/3 relative ">
          <TaskMainDisplay
            task={currTask}
            clearValues={clearValues}
            setClearValues={setClearValues}
            showBrief={showBrief}
            setShowBrief={setShowBrief}
          />

          {/* <Map displayBrief={setShowBrief} /> */}
        </section>
      </div>
    </section>
  );
};

export default BrowseTasks;
