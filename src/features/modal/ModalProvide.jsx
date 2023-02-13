import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import FilterModal from "../../components/FilterModal";
import Megamenu from "../../components/Megamenu";
import OfferChat from "../../components/OfferChat";
import OfferModal from "../../components/OfferModal";
import ModalContent from "./ModalContent";
import { hideModal, showModal } from "./modalSlice";
import { motion } from "framer-motion";

const ModalProvider = ({ children }) => {
  let modalTitle;
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.modal.currentModal);

  let content;

  switch (currentModal) {
    case "addUser":
      modalTitle = "Create New User";
      content = <ModalContent modalTitle={`Create New User`} />;
      break;
    case "offerModal":
      modalTitle = "Make Offer";
      content = <OfferModal modalTitle={`Make Offer`} />;
      break;
    case "OfferChat":
      modalTitle = "Send Message";
      content = <OfferChat modalTitle={`Send Message`} />;
      break;

    default:
      content = "";
  }

  return (
    <div
      onClick={() => dispatch(hideModal())}
      className={`${
        currentModal ? "opacity-100" : "hidden opacity-0"
      } fixed z-50  w-full h-screen bg-gray-900/40 flex justify-center items-center transform:transition-transform duration-1000 ease-in delay-700`}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              y: -100,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
          }}
          className="bg-white rounded-lg  "
        >
          <div className="flex justify-between items-center  pt-3   rounded-t  pb-1 px-6  dark:border-gray-600">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-white mt-1 mb-1.5">
              {modalTitle}
            </h3>
            <button
              onClick={() => dispatch(hideModal())}
              type="button"
              className="text-purple-900  text-[18px] bg-transparent bg-gray-50  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <FaTimes />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default ModalProvider;
