import { useState, useEffect } from "react";
import { addDays, formatDistance, lastDayOfMonth, format } from "date-fns";
import { AiFillCheckCircle } from "react-icons/ai";

import { BsCloudSun, BsSun, BsSunset, BsMoonStars } from "react-icons/bs";
import CustomRadio from "../../../../utils/CustomFieldComp/CustomRadioCheck";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";
import { useFormikContext } from "formik";
import PopperDatePicker from "../../../../utils/DatePick";

const taskTime = [
  { name: "Morning", value: "Before 9am", icon: <BsCloudSun /> },
  { name: "Midday", value: "10am-2pm", icon: <BsSun /> },
  { name: "Afternoon", value: "2pm-6pm", icon: <BsSunset /> },
  { name: "Evening", value: "After 6pm", icon: <BsMoonStars /> },
];

export const StepOne = ({
  showTaskForm,
  setShowTaskForm,
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
          <div className=" mt-8 lg:mt-10 lg:py-4   flex flex-col left-10">
            <div className=" lg:border rounded-md font-medium lg:p-4 pb-8">
              <h2 className=" title-heading font-bold text-brand-text py-2.5 text-center mb-2 ">
                Resume unfinished task ?
              </h2>
              <div className=" mx-auto text-xs lg:text-sm tracking-wide leading-relaxed pt-3 py-2 px-4 ">
                <p className="my-2">{`We noticed you had created an unposted task before with details  :   `}</p>

                <p className="text-[15px] font-bold text-brand-text-deep flex space-x-4 items-start relative mt-3">
                  <span>{`${values.title}`}</span>
                </p>
                {values.forsook ? (
                  <p className="flex justify-end text-[11px] pt-0">
                    {`  ${formatDistance(new Date(values.forsook), Date.now(), {
                      addSuffix: true,
                    })} 
                  `}
                  </p>
                ) : null}

                <p className="py-1 pt-3">
                  Would you like to resume this task now ?
                </p>
              </div>
              <div className="w-full flex flex-row justify-end text-xs sm:text-sm ">
                <button
                  type="button"
                  onClick={handleReset}
                  className=" bg-green-100 transition text-brand-text px-5 py-2  mt-3  self-end rounded-md font-medium  mr-4  hover:bg-green-300 hover:border-slate-600"
                >
                  Start a new task
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowDraftForm(false);
                    setShowTaskForm(true);
                  }}
                  className="bg-brand-light text-white px-5 py-2  mt-3  self-end rounded-md  float-right mr-4"
                >
                  Resume task
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {!showDraftForm && showTaskForm ? (
        <section className="relative">
          <p className="lg:hidden uppercase font-semibold text-green-900/50 text-[.75rem] ">
            Step 1/4
          </p>
          <h2 className="title-heading">Provide your task details</h2>
          <article>
            <div className="flex items-center space-x-2 ">
              <h3 className="task-input-label">
                In a few words, what do you need done ? ?
              </h3>
            </div>
          </article>

          <CustomText
            key="title"
            name="title"
            type="text"
            value={values.title}
            placeholder="e.g  Plan a surprise birthday party"
            inputstyle="my-4 py-3.5 lg:py-5 p-2 w-full bg-slate-100   indent-4 placeholder:text-[.95rem]  placeholder:text-gray-600 text-brand-text font-medium   rounded-md "
          />

          <article className="py-2 mt-6">
            <div className="flex items-center space-x-2 ">
              <h3 className="task-input-label">When do you need this done ?</h3>
            </div>

            <article className="flex flex-row items-center relative gap-x-3 mt-4">
              <div className=" ">
                <PopperDatePicker
                  label="On date"
                  name="onDate"
                  minDate={new Date()}
                />
              </div>
              <div>
                <PopperDatePicker
                  label="Before date"
                  name="beforeDate"
                  minDate={new Date()}
                />
              </div>
            </article>
          </article>
          <article className="mt-8 py-2 space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="task-input-label">Preffered time of day</h3>
            </div>

            <div className=" ">
              <CustomRadio
                options={taskTime}
                name="taskTime"
                checked={values.taskTime}
                style={`grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-full w-full flex-wrap  `}
                renderItem={(name, idx, icon, value, checked) => {
                  return (
                    <div
                      className={`${
                        checked
                          ? "bg-brand-light text-white border-0"
                          : "bg-slate-100 text-brand-text"
                      } relative w-full   text-center  rounded-lg cursor-pointer py-4 flex flex-col items-center justify-center   `}
                      key={idx}
                    >
                      <p
                        className={`${
                          checked
                            ? "bg-green-600 text-white border-0"
                            : "hidden"
                        }`}
                      >
                        <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                      </p>
                      <p className="text-[20px] lg:text-[24px] ">{icon}</p>
                      <p className="text-[15px] lg:text-[17px] font-medium  mt-2">
                        {" "}
                        {name}
                      </p>
                      <p className="text-[12px] lg:text-[15px] font-medium ">
                        {value}
                      </p>
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
