// import { sendRange } from '../../../utils/DatePicker'
import { useState, useMemo, useEffect } from "react";
import { addDays, format, isValid } from "date-fns";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaChartBar, FaEnvelope } from "react-icons/fa";
// import { MdOutlineErrorOutline, MdErrorOutline } from "react-icons/md";
import {
  AiOutlineReconciliation,
  // AiOutlineUser,
  AiOutlineShoppingCart,
  // AiOutlineInfo,
  AiOutlineInfoCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

import { useGetBookingStatsQuery } from "../../../features/bookings/slices/bookingApiSlice";

import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../../features/theme/themeSlice";
import StatCard from "../../../utils/StatCard";

import { Link } from "react-router-dom";

import { showModal } from "../../../features/modal/modalSlice";
import RecentDeposits from "../admin/overview/RecentDeposits";
import RecentWithdrawals from "../admin/overview/RecentWithdrawals";
import { useGetUserByIdQuery } from "../../../features/users/slices/UserApiSlice";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../../utils/Spinner";

const UserAnalytics = () => {
  const notifications = [
    // {
    //   id: 1,
    //   type: "offer",
    //   who: "Kennaya Jones",
    //   amount: 5000,
    //   taskTitle: "Build a house in Abuja",
    // },
    // {
    //   id: 2,
    //   type: "offer",
    //   who: "Kambili Jonas",
    //   amount: 5000,
    //   taskTitle: "Build a house in Abuja",
    // },
    // {
    //   id: 3,
    //   type: "offer",
    //   who: "Kambili Jonas",
    //   amount: 5000,
    //   taskTitle: "Build a house in Abuja",
    // },
    // {
    //   id: 4,
    //   type: "offer",
    //   who: "Kambili Jonas",
    //   amount: 5000,
    //   taskTitle: "Build a house in Abuja",
    // },
    // {
    //   id: 5,
    //   type: "offer",
    //   who: "Kambili Jonas",
    //   amount: 5000,
    //   taskTitle: "Build a house in Abuja",
    // },
  ];
  const dispatch = useDispatch();
  // const [themeMode, setThemeMode] = useState();
  const theme = useSelector((state) => state.theme.dark);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const percentage = 67.5;
  let content;

  const { id: userId } = useAuth();

  const [user, setUser] = useState();

  const [openDateFilter, setOpenDateFilter] = useState(false);

  const handleMode = () => {
    dispatch(setDarkMode());
  };

  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

  useEffect(() => {
    if (userData) {
      const { ids, entities } = userData;

      let user = entities[ids[0]];

      setUser(user);
    }
  }, [userData]);
  console.log(user);

  const unreadNotifications = useMemo(
    () =>
      notifications.map((notification) =>
        notification.type === "offer" ? (
          <li className=" flex flex-row items-center px-2 gap-4 py-2.5 rounded-md border-gray-300 bg-brand-secondary ">
            <div>
              <FaEnvelope size={20} className="text-brand-accent" />
            </div>
            <div>
              {/* <h2 className="text-primary italic text-[.8rem] font-bold">
                Offer
              </h2> */}
              <p className="text-[.75rem]">
                An offer of NGN {notification.amount} has been made on your task
                by {notification.who}.
                <Link className="text-primary text-brand-accent underline pl-2 text-[.8rem]">
                  View Offer
                </Link>
              </p>
            </div>
          </li>
        ) : null
      ),
    [notifications]
  );

  return (
    <>
      {user ? (
        <section className="w-full   dark:bg-gray-700  ">
          <article className="">
            <div className="flex flex-row justify-between items-center mb-6">
              <button
                onClick={() =>
                  dispatch(showModal({ modalData: null, currentModal: "Pay" }))
                }
                className="bg-brand-secondary flex flex-row items-center rounded-md space-x-2 px-4 font-medium py-2 text-primary "
              >
                <span className="text-brand-text">
                  <AiFillPlusCircle size={20} />
                </span>
                <span className="text-primary">
                  NGN {user.balance?.toLocaleString()}
                </span>
              </button>
              <h1 className="title-heading my-0 py-0 ">
                Good Morning {user.firstname}
              </h1>
            </div>

            <section className="mt-2 mb-8">
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

            <div className=" flex flex-row-reverse items-center bg-brand-secondary my-6 rounded-lg px-6 ">
              <div className="w-2/3 pl-4">
                <h2 className="text-[1.3rem] font-bold text-brand-text  ">
                  Start Earning with Primetasker ?{" "}
                </h2>
                <ul className="flex flex-row justify-start items-start list-none pb-3 text-[.8rem] font-medium py-2">
                  <li>Post a task. </li>
                  <li>Receive offers. </li>
                  <li>Hire the best.</li>
                  <li>Its that simple. </li>
                </ul>
                <div className="flex flex-row gap-4 mt-2">
                  <Link to="/tasks">
                    <button className="bg-brand-light text-white text-primary py-2 px-6 rounded-md">
                      Earn Money
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 ">
                <img
                  src="https://ouch-cdn2.icons8.com/0OjdSfNYYCI3vZOSeCDNz203S5Cz1EixHIIUCPAahT0/rs:fit:512:512/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE3/LzUxMWQyYWZmLTRi/MzQtNGFhOS04NzI5/LTE1M2VjNTdjODcy/OC5wbmc.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className="rounded-md my-4 ">
              <h2 className="text-primary text-[1rem] py-3">Latest Activity</h2>

              {notifications.length > 0 ? (
                <div className="py-4">
                  <ul className="  text-primary flex flex-col gap-y-3">
                    {unreadNotifications}
                  </ul>
                </div>
              ) : (
                <div className="h-[30vh] bg-brand-secondary rounded-md ">
                  <div className="flex flex-col items-center justify-center  space-y-5 text-primary h-full">
                    <p>No activity recorded at this time </p>
                    <Link
                      to="create"
                      className="bg-brand-light px-6 py-2.5 text-primary text-white rounded-md  "
                    >
                      Create
                    </Link>
                  </div>
                </div>
              )}
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
      ) : (
        <div className="h-full w-full justify-center items-center flex ">
          <Spinner visible color="green" height={200} width={200} />
        </div>
      )}
    </>
  );
};

export default UserAnalytics;
