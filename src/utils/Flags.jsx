import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaArrowRight } from "react-icons/fa";
import Select from "./CustomSelect";

const Flags = () => {
  const percentage = 50;
  return (
    <section className="flex flex-row justify-between my-8 gap-x-4 ">
      <article className="w-1/3">
        <section className=" ">
          <div className=" rounded-lg  px-4  border dark:border-gray-600 shadow-md bg-white dark:bg-gray-800 dark:text-gray-400  h-full ">
            <article className="flex justify-between items-center ">
              <h2 className=" pt-4 font-semibold dark:text-purple-600 text-gray-700 text-[15px]">
                Flagged Taskers
              </h2>
              <div className="relative pt-3 flex items-center justify-between">
                <Select
                  items={[
                    "Today",
                    "Last Week",
                    "Last Month",
                    "Last Quarter",
                    "This Year",
                  ]}
                />
              </div>
            </article>
            <article className="p text-[13px] font-medium  ">
              <ul className=" pt-3 pb-1 last:border-b-none">
                <li className="flex justify-between items-center text-[13px]  py-2.5 border-t  border-gray-100 dark:border-gray-700 text-xs">
                  <article>
                    <h3 className="  text-gray-700 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[11px]">
                        <p className="text-gray-500 font-semibol border-r pr-2 flex flex-col">
                          <span className="text-center">
                            Sophcommins@yahoo.com
                          </span>
                          {/* <span>+234802324567</span> */}
                        </p>

                        <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                          <span className="text-center text-green-500">
                            +234802324567{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <div className="text-sm flex items-center space-x-1">
                    <div className="space-y-1"></div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "30px",
                        })}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </article>
      <article className="w-1/3">
        <section className=" ">
          <div className=" rounded-lg  px-4  border shadow-md bg-white dark:bg-gray-800 dark:border-gray-600 h-full ">
            <article className="flex justify-between items-center ">
              <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-700 dark:text-purple-600 text-[15px]">
                Flagged Taskers
              </h2>
              <div className="relative pt-3 flex items-center justify-between">
                {/* <Select /> */}
              </div>
            </article>
            <article className="text-[13px] font-medium  ">
              <ul className=" pt-3 pb-1 last:border-b-none">
                <li className="flex justify-between items-center text-[13px]  py-2.5 border-t  border-gray-100  text-xs">
                  <article>
                    <h3 className=" font-semibold mb-1 dark:text-gray-400 ">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[11px]">
                        <p className="text-gray-500 font-semibol border-r pr-2 flex flex-col">
                          <span className="text-center">
                            Sophcommins@yahoo.com
                          </span>
                          {/* <span>+234802324567</span> */}
                        </p>

                        <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                          <span className="text-center text-green-500">
                            +234802324567{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <div className="text-sm flex items-center space-x-1">
                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "30px",
                        })}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </article>

      <article className="w-1/3">
        <section className=" ">
          <div className=" rounded-lg  px-4  border dark:border-gray-600 shadow-md bg-white dark:bg-gray-800 h-full ">
            <article className="flex justify-between items-center ">
              <h2 className=" pt-4  font-semibold dark:text-gray-100 text-gray-700 dark:text-purple-600 text-[15px]">
                Flagged Bookings
              </h2>
              <div className="relative pt-3 flex items-center justify-between">
                <Select
                  items={[
                    "Today",
                    "Last Week",
                    "Last Month",
                    "Last Quarter",
                    "This Year",
                  ]}
                />
              </div>
            </article>
            <article className="text-[13px] font-medium  ">
              <ul className=" pt-3 pb-1 last:border-b-none">
                <li className="flex justify-between items-center text-[13px]  py-2.5 border-t  border-gray-100 dark:border-gray-700 text-xs">
                  <article>
                    <h3 className="  text-gray-600 dark:text-gray-400 font-semibold mb-1">
                      63ae9c8f5bd8a8fffc26ad2a
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2">
                        <p className="text-gray-400  text-[12px] font-semibold pr-2 flex flex-col">
                          <span className="text-center ">
                            Supervised by : Kennata Jay
                          </span>
                          {/* <span>+234802324567</span> */}
                        </p>
                      </div>
                    </div>
                  </article>
                  <div className="text-sm flex items-center space-x-1">
                    <div className="space-y-1"></div>

                    <div className="w-10 h-10">
                      <CircularProgressbar
                        value={percentage}
                        text={`High`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Flags;
