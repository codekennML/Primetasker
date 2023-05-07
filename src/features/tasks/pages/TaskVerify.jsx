import { Formik, Form } from "formik";
import React, { useState, useRef } from "react";
import {
  AiFillPlusCircle,
  AiOutlineCreditCard,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsCalendar2Check, BsReceipt, BsTelephone } from "react-icons/bs";
import { FaFingerprint, FaGift, FaRegUserCircle } from "react-icons/fa";
import { HiOutlineIdentification, HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import SmoothCollapse from "react-smooth-collapse";
import ImageUpload from "../../../components/ImageUpload";
import useAuth from "../../../hooks/useAuth";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { showModal } from "../../modal/modalSlice";

const TaskVerify = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { verified } = useAuth();

  console.log(verified);
  const {
    bankVerified,
    ageVerified,
    idVerified,
    addressVerified,
    mobileVerified,
    avatarAdded,
  } = verified;

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

  var stateObject = Object.assign(
    {},
    !ageVerified && birthDate,
    !avatarAdded && avatar,
    !bankVerified && bankDetails,
    !idVerified && userIdDoc,
    !mobileVerified && phone,
    !addressVerified && utility
  );

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

  const handleProfileUpdate = () => {
    setCurrentPage((prev) => prev + 1);
    // dispatch(showModal({ currentModal: "offerModal", modalData: null }));
  };

  return (
    <section className=" mt-6  max-h-[500px] w-[550px]    ">
      {currentPage === 1 && (
        <div>
          <article className="px-12 overflow-y-scroll max-h-[400px]">
            <div>
              <FaGift className="text-[50px] h-12 text-yellow-500" />
            </div>
            <div className="my-6 ">
              <h3 className="text-[1.5rem] font-heading font-semibold text-brand-light ">
                Before you make an offer
              </h3>
              <p className="font-medium text-[.85rem] my-2">
                Help us keep Primetasker safe and fun, and fill in a few
                details.
              </p>
            </div>

            <Formik enableReinitialize={true} initialValues={initialValues}>
              {({ values }) => {
                console.log(values);
                return (
                  <Form>
                    <div className="my-12 space-y-4">
                      {!avatarAdded ? (
                        <article>
                          <div className="flex justify-between items-center bg-slate-100 py-3 px-4 rounded">
                            <div className="flex flex-row space-x-3">
                              <h2 className="text-gray-800 text-[.95rem] font-semibold">
                                Upload a profile picture
                              </h2>
                            </div>

                            <button
                              onClick={() => handleDropdownOpen(1)}
                              type="button"
                            >
                              <AiFillPlusCircle className="text-[30px] text-brand-light" />
                            </button>
                          </div>

                          <SmoothCollapse
                            expanded={openDropdown === 1}
                            heightTransition=".5s ease"
                          >
                            <div className="py-5 pl-1">
                              <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                                {values.avatar.length > 0 ? null : (
                                  <button
                                    onClick={openDropzone}
                                    type="button"
                                    className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
              justify-center"
                                  >
                                    <span>
                                      <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                                    </span>
                                  </button>
                                )}

                                <ImageUpload
                                  name="avatar"
                                  ref={dropzoneRef}
                                  clearValues={false}
                                  files={values.avatar}
                                  postForm
                                />
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      ) : null}

                      {!mobileVerified ? (
                        <article>
                          <div className="flex justify-between items-center space-x-3 bg-slate-100 py-3 px-4 rounded">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold">
                                Verify your phone number{" "}
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(3)}>
                              <AiFillPlusCircle className="text-[30px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 3}
                            heightTransition=".5s ease"
                          >
                            <div className="bg-slate-100 border-t border-gray-200  ">
                              <div className="py-5 pl-1    rounded-lg">
                                <p className="text-[.75rem] font-medium px-4 py-3">
                                  Verifying your mobile number helps us know
                                  you're a genuine human! We won't show it to
                                  anyone or sell it on to any 3rd party, it's
                                  just for us to send you some good stuff.
                                </p>
                                <div className="flex flex-col   max-w-lg   px-4 justify-start items-start">
                                  <CustomText
                                    label={`Phone Number`}
                                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                                    type="text"
                                    name="values.phone.number"
                                    value={values.phone.number}
                                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-green-400 text-base text-gray-600 bg-slate-200 indent-1 w-full rounded auto my-3"
                                    placeholder="0812345678"
                                    adornment="absolute top-6 left-2 text-[15px] font-bold text-gray-600 "
                                  />
                                  <p className="text-[.75rem]  text-left text-brand-light font-bold">
                                    We will send you a verification code
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-end pb-4 ">
                                <button
                                  type="button"
                                  className=" mr-3  py-3  px-6 rounded-full bg-brand-light font-semibold text-white  text-[.9rem] "
                                >
                                  Send Code
                                </button>
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      ) : null}

                      {!idVerified ? (
                        <article>
                          <div className="flex justify-between items-center bg-slate-100 py-3 px-4 rounded">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold">
                                Upload ID
                                <span className="text-yellow-600 text-[.75rem] pl-1">
                                  (NIN, Int'l Passport)
                                </span>
                              </h2>
                            </div>
                            <button
                              onClick={() => handleDropdownOpen(2)}
                              type="button"
                            >
                              <AiFillPlusCircle className="text-[30px] text-brand-light" />
                            </button>
                          </div>

                          <SmoothCollapse
                            expanded={openDropdown === 2}
                            heightTransition=".5s ease"
                          >
                            <div className="py-5 pl-1">
                              <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                                {values.meansOfId.length > 0 ? null : (
                                  <button
                                    onClick={openDropzone}
                                    type="button"
                                    className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
justify-center"
                                  >
                                    <span>
                                      <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                                    </span>
                                  </button>
                                )}

                                <ImageUpload
                                  name="meansOfId"
                                  ref={dropzoneRef}
                                  clearValues={false}
                                  files={values.meansOfId}
                                  postForm
                                />
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      ) : null}

                      {!ageVerified ? (
                        <article>
                          <div className="flex  justify-between items-center space-x-3 bg-slate-100 py-3 px-4 rounded">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold">
                                Date of Birth
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(4)}>
                              <AiFillPlusCircle className="text-[30px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 4}
                            heightTransition=".5s ease"
                          >
                            <div className="bg-slate-100 border border-gray-200 ">
                              <div className="py-5 pl-1    rounded-lg">
                                <div className="flex flex-row   max-w-lg  space-x-3 px-8 justify-start items-center">
                                  <CustomText
                                    type="text"
                                    name="birthdate.day"
                                    value={values.birthDate.day}
                                    inputstyle="w-full py-2 px-2 rounded-lg text-center focus:outline-none"
                                    placeholder="DD"
                                  />
                                  <CustomText
                                    name="birthdate.month"
                                    value={values.birthDate.month}
                                    inputstyle="w-full py-2 px-2 rounded-lg text-center focus:outline-none "
                                    placeholder="MM"
                                  />
                                  <CustomText
                                    name="birthdate.year"
                                    value={values.birthDate.year}
                                    inputstyle="w-full py-2 px-2 rounded-lg text-center focus:outline-none"
                                    placeholder="YYYY"
                                  />
                                </div>
                              </div>
                              <div className="flex justify-end mb-3 ">
                                <button className=" mr-3  py-3  px-6 rounded-full bg-brand-light font-semibold text-white  text-[.9rem] ">
                                  Save Birthday
                                </button>
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      ) : null}

                      {!bankVerified ? (
                        <article>
                          <div className="flex justify-between items-center space-x-3 bg-slate-100 py-3 px-4 rounded">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 text-[.95rem] font-semibold">
                                Payment Details
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(5)}>
                              <AiFillPlusCircle className="text-[30px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 5}
                            heightTransition=".5s ease"
                          >
                            <div className="bg-slate-100 border-t border-gray-200  ">
                              <div className="py-5 pl-1    rounded-lg">
                                <div className="flex flex-col   max-w-lg   px-8 justify-start items-center">
                                  <CustomText
                                    label={`Bank Name`}
                                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                                    name="bankDetails.bankName"
                                    value={values.bankDetails.bankName}
                                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-green-400 text-base text-gray-600 bg-slate-200 indent-6 w-full rounded auto my-3"
                                    placeholder="Ciroma Chukwuma"
                                  />
                                  <CustomText
                                    label={`Account Name`}
                                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                                    name="bankDetails.accountName"
                                    value={values.bankDetails.accountName}
                                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-green-400 text-base text-gray-600 bg-slate-200 indent-6 w-full rounded auto my-3"
                                    placeholder="Ciroma Chukwuma"
                                  />
                                  <CustomText
                                    label={`Account Number`}
                                    labelstyle="my-1 py-3 text-gray-600 font-bold text-[.85rem]"
                                    name="bankDetails.accountNumber"
                                    value={values.bankDetails.accountNumber}
                                    inputstyle="py-4 border-0 font-medium  rounded-lg placeholder:text-[15px] placeholder:text-gray-500 focus:outline-green-400 text-base text-gray-600 bg-slate-200 indent-6 w-full rounded auto my-3"
                                    placeholder="Ciroma Chukwuma"
                                  />
                                  <div className="pt-3 self-end  pb-6 ">
                                    <button className=" mr-3  py-3  px-6 rounded-full bg-brand-light font-semibold text-white  text-[.9rem] ">
                                      Save payment Info
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      ) : null}

                      {!addressVerified ? (
                        <article>
                          <div className="flex justify-between items-center space-x-3 bg-slate-100 py-3 px-4 rounded">
                            <div className="flex items-center space-x-3  ">
                              <h2 className="text-gray-700 font-semibold">
                                Utility Bill
                              </h2>
                            </div>
                            <button onClick={() => handleDropdownOpen(6)}>
                              <AiFillPlusCircle className="text-[30px] text-brand-light" />
                            </button>
                          </div>
                          <SmoothCollapse
                            expanded={openDropdown === 6}
                            heightTransition=".5s ease"
                          >
                            <div className="py-5 pl-1">
                              <div className="flex flex-row space-x-4 items-center max-w-lg overflow-hidden">
                                {values.utilityBill.length > 0 ? null : (
                                  <button
                                    onClick={openDropzone}
                                    type="button"
                                    className="bg-slate-200 h-24 min-w-[6rem] w-[6rem] rounded-lg flex items-center
  justify-center"
                                  >
                                    <span>
                                      <AiOutlinePlusCircle className="text-[2.5rem] text-brand-light/80" />{" "}
                                    </span>
                                  </button>
                                )}

                                <ImageUpload
                                  name="utilityBill"
                                  ref={dropzoneRef}
                                  clearValues={false}
                                  files={values.utilityBill}
                                  postForm
                                />
                              </div>
                            </div>
                          </SmoothCollapse>
                        </article>
                      ) : null}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </article>
          <div className="sticky bottom-0 px-12  w-full bg-white h-full z-10 pb-2 pt-3 rounded-lg">
            <button
              onClick={handleProfileUpdate}
              className="bg-brand-light/50 hover:bg-brand-light rounded-full w-full py-4 my-3 font-bold text-[.9rem] text-white"
            >
              Verify my Information
            </button>

            {/* <div class="spinner"></div> */}
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="my-6  px-24">
          <div className="mx-auto flex justify-center py-6">
            <FaFingerprint className="text-[50px] h-12 text-yellow-500" />
          </div>
          <h3 className="text-[1.5rem] font-heading font-semibold text-brand-light py-1 text-center">
            Verification in Progress
          </h3>
          <div class="verification-message py-12 font-medium space-y-4 text-[.9rem]">
            <p>
              Thank you for providing your information. We have received it and
              are currently verifying the details.
            </p>
            <p>
              You will receive a call from us soon to confirm the information
              you have provided.
            </p>
            <p>Your account will be verified thereafter.</p>
            <p className="text-brand-light flex justify-end">
              {" "}
              - Primetasker team
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TaskVerify;
