import { FaArrowRight, FaArrowUp, FaEllipsisV } from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const StatCard = ({
  Svg,
  title,
  mainAmt,
  currSymbol,
  changePercent,
  changeAmount,
  timeframe,
  isAdmin = false,
}) => {
  const links = [
    { href: "/account-settings", label: "Last 7 days" },
    { href: "/support", label: "Last 30 days" },
    { href: "/license", label: "Last 365 days" },
  ];
  return (
    <div
      className="tab cards border-2 
  rounded-xl py-4 bg-white dark:bg-gray-800 dark:border-gray-600  p-2 text-sm text-gray-600  px-3"
    >
      <article className="flex flex-row justify-between items-center text-gray-500  ">
        <div className="  text-brand-light p-2 rounded-xl ">
          {Svg ? Svg : ""}
        </div>

        <div className="flex-1 w-full px-2">
          <article className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-brand-text-deep dark:text-gray-400">
              {title}
            </h3>

            <Menu as="div" className="relative   ">
              <Menu.Button className="p-2  rounded-full text-purple-800">
                {/* <button > */}
                <FaEllipsisV />
                {/* </button> */}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={`absolute z-50 right-0 top-8  flex flex-col w-32   shadow-md py-1 `}
                >
                  {links.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item
                      key={link.href}
                      as={"div"}
                      className="w-full rounded-lg "
                    >
                      {({ active }) => (
                        <button
                          className={`w-full  px-3 py-1 text-sm font-medium ${
                            active
                              ? "bg-violet-100 text-gray-600 text-left "
                              : "bg-white text-black text-left"
                          }`}
                        >
                          {link.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </article>

          <article className="flex flex-row items-center space-x-1 mt-2 ">
            <h3 className="text-[18px] font-semibold mr-2 text-gray-800 dark:text-gray-400 ">
              {currSymbol ? currSymbol : ``} {mainAmt ? mainAmt : ""}
            </h3>
          </article>
          {isAdmin && (
            <article className="flex flex-row space-x-4 justify-between items-center mt-3">
              <div className="flex flex-row items-center ">
                <div className="inline-flex flex-row font-sans items-center space-x-2 ">
                  <p className="inline-flex items-center text-gray-500 space-x-1">
                    <span>
                      <FaArrowRight className="-rotate-45 text-xs text-red-800 " />
                    </span>
                    <span className="font-medium">
                      {" "}
                      {changePercent ? `${changePercent}% ` : ""}
                    </span>
                  </p>

                  <p className="text-[15px]  inline-flex items-center text-xs text-gray-600 font-medium space-x-1">
                    <span>
                      <FaArrowUp className="text-xs text-green-700 " />
                    </span>
                    <span>
                      {currSymbol ? currSymbol : ""}{" "}
                      {changeAmount ? `${changeAmount} ${timeframe}` : ""}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>
      </article>
    </div>
  );
};

export default StatCard;
