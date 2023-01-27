import React, { useState, useEffect } from "react";
import CustomText from "../utils/CustomFieldComp/CustomText";
import Nav from "./Nav";
import { Formik, Form } from "formik";
import {
  AiFillAccountBook,
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineEnvironment,
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import DatePicker from "../utils/DatePicker";
import { subDays, format } from "date-fns";
import CustomCheckbox from "../utils/CustomFieldComp/CustomCheckbox";
import {
  FaCalendarAlt,
  FaClock,
  FaCoffee,
  FaMap,
  FaRegMap,
  FaTimes,
} from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import {
  BsCloudSun,
  BsMoonStars,
  BsPhoneVibrate,
  BsSun,
  BsSunset,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import Select from "../utils/CustomSelect";
import Logo from "./Logo";
import Naira from "../../public/svgs/Naira";

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

const PostTask = () => {
  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const [dateActive, setDateActive] = useState(true);

  const [date, setDate] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const specifiedDate = `${format(date[0].startDate, "yyyy-MM-dd")} - ${format(
    date[0].endDate,
    "yyyy-MM-dd"
  )}`;

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

  return (
    <section className="relative">
      <div className="  ">
        <div class="absolute left-28 top-6">
          <Logo />
        </div>
      </div>
      <Link to="/" className="absolute top-10 right-20 flex items-center">
        <span>Close</span>
        <AiOutlineClose className="text-[20px] text-gray-800 w-[40px]" />
      </Link>

      <div className="flex  flex-row mx-auto  justify-center items-center h-screen ">
        <article className="w-1/5 ">
          <ol class="relative text-gray-600 border-l border-gray-300 dark:border-gray-700 dark:text-gray-400">
            {steps.map((stepper, idx) => {
              return (
                <li key={idx} class="mb-12 ml-8">
                  <span
                    class={`absolute flex items-center justify-center w-8 h-8 ${
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
                  <h3 class="font-semibold leading-tight tracking-wide text-[14px]">
                    {stepper.title}
                  </h3>
                  <p class="text-[12px]"> {stepper.subtitle}</p>
                </li>
              );
            })}
          </ol>
        </article>

        <article className="w-3/5 min-h-[600px] pl-12 pr-40">
          <div>
            <h2 className="text-[25px] font-bold text-gray-700 py-2.5 text-center mb-6">
              Post a task right away, its free !
            </h2>
          </div>
          <div>
            <div>
              <FormikStepper
                step={step}
                setStep={setStep}
                setComplete={setComplete}
                setCurrentStep={setCurrentStep}
                initialValues={{ email: "", password: "" }}
                //   validationSchema={loginSchema}
                //   onSubmit={onSubmit}
              >
                {/* First Form Step Section -  Task title and Date */}
                <section>
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
                    name="email"
                    type="text"
                    placeholder="e.g  Plan a surprise birthday party"
                    inputstyle="py-4 my-3.5  rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-400 bg-gray-50 indent-2 w-full rounded auto"
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

                    <div className="flex items-center space-x-2 mt-5 relative">
                      <button
                        onClick={() => setDateActive((prev) => !prev)}
                        className="bg-gray-200 px-6 py-1.5 border rounded-full "
                        type="button"
                      >
                        Earliest start date
                      </button>
                      <button
                        className="bg-gray-200 px-3 py-1.5 border rounded-full text-[15px]"
                        type="button"
                      >
                        Latest start date
                      </button>{" "}
                      <button
                        className="bg-gray-200 px-3 py-1.5 border rounded-full text-[15px]"
                        type="button"
                      >
                        I'm flexible
                      </button>{" "}
                      <DatePicker
                        numofMonths={1}
                        dateActive={dateActive}
                        date={date}
                        setDate={setDate}
                        position={`absolute -top-[100%] left-0`}
                      />
                    </div>
                  </article>

                  <article className="mt-8 py-2 space-y-4">
                    <div className="flex items-center space-x-2">
                      <p className="text-purple-900 text-[30px]">
                        <AiOutlineClockCircle />
                      </p>
                      <h3 className="font-medium text-purple-900">
                        Preffered Time of day
                      </h3>
                    </div>

                    <div className="flex space-x-3 ">
                      <div className="w-52  bg-gray-50 text-center py-2 rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500 ">
                        <p>
                          <BsCloudSun className="text-[24px] text-gray-500" />
                        </p>
                        <p className="text-[17px] font-medium text-gray-600 mt-2">
                          {" "}
                          Morning
                        </p>
                        <p className="text-[15px] font-medium text-gray-500">
                          Before 9am
                        </p>
                      </div>
                      <div className="w-52  bg-gray-50 text-center py-2 rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500 ">
                        <p>
                          <BsSun className="text-[30px] text-gray-400" />
                        </p>
                        <p className="text-[17px] font-medium text-gray-600 mt-2">
                          {" "}
                          Midday
                        </p>
                        <p className="text-[15px] font-medium text-gray-500">
                          10am - 2pm
                        </p>
                      </div>
                      <div className="w-52 bg-gray-50 text-center py-2 rounded py-4 flex flex-col items-center justify-center border border-purple-500 ">
                        <p>
                          <BsSunset className="text-[28px] text-gray-500" />
                        </p>
                        <p className="text-[17px] font-medium text-gray-600 mt-1">
                          {" "}
                          Afternoon
                        </p>
                        <p className="text-[15px] font-medium text-gray-500">
                          2pm - 6pm
                        </p>
                      </div>
                      <div className="w-52  bg-gray-50 text-center py-2 rounded py-4 flex flex-col items-center justify-center border border-purple-500">
                        <p>
                          <BsMoonStars className="text-[24px] text-gray-400" />
                        </p>
                        <p className="text-[17px] font-medium text-gray-600 mt-2">
                          {" "}
                          Evening
                        </p>
                        <p className="text-[15px] font-medium text-gray-500">
                          After 6pm
                        </p>
                      </div>
                    </div>
                  </article>
                </section>

                {/* Second step section of form - Location Section */}
                <section>
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
                      selected={selected}
                      setSelected={setSelected}
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
                      <div className="flex justify-center space-x-12 mt-6 ">
                        <div className="w-52  bg-gray-50 text-center py-2 rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500 ">
                          <p>
                            <AiOutlineEnvironment className="text-[24px] text-gray-500" />
                          </p>
                          <p className="text-[17px] font-medium text-gray-600 mt-2">
                            {" "}
                            Physical
                          </p>
                          <p className="text-[12px] font-medium text-gray-500 px-4">
                            Select this if the task requires physical attention
                          </p>
                        </div>
                        <div className="w-52  bg-gray-50 text-center py-2 rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500 ">
                          <p>
                            <BsPhoneVibrate className="text-[24px] text-gray-500" />
                          </p>
                          <p className="text-[17px] font-medium text-gray-600 mt-2">
                            {" "}
                            Remote
                          </p>
                          <p className="text-[12px] font-medium text-gray-500 px-4">
                            Select this if this task can be done online
                          </p>
                        </div>
                      </div>
                    </article>
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
                        // label="Task Address "
                        // labelstyle={`text-[15px]  text-purple-900 py-6 font-bold`}
                        name="email"
                        type="text"
                        placeholder="e.g  Plan a surprise birthday party"
                        inputstyle="py-4 my-2  rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-400 bg-gray-50 indent-2 w-full rounded"
                      />
                    </div>
                  </article>
                </section>
                {/* Third step section of form - Details Section */}
                <section className="align-middle mt-12">
                  <div className="flex items-center space-x-2 ">
                    <p className="text-purple-900 text-[30px]">
                      <AiOutlinePlusCircle />
                    </p>
                    <h3 className="text-purple-900 font-medium">
                      Detailed description of your task
                    </h3>
                  </div>
                  <CustomTextarea
                    // label={`Detailed Description of your task `}
                    // labelStyle={`font-bold text-purple-900`}
                    placeholder={`Type a description`}
                    inputStyle={`my-8 py-8 bg-slate-200 focus:outline-violet-500  placeholder:text-[15px] placeholder:text-gray-500 `}
                  />
                </section>

                {/* Fourth step section of form - Budget Section */}

                <section className="mt-6">
                  <div>
                    <div className="flex items-center space-x-2 mt-12 mb-6 ">
                      <p className="text-purple-900 text-[30px]">
                        <AiOutlineCalculator />
                      </p>
                      <h3 className="text-purple-900 font-medium">
                        What is your Budget ?
                      </h3>
                    </div>
                  </div>
                  <CustomText
                    label="You can always negotiate the final price"
                    labelstyle={`text-[13px]  text-gray-900 py-6 font-bold `}
                    name="budget"
                    imgBfr={<Naira style={`text-gray-500`} />}
                    type="text"
                    placeholder=""
                    svgclass="text-gray-900 absolute z-50 top-[54px] text-[25px] left-2"
                    inputstyle="py-3 my-4 font-medium rounded-lg border-2 border-violet-200 placeholder:text-[15px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-600 bg-gray-50 indent-2 w-full rounded"
                  />
                </section>
              </FormikStepper>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PostTask;

export function FormikStepper({
  children,
  step,
  setStep,
  setComplete,
  setCurrentStep,
  ...props
}) {
  const childrenArray = React.Children.toArray(children);

  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  return (
    <Formik
      {...props}
      onSubmit={async () => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((prev) => prev + 1);
        }
      }}
    >
      <Form autoComplete="off" className="relative">
        <div>{currentChild}</div>

        <div className="fixed  bottom-0  w-[35%] flex space-x-6 ">
          {step <= 0 ? null : (
            <button
              onClick={() => {
                setStep((prev) => prev - 1);
                setCurrentStep((prev) => prev - 1);
              }}
              type="button"
              className=" mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 hover:bg-purple-900 rounded-full text-white text-sm text-[18px] mb-4 px-8 py-4 right-0  w-full float-right font-medium"
            >
              Previous
            </button>
          )}
          <button
            onClick={() => {
              isLastStep()
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
            className="mt-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 hover:bg-purple-900  rounded-full text-white text-sm text-[18px] mb-4 px-8 py-4 right-0 max-w-1/3 w-full float-right font-medium"
            type="submit"
          >
            {isLastStep() ? "Post Task " : "Continue"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}
