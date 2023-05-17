import React from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../features/modal/modalSlice";
import { FaTimes } from "react-icons/fa";
const ModalHead = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full border-b flex justify-between bg-white items-center pt-3 rounded-t pb-1 px-6 dark:border-gray-600 ">
        <div className="flex-1 overflow-x-hidden px-4  md:pt-0">
          <h3 className="text-[1rem]  md:text-[1.2rem] font-medium text-brand-text dark:text-white  mb-1.5">
            {title}
          </h3>
        </div>
        <button
          onClick={() => dispatch(hideModal())}
          type="button"
          className=" text-[17px] bg-transparent text-gray-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="defaultModal"
        >
          <FaTimes />
          <span className="sr-only">Close modal</span>
        </button>
      </div>
    </>
  );
};

export default ModalHead;
