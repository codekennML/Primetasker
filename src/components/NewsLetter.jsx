import React from "react";
import Footer from "./Footer";

const NewsLetter = () => {
  return (
    <section class="bg-[#00224f] ">
      <div class="  pt-12 pb-6 ">
        <div class="">
          <article class="text-center ">
            <h3 class="text-gray-200 text-[23px]">Save time, save money!</h3>
            <p class="text-gray-400 mb-3">
              Sign up and we'll send the best deals to you
            </p>
            <div class="py-2">
              <input type="text" class="py-3 px-16 mr-2 rounded" />
              <button class="bg-blue-700 text-white  py-3 px-12 rounded text-[18px]">
                Subscribe
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
