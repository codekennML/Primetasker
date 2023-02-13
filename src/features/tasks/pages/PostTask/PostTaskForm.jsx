import React, { useState, useEffect, Fragment, createContext } from "react";

import {
  AiOutlineCalculator,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineEnvironment,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import { format, addDays } from "date-fns";

// import { BsCloudSun, BsMoonStars, BsSun, BsSunset } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Logo from "../../../../components/Logo";

import { useRef } from "react";
import {
  FirstStepValidator,
  LastStepValidator,
  SecondStepValidator,
  ThirdStepValidator,
} from "../../schemas/PostTaskSchema";
import { StepOne } from "../../../../components/PostTask";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { FormikStep, FormikStepper } from "./FormStepper";

export const UploadContext = createContext();

const PostTask = () => {
  const fields = {
    title: "",
    taskTime: "",
    date: [{ startDate: "", endDate: "" }],
    category: "",
    taskType: "",
    location: "",
    details: "",
    files: [],
    budget: "",
  };
  const [uploading, setUploading] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(true);
  const [showDraftForm, setShowDraftForm] = useState(false);
  const ref = useRef();
  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  // check if there was an abandoned task
  const [initialFormData, setInitialFormData] = useState(fields);
  // console.log(initialFormData.files);

  useEffect(() => {
    const draftTask = JSON.parse(localStorage.getItem("draftTask"));
    if (draftTask && draftTask.title !== "") {
      setInitialFormData(draftTask);
      setShowTaskForm(false);
      setShowDraftForm(true);
    }
  }, []);

  const navigate = useNavigate();

  const [dateActive, setDateActive] = useState(true);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  // const fromDate = `${format(date[0].startDate, "EEEE dd LLL")}`;
  // const beforeDate = `${format(date[0].endDate, "EEEE dd LLL")}`;

  const formatDate = (date) => {
    const fromDate = `${format(new Date(date[0].startDate), "eee dd LLL")}`;
    const beforeDate = `${format(new Date(date[0].endDate), "eee dd LLL")}`;
    const formattedDate = `On ${fromDate} / Before ${beforeDate}`;

    return formattedDate;
  };

  useEffect(() => {
    if (date[0].startDate !== date[0].endDate) {
      setDateActive(false);
    }
  }, [date]);

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

  const saveTaskLocal = async (sendToHome = true) => {
    const draft = ref.current.values;
    draft.forsook = new Date();
    if (draft.title !== "") {
      localStorage.setItem("draftTask", JSON.stringify(draft));
    }
    sendToHome ? navigate("/") : null;
  };

  return (
    <UploadContext.Provider value={{ uploading, setUploading }}>
      <section className="relative">
        <div className="  ">
          <div className="absolute left-28 top-6">
            <Logo />
          </div>
        </div>
        <button
          onClick={() => saveTaskLocal(true)}
          className="absolute top-10 right-20 flex items-center"
        >
          <span>Close</span>
          <AiOutlineClose className="text-[20px] text-gray-800 w-[40px]" />
        </button>

        <div className="flex  flex-row mx-auto  justify-center items-center h-screen ">
          <article className="w-1/5 ">
            <ol className="relative text-gray-600 border-l border-gray-300 dark:border-gray-700 dark:text-gray-400">
              {steps.map((stepper, idx) => {
                return (
                  <li key={idx} className="mb-12 ml-8">
                    <span
                      className={`absolute flex items-center justify-center w-8 h-8 ${
                        step === idx ? "bg-blue-100" : "bg-purple-200"
                      } ${
                        idx + 1 < currentStep || complete
                          ? "bg-green-300"
                          : "bg-blue-100"
                      }
                    } 
                      rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900 w-7 h-7 text-gray-800-500 dark:text-green-400`}
                    >
                      {stepper.icon}
                    </span>
                    <h3 className="font-semibold leading-tight tracking-wide text-[14px]">
                      {stepper.title}
                    </h3>
                    <p className="text-[12px]"> {stepper.subtitle}</p>
                  </li>
                );
              })}
            </ol>
          </article>

          <article className="w-3/5 min-h-[600px] pl-12 pr-40 ">
            <div>
              <div className="relative">
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
                      date={date}
                      setDate={setDate}
                      dateActive={dateActive}
                      setDateActive={setDateActive}
                      formatDate={formatDate}
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
