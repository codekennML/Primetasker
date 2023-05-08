import React, { useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { hideModal } from "../features/modal/modalSlice";
import ModalHead from "./ModalHead";

const CommentImage = ({ files }) => {
  const numberOfFiles = files.length;
  const [imageIndex, setImageIndex] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? files.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === files.length - 1 ? 0 : currentSlide + 1);
  };
  // {
  //   const name = files[currentSlide].url.split("/").slice(-1)[0];
  //   console.log(name);
  // }
  const fileTitle = useMemo(() => {
    return files[currentSlide].url.split("/").slice(-1)[0];
  }, [currentSlide, files]);
  console.log(files);
  return (
    <section className="relative min-w-[320px] w-[550px] max-w-screen h-full  flex  flex-col items-center justify-center   ">
      <ModalHead title={fileTitle} />

      <div className="py-12">
        <div className="w-[400px] h-[400px] transition duration-700 ease-in  ">
          <img
            src={files[currentSlide].url}
            className={`w-full  h-full rounded-lg  `}
            height={300}
            width={300}
          />
        </div>

        <div className="w-full mt-4 flex justify-center items-center gap-x-3">
          <button
            disabled={currentSlide + 1 < 1}
            onClick={handlePrevSlide}
            className={`${
              currentSlide === 0 ? "opacity-0 " : "visible opacity-100"
            } bg-gray-100  p-2 rounded-full text-text-brand-text disabled:text-gray-400`}
          >
            <FaArrowLeft />
          </button>

          <p className="">{`Showing ${Number(currentSlide) + 1} of ${
            files.length
          } Images`}</p>

          <button
            onClick={handleNextSlide}
            className={`${
              currentSlide === files.length - 1
                ? "opacity-0 "
                : "visible opacity-100"
            } bg-gray-100 shadow-md p-2 rounded-full text-brand-text`}
          >
            <FaArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentImage;
