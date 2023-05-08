// import { sendRange } from '../../../utils/DatePicker'
import { useState } from "react";
import { addDays, format, isValid } from "date-fns";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaChartBar } from "react-icons/fa";
// import { MdOutlineErrorOutline, MdErrorOutline } from "react-icons/md";
import {
  AiOutlineReconciliation,
  // AiOutlineUser,
  AiOutlineShoppingCart,
  // AiOutlineInfo,
  AiOutlineInfoCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
// import DatePicker from "../../../../../../Heristays/Heristays/src/utils/DatePicker";
// import ChartLine from "../../../features/charts/ChartLine";
import { useGetBookingStatsQuery } from "../../../features/bookings/slices/bookingApiSlice";

import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../../features/theme/themeSlice";
import StatCard from "../../../utils/StatCard";

import { Link } from "react-router-dom";

import { showModal } from "../../../features/modal/modalSlice";
import RecentDeposits from "../admin/overview/RecentDeposits";
import RecentWithdrawals from "../admin/overview/RecentWithdrawals";

const UserAnalytics = () => {
  const dispatch = useDispatch();
  // const [themeMode, setThemeMode] = useState();
  const theme = useSelector((state) => state.theme.dark);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const percentage = 67.5;
  let content;

  const [openDateFilter, setOpenDateFilter] = useState(false);

  const handleMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <section className="w-full   dark:bg-gray-700  ">
      <article className="">
        <div className="flex flex-row justify-between items-center mb-6">
          <button
            onClick={() =>
              dispatch(showModal({ modalData: null, currentModal: "Pay" }))
            }
            className="bg-brand-secondary flex flex-row items-center rounded-md space-x-2 px-4 font-medium py-2 text-[.85rem]"
          >
            <span className="text-green-600">
              <AiFillPlusCircle size={20} />
            </span>
            <span>NGN 0.00</span>
          </button>
          <h1 className="title-heading my-0 py-0 ">Good Morning Udemeobong </h1>
        </div>

        <section className="mt-2">
          <section className="">
            <article
              className="
              grid 
              grid-cols-1 
              md:grid-cols-2  
              lg:grid-cols-3 
              lg:grid-rows-1
              gap-x-4 
              gap-y-4  
               rounded-lg
            "
            >
              <StatCard
                Svg={<FaChartBar className="font-medium w-16 h-12  " />}
                currSymbol={`₦`}
                title="Earnings"
                mainAmt={`2,500,000`}
              />
              <StatCard
                Svg={
                  <AiOutlineShoppingCart className="font-medium w-16 h-12  " />
                }
                title="Bookings"
                mainAmt={`2,500,000`}
              />
              <StatCard
                Svg={
                  <AiOutlineReconciliation className="font-medium w-16 h-12   " />
                }
                title="Transactions"
                mainAmt={`2,500`}
              />
            </article>
          </section>
        </section>
        <div className="">
          <RecentDeposits />
          <RecentWithdrawals />
        </div>
        {/* 
        <div>
          <h2 className="font-semibold text-[1.2rem]">Latest Activity</h2>
          <ul className="space-y-4">
            <li className="marker:text-green-500 text-[.85rem] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              excepturi recusandae harum earum accusamus!
            </li>
            <li className="marker:text-rose-500 text-[.85rem] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              excepturi recusandae harum earum accusamus!
            </li>
            <li className="marker:text-green-500 text-[.85rem] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              excepturi recusandae harum earum accusamus!
            </li>
          </ul>
        </div> */}

        <div className=" flex flex-row items-center bg-brand-secondary my-6 rounded-lg px-6">
          <div className="w-1/2">
            <h2 className="text-[2rem] font-bold text-brand-text  ">
              Need something done ?{" "}
            </h2>
            <ul className="flex flex-row items-center list-none pb-3 text-[.85rem] font-medium py-2">
              <li>Post a task. </li>
              <li>Receive offers. </li>
              <li>Hire the best.</li>
              <li>Its that simple. </li>
            </ul>
            <Link to="/create/post-a-task">
              <button className="bg-brand-light border border-brand-light text-white font-medium text-[1rem]  px-6 py-1 rounded-full hover:bg-brand-light hover:text-white mt-4">
                Post a task
              </button>
            </Link>
            <p className="text-[.7rem] pt-4  flex flex-row items-center gap-x-2">
              <span>
                <AiOutlineInfoCircle size={12} className="text-brand-text" />
              </span>
              <span>How it works</span>
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://ouch-cdn2.icons8.com/0OjdSfNYYCI3vZOSeCDNz203S5Cz1EixHIIUCPAahT0/rs:fit:512:512/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE3/LzUxMWQyYWZmLTRi/MzQtNGFhOS04NzI5/LTE1M2VjNTdjODcy/OC5wbmc.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className=" space-y-8 py-5">
          <ul className="flex flex-row gap-x-4 items-center text-[.9rem] list-none font-medium text-brand-text">
            <li>View latest task offers</li>
            <li>My messages</li>
            <li>Primetasker Help</li>
            <li>See my metrics</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default UserAnalytics;
