import React from "react";

const ScrollContainer = ({ style, children }) => {
  return (
    <div className={`${style ? style : ""} overflow-y-auto    `}>
      {children}
    </div>
  );
};

export default ScrollContainer;

