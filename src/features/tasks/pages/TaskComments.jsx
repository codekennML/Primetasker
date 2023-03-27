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

const TaskComments = ({ comment }) => {
  const { id: userId, userLoggedIn: isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  console.log(2);
  // const [showLess, setShowLess] = useState(false);
  // const [showButton, setShowButton] = useState(false);

  // const toggleExpansion = () => setIsExpanded((prev) => !prev);
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
      <div className=" pl-3 pt-3 h-full  rounded-l-lg flex flex-row items-center space-x-2">
        <div>
          <img
            src={comment?.createdBy?.Avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover object-center mb-1"
          />
        </div>

        <div className="flex flex-col items-start text-[13px] font-medium text-center ">
          <h3 className="text-gray-500 font-semibold text-[14px]">
            {`${
              comment?.createdBy?.firstname
            } ${comment.createdBy?.lastname.charAt(0)}.`}
          </h3>

          <p className="flex items-center space-x-1 py-1">
            <span className="text-[16px] text-yellow-500">
              <AiFillStar />
            </span>
            <span className="text-gray-800/70 font-semibold text-[15px]">
              5.0 (95){" "}
            </span>
          </p>
        </div>
      </div>

      <TextVisibility text={comment?.body} files={comment?.files} />
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
          <div>
            {comment?.replies.length > 0 ? (
              <button onClick={() => handleReply(comment)}>{`View ${
                comment.replies.length
              } ${comment.replies.length > 1 ? "replies" : "reply"} `}</button>
            ) : null}

            {comment?.isParent || !comment?.hasParent ? (
              <button
                onClick={() => handleReply(comment)}
                className="ml-auto  cursor-pointer rotate-[0deg] inline-flex items-center text-purple-900 space-x-1 rounded  px-2 py-1"
              >
                <span className="text-[12px]">
                  <HiReply />
                </span>
                <span> Reply</span>
              </button>
            ) : null}

            <button
              disabled={!isLoggedIn}
              onClick={handleFlag}
              className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-900/50 "
            >
              <span>
                <FaRegFlag />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedTaskComments = TaskComments;
export default MemoizedTaskComments;
