// import { sendRange } from '../../../utils/DatePicker'
import { useState, useEffect } from "react";
import { addDays, format, isValid, subDays } from "date-fns";

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
  FaLaptop,
  FaMobileAlt,
  FaTabletAlt,
  FaPhone,
  FaDesktop,
} from "react-icons/fa";
import { MdOutlineErrorOutline, MdErrorOutline } from "react-icons/md";
import {
  AiOutlineReconciliation,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

// import ChartLine from "../../../features/charts/ChartLine";
import { useGetBookingStatsQuery } from "../../../features/bookings/slices/bookingApiSlice";
// import {useGetUsersStats} from "../../../features/bookings/slices/bookingApiSlice"
// import {useGetTasksStats} from "../../../features/bookings/slices/bookingApiSlice"
// import {useGetBookingStats} from "../../../features/bookings/slices/bookingApiSlice"

import { useDispatch, useSelector } from "react-redux";

import StatCard from "../../../utils/StatCard";
import Spinner from "../../../utils/Spinner";
// import ChartPie from "../../../features/charts/ChartPie";
import Images from "../../../components/Images";
import BasicTable from "../../../features/tables/BasicTable";
import SimpleTable from "../../../features/tables/SimpleTable";
import Select from "../../../utils/CustomSelect";
import Flags from "../../../utils/Flags";
import { Link } from "react-router-dom";
import ChartLine from "../../../features/charts/ChartLine";
import Performance from "./overview/metricsPerformance";
import TopCategories from "./overview/TopCategories";
import TopTaskers from "./overview/TopTaskers";
import TopCustomers from "./overview/TopCustomers";
import RecentDeposits from "./overview/RecentDeposits";
import RecentWithdrawals from "./overview/RecentWithdrawals";
import FlaggedBookings from "./overview/FlaggedBookings";
import FlaggedCustomers from "./overview/FlaggedCustomers";
import FlaggedTaskers from "./overview/FlaggedTaskers";
import TopBar from "./TopBar";

const Analytics = () => {
  const dispatch = useDispatch();
  const [themeMode, setThemeMode] = useState();
  const theme = useSelector((state) => state.theme.dark);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const percentage = 67.5;
  let content;

  return (
    <div className="w-full mx-auto bg-slate-100 dark:bg-gray-700 ">
      <section className="h-20  ">
        <div className="sticky top-0">
          <TopBar headerText={"Dashboard"} />
        </div>

        <section className="h-screen pb-16 max-h-[calc(100vh_-_75px)] pl-4 overflow-scroll scrollbar-hide">
          <section className="mt-8 ">
            <article className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:grid-rows-1 gap-x-4 gap-y-4 mt-3  rounded-lg">
              <StatCard
                Svg={
                  <FaChartBar className="font-medium w-16 h-12  text-purple-700 " />
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
                  <AiOutlineShoppingCart className="font-medium w-16 h-12  text-purple-700 " />
                }
                title="Bookings"
                mainAmt={`2,500,000`}
                changePercent={`16`}
                changeAmount={`89k`}
                timeframe={`today`}
              />
              <StatCard
                Svg={
                  <AiOutlineReconciliation className="font-medium w-16 h-12  text-purple-700 " />
                }
                title="Transactions"
                mainAmt={`2,500`}
                changePercent={`16`}
                changeAmount={`89k`}
                timeframe={`today`}
              />
              <StatCard
                Svg={
                  <AiOutlineUser className="font-medium w-16 h-12  text-purple-700 " />
                }
                title="Users"
                mainAmt={`25,000`}
                changePercent={`16`}
                changeAmount={`89k`}
                timeframe={`today`}
              />
            </article>
          </section>

          <section className="mt-6 flex gap-x-8  w-full  ">
            <div className="w-2/3">
              <Performance />
            </div>
            <div className="w-1/3">
              <TopCategories />
            </div>
          </section>

          {/* Tasker, Customer and Categories Stats */}
          <section className="flex flex-row justify-between my-8 gap-x-4">
            {/* <article className="bg-white dark:bg-gray-800 w-1/3 rounded-lg shadow-md">
            <div className=" rounded-lg  px-4  border dark:border-gray-600 shadow-md bg-white dark:bg-gray-800 h-full ">
              <article className="flex justify-between items-center mb-8 mt-2">
                <h2 className="  font-semibold dark:text-purple-400 text-purple-700 text-[15px]">
                  Transaction Summary
                </h2>
                <div className="relative ">
                  <Select />
                </div>
              </article>
              <div className="">
                <ChartPie
                  marginSpecs={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  height="h-[230px]"
                />
              </div>
              <div className="flex flex-row justify-center items-center text-center text-[18px] pt-10 space-x-4 ">
                <p className="border-r-2 border-gray-200 pr-3">
                  <span className="block py-1 font-bold text-[16px] text-green-500">
                    N20m
                  </span>
                  <span className="block font-semibold text-green-600 text-[16px]">
                    Paid Deposits
                  </span>
                </p>
                <p className="text-center border-r-2 border-gray-200 pr-3 ">
                  <span className="py-1 font-bold text-[16px] text-red-500">
                    N20m
                  </span>
                  <span className="block font-semibold text-red-600 text-[16px]">
                    Withdrawals
                  </span>
                </p>
                <p className="text-blue-500">
                  <span className="py-1 font-bold text-[16px] text-blue-500">
                    N12m
                  </span>
                  <span className="block font-semibold text-blue-600 text-[16px]">
                    Payouts
                  </span>
                </p>
              </div>
            </div>
          </article> */}
            <TopTaskers />
            <TopCustomers />
          </section>

          <section className="antialiased  text-gray-600  flex flex-col lg:flex-row gap-x-2 rounded-lg ">
            {/* <RecentDeposits />

          <RecentWithdrawals /> */}
          </section>

          <section className="flex flex-row justify-between  gap-x-4 ">
            <FlaggedBookings />
            <FlaggedCustomers />
            <FlaggedTaskers />
          </section>
        </section>
      </section>
      {/* <footer className="bg-white dark:bg-gray-800 py-3 text-center">
        <div className="flex flex-row items-center justify-between py-1.5 px-12">
          <nav>
            <ul className="flex space-x-3 text-purple-800 font-medium">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Tasks</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Terms and conditions</Link>
              </li>
            </ul>
          </nav>
          <p className="text-gray-400">
            Copyright &copy; 2022. Primetasker Inc.{" "}
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Analytics;
