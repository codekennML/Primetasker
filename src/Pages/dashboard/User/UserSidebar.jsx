import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatchLogoutMutation } from "../../../features/auth/slices/authApiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLayerGroup,
  FaGlobe,
  FaRegBell,
  FaRegClone,
  FaTools,
  FaRegEnvelope,
  FaChartBar,
  FaCog,
  FaFingerprint,
  FaSun,
  FaComments,
  FaChevronLeft,
  FaCoins,
  FaClipboardList,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";
import CustomFileUpload from "../../../utils/CustomFieldComp/CustomFileUpload";
import useAuth from "../../../hooks/useAuth";
// import { AiOutlineUser } from "react-icons/ai";
import { Form, Formik } from "formik";
import { useState } from "react";
import { MdPayments } from "react-icons/md";

const UserSidebar = () => {
  const { username, email, status, avatar } = useAuth();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(undefined);

  const dashLinks = [
    { id: 1, text: "Overview", link: "/dashboard", icon: <FaGlobe /> },

    {
      id: 2,
      text: "Identity",
      link: "/dashboard/verify",
      icon: <FaFingerprint />,
    },
    // {
    //   id: 3,
    //   text: "My tasks",
    //   link: "/my-tasks/",
    //   icon: <FaClipboardList />,
    // },
    {
      id: 4,
      text: "Messages",
      link: "/dashboard/messages",
      icon: <FaComments />,
    },
    {
      id: 5,
      text: "Transactions",
      link: "transactions/",
      icon: <FaCoins />,
    },

    {
      id: 6,
      text: "Create",
      link: "/dashboard/create",
      icon: <FaRegClone />,
    },

    {
      id: 7,
      text: "Settings",
      icon: <FaCog />,
      children: [
        {
          id: 1,
          parentId: 6,
          text: "Profile",
          link: "settings/my-profile",
          icon: <FaUser />,
        },
        {
          id: 2,
          text: "Portfolio",
          parentId: 6,
          link: "settings/my-portfolio",
          icon: <FaBriefcase />,
        },
        {
          id: 3,
          text: "Notifications",
          parentId: 6,
          link: "settings/my-alert-settings",
          icon: <FaComments />,
        },
        {
          id: 3,
          text: "Showcase",
          parentId: 6,
          link: "settings/my-showcase",
          icon: <FaComments />,
        },
      ],
    },
  ];

  const handleSelected = (id) => {
    if (selected === id) {
      setSelected(undefined);
    } else {
      setSelected(id);
    }
  };

  // ${
  //   isChild && selected === items.parentId ? "h-0" : "h-0 opacity-100 "
  // }

  const renderLink = (items, isChild = false) => {
    const content = (
      <Link
        to={items.link}
        // className=""
        className={` { 
        }  relative flex flex-row   `}
      >
        <span className=" justify-center items-center ml-4 text-gray-600 dark:text-gray-200">
          {items.icon}
        </span>
        <span
          className="   ml-4 font-medium tracking-wide truncate hidden lg:block text-brand-text-deep}
       "
        >
          {items.text}
        </span>

        {/* {items.text} */}
      </Link>
    );

    return content;
  };

  const renderList = (items) => {
    let content;

    if (items.hasOwnProperty("children")) {
      content = (
        <div
          className={
            selected === items.id
              ? "absolute top-0 z-10 bottom-0 left-0 right-0 bg-slate-100"
              : ""
          }
        >
          <button
            onClick={() => handleSelected(items.id)}
            className="flex items-center  w-full "
          >
            <span className="inline-flex justify-center items-center ml-4 text-gray-600 dark:text-gray-200">
              {selected === items.id ? <FaChevronLeft /> : items.icon}
            </span>
            <span className="ml-4  font-medium tracking-wide truncate hidden lg:block text-brand-text-deep">
              {items.text}
            </span>
          </button>

          <ul
            className={`${
              selected === items.id ? " h-full opacity-100 " : "h-0 opacity-0  "
            } transition duration-500 ease-in-out flex flex-col gap-y-6 mt-5 px-3`}
          >
            {items.children.map((item, idx) => {
              return (
                <li key={idx} className="text-[.8rem]  ">
                  {renderLink(item, true)}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      content = renderLink(items);
    }

    return content;
  };

  return (
    <div className="mx-auto w-[70%] max-h-screen">
      <article className="flex  flex-row  mt-6  ">
        <section className=" flex flex-row lg:flex-row sticky top-24 left-0  w-[25%]  dark:bg-gray-700 dark:text-gray-100 z-10 overflow-x-hidden h-full rounded-[2rem]  ">
          <div className=" flex flex-col flex-auto flex-shrink-0 antialiased bg-brand-secondary dark:bg-gray-800/50 text-gray-800">
            <div className="flex flex-col top-0 left-0   dark:text-white border-r dark:border-gray-700 pb-10   ">
              <Formik initialValues={{ avatar: "" }}>
                {(values) => {
                  return (
                    <Form className="flex justify-center ">
                      <div className=" w-[140px] h-[140px] rounded-full bg-green-200 p-1 my-6">
                        <img
                          src={avatar}
                          className="w-full h-full object-center object-cover rounded-full"
                        />
                        <div className="mt-3 text-brand-text-deep font-semibold">
                          {email}
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="overflow-hidden flex-grow mt-10 relative">
                <ul className="flex flex-col  gap-y-6 relative px-3">
                  {dashLinks.map((dashLink) => {
                    return (
                      <li key={dashLink.id} className="text-[.85rem]">
                        {renderList(dashLink)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="w-[75%] mx-auto ml-6  flex flex-col px-6  rounded-xl ">
          <Outlet />
        </div>
      </article>
    </div>
  );
};

export default UserSidebar;
