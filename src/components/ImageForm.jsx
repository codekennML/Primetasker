import React, { memo, useEffect, useRef, forwardRef, useState } from "react";
import {
  useCreateCommentMutation,
  useCreateCommentReplyMutation,
} from "../features/comments/slices/commentApiAlice";
import useAuth from "../hooks/useAuth";
import { Formik, Form } from "formik";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import { FaImage } from "react-icons/fa";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { notifyErr, notifySuccess } from "../hooks/NotifyToast";

const emptyForm = {
  body: "",
  files: [],
};

const ImageForm = forwardRef(({ ...props }, ref) => {
  const {
    name,
    parent,
    taskId,
    handleCreate,
    clearValues,
    setClearValues,
    isCommentReply = false,
  } = props;

  const [initialValues, setInitialValues] = useState(emptyForm);
  const { id: userId, userLoggedIn: isLoggedIn } = useAuth();

  const dropzoneRef = useRef(null);

  const openDropzone = () => {
    if (dropzoneRef?.current) dropzoneRef.current.click();
  };

  console.log(4);
  const [
    createComment,
    { isLoading: loading, isError: failed, isSuccess: success },
  ] = useCreateCommentMutation();

  const [createCommentReply, isLoading, isError, isSuccess] =
    useCreateCommentReplyMutation();

  const handleCreateComment = async (commentDetails) => {
    //Ensure there is a user incase someone turns off the disabled attributes of the form maliciously
    try {
      if (userId) {
        commentDetails.createdBy = userId;
        commentDetails.taskId = taskId;
        const createdComment = await createComment(commentDetails);
        setClearValues((prev) => !prev);
        if (createdComment) {
          notifySuccess(`Your comment has been posted`);
        }
      }
    } catch (err) {
      notifyErr(`Failed to post comment - ${err}`);
    }
  };

  const createReply = async (commentDetails) => {
    // if (parent) {
    let newReply;
    try {
      if (userId) {
        newReply = Object.assign(commentDetails, {
          parent: parent,
          createdBy: userId,
          taskId: taskId,
          hasParent: true,
        });
      }

      const createdReply = await createCommentReply(newReply).unwrap();

      if (createdReply) {
        notifySuccess(`Your reply has been posted`);
      }
    } catch (err) {
      notifyErr(`Failed to post reply - ${err}`);
    }
  };

  useEffect(() => {
    if (ref?.current) {
      ref.current.resetForm();
    }
  }, [clearValues]);

  return (
    <div className="mt-2">
      {!isCommentReply ? (
        <div className={`flex  space-x-4 items-center  `}>
          <div>
            <img
              src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/4459042/image-9279721cde59631055f0cdab084e3ab2.jpg?width=136&height=136"
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover object-center mb-1"
            />
          </div>

          <h3 className=" py-2 text-gray-900/80 font-bold mb-2 text-sm">
            Have Questions ? Ask away !
          </h3>
        </div>
      ) : null}
      <div className="flex flex-row ">
        <Formik
          innerRef={ref}
          enableReinitialize
          className="flex-1"
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            handleCreate ? handleCreateComment(values) : createReply(values);
            resetForm();
          }}
        >
          {({ values }) => {
            return (
              <Form
                className={`flex ${
                  !isCommentReply ? "flex-col space-y-3 " : "flex-col-reverse"
                } relative  mx-8 rounded-lg pb-3 mt-4  focus-within:border-violet-300 `}
              >
                <div className="px-3 bg-slate-100  rounded-lg ">
                  <div className="relative ">
                    <CustomTextarea
                      autoFocus
                      value={values?.body}
                      disabled={!isLoggedIn || values?.body?.length >= 1400}
                      maxLength="1400"
                      placeholder={`${
                        isLoggedIn
                          ? `Reply to ${name}`
                          : "Have an offer ? Sign-in to the conversation"
                      }  `}
                      name="body"
                      inputStyle="h-20 text-[12px] oveflow-y-scroll py-5 bg-gray-100 outline-0 border-none outline-0 text-gray-600 resize-none font-medium placeholder:text-[13px] placeholder:text-slate-600"
                    />
                  </div>

                  <div className="flex items-center justify-between py-1 ">
                    <div className="">
                      <button
                        type="button"
                        disabled={!isLoggedIn}
                        onClick={openDropzone}
                        className=" rounded-full  p-1 px-2 flex items-center space-x-2"
                      >
                        <span>
                          <FaImage className="text-purple-600" />
                        </span>
                      </button>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                      <p className=" text-[12px] text-gray-400 font-semibold">
                        {`${1400 - Number(values.body.length)} `}
                      </p>
                      <button
                        disabled={!isLoggedIn || values.body.length < 1}
                        type="submit"
                        className="px-3 py-0.5  text-purple-700 text-[13px]   rounded-full font-bold  disabled:bg-transparent disabled:text-gray-400"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    isCommentReply ? `` : ""
                  } max-w-full  overflow-hidden`}
                >
                  <ImageUpload
                    clearValues={clearValues}
                    ref={dropzoneRef}
                    files={values.files}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
});

const MemoizedImageForm = memo(ImageForm);

export default MemoizedImageForm;
