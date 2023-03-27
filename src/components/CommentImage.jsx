import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CommentImage = ({ files }) => {
  console.log(files);
  const numberOfFiles = files.length;
  const [imageIndex, setImageIndex] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? files.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === files.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section className="relative  w-full h-full py-20 px-20 flex items-center justify-center ">
      <div className="absolute flex justify-between px-4 w-full top-1/2 transform -translate-y-1/2 ">
        <button
          disabled={currentSlide + 1 < 1}
          onClick={handlePrevSlide}
          className={`${
            currentSlide === 0 ? "opacity-0 " : "visible opacity-100"
          } bg-gray-100  p-2 rounded-full text-purple-600 disabled:text-gray-400`}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextSlide}
          className={`${
            currentSlide === files.length - 1
              ? "opacity-0 "
              : "visible opacity-100"
          } bg-gray-100  p-2 rounded-full text-purple-600`}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="w-[400px] h-[400px]">
        <img
          src={files[currentSlide].url}
          className={`w-full  h-full rounded-lg`}
          height={300}
          width={300}
        />
      </div>
    </section>
  );
};

export default CommentImage;
