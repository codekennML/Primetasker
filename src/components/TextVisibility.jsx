import React, { useState, useRef, useEffect } from "react";
import { FaImage } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/modalSlice";
import { Collapse } from "react-collapse";
import SmoothCollapse from "react-smooth-collapse";

const TextVisibility = ({ text, files }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isExpanded, setIsExpanded] = useState(true);
  // const [canExpand, setCanExpand] = useState(false);
  // const containerRef = useRef(null);
  // const buttonText = canExpand && isExpanded ? "Show Less" : "Show More";
  const buttonText = isOpen ? "Show Less" : " More details";

  const dispatch = useDispatch();
  // useEffect(() => {
  //   const currHeight = containerRef?.current?.clientHeight;
  //   console.log(containerRef);
  //   if (currHeight > 120) {
  //     setCanExpand(true);
  //   }
  // }, []);
  // useEffect(() => {
  //   setIsExpanded((prev) => !prev);
  // }, [close]);

  return (
    // <div>
    //   <Collapse isOpened={isOpen}>
    //     <div style={{ height: isOpen ? "auto" : "60px", overflow: "hidden" }}>
    //       {text}
    //     </div>
    //   </Collapse>
    //   <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
    // </div>

    <div className="relative   flex flex-col bg-slate-50/60 pt-2 px-2 rounded  pl-2 text-sm  text-[#061257]  ">
      <SmoothCollapse
        expanded={isOpen}
        collapsedHeight={120}
        heightTransition=".5s ease"
      >
        <div className="">
          <p className="whitespace-pre-wrap py-2 text-slate-700/80  font-medium font-inter  text-justify px-2 text-[.86rem] font-roboto tracking-[.02rem] leading-relaxed ">
            {text}
          </p>
        </div>
      </SmoothCollapse>

      <div
        className={` flex flex-row py-2 justify-between items-center 
        ${
          isOpen
            ? "before:opacity-0"
            : " before:opacity-100 before:transition before:ease before:delay-200 "
        } 
        relative  before:absolute before:left-0 before:right-0  before:bg-gradient-to-t before:from-white/90 before:-top-4 before:to-gray-50/10 before:block before:h-[20px] before: backdrop-blur-lg  before:bg-blend-color-burn before:z-20
        `}
      >
        {/*  */}
        <div className="  text-left pl-2   bg-transparent ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[.85rem] font-semibold text-purple-700"
          >
            {buttonText}
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
              <span className="text-purple-600 text-[16px]">
                <FaImage />
              </span>
              <span className="text-[13px] font-bold text-purple-600">
                {" "}
                ({files.length})
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </div>

    // <article
    //   className={`overflow-hidden  relative   flex flex-col border border-gray-200 bg-slate-100 pt-2 px-2 rounded  pl-2 text-sm  text-[#061257]  `}
    // >
    //   <div
    //     ref={containerRef}
    //     className={`${
    //       isExpanded
    //         ? "max-h-[764px] after:opacity-0"
    //         : "max-h-[120px] after:opacity-1 after:-bottom-2 "
    //     } transHeight  relative overflow-y-hidden after:absolute after:left-0 after:right-0 after:bottom-0  after:bg-gradient-to-b after:from-gray-50/60 after:to-gray-50/70 after:block after:h-[30px] `}
    //   >
    //   <p className="whitespace-pre-wrap py-2 text-slate-600/80 leading-relaxed tracking-normal font-medium font-inter  text-justify px-2 text-[15px] font-roboto ">
    //     {text}
    //   </p>
    // </div>

    // </article>
  );
};

export default TextVisibility;
