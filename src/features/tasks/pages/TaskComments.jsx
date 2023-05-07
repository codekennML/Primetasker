import { formatDistance } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaImage, FaPaperclip, FaRegFlag } from "react-icons/fa";
import { HiReply } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { showModal } from "../../modal/modalSlice";
import useAuth from "../../../hooks/useAuth";
import TextVisibility from "../../../components/TextVisibility";
import Skeleton from "react-loading-skeleton";

const TaskComments = ({ comment, type = "" }) => {
  const { id: userId, userLoggedIn: isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleReply = (comment) => {
    dispatch(showModal({ currentModal: "OfferChat", modalData: comment }));
  };

  const handleFlag = (values) => {
    !isLoggedIn
      ? null
      : dispatch(
          showModal({
            currentModal: "Flag",
            modalData: { flagId: comment._id, type: "comment" },
          })
        );
  };

  return (
    <div className="relative">
      <div
        className={` pl-3 pt-3 h-full  rounded-t-lg   flex flex-row items-center space-x-2  ${
          type === "comment" ? "bg-gray-50" : "bg-gray-50"
        } }`}
      >
        <div>
          <img
            src={comment?.createdBy?.Avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover object-center mb-1"
          />
        </div>

        <div className="flex flex-col items-start text-[13px] font-medium text-center ">
          <h3 className="text-brand-text-deep font-semibold text-[.85rem]">
            {`${
              comment?.createdBy?.firstname
            } ${comment.createdBy?.lastname.charAt(0)}.`}
          </h3>

          {type === "offer" ? (
            <p className="flex items-center space-x-1 py-1">
              <span className="text-[16px] text-yellow-500">
                <AiFillStar />
              </span>
              <span className="text-gray-800/70 font-semibold text-[.85rem]">
                5.0 (95){" "}
              </span>
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <TextVisibility
          text={comment?.body || comment?.offerMessage}
          files={comment?.files}
        />
        <div className="bg-transparent w-full   z-10 bottom-0  text-[13px]  ">
          <div className="w-full flex items-center  space-x-4 pl-4 justify-between text-[12px] ">
            <p className="text-[11px] text-slate-900/80 font-semibold flex items-center space-x-2">
              <span>
                {" "}
                {`${formatDistance(new Date(comment.createdAt), Date.now(), {
                  addSuffix: true,
                })} 
                  `}
              </span>
            </p>

            <div className="flex flex-row items-center text-[.7rem]">
              {type === "comment" ? (
                <div>
                  {comment?.isParent || !comment?.hasParent ? (
                    <button
                      onClick={() => handleReply(comment)}
                      className="ml-auto  cursor-pointer rotate-[0deg] inline-flex items-center text-brand-text space-x-1 rounded  px-2 py-1"
                    >
                      <span className="text-[11px]">
                        <HiReply />
                      </span>
                      <span className="text-[.66rem] font-medium">
                        {" "}
                        Reply (
                        {comment?.replies.length > 0
                          ? comment.replies.length
                          : null}
                        ){" "}
                      </span>
                    </button>
                  ) : null}
                </div>
              ) : null}

              <button
                disabled={!isLoggedIn}
                onClick={handleFlag}
                className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-brand-text text-[.6rem]"
              >
                <span>
                  <FaRegFlag />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedTaskComments = TaskComments;
export default MemoizedTaskComments;
