import { Link, Outlet } from "react-router-dom";
import { useDispatchLogoutMutation } from "../../../features/auth/slices/authApiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDarkMode } from "../../../features/theme/themeSlice";
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
  FaMoon,
  FaRegBellSlash,
  FaSun,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const path = useLocation();
  const dispatch = useDispatch();
  const location = path.pathname.split("/").at(-1);
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

  const handleMode = () => {
    dispatch(setDarkMode());
  };

  const dashLinks = [
    { id: 1, text: "Overview", link: "/admin-dashboard", icon: <FaGlobe /> },
    {
      id: 2,
      text: "Tasks",
      link: "/admin-dashboard/tasks",
      icon: <FaRegClone />,
    },

    {
      id: 3,
      text: "Bookings",
      link: "/admin-dashboard/bookings",
      icon: <FaLayerGroup />,
    },

    {
      id: 4,
      text: "Users",
      link: "/admin-dashboard/users",
      icon: <FaUserFriends />,
    },
    {
      id: 5,
      text: "Messages",
      link: "/admin-dashboard/notes",
      icon: <FaRegEnvelope />,
    },
    {
      id: 6,
      text: "Transactions",
      link: "/admin-dashboard/properties",
      icon: <FaRegCreditCard />,
    },
    {
      id: 7,
      text: "Site Analytics",
      link: "/admin-dashboard/properties",
      icon: <FaChartBar />,
    },

    {
      id: 8,
      text: "Settings",
      link: "/admin-dashboard/settings",
      icon: <FaTools />,
    },
  ];

  return (
    <article className="flex  ">
      <section className=" sticky  h-screen w-52 bg-white dark:bg-gray-700 dark:text-gray-100 z-40  left-0  top-0  ">
        {/* <div className=" flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800"> */}
        <div className="flex flex-col top-0 left-0 w-16 lg:w-52 dark:text-white border-r dark:border-gray-600 pb-10   ">
          <div className="flex items-center justify-start mt-6 ">
            <div className="px-5">
              <div className="font-bold text-2xl flex flex-row space-x-2  text-purple-800 dark:text-gray-200  items-center">
                <FaArtstation />
                <h3 className="hidden lg:block">Primetasker </h3>
              </div>
              <p className="text-[13px] font-medium text-right hidden lg:block">
                Admin Dashboard
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
                      <span className="ml-4 text-[13px] leading-tight tracking-wider text-gray-600 font-medium tracking-wide truncate hidden lg:block">
                        {dashLink.text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* </div> */}

            <div className=" absolute  bottom-0  w-full">
              <ul className="mb-0 ">
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full relative flex flex-row items-center h-12 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-gray-200 text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaRegBell />
                    </span>
                    <span className="ml-2 text-[13px] leading-tight tracking-wider text-gray-500 font-semibold  truncate hidden lg:block">
                      Notifications
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full relative flex flex-row items-center h-12   focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-gray-200 text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
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
                    <span className="ml-2 text-[13px] leading-tight tracking-wider text-gray-500 font-semibold  truncate hidden lg:block">
                      Logout
                    </span>
                  </button>
                </li>
              </ul>

              <article className=" border px-2 py-2 lg:border-gray-200 dark:border-gray-600 lg:flex flex-row items-center rounded space-x-2.5  hidden w-full ">
                <div>
                  <img
                    src={avatar}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full"
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
      </section>

      <div className=" w-full mx-auto">
        <article className="flex items-center justify-between px-4  pb-3 bg-purple-800 dark:bg-gray-700 py-4 sticky top-0 z-40   border-gray-900 dark:border-gray-600 dark:border ">
          <div className="flex space-x-2 items-center  ">
            <h2 className="text-2xl text-gray-50 font-bold pl-2 capitalize">
              {location}
            </h2>
          </div>

          <div className="flex items-center   flex-row space-x-3 mr-6">
            <div className="mr-3 flex items-center space-x-4">
              <button
                onClick={() => handleMode()}
                className="text-[20px] text-gray-200 "
              >
                <FaRegBell />
              </button>
              <button
                onClick={() => handleMode()}
                className="text-[20px] text-gray-200"
              >
                <FaSun />
              </button>
            </div>
            <div className="bg-gradient-to-tr from-purple-200 via-amber-200 to-green-300 p-1 rounded-full ">
              <img
                src={`${avatar}`}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover object-fit"
              />
            </div>
          </div>
        </article>
        <div className="px-[20px]">
          <Outlet />
        </div>
        <footer className="bg-white py-3 text-center fixed bottom-0 right-0">
          <div className="flex flex-row items-center justify-between py-1.5 px-12">
            <nav>
              <ul className="flex space-x-3 text-purple-600 font-medium">
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

export default Sidebar;
