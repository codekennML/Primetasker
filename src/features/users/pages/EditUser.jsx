import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectUserById, useGetUserByIdQuery } from "../slices/UserApiSlice";
const EditUser = ({ userId }) => {
  //   const { data, isLoading, isSuccess, isError } =
  //   const usermum = "6398785ab7965b1bd9a0c835";
  //   console.log(userId)
  const user = useSelector((state) =>
    selectUserById(state, "6398785ab7965b1bd9a0c835")
  );

  return <div>Heya</div>;
};
export const memoizedEditUser = memo(EditUser);
export default memoizedEditUser;
