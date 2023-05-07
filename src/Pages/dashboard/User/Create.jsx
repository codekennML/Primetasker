import React, { useEffect, useState } from "react";
import {
  AiFillEdit,
  AiFillEnvironment,
  AiFillFormatPainter,
  AiFillSketchCircle,
  AiOutlineEdit,
  AiOutlineEnvironment,
  AiOutlineFormatPainter,
  AiOutlineSketch,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import { useGetTasksQuery } from "../../../features/tasks/slices/taskApiSlice";
import TaskCard from "../../../features/tasks/pages/TaskCard";

const Create = () => {
  const [tasks, setTasks] = useState([]);

  const {
    data: taskData,
    isLoading,
    isError,
    isSuccess,
  } = useGetTasksQuery({
    page: 1,
  });

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities, pageData } = taskData;
      const allTasks = [...ids.map((id) => entities[id])];
      setTasks(allTasks);
    }
  }, [taskData]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col ">
      <div>{/* <TopBar headerText={`Create Listing`} /> */}</div>
      <div className="flex-1  ">
        <article className="flex flex-col space-y-5 ">
          <h1 className="title-heading text-left mb-2 text-[1.2rem]">
            What would you like to create today ?
          </h1>
          <section className=" grid grid-cols-2 pl-4 gap-8 ">
            <Link
              to="/create/post-a-task"
              className="  rounded-lg flex flex-col justify-center items-center  cursor-pointer  py-4 border hover:bg-brand-light text-brand-text-deep hover:text-white  "
            >
              <div className="rounded-full  flex justify-center items-center bg-brand-light w-16 h-16 text-white">
                <AiOutlineFormatPainter size={30} />
              </div>
              <p className="text-[1.2rem] font-semibold  pt-4 pb-3">
                Post a task
              </p>
              <p className="text-[.8rem] ">
                Whatever your need, it can be done
              </p>
            </Link>
            <Link
              to="/create/create-service"
              className="  rounded-lg flex flex-col justify-center items-center  cursor-pointer  py-4 border hover:bg-brand-light text-brand-text-deep hover:text-white "
            >
              <div className="rounded-full  flex justify-center items-center bg-brand-light w-16 h-16 text-white ">
                <AiOutlineFormatPainter size={30} />
              </div>
              <p className="text-[1.2rem] font-semibold  pt-4 pb-3 ">
                List a service
              </p>
              <p className="text-[.8rem] ">List your services with packages</p>
            </Link>
            <Link
              to="create-alert"
              className="  rounded-lg flex flex-col justify-center items-center  cursor-pointer  py-4 border hover:bg-brand-light text-brand-text-deep hover:text-white "
            >
              <div className="rounded-full  flex justify-center items-center bg-brand-light w-16 h-16 text-white ">
                <AiOutlineFormatPainter size={30} />
              </div>
              <p className="text-[1.2rem] font-semibold  pt-4 pb-3 ">
                Set up Alerts
              </p>
              <p className="text-[.8rem] ">List your services with packages</p>
            </Link>
          </section>
        </article>
        {/* <article className="py-8 ">
          <div className="flex items-center justify-between">
            <h3 className="title-heading text-left mb-2 text-[1rem]">
              See what others are getting done
            </h3>
            <button
              onClick={() => navigate("/tasks")}
              className="hover:underline text-brand-text  font-medium text-[.85rem]"
            >
              View all tasks
            </button>
          </div>

          {tasks.length < 1 ? (
            "No tasks found "
          ) : (
            <div className="py-3  ">
              <ul className="grid grid-cols-2 gap-3 ">
                {tasks.map((task, idx) => (
                  <TaskCard task={task} idx={idx} fromDash />
                ))}
              </ul>
            </div>
          )}
          {tasks.length > 10 && (
            <div className="flex w-full items-center justify-end mt-4">
              <button
                onClick={() => navigate("/tasks")}
                className="rounded-full px-6 py-3 bg-green-100 text-brand-text-deep text-[.85rem] font-semibold"
              >
                Browse more tasks
              </button>
            </div>
          )}
        </article> */}
      </div>

      {/* bg-gradient-to-br from-orange-100 via-pink-100 */}
    </div>
  );
};

export default Create;
