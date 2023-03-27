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
    values.taskEarliestDone = new Date(values.date[0].startDate);
    values.taskDeadline = new Date(values.date[0].endDate);
    delete values["date"];
    delete values["forsook"];

    //page is protected, user has to login to post
    navigate("/create/post-task-success", {
      state: { data: values },
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialData}
      validationSchema={currentChild.props.validationSchema}
      {...props}
      onSubmit={(values) => {
        if (isLastStep()) {
          handleSubmit(values);
        } else {
          setStep((prev) => prev + 1);
        }
      }}
    >
      {({ isValid, values }) => {
        return (
          <Form autoComplete="off" className="relative">
            <div>{React.cloneElement(currentChild, { values })}</div>

            <div className="fixed   bottom-0  w-[35%] flex space-x-6 ">
              {step <= 0 ? null : (
                <button
                  disabled={uploading}
                  onClick={(e) => {
                    e.preventDefault();
                    setStep((prev) => prev - 1);
                    setCurrentStep((prev) => prev - 1);
                  }}
                  type="button"
                  className="mt-6 bg-gray-200 hover:bg-gray-300  rounded-full text-purple-800 text-sm text-[18px] mb-4 px-8 py-4 right-0 max-w-1/3 w-full float-right font-semibold disabled:bg-gradient-to-r disabled:from-blue-200 disabled:via-purple-200 disabled:to-blue-200"
                >
                  Previous
                </button>
              )}
              {showDraftForm ? null : (
                <button
                  disabled={!isValid || uploading}
                  onClick={() => {
                    setCurrentStep((prev) => prev + 1);
                    saveTaskLocal(false);
                  }}
                  className="mt-6  bg-purple-800 hover:bg-purple-900  rounded-full text-white text-sm text-[18px] mb-4 px-8 py-4 right-0 max-w-1/3 w-full float-right font-medium disabled:bg-gray-200 disabled:text-gray-800 disabled:hover:bg-gray-300"
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
