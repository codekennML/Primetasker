import { formatDistance, lastDayOfMonth } from "date-fns";
import {
  AiFillCheckCircle,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import CustomRadio from "../../../../utils/CustomFieldComp/CustomRadioCheck";
import CustomText from "../../../../utils/CustomFieldComp/CustomText";
import DatePicker from "../../../../utils/DatePicker";

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
