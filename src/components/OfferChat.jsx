import { Form, Formik } from "formik";
import React, { useRef, useEffect, forwardRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaImage, FaTimes } from "react-icons/fa";
import CustomText from "../utils/CustomFieldComp/CustomText";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";

const OfferChat = () => {
  const fileUploadRef = useRef();

  const displayFileUpload = (e) => {
    fileUploadRef.current.click();
  };

  return (
    <div className="bg-white w-[550px] pt-2 pb-4  relative rounded-lg">
      <section className=" overflow-y-scroll h-[450px] px-6 space-y-4 mb-6">
        <article>
          <div className="   rounded-l-lg flex flex-row space-x-2 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-start text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[16px]">Kamsi Jaja</h3>

              <p className="flex items-center space-x-1 py-1">
                <span className="text-[17px] text-yellow-500">
                  <AiFillStar />
                </span>
                <span className="text-purple-900 text-[13px]">5.0 (95) </span>
              </p>
              <p className="text-gray-600 text-[13px]">57% completion rate</p>
            </div>
          </div>
          <p className="text-[14px] text-gray-600 font-medium text-justify mt-2 bg-[#f3f3f7] px-3 rounded-lg py-2 leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
        <article className="border-b py-3">
          <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
            <div>
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-center text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[14px]">Kamsi J.</h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-700  text-justify   px-10 rounded-lg  leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
        <article className="border-b py-3">
          <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-center text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[14px]">Kamsi Jaja</h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-700  text-justify   px-10 rounded-lg  leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
        <article className=" py-3">
          <div className="   rounded-l-lg flex flex-row items-center space-x-2 ">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-center mb-1"
              />
            </div>

            <div className="flex flex-col items-center text-[13px] font-medium text-center ">
              <h3 className="text-purple-900 text-[14px]">Kamsi Jaja</h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-700  text-justify   px-10 rounded-lg  leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi, suscipit quidem reprehenderit amet voluptates sapiente ab
            perferendis, natus velit incidunt, quis earum doloremque modi
          </p>
        </article>
      </section>
      <Formik
        initialValues={{ comment: "", file: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form className="bg-gray-50 mx-6 rounded-lg pb-3 focus-within:border-violet-400 border-2">
              <div className="px-3 ">
                <div className="relative ">
                  <CustomTextarea
                    autoFocus
                    disabled={values.comment && values.comment.length >= 1400}
                    maxlength="1400"
                    placeholder={`Reply to Kamsi Jaja`}
                    name="comment"
                    inputStyle="h-16 oveflow-y-scroll py-5 bg-gray-100 outline-0 border-0 text-gray-500 resize-none font-semibold"
                  />
                  <p className="absolute -bottom-6 right-2 text-[12px] fomt-semibold text-gray-600">
                    {`${values.comment.length}  of 1400`}
                  </p>
                </div>

                <div className="flex items-center justify-between py-1 mt-6">
                  <div className="flex-1">
                    {values.file ? (
                      <div className="flex items-center space-x-2 bg-gray-50 rounded">
                        <span>
                          <FaImage className="text-purple-600" />
                        </span>
                        <p className="max-w-52 truncate text-[13px] ">
                          {values.file.name}
                        </p>
                        <button onClick={() => setFieldValue("file", "")}>
                          <FaTimes className="text-gray-700 text-[13px]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => displayFileUpload()}
                        className=" rounded-full  border-purple-800 p-1 px-2 flex items-center space-x-2"
                      >
                        <span>
                          <FaImage className="text-purple-600" />
                        </span>
                        {/* <span className="text-[11px]">Add Image</span> */}
                        <input
                          type="file"
                          ref={fileUploadRef}
                          className="hidden"
                          name="file"
                          onChange={(e) =>
                            setFieldValue("file", e.currentTarget.files[0])
                          }
                        />
                      </button>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-3 py-1 mt-1 text-purple-700 text-[13px]  bg-purple-200 rounded-full hover:text-gray-600 font-medium "
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OfferChat;
