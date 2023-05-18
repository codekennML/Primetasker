import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { formatDate } from "../../../utils/formatDate.js";
import millify from "millify";
import { Link } from "react-router-dom";

const TaskCard = ({
  task,
  setOpen,
  idx,
  fromDash = false,
  mainDisplay = true,
  isHost = false,
}) => {
  let imageSrc;

  if (!mainDisplay && task.status === "Assigned") {
    imageSrc === task.asssigned?.Avatar;
  } else {
    imageSrc = task.creator_details?.Avatar;
  }

  return (
    <li
      // onClick={handleTaskDisplay}
      className="bg-white   rounded-lg cursor-pointer pt-4 border-l-[1px] shadow-md border hover:shadow-lg shadow-gray-50  "
      key={idx}
    >
      <Link
        to={
          fromDash
            ? `/tasks/${task.title.replace(/ /g, "-")}-${task._id}    `
            : `${task.title.replace(/ /g, "-")}-${task._id}`
        }
        onClick={fromDash ? null : setOpen(true)}
      >
        <div className="px-4 sm:px-7 ">
          <div>
            <p className="text-[.98rem] font-roboto  text-brand-light  font-medium  text-left  tracking-tight">
              {task.title}
            </p>
          </div>

          <article className="flex justify-between items-start">
            <ul className="text-[.75rem]  space-y-1 my-2 ">
              <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[.95rem]  ">
                <p>
                  <AiOutlineCalendar className="text-gray-500" />
                </p>
                <p className="text-[.8rem] capitalize">
                  {formatDate(
                    new Date(
                      task?.taskDeadline
                        ? task.taskDeadline
                        : task?.taskEarliestDone
                    ),
                    "EEEE dd LLL"
                  )}
                </p>
              </li>
              <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[.95rem] ">
                <p>
                  <AiOutlineClockCircle className="text-gray-500" />
                </p>
                <p className="text-[.8rem]  capitalize">{task.taskTime}</p>
              </li>
              <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[.95rem] ">
                <p>
                  <AiOutlineEnvironment className="text-gray-500" />
                </p>
                <p className="text-[.8rem]  capitalize ">
                  {task.taskType === "Physical" ? task.taskAddress : "Remote"}
                </p>
              </li>
            </ul>

            <div className="pl-2.5 flex flex-col justify-start">
              <div className="flex items-center justify-center flex-1 ">
                <img
                  src={
                    imageSrc ??
                    "https://minibnb.vercel.app/_next/image?url=%2Fimages%2Fplaceholder.jpg&w=32&q=75"
                  }
                  alt={`${task.title}-prime-task-image-${idx}`}
                  className="align-end w-[50px] h-[50px] object-cover object-fit rounded-full mt-4"
                />
              </div>
            </div>
          </article>
        </div>
        <div className=" border-t border-green-100  mt-2 flex justify-between items-center px-4 sm:px-7 py-2.5">
          <ul className="flex items-center text-[.9rem] font-medium text-gray-500 space-x-2  ">
            <li className="flex items-center ">
              <p
                className={
                  task?.status === "Cancelled"
                    ? "text-primary text-rose-600"
                    : "text-primary text-brand-accent"
                }
              >
                {task.status}
              </p>
            </li>
            {task?.offerCount > 0 && task?.status !== "Cancelled" ? (
              <>
                <li className="text-[20px]">&middot;</li>

                <li className="text-primary text-slate-600 text-[.75rem] ">
                  {task?.offerCount || 0}{" "}
                  {task.offerCount === 1 ? "offer" : "offers"}
                </li>
              </>
            ) : null}
          </ul>
          <p className="justify-end text-[.95rem] text-brand-light font-semibold text-center inline-flex items-center">
            &#8358;{Number(task.budget.initialBudget)}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default TaskCard;
