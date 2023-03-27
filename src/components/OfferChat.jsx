import { Form, Formik } from "formik";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaImage, FaTimes } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import CustomText from "../utils/CustomFieldComp/CustomText";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import MemoizedImageForm from "./ImageForm";
import TextVisibility from "./TextVisibility";
import {
  useGetCommentsfortaskQuery,
  useGetCommentsRepliesQuery,
} from "../features/comments/slices/commentApiAlice";
import Spinner from "../utils/Spinner";

const OfferChat = ({ comment }) => {
  console.log(comment);
  // console.log(comment);

  const { userLoggedIn: isLoggedIn } = useAuth();
  const [resetForm, setResetForm] = useState(false);
  const [pageData, setPageData] = useState({});
  const [commentReplies, setCommentReplies] = useState([]);

  const {
    data: replies,
    isLoading,
    isSuccess,
  } = useGetCommentsRepliesQuery(
    {
      page: 1,
      commentId: comment?._id,
    },
    {
      skip: !comment._id,
    }
  );
  useEffect(() => {
    if (isSuccess) {
      const { ids, entities, pageData: pagination } = replies;
      setPageData(pageData);
      setCommentReplies((prev) => [...prev, ...ids.map((id) => entities[id])]);
    }
  }, [replies]);

  const fileUploadRef = useRef();

  const displayFileUpload = (e) => {
    fileUploadRef.current.click();
  };

  return (
    <div className="bg-white w-[550px] max-h-[calc(100vh_-_100px)] pt-2 pb-4  relative rounded-b-lg">
      <section className=" overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400/30 scrollbar-track-gray-300 overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full  h-[350px] px-6 space-y-4 pb-6">
        <article>
          <div className="   rounded-l-lg flex flex-row space-x-2 ">
            <div>
              <img
                src={comment.createdBy.Avatar}
                alt=""
                className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-start text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[16px]">
                {`${comment.createdBy.firstname} ${comment.createdBy.lastname}`}
              </h3>

              <p className="flex items-center space-x-1 py-1">
                <span className="text-[17px] text-yellow-500">
                  <AiFillStar />
                </span>
                <span className="text-purple-900 text-[13px]">5.0 (95) </span>
              </p>
              <p className="text-gray-600 text-[13px]">57% completion rate</p>
            </div>
          </div>

          <TextVisibility text={comment?.body} />
        </article>

        {isLoading ? (
          <div className="w-full  flex justify-center items-center pt-16">
            <div className="flex flex-col items-center justify-center">
              <Spinner height={40} width={40} color="green" visible />
              <p className="text-[13px] font-semibold mt-6 text-gray-400">
                Loading comments...
              </p>
            </div>
          </div>
        ) : null}

        {commentReplies?.length > 0
          ? commentReplies.map((reply) => {
              return (
                <article className="border-b py-3">
                  <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
                    <div>
                      <img
                        src={reply.createdBy.Avatar}
                        alt={`prime-${reply.createdBy.firstname}-comment-image`}
                        className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-purple-900 text-[14px]">{`${
                        reply.createdBy.firstname
                      } ${reply.createdBy.lastname.charAt(0)}.`}</h3>
                    </div>
                  </div>
                  <TextVisibility text={reply?.body} />
                </article>
              );
            })
          : null}
      </section>

      <MemoizedImageForm
        name={`${
          comment.createdBy.firstname
        } ${comment.createdBy.lastname.charAt(0)}.`}
        parent={comment._id}
        taskId={comment.taskId}
        createdBy={comment._id}
        isCommentReply
        clearValues={resetForm}
        setClearValues={setResetForm}
      />
    </div>
  );
};

export default OfferChat;
