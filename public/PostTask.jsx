import React, { useState, useEffect, Fragment } from "react";
import CustomText from "../src/utils/CustomFieldComp/CustomText";

import { useFormikContext, Formik, Form } from "formik";
import {
  AiFillCheckCircle,
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineEnvironment,
  AiOutlineInfoCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import DatePicker from "../../../Heristays/Heristays/src/utils/DatePicker";
import { format, addDays, formatDistance, lastDayOfMonth } from "date-fns";

import { FaRegMap } from "react-icons/fa";

import {
  BsCloudSun,
  BsInfoCircle,
  BsMoonStars,
  BsPhoneVibrate,
  BsSun,
  BsSunset,
} from "react-icons/bs";

import CustomTextarea from "../src/utils/CustomFieldComp/CustomTextarea";
import Select from "../src/utils/CustomSelect";
import Logo from "../src/components/Logo";
import Naira from "../assets/svgs/Naira";
import CustomRadio from "../src/utils/CustomFieldComp/CustomRadioCheck";
import MultipleFileUpload from "../src/utils/CustomFieldComp/MultipleFileUpload";
import { useRef } from "react";
import {
  FirstStepValidator,
  LastStepValidator,
  SecondStepValidator,
  ThirdStepValidator,
} from "../src/components/PostTaskSchema";

const options = [
  "Pedicure & Manicure",
  "Facials",
  "Massage",
  "Bead Making",
  "Graphic Design",
  "Data Analysis",
  "Content Creation",
  "Bricklaying",
  "Homework",
  "",
];

const taskTime = [
  { name: "Morning", value: "Before 9am", icon: <BsCloudSun /> },
  { name: "Midday", value: "10-2pm", icon: <BsSun /> },
  { name: "Afternoon", value: "2pm-6pm", icon: <BsSunset /> },
  { name: "Evening", value: "After 6pm", icon: <BsMoonStars /> },
];

const taskType = [
  {
    name: "Select this if the task requires physical attention",
    value: "Physical",
    icon: <AiOutlineEnvironment />,
  },
  {
    name: "Select this if this task can be done online",
    value: "Remote",
    icon: <BsPhoneVibrate />,
  },
];

const PostTask = () => {
  const dispatch = useDispatch();

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
  const [showTaskForm, setShowTaskForm] = useState(true);
  const [showDraftForm, setShowDraftForm] = useState(false);
  const ref = useRef();
  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [review, setReview] = useState(false);
  const [complete, setComplete] = useState(false);
  // check if there was an abandoned task
  // console.log(useSelector(selectDraftTask));
  const [initialFormData, setInitialFormData] = useState(
    JSON.parse(localStorage.getItem("draftTask")) || fields
  );

  useEffect(() => {
    if (initialFormData.title !== "") {
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
                setReview={setReview}
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
                </FormikStep>{" "}
              </FormikStepper>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PostTask;

export const FormikStep = ({ children, values }) => {
  return <>{children}</>;
};

export function FormikStepper({
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
}) {
  const childrenArray = React.Children.toArray(children);

  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

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
                  onClick={(e) => {
                    e.preventDefault();
                    setStep((prev) => prev - 1);
                    setCurrentStep((prev) => prev - 1);
                  }}
                  type="button"
                  className=" mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 hover:bg-purple-900 rounded-full text-white text-sm text-[18px] mb-4 px-8 py-4 right-0  w-full float-right font-medium"
                >
                  Previous
                </button>
              )}
              {showDraftForm ? null : (
                <button
                  disabled={!isValid}
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
}

export const StepOne = ({
  showTaskForm,
  setShowTaskForm,
  dateActive,
  setDateActive,
  date,
  setDate,
  formatDate,
  showDraftForm,
  setShowDraftForm,
  fields,
}) => {
  const context = useFormikContext();
  const { values } = context;

  function handleReset(e) {
    e.preventDefault();
    localStorage.removeItem("draftTask");
    context.setFormikState((prev) => ({
      ...prev,
      values: { ...fields },
    }));
    setShowTaskForm(true);
    setShowDraftForm(false);
  }

  return (
    <section>
      {showDraftForm && !showTaskForm ? (
        <div className="">
          <div className="bg-slate-100   flex flex-col mt-[20%] left-10">
            <div className=" bg-gray-200 rounded-md font-medium p-4 pb-8">
              <h2 className="text-[25px] font-sans font-bold text-purple-800 py-2.5 text-center mb-2 ">
                Resume unfinished task ?
              </h2>
              <div className=" mx-auto text-sm tracking-wide leading-relaxed pt-3 py-2 px-4 ">
                <p className="my-2">{`We noticed you had created an unposted task before with details  :   `}</p>

                <p className="text-[15px] font-bold text-purple-800 flex space-x-4 items-start relative mt-3">
                  <span className="text-[18px] pt-1">
                    <BsInfoCircle />
                  </span>

                  <span>{`${values.title}`}</span>
                </p>
                {console.log(values.forsook)}
                {values.forsook ? (
                  <p className="flex justify-end text-[12px] pt-0">
                    {`  about ${formatDistance(
                      new Date(values.forsook),
                      Date.now(),
                      {
                        addSuffix: true,
                      }
                    )} 
                `}
                  </p>
                ) : null}

                <p className="py-1 pt-3">
                  Would you like to resume this task now ?
                </p>
              </div>
              <div className="w-full flex flex-row justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-600 text-white px-5 py-2  mt-3  self-end rounded-md   mr-4"
                >
                  Start a new task
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowDraftForm(false);
                    setShowTaskForm(true);
                  }}
                  className="bg-purple-700 text-white px-5 py-2  mt-3  self-end rounded-md  float-right mr-4"
                >
                  Resume task
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {!showDraftForm && showTaskForm ? (
        <section>
          <h2 className="text-[30px] font-sans font-bold text-gray-900 py-2.5 text-center mb-6">
            Provide task Details
          </h2>
          <article>
            <div className="flex items-center space-x-2 ">
              <p className="text-purple-900 text-[30px]">
                <AiOutlinePlusCircle />
              </p>
              <h3 className="text-purple-900 font-medium">
                In a few words, what do you need done ? ?
              </h3>
            </div>
          </article>

          <CustomText
            name="title"
            type="text"
            value={values.title}
            placeholder="e.g  Plan a surprise birthday party"
            inputstyle="py-4 my-3.5  rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-700 bg-gray-50 indent-2 w-full rounded auto"
          />

          <article className="py-2 mt-6">
            <div className="flex items-center space-x-2 ">
              <p className="text-purple-900 text-[30px]">
                <AiOutlineCalendar />
              </p>
              <h3 className="text-purple-900 font-medium">
                When do you need this done ?
              </h3>
            </div>

            <article className="flex items-center space-x-2 mt-5 relative">
              <button
                onClick={() => {
                  setDateActive((prev) => !prev);
                }}
                className="bg-blue-50 flex items-center space-x-3 py-3 border border-gray-300 rounded-full text-[14px] relative px-3"
                type="button"
              >
                <span>
                  {!values.date[0].endDate || values.date[0].endDate === ""
                    ? "On or Before "
                    : formatDate(values.date)}
                </span>
                <span className="arrow "></span>
              </button>{" "}
              <button
                className="bg-blue-50 px-3 py-3 border border-gray-300 rounded-full text-[14px]"
                type="button"
                onClick={() => {
                  context.setFieldValue("date", [
                    {
                      startDate: new Date(),
                      endDate: lastDayOfMonth(new Date()),
                    },
                  ]);
                }}
              >
                Before next month
              </button>{" "}
              <DatePicker
                name="date"
                numofMonths={1}
                dateActive={dateActive}
                date={date}
                setDate={setDate}
                position={`absolute -top-24 right-2`}
              />
            </article>
          </article>

          <article className="mt-8 py-2 space-y-4">
            <div className="flex items-center space-x-2">
              <p className="text-purple-900 text-[30px]">
                <AiOutlineClockCircle />
              </p>
              <h3 className="font-medium text-purple-900">
                Preffered time of day
              </h3>
            </div>

            <div className="flex space-x-3 ">
              <CustomRadio
                options={taskTime}
                name="taskTime"
                checked={values.taskTime}
                style={`flex flex-row w-full justify-between z-0`}
                renderItem={(name, idx, icon, value, checked) => {
                  return (
                    <div
                      className={`${
                        checked
                          ? "bg-purple-800 text-white border-0"
                          : "bg-gray-50 text-gray-500"
                      } relative w-32  text-center  rounded-lg cursor-pointer py-4 flex flex-col items-center justify-center border border-purple-500 `}
                      key={idx}
                    >
                      <p
                        className={`${
                          checked
                            ? "bg-purple-800 text-white border-0"
                            : "hidden"
                        }`}
                      >
                        <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                      </p>
                      <p className="text-[24px] ">{icon}</p>
                      <p className="text-[17px] font-medium  mt-2"> {name}</p>
                      <p className="text-[15px] font-medium ">{value}</p>
                    </div>
                  );
                }}
              />
            </div>
          </article>
        </section>
      ) : null}
    </section>
  );
};

export const StepTwo = () => {
  const context = useFormikContext();
  const { values } = context;

  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Where ?
      </h2>
      <div>
        <div className="flex items-center space-x-2 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p>
          <h3 className="text-purple-900 font-medium">
            How would you classify this task ?
          </h3>
        </div>
      </div>
      <div className="relative my-3">
        <Select
          name="category"
          items={options}
          width={`w-full`}
          style={`py-4 text-[16px] bg-gray-50`}
        />
      </div>

      <article className="mt-8">
        <div className="flex items-center space-x-2 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p>
          <h3 className="text-purple-900 font-medium">
            What type of task is this ?
          </h3>
        </div>

        <article>
          <CustomRadio
            name="taskType"
            options={taskType}
            checked={values.taskType}
            style={`flex justify-center space-x-12 mt-6`}
            renderItem={(name, idx, icon, value, checked) => {
              return (
                <div
                  key={idx}
                  className={` ${
                    checked
                      ? "bg-purple-800 text-white border-0"
                      : "bg-gray-50 text-gray-500"
                  } relative  w-52  bg-gray-50 text-center  rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500`}
                >
                  <p
                    className={`${
                      checked ? "bg-purple-800 text-white border-0" : "hidden"
                    }`}
                  >
                    <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                  </p>
                  <p className="text-[24px] ">{icon}</p>
                  <p className="text-[17px] font-medium mt-2"> {value}</p>
                  <p className="text-[12px] font-medium  px-4">{name}</p>
                </div>
              );
            }}
          />
        </article>

        {values.taskType !== "Physical" ? null : (
          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <p className="text-purple-900 text-[30px]">
                <FaRegMap />
              </p>
              <h3 className="text-purple-900 font-medium">
                Where do you need this task done ?
              </h3>
            </div>

            <CustomText
              label="Task Address "
              labelstyle={`hidden`}
              name="location"
              type="text"
              value={values.location}
              placeholder="84 Etim Inyang Crescent, Victoria Island"
              inputstyle="py-4 my-2  rounded-lg border-2 border-violet-200 placeholder:text-[14px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-400 bg-gray-50 indent-2 w-full rounded"
            />
          </div>
        )}
      </article>
    </section>
  );
};

export const StepThree = () => {
  const context = useFormikContext();
  const { values } = context;

  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Just a few more details
      </h2>

      <div>
        <div className="flex items-center space-x-2 ">
          {/* <p className="text-purple-900 text-[30px]">
          <AiOutlinePlusCircle />
        </p> */}
          <h3 className="text-purple-900 font-medium">
            Detailed description of your task
          </h3>
        </div>
        <CustomTextarea
          name="details"
          value={values.details}
          placeholder={`Type a description`}
          inputStyle={`my-4 py-4 p-2 bg-slate-50 h-32 resize-none focus:outline-violet-500  placeholder:text-[15px] placeholder:text-gray-500 text-gray-600 `}
        />
        <div className="">
          <div className="flex items-center space-x-2  mb-6">
            {/* <p className="text-purple-900 text-[30px]">
            <AiOutlinePlusCircle />
          </p> */}
            <h3 className="text-purple-900 font-medium ">
              Add Images (Optional)
            </h3>
          </div>

          <MultipleFileUpload
            name="files"
            fileposition={`absolute bottom-0 left-32 bg-white  rounded-lg`}
            dimensions={`w-[40%] max-w-full`}
            style={` flex space-x-2`}
          />
        </div>
      </div>
    </section>
  );
};
export const StepFour = () => {
  return (
    <section>
      <h2 className="text-[30px] font-bold text-slate-900 py-2.5 text-center mb-6">
        Suggest a Budget
      </h2>
      <div>
        <div className="flex items-center space-x-2 mt-12 mb-6 ">
          <p className="text-purple-900 text-[30px]">
            <AiOutlineCalculator />
          </p>
          <h3 className="text-purple-900 font-medium">What is your Budget ?</h3>
        </div>
      </div>
      <CustomText
        label="You can always negotiate the final price"
        labelstyle={`text-[13px]  text-gray-900 py-6 font-bold `}
        name="budget"
        imgBfr={<Naira style={`text-gray-500 w-7 h-7 `} />}
        type="text"
        placeholder=""
        svgclassName="text-gray-900 absolute z-50 top-[54px] text-[25px] left-2"
        inputstyle="py-3 my-4 font-medium rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-600 bg-gray-50 indent-2 w-full rounded"
      />
    </section>
  );
};
