import { useField, useFormikContext } from "formik";
import { useState, useCallback, useContext, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useAddNewFileMutation } from "../../features/fileUploads/uploadApiSlice";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import FileUploadProgress from "./FileUploadProgress";
import Spinner from "../Spinner";
import { UploadContext } from "../../features/tasks/pages/PostTask/PostTaskForm";

const MultipleFileUpload = ({
  isUploading,
  name,
  dimensions,
  style,
  fileposition,
  displayThumbnail = true,
  displayProgress = false,
}) => {
  const { values } = useFormikContext();
  console.log(values.files);
  const { uploading, setUploading } = useContext(UploadContext);
  const [field, meta, helpers] = useField(name);

  const { setValue } = helpers;

  // console.log(field.value, values.files);

  const [files, setFiles] = useState(values.files || []);

  const [filesToUpload, setFilesToUpload] = useState([]);
  // const [canUpload, setCanUpload] = useState(files.some (file => file.uploaded !== false))
  // const [shouldUpload, setShouldUpload] = useState(false);
  // const [canUpload, setCanUpload] = useState(files.length && !canUploadRef);
  const [preview, setPreview] = useState(field.value);

  const onDrop = (acceptedFiles, rejectedFiles) => {
    // console.log(acceptedFiles);
    // setShouldUpload(true);
    acceptedFiles.map((file) => {
      let isDuplicate;

      if (filesToUpload.length > 0) {
        isDuplicate = filesToUpload.some(
          (curr) => curr.file.name === file.name
        );
      }

      if (!isDuplicate || filesToUpload.length < 1) {
        setUploading(true);

        setFilesToUpload((prev) => {
          return [
            ...prev,
            {
              file,
              error: [],
            },
          ];
        });
        const fileWithPreview = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        setPreview((prev) => {
          return [...prev, fileWithPreview];
        });
      }
    });
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => preview.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const [progress, setProgress] = useState({});

  const [cloudFileAddress, setCloudFileAddress] = useState([]);
  const maxSize = 5242880;
  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    accept: {
      "image/*": [],
    },
    noDrag: true,
    onDrop,
    // onFileDialogOpen,
    minSize: 0,
    maxSize, //5MB
    multiple: true,
    maxFiles: 4,
    noClick: true,
    noKeyboard: true,
  });

  const [addNewFile, { isSuccess }] = useAddNewFileMutation();

  useEffect(() => {
    filesToUpload.map((fileWrapper) => {
      const filetoUpload = [];

      const { file } = fileWrapper;
      const { name } = file;
      const data = new FormData();

      if (!fileWrapper?.errors?.length) {
        data.append("file", file);
        filetoUpload.push(data);
        filetoUpload.push(name);

        setTimeout(() => {
          Upload(filetoUpload, name);
        }, 1000);
      } else {
        // console.log(fileWrapper.errors);
      }

      async function Upload(fileToUpload, name) {
        const response = await addNewFile(fileToUpload);

        setProgress((prev) => {
          return { ...prev, ...response.data.progress };
        });

        const assetData = JSON.parse(response.data.response);

        setCloudFileAddress((prev) => {
          return [
            ...prev,
            {
              file: file.name ? file.name : file.path,
              preview: file.preview,
              url: assetData.secure_url,
            },
          ];
        });
        setUploading(false);
      }
    });
  }, [filesToUpload]);

  useEffect(() => {
    // console.log(cloudFileAddress);
    setValue(cloudFileAddress);
    // console.log(cloudFileAddress);
  }, [cloudFileAddress]);

  const removeFile = (idx) => {
    setFilesToUpload((prev) => {
      return prev.filter((_, index) => index !== idx);
    });
    setPreview((prev) => {
      return prev.filter((_, index) => index !== idx);
    });
  };

  /* The preview state takes a value from the files array in localstorage or isEmpty, if there is a value in local storage, the /array is of type [file, file, file] , However, if theres is no value in LS, the user will have to select the files and the preview array would then be of type [{0 : {path, name etc}}]
   */

  const filesToShow =
    values.files.length > 0
      ? values.files.map((file) => {
          return (
            <div>
              <img src={file.url} alt="" srcset="" height={50} width={50} />
            </div>
          );
        })
      : null;

  const thumbs = preview?.length
    ? preview.map((file, idx) => (
        <div key={file.name || file.lastModified} className="relative ">
          {file.name in progress || file.url ? null : (
            <div className="absolute w-full h-full z-10 bg-blue-900/50 top-0 left-0">
              <span className="flex justify-center items-center w-full h-full">
                <Spinner
                  height={40}
                  width={40}
                  visible={true}
                  color="#b09cd7"
                />{" "}
              </span>
            </div>
          )}
          <div className="relative ">
            {file.name in progress || file.url ? (
              <button
                className="text-[15px] text-red-500 bg-gray-200  border border-white absolute p-1 rounded-full -top-2 -right-2"
                type="button"
                onClick={() => removeFile(idx)}
              >
                <FaTimes />
              </button>
            ) : null}
            <img
              src={file.url || file.preview}
              className="w-28 h-24 max-w-full max-h-full rounded-lg object-cover object-fit"
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </div>
        </div>
      ))
    : null;

  let content;
  {
    filesToUpload.length > 0 &&
      // !uploadFinished &&
      filesToUpload.map((fileWrapper, idx) => {
        const { name, size } = fileWrapper.file;

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
    <div className={`${style ? style : "min-h-[200px] w-[75%] mx-auto"}`}>
      <div>{filesToShow}</div>
      <section
        className={`

h-[200px] bg-gray-50
 relative ${
   dimensions ? dimensions : ""
 } border-dashed border-2 border-purple-400 w-full  max-h-full rounded-xl py-4 flex justify-center items-center  `}
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        <div className="absolute z-5 top-14 bg-purple-400/70 rounded-full ">
          <button
            className="text-[30px] text-white p-3 cursor-pointer rounded-full"
            type="button"
            onClick={() => open()}
          >
            <FaCloudUploadAlt />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mt-16 ">
            {/* <p className='pl-3'> Drag 'n' drop  files here</p> */}
            <button
              type="button"
              className=" mt-4 px-6 py-2 text-gray-600 font-medium rounded-lg text-[14px]"
              onClick={() => open()}
            >
              <span className="underline text-[13px]">Click to upload</span>
            </button>
            <p className="text-[11px] text-center">Maximum file size is 5 MB</p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2  place-self-center">
        {thumbs}
      </div>
      <div className={`${fileposition ? fileposition : ""} list-none `}>
        {filesToUpload.length > 0 &&
          // !uploadFinished &&
          filesToUpload.map((fileWrapper, idx) => {
            const { name, size } = fileWrapper.file;
            const errors = fileWrapper?.errors;
            const hasError = fileWrapper?.errors?.length;

            return (
              <div>
                {displayProgress ? (
                  <li key={idx} className={`list-none `}>
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
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MultipleFileUpload;
