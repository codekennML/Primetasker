import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import FilterModal from "../../components/FilterModal";
import Megamenu from "../../components/Megamenu";
import OfferChat from "../../components/OfferChat";
import OfferModal from "../../components/OfferModal";
import ModalContent from "./ModalContent";
import { hideModal, showModal } from "./modalSlice";
import { AnimatePresence, motion } from "framer-motion";
import VideoModal from "../../components/VideoModal";
import CommentImage from "../../components/CommentImage";
import PostTask from "../tasks/pages/PostTask/PostTaskForm";
import NewFlag from "../flags/pages/NewFlag";

const ModalProvider = ({ children }) => {
  let modalTitle;
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.modal.currentModal);
  const modalData = useSelector((state) => state.modal.modalData);
  // const [reveal, setReveal] = console.log(currentModal);
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
      const comment = modalData;
      content = <OfferChat modalTitle={`Send Message`} comment={comment} />;
      break;
    case "homepageVideo":
      modalTitle = "videoModal";
      content = <VideoModal modalTitle={`hOW it workd`} />;
      break;
    case "CommentImages":
      const files = modalData;
      content = <CommentImage files={files} modalTitle="View Images" />;
      break;
    case "similarTask":
      const task = modalData;
      content = <PostTask initialValues={task} modalTitle="" />;
      break;

    case "Flag":
      const flagDetails = modalData;
      modalTitle = "Make a report ";
      content = <NewFlag flagDetails={flagDetails} />;
      break;

    default:
      content = "";
  }

  return (
    <AnimatePresence>
      <div
        onClick={() => dispatch(hideModal())}
        className={`${
          currentModal ? "" : "hidden"
        } fixed z-50 w-full h-screen bg-gray-900/50 flex justify-center items-center transition-transform duration-1000 ease-in delay-700`}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <motion.div
            initial={{
              y: currentModal ? 0 : -100,
              opacity: currentModal ? 0.5 : 0,
            }}
            animate={{
              y: currentModal ? 0 : -100,
              opacity: currentModal ? 1 : 0,
              transition: { delay: 0, duration: 0.6 },
            }}
            className="rounded-lg bg-white"
          >
            {modalTitle !== "videoModal" && (
              <div className="flex justify-between bg-white items-center pt-3 rounded-t pb-1 px-6 dark:border-gray-600 border-b">
                <h3 className="text-lg font-semibold text-purple-800 dark:text-white mt-1 mb-1.5">
                  {modalTitle}
                </h3>
                <button
                  onClick={() => dispatch(hideModal())}
                  type="button"
                  className="text-purple-900 text-[18px] bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <FaTimes />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            )}
            {content}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ModalProvider;
