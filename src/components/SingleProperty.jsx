import {
  faBed,
  faBriefcase,
  faBuilding,
  faChampagneGlasses,
  faCheck,
  faChevronDown,
  faCircleInfo,
  faClipboardCheck,
  faClock,
  faDumbbell,
  faHeart,
  faHouse,
  faMapPin,
  faMugHot,
  faParking,
  faShare,
  faShareAlt,
  faShuttleVan,
  faSmokingBan,
  faSpa,
  faSwimmer,
  faTimes,
  faUser,
  faUtensils,
  faWater,
  faWifi,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import GeneralModal from "../features/modal/GeneralModal";
import ModalContent from "../features/modal/ModalContent";
import SliderContent from "../features/modal/SliderContent";
import Icon from "../utils/Icon";
import FAQS from "./FAQS";
import Footer from "./Footer";
import HouseRules from "./HouseRules";
import Images from "./Images";
import NewsLetter from "./NewsLetter";
import QuestionCard from "./QuestionCard";
import ReviewCards from "./ReviewCards";
import SideSearchBar from "./SideSearchBar";
import SwiperScroll from "./SwiperScroll";
import TableBody from "./TableBody";
import Tags from "./Tags";

const SingleProperty = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);
  return (
    <div>
      <section class="max-w-screen-lg mx-auto ">
        {/* <div>
                                    <button onClick = {() => setModalOpen(!modalOpen)}>Open Modal</button>
                                   {modalOpen && <GeneralModal modalOpen={modalOpen} setModalOpen= {setModalOpen} content = {<ModalContent />} />}
                              
                                </div> */}
        {/* {modalOpen && <ImageSlider modalOpen={modalOpen} setModalOpen= {setModalOpen} />} */}

        <article class="bg-[#fff0e0] ">
          <div
            class="px-6 py-3 cursor-pointer w-full "
            onClick={() => setOpen(!open)}
          >
            <div class="space-x-6 w-full flex flex-row ">
              <FontAwesomeIcon
                icon={faCircleInfo}
                class="w-6 h-6 text-red-500"
              />
              <p class="font-bold "> Coronavirus (COVID-19) Support </p>
              <p class="justify-end">
                <FontAwesomeIcon icon={faChevronDown} class="text-xs" />
              </p>
            </div>
          </div>
          <div
            class={`${
              open ? "visible" : "hidden "
            }mt-3 text-xs space-y-4 pl-[75px]`}
          >
            <p>
              Get the travel advice you need. Read more about possible travel
              restrictions before you go.
            </p>
            <p class="text-blue-600 hover:underline pb-4">Read More</p>
          </div>
        </article>

        <section class="flex flex-row gap-4">
          <article class="w-1/4">
            <p class="px-3 py-2 text-sm font-medium text-center bg-blue-100 my-3">
              {" "}
              We Price Match{" "}
            </p>
            <SideSearchBar />
            <p
              class="mt-3 w-full h-[150px] 
             bg-[url('https://t-cf.bstatic.com/psb/capla/static/media/map-entry-point.6b01012a.png')] 
                rounded  mb-4 flex justify-center items-center "
            >
              <button class="px-4 py-2 bg-blue-600 rounded text-[12px] font-bold text-white ">
                Show on Map
              </button>
            </p>
          </article>

          <article class="w-3/4 ">
            <div class="flex flex-row justify-between w-full text-[#0071c2] gap-x-0.5">
              <button class="w-full py-2 text-sm font-medium text-center bg-blue-100 my-3">
                {" "}
                Info &amp; prices{" "}
              </button>
              <button class="w-full py-2 text-sm font-medium text-center bg-blue-100 my-3">
                {" "}
                Facilities{" "}
              </button>
              <button class="w-full py-2 text-sm font-medium text-center bg-blue-100 my-3">
                House Rules{" "}
              </button>
              <button class="w-full py-2 text-sm font-medium text-center bg-blue-100 my-3">
                {" "}
                The Fine Print
              </button>
              <button class="w-full py-2 text-sm font-medium text-center bg-blue-100 my-3">
                Guest Reviews (701)
              </button>
            </div>

            <div class="flex flex-row justify-between items-start ">
              <div class="space-y-1">
                <p class="space-x-3">
                  <span class="bg-gray-600/60 px-2 py-1 text-white text-xs">
                    Hotel
                  </span>
                  <span>*****%</span>
                  <span class="text-xs">Airport Shuttle</span>
                  <span class="text-xs">Travel Sustainable Property</span>
                </p>

                <p class="text-gray-800 font-bold text-xl">
                  Lagos Continental Hotel
                </p>
                <p class="text-[13.5px]">
                  Plot 52A Kofo Abayomi Street, Victoria Island, Victoria
                  Island, 23401 Lagos, Nigeria –
                </p>
                <p class="text-xs font-bold text-blue-500 pb-2">
                  Great location - show map
                </p>
              </div>

              <div class="text-right flex flex-col items-end">
                <p class="space-x-3">
                  <span>
                    <FontAwesomeIcon
                      icon={faHeart}
                      class="text-red-600 w-5 h-5"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      class="w-5 h-5 text-blue-400"
                    />
                  </span>

                  <button class="bg-blue-600 px-2 text-sm py-2 text-white font-medium ">
                    Reserve
                  </button>
                </p>
                <p class="text-sm">We Price Match</p>
              </div>

              <div></div>
            </div>

            <article class="">
              <div class="grid grid-cols-5 grid-rows-4 gap-2">
                <div class="row-span-2 col-span-2">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/337263673.jpg?k=9be8b42f2c97087cd78119b069e597a1afa34319a23b2a517146e6b39b645007&o=&hp=1"
                    alt=""
                    class=" rounded h-[175px] w-full "
                  />
                </div>
                <div class="row-span-4 col-span-3">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/333543119.jpg?k=d9cfb214b69834669b434862db16a5a155fdb90b78dd34a2b7904b58fb12c5e6&o=&hp=1"
                    alt=""
                    class=" w-full rounded h-[355px]"
                  />
                </div>

                <div class="row-span-2 col-span-2">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/333550390.jpg?k=cb361d9f65ea9ef8b39167a3637a9b6bec50a25d314ca59d366426bf51147e0a&o=&hp=1"
                    alt=""
                    class=" rounded  h-[175px] w-full"
                  />
                </div>

                <div class="col-span-1">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/337263032.jpg?k=2f6e0ce9c65fc14547a6208c32b0aedc52eb2d89efe1df5429ecb5095830b693&o=&hp=1"
                    alt=""
                    class="rounded w-full  h-[100px] "
                  />
                </div>
                <div class="col-span-2">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/121403657.jpg?k=c2f4c86a713fb52b3d785f08a88353a3c99f3e667cde3e0b60ace1a6a50a337c&o=&hp=1"
                    alt=""
                    class="rounded h-[100px] w-full max-w-full"
                  />
                </div>
                <div class="col-span-1">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/80927411.jpg?k=d4068ee6e83c4339aef783ab611fcd697d574797c7994c0ec450d02b30fd4c83&o=&hp=1"
                    alt=""
                    class=" rounded h-[100px] w-full"
                  />
                </div>
                <div class="col-span-1">
                  <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/337275167.jpg?k=f12b67e93faa125e7573aeb0ea80c0107157bcd19aa8fc0e106d9cd28c34c649&o=&hp=1"
                    alt=""
                    class="rounded h-[100px] w-full"
                  />
                </div>
              </div>
            </article>
          </article>
        </section>

        <section class="flex flex-row pb-12 mt-4 border-b border-gray-300">
          <article class="flex-1 w-2/3 pr-6 ">
            <h2 class="text-xl font-bold">
              Stay in the heart of Lagos –{" "}
              <span class="text-blue-500 text-xs">
                {" "}
                Great location - show map{" "}
              </span>{" "}
            </h2>
            <ul class="list-none space-y-3 text-xs  text-justify">
              <li class="mt-4">
                {" "}
                Lagos Continental Hotel in Lagos features a fitness centre and a
                terrace. Featuring a 24-hour front desk, this property also
                provides guests with a restaurant. The property provides sea
                views and an outdoor pool.
              </li>
              <li>
                The hotel will provide guests with air-conditioned rooms with a
                hot tub, free toiletries, a flat-screen TV with cable channels
                and dvd player. Every room includes a private bathroom with a
                bath, while selected rooms also feature a balcony and others
                also offer city views. All rooms will provide guests with a desk
                and a kettle.
              </li>
              <li>
                A continental breakfast is served each morning at the property.
              </li>
              <li>
                Popular points of interest near Intercontinental Hotel Lagos
                include Mega Plaza Century 21 Mall, Lekki Market and Red Door
                Gallery.
              </li>
              <li>
                Couples particularly like the location — they rated it{" "}
                <strong> 9.0 </strong>for a two-person trip.
              </li>
              <li>
                Lagos Continental Hotel has been welcoming Booking.com guests
                since 13 Oct 2016.
              </li>
            </ul>
            <div>
              <h3 class="font-medium my-3">Most Popular Facilities</h3>
              <div class="text-xs flex flex-wrap items-center gap-y-3 ">
                <p class="inline-flex items-center pr-3">
                  <Icon
                    icon={faSwimmer}
                    class={`text-brand-light pr-1 w-5 h-5`}
                  />{" "}
                  1 Swimming Pool
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon
                    icon={faShuttleVan}
                    class={`text-brand-light pr-1 w-5 h-5`}
                  />{" "}
                  Airport shuttle
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon
                    icon={faDumbbell}
                    class={`text-brand-light pr-1 w-5 h-5`}
                  />{" "}
                  very good fitness
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon
                    icon={faSmokingBan}
                    class={`text-brand-light pr-1 w-5 h-5`}
                  />{" "}
                  Non-smoking rooms
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon icon={faWifi} class={`text-brand-light pr-1 w-5 h-5`} />{" "}
                  Free WiFi
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon icon={faSpa} class={`text-brand-light pr-1 w-5 h-5`} />{" "}
                  Spa and wellness centre
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon
                    icon={faUtensils}
                    class={`text-brand-light pr-1 w-5 h-5`}
                  />{" "}
                  Restaurant{" "}
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon
                    icon={faChampagneGlasses}
                    class={`text-brand-light pr-1 w-5 h-5`}
                  />{" "}
                  Bar
                </p>
                <p class="inline-flex items-center pr-3">
                  <Icon icon={faMugHot} class="text-brand-light pr-1 w-5 h-5" />{" "}
                  Breakfast
                </p>
              </div>
            </div>
            <div class="mt-6 mb-3">
              <p class="text-xs">
                <span class="font-medium text-sm">
                  ATM and Currency Exchange:
                </span>
                Need cash? There's an ATM machine and a currency exchange
                service at this property.
              </p>
            </div>
          </article>

          <article class="w-1/3 ml-2 pl-8">
            <section class="bg-blue-50 text-xs p-3 space-y-4 text-gray-600">
              <h2 class="text-base font-bold">Property highlights</h2>
              <div class="space-y-1">
                <h3 class="font-bold  text-sm mb-2">
                  Perfect for a 4-night Stay
                </h3>

                <p class="inline-flex flex-row items-center">
                  <span class="my-2 pr-3">
                    <FontAwesomeIcon icon={faMapPin} />
                  </span>
                  <span>Top location: Highly rated by recent guests (8.7)</span>
                </p>
                <p class="inline-flex flex-row items-center">
                  <span class="my-2 pr-3">
                    <FontAwesomeIcon icon={faBed} />
                  </span>
                  <span>
                    Want a great night's sleep? This hotel was highly rated for
                    its very comfy beds.
                  </span>
                </p>
              </div>

              <div>
                <h3 class="font-bold text-sm mb-2"> Breakfast info</h3>
                <p>
                  Continental, Full English/Irish, Vegetarian, Asian, American,
                  Buffet, Breakfast to go
                </p>
              </div>

              <div>
                <h3 class="font-bold text-sm mb-2">Rooms with:</h3>
                <ul class="space-y-2">
                  <li>
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faHouse} class="pr-1" />
                    </span>{" "}
                    City view
                  </li>
                  <li>
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faWater} class="pr-1" />
                    </span>{" "}
                    Sea view
                  </li>
                  <li>
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faSwimmer} class="pr-1" />
                    </span>{" "}
                    Pool with a view
                  </li>
                  <li>
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faParking} class="pr-1" />
                    </span>{" "}
                    Free private parking available at the hotel
                  </li>
                </ul>
              </div>

              <div class="">
                <h3 class="font-bold  text-sm mb-2"> Loyal Customers</h3>
                <p>
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} class=" pr-2" />
                  </span>
                  There are more repeat guests here than most other properties.
                </p>
              </div>
              <div class="my-4">
                <button class="bg-blue-600 py-2 w-full rounded-sm text-white font-medium text-sm ">
                  Reserve
                </button>
              </div>
            </section>
          </article>
        </section>

        <section class="pb-40">
          <div class="flex justify-between py-3">
            <h2 class="text-[23px] text-gray-800 font-bold">Availability</h2>
            <p class="text-xs ">
              <span>
                <Icon icon={faClipboardCheck} class={`w-4 h-4 pr-2 `} />
              </span>
              We Price Match
            </p>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-600">Filter By : </p>
            <p class="space-x-2 mt-3 mb-2">
              <input type="checkbox" name="" id="" class="py-3 " />
              <span>Rooms</span>
              <input type="checkbox" name="" id="" />
              <span>Suites</span>
            </p>
          </div>
          <div class="flex flex-row">
            <table class="w-full text-xs ">
              <thead class=" bg-[#4c76b2] text-white font-medium sticky top-0">
                <tr class="py-20">
                  <td class="py-3 px-3">Room Type</td>
                  <td class="border border-cyan-500 px-1">Sleeps</td>
                  <td class="border border-gray-500 bg-blue-800 px-2">
                    Price for 4 Night
                  </td>
                  <td class="border border-gray-500 px-1">Your Choices</td>
                  <td class="border border-gray-500  px-1 w-[15px]">
                    Select rooms
                  </td>
                  {/* <td class='border border-gray-500  px-1 w-[15px]'></td>      */}
                </tr>
              </thead>
              <TableBody />
            </table>
            <div class="sticky top-2">
              <p class="py-[21px] bg-[#4c76b2]"></p>
              <button class="bg-blue-900 text-white font-medium mx-3 pl-6  pr-5 py-1 my-3 rounded ">
                {" "}
                I'll reserve
              </button>
              <ul class="pl-3 text-[12px] no-wrap">
                <li>Confirmation is immediate</li>
                <li>No booking or credit card fees</li>
              </ul>
            </div>
          </div>

          {/* DEALS SECTION  -  UNDERNEATH BOOKINGS TABLE  */}
          <div class="my-12 space-y-5">
            <p class="bg-red-100 border border-red-400 py-2 text-xs flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                class="w-4 h-4 text-red-500 px-3"
              />
              <span class="font-medium">
                Limited supply in Lagos for your dates:
              </span>
              1 five-star hotel like this is already unavailable on our site
            </p>

            <div class="flex flex-row  text-xs space-x-2 border border-gray-300 py-3 px-3 items-center ">
              <p>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  class="w-7 h-7 text-green-800"
                />
              </p>
              <p>
                <h5 class="font-bold text-[13px]">
                  Travel Sustainable Property
                </h5>
                <span>
                  This property is part of the Travel Sustainable programme,
                  which means it’s taken significant steps to make your stay
                  more sustainable.
                </span>
                <a class="mr-auto">Read More </a>
              </p>
            </div>

            <div class="flex flex-row  text-xs space-x-2 border bg-green-100 border-green-300 py-4 px-3 ">
              <p class="items-start">
                <FontAwesomeIcon
                  icon={faCheck}
                  class="w-7 h-7 text-green-800"
                />
              </p>
              <p>
                <h5 class="font-bold text-[13px]">Tip: Stay flexible</h5>
                <span>
                  Since your dates are a while away, choose free cancellation to
                  stay flexible. A change of plans is no problem when you have
                  free cancellation!
                </span>
                <a class="mr-auto">Read More </a>
              </p>
              <p class="self-end justify-self-end rounded-full bg-red-50">
                <FontAwesomeIcon icon={faTimes} />
              </p>
            </div>
          </div>

          {/* CLOSEST MONUMENT OR LANDMARK SECTION */}
          <div class="w-[400px]">
            <h2 class="font-bold text-xl mb-4">Closest Beach</h2>

            <article class="border border-gray-200 rounded py-2 px-3 flex flex-row  space-x-3 items-center ">
              <div class="w-16 h-16 bg-gray-300 inline-flex justify-center items-center ">
                <FontAwesomeIcon icon={faSwimmer} class="w-8 h-8 p-2 " />
              </div>
              <div>
                <h3 class="font-bold">Landmark Beach</h3>
                <p class=" text-[12px]">8.6 Fabulous Beach</p>
                <p class="text-[11px]">2.5km from property </p>
              </div>
            </article>
          </div>
          {/* GUEST REVIEWS */}

          <article>
            <div class="my-3">
              <h2 class="font-bold text-xl mb-4 mt-6">Guest Reviews</h2>
              <p class="space-x-3">
                <span
                  class="bg-blue-700
                                 text-lg font-medium "
                >
                  {" "}
                  7.8
                </span>
                <span>Good</span>
                {/* <span><FontAwesomeIcon}/></span> */}
                <span>699 reviews</span>
                <span>Read all reviews</span>
              </p>
            </div>

            <section class="w-full">
              <h4 class="mb-2 font-medium text-[15px]">Categories:</h4>
              <div class="flex flex-row flex-wrap gap-y-4 gap-x-3 text-[13px] w-full">
                <article class="w-[32%] flex flex-col  rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full ">
                    <p class="w-[82%] h-full bg-blue-800 rounded-full "></p>
                  </div>
                </article>
                <article class="w-[32%] flex flex-col   rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full">
                    <p class="w-[82%] h-full bg-blue-800 rounded-full "></p>
                  </div>
                </article>
                <article class="w-[32%] flex flex-col   rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full">
                    <p class="w-[82%] h-full bg-blue-800 rounded-full "></p>
                  </div>
                </article>
                <article class="w-[32%] flex flex-col   rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full">
                    <p class="w-[82%] h-full bg-blue-800 rounded-full "></p>
                  </div>
                </article>
                <article class="w-[32%] flex flex-col   rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full">
                    <p class="w-[82%] h-full bg-blue-800 rounded-full "></p>
                  </div>
                </article>
                <article class="w-[32%] flex flex-col   rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full">
                    <p class="w-[82%] h-full bg-blue-800 rounded-full "></p>
                  </div>
                </article>

                <article class="w-[32%] flex flex-col justify-between  rounded border-blue-800">
                  <div class="flex justify-between">
                    <p class="font-medium">Staff</p>
                    <p class="font-medium">8.2</p>
                  </div>
                  <div class="w-full h-2 bg-gray-200  rounded-full">
                    <p class="w-[82%] h-full bg-green-800 rounded-full "></p>
                  </div>
                </article>
              </div>
            </section>

            {/*Topics to read  */}
            <section>
              <h3 class="font-bold text-base mb-4 mt-6">
                Select topics to read reviews
              </h3>
              <p class="flex flex-row space-x-3">
                <Tags icon={faChampagneGlasses} name={`Breakfast`} />
                <Tags icon={faHouse} name={`Rooms`} />
                <Tags icon={faUtensils} name={`Dinner`} />
                <Tags icon={faShuttleVan} name={`View`} />
                <Tags icon={faBuilding} name={`Location`} />
              </p>
            </section>

            {/* Review Cards */}
            <section>
              <h3 class="font-bold text-base mb-4 mt-6">
                See what guests loved the most
              </h3>
              <article class="relative">
                {/* <SwiperScroll content =  {<ReviewCards name = {`Victor`} country = {`Poland`}/>} /> */}

                {/* <ReviewCards name = {`Piotr`}  country = {`Azerbaijan`}/> 
                                           <ReviewCards name = {`Kenn`} country = {`Germany`} /> */}
                <SwiperScroll
                  content={<ReviewCards name={`Victor`} country={`Poland`} />}
                />
              </article>

              <button class="mt-6 text-blue-700 px-1.5 py-1.5 text-[13px] font-medium   border  border-blue-700">
                Read all reviews
              </button>
            </section>
            {/* Property questions and answers */}
            <section>
              <div class="flex flex-row justify-between">
                <h2 class="font-bold text-xl mb-4 mt-6">
                  Property Questions &amp; answers{" "}
                </h2>
                <button class="bg-[#0071c2] text-xs h-8  text-white font-medium px-2  ">
                  See availability{" "}
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} class="w-3 h-3" />
                  </span>
                </button>
              </div>
              <p class="text-[13px]">
                Browse questions from guests for anything extra you want to know
                about the property
              </p>
              <p class="text-xs text-green-700">
                The property usually replies within a few days
              </p>

              <article class="mt-6  relative">
                <SwiperScroll content={<QuestionCard />} />
              </article>

              <div class=" flex flex-row space-x-2 mb-6">
                <button class="mt-6 text-blue-700 px-8 py-1.5 text-[13px] font-medium   border  border-blue-700">
                  Ask a Question
                </button>
                <button class="mt-6 text-blue-700 px-5 py-1.5 text-[13px] font-medium   border  border-blue-700">
                  See More Questions(15)
                </button>
              </div>
            </section>

            {/* House Rules */}
            <div>
              <HouseRules />
              {/* Open Modal */}
              {/* <button onClick = {() => setModalOpen(!modalOpen)}>Open Modal</button> */}
              {/* {modalOpen && <GeneralModal modalOpen={modalOpen} setModalOpen= {setModalOpen} />} */}
            </div>

            {/* FAQS */}
            <FAQS />

            {/* <Images /> */}
          </article>
        </section>
      </section>

      <section></section>
      <NewsLetter />
      {/* <Footer /> */}
    </div>
  );
};

export default SingleProperty;
