import { useField } from "formik";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useAddNewFileMutation } from "../../features/fileUploads/uploadApiSlice";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Formik, Form } from "formik";
// import ProgressComp from "../ProgressBar"
import { useEffect } from "react";
import FileUploadProgress from "./FileUploadProgress";
// import SingleFileUpload from "./SingleFileUpload";

const MultipleFileUpload = ({ name }) => {
  const [files, setFiles] = useState([]);
  const onFileDialogOpen = useCallback(() => {
    {
      if (files.length > 0) {
        setFiles([]);
      }
    }
  }, [files]);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      acceptedFiles.map((file) => {
        setFiles((prevState) => {
          return [...prevState, file];
        });
      });
    },
    [files]
  );

  const [progress, setProgress] = useState({});
  const [uploadFinished, setUploadFinished] = useState(false);
  const [cloudFileAddress, setCloudFileAddress] = useState([]);
  const maxSize = 5242880;
  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    accept: {
      "image/*": [],
      " application/pdf": [],
    },
    onDrop,
    onFileDialogOpen,
    minSize: 0,
    maxSize, //5MB
    multiple: true,
    maxFiles: 5,
    noClick: true,
    noKeyboard: true,
  });

  // const [uploadArray, setUploadArray] = useState([]);

  const [addNewFile, { isSuccess }] = useAddNewFileMutation();

  useEffect(() => {
    files.map((file) => {
      const filetoUpload = [];

      const { name } = file;

      const data = new FormData();
      data.append("file", file);
      data.append("api_key", "351211717152192");
      data.append("upload_preset", "ieurv9nx");
      filetoUpload.push(data);
      filetoUpload.push(name);

      setTimeout(() => {
        Upload(filetoUpload, name);
      }, 1000);

      async function Upload(fileToUpload, name) {
        const response = await addNewFile(fileToUpload);

        // const uploadedFileProgress = response.data.progress[`${name}`];

        setProgress((prev) => {
          return { ...prev, ...response.data.progress };
        });

        const { secure_url } = JSON.parse(response.data.response);

        setCloudFileAddress((prev) => {
          return [...prev, { file: file.name, address: secure_url }];
        });
      }
    });
  }, [files]);

  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  useEffect(() => {
    setValue(cloudFileAddress);

    // console.log(cloudFileAddress);
  }, [cloudFileAddress]);

  const removeFile = (idx) => {
    setFiles((prev) => {
      return prev.filter((_, index) => index !== idx);
    });
  };

  //   const errorStyle = "border border-rose-400 ";
  //   const validStyle = "border-gray-400 border";
  //   const invalid = meta.touched && meta.error;
  // console.log(field, meta);
  return (
    <div className=" min-h-[200px] w-[75%] mx-auto">
      <section
        className={`

h-[230px]
 relative border-dashed border-2 border-purple-400 w-full  max-h-full rounded-xl py-4 flex justify-center items-center "`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        <div className="absolute z-10 top-14 bg-purple-400/70 rounded-full ">
          {/* <p className="text-[50px] text-gray-100/60  ">
            <FaFileUpload />
          </p> */}
          <p className="text-[30px] text-white p-3 cursor-pointer rounded-full">
            <FaCloudUploadAlt />
          </p>
        </div>
        <div className="mt-16 ">
          {/* <p className='pl-3'> Drag 'n' drop  files here</p> */}
          <button
            type="button"
            className=" mt-4 px-6 py-2 text-gray-600 font-medium rounded-lg"
            onClick={() => open()}
          >
            <span className="underline ">Click to upload</span> or drag and drop
          </button>
          <p className="text-[11px] text-center">Maximum file size is 5 MB</p>
        </div>
      </section>

      {files.length > 0 &&
        !uploadFinished &&
        files.map((file, idx) => {
          const { name, size } = file;
          console.log(file);
          file?.errors?.length ? (
            <div>
              {" "}
              <h2>Error</h2>{" "}
            </div>
          ) : (
            // return (
            <li key={idx} className="list-none">
              <FileUploadProgress
                idx={idx}
                name={name}
                size={size}
                progress={name in progress ? progress[`${name}`] : 0}
                removeFile={removeFile}
              />
            </li>
          );
          // );
        })}

      {/* {uploadFinished && files.length < 1 && (
        <p>Files Uploaded Successfully </p>
      )} */}

      <div className="mt-2"></div>
      {/* 
      {files.length > 0 && progress < 100 && (
        <button
          onClick={(e) => uploadFiles(e)}
          type="button"
          className="bg-purple-700 mt-4 px-6 py-2  text-white font-medium rounded-lg float-right"
        >
          Upload Files
        </button>
      )} */}
      {/* )} */}
    </div>
  );
};

export default MultipleFileUpload;
