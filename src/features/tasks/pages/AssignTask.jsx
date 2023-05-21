import React, { useState, useCallback } from "react";
import ModalHead from "../../../components/ModalHead";
import { useAssignTaskMutation } from "../slices/taskApiSlice";
import Button from "../../../ui/Button";
import { useDispatch } from "react-redux";
import { hideModal } from "../../modal/modalSlice";
import { notifyErr, notifySuccess } from "../../../hooks/NotifyToast";

const AssignTask = ({ offer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [assignTask] = useAssignTaskMutation();

  const handleAssignTask = useCallback(async () => {
    console.log(offer);

    const assignmentDetails = {
      taskId: offer.taskId,
      assigneeId: offer.createdBy._id,
      offerId: offer._id,
      amount: offer.offerAmount + 600,
    };

    try {
      setIsLoading(true);
      const response = await assignTask(assignmentDetails).unwrap();
      if (response && response.status === 200) {
        notifySuccess("Task has been assigned successfully");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      notifyErr(err.message);
    } finally {
      setIsLoading(false);
      dispatch(hideModal());
    }
  }, [offer]);

  return (
    <section>
      <ModalHead title="Confirm Assignment" />

      <div className="p-8 space-y-4 text-primary  ">
        <h2 className="text-center text-primary text-[1.2rem]">
          Task Cost Summary
        </h2>
        <div className="w-full flex flex-row items-center  ">
          <p> Booking Fee </p>
          <hr className="flex-1  border-dotted  mx-2" />
          <p> 600 </p>
        </div>
        <div className="w-full flex flex-row items-center ">
          <p> Tasker offer </p>
          <hr className="flex-1  border-dotted mx-2" />
          <p> {offer.offerAmount} </p>
        </div>
        <div className="w-full flex flex-row items-center ">
          <p> Total Bill </p>
          <hr className="flex-1  border-dotted  mx-2" />
          <p>{offer.offerAmount + 600}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            text="Close"
            onClick={() => dispatch(hideModal())}
            primary={false}
            fullWidth
          />
          <Button
            text="Assign Now"
            onClick={handleAssignTask}
            primary
            fullWidth
            submissionText="Assigning task"
            isSubmitting={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default AssignTask;
