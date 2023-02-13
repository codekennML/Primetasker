import React from "react";

const ReviewCard = () => {
  return (
    <div>
      <div class="w-full whitespace-pre-wrap space-y-0.5">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          class=" max-w-full h-[200px] w-[250px]"
          height="200"
          width="300"
        />
        <p class="text-md mt-3 font-semibold mb-1">
          7Seasons Apartments Budapest
        </p>
        <p class="text-[13px] leading-6">06. Terézváros, Hungary, Budapest</p>
        <p class="text-[12px] mb-1.5">
          Starting from <span class="text-sm font-bold">NGN 42,359</span>{" "}
        </p>
        <p class="text-[12px] space-x-2 ">
          <span class="bg-blue-800 text-white font-bold text-sm p-1 rounded-t rounded-x">
            8.8
          </span>
          <span>Fabulous</span>
          <span class="text-[11px]">6,901 reviews</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
