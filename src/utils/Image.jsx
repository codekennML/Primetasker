import React, { memo } from "react";

const Image = ({ width, height, avatar, alt }) => {
  const image_url =
    "https://images.pexels.com/photos/2362887/pexels-photo-2362887.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <img
      src={`${avatar ? avatar : image_url}`}
      alt={`${alt ? alt : "profile-image"}`}
      className={`w-[${width}] h-[${height}] rounded-full object-cover object-center`}
    />
  );
};

const memoizedImage = memo(Image);

export default memoizedImage;
