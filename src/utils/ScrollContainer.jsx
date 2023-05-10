import React from "react";

const ScrollContainer = ({ style, children }) => {
  return (
    <div
      className={`${
        style ? style : ""
      } overflow-y-auto h-[73vh] md:h-[45vh]  scrollbar-thin  `}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
