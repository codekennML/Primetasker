import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useMemo,
  memo,
} from "react";
import MultipleFileUpload from "../utils/CustomFieldComp/MultipleFileUpload";
import Spinner from "../utils/Spinner";
import { FaTimes } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { notifyErr } from "../hooks/NotifyToast";

const ImageUpload = forwardRef(({ ...props }, ref) => {
  const openRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        click() {
          openRef.current.click();
        },
      };
    },
    []
  );
  const loading = true;
  const [preview, setPreview] = useState([]);
  const [errorFiles, setErrorFiles] = useState();
  const [cloudFileAddress, setCloudFileAddress] = useState([]);
  const [progress, setProgress] = useState({});

  const removeFile = (idx) => {
    setCloudFileAddress((links) => {
      return links.filter((_, index) => index !== idx);
    });

    setPreview((prev) => {
      return prev.filter((_, index) => index !== idx);
    });

    props.files.filter((_, index) => index !== idx);
  };

  useEffect(() => {
    setPreview([]);
    setCloudFileAddress([]);
  }, [props.clearValues]);

  useEffect(() => {
    setCloudFileAddress(props?.files);
  }, []);

  useEffect(() => {
    errorFiles ? notifyErr(errorFiles) : null;
  }, [errorFiles]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => preview?.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="">
      <div className="">
        <MultipleFileUpload
          setProgress={setProgress}
          cloudAddress={cloudFileAddress}
          preview={preview}
          setPreview={setPreview}
          setCloudAddress={setCloudFileAddress}
          value={props.files}
          type="file"
          ref={openRef}
          name={props.name}
          setErrorFiles={setErrorFiles}
        />
      </div>

      <div className=" max-w-full ">
        {/* // Display Thumbnails */}

        <Swiper
          className="relative flex max-w-full w-[30rem] overflow-hidden py-1"
          slidesPerView={4}
          spaceBetween={8}
          navigation
          modules={[Navigation]}
          pagination={{ clickable: true }}
        >
          {props.files.length > 0 ? (
            props.files.map((file, idx) => {
              return (
                <SwiperSlide key={file.url} className=" ">
                  <li className="list-none">
                    <img
                      src={file.url}
                      alt=""
                      srcset=""
                      height={40}
                      width={40}
                      className={`w-full ${
                        props.postForm ? "h-20" : "h-16"
                      } rounded-tr-lg rounded  object-cover object-fit`}
                    />
                    <button
                      onClick={() => removeFile(idx)}
                      className="text-[12px] text-red-500 bg-gray-200  border border-white absolute p-0.5 rounded-full -top-2 -right-1.5"
                      type="button"
                    >
                      <FaTimes />
                    </button>
                  </li>
                </SwiperSlide>
              );
            })
          ) : preview?.length > 0 ? (
            <div className="flex flex-row space-x-4">
              {preview.map((file) => (
                <SwiperSlide className="w-20">
                  <div key={file.preview} className="relative ">
                    {file.name in progress || file.preview ? (
                      <div className="absolute  w-full h-full z-10 bg-blue-900/50 top-0 left-0">
                        <span className="flex justify-center items-center w-full h-full">
                          <Spinner
                            height={40}
                            width={40}
                            visible={true}
                            color="#b09cd7"
                          />
                        </span>
                      </div>
                    ) : null}

                    <div className="relative ">
                      <img
                        src={file.preview}
                        className={`  w-full ${
                          props.postForm ? "h-20" : "h-16"
                        } max-w-full max-h-full rounded-lg object-cover object-fit `}
                        // Revoke data uri after image is loaded
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview);
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          ) : null}
        </Swiper>
      </div>
    </div>
  );
});

const memoizedImageUpload = memo(ImageUpload);
// export default memoizedImageUpload;
export default ImageUpload;
