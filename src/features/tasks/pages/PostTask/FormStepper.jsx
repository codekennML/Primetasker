import { UploadContext } from "./PostTaskForm";
import { Formik, Form } from "formik";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useCreateTaskMutation } from "../../slices/taskApiSlice";
import { isUploading } from "../../../fileUploads/uploadSlice";
import { useDispatch, useSelector } from "react-redux";

export const FormikStepper = ({
  children,
  step,
  setStep,
  setComplete,
  setCurrentStep,
  showDraftForm,
  setReview,
  initialData,
  saveTaskLocal,
  ...props
}) => {
  const dispatch = useDispatch();
  const uploading = useSelector(isUploading);
  const location = useLocation();

  const { isLoggedIn: userLoggedIn } = useAuth();

  const navigate = useNavigate();

  const childrenArray = React.Children.toArray(children);

  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const handleSubmit = async (values) => {
    if (values.date && values.date.onDate !== "") {
      values.taskEarliestDone = new Date(values.date?.onDate);
    } else {
      values.taskDeadline = new Date(values.date.beforeDate);
    }

    delete values["date"];
    delete values["forsook"];

    console.log(values);

    //page is protected, user has to login to post
    navigate("/create/post-task-success", {
      state: { data: values },
    });
  };

  // const onNext = () => {
  //   console.log("You");
  //   setCurrentStep((prev) => prev + 1);
  //   saveTaskLocal(false);
  //   setStep((prev) => prev + 1);
  // };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialData}
      validateOnMount={true}
      validateOnBlur
      validationSchema={currentChild.props.validationSchema}
      {...props}
      onSubmit={(values, formikBag) => {
        // console.log(bag);
        if (isLastStep()) {
          handleSubmit(values);
        } else {
          setCurrentStep((prev) => prev + 1);
          saveTaskLocal(false);
          setStep((prev) => prev + 1);
          formikBag.setTouched({});
        }
      }}
    >
      {({ isValid, values }) => {
        return (
          <Form autoComplete="off" className="relative  flex flex-col ">
            <div className=" px-4 min-h-screen pt-16 ">
              {React.cloneElement(currentChild, { values })}
            </div>

            <div className="sticky w-full bottom-0 py-2  flex space-x-6 bg-white z-20 px-4">
              {step <= 0 ? null : (
                <button
                  disabled={uploading}
                  onClick={(e) => {
                    e.preventDefault();
                    setStep((prev) => prev - 1);
                    setCurrentStep((prev) => prev - 1);
                  }}
                  type="button"
                  className=" bg-slate-100 hover:bg-slate-200/70  rounded-full text-brand-text  text-[1rem]  px-8 py-3 lg:py-4 right-0 max-w-1/3 w-full float-right font-semibold "
                >
                  Previous
                </button>
              )}
              {showDraftForm ? null : (
                <button
                  disabled={!isValid || uploading}
                  // onClick={!isLastStep() ? onNext : null}
                  className="  bg-brand-light  rounded-full text-white  px-8 py-3 lg:py-4  text-[1rem] right-0 w-full float-right font-semibold disabled:bg-slate-100 disabled:text-brand-text-deep disabled:hover:bg-slate-200"
                  type="submit"
                >
                  {isLastStep() ? "Post Task " : "Continue"}
                </button>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export const FormikStep = ({ children, values, ...props }) => {
  return <>{children}</>;
};
