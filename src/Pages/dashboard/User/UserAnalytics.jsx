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
import DatePicker from "../../../../../../Heristays/Heristays/src/utils/DatePicker";
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
import { Link } from "react-router-dom";
import Performance from "../admin/overview/metricsPerformance";
import TopBar from "./TopBar";

const UserAnalytics = () => {
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
      <TopBar headerText={`Dashboard`} />
      <section className="px-12">
        <section className="mt-8 ">
          <article className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:grid-rows-1 gap-x-4 gap-y-4 mt-3  rounded-lg">
            <StatCard
              Svg={
                <FaChartBar className="font-medium w-16 h-12  text-gray-700 " />
              }
              currSymbol={`₦`}
              title="Earnings"
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
          </article>
        </section>

        <section className="mt-6 flex gap-x-5  w-full  ">
          <article className="w-full bg-white dark:bg-gray-700 dark:text-gray-100 rounded-xl ">
            <div className="flex flex-row justify-between items-center relative  px-8 mx-2">
              <div className="flex items-center space-x-2 mr-1 ">
                {/* <Select />
                  <Select /> */}
              </div>
            </div>
            <div className=" chartLine h-full ">
              {/* {isSuccess ? <ChartLine data={chartData} /> : <Spinner />} */}
              <Performance />
            </div>
          </article>

          {/* <article className="w-1/3 h-full ">
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
                    height="h-[260px]"
                  />
                </div>
                <div className="flex flex-row justify-center items-center text-center text-[18px] pt-18 space-x-4 mb-5">
                  <p className=" border-gray-200 pr-3">
                    <span className="block py-1 font-bold text-[25px] text-blue-300">
                      <FaDesktop className="w-16" />
                    </span>
                    <span className="block font-semibold text-gray-500 text-[14px]">
                      Desktop
                    </span>
                    <span className="font-semibold text-gray-400">20%</span>
                  </p>
                  <p className="text-center border-gray-200 pr-3">
                    <span className="py-2 font-bold text-[30px] text-blue-300">
                      <FaTabletAlt className="w-16" />
                    </span>
                    <span className="block font-semibold text-gray-500 text-[14px] ">
                      Tablet
                    </span>
                    <span className="font-semibold text-gray-400">10%</span>
                  </p>

                  <p className="text-blue-500  ">
                    <span className="py-1 font-bold text-[30px] text-blue-300">
                      <FaMobileAlt className="w-16" />
                    </span>
                    <span className="block font-semibold text-gray-500 text-[14px]">
                      Mobile
                    </span>
                    <span className="font-semibold text-gray-400">70%</span>
                  </p>
                </div>
              </div>
            </section>
          </article> */}
        </section>
      </section>
    </div>
  );
};

export default UserAnalytics;
