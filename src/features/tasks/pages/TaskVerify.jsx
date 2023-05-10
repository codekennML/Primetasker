import { Formik, Form, validateYupSchema } from "formik";
import React, { useState, useRef } from "react";
import {
  AiFillCheckCircle,
  AiFillPlusCircle,
  AiOutlineEnvironment,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsCalendar2Check, BsReceipt, BsTelephone } from "react-icons/bs";
import { FaCheckCircle, FaFingerprint } from "react-icons/fa";
import { HiOutlineIdentification, HiOutlineUserCircle } from "react-icons/hi";
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
const TaskVerify = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verified, userLoggedIn: isLoggedIn } = useAuth();

  // console.log(verified);
  // const {
  //   bankVerified,
  //   ageVerified,
  //   idVerified,
  //   addressVerified,
  //   mobileVerified,
  //   avatarAdded,
  // } = verified;

  let avatar = { avatar: [] };
  let phone = {
    phone: {
      number: "",
      verifyCode: "",
    },
  };
  let utility = { utilityBill: [] };

  let bankDetails = {
    bankDetails: {
      accountName: "",
      accountNumber: "",
      bankName: "",
    },
  };
  let birthDate = {
    birthDate: {
      day: "",
      month: "",
      year: "",
    },
  };
  let userIdDoc = { meansOfId: [] };

  var stateObject = {};
  // Object.assign(
  //   {},
  //   !ageVerified && birthDate,
  //   !avatarAdded && avatar,
  //   !bankVerified && bankDetails
  //   !idVerified && userIdDoc,
  //   !mobileVerified && phone,
  //   !addressVerified && utility
  // );

  const [initialValues, setInititalValues] = useState(stateObject);
  const dropzoneRef = useRef(null);

  const openDropzone = () => {
    dropzoneRef.current.click();
  };
  console.log(initialValues);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownOpen = (dropdownIndex) => {
    setOpenDropdown((prevState) =>
      prevState === dropdownIndex ? null : dropdownIndex
    );
  };

  const handleProfileUpdate = (step) => {
    setCurrentPage(Number(step));
    // dispatch(showModal({ currentModal: "offerModal", modalData: null }));
  };

  const handleComplete = (location) => {
    location === "dashboard" ? navigate("/dashboard") : navigate("/tasks");

    dispatch(hideModal());
  };

  const handleConversation = () => {
    dispatch(hideModal());
    isLoggedIn
      ? navigate("/dashboard/messages")
      : navigate("/login", {
          state: {
            redirectUri: "/dashboard/messages",
            data: null,
          },
        });
  };
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
    <section className="h-full ">
      {currentPage === 1 && (
        <div>
          <ModalHead title="Track your task" />
          <article className="px-4 ">
            <div className=" mt-4">
              <p>
                {" "}
                <span className="text-primary text-[.9rem]">
                  Booking code{" "}
                </span>{" "}
                : 4562rt5
              </p>
            </div>

            <Formik enableReinitialize={true} initialValues={initialValues}>
              {({ values }) => {
                return (
                  <Form className="overflow-y-auto">
                    <div className="  ">
                      <article className="mb-4">
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
                              <span className="text-brand-accent">
                                Task Assigned
                              </span>
                            </p>
                            <p className="text-[.8remrem]">{"9:49pm "}</p>
                          </div>
                        </div>
                      </article>

                      <ScrollContainer style="h-[48vh]  md:h-[30vh] lg:h-[30vh] xl:h-[35vh] space-y-6">
                        <article className=" ">
                          <div
                            onClick={() => handleDropdownOpen(1)}
                            className="bg-brand-secondary flex justify-between items-center space-x-3 py-2 px-4 rounded cursor-pointer"
                          >
                            <div className="flex items-center space-x-3  ">
                              {/* <AiOutlineEnvironment /> */}

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
                                  Help us keep Primetasker safe and fun, and
                                  fill in a few details.
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
                        </article>
                        <article>
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
                                  approximately 2km from the task location.Here
                                  is your task code.
                                </p>
                                <p className="text-[1.5rem] text-primary text-center bg-brand-secondary py-1 my-3">
                                  321469
                                </p>
                                <p>
                                  Share this code with your host to validate
                                  your arrival
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
                        </article>

                        <article>
                          <div className="  flex justify-between items-center space-x-3 py-2 px-4 rounded bg-brand-secondary">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold">
                                Identity
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(2)}>
                              <HiChevronDown className="text-[20px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 2}
                            heightTransition=".5s ease"
                          >
                            <div className="00 border-t border-gray-200 px-3 ">
                              <div className="py-5     rounded-lg">
                                {/* <p className="font-medium text-[.85rem] my-2 ">
                                  Help us keep Primetasker safe and fun, and
                                  fill in a few details.
                                </p> */}
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
                                  <p className="text-[.75rem]  text-left text-brand-light font-bold">
                                    Kindly ask the tasker for this code
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-end pb-4 ">
                                <button
                                  type="button"
                                  className=" mr-3  py-2  px-6 rounded bg-brand-light font-semibold text-white  text-[.9rem] "
                                >
                                  Verify
                                </button>
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>

                        <article>
                          <div className="flex justify-between items-center space-x-3  py-3 px-4 rounded bg-brand-secondary">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 font-semibold">
                                Review
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(6)}>
                              <HiChevronDown className="text-[20px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 6}
                            heightTransition=".5s ease"
                          >
                            <div className="py-5 pl-1">
                              <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                                {/* {values.utilityBill.length > 0 ? null : ( */}
                                <button
                                  type="button"
                                  className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
  justify-center"
                                >
                                  <span>
                                    <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                                  </span>
                                </button>
                                {/* )} */}
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      </ScrollContainer>
                      {/* 
                      <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky left-0 bottom-0  ">
                        <button
                          onClick={handleConversation}
                          // disabled
                          className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Go to conversation
                        </button>
                      </div> */}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </article>
          <div className=" px-4 w-full bg-white h-full  pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 border-t mt-4">
            <button
              onClick={() => handleProfileUpdate(4)}
              className="bg-brand-secondary/80 hover:bg-brand-secondary text-primary text-brand-text w-full py-2.5 rounded"
            >
              Appeal
            </button>

            <button
              onClick={() => handleProfileUpdate(2)}
              className="bg-brand-light/90 hover:bg-brand-light text-primary text-white w-full py-2.5 rounded "
            >
              Mark as completed
            </button>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="  ">
          <ModalHead title="Request Payment" />
          <div className="mx-auto flex justify-center py-6">
            <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
          </div>
          <h3 className="text-[1.4rem]  font-semibold text-brand-light py-1 text-center">
            Security Verification
          </h3>
          <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] px-4">
            <p>
              Please enter the one time password (OTP) sent to you to
              authenticate your payment release request
            </p>
            <div>
              <Formik
                initialValues={{ payOTP: "" }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ values }) => {
                  console.log(values);
                  return (
                    <Form>
                      <CustomText
                        label={`Payment release OTP`}
                        labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem] sr-only"
                        type="text"
                        name="payOTP"
                        value={values.payOTP}
                        inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-brand-light text-base text-gray-600 bg-brand-secondary indent-1 w-full rounded auto my-3"
                        adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                      />
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <button className="text-brand-accent flex justify-end text-[.8rem]">
              Resend code
            </button>
          </div>
          <div className=" px-4 w-full bg-white h-full  pb-2 pt-3 rounded-lg flex flex-col gap-3 items-center py-1 border-t mt-4">
            <button
              onClick={() => handleProfileUpdate(3)}
              // disabled
              className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
            >
              Request Payment
            </button>
          </div>
        </div>
      )}
      {currentPage === 3 && (
        <div className=" ">
          <ModalHead title="" />
          <div className="mx-auto flex justify-center py-6 ">
            <FaCheckCircle className="text-[50px] h-12 text-brand-accent" />
          </div>
          <h3 className="text-[1.4rem]  font-bold text-brand-light py-1 text-center">
            Request Success
          </h3>
          <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] px-6">
            <p>Your payment request has been sent.</p>
            <p>
              Approved funds will be deposited to your account once your host
              approves your payment.
            </p>
            <div></div>
            <div className="">
              <h2 className="text-primary text-[.85rem] text-brand-accent pt-4">
                What would you like to do next ?
              </h2>
            </div>
          </div>
          <div className=" px-6 md:px-12 w-full bg-white h-full  pb-6 pt-3 rounded-lg flex flex-col md:flex-row gap-3 items-center py-1 mt-4">
            <button
              onClick={() => handleComplete("")}
              disabled
              className="bg-brand-secondary text-center   text-primary text-brand-text w-full py-2.5 rounded "
            >
              Back to Tasks
            </button>

            <button
              onClick={() => handleComplete("dashboard")}
              className="bg-brand-light/50 hover:bg-brand-light text-primary text-center text-white w-full py-2.5 rounded "
            >
              Go to Dashboard
            </button>

            {/* <div class="spinner"></div> */}
          </div>
        </div>
      )}

      {currentPage === 4 && (
        <div className="  h-full  ">
          <ModalHead title="Make an appeal " />

          <div class="verification-message font-medium text-[.85rem] h-full ">
            <p className="border-l-4 pl-2 border-brand-accent my-4 mx-4 md:mx-8">
              Please ensure that you have informed your host or have exhausted
              all avenues to settle amicably
            </p>

            <div className="h-full max-h-[calc(100vh_-_130px)]">
              <Formik
                initialValues={{ title: "", description: "", files: [] }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ values }) => {
                  // console.log(values);
                  return (
                    <Form className=" flex flex-col  relative   ">
                      <ScrollContainer>
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

                      <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky left-0 bottom-0  ">
                        <button
                          onClick={() => handleProfileUpdate(1)}
                          // disabled
                          className="bg-brand-secondary/80 hover:bg-brand-secondary hover:disabled:bg-brand-light/60 text-primary text-brand-text w-full py-2.5 rounded disabled:bg-brand-light/60"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleProfileUpdate(5)}
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
        </div>
      )}

      {currentPage === 5 && (
        <div className="  ">
          <ModalHead title="" />
          <div className="mx-auto flex justify-center py-6">
            <FaFingerprint className="text-[50px] h-12 text-brand-accent" />
          </div>
          <h3 className="text-[1.2rem]  font-semibold text-brand-light py-1 text-center">
            Appeal created
          </h3>

          <div class="verification-message py-12 font-medium space-y-4 text-[.9rem] ">
            <div className="h-full max-h-[calc(100vh_-_130px)]">
              <ScrollContainer>
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
              </ScrollContainer>
              <div className="px-4 md:px-8 flex flex-col md:flex-row gap-4 w-full mt-auto py-4 bg-white sticky left-0 bottom-0  ">
                <button
                  onClick={handleConversation}
                  // disabled
                  className="bg-brand-light/90 hover:bg-brand-light hover:disabled:bg-brand-light/60 text-primary text-white w-full py-2.5 rounded disabled:bg-brand-light/60"
                >
                  Go to conversation
                </button>

                {/* <div class="spinner"></div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TaskVerify;
