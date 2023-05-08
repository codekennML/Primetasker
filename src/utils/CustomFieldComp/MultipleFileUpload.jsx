import { useField, useFormikContext } from "formik";
import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
  useCallback,
  memo,
} from "react";
import { useDropzone } from "react-dropzone";
import { useAddNewFileMutation } from "../../features/fileUploads/uploadApiSlice";
import { uploading, uploaded } from "../../features/fileUploads/uploadSlice";
import { useDispatch } from "react-redux";
import { notifyErr } from "../../hooks/NotifyToast";

const MultipleFileUpload = forwardRef(({ ...props }, ref) => {
  const [addNewFile, { isSuccess }] = useAddNewFileMutation();

  const fileFormat = {
    "image/png": [".png", ".jpg", ".jpeg"],
  };
  console.log(props.acceptableFileFormats || fileFormat);
  const [file, setFile] = useState();

  const openDropzoneRef = useRef();

  // Expose only the click event of  the dropzone to the  parent component using the handle
  useImperativeHandle(
    ref,
    () => {
      return {
        click() {
          openDropzoneRef.current.click();
        },
      };
    },
    []
  );

  const dispatch = useDispatch();

  const [field, meta, helpers] = useField(props.name);

  const { setValue } = helpers;

  const { cloudAddress, setCloudAddress, preview, setPreview, setProgress } =
    props;

  const maxSize = 5242880;

  const onDrop = (acceptedFiles, rejectedFiles) => {
    acceptedFiles.map((file, idx) => {
      setFile(file);
      dispatch(uploading);

      //Create Preview for dropped file

      const fileWithPreview = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      setPreview((prev) => {
        return [...prev, fileWithPreview];
      });

      let filetoUpload = [];

      const { name } = file;
      const data = new FormData();

      data.append("file", file);

      filetoUpload.push(data);
      filetoUpload.push(name);

      Upload(filetoUpload, name);
    });

    rejectedFiles.map(({ errors }) => {
      console.log(errors);
      let error;
      error =
        errors[0].code == "file-invalid-type"
          ? errors[0].message
          : errors[0].code == "file-too-large"
          ? "Max.file size to upload is 5MB "
          : null;

      props.setErrorFiles(error);
    });
  };

  async function Upload(fileToUpload, name) {
    const response = await addNewFile(fileToUpload);

    setProgress((prev) => {
      return { ...prev, ...response.data.progress };
    });

    const assetData = JSON.parse(response.data.response);

    setCloudAddress((prev) => {
      return [
        ...prev,
        {
          file: name,
          url: assetData.secure_url,
        },
      ];
    });
    dispatch(uploaded);
  }

  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    accept: props.acceptableFileFormats || fileFormat,
    noDrag: true,
    onDrop,
    minSize: 0,
    maxSize, //5MB
    multiple: false,
    maxFiles: 10,
    noClick: true,
    noKeyboard: true,
  });

  useEffect(() => {
    setValue(cloudAddress);
    setFile(null);
  }, [cloudAddress]);

  return (
    <div className={`${props.style ? props.style : ""}`}>
      <section
        className={`${field?.length ? "h-full" : "h-0"} bg-gray-50 relative ${
          props.dimensions ? props.dimensions : ""
        } hidden  `}
        {...getRootProps()}
      >
        <button
          type="button"
          onClick={() => open()}
          ref={openDropzoneRef}
          className="text-white bg-purple-600 "
        ></button>
        <input {...getInputProps()} />
      </section>
    </div>
  );
});

// const memoizedUploadForm = memo(MultipleFileUpload);
// export default memoizedUploadForm;
export default MultipleFileUpload;
