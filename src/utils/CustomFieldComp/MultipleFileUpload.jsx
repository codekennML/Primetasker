import { useField } from "formik";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useAddNewFileMutation } from "../../features/fileUploads/uploadApiSlice";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useEffect } from "react";
import FileUploadProgress from "./FileUploadProgress";

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
      const mappedAcc = acceptedFiles.map((file) => ({ file, error: [] }));
      // acceptedFiles.map((file) => {

      setFiles((prevState) => {
        return [...prevState, ...mappedAcc, ...rejectedFiles];
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
    noDrag: true,
    onDrop,
    onFileDialogOpen,
    minSize: 0,
    maxSize, //5MB
    multiple: true,
    maxFiles: 5,
    noClick: true,
    noKeyboard: true,
  });

  const [addNewFile, { isSuccess }] = useAddNewFileMutation();

  useEffect(() => {
    files.map((fileWrapper) => {
      const filetoUpload = [];

      const { file } = fileWrapper;
      const { name } = file;
      const data = new FormData();
      // console.log(fileWrapper);
      if (!fileWrapper?.errors?.length) {
        data.append("file", file);
        filetoUpload.push(data);
        filetoUpload.push(name);
        console.log(...data);

        // console.log(fileWrapper);
        setTimeout(() => {
          Upload(filetoUpload, name);
        }, 1000);
      }

      async function Upload(fileToUpload, name) {
        const response = await addNewFile(fileToUpload);

        // const uploadedFileProgress = response.data.progress[`${name}`];

        setProgress((prev) => {
          return { ...prev, ...response.data.progress };
        });

        const secure_url = JSON.parse(response.data.response);

        setCloudFileAddress((prev) => {
          return [...prev, { file: file.name, url: secure_url }];
        });
      }
    });
  }, [files]);

  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;
  useEffect(() => {
    setValue(cloudFileAddress);
  }, [cloudFileAddress]);

  const removeFile = (idx) => {
    setFiles((prev) => {
      return prev.filter((_, index) => index !== idx);
    });
  };

  let content;
  {
    files.length > 0 &&
      !uploadFinished &&
      files.map((fileWrapper, idx) => {
        const { name, size } = fileWrapper.file;

        // return (
        content = (
          <li key={idx} className="list-none">
            <FileUploadProgress
              idx={idx}
              name={name}
              size={size}
              color={`bg-purple-700`}
              progress={name in progress ? progress[`${name}`] : 0}
              removeFile={removeFile}
            />
          </li>
        );
      });
  }

  return (
    <div className=" min-h-[200px] w-[75%] mx-auto">
      <section
        className={`

h-[230px]
 relative border-dashed border-2 border-purple-400 w-full  max-h-full rounded-xl py-4 flex justify-center items-center "`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        <div className="absolute z-5 top-14 bg-purple-400/70 rounded-full ">
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

      <div>
        {files.length > 0 &&
          !uploadFinished &&
          files.map((fileWrapper, idx) => {
            const { name, size } = fileWrapper.file;
            const errors = fileWrapper?.errors;
            const hasError = fileWrapper?.errors?.length;

            return (
              <li key={idx} className="list-none">
                <FileUploadProgress
                  idx={idx}
                  name={name}
                  hasError={hasError}
                  errors={errors}
                  size={size}
                  color={`bg-purple-700`}
                  progress={name in progress ? progress[`${name}`] : 0}
                  removeFile={removeFile}
                />
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default MultipleFileUpload;
