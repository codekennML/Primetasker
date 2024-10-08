import { images } from "../constants/Images";
import { useState } from "react";
import GeneralModal from "../features/modal/GeneralModal";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderContent from "../features/modal/SliderContent";

const Images = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const handleImageSlider = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  };
  // {console.log(`${images.length}`);}

  const handleSlide = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber =
        slideNumber === 0 ? `${images.length - 1}` : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  let content;
  content = (
    <div class=" relative w-full flex justify-center items-center ">
      <img src={images[slideNumber].src} alt="" class="w-[80%] h-[80vh]" />
      <div class="absolute top-[50%] flex justify-between w-full">
        <button
          onClick={() => handleSlide("l")}
          class="bg-white w-16 h-16  rounded-full inline-flex justify-center items-center mx-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} class="w-6 h-6" />
        </button>
        <button
          onClick={() => handleSlide("r")}
          class="bg-white w-16 h-16 rounded-full inline-flex justify-center items-center mx-4"
        >
          <FontAwesomeIcon icon={faArrowRight} class="w-6 h-6" />
        </button>
      </div>

      {/* <div class='sliderWrapper w-full'>
           
        </div> */}
    </div>
  );

  return (
    <>
      {openSlider && (
        <SliderContent
          content={content}
          setOpenSlider={setOpenSlider}
          openSlider={openSlider}
        />
      )}
      <div class="flex flex-row flex-wrap gap-3">
        {images.map((image, i) => (
          <p>
            <img
              onClick={() => handleImageSlider(i)}
              src={image.src}
              alt=""
              class="w-[400px] h-[300px]"
            />
          </p>
        ))}
      </div>
    </>
  );
};

export default Images;
