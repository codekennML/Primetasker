import React, { useRef, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../../components/Logo";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../utils/Spinner";
import { useCreateTaskMutation } from "../../slices/taskApiSlice";

const PostTaskSuccess = () => {
  const { state } = useLocation();
  const [taskSubmitted, setTaskSubmitted] = useState(false);
  const isSubmitted = useRef(false);

  console.log(1);

  // console.log(state);

  const [taskError, setTaskError] = useState(false);
  const [forbidden, setForbidden] = useState(false);
  const [stopLoading, setStopLoading] = useState(false);
  const { id: userId, avatar } = useAuth();

  const [createTask, isLoading, isSuccess, isError, error] =
    useCreateTaskMutation();

  useEffect(() => {
    if (
      isSubmitted.current === true ||
      process.env.NODE_ENV !== "development"
    ) {
      // React 18 Strict Mode
      submitForm();
    }

    return () => (isSubmitted.current = true);

    // eslint-disable-next-line
  }, []);

  const submitForm = async () => {
    // if(!state?.data && )
    const createdTask = await createTask({
      ...state.data,
      creator: userId,
    }).unwrap();
    // const createdTask = await createTask({
    //   title: "Clean  my dress",
    //   taskTime: "Before 9am",
    //   category: "Pedicure & Manicure",
    //   taskType: "Remote",
    //   location: "",
    //   details:
    //     "Help I have invited my 92 year old mother to lunch today so I need assistance for 2-3 hours max up until 11:30 am with Tidying up dusting shelves, washing dishes,  vacuuming floor and mopping. Also some boxes removed and put in storage in my apartment complex. \nType of clean: Regular\nNumber of bedrooms: 1\nNumber of bathrooms: 1\nEquipment and supplies: I can provide",
    //   files: [],
    //   budget: 40000,
    //   forsook: "2023-03-24T23:44:23.798Z",
    //   taskEarliestDone: "2023-03-24T23:07:44.243Z",
    //   taskDeadline: "2023-03-30T23:00:00.000Z",
    //   creator: "63b80704e3e45270b66e4075",
    // });
    console.log(createdTask);

    // setTaskSubmitted(true);
  };

  //     const createdTask = await createTask({
  //       ...state.data,
  //       creator: userId,
  //     }).unwrap();
  //     console.log(createdTask);

  //     setTaskSubmitted(true);
  //   }

  // setTaskSubmitted(true);

  // submitForm();

  return (
    <section className="flex flex-col items-center justify-center h-screen ">
      {!stopLoading ? (
        <article className="space-y-8 mx-auto text-center">
          <div className="flex justify-center">
            <Spinner
              height={60}
              width={50}
              visible={true}
              color="purple"
              position="justify-center"
            />
          </div>
          <div className="mt-4 ">
            <p className="font-semibold text-[25px]">Please wait ....</p>
          </div>
        </article>
      ) : null}

      {!taskError && stopLoading && !forbidden ? (
        <article>
          <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto bg-purple-600 text-white mt-16 mb-10">
            <p>
              <IoMdCheckmarkCircleOutline className="text-[60px]" />
            </p>
          </div>
          <div>
            <p className="text-[18px] font-bold text-center text-purple-800">
              Sit back &amp; relax.
            </p>
            <h1 className="font-extrabold text-[18px] text-gray-900/80 py-3">
              Your task has been posted successfully.
            </h1>
          </div>
          <div className="my-12 space-y-5 w-full ">
            <h2 className="font-bold text-purple-700 text-center">
              See what others are interested in ?{" "}
            </h2>
            <div className=" w-full flex flex-col items-center space-y-4 text-[15px] ">
              <button className=" w-80 px-6 mx-6 py-3 font-medium  border border-gray-400 rounded-lg hover:bg-purple-800 hover:text-white">
                <Link to="/explore">Explore Services</Link>
              </button>
              <button className=" w-80 mx-6 px-6 py-3 font-medium  bg-purple-800 border border-gray-600 rounded-lg space-x-2 text-white hover:bg-purple-800 hover:text-white">
                <Link
                  to="/browse"
                  className="flex items-center justify-center "
                >
                  <span>Browse Tasks</span>
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </Link>
              </button>
              <button className="  w-80 px-6 mx-6 py-3 font-medium  border border-gray-400 rounded-lg hover:bg-purple-800 hover:text-white">
                <Link to="/" className="w-full h-full">
                  Back to Home
                </Link>{" "}
              </button>
            </div>
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
