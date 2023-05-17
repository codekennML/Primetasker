import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const TaskHeaderSummary = ({ image, name, isHost, trackingCode }) => {
  console.log(image);
  return (
    <>
      <article className="bg-brand-secondary rounded my-3 mb-6 mx-5 ">
        <div className="flex flex-row justify-start items-start gap-x-4 py-3 px-3 rounded">
          <div className=" relative">
            <img
              src={`${
                image && image != undefined
                  ? image
                  : "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              }`}
              height={50}
              width={50}
              className="rounded-full object-cover object-center h-[60px] w-[60px]"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-brand-accent rounded-full"
            >
              <AiFillCheckCircle className="text-[20px] text-white" />
            </button>
          </div>

          <div className="text-primary text-[.9rem]  ">
            <h2 className="text-[.95rem]">{name}</h2>
            <p className=" ">
              <span className="text-brand-accent text-[.8rem]">
                {isHost ? " Task Assigned" : "Host"}
              </span>
            </p>
            <p className="text-[.8rem]">Gwagwalada</p>
          </div>
        </div>
        <div className="px-4  border-b py-1 flex justify-between bg-brand-accent/80 text-white rounded-b">
          <p>
            {" "}
            <span className=" text-[.85rem]">Tracking code</span>{" "}
          </p>
          <p>
            {" "}
            <span className=" text-[.85rem] uppercase font-semibold">
              {trackingCode}
            </span>
          </p>
        </div>
      </article>
    </>
  );
};

export default TaskHeaderSummary;

// {() =>
//     taskUser(
//       `${task?.assigned?.firstname} ${task?.assigned?.lastname}`,
//       `${task?.assigned?.Avatar}`,
//       "4562rt5",
//       isHost()
//     )
//   }
