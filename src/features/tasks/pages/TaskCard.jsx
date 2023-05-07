import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { formatDate } from "../../../utils/formatDate.js";
import millify from "millify";
import { Link } from "react-router-dom";

const TaskCard = ({ task, setOpen, idx, fromDash = false }) => {
  return (
    <li
      // onClick={handleTaskDisplay}
      className="bg-white   rounded-lg cursor-pointer pt-4 border-l-[1px] shadow-md border hover:shadow-lg shadow-gray-50  "
      key={idx}
    >
      <Link
        to={
          fromDash
            ? `/tasks/${task.title.replace(/ /g, "-")}-${task.id}    `
            : `${task.title.replace(/ /g, "-")}-${task.id}`
        }
        onClick={fromDash ? null : setOpen(true)}
      >
        <div className="flex justify-between px-7 ">
          <div className="flex-wrap flex-1 space-y-2">
            <p className="text-[.94rem] font-roboto  text-brand-light  font-medium  text-left  tracking-tight">
              {task.title}
            </p>
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
          </div>

          <div className="pl-2.5 flex flex-col justify-start">
            <div className="flex items-center justify-center flex-1 ">
              <img
                src={
                  task.creator_details?.Avatar
                    ? task.creator_details.Avatar
                    : "https://minibnb.vercel.app/_next/image?url=%2Fimages%2Fplaceholder.jpg&w=32&q=75"
                }
                alt={`${task.title}-prime-task-image-${idx}`}
                className="align-end w-[50px] h-[50px] object-cover object-fit rounded-full mt-4"
              />
            </div>
          </div>
        </div>
        <div className=" border-t border-green-100  mt-2 flex justify-between items-center px-7 py-2.5">
          <ul className="flex items-center text-[.9rem] font-medium text-gray-500 space-x-2  ">
            <li className="flex items-center ">
              <p className="text-[.85rem] font-bold  text-brand-accent uppercase">
                {task.status}
              </p>
            </li>
            {task?.offerCount > 0 ? (
              <>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[.9rem] font-semibold text-gray-500 ">
                  {task?.offerCount || 0} offers
                </li>
              </>
            ) : null}
          </ul>
          <p className="justify-end text-[.95rem] text-brand-light font-semibold text-center inline-flex items-center">
            &#8358;{Number(task.budget)}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default TaskCard;
