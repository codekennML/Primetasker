import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showModal } from "../../../features/modal/modalSlice";
const CreateAlert = () => {
  const dispatch = useDispatch();

  const showAlertModal = () => {
    dispatch(
      showModal({
        currentModal: "createAlert",
        modalData: null,
      })
    );
  };

  return (
    <>
      <div>
        <h2 className="font-bold text-[1.6rem]">Task Alerts</h2>

        <h3 className="font-semibold text-[1rem] pt-4 text-brand-text">
          Recommended Task Alerts
        </h3>
        <p className="w-[80%] my-4 mb-8">
          Get notified about personalised tasks we think you'd be interested in
          based on your activity on Primetasker.
        </p>
        <Link
          to="/dashboard/settings/my-alert-settings"
          className="bg-brand-secondary rounded-full py-3.5 px-6 text-primary "
        >
          Manage alerts
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-[1rem] pt-4 text-brand-text">
          Keyword Alert{" "}
        </h2>
        <p className="w-[80%] my-4">
          Add your own alerts and we'll notify you every time a task matching to
          your keywords is posted.{" "}
        </p>
        <button
          onClick={showAlertModal}
          className="bg-brand-secondary rounded-full py-3.5 px-12 text-primary "
        >
          Add alert
        </button>
      </div>
    </>
  );
};

export default CreateAlert;
