import React from "react";

const ReviewCards = ({ name, country }) => {
  return (
    <article class="border border-gray-200 rounded p-3 w-full px-3 ">
      <div class="flex flex-row space-x-2">
        <div>
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GigCOoRDZc_tWz56xZpC_Krwja__Mv4FnzWIj-Z=s96-c"
            alt=""
            class="block w-[30px] h-[30px] rounded-full object-cover"
          />
        </div>
        <p>
          <span class="block font-medium text-xs">{name}</span>
          <span class="block text-[11px]">{country}</span>
        </p>
      </div>
      <p class="text-[13px] py-3">
        <q>
          If you want to feel Nigeria in Lagos choose this hotel. Nice people,
          nice food (a lot of local dishes), nice room, excelent view, nice pool
          (and pool bar), great hospitality.
        </q>
      </p>
      <p class="text-blue-600 text-xs font-medium">Read More </p>
    </article>
  );
};

export default ReviewCards;
