import {
  FaLayerGroup,
  FaGlobe,
  FaUserFriends,
  FaRegCreditCard,
  FaRegEnvelope,
  FaUserCircle,
  FaSwatchbook,
  FaMoneyCheck,
  FaRegMoneyBillAlt,
  FaRegIdCard,
  FaRegUser,
  FaAirbnb,
  FaObjectGroup,
  FaGlobeAfrica,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const SideTab = () => {
  const setLinks = [
    {
      id: 1,
      text: "My details",
      link: "/dashboard/settings",
      icon: <FaUserCircle />,
    },
    {
      id: 2,
      text: "Theme",
      link: "theme",
      icon: <FaSwatchbook />,
    },

    {
      id: 3,
      text: "Users",
      link: "users",
      icon: <FaUserFriends />,
    },

    {
      id: 6,
      text: "Categories",
      link: "categories",
      icon: <FaObjectGroup />,
    },
    {
      id: 7,
      text: "Cities",
      link: "Cities",
      icon: <FaGlobeAfrica />,
    },
  ];

  return (
    <article class="flex flex-row ">
      <div class="h-screen  pt-6 w-[250px] max-w-[300px] border-r sticky left-0 top-0">
        <div class="flex flex-row space-x-1 items-center px-4">
          {/* <p class="text-[20px]"><FaAirbnb /></p> */}
          <h2 class=" text-gray-600 font-bold py-3">General Settings</h2>
        </div>
        <form action="sticky top-2 mb-4">
          {/* <div class="relative px-4 pt-1  ">
        <div class="absolute inset-y-0 left-0 flex items-center pl-8 pt-1 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-indigo-500 block w-full outline-none pl-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
    </div> */}
        </form>
        <ul class="flex flex-col  space-y-1 text-gray-500 mt-3 ">
          {setLinks.map((setLink) => {
            return (
              <li key={setLink.id}>
                <Link
                  to={setLink.link}
                  class="relative flex flex-row items-center  h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6"
                >
                  <span class="inline-flex justify-center items-center ml-4 text-gray-500">
                    {setLink.icon}
                  </span>
                  <span class="ml-4 text-[13px] font-medium tracking-wide truncate">
                    {setLink.text}
                  </span>
                  {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span> */}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div class="flex-1">
        <Outlet />
      </div>
    </article>
  );
};

export default SideTab;
