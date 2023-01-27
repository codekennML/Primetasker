import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatchLogoutMutation } from "../../../features/auth/slices/authApiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArtstation,
  FaLayerGroup,
  FaGlobe,
  FaUserFriends,
  FaRegCreditCard,
  FaRegBell,
  FaRegClone,
  FaTools,
  FaRegEnvelope,
  FaChartBar,
  FaCog,
  FaFingerprint,
  FaSun,
} from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";
import { AiOutlineUser } from "react-icons/ai";

const UserSidebar = () => {
  const { username, email, status, avatar } = useAuth();
  const navigate = useNavigate();

  const [dispatchLogout, { isLoading, isSuccess, isError, error }] =
    useDispatchLogoutMutation();
  const handleLogout = () => dispatchLogout();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);
  if (isLoading) return <p>Logging Out....</p>;
  if (isError) return <>{console.log("cant logout")}</>;

  const dashLinks = [
    { id: 1, text: "Overview", link: "/dashboard", icon: <FaGlobe /> },
    {
      id: 2,
      text: "Verify",
      link: "/dashboard/verify",
      icon: <FaFingerprint />,
    },

    {
      id: 3,
      text: "Create",
      link: "/dashboard/create",
      icon: <FaLayerGroup />,
    },

    {
      id: 4,
      text: "Explore",
      link: "/dashboard/explore",
      icon: <FaRegCreditCard />,
    },

    {
      id: 5,
      text: "Pay",
      link: "/dashboard/account-pay",
      icon: <FaRegEnvelope />,
    },

    {
      id: 6,
      text: "Profile",
      link: "/dashboard/profile",
      icon: <AiOutlineUser />,
    },

    {
      id: 7,
      text: "Settings",
      link: "/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <article className="flex  flex-row mx-40 ">
      <section className=" flex flex-row lg:flex-row fixed w-56  dark:bg-gray-700 dark:text-gray-100 z-10 overflow-x-hidden h-full rounded-l-lg  ">
        <div className=" flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 dark:bg-gray-800/50 text-gray-800">
          <div className="flex flex-col top-0 left-0 w-[400px] lg:w-56 dark:text-white border-r dark:border-gray-700 pb-10   ">
            <div className="flex items-center justify-start mt-6 ">
              <div className="px-5">
                <div className="font-bold text-2xl flex flex-row space-x-2  text-indigo-800 dark:text-gray-200  items-center">
                  <FaArtstation />
                  <h3 className="hidden lg:block">Primetasker </h3>
                </div>
                <p className="text-[13px] font-medium text-right hidden lg:block">
                  User Dashboard
                </p>
              </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow mt-3">
              <ul className="flex flex-col py-4 space-y-1">
                {dashLinks.map((dashLink) => {
                  return (
                    <li key={dashLink.id}>
                      <Link
                        to={dashLink.link}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4 text-gray-600 dark:text-gray-200">
                          {dashLink.icon}
                        </span>
                        <span className="ml-4 text-[15px] font-medium tracking-wide truncate hidden lg:block">
                          {dashLink.text}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* </div> */}

              <div className=" absolute  bottom-0  w-full">
                <ul className="mb-0">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full relative flex flex-row items-center h-12 focus:outline-none hover:bg-gray-50 text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <FaRegBell />
                      </span>
                      <span className="ml-2 text-[14px] font-semibold tracking-wide truncate hidden lg:block">
                        Notifications
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full relative flex flex-row items-center h-12   focus:outline-none hover:bg-gray-50 text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-[14px] font-semibold tracking-wide truncate hidden lg:block">
                        Logout
                      </span>
                    </button>
                  </li>
                </ul>

                <article className=" border px-2 py-2  lg:border-gray-200 lg:flex flex-row justify-between items-center rounded space-x-2.5  hidden w-full ">
                  <div className="p-1 ">
                    <img
                      src={avatar}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-semibold">{`${
                      username ? username : "User"
                    }`}</h5>
                    <p className="text-[12px]  ">{`@${status}`}</p>
                  </div>
                  <div></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pl-56  mx-auto w-full h-full">
        <Outlet />
        <footer className="bg-white dark:bg-gray-700 py-3 text-center fixed left-[370px] right-0 bottom-0  px-12 ">
          <div className="flex flex-row justify-between items-center  py-1.5 text-[13px] px-4  ">
            <nav>
              <ul className="flex space-x-3  text-purple-600 font-medium">
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
        </footer>
      </div>
    </article>
  );
};

export default UserSidebar;
