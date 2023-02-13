import React from "react";

const SingleFAQ = () => {
  return (
    <details class="bg-white border border-blue-100 group">
      <summary class="list-none flex flex-wrap items-center cursor-pointer">
        <h3 class="flex flex-1 p-4 font-bold">
          {" "}
          What are the check-in and check-out times at Lagos Continental Hotel?{" "}
        </h3>
        <div class="flex w-10 ###justify-center items-center ">
          <p class="border-[5.5px] border-transparent border-t-gray-600 ml-2 group-open:-scale-y-100 transition-transform origin-left duration-400"></p>
          {/* <p><Icon class={}/></p> */}
        </div>
      </summary>
      <div class="p-4 text-[12px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          rerum ipsa nihil eos aspernatur alias deleniti excepturi quasi. Nam
          labore iure consequuntur nemo magni. Voluptatibus sit iste iure
          nesciunt laborum.
        </p>
      </div>
    </details>
  );
};

export default SingleFAQ;
