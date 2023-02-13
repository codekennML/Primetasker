import { FaFile, FaFileAlt, FaFilm, FaTimes } from "react-icons/fa";
import ProgressComp from "../ProgressBar";

const FileUploadProgress = ({
  idx,
  progress,
  name,
  size,
  removeFile,
  hasError,
  errors,
}) => {
  function bytesToMegabytes(bytes, roundTo) {
    if (bytes < 1024) {
      return (bytes / 1024).toFixed(roundTo) + "kb";
    } else {
      var converted = bytes / (1024 * 1024);
      return roundTo ? converted.toFixed(roundTo) + " MB" : converted + " MB";
    }
  }
  const convertedFileSize = bytesToMegabytes(size, 2);
  // console.log(convertedFileSize);

  return (
    <div
      className={`${
        hasError ? "border-red-600 text-red-500" : ""
      } relative text-gray-600 flex flex-row  border w-full  rounded-lg my-3  font-medium py-2 px-4  space-x-3`}
    >
      <button
        className={`${
          hasError
            ? " bg-rose-500 text-gray-50 visible rounded-full p-1 text-[12px] cursor-pointer absolute right-6 top-8"
            : "hidden "
        } `}
        onClick={() => removeFile(idx)}
      >
        <FaTimes />
      </button>
      <article className="self-center">
        <div className="border border-gray-400 rounded p-1.5">
          <FaFileAlt className="text-[15px] " />
        </div>
      </article>

      <article className="flex-1  space-y-0.5 text-[12px]">
        <div className="flex flex-row justify-between items-start">
          <h3 className="flex-1 flex-wrap   ">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.mp4 */}
            {name}
          </h3>

          <p className={`${hasError ? "text-red-500" : "text-gray-700"} `}>
            {`${
              hasError
                ? "File size or type invalid "
                : progress < 100
                ? "Uploading..."
                : "File Uploaded"
            }`}
          </p>
        </div>

        {/* <p>{convertedFileSize}</p> */}
        <div>
          {hasError
            ? errors.map((error, idx) => (
                <li key={idx}>{`${
                  error.code === "file-too-large"
                    ? "File exceeds maximum uploadable size of 5MB"
                    : `${
                        error.code === "file-invalid-type"
                          ? "File must be a pdf or an image"
                          : `${error.message}`
                      }`
                }`}</li>
              ))
            : // <ProgressComp progress={progress} hasError={hasError} />
              null}
        </div>
      </article>
    </div>
  );
};

export default FileUploadProgress;
