import React, { useRef, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../components/Logo";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../utils/Spinner";
import { useCreateTaskMutation } from "../../slices/taskApiSlice";

const PostTaskSuccess = () => {
  const { state } = useLocation();
  const [taskSubmitted, setTaskSubmitted] = useState(false);
  const isSubmitted = useRef(false);

  console.log(1);

  const navigate = useNavigate();
  // console.log(state);

  const [taskError, setTaskError] = useState(false);
  const [forbidden, setForbidden] = useState(false);
  const [stopLoading, setStopLoading] = useState(false);

  const { id: userId, avatar: Avatar } = useAuth();

  const [createTask, isLoading, isSuccess, isError, error] =
    useCreateTaskMutation();

  useEffect(() => {
    if (
      isSubmitted.current === false ||
      process.env.NODE_ENV !== "development"
    ) {
      // React 18 Strict Mode
      submitForm();
    }
    return () => {
      isSubmitted.current = true;
      // clearTimeout(timeoutId);
    };

    // eslint-disable-next-line
  }, []);

  const submitForm = async () => {
    // if(!state?.data && )
    const createdTask = await createTask({
      ...state.data,
      creator: userId,
      Avatar: Avatar,
    }).unwrap();

    console.log(createdTask);
    let timeoutId;

    if (createdTask.status === 201) {
      setStopLoading(true);
      setTaskError(false);

      localStorage.removeItem("draftTask");

      timeoutId = setTimeout(() => {
        navigate("/dashboard/explore");
      }, 2000);
    }
  };

  // setTaskSubmitted(true);

  return (
    <section className="flex flex-col items-center justify-center  bg-white mt-[4rem]">
      {!stopLoading ? (
        <article className="space-y-8 mx-auto text-center">
          <div className="flex justify-center">
            <Spinner
              height={60}
              width={50}
              visible={true}
              color="green"
              position="justify-center"
            />
          </div>
          <div className="mt-4 ">
            <p className="font-semibold text-[25px]">Please wait ....</p>
          </div>
        </article>
      ) : null}

      {stopLoading && !forbidden && !taskError ? (
        <article className=" border border-gray-200 shadow rounded-2xl  px-20 h-full grid place-content-center bg-gradient-to-tr ">
          <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto bg-brand-light text-white mt-16  ">
            <p>
              <IoMdCheckmarkCircleOutline className="text-[60px]" />
            </p>
          </div>
          <div>
            <p className="text-[18px] font-bold text-center text-gray-600 mt-[2rem]">
              Sit back &amp; relax.
            </p>
            <h1 className="font-extrabold text-[1rem] text-gray-600 py-3 mt-6">
              Your task has been posted successfully.
            </h1>
          </div>
          <div className="my-12 space-y-5 w-full relative ">
            <p className="flex w-full  justify-center">
              <Spinner
                height={40}
                width={40}
                visible={true}
                color="green"
                // position="w-full flex justify-center"
              />
            </p>

            <h2 className="font-bold text-gray-600 text-center ">
              Redirecting to dashboard
            </h2>
          </div>
        </article>
      ) : taskError && stopLoading ? (
        <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto bg-purple-600 text-white mt-16 mb-10">
          <p>Error : {error}</p>
        </div>
      ) : forbidden ? (
        <div className="rounded-full  flex items-center justify-center mx-auto  text-gray-600 mt-16 mb-10">
          <p className="text-[1.2rem] font-semibold">
            Oops ! Something went wrong.{" "}
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default PostTaskSuccess;
