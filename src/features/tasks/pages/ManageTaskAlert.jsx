import React from "react";
import { Link } from "react-router-dom";
import { showModal } from "../../modal/modalSlice";
import { useDispatch } from "react-redux";

const ManageTaskAlert = ({ taskId }) => {
  const dispatch = useDispatch();

  const openTaskManageDialog = () => {
    dispatch(
      showModal({
        currentModal: "TaskVerifyModal",
        modalData: taskId,
      })
    );
  };

  return (
    <>
      <article className="bg-brand-secondary rounded-md px-4 py-6 text-primary">
        <div>
          <h2 className="text-[1.4rem] font-bold">Heads up ! </h2>
        </div>

        <div className="">
          <p className="py-3">
            You have assigned this task to{" "}
            <span className="text-brand-accent underline">Kennaya Xerxes </span>
          </p>
          <div className=" mt-3 ">
            <button
              onClick={openTaskManageDialog}
              to={`/dashboard/track/?${taskId}`}
              className="text-primary rounded-md px-4 border border-brand-light/90 text-brand-text py-2.5 hover:bg-brand-light hover:text-white "
            >
              Manage Task
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ManageTaskAlert;
