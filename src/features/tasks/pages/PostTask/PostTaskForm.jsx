import React, { useState, useEffect, createContext } from "react";

import {
  AiOutlineCalculator,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineEnvironment,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../components/Logo";
import { useRef } from "react";
import {
  FirstStepValidator,
  LastStepValidator,
  SecondStepValidator,
  ThirdStepValidator,
} from "../../schemas/PostTaskSchema";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { FormikStep, FormikStepper } from "./FormStepper";
import { useGetCategoriesQuery } from "../../../categories/slices/categoryApiSlice";

export const UploadContext = createContext();

const PostTask = () => {
  const {
    data: categories,
    isSuccess,
    isLoading,
    isError,
  } = useGetCategoriesQuery();

  useEffect(() => {
    if (categories?.ids) {
      const { ids, entities } = categories;
      const categoryArray = [
        ...ids.map((id) => ({
          id: entities[id]?.categoryId,
          name: entities[id]?.title,
          value: entities[id]?.categoryId,
        })),
      ];

      localStorage.setItem("categories", JSON.stringify(categoryArray));
    }
  }, [categories]);

  const fields = {
    title: "",
    taskTime: "",
    date: {
      onDate: "",
      beforeDate: "",
    },
    details: "",
    categoryId: "",
    taskType: "",

    location: {
      name: "",
    },

    files: [],
    budget: "",
  };

  const [uploading, setUploading] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(true);
  const [showDraftForm, setShowDraftForm] = useState(false);
  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const ref = useRef();

  const location = useLocation();

  const initialValues = location?.state?.initialValues;
  // check if there was an abandoned task
  const [initialFormData, setInitialFormData] = useState(
    initialValues ? initialValues : fields
  );

  useEffect(() => {
    const draftTask = JSON.parse(localStorage.getItem("draftTask"));
    if (!initialValues?.title && draftTask && draftTask.title !== "") {
      setInitialFormData(draftTask);
      setShowTaskForm(false);
      setShowDraftForm(true);
    }
  }, []);

  const navigate = useNavigate();

  const steps = [
    {
      title: "Task Info",
      subtitle: "Provide task title & date",
      icon: <AiOutlineEdit />,
    },
    {
      title: "Location",
      subtitle: "Select task type and location",
      icon: <AiOutlineEnvironment />,
    },
    {
      title: "Details",
      subtitle: "Describe the task in details",
      icon: <AiOutlineInfoCircle />,
    },
    {
      title: "Budget",
      subtitle: "Set a preferred budget",
      icon: <AiOutlineCalculator />,
    },
  ];

  //Obtain a secure form token for validating the form from the server;

  const saveTaskLocal = async (sendToHome = true, submitted = false) => {
    const draft = ref.current.values;
    draft.forsook = new Date();
    if (draft.title !== "") {
      localStorage.setItem("draftTask", JSON.stringify(draft));
    }
    submitted ? localStorage.removeItem("draftTask") : null;

    sendToHome ? navigate("/") : null;
  };

  return (
    <UploadContext.Provider value={{ uploading, setUploading }}>
      <section className="relative bg-white   w-full flex flex-col">
        <div className="  bg-white sticky top-0 z-10 mb-6 md:mb-2 h-16 lg:h-10 ">
          <div className="w-[80%] mx-auto flex flex-row justify-between items-center py-4 ">
            <div className="">
              <Logo />
            </div>
            <button
              onClick={() => saveTaskLocal(true)}
              className=" flex items-center"
            >
              <span className="sr-only">Close</span>
              <AiOutlineClose className="text-[20px] text-gray-800 w-[40px]" />
            </button>
          </div>
        </div>

        <div className="flex  flex-row mx-auto  justify-center items-start   w-full max-h-screen ">
          {!showDraftForm && (
            <article className="w-1/5 sticky top-40 left-[12%] hidden lg:block ">
              <ol className="relative text-gray-600 border-l border-gray-300 dark:border-gray-700 dark:text-gray-400">
                {steps.map((stepper, idx) => {
                  return (
                    <li key={idx} className="mb-12 ml-8">
                      <span
                        className={`absolute flex items-center justify-center w-8 h-8 ${
                          step === idx ? "bg-gray-100" : "bg-gray-200"
                        } ${
                          idx + 1 < currentStep || complete
                            ? "bg-brand-light text-white"
                            : "bg-green-100"
                        }
                    } 
                      rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900 w-7 h-7 text-gray-800-500 dark:text-green-400`}
                      >
                        {idx + 1 < currentStep || complete ? (
                          <AiOutlineCheck />
                        ) : (
                          stepper.icon
                        )}
                      </span>
                      <h3 className="font-semibold leading-tight tracking-wide text-[14px] text-brand-text-deep">
                        {stepper.title}
                      </h3>
                      <p className="text-[12px]"> {stepper.subtitle}</p>
                    </li>
                  );
                })}
              </ol>
            </article>
          )}

          <article className="w-full lg:w-2/5  self-center  ">
            <div>
              <div className="w-full   mx-auto ">
                <FormikStepper
                  showDraftForm={showDraftForm}
                  saveTaskLocal={saveTaskLocal}
                  innerRef={ref}
                  step={step}
                  setStep={setStep}
                  setComplete={setComplete}
                  setCurrentStep={setCurrentStep}
                  initialData={initialFormData}
                >
                  {/* First Form Step Section -  Task title and Date */}
                  <FormikStep validationSchema={FirstStepValidator}>
                    <StepOne
                      setShowTaskForm={setShowTaskForm}
                      showTaskForm={showTaskForm}
                      showDraftForm={showDraftForm}
                      setShowDraftForm={setShowDraftForm}
                      fields={fields}
                    />
                  </FormikStep>
                  {/* Second step section of form - Location Section */}
                  <FormikStep validationSchema={SecondStepValidator}>
                    <StepTwo />
                  </FormikStep>
                  {/* Third step section of form - Details Section */}
                  <FormikStep
                    validationSchema={ThirdStepValidator}
                    className="align-middle mt-12"
                  >
                    <StepThree />
                  </FormikStep>
                  {/* Fourth step section of form - Budget Section */}
                  <FormikStep
                    validationSchema={LastStepValidator}
                    className="mt-6"
                  >
                    <StepFour />
                  </FormikStep>
                </FormikStepper>
              </div>
            </div>
          </article>
        </div>
      </section>
    </UploadContext.Provider>
  );
};

export default PostTask;
