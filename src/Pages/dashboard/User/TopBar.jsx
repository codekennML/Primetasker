import React from "react";
import { FaSun } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../../features/theme/themeSlice";

const TopBar = ({ headerText }) => {
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setDarkMode());
  };
  return (
    <article className="flex items-center justify-between px-4   pb-3 bg-purple-700 dark:bg-gray-700 py-4 sticky top-0 z-50   border-gray-900 dark:border-gray-500 dark:border rounded-r-lg ">
      <div className="flex space-x-2 items-center  ">
        <h2 className=" capitalize text-white font-medium font-sans text-xl dark:text-gray-100 font-sans">
          {headerText}
        </h2>
      </div>

      <div className="flex items-center   flex-row space-x-3 mr-6">
        <div className="mr-3">
          <button onClick={() => handleMode()} className="text-[20px]">
            <FaSun />
          </button>
        </div>
        <div className="bg-gradient-to-tr from-pink-300 via-green-300 to-orange-300 p-1 rounded-full  ">
          <img
            src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
      </div>
    </article>
  );
};

export default TopBar;
