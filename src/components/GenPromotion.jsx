import React from "react";

const GenPromotion = () => {
  return (
    <article
      class='border border-gray-200 rounded flex flex-row p-6 pr-8 pt-4 justify-between items-start mt-10  mb-6 bg-no-repeat bg-right-top
    bg-[url("https://t-cf.bstatic.com/static/img/genius-banner-world-bg/2b5cdbad7b92073bc396b8b59d0bb421b3a01cba.png")]
    '
    >
      <div class="flex flex-row space-x-4 items-center ">
        <div class="bg-transparent rounded-full">
          <img
            src="https://t-cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png"
            alt=""
            class="max-w-full h-auto "
          />
        </div>
        <div class="">
          <h3 class="font-semibold text-lg mb-2">Get Instant Discounts</h3>
          <p class="text-sm w-[400px]">
            Simply sign into your Booking.com account and look for the blue
            Genius logo to save
          </p>
          <div class="flex flex-row items-center space-x-3 w-[500px] mt-4">
            <button class="border border-blue-800 font-semibold text-[14px]  px-2.5 py-1  text-blue-900">
              Sign In
            </button>
            <button class=" font-bold text-[14px] rounded px-2 py-1  text-blue-900">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* <div class='h-auto pl-30 bg-[url("https://t-cf.bstatic.com/static/img/genius-banner-world-bg/2b5cdbad7b92073bc396b8b59d0bb421b3a01cba.png")] w-[40%] max-h-full'>


        <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laudantium eius sit magnam aliquam iusto cupiditate veritatis amet, vitae, recusandae ipsam, iste sed? Velit reprehenderit unde explicabo maxime nobis ipsum.
        </p>
    </div> */}
    </article>
  );
};

export default GenPromotion;
