import { Formik, Form, validateYupSchema } from "formik";
import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  AiFillCheckCircle,
  AiFillPlusCircle,
  AiOutlineEnvironment,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsCalendar2Check, BsReceipt, BsTelephone } from "react-icons/bs";
import { FaCheckCircle, FaFingerprint } from "react-icons/fa";
import {
  HiChevronRight,
  HiOutlineIdentification,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import SmoothCollapse from "react-smooth-collapse";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { hideModal, showModal } from "../../modal/modalSlice";
import ModalHead from "../../../components/ModalHead";
import ImageUpload from "../../../components/ImageUpload";
import CustomTextarea from "../../../utils/CustomFieldComp/CustomTextarea";
import { imageFileFormats } from "../../../utils/FileFormats";
import ScrollContainer from "../../../utils/ScrollContainer";
import { HiChevronDown } from "react-icons/hi2";

import useAuthRedirect from "../../../utils/functions/redirect";
import TaskHeaderSummary from "./TaskHeaderSummary";
import Ratings from "../../../utils/CustomFieldComp/Rating";
import Button from "../../../ui/Button";

const TaskVerify = ({ task }) => {
  const [role, setRole] = useState();
  const { id: userId } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  const [decision, setDecision] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verified, userLoggedIn: isLoggedIn } = useAuth();

  const redirect = useAuthRedirect();

  const dropzoneRef = useRef(null);

  const openDropzone = () => {
    dropzoneRef.current.click();
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownOpen = (dropdownIndex) => {
    setOpenDropdown((prevState) =>
      prevState === dropdownIndex ? null : dropdownIndex
    );
  };

  const handleNext = (step) => {
    setCurrentPage(Number(step));
  };

  const setOption = (option) => {
    setDecision(option);

    handleNext(2);
  };

  const handleComplete = (location) => {
    location === "dashboard" ? navigate("/dashboard") : navigate("/tasks");

    dispatch(hideModal());
  };

  const handleMessageRedirect = () => {
    redirect("/dashboard/messages", null, true);
  };

  const handleUpdateOffer = async ({ values }) => {
    const updateDetails = {
      price: values.price,
      assigneedId: userId,
      taskId: task._id,
    };

    try {
      const response = await updateOffer(updateDetails).unwrap();

      if (response.status !== 200) throw new Error(response.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApproveOffer = async (taskId) => {
    try {
      const response = await updateOffer({
        hostId: userId,
        taskId: taskId,
      }).unwrap();

      if (response.status !== 200) throw new Error(response.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelTask = async (taskId) => {
    let cancellationDetails;

    if (userId && userId === task?.creator?._id) {
      cancellationDetails = {
        who: "Host",
        HostId: userId,
        assigned: task.status === "Assigned",
      };
    } else if (userId && userId === task?.assigned?.assigneeId) {
      cancellationDetails = {
        who: "tasker",
        taskerId: userId,
      };
    } else {
      cancellationDetails = undefined;
    }

    try {
      if (cancellationDetails) {
      } else {
        throw new Error("Failed to cancel task");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (task.creator._id === userId) {
      setRole("Host");
    } else {
      setRole("Assignee");
    }
  }, [task, userId]);

  let content;
  console.log(task);

  if (role === "Host") {
    content = (
      <>
        {task.status === "Assigned" && currentPage === 1 && (
          <div className=" h-screen  flex flex-col justify-between  ">
            <div>
              <ModalHead title="Track your task" />

              <div className="  min-h-[400px] overflow-auto">
                <TaskHeaderSummary
                  name={`${task?.assigned?.assigneeFirstname} ${task?.assigned?.assigneeLastname}`}
                  image={`${task?.assigned?.assigneeAvatar}`}
                  isHost={role === "Host"}
                  trackingCode={task?.assigned?.trackingCode}
                />
                <div className="flex flex-col overflow-auto  justify-between  ">
                  <article className="px-4 overflow-y-auto">
                    <div className="bg-brand-secondary p-4 text-center text-primary rounded-md">
                      <h className="primary font-semibold text-brand-accent">
                        Your Proposed Budget
                      </h>
                      <p className="text-[1.2rem]">
                        &#8358;{task.budget?.initialBudget}
                      </p>
                    </div>
                    <div className="bg-brand-secondary py-4  text-justify  text-primary mt-4 rounded-md px-4">
                      <div className="text-center">
                        <h2 className="primary font-semibold text-brand-accent">
                          {`${task?.assigned?.assigneeFirstname}  initial Offer`}
                        </h2>
                        <p className="text-[1.2rem] ">
                          &#8358;{task?.budget?.assignedBudget || "-"}
                        </p>
                      </div>

                      <p className="pt-3">
                        {`  Please ensure to communicate with ${task?.assigned?.assigneeFirstname} to discuss finer
                        details about your task and negotiate a suitable final
                        price.`}
                      </p>

                      <p className="pt-4 ">
                        {`  If you have agreed on a price different from this
                        initial offer, Kindly ask ${task?.assigned?.assigneeFirstname} to update the offer to
                        match the negotiated price . The new price will be shown
                        here `}
                      </p>
                      <div className="text-center pt-3">
                        <h2 className="primary font-semibold text-brand-accent  ">
                          {`${task?.assigned?.assigneeFirstname} final Offer`}
                        </h2>
                        <p className="text-primary text-[1.2rem] "> - </p>
                      </div>

                      <Button
                        text={` Approve Offer`}
                        onClick={() => handleNext(2)}
                        disabled={!task?.budget?.finalBudget}
                        primary
                        rounded={false}
                        fullWidth
                        style="w-full  py-2.5 mt-3 text-white disabled:bg-brand-light/40 cursor-pointer "
                      />

                      <p className="py-3">
                        Once you approve this final offer. your task will be set
                        to commence
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className=" px-4 w-full bg-white  pb-2  rounded-lg flex flex-col gap-3 items-center ">
              <button
                type="button"
                onClick={() => handleNext(3)}
                className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
              >
                Cancel task
              </button>

              <button
                onClick={handleMessageRedirect}
                className="w-full bg-brand-light py-2.5 text-primary  text-white rounded"
              >
                Go to Chat
              </button>
            </div>
          </div>
        )}

        {task.status === "Assigned" && currentPage === 3 && (
          <div className="h-screen">
            <ModalHead title="Cancel Task" />
            <TaskHeaderSummary
              name={`${task?.assigned?.firstname} ${task?.assigned?.lastname}`}
              image={`${task?.assigned?.assigneeAvatar}`}
              isHost={role === "Host"}
              trackingCode={"4562rt5"}
            />
            <div className="px-4 text-primary">
              {/* <h2 className="text-primary text-[1.5rem]">Cancel Task </h2> */}

              <p>Are you sure you want to cancel this task ? </p>

              <p>A cancellation fee of N300 will be deducted if you cancel</p>
            </div>

            <div className=" px-4 w-full bg-white  pb-2  rounded-lg flex flex-col gap-3 items-center mt-6 ">
              {/* <button
                  type="button"
                  onClick={handleFindAnotherTasker}
                  className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
                >
                  No, Find another tasker
                </button> */}
              <button
                type="button"
                disabled
                onClick={handleCancelTask}
                className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/50"
              >
                Yes, Cancel task
              </button>
            </div>
          </div>
        )}

        {task.status === "Assigned" && currentPage === 2 && (
          <div className="h-screen">
            <ModalHead title="Approve Offer" />
            <TaskHeaderSummary
              name={`${task?.assigned?.firstname} ${task?.assigned?.lastname}`}
              image={`${task?.assigned?.Avatar}`}
              isHost={isHost}
              trackingCode={"4562rt5"}
            />
            <div>
              <p>Are you sure you want to approve Kennayas offer of ? </p>
              <p className="p-2"> N100,000</p>
            </div>

            <div className=" px-4 w-full bg-white  pb-2  rounded-lg flex flex-col gap-3 items-center ">
              <button
                type="button"
                onClick={() => handleNext(1)}
                className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
              >
                Go back
              </button>
              <button
                type="button"
                onClick={handleApproveOffer}
                className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/50"
              >
                Yes, Approve
              </button>
            </div>
          </div>
        )}

        {task.step === "offerApproved" && (
          <div className="h-screen">
            {" "}
            <article className="px-4 ">
              <ModalHead title="Tasker Arrival" />
              <article className="bg-brand-secondary rounded my-3 mb-6  ">
                <div className="flex flex-row justify-start items-start gap-x-4 py-3 px-3 rounded">
                  <div className=" relative">
                    <img
                      src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
                    <h2 className="text-[.95rem]"> Kennaya Jonas</h2>
                    <p className=" ">
                      <span className="text-brand-accent text-[.8rem]">
                        Task Assigned
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
                    <span className=" text-[.85rem]">4562rt5</span>
                  </p>
                </div>
              </article>
              <Formik enableReinitialize={true} initialValues={{}}>
                {({ values }) => {
                  return (
                    <Form className="overflow-y-auto">
                      <div className=" space-y-4 ">
                        {/* <article className=" ">
                          <div
                            onClick={() => handleDropdownOpen(1)}
                            className="bg-brand-secondary flex justify-between items-center space-x-3 py-2 px-4 rounded cursor-pointer"
                          >
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold">
                                Location
                              </h2>
                            </div>
                            <button>
                              <HiChevronDown className="text-[20px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 1}
                            heightTransition=".5s ease"
                          >
                            <div className="border-t border-gray-200 px-2 py-5 ">
                              <div className=" pl-1    rounded-lg">
                                <p className="font-medium text-[.85rem] my-2 ">
                                  Help us keep Primetasker safe and fun, and fill
                                  in a few details.
                                </p>
                                <div className="flex flex-col   max-w-lg   px-4 justify-start items-start"></div>
                              </div>
                              <div className=" py-4 w-full  ">
                                <button
                                  type="button"
                                  className=" w-full  py-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light font-semibold text-white  text-[.9rem] "
                                >
                                  Share Location
                                </button>
                              </div>
                              <p className="text-[.75rem]  text-left text-brand-light font-bold">
                                Kindly ask the tasker for this code
                              </p>
                            </div>
                          </SmoothCollapse>
                        </article> */}
                        {/* <article>
                          <div className=" flex justify-between items-center space-x-3 py-2 px-4 rounded bg-brand-secondary">
                            <div className="flex items-center space-x-3   ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold ">
                                OTP
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(8)}>
                              <HiChevronDown className="text-[20px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 8}
                            heightTransition=".5s ease"
                          >
                            <div className="text-primary font-medium px-2 my-3 space-y-2 py-3">
                              <div className="text-primary font-medium px-2 space-y-2 py-3">
                                <p>
                                  We have ascertained your location.You are
                                  approximately 2km from the task location.Here is
                                  your task code.
                                </p>
                                <p className="text-[1.5rem] text-primary text-center bg-brand-secondary py-1 my-3">
                                  321469
                                </p>
                                <p>
                                  Share this code with your host to validate your
                                  arrival
                                </p>
                              </div>

                              <p>If you notice anything suspicious. </p>
                              <button
                                type="button"
                                className=" w-full  py-2 mt-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light  font-semibold text-white  text-[.9rem] "
                              >
                                End task
                              </button>
                            </div>
                          </SmoothCollapse>
                        </article> */}

                        {task.ta}
                        <article>
                          <div className=" border-gray-200 px-3 ">
                            <div className="py-5     rounded-lg">
                              {/* <p className="font-medium text-[.85rem] my-2 ">
                                  Please confirm that your tasker has arrived.
                                </p> */}
                              <p className="text-primary">
                                Kennaya will avail you a task commencement code
                                to confirm their arrival
                              </p>
                              <div className="flex flex-col   max-w-lg    justify-start items-start">
                                <CustomText
                                  label={``}
                                  labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                                  type="text"
                                  name="values.phone.number"
                                  // value={values.phone.number}
                                  inputstyle="py-2.5 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-slate-200 indent-1 w-full rounded auto my-3"
                                  adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                                />
                                {/* <p className="text-[.75rem]  text-left text-brand-light font-bold">
                                    Kindly ask the tasker for this code
                                  </p> */}
                              </div>
                            </div>
                            <div className="flex justify-end pb-4 ">
                              <button
                                type="button"
                                className=" mr-3  py-2  px-6 rounded bg-brand-secondary font-semibold  text-primary"
                              >
                                Verify
                              </button>
                            </div>
                          </div>
                          {/* </SmoothCollapse> */}
                        </article>

                        {/* <article>
                          <div className="flex justify-between items-center space-x-3  py-3 px-4 rounded bg-brand-secondary">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 font-semibold">
                                Review
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(6)}>
                              <HiChevronRight
                                className={`${
                                  openDropdown === 6 ? "rotate-90  " : "rotate-0"
                                } transition duration-300 ease text-[20px] text-brand-light`}
                              />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 6}
                            heightTransition=".5s ease"
                          >
                            <div className="py-5 pl-1">
                              <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                                <button
                                  type="button"
                                  className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
  justify-center"
                                >
                                  <span>
                                    <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              {/* <div className="  text-center py-2 bg-brand-secondary ">
                      <p className="text-primary">Deadline </p>
                      <p className="text-[1.1rem] font-bold text-brand-text">
                        Fri, 18 May 2023
                      </p>
                      <p className="text-primary"> 12h : 16m : 01s </p>
                    </div> */}
              {/* <div>

  </div> */}
              <div className=" flex flex-col md:flex-row gap-4 ">
                {/* <button
                  type="button"
                  // onClick={handleMessageRedirect}
                  className="bg-brand-secondary text-primary  w-full py-3 border  rounded"
                >
                  Appeal
                </button> */}
                <button
                  // disabled
                  onClick={() => handleNext(5)}
                  className="bg-brand-secondary/90 hover:bg-brand-secondary text-primary  w-full py-2.5 rounded disabled:bg-secondary disabled:hover:bg-secondary disabled :text-brand-text/50    "
                >
                  {/* Mark as completed */}
                  Start task
                </button>
              </div>
            </article>
          </div>
        )}

        {task.status === "Processing" && (
          <div className="h-screen">
            <ModalHead title="Task Progress" />
            <TaskHeaderSummary
              name={`${task?.assigned?.firstname} ${task?.assigned?.lastname}`}
              image={`${task?.assigned?.Avatar}`}
              isHost={role === "Host"}
              trackingCode={"4562rt5"}
            />
            <div className="px-4">
              <div className="bg-brand-secondary p-4 text-center text-primary rounded-md ">
                <h className="primary font-semibold text-brand-accent">
                  Approved Budget
                </h>
                <p className="text-[1.2rem]">{task.budget?.finalBudget}</p>
              </div>
              <div className="  text-center py-2 bg-brand-secondary ">
                <p className="text-primary">Deadline </p>
                <p className="text-[1.1rem] font-bold text-brand-text">
                  Fri, 18 May 2023
                </p>
                <p className="text-primary"> 12h : 16m : 01s </p>
              </div>

              <div className="mt-4 flex flex-col md:flex-row gap-4 ">
                <button
                  type="button"
                  onClick={handleHostAppeal}
                  className="bg-brand-secondary text-primary  w-full py-2.5 border  rounded"
                >
                  Appeal
                </button>
                <button
                  onClick={() => handleNext(8)}
                  className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded "
                >
                  Mark as completed
                </button>
              </div>
            </div>
          </div>
        )}

        {task.hostMarkedAppeal && (
          <div className="  h-full flex-flex-col  ">
            <ModalHead title="Make an appeal " />

            <div className=" flex-1 ">
              <Formik
                initialValues={{ title: "", description: "", files: [] }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ values }) => {
                  return (
                    <Form className="h-full flex flex-col justify-between relative   ">
                      <ScrollContainer style={`max-h-[calc(90vh_-_100px)]`}>
                        <div class="verification-message font-medium text-[.85rem] ">
                          <p className="border-l-4 pl-2 border-brand-accent my-4 mx-4 md:mx-8">
                            Please ensure that you have informed your tasker or
                            have exhausted all avenues to settle amicably
                          </p>
                        </div>

                        <div className="px-4 md:px-8 pb-60">
                          <CustomText
                            label={`Title of Appeal`}
                            labelstyle="text-primary text-[.9rem] font-semibold"
                            type="text"
                            name="title"
                            value={values.title}
                            inputstyle="py-3 md:py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
                            adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                          />

                          <CustomTextarea
                            name="description"
                            label={`Please describe the nature of your appeal`}
                            labelstyle="text-primary text-[.9rem] font-semibold "
                            value={values.description}
                            placeholder={``}
                            inputStyle={`my-4 py-6 p-2 w-full bg-slate-100 h-48 resize-none  placeholder:text-[.85rem] placeholder:text-brand-text text-brand-text-deep `}
                          />
                          <div className="space-y-3">
                            <h3>Add Images (optional) </h3>
                            <button
                              type="button"
                              className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
  justify-center"
                            >
                              <span>
                                <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </ScrollContainer>

                      <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky bottom left-0 bottom-0  ">
                        <button
                          onClick={() => handleNext(5)}
                          // disabled
                          className="bg-brand-secondary/80 hover:bg-brand-secondary hover:disabled:bg-brand-light/60 text-primary text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleNext(7)}
                          // disabled
                          className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Submit Appeal
                        </button>

                        {/* <div class="spinner"></div> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        )}

        {task.status === "Appeal" && (
          <div className="  ">
            <ModalHead title="" />
            <div className="mx-auto flex justify-center py-6">
              <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
            </div>
            <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
              Appeal created
            </h3>

            <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] ">
              <div className="flex flex-col  justify-between flex-1">
                <div className="px-6 text-primary pt-3 space-y-3">
                  <p>Dear Primetasker, </p>
                  <p>
                    Your appeal has been taken and we will get in touch with you
                    soon.
                  </p>
                  <p>
                    Please note , that appeals may take anytime between 1-3 days
                    to resolve
                  </p>
                  <p>
                    However , we have opened a conversation between you, your
                    host and us.
                  </p>
                </div>

                <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky left-0 bottom-0  ">
                  <button
                    onClick={handleMessageRedirect}
                    className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                  >
                    Go to conversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* {currentPage === 8 && (
            <>
              <div>
                <h3 className="text-[1.4rem]  font-bold text-brand-light py-1 text-center">
                  Request Success
                </h3>
              </div>
              <div className=" flex flex-col justify-between flex-1">
                <ScrollContainer style={`min-h-[calc(78vh_-_100px)]`}>
                  <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] px-6">
                    <p>Your payment request has been sent.</p>
                    <p>
                      Approved funds will be deposited to your account once your
                      host approves your payment.
                    </p>
                    <div></div>
                    <div className="">
                      <h2 className="text-primary text-[.85rem] text-brand-accent pt-4">
                        What would you like to do next ?
                      </h2>
                    </div>
                  </div>
                </ScrollContainer>

                <div className=" px-6 md:px-12 w-full bg-white h-full  pb-6 pt-3 rounded-lg flex flex-col md:flex-row gap-3 items-center py-1 ">
                  <button
                    onClick={() => {
                      dispatch(hideModal());
                    }}
                    className="bg-brand-light/90 hover:bg-brand-light text-primary text-center text-white w-full py-2.5 rounded "
                  >
                    Close
                  </button>

                </div>
              </div>
            </>
          )} */}

        {task.hostMarkedComplete && task.status === "Processing" && (
          <div className=" h-screen flex flex-col">
            <ModalHead title="Request Payment" />
            <div class="verification-message flex-1 flex flex-col font-medium space-y-4 text-[.9rem] ">
              <Formik initialValues={{ payOTP: "" }} onSubmit={(values) => {}}>
                {({ values }) => {
                  return (
                    <Form className="flex flex-col flex-1 justify-between">
                      <ScrollContainer style={`px-4   `}>
                        <div className="mx-auto flex flex-col items-center justify-center py-6">
                          <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
                          <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
                            Security Verification
                          </h3>
                        </div>
                        <p>
                          Please enter the one time password (OTP) sent to you
                          to authenticate your payment release request
                        </p>

                        <CustomText
                          label={`Payment release OTP`}
                          labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem] sr-only"
                          type="text"
                          name="payOTP"
                          value={values.payOTP}
                          inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
                          adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                        />
                        <div className="flex justify-end">
                          <button className="text-brand-accent flex justify-end text-[.8rem]">
                            Send code
                          </button>
                        </div>
                      </ScrollContainer>

                      <div className=" px-4 w-full bg-white   pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 z-10  ">
                        {/* <button
                            onClick={() => handleNext(1)}
                            // disabled
                            className="bg-brand-secondary/90 text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
                          >
                            Go Back
                          </button> */}
                        <button
                          onClick={handleHostReleasePayment}
                          // disabled
                          className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Release Payment
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        )}

        {task.hostReleasedPayment && task.status === "Completed" && (
          <div className="h-screen">
            {" "}
            <article className=" ">
              <ModalHead title="Review" />
              <div className="text-[1.2rem] font-bold text-center mt-6">
                <h2>Rate Your tasker </h2>
              </div>

              <Formik
                enableReinitialize={true}
                initialValues={{ ratingScore: 5, ratingText: "" }}
              >
                {({ values }) => {
                  return (
                    <Form className="overflow-y-auto">
                      <div className=" space-y-4 w-full  mt-6">
                        <Ratings name="ratingScore" />

                        <div className="mx-6">
                          <CustomTextarea
                            name="ratingText"
                            // label="Please add a comment"
                            labelStyle={` `}
                            value={values.ratingText}
                            placeholder={`Please leave a review for your tasker`}
                            inputStyle={`my-4  py-6  w-full bg-slate-100 h-32 resize-none  placeholder:text-[.85rem] placeholder:text-brand-text text-brand-text-deep `}
                          />
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>

              <div className=" flex flex-col md:flex-row gap-4 mx-6 ">
                <button
                  // disabled
                  onClick={() => handleNext(5)}
                  className="bg-brand-light/90 hover:bg-brand-light text-primary text-white  w-full py-2.5 rounded disabled:bg-secondary disabled:hover:bg-secondary disabled :text-brand-text/50    "
                >
                  {/* Mark as completed */}
                  Finish
                </button>
              </div>
            </article>
          </div>
        )}
      </>
    );
    return content;
  }

  if (role === "Assignee") {
    content = (
      <>
        {task.status === "Assigned" && currentPage === 1 && (
          <div className="   flex flex-col  ">
            <div className="flex-shrink-0">
              <ModalHead title="Track your task" />
            </div>

            <div className="overflow-y-auto overflow-x-hidden flex-1 max-h-[450px] min-h-[200px] ">
              <div className="">
                <TaskHeaderSummary
                  name={`${task?.creator?.firstname} ${task?.creator?.lastname}`}
                  image={`${task?.creator?.Avatar}`}
                  isHost={role === "Host"}
                  trackingCode={task?.assigned?.trackingCode}
                />
                <div className="flex flex-col overflow-auto  justify-between  ">
                  <article className="px-4 overflow-y-auto">
                    <div className="bg-brand-secondary p-4 text-center text-primary rounded-md">
                      <h className="primary font-semibold text-brand-accent">
                        Host Proposed Budget
                      </h>
                      <p className="text-[1.2rem]">
                        &#8358; {task.budget?.initialBudget}
                      </p>
                    </div>
                    <div className="bg-brand-secondary py-4  text-justify  text-primary mt-4 rounded-md px-4">
                      <div className="text-center">
                        <h2 className="primary font-semibold text-brand-accent">
                          {`Your initial Offer`}
                        </h2>
                        <p className="text-[1.2rem] tracking-wider ">
                          &#8358;{task?.budget?.assignedBudget}
                        </p>
                      </div>

                      <p className="pt-3">
                        {`  Please ensure to communicate with ${task?.creator?.firstname} to discuss finer
                      details about your task and negotiate a suitable final
                      price.`}
                      </p>

                      <p className="pt-4">
                        {`  If you have agreed on a price different from this
                      initial offer, You can update the offer to to match the negotiated price below `}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="min-h-[60px] flex-shrink-0 px-4 w-full bg-white  py-6  rounded-lg flex flex-col gap-3 items-center ">
              <button
                type="button"
                onClick={() => setOption(1)}
                className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
              >
                Keep Original Offer
              </button>

              <button
                onClick={() => setOption(2)}
                className="w-full bg-brand-light py-2.5 text-primary  text-white rounded"
              >
                Update Offer
              </button>
            </div>
          </div>
        )}

        {task.status === "Assigned" && currentPage === 2 && (
          <div className="h-screen">
            <ModalHead title={decision === 1 ? "Keep Offer" : "Update Offer"} />
            <TaskHeaderSummary
              name={`${task?.creator?.firstname} ${task?.creator?.lastname}`}
              image={`${task?.creator?.Avatar}`}
              isHost={role === "Host"}
              trackingCode={task?.assigned?.trackingCode}
            />
            <Formik initialValues={{ finalBudget: "" }}>
              {({ values }) => (
                <Form className="px-4 text-primary ">
                  {decision === 1 ? (
                    <div className="text-primary ">
                      <p className=" text-[.9rem] ">
                        Are you sure you want to keep your original offer of{" "}
                      </p>
                      <p className="p-2 bg-brand-secondary text-center my-4 font-semibold text-[1.1rem]">
                        {" "}
                        &#8358; {task?.budget?.assignedBudget}
                      </p>
                      <div className="space-y-3">
                        <p>
                          Please note that , you wont be able to update this
                          price anymore
                        </p>

                        <p>
                          Ensure to communicate with your host to discuss finer
                          details about your task before locking in this final
                          price.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3">
                        <p>
                          Ensure to communicate with your host to discuss finer
                          details about your task before locking in this final
                          price.
                        </p>
                        <CustomText
                          label={`Your final Offer`}
                          labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                          type="text"
                          name="finalBudget"
                          // value={values.phone.number}
                          inputstyle="py-2.5 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-slate-200 indent-1 w-full rounded auto my-3"
                          adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                        />
                        <p>
                          Please note that , you wont be able to update this
                          price anymore
                        </p>
                      </div>
                    </>
                  )}

                  <div className=" px-4 w-full bg-white  pb-2  rounded-lg flex flex-col gap-3 items-center ">
                    <button
                      type="button"
                      onClick={() => handleNext(1)}
                      className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
                    >
                      Go back
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNext(3)}
                      className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/50"
                    >
                      {decision === 1
                        ? "Yes, Keep original  offer"
                        : "Yes, Lock price"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}

        {task.step === "offerAwaitingApproval" && (
          <div className="  ">
            <ModalHead title="" />
            <div className="mx-auto flex justify-center py-6">
              <FaCheckCircle className="text-[50px] h-12 text-brand-accent" />
            </div>
            <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
              Offer Sent
            </h3>

            <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] ">
              <div className="flex flex-col  justify-between flex-1">
                <div className="px-6 text-primary pt-3 space-y-3">
                  {/* <p>Dear Primetasker, </p> */}
                  <p>Your final offer has been sent to yor host</p>
                  <p>
                    If approved, you will be able to commence and manage your
                    task
                  </p>
                  <p>Expedite approval by informing your host</p>
                </div>

                <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky left-0 bottom-0  ">
                  <button
                    onClick={handleMessageRedirect}
                    className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                  >
                    Message Host
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {task.step === "offerApproved" && task.type === "Physical" && (
          <>
            <div className="text-primary font-medium px-2  space-y-2 ">
              <ModalHead title="Offer Approved" />
              <div className="text-primary font-medium px-2 space-y-2 py-3">
                <p>Your final offer has ben approved by your host .</p>

                <p>Please proceed to the task location at</p>

                <p>MBF5B Milverton Estate, Lekki Lagos</p>
                {/* <p>
                  We have ascertained your location.You are approximately 2km
                  from the task location.Here is your task code.
                </p> */}
                {/* <p className="text-[1.5rem] text-primary text-center bg-brand-secondary py-1 my-3">
                  321469
                </p>
                <p>Share this code with your host to validate your arrival</p> */}
              </div>

              {/* <p>If you notice anything suspicious. </p> */}
              <button
                type="button"
                onClick={() => handleNext(5)}
                className=" w-full  py-2 mt-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light  font-semibold text-white  text-[.9rem] "
              >
                I`ve arrived
              </button>
            </div>
          </>
        )}

        {task.step === "taskerArrived" && task.taskType === "Physical" && (
          <>
            <div className="text-primary font-medium px-2  space-y-2 ">
              <ModalHead title="Verify Loaction" />
              <div className="text-primary font-medium px-2 space-y-2 py-3">
                {/* <p>Your final offer has ben approved by your host .</p>

                <p>Please proceed to the task location at</p>

                <p>MBF5B Milverton Estate, Lekki Lagos</p> */}
                <p>
                  We have ascertained your location.You are approximately 2km
                  from the task location.Here is your task code.
                </p>
                <p className="text-[1.5rem] text-primary text-center bg-brand-secondary py-1 my-3">
                  321469
                </p>
                <p>Share this code with your host to validate your arrival</p>
              </div>

              {/* <p>If you notice anything suspicious. </p> */}
              <button
                onClick={() => handleNext(6)}
                type="button"
                className=" w-full  py-2 mt-2  px-6 rounded bg-brand-light/90 hover:bg-brand-light  font-semibold text-white  text-[.9rem] "
              >
                Start task
              </button>
            </div>
          </>
        )}

        {task.status === "Processing" && (
          <div className="h-screen">
            <ModalHead title="Task Progress" />
            <TaskHeaderSummary
              name={`${task?.creator?.firstname} ${task?.creator?.lastname}`}
              image={`${task?.creator?.Avatar}`}
              isHost={isHost}
              trackingCode={"4562rt5"}
            />
            <div className="px-4">
              <div className="bg-brand-secondary p-4 text-center text-primary rounded-md ">
                <h className="primary font-semibold text-brand-accent">
                  Approved Budget
                </h>
                <p className="text-[1.2rem]">{task.budget?.finalBudget}</p>
              </div>
              <div className="  text-center py-2 bg-brand-secondary ">
                <p className="text-primary">Deadline </p>
                <p className="text-[1.1rem] font-bold text-brand-text">
                  Fri, 18 May 2023
                </p>
                <p className="text-primary"> 12h : 16m : 01s </p>
              </div>

              <div className="mt-4 flex flex-col md:flex-row gap-4 ">
                <button
                  type="button"
                  onClick={() => handleNext(10)}
                  className="bg-brand-secondary text-primary  w-full py-2.5 border  rounded"
                >
                  Appeal
                </button>
                <button
                  onClick={() => handleNext(8)}
                  className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded "
                >
                  Mark as completed
                </button>
              </div>
            </div>
          </div>
        )}

        {task.taskerMarkedComplete && task.status === "Processing" && (
          <div className=" h-screen flex flex-col">
            <ModalHead title="Request Payment" />
            <div class="verification-message flex-1 flex flex-col font-medium space-y-4 text-[.9rem] ">
              <Formik initialValues={{ payOTP: "" }} onSubmit={(values) => {}}>
                {({ values }) => {
                  return (
                    <Form className="flex flex-col flex-1 justify-between">
                      <ScrollContainer style={`px-4   `}>
                        <div className="mx-auto flex flex-col items-center justify-center py-6">
                          <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
                          <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
                            Security Verification
                          </h3>
                        </div>
                        <p>
                          Please enter the one time password (OTP) sent to you
                          to authenticate your payment release request
                        </p>

                        <CustomText
                          label={`Payment release OTP`}
                          labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem] sr-only"
                          type="text"
                          name="payOTP"
                          value={values.payOTP}
                          inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
                          adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                        />
                        <div className="flex justify-end">
                          <button className="text-brand-accent flex justify-end text-[.8rem]">
                            Send code
                          </button>
                        </div>
                      </ScrollContainer>

                      <div className=" px-4 w-full bg-white   pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 z-10  ">
                        {/* <button
                            onClick={() => handleNext(1)}
                            // disabled
                            className="bg-brand-secondary/90 text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
                          >
                            Go Back
                          </button> */}
                        <button
                          onClick={() => handleNext(9)}
                          // disabled
                          className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Request Payment
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        )}

        {task.taskerMarkedComplete && task.taskerRequestPayment && (
          <>
            <div>
              <h3 className="text-[1.4rem]  font-bold text-brand-light py-1 text-center">
                Request Success
              </h3>
            </div>
            <div className=" flex flex-col justify-between flex-1">
              <ScrollContainer style={`min-h-[calc(78vh_-_100px)]`}>
                <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] px-6">
                  <p>Your payment request has been sent.</p>
                  <p>
                    Approved funds will be deposited to your account once your
                    host approves your payment.
                  </p>
                  <div></div>
                  <div className="">
                    <h2 className="text-primary text-[.85rem] text-brand-accent pt-4">
                      What would you like to do next ?
                    </h2>
                  </div>
                </div>
              </ScrollContainer>

              <div className=" px-6 md:px-12 w-full bg-white h-full  pb-6 pt-3 rounded-lg flex flex-col md:flex-row gap-3 items-center py-1 ">
                <button
                  onClick={() => {
                    dispatch(hideModal());
                  }}
                  className="bg-brand-light/90 hover:bg-brand-light text-primary text-center text-white w-full py-2.5 rounded "
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}

        {task.taskerMarkedAppeal && (
          <div className="  h-full flex-flex-col  ">
            <ModalHead title="Make an appeal " />

            <div className=" flex-1 ">
              <Formik
                initialValues={{ title: "", description: "", files: [] }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ values }) => {
                  return (
                    <Form className="h-full flex flex-col justify-between relative   ">
                      <ScrollContainer style={`max-h-[calc(90vh_-_100px)]`}>
                        <div class="verification-message font-medium text-[.85rem] ">
                          <p className="border-l-4 pl-2 border-brand-accent my-4 mx-4 md:mx-8">
                            Please ensure that you have informed your host and
                            have exhausted all avenues to settle amicably
                          </p>
                        </div>

                        <div className="px-4 md:px-8 pb-60">
                          <CustomText
                            label={`Title of Appeal`}
                            labelstyle="text-primary text-[.9rem] font-semibold"
                            type="text"
                            name="title"
                            value={values.title}
                            inputstyle="py-3 md:py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
                            adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                          />

                          <CustomTextarea
                            name="description"
                            label={`Please describe the nature of your appeal`}
                            labelstyle="text-primary text-[.9rem] font-semibold "
                            value={values.description}
                            placeholder={``}
                            inputStyle={`my-4 py-6 p-2 w-full bg-slate-100 h-48 resize-none  placeholder:text-[.85rem] placeholder:text-brand-text text-brand-text-deep `}
                          />
                          <div className="space-y-3">
                            <h3>Add Images (optional) </h3>
                            <button
                              type="button"
                              className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
  justify-center"
                            >
                              <span>
                                <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </ScrollContainer>

                      <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky bottom left-0 bottom-0  ">
                        <button
                          onClick={() => handleNext(6)}
                          // disabled
                          className="bg-brand-secondary/80 hover:bg-brand-secondary hover:disabled:bg-brand-light/60 text-primary text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleNext(11)}
                          // disabled
                          className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Submit Appeal
                        </button>

                        {/* <div class="spinner"></div> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        )}

        {task.status === "Appeal" && (
          <div className="  ">
            <ModalHead title="" />
            <div className="mx-auto flex justify-center py-6">
              <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
            </div>
            <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
              Appeal created
            </h3>

            <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] ">
              <div className="flex flex-col  justify-between flex-1">
                <div className="px-6 text-primary pt-3 space-y-3">
                  <p>Dear Primetasker, </p>
                  <p>
                    Your appeal has been taken and we will get in touch with you
                    soon.
                  </p>
                  <p>
                    Please note , that appeals may take anytime between 1-3 days
                    to resolve
                  </p>
                  <p>
                    However , we have opened a conversation between you, your
                    host and us.
                  </p>
                </div>

                <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky left-0 bottom-0  ">
                  <button
                    onClick={handleMessageRedirect}
                    className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                  >
                    Go to conversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {task.hostReleasedPayment && task.status === "Completed" && (
          <div className="h-screen">
            {" "}
            <article className=" ">
              <ModalHead title="Review" />
              <div className="text-[1.2rem] font-bold text-center mt-6">
                <h2>Rate Your tasker </h2>
              </div>

              <Formik
                enableReinitialize={true}
                initialValues={{ ratingScore: 5, ratingText: "" }}
              >
                {({ values }) => {
                  return (
                    <Form className="overflow-y-auto">
                      <div className=" space-y-4 w-full  mt-6">
                        <Ratings name="ratingScore" />

                        <div className="mx-6">
                          <CustomTextarea
                            name="ratingText"
                            // label="Please add a comment"
                            labelStyle={` `}
                            value={values.ratingText}
                            placeholder={`Please leave a review for your tasker`}
                            inputStyle={`my-4  py-6  w-full bg-slate-100 h-32 resize-none  placeholder:text-[.85rem] placeholder:text-brand-text text-brand-text-deep `}
                          />
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>

              <div className=" flex flex-col md:flex-row gap-4 mx-6 ">
                <button
                  // disabled
                  onClick={() => handleNext(5)}
                  className="bg-brand-light/90 hover:bg-brand-light text-primary text-white  w-full py-2.5 rounded disabled:bg-secondary disabled:hover:bg-secondary disabled :text-brand-text/50    "
                >
                  {/* Mark as completed */}
                  Finish
                </button>
              </div>
            </article>
          </div>
        )}
      </>
    );
  }

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(success, error);
  // } else {
  //   console.log("Geolocation not supported");
  // }

  // function success(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // }

  // function error() {
  //   console.log("Unable to retrieve your location");
  // }

  return (
    <section className="max-h-screen h-screen sm:max-h-[calc(90vh_-_100px)] ">
      {content}
      <p>Ploallaooaoa</p>
    </section>
  );
};

export default TaskVerify;
