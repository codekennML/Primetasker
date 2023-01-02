// import { sendRange } from '../../../utils/DatePicker'
import { useState } from "react";
import { addDays, format, isValid } from "date-fns";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaArrowRight,
  FaArrowUp,
  FaChevronCircleDown,
  FaEllipsisV,
  FaMoon,
  FaChartBar,
  FaStar,
  FaCheckCircle,
  FaBriefcase,
  FaRegCreditCard,
  FaCheck,
  FaRegCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdOutlineErrorOutline, MdErrorOutline } from "react-icons/md";
import {
  AiOutlineReconciliation,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import DatePicker from "../../../utils/DatePicker";
import ChartLine from "../../../features/charts/ChartLine";
import { useGetBookingStatsQuery } from "../../../features/bookings/slices/bookingApiSlice";
// import {useGetUsersStats} from "../../../features/bookings/slices/bookingApiSlice"
// import {useGetTasksStats} from "../../../features/bookings/slices/bookingApiSlice"
// import {useGetBookingStats} from "../../../features/bookings/slices/bookingApiSlice"
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../../features/theme/themeSlice";
import StatCard from "../../../utils/StatCard";
import Spinner from "../../../utils/Spinner";
import ChartPie from "../../../features/charts/ChartPie";
import Images from "../../../components/Images";
import BasicTable from "../../../features/tables/BasicTable";
import SimpleTable from "../../../features/tables/SimpleTable";
import Select from "../../../utils/CustomSelect";
import Flags from "../../../utils/Flags";

const Analytics = () => {
  const dataNow = [
    {
      id: "metric",
      color: "hsl(271, 70%, 50%)",
      stats: [
        {
          x: "Jan",
          y: 2,
        },
        {
          x: "Mar",
          y: 2,
        },
        {
          x: "Apr",
          y: 1,
        },
        {
          x: "May",
          y: 1,
        },
        {
          x: "Jun",
          y: 1,
        },
        {
          x: "Aug",
          y: 2,
        },
        {
          x: "Sep",
          y: 1,
        },
        {
          x: "Oct",
          y: 1,
        },
        {
          x: "Nov",
          y: 1,
        },
        {
          x: "Dec",
          y: 38,
        },
      ],
    },
  ];
  const { data, isLoading, isFetching, isSuccess } = useGetBookingStatsQuery();

  let chartData;

  if (isSuccess) {
    const { entities, ids } = data;
    const chartDataArray = ids.map((id) => entities[id]);
    chartData = [
      {
        id: "Bookings",
        color: "hsl(313, 70%, 50%)",
        data: [...chartDataArray],
      },
    ];
  }

  const dispatch = useDispatch();
  const [themeMode, setThemeMode] = useState();
  const theme = useSelector((state) => state.theme.dark);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const percentage = 67.5;
  let content;

  // function getDateRange(data) {
  //   setStartDate(format(new Date(data?.from), "dd.MM.yyyy"));
  //   setEndDate(format(new Date(data?.to), "dd.MM.yyyy"));
  // }

  const [openDateFilter, setOpenDateFilter] = useState(false);

  const handleMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <div className="w-full  mx-auto bg-slate-100 dark:bg-gray-700">
      <article className="flex items-center justify-between px-4 mb-3 pb-3 bg-purple-800 dark:bg-gray-700 py-4 sticky top-0 z-50   border-gray-900 dark:border-gray-500 dark:border ">
        <div className="flex space-x-2 items-center  ">
          <h2 className="uppercase  text-white font-bold font-sans text-[25px] dark:text-gray-100">
            Dashboard
          </h2>
        </div>

        <div className="flex items-center   flex-row space-x-3 mr-6">
          <div className="mr-3">
            <button onClick={() => handleMode()} className="text-[20px]">
              <FaMoon />
            </button>
          </div>
          <div className="bg-gray-600 p-1 rounded-full ">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
        </div>
      </article>

      <section className="px-12">
        <section className="mt-8 ">
          <article className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:grid-rows-1 gap-x-4 gap-y-4 mt-3  rounded-lg">
            <StatCard
              Svg={
                <FaChartBar className="font-medium w-16 h-12  text-gray-700 " />
              }
              currSymbol={`₦`}
              title="Commissions"
              mainAmt={`2,500,000`}
              changePercent={`16`}
              changeAmount={`89k`}
              timeframe={`today`}
            />
            <StatCard
              Svg={
                <AiOutlineShoppingCart className="font-medium w-16 h-12  text-gray-700 " />
              }
              title="Bookings"
              mainAmt={`2,500,000`}
              changePercent={`16`}
              changeAmount={`89k`}
              timeframe={`today`}
            />
            <StatCard
              Svg={
                <AiOutlineReconciliation className="font-medium w-16 h-12  text-gray-700 " />
              }
              title="Transactions"
              mainAmt={`2,500`}
              changePercent={`16`}
              changeAmount={`89k`}
              timeframe={`today`}
            />
            <StatCard
              Svg={
                <AiOutlineUser className="font-medium w-16 h-12  text-gray-700 " />
              }
              title="Users"
              mainAmt={`25,000`}
              changePercent={`16`}
              changeAmount={`89k`}
              timeframe={`today`}
            />
          </article>
        </section>

        <section className="mt-6 flex gap-x-3  w-full  ">
          <article className="w-2/3 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-xl ">
            <div className=" border-t ">
              <div className="flex flex-row justify-between items-center relative mt-6 px-8 mx-2">
                <h3 className="font-semibold text-gray-500 text-[20px]">
                  Performance Metrics
                </h3>
                <div className="flex items-center space-x-2 mr-1 ">
                  <button
                    onClick={() => setOpenDateFilter((prev) => !prev)}
                    className=" text-xs border px-6 py-2 rounded text-[15px] font-semibold font-sans text-gray-600 border-gray-300  inline-flex items-center space-x-2"
                  >
                    {/* <FaCalendar className="text-gray-400 " /> */}
                    <span>Bookings</span>
                    <FaChevronCircleDown
                      className={`${
                        openDateFilter ? "rotate-180" : ""
                      } text-gray-500`}
                    />
                  </button>
                  <button
                    onClick={() => setOpenDateFilter((prev) => !prev)}
                    className=" text-xs border px-6 py-2 rounded text-[15px] font-semibold font-sans text-gray-600 border-gray-300  inline-flex items-center space-x-2"
                  >
                    {/* <FaCalendar className="text-gray-400 " /> */}
                    <span>Last 365 days</span>
                    <FaChevronCircleDown
                      className={`${
                        openDateFilter ? "rotate-180" : ""
                      } text-gray-500`}
                    />
                  </button>
                </div>
              </div>
              <div className=" px-4 chartLine h-full flex justify-center items-center">
                {isSuccess ? <ChartLine data={chartData} /> : <Spinner />}
              </div>
            </div>
          </article>

          <article className="w-1/3 h-full ">
            <section className=" ">
              <div className=" rounded-lg  mx-2  border shadow-md  h-full bg-white">
                <article className=" px-3 ">
                  <h2 className="border-b border-gray-200 dark:border-gray-400 pt-4 px-3  pb-2 font-semibold text-gray-500 dark:text-gray-100 text-[18px]">
                    Users by device
                  </h2>
                </article>

                <div>
                  <ChartPie
                    marginSpecs={{ top: 30, right: 10, bottom: 20, left: 10 }}
                    height="h-[380px]"
                  />
                </div>
              </div>
            </section>
          </article>
        </section>

        {/* Tasker, Customer and Categories Stats */}
        <section className="flex flex-row justify-between my-8 gap-x-8">
          <article className="w-1/3">
            <section className=" ">
              <div className=" rounded-lg  px-4  border shadow-md bg-white dark:bg-transparent h-full ">
                <article className=" items-center ">
                  <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-500 text-[16px]">
                    Top taskers
                  </h2>
                  <p className="text-gray-400"></p>
                </article>
                <article className="p text-[13px] font-medium  ">
                  <ul className=" pt-3 pb-1 last:border-b-none">
                    <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-500 font-semibold mb-1">
                          Sophronia Commins
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">291</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N24m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N16m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-1">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "orange",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b  border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Leicester Playhill
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">1091</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N64m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N56m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-1">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "green",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Reinhard Trueman
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">191</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N14m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N7m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "red",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Mary Livvie
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">2491</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N94m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N76m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "steelblue",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Carina Elsa
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">91</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N4m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N1.5m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "violet",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </article>
                <div className="relative my-2">
                  <Select />
                </div>
              </div>
            </section>
          </article>

          <article className="w-1/3">
            <section className=" ">
              <div className=" rounded-lg px-4   border shadow-md bg-white dark:bg-transparent  h-full ">
                <article className=" pb-1 ">
                  <h2 className="border-b border-gray-100 pt-4  pb-2 font-semibold dark:text-gray-100 text-gray-500 text-[18px]">
                    Top Performing Categories
                  </h2>
                  <p className="text-gray-400">{/* <FaEllipsisH /> */}</p>
                </article>
                <article className=" text-[13px] font-medium  ">
                  <ul className="space-y-3 pt-1 pb-3">
                    <li className="border-b py-2">
                      <article className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center">
                          <img
                            width="70px"
                            height="30px"
                            src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="rounded"
                          />
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-500 tracking-wide">
                              Logistics &amp; Dispatch
                            </p>
                            <div className="space-x-2 flex">
                              <p className="border-r">
                                <span>2340 </span> bookings
                              </p>
                              <p>2340 Completed</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-blue-400 font-bold text-[15px]">
                            N230M
                          </p>
                        </div>
                      </article>
                    </li>
                    <li className="border-b py-3">
                      <article className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center">
                          <img
                            width="70px"
                            height="30px"
                            src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="rounded"
                          />
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-500 tracking-wide">
                              Cakes &amp; Pastries
                            </p>
                            <div className="space-x-2 flex">
                              <p className="border-r">
                                <span>340 </span> bookings
                              </p>
                              <p>310 Completed</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-blue-400 font-bold text-[15px]">
                            N30M
                          </p>
                        </div>
                      </article>
                    </li>
                    <li className="border-b py-3">
                      <article className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center">
                          <img
                            width="70px"
                            height="30px"
                            src="https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGolMjBzZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="rounded"
                          />
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-500 tracking-wide">
                              DJs &amp; Bands
                            </p>
                            <div className="space-x-2 flex">
                              <p className="border-r">
                                <span>2340 </span> bookings
                              </p>
                              <p>2340 Completed</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-blue-400 font-bold text-[15px]">
                            N230M
                          </p>
                        </div>
                      </article>
                    </li>
                    <li className="border-b py-3">
                      <article className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center">
                          <img
                            width="70px"
                            height="30px"
                            src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwa2l0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="rounded "
                          />
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-500 tracking-wide">
                              Facials, Pedicure &amp; Manicure
                            </p>
                            <div className="space-x-2 flex">
                              <p className="border-r">
                                <span>2340 </span> bookings
                              </p>
                              <p>2340 Completed</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-blue-400 font-bold text-[15px]">
                            N230M
                          </p>
                        </div>
                      </article>
                    </li>
                    <li className="border-b py-3">
                      <article className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center">
                          <img
                            width="70px"
                            height="30px"
                            src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="rounded"
                          />
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-500 tracking-wide">
                              Logistics &amp; Dispatch
                            </p>
                            <div className="space-x-2 flex">
                              <p className="border-r">
                                <span>2340 </span> bookings
                              </p>
                              <p>2340 Completed</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-blue-400 font-bold text-[15px]">
                            N230M
                          </p>
                        </div>
                      </article>
                    </li>
                  </ul>
                </article>
                <div className="relative my-2">
                  <Select />
                </div>
              </div>
            </section>
          </article>

          <article className="w-1/3">
            <section className=" ">
              <div className=" rounded-lg  border shadow-md bg-white dark:bg-transparent  h-full px-4 ">
                <article className=" items-center px-3 ">
                  <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-500 text-[16px]">
                    Top Customers
                  </h2>
                  <p className="text-gray-400">{/* <FaEllipsisH /> */}</p>
                </article>
                <article className=" text-[13px] font-medium  ">
                  <ul className=" pt-3 pb-1 last:border-b-none">
                    <li className="flex justify-between items-center text-[15px]  py-2.5 border-y  border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-500 font-semibold mb-1">
                          Sophronia Commins
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">101</span>{" "}
                              <span className="text-gray-400">Booked</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                96
                              </span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N690k
                              </span>{" "}
                              <span className="text-gray-400">Profit</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-1">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "orange",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b  border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Leicester Playhill
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">1091</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N64m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N56m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-1">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "green",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Reinhard Trueman
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">191</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N14m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N7m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "red",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Mary Livvie
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">2491</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N94m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N76m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "steelblue",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center  text-[15px] py-2.5 border-b border-gray-100">
                      <article>
                        <h3 className=" text-[14px] text-gray-600 font-semibold">
                          Carina Elsa
                        </h3>
                        <div className=" space-x-1 text-gray-500 ">
                          <div className="inline-flex items-center space-x-2 text-[13px]">
                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center">91</span>{" "}
                              <span className="text-gray-400">Completed</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-green-500">
                                N4m
                              </span>{" "}
                              <span className="text-gray-400">Revenue</span>
                            </p>

                            <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                              <span className="text-center text-orange-500">
                                N1.5m
                              </span>{" "}
                              <span className="text-gray-400">Commissions</span>
                            </p>
                          </div>
                        </div>
                      </article>
                      <div className="text-sm flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="flex items-center justify-end text-[15px] font-medium text-gray-500 ">{`${percentage}%`}</p>
                          <p className="text-gray-400 text-xs">
                            Conversion rate
                          </p>
                        </div>

                        <div className="w-10 h-10">
                          <CircularProgressbar
                            value={percentage}
                            strokeWidth={9}
                            styles={buildStyles({
                              pathColor: "violet",
                            })}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </article>
                <div className="relative my-2">
                  <Select />
                </div>
              </div>
            </section>
          </article>
        </section>

        <section className="flex flex-row  py-2 ">
          <article className="bg-white dark:bg-transparent border pr-1 border-gray-100 ">
            <article className=" px-3 flex justify-between ">
              <h2 className="border-b border-gray-100 pt-4  pb-2 font-semibold dark:text-gray-100 text-gray-500 text-[18px]  tracking-wide">
                Transactions
              </h2>

              <div className="relative my-2 px-8">
                <Select />
              </div>
            </article>

            <div className="">
              <ChartPie
                marginSpecs={{ top: 30, right: 10, bottom: 20, left: 10 }}
                height="h-[310px]"
              />
            </div>
            <div className="flex flex-row justify-around items-center text-center text-[18px]pt-18 ">
              <p>
                <span className="text-[25px] text-violet-300">
                  <FaBriefcase className="w-16" />
                </span>
                <span className="block py-1 font-bold text-[20px] text-gray-500">
                  N20m
                </span>
                <span className="block font-semibold text-gray-600 text-[16px]">
                  Paid Deposits
                </span>
              </p>
              <p className="text-center">
                <span className="text-[25px] text-violet-300">
                  <FaRegCreditCard className="w-16" />
                </span>
                <span className="block py-1">N20m</span>
                <span className="block font-semibold text-gray-700 text-[16px]">
                  Withdrawals
                </span>
              </p>
              <p>
                <span className="text-[25px] text-violet-300">
                  <FaCheckCircle className="w-16" />
                </span>
                <span className="block py-1">N12m</span>
                <span className="block font-semibold text-gray-700 text-[16px]">
                  Payouts
                </span>
              </p>
            </div>
          </article>

          <section className="flex-1 flex  ">
            <article className="bg-white dark:bg-transparent  w-full px-6">
              <article className="">
                <section className=" ">
                  <div className="   h-full ">
                    <article className=" px-3 ">
                      <h2 className="border-b border-gray-100 pt-4  pb-2 font-semibold dark:text-gray-100 text-gray-500 text-[18px]  tracking-wide">
                        Recent Deposits
                      </h2>
                      <p className="text-gray-400">{/* <FaEllipsisH /> */}</p>
                    </article>
                    <article className="px-4 text-[13px] font-medium  ">
                      <ul className="space-y-1 py-3">
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-rose-500 font-bold text-[13px]">
                                - N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-rose-500 font-bold text-[13px]">
                                - N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-green-500 font-bold text-[13px]">
                                N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-red-500 text-[16px] text-center pl-3">
                                      <FaExclamationCircle />
                                    </span>
                                    <span className="block text-red-500">
                                      Failed
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-green-500 font-bold text-[13px]">
                                N10,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-1">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-green-500 font-bold text-[13px]">
                                N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                      </ul>
                      <div className="relative my-2">
                        <Select />
                      </div>
                    </article>
                  </div>
                </section>
              </article>
            </article>
            <article className="bg-white dark:bg-transparent  w-full px-6">
              <article className="">
                <section className=" ">
                  <div className="   h-full ">
                    <article className=" px-3 ">
                      <h2 className="border-b border-gray-100 pt-4  pb-2 font-semibold dark:text-gray-100 text-gray-500 text-[18px]  tracking-wide">
                        Recent Withdrawals
                      </h2>
                      <p className="text-gray-400">{/* <FaEllipsisH /> */}</p>
                    </article>
                    <article className="px-4 text-[13px] font-medium  ">
                      <ul className="space-y-1 py-3">
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-rose-500 font-bold text-[13px]">
                                - N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-rose-500 font-bold text-[13px]">
                                - N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-green-500 font-bold text-[13px]">
                                N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-2">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-red-500 text-[16px] text-center pl-3">
                                      <FaExclamationCircle />
                                    </span>
                                    <span className="block text-red-500">
                                      Failed
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-green-500 font-bold text-[13px]">
                                N10,000
                              </p>
                            </div>
                          </article>
                        </li>
                        <li className="border-b py-1">
                          <article className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                              <img
                                width="50px"
                                height="50px"
                                src="https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                className="rounded-full w-[50px] h-[50px]"
                              />
                              <div className="space-y-0.5">
                                <p className="text-[13px] text-gray-500 tracking-wide">
                                  Kennaya Kolacina
                                </p>
                                <div className="space-x-2 flex  text-xs text-gray-500">
                                  <p className="border-r pr-2 ">
                                    <span className="block ">Channel </span>
                                    <span className="block "> Paystack </span>
                                  </p>
                                  <p className="border-r pr-1 ">
                                    <span className=" inline-flex justify-end">
                                      {" "}
                                      Date{" "}
                                    </span>
                                    <span className="block">22/12/2024</span>
                                  </p>
                                  <p>
                                    <span className="block text-green-500 text-[16px] text-center pl-3">
                                      <FaCheckCircle />
                                    </span>
                                    <span className="block">Completed</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="text-green-500 font-bold text-[13px]">
                                N500,000
                              </p>
                            </div>
                          </article>
                        </li>
                      </ul>
                      <div className="relative my-2">
                        <Select />
                      </div>
                    </article>
                  </div>
                </section>
              </article>
            </article>
          </section>
        </section>

        <Flags />
      </section>
    </div>
  );
};

export default Analytics;
