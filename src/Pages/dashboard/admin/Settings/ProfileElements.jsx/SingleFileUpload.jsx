import { useEffect, useState } from "react";
import { useAddNewFileMutation } from "../../../../../features/fileUploads/uploadProgressSlice";
const SingleFileUpload = ({ file }) => {
  // const[progress, setProgress] =  useState()

  const [addNewFile, { isLoading, isSuccess, isError, error }] =
    useAddNewFileMutation();

  console.log(addn);

  return (
    <div>
      {/* {progress} */}
      Hello
    </div>
  );
};

export default SingleFileUpload;
