import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAnyModal } from "../../modal/modalSlice";

import {
  selectUserById,
  useDeleteUserMutation,
  useGetUserByIdQuery,
} from "../slices/UserApiSlice";

const DeleteUser = ({ userId }) => {
  const [deleteUser, { isLoading, isError }] = useDeleteUserMutation(userId);

  const deleteOneUser = async () => {
    try {
      // console.log(id);
      const response = await deleteUser({ id: userId });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" px-4 text-center  rounded-lg bg-white dark:bg-gray-800">
      <h3 className="pb-4 font-bold text-lg">Confirm User Removal</h3>
      <div className="bg-[#feecdc] w-[500px]  mb-4 mx-auto text-xs text-left p-4 text-[#d48037] rounded-lg">
        <p className="text-red-600 mb-2 text-sm">Warning</p>

        <p className="text-[#cf8748]">
          By deleting this user, you agree to the permanent removal of all of
          this user details(including but not limited to tasks, personal
          information and associated posts )
        </p>
      </div>
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Are you sure you want to delete this User?
      </p>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => dispatch(closeAnyModal())}
          data-modal-toggle="deleteModal"
          type="button"
          className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
        <button
          onClick={() => deleteOneUser()}
          type="submit"
          className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Yes, I'm sure
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
