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
import TaskVerify from "../tasks/pages/TaskVerify";
import Pay from "../payment/Pay";
import AlertCreate from "../../Pages/dashboard/User/AlertCreate";
import SkillModal from "../../Pages/dashboard/User/SkillModal";
import OfferGate from "../Offers/pages/OfferGate";
import AssignTask from "../tasks/pages/AssignTask";

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
      const taskId = modalData;
      content = <OfferModal modalTitle={`Make Offer`} taskId={taskId} />;
      break;
    case "OfferChat":
      modalTitle = "Send Message";
      const comment = modalData;
      content = <OfferChat modalTitle={`Send Message`} comment={comment} />;
      break;
    case "homepageVideo":
      modalTitle = "videoModal";
      content = <VideoModal modalTitle={`How it works`} />;
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

    case "AssignTask":
      const offer = modalData;
      console.log(offer);
      content = <AssignTask offer={offer} />;
      break;

    case "TaskVerifyModal":
      const taskData = modalData;
      content = <TaskVerify task={taskData} />;
      break;

    case "unverifiedModal":
      content = <OfferGate />;
      break;

    case "Pay":
      content = <Pay />;
      break;

    case "createAlert":
      content = <AlertCreate />;
      break;

    case "skillModal":
      content = <SkillModal />;
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
        } fixed z-50 inset-0 bg-gray-900/70  transition-transform duration-1000 ease-in delay-700 flex `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed w-full  max-w-full md:absolute  md:max-w-[500px]  z-5  md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2  "
        >
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
            className=" bg-white  rounded-2xl  "
          >
            {content}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ModalProvider;
