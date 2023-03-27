import { useState, useRef } from "react";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/compact.css";
import { AiOutlineSave } from "react-icons/ai";
import {
  MdCropRotate,
  MdRotateRight,
  MdRotateLeft,
  MdCrop,
} from "react-icons/md";

const Example = ({ src }) => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  );
  const [showCropper, setShowCropper] = useState(false);
  const onChange = (cropper) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  const cropperRef = useRef();

  const flip = (horizontal, vertical) => {
    if (cropperRef.current) {
      cropperRef.current.flip(horizontal, vertical);
    }
  };

  const rotate = (angle) => {
    console.log(angle, cropperRef.current);
    if (cropperRef.current) {
      cropperRef.current.rotateImage(angle);
    }
  };

  return (
    <section>
      {!showCropper && (
        <>
          <img src={image} className="w-[300px] h-300px rounded-lg mt-12" />
          <div className="  flex flex-row justify-between  mx-auto w-[300px]">
            <button
              onClick={() => setShowCropper((prev) => !prev)}
              className="p-2 bg-purple-800 text-white  shadow-md  rounded-full border border-gray-300 absolute right-[20%] top-10  "
            >
              <MdCropRotate type="button" className="text-[20px] text-white" />
            </button>
          </div>
        </>
      )}

      {showCropper && (
        <div>
          <div>
            <Cropper
              ref={cropperRef}
              src={image}
              onChange={onChange}
              backgroundClassName="object-cover object-center "
              overlayClassName="bg-purple-400"
              className={
                "cropper max-w-[300px] max-h-[250px] h-full w-full bg-purple-400/20 rounded "
              }
            />
          </div>
          <div className=" mt-4 flex flex-row justify-between  mx-auto w-[300px]">
            <button className="p-2  shadow-md  rounded-full border border-gray-300   ">
              <MdCrop
                onClick={() => setShowCropper((prev) => !prev)}
                type="button"
                className="text-[16px] text-purple-800 "
              />
            </button>
            <button
              type="button"
              className="p-2  shadow-md  rounded-full border border-gray-300   "
            >
              <MdRotateLeft
                onClick={() => rotate(-90)}
                className="text-[16px] text-purple-800 "
              />
            </button>
            <button className="p-2  shadow-md rounded-full border border-gray-300   ">
              <MdRotateRight
                onClick={() => rotate(90)}
                className="text-[16px] text-purple-800 "
              />
            </button>
            <button className="p-2  shadow-md rounded-full border border-gray-300   ">
              <AiOutlineSave className="text-[16px] text-purple-800 " />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Example;
