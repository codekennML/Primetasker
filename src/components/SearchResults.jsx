import {
  faChevronDown,
  faThumbsUp,
  faUpDown,
  faStar,
  faUmbrellaBeach,
  faLeaf,
  faLaptop,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SideSearchBar from "./SideSearchBar";
import { Link, useLocation } from "react-router-dom";
import Icon from "../utils/Icon";

const SearchResults = () => {
  const location = useLocation();
  const [dropdown, setIsDropdown] = useState(false);
  const [sortSelect, setSortSelect] = useState("Our top picks");

  return (
    <section class="max-w-screen-2xl">
      <section class="flex  lg:flex-row px-48 gap-5 ">
        <article class="bg-white h-40 w-1/4 ">
          <ul class="text-[11.5px] text-blue-700 flex flex-row mb-4 mt-1 space-x-2 ">
            <li>
              Home{" "}
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  class="w-2.5 h-2.5 text-gray-600"
                />
              </span>{" "}
            </li>
            <li>
              Nigeria{" "}
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  class="w-2.5 h-2.5 text-gray-600"
                />
              </span>
            </li>
            <li>
              Lagos{" "}
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  class="w-2.5 h-2.5 text-gray-600"
                />
              </span>
            </li>
            <li class="text-gray-600">Search results</li>
          </ul>

          <SideSearchBar />
          <div class="filtercheckright border-2 my-2 mb-24 space-y-2 space-x-2 rounded-lg">
            <p class="border-b text-sm font-bold pl-2 py-2">Filter by : </p>
            <p class="text-[12px] font-bold"> Your Previous filters</p>

            <div class="space-y-2">
              <p class="flex items-center">
                <input type="checkbox" />
                <span class="pl-1 text-[12px]">Bed and Breakfast</span>
              </p>
              <p class="flex items-center">
                <input type="checkbox" />
                <span class="pl-1 text-[12px]">Guest houses</span>
              </p>

              <p class="flex items-center">
                <input type="checkbox" />
                <span class="pl-1 text-[12px]">Villas</span>
              </p>
              <p class="flex items-center">
                <input type="checkbox" />
                <span class="pl-1 text-[12px]">Holiday parks</span>
              </p>
              <p class="flex items-center">
                <input type="checkbox" />
                <span class="pl-1 text-[12px]">Homestays</span>
              </p>
              <p class="flex items-center">
                <input type="checkbox" />
                <span class="pl-1 text-[12px]"> Adapted bath</span>
              </p>
            </div>
          </div>
        </article>

        <article class=" w-3/4 grow">
          <div class="location-property-total flex justify-between mt-6 border-b border-gray-300">
            <p class="pt-8 pb-6 font-bold text-2xl">
              Lagos: 647 properties found
            </p>
            <p class="w-[150px] bg-gray-400 rounded  mb-4 flex justify-center items-center bg-[url('https://t-cf.bstatic.com/psb/capla/static/media/map-entry-point.6b01012a.png')]">
              <button class="px-4 py-2 bg-blue-600 rounded text-[12px] font-bold text-white ">
                Show on Map
              </button>
            </p>
          </div>
          <div class="landmark__property_filters">
            <p class="text-[15px] font-bold text-gray-500 pt-2 ">
              Nearby beaches:{" "}
              <span class=" pl-6 text-[15px] font-bold text-gray-600">
                {" "}
                Landmark Beach
              </span>{" "}
            </p>

            <button
              onClick={() => setIsDropdown(!dropdown)}
              class="relative border  border-blue-600 rounded-full px-2 py-1.5 bg-white text-sm mt-3 text-blue-600 font-medium"
            >
              {" "}
              Sort by: <span>{sortSelect}</span>
              <span class="pl-2 align-center">
                <FontAwesomeIcon icon={faChevronDown} class="w-3 h-4" />{" "}
              </span>
              <ul
                class={`${
                  dropdown
                    ? "visible transition opacity-100 duration-500 "
                    : "invisible transition opacity-0 duration-300"
                }   font-normal text-gray-600 top-12 text-[13px] absolute z-10 bg-white shadow-md  rounded-lg  space-y-2 w-full`}
              >
                <li
                  class="hover:bg-gray-100 py-2 text-left px-3 "
                  onClick={() => setSortSelect("Our top Picks")}
                >
                  Our top picks{" "}
                </li>
                <li
                  class="hover:bg-gray-100 py-2 text-left px-3 "
                  onClick={() => setSortSelect("Homes & Apartment")}
                >
                  Homes &amp; Apartment{" "}
                </li>
                <li
                  class="hover:bg-gray-100 py-2 text-left px-3 "
                  onClick={() => setSortSelect("Stars(Highest First) ")}
                >
                  Stars(Highest First){" "}
                </li>
                <li
                  class="hover:bg-gray-100 py-2 text-left px-3 "
                  onClick={() => setSortSelect("Distance from City Centre")}
                >
                  Distance from City Centre{" "}
                </li>
                <li
                  class="hover:bg-gray-100 py-2 text-left px-3 "
                  onClick={() => setSortSelect("Top Reviewed")}
                >
                  Top Reviewed{" "}
                </li>
                <li
                  class="hover:bg-gray-100 py-2 text-left px-3 "
                  onClick={() => setSortSelect("Stars(Lowest First)")}
                >
                  Stars(Lowest First){" "}
                </li>
              </ul>
            </button>
          </div>

          {/* Single Property Detail */}
          <Link to="/single-property">
            <div class="property_detail border border-gray-400 py-5 px-3 flex flex-row justify-start gap-x-3 mt-4">
              <article class="flex flex-row space-x-3 ">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/hotel/square600/333543119.webp?k=8f0009ad96d0c73bacdcd4613aa5333e6eb094d53bd6bd61fcc32f0fb3bdf644&o=&s=1"
                  alt=""
                  class="rounded-lg h-[200px]"
                  width="200"
                  height="200"
                />
              </article>

              <div class="flex flex-row justify-between flex-1">
                <article class="flex-1">
                  <div class="flex flex-row items-start space-x-1">
                    <p class="text-lg font-bold text-[#0071c2] hover:text-red-900 space-x-1">
                      Lagos Continental Hotel{" "}
                    </p>
                    <p class="self-start">
                      <Icon
                        icon={faStar}
                        class={`text-yellow-400 text-[10px]`}
                      />
                      <Icon
                        icon={faStar}
                        class={`text-yellow-400 text-[10px]`}
                      />
                      <Icon
                        icon={faStar}
                        class={`text-yellow-400 text-[10px]`}
                      />
                      <Icon
                        icon={faStar}
                        class={`text-yellow-400 text-[10px]`}
                      />
                      <Icon
                        icon={faStar}
                        class={`text-yellow-400 text-[10px]`}
                      />
                    </p>

                    <span class="px-1">
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        class=" text-base  w-3 h-3"
                      />
                    </span>
                  </div>

                  <p class="text-[11px]  text-blue-600 space-x-1.5">
                    <span class="underline">Victoria Island, Lagos</span>
                    <span class="underline">Show on map</span>
                    <span class="text-gray-600">11.1 km from centre</span>
                    <span class="text-gray-600">Beach nearby</span>
                  </p>

                  <p class="text-[11px] py-1">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faUmbrellaBeach} />{" "}
                    </span>
                    2.6 km from beach
                  </p>
                  <p class="text-[11px]">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faLeaf} />{" "}
                    </span>
                    Travel Sustainable Property
                  </p>
                  <p class="text-[11px]">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faLaptop} />{" "}
                    </span>
                    Work Friendly
                  </p>
                  <section class="space-y-0.5">
                    <p class="font-medium text-[12px] text-gray-800 ">
                      Standard King Room
                    </p>
                    <p class="text-[11px] "> 1 large double bed </p>
                    <p class="text-[12px] font-medium text-green-600">
                      FREE cancellation • No prepayment needed
                    </p>

                    <p class="text-[12px] font-medium text-red-500">
                      {" "}
                      Only 3 rooms left at this price on our site{" "}
                    </p>
                  </section>
                </article>

                <article class="px-2   ">
                  <div class="flex flex-row items-center justify-end ">
                    <p class="flex flex-col space-x-0 pr-2 ">
                      <span class="text-[15px] text-gray-800 font-medium">
                        Fabulous{" "}
                      </span>
                      <span class="text-[11px] self-end"> 702 Reviews </span>
                    </p>
                    <p class="bg-blue-800 rounded-r-lg rounded-tl-lg text-white font-bold p-1 ">
                      8.0
                    </p>
                  </div>
                  <div class="text-end">
                    <p class="text-base font-medium text-[#0071c2] py-1">
                      Location 10{" "}
                    </p>
                    <p class="text-[11px] bg-yellow-500  py-0.5">
                      New to Booking.com
                    </p>
                  </div>
                  <div class="text-end self-end pt-2">
                    <p class="text-[11px] text-gray-500">4 nights, 2 adults</p>
                    <p class="text-lg font-medium">NGN 124,306</p>
                    <p class="text-[11px] text-gray-600">
                      {" "}
                      <span>Includes taxes and charges</span>{" "}
                    </p>
                    <button class="bg-[#0071c2] text-xs mt-2 w-full text-white font-medium px-2 py-2 rounded ">
                      see availability{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          class="w-3 h-3"
                        />
                      </span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </Link>
          <Link to="/single-property">
            <div class="property_detail border border-gray-400 py-5 px-3 flex flex-row justify-start gap-x-3 mt-4">
              <article class="flex flex-row space-x-3 ">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/hotel/square600/318110349.webp?k=647d5e5c97000db665d75a9e93efb44cf27a0590bfd9bf340d72df2ef5faaab7&o=&s=1"
                  alt=""
                  class="rounded-lg h-[200px]"
                  width="200"
                  height="200"
                />
              </article>

              <div class="flex flex-row justify-between flex-1">
                <article class="flex-1">
                  <p class="text-lg font-bold text-[#0071c2] hover:text-red-900 space-x-1">
                    <span> Nordic Hotel, Lagos</span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[12px] midd"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[12px] midd"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[12px] midd"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[12px] midd"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[12px] midd"
                      />
                    </span>
                    <span class="px-2">
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        class=" text-base  w-3 h-3"
                      />
                    </span>
                  </p>
                  <p class="text-[11px]  text-blue-600 space-x-1.5">
                    <span class="underline">Victoria Island, Lagos</span>
                    <span class="underline">Show on map</span>
                    <span class="text-gray-600">11.1 km from centre</span>
                    <span class="text-gray-600">Beach nearby</span>
                  </p>

                  <p class="text-[11px] py-1">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faUmbrellaBeach} />{" "}
                    </span>
                    2.6 km from beach
                  </p>
                  <p class="text-[11px]">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faLeaf} />{" "}
                    </span>
                    Travel Sustainable Property
                  </p>
                  <p class="text-[11px]">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faLaptop} />{" "}
                    </span>
                    Work Friendly
                  </p>
                  <section class="space-y-0.5">
                    <p class="font-medium text-[12px] text-gray-800 ">
                      Standard King Room
                    </p>
                    <p class="text-[11px] "> 1 large double bed </p>
                    <p class="text-[12px] font-medium text-green-600">
                      FREE cancellation • No prepayment needed
                    </p>
                    <p class="text-[11px] font-medium">
                      {" "}
                      You can cancel later, so lock in this great price today.{" "}
                    </p>
                    <p class="text-[12px] font-medium text-red-500">
                      {" "}
                      Only 3 rooms left at this price on our site{" "}
                    </p>
                  </section>
                </article>

                <article class="px-2   ">
                  <div class="flex flex-row items-center justify-end ">
                    <p class="flex flex-col space-x-0 pr-2 ">
                      <span class="text-[15px] text-gray-800 font-medium">
                        Fabulous{" "}
                      </span>
                      <span class="text-[11px] self-end"> 702 Reviews </span>
                    </p>
                    <p class="bg-blue-800 rounded-r-lg rounded-tl-lg text-white font-bold p-1 ">
                      8.0
                    </p>
                  </div>
                  <div class="text-end">
                    <p class="text-base font-medium text-[#0071c2] py-1">
                      Location 10{" "}
                    </p>
                    <p class="text-[11px] bg-yellow-500  py-0.5">
                      New to Booking.com
                    </p>
                  </div>
                  <div class="text-end self-end pt-2">
                    <p class="text-[11px] text-gray-500">4 nights, 2 adults</p>
                    <p class="text-lg font-medium">NGN 124,306</p>
                    <p class="text-[11px] text-gray-600">
                      {" "}
                      <span>Includes taxes and charges</span>{" "}
                    </p>
                    <button class="bg-[#0071c2] text-xs mt-2 w-full text-white font-medium px-2 py-2  ">
                      See availability{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          class="w-3 h-3"
                        />
                      </span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </Link>

          <Link to="/single-property">
            <div class="property_detail border border-gray-400 py-5 px-3 flex flex-row justify-start gap-x-3 mt-4">
              <article class="flex flex-row space-x-3 ">
                <img
                  src="https://t-cf.bstatic.com/xdata/images/hotel/square600/250058565.webp?k=8c4f7090701aa0c46bb32a2db8fca7f37cd0516c9d5b05b5f6c79afe00d48e5c&o=&s=1"
                  alt=""
                  class="rounded-lg h-[200px]"
                  width="200"
                  height="200"
                />
              </article>

              <div class="flex flex-row justify-between flex-1">
                <article class="flex-1">
                  <div class="text-lg font-bold text-[#0071c2] hover:text-red-900 space-x-0.5 flex flex-row items-center">
                    <p> Raddisson Blu Anchorage Hotel</p>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[10px] "
                      />
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[10px] "
                      />
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[10px] "
                      />
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[10px] "
                      />
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        class="text-yellow-400 text-[10px] "
                      />
                    </p>
                    <p class="px-2">
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        class=" text-base  w-3 h-3"
                      />
                    </p>
                  </div>
                  <p class="text-[11px]  text-[#0071c2] space-x-1.5">
                    <span class="underline">Victoria Island, Lagos</span>
                    <span class="underline">Show on map</span>
                    <span class="text-gray-600">11.1 km from centre</span>
                    <span class="text-gray-600">Beach nearby</span>
                  </p>

                  <p class="text-[11px] py-1">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faUmbrellaBeach} />{" "}
                    </span>
                    2.6 km from beach
                  </p>
                  <p class="text-[11px]">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faLeaf} />{" "}
                    </span>
                    Travel Sustainable Property
                  </p>
                  <p class="text-[11px]">
                    <span class="pr-1 text-gray-500">
                      <FontAwesomeIcon icon={faLaptop} />{" "}
                    </span>
                    Work Friendly
                  </p>
                  <section class="space-y-0.5">
                    <p class="font-medium text-[12px] text-gray-800 ">
                      Standard King Room
                    </p>
                    <p class="text-[11px] "> 1 large double bed </p>
                    <p class="text-[12px] font-medium text-green-600">
                      FREE cancellation • No prepayment needed
                    </p>
                    <p class="text-[11px] font-medium">
                      {" "}
                      You can cancel later, so lock in this great price today.{" "}
                    </p>
                    <p class="text-[12px] font-medium text-red-500">
                      {" "}
                      Only 3 rooms left at this price on our site{" "}
                    </p>
                  </section>
                </article>

                <article class="px-2   ">
                  <div class="flex flex-row items-center justify-end ">
                    <p class="flex flex-col space-x-0 pr-2 ">
                      <span class="text-[15px] text-gray-800 font-medium">
                        Fabulous{" "}
                      </span>
                      <span class="text-[11px] self-end"> 702 Reviews </span>
                    </p>
                    <p class="bg-blue-800 rounded-r-lg rounded-tl-lg text-white font-bold p-1 ">
                      8.0
                    </p>
                  </div>

                  <div class="text-end self-end pt-2">
                    <button class="bg-[#0071c2] text-xs mt-2 w-full text-white font-medium px-2 py-2 rounded ">
                      Show Prices{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          class="w-3 h-3"
                        />
                      </span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </Link>
        </article>
      </section>
    </section>
  );
};

export default SearchResults;
