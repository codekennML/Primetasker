import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/modalSlice";
import SmoothCollapse from "react-smooth-collapse";
import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const TextVisibility = ({ text, files, type = "offer" }) => {
  const [isOpen, setIsOpen] = useState(true);

  const buttonText = isOpen ? "Show Less" : " More details";

  const dispatch = useDispatch();

  return (
    <>
      {text ? (
        <div
          className={`relative   flex flex-col ${
            type === "comment" ? "" : ""
          }  pt-2  rounded   text-sm  `}
        >
          <SmoothCollapse
            expanded={isOpen}
            collapsedHeight={`60`}
            heightTransition=".5s ease"
          >
            <div className="">
              <p className="whitespace-pre-wrap py-2 text-brand-text-deep   font-medium font-inter  text-justify px-4 text-[.8rem]  tracking-normal leading-relaxed ">
                {text}
              </p>
            </div>
          </SmoothCollapse>

          <div
            className={` flex flex-row py-2 justify-between items-center 
        ${
          isOpen
            ? "before:opacity-0"
            : " before:opacity-50 before:transition before:ease before:delay-200 "
        } 
        relative before:absolute before:left-0 before:right-0  before:bg-gradient-to-t before:from-white/30 before:-top-4 before:to-gray-100/10 before:block before:h-[20px] before: backdrop-blur-lg  before:bg-blend-color-burn before:z-20
        `}
          >
            {/*  */}
            <div className="pl-2 text-left bg-transparent ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[.8rem] font-semibold text-brand-accent px-2"
              >
                {text ? buttonText : null}
              </button>
            </div>

            {files?.length > 0 ? (
              <div>
                <button
                  onClick={() =>
                    dispatch(
                      showModal({
                        currentModal: "CommentImages",
                        modalData: files,
                      })
                    )
                  }
                  className={` flex items-center space-x-1 mr-3 `}
                >
                  <span className="text-brand-light ">
                    <FaImage size={18} />
                  </span>
                  <span className="text-[.7rem] font-bold text-brand-light">
                    {" "}
                    ({files.length})
                  </span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <Skeleton height="200px" width="100%" />
      )}
    </>
  );
};

export default TextVisibility;
