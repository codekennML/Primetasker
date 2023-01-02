import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaArrowRight } from "react-icons/fa";
import Select from "./CustomSelect";

const Flags = () => {
  const percentage = 50;
  return (
    <section className="flex flex-row justify-between my-8 gap-x-8">
      <article className="w-1/3">
        <section className=" ">
          <div className=" rounded-lg  px-4  border shadow-md bg-white dark:bg-transparent h-full ">
            <article className=" items-center ">
              <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-500 text-[16px]">
                Flagged Taskers
              </h2>
              <p className="text-gray-400"></p>
            </article>
            <article className="p text-[13px] font-medium  ">
              <ul className=" pt-3 pb-1 last:border-b-none">
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

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
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
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
            <div className="relative my-2 flex justify-between items-center">
              <Select />
              <div>
                <button className="text-[13px] tracking-wide flex items-center  space-x-1 hover:text-purple-500">
                  <span className="block text-gray-400">View Report</span>
                  <span className="text-gray-400 block">
                    <FaArrowRight className="h-3 w-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className="w-1/3">
        <section className=" ">
          <div className=" rounded-lg  px-4  border shadow-md bg-white dark:bg-transparent h-full ">
            <article className=" items-center ">
              <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-500 text-[16px]">
                Flagged Customers
              </h2>
              <p className="text-gray-400"></p>
            </article>
            <article className="p text-[13px] font-medium  ">
              <ul className=" pt-3 pb-1 last:border-b-none">
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
                          <span className="text-center">
                            sophcommins@yahoo.com
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
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
            <div className="relative my-2 flex justify-between items-center">
              <Select />

              <div>
                <button className="text-[13px] tracking-wide flex items-center  space-x-1 hover:text-purple-500">
                  <span className="block text-gray-400">View Report</span>
                  <span className="text-gray-400 block">
                    <FaArrowRight className="h-3 w-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className="w-1/3">
        <section className=" ">
          <div className=" rounded-lg  px-4  border shadow-md bg-white dark:bg-transparent h-full ">
            <article className=" items-center ">
              <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-500 text-[16px]">
                Flagged Bookings
              </h2>
              <p className="text-gray-400"></p>
            </article>
            <article className="p text-[13px] font-medium  ">
              <ul className=" pt-3 pb-1 last:border-b-none">
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: "red",
                          textSize: "25px",
                        })}
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100 text-xs">
                  <article>
                    <h3 className="  text-gray-500 font-semibold mb-1">
                      Sophronia Commins
                    </h3>
                    <div className=" space-x-1 text-gray-500 ">
                      <div className="inline-flex items-center space-x-2 text-[13px]">
                        <p className="text-gray-400 font-semibol border-r pr-2 flex flex-col">
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
                    <div className="space-y-1">
                      {/* <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p> */}
                      {/* <p className="text-gray-400 text-xs">Conversion rate</p> */}
                    </div>

                    <div className="w-12 h-12">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
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
            <div className="relative my-2 flex items-center justify-between">
              <Select />
              <div>
                <button className="text-[13px] tracking-wide flex items-center  space-x-1 hover:text-purple-500">
                  <span className="block text-gray-400">View Report</span>
                  <span className="text-gray-400 block">
                    <FaArrowRight className="h-3 w-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Flags;
