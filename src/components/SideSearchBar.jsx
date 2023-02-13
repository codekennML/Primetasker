import React from "react";

const SideSearchBar = () => {
  return (
    <div class="searchbarleft p-4 bg-yellow-500 rounded">
      <p>Search</p>
      <label htmlFor="searchLocation" class="text-[11px]  ">
        Destination/property name
      </label>
      <input
        type="text"
        name="searchLocation"
        id="destination"
        placeholder="Where are you going ?"
        class="px-2 w-full py-1.5 rounded-sm"
      />

      <span class="text-[10px] ">Check-in date</span>
      <button class=" px-2 w-full py-1.5 text-left bg-white border rounded-sm text-[13px]">
        Friday 6 January 2023
      </button>

      <span class="text-[11px]  ">Check-out date</span>
      <button class="w-full py-1.5 px-2 bg-white border rounded-sm text-[13px] text-left">
        Monday 15 June 20223
      </button>
      <span class="text-[11px]  ">1 night Stay</span>

      <button class=" text-[13px] px-2 text-ellipsis text-left w-full py-1.5 bg-white border rounded-sm ">
        <span>2 adults </span>
        <span>0 adults </span>
        <span>1 room </span>
      </button>
      <p class="mt-3 inline-flex items-center ">
        <input type="checkbox" name="hometype" id="hometype" />
        <span class="pl-1 text-sm text-[11px]"> Entire homes & apartments</span>
      </p>

      <p class="mt-1 mb-3 inline-flex items-center ">
        <input type="checkbox" name="purpose" id="purpose" />
        <span class="pl-1 text-[11px] "> I'm travelling for work</span>
      </p>
      <button class="w-full bg-blue-800 py-2.5 mb-2 mt-1 text-white">
        Search
      </button>
    </div>
  );
};

export default SideSearchBar;
