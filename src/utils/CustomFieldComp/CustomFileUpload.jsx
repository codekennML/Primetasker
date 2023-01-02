import { useField } from "formik";
import { FaPencilAlt } from "react-icons/fa";
import Image from "../Image";
import { useDropzone } from "react-dropzone";
import { memo, useCallback, useEffect, useState } from "react";
import { useAddNewFileMutation } from "../../features/fileUploads/uploadApiSlice";
import useAuth from "../../hooks/useAuth";

const FileUpload = ({ label, float, name, ...props }) => {
  const [imgUrl, setImgUrl] = useState();
  const { avatar } = useAuth();

  const [addNewFile, { isError }] = useAddNewFileMutation();
  // const [avatarCloud, setAvatarCloud] = useState("");
  const [avatarImg, setAvatarImg] = useState([]);
  const onFileDialogOpen = useCallback(() => {
    {
      if (avatarImg.length > 0) {
        setAvatarImg([]);
      }
    }
  }, [avatarImg]);

  const [field, meta, helpers] = useField(name);

  const { setValue } = helpers;

  useEffect(
    (avatar, imgUrl) => {
      imgUrl ? imgUrl : avatar;
    },
    [avatar, imgUrl]
  );

  //  This block of code runs the selection of the avatar image for upload to cloudinary

  const maxSize = 1242880; //Max size of avatar image 1.24MB
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Set the avatarImg State to the file that was uploaded
      const mappedAcc = acceptedFiles.map((file) => ({
        file,
        error: [],
      }));
      setAvatarImg((prevState) => {
        return [...prevState, ...mappedAcc];
      });
    },
    [avatarImg]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize,
    onFileDialogOpen,
    accept: {
      "image/*": [],
    },
  });
  //  Avatar Image Selection End here

  // This block of code runs a useEffect that uploads the avatar to cloudinary and returns the secure_url for upload to DB

  useEffect(() => {
    const filesToUpload = [];

    avatarImg.map((fileWrapper) => {
      const { file } = fileWrapper;

      const { name } = file;

      if (!fileWrapper?.errors?.length) {
        let data = new FormData();
        data.append("file", file);
        filesToUpload.push(data);
        filesToUpload.push(name);

        uploadAvatar(filesToUpload);
      }
      // console.log()
      async function uploadAvatar(data) {
        const response = await addNewFile(data);

        const { secure_url } = JSON.parse(response?.data?.response);
        // imgUrl = secure_url;
        setImgUrl(secure_url);
        setValue(secure_url);
        // setTimeout(() => {
        //   setAvatarCloud(secure_url);
        // }, 1500);

        // console.log(secure_url);
      }
    });
  }, [avatarImg]);
  // End of Cloudinary Upload

  const errorStyle = "border border-rose-400 ";
  const validStyle = "border-gray-400 border";
  const invalid = meta.touched && meta.error;
  return (
    <div
      {...getRootProps()}
      className={`${
        float === "absolute" ? "absolute left-[5%] top-[27%]" : ""
      } top border-2 rounded-full p-1 bg-gradient-to-bl from-violet-200/40 to-gray-200/40`}
    >
      <Image
        width={`150px`}
        height={`150px`}
        avatar={imgUrl ? imgUrl : avatar}
      />

      <button
        type="button"
        className="absolute right-3 bottom-2 p-2 bg-purple-800 rounded-full text-white text-xs"
      >
        <input {...getInputProps()} />
        <FaPencilAlt />
      </button>
      <label htmlFor={props.name} className="">
        {label}
      </label>
      {/* <input
        {...field}
        {...props}
        className={`absolute -top-[1000px] py-2 rounded-lg `}
      /> */}

      {invalid && <div className="text-red-600"> {meta.error}</div>}
    </div>
  );
};

const memoizedFileUpload = memo(FileUpload);

export default memoizedFileUpload;
