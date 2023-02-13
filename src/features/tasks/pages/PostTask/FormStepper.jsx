import { UploadContext } from "./PostTaskForm";
import { Formik, Form } from "formik";
import React, { useContext } from "react";

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
  const { uploading, setUploading } = useContext(UploadContext);
  const childrenArray = React.Children.toArray(children);

  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  console.log(uploading);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialData}
      validationSchema={currentChild.props.validationSchema}
      {...props}
      onSubmit={async (values) => {
        if (isLastStep()) {
          // await props.onSubmit(values, helpers);
          alert(values);
        } else {
          setStep((prev) => prev + 1);
        }
      }}
    >
      {({ isValid, values }) => {
        return (
          <Form autoComplete="off" className="relative">
            <div>{React.cloneElement(currentChild, { values })}</div>

            <div className="fixed  bottom-0  w-[35%] flex space-x-6 ">
              {step <= 0 ? null : (
                <button
                  disabled={uploading}
                  onClick={(e) => {
                    e.preventDefault();
                    setStep((prev) => prev - 1);
                    setCurrentStep((prev) => prev - 1);
                    // saveTaskLocal(false);
                  }}
                  type="button"
                  className="mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 hover:bg-purple-900  rounded-full text-white text-sm text-[18px] mb-4 px-8 py-4 right-0 max-w-1/3 w-full float-right font-medium disabled:bg-gradient-to-r disabled:from-blue-200 disabled:via-purple-200 disabled:to-blue-200"
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
                  className="mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 hover:bg-purple-900  rounded-full text-white text-sm text-[18px] mb-4 px-8 py-4 right-0 max-w-1/3 w-full float-right font-medium disabled:bg-gradient-to-r disabled:from-blue-200 disabled:via-purple-200 disabled:to-blue-200"
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
