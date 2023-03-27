import React from "react";
import videoAd from "../assets/videos/taskerVideo.mp4";
const VideoModal = () => {
  return (
    <section className=" w-[900px] mx-auto ">
      <div className="">
        <video controls autoplay="true" className="rounded-md">
          <source src={videoAd} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoModal;
