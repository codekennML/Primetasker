import React, { useRef, useEffect, forwardRef, useState, useMemo } from "react";
import { Form, Formik, FieldArray } from "formik";
import {
  AiFillEnvironment,
  AiFillStar,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlineStar,
} from "react-icons/ai";
import { BiMapPin } from "react-icons/bi";
import {
  FaCommentAlt,
  FaFlag,
  FaRegComment,
  FaRegCommentAlt,
  FaRegFlag,
  FaSearch,
} from "react-icons/fa";
import Naira from "../../assets/svgs/Naira.jsx";
import CustomText from "../utils/CustomFieldComp/CustomText.jsx";
import Nav from "./Nav";

import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../features/modal/modalSlice";

import TaskFilters from "./TaskFilters.jsx";
import { HiReply } from "react-icons/hi";

import { FaImage, FaTimes } from "react-icons/fa";

import CustomTextarea from "../utils/CustomFieldComp/CustomTextarea";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { mapStyles } from "./map.js";
import { motion } from "framer-motion";
const Map = ({ displayBrief }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    // if (marker === activeMarker) {
    //   return;
    // }
    setActiveMarker(marker);
  };

  const markers = [
    { id: 1, name: "Surulere", position: { lat: 6.502829, lng: 3.342496 } },
    { id: 2, name: "Lekki", position: { lat: 6.439059, lng: 3.452626 } },
    {
      id: 3,
      name: "Shomolu",
      position: { lat: 6.569497, lng: 3.306689 }, // Shomolu
    },
    {
      id: 4,
      name: "Victoria Island",
      position: { lat: 6.446162, lng: 3.420082 },
    },
    { id: 5, name: "Gbagada", position: { lat: 6.592861, lng: 3.383738 } },
  ];
  const [lng, setLng] = useState(3.3486);
  const [lat, setLat] = useState(6.4983);
  const center = useMemo(() => ({ lat: lat, lng: lng }), []);

  const mapAccessToken = "AIzaSyBA7FcU_VCO3RzLsVXFy3cGnlF0RUo8U9U";
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: mapAccessToken,
  });

  if (!isLoaded) return <div>Loading....</div>;

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      onLoad={handleOnLoad}
      heading={90}
      zoom={12}
      center={center}
      mapContainerClassName="w-full h-[95%]"
      options={{ styles: mapStyles, mapTypeControl: false }}
    >
      {markers.map((marker, index) => (
        <MarkerF
          key={marker.id}
          onClick={() => handleActiveMarker(marker.id)}
          position={marker.position}
          icon={{
            url: "https://res.cloudinary.com/dpmj4sjm9/image/upload/v1674924973/location_s6nvuo.png",
            // fillColor: "#EB00FF",
            // scale: 7,
            // "https://cdn.mindbowser.com/custom_marker_pin.svg"

            // "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }}
        >
          {activeMarker === marker.id ? (
            <InfoWindowF>
              <div className="w-[300px]   px-2 py-3 space-y-4">
                <p className="text-gray-900/90 font-medium text-[15px] text-left pb-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores
                </p>
                <div className="flex flex-row justify-between items-center pb-3 ">
                  <article className="font-medium w-1/2 text-gray-500">
                    <div className="flex items-center mb-2 space-x-2">
                      <img
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      />
                      <div>
                        <p className="py-2 text-gray-600 ">Posted By</p>
                        <p className=" text-purple-600 ">Jajamike K.</p>
                      </div>
                    </div>

                    <p className="font-medium text-gray-500 text-[12px]">
                      Due on Monday 24 Jan{" "}
                    </p>
                    <p className="font-medium text-gray-500 text-[12px] py-2">
                      Posted about 1hr ago{" "}
                    </p>
                  </article>
                  <article className="w-1/2">
                    <div className="flex items-center justify-center text-[30px] bg-blue-100/30 py-8 px-2 -space-x-1  rounded-lg  ml-6  text-purple-800 font-semibold ">
                      <p>
                        <Naira style={`w-10 h-10 font-medium`} />
                      </p>
                      <p>50k </p>
                    </div>
                  </article>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => {
                      displayBrief(true);
                      setActiveMarker(null);
                    }}
                    className="w-full py-3  rounded-full bg-purple-700 text-white text-[14px] font-medium "
                  >
                    View Task
                  </button>
                </div>
              </div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
};

const BrowseTasks = () => {
  const fileUploadRef = useRef();
  const displayFileUpload = (e) => {
    fileUploadRef.current.click();
  };
  const dispatch = useDispatch();

  const [showBrief, setShowBrief] = useState(false);

  return (
    <section className="max-w-screen-lg max-h-screen  mx-auto  ">
      <div className=" bg-white ">
        <div className=" px-6 py-2">
          <Nav />
        </div>
      </div>

      <div className=" relative justify-start  flex mt-3  ">
        <section className=" w-[35%]  pr-0   overflow-y-scroll h-[calc(100vh_-_50px)]  mb-24 space-y-3 relative">
          <TaskFilters />
          <div className=" mx-2 text-center  top-16 left-[25%] sticky">
            <button className="bg-purple-600 text-white font-medium py-2 text-[14px] px-4 rounded-lg">
              <span>New tasks available</span>
            </button>
          </div>

          <article
            onClick={() => setShowBrief(true)}
            className="bg-white px-4  rounded-lg pt-2 pb-1 border-l-[1px] shadow-md hover:bg-purple-100/10   "
          >
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[15px] font-sans font-medium text-gray-700 text-left ">
                  Replace smoke detectors for kids room in the house
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-start">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 100,000</span>
                </p>
                <div className="flex-1 justify-center items-center flex ">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt=""
                    className="align-end w-[60px] h-[60px] object-cover object-fit rounded-full mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[15px] font-sans font-medium text-gray-700 ">
                  Attention all animators and concept artists
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-start">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="flex-1 justify-center items-center flex ">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt=""
                    className="align-end w-[60px] h-[60px] object-cover object-fit rounded-full mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[15px] font-sans font-medium text-gray-700 ">
                  Carpenter Required - Caravan Interior re-lined.
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 600,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt=""
                    className="align-center w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]"> Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p className="text-[12px]"> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-purple-600 shadow-md  ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[13px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p>Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p> Lekki, LA</p>
                  </li>

                  {/* <li className="bg-gray-200/30 ">Midday</li>
                  <li className="bg-gray-200/30 ">25 Jan</li> */}
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-800 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-green-700/70">Open</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-l-[3px] border-gradient-to-b from-purple-600 to-blue-600 shadow-md hover:bg-purple-100/10   ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[14px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p className="text-[12px]">Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p className="text-[12px]"> Mid-day</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-purple-700">Assigned</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
          <article className="bg-white px-4 rounded-lg mb-2 pt-2 pb-1 border-purple-600 shadow-md  ">
            <div className="flex justify-between ">
              <div className="flex-1 flex-wrap space-y-2">
                <p className="text-[16px] font-sans font-medium text-gray-700 ">
                  Replace smoke detectors
                </p>
                <ul className="text-[13px] space-y-1.5 my-2 ">
                  <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineCalendar />
                    </p>
                    <p>Monday, 26 Jan</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineClockCircle />
                    </p>
                    <p> Mid-day</p>
                  </li>
                  <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] px-2">
                    <p>
                      <AiOutlineEnvironment />
                    </p>
                    <p> Lekki, LA</p>
                  </li>
                </ul>
              </div>

              <div className="pl-2.5 flex flex-col justify-between">
                <p className="justify-items-end text-[17px] text-purple-800 font-semibold text-center inline-flex items-center">
                  <span>
                    <Naira style={`w-5 h-5`} />
                  </span>
                  <span> 50,000</span>
                </p>
                <div className="justify-center flex ">
                  <img
                    src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=9TYl_jRWGZe3W1mvpGw8yTlh-sd3pwVtKplkuuwJpOQ="
                    alt=""
                    className="align-end w-[45px] h-[45px] object-cover object-fit rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="border-t py-0.5 mt-2">
              <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                <li className="flex items-center  ">
                  <p></p>
                  <p className="text-[14px] text-green-700/70">Open</p>
                </li>
                <li className="text-[20px]">&middot;</li>
                <li className="text-[13px]">3 offers</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="flex-1 h-[calc(100vh_-_50px)] overflow-y-scroll   mb-20 relative ">
          <motion.article
            // initial={{
            //   x: -10000,
            //   opacity: 0,
            // }}
            // animate={{
            //   x: 0,
            //   opacity: 100,
            // }}
            // transition={{
            //   duration: 5,
            // }}
            // className={
            //   showBrief ? "py-4 absolute  bg-white px-6 z-10" : "hidden"
            // }
            initial="initial"
            animate={showBrief ? "animate" : "initial"}
            variants={{
              initial: {
                x: -700,
                opacity: 0.7,
              },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.7 },
              },
            }}
            className="py-4 absolute bg-white px-6 z-10"
          >
            <div className="flex items-center  ">
              <div className="flex-1 ">
                <p className="text-[25px] font-bold text-slate-600  pl-2 ">
                  {" "}
                  Looking For Figma Designer For Gaming Long Term Position{" "}
                </p>
                <button
                  onClick={() => setShowBrief(false)}
                  className="text-xs text-purple-700 font-medium"
                >
                  Back to Map
                </button>
              </div>
              <div className="flex flex-col  p-6 rounded-lg bg-purple-100">
                <div className="flex items-center  text-[30px]     text-purple-900 font-bold ">
                  <p className="text-[30px]">
                    <Naira style={`w-10 h-10 font-medium`} />
                  </p>
                  <p>50k </p>
                </div>
                <li className=" cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-full mt-2 flex items-center text-white font-medium space-x-2 text-[13px] px-6 py-2.5">
                  <button onClick={() => dispatch(showModal("offerModal"))}>
                    {" "}
                    Make an Offer
                  </button>
                </li>
              </div>
            </div>

            <div className=" px-6 ">
              <div className="flex items-center space-x-3 ">
                <img
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover onject-center"
                />

                <p className="flex flex-col text-[14px] font-medium">
                  <span>Posted By</span>
                  <span className="text-[13px]">Rebecca Akinyemi</span>
                </p>
              </div>
              <ul className="text-[13px] my-4 flex items-center  space-x-3 ">
                <li className=" bg-gray-50 py-1 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3">
                  <p className="text-[20px] text-purple-500">
                    <AiOutlineCalendar />
                  </p>
                  <p>Expires : Monday, 26 Jan 2022</p>
                </li>
                <li className="bg-gray-50 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                  <p className="text-[20px] text-purple-500">
                    <AiOutlineClockCircle />
                  </p>
                  <p> Mid-day</p>
                </li>
                <li className=" bg-gray-50 rounded-full flex items-center text-gray-700/90 font-medium space-x-2 text-[13px] px-3 py-1">
                  <p className="text-[20px] text-purple-500">
                    <AiOutlineEnvironment />
                  </p>
                  <p> Lekki, LA</p>
                </li>
              </ul>
            </div>

            <div className="mt-2 ">
              <h3 className=" py-2 text-purple-700 font-bold">Task Details</h3>
              <p className="px-6 text-sm leading-relaxed text-gray-700 text-justify">
                Are you in search of a talented Figma designer to help bring
                your gaming project to life? Look no further! We are currently
                seeking a skilled designer with experience in Figma to join our
                team for a potential long-term position. The ideal candidate
                will have a strong portfolio showcasing their experience with
                designing for gaming themes....{" "}
                <span className="text-purple-700">Read More</span>
              </p>
            </div>

            <div className="mt-4 ">
              <h3 className=" py-2 text-purple-700 font-bold mb-2">
                Have Questions ? Ask away !
              </h3>
              <div className="flex flex-row ">
                <div>
                  <img
                    src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/4459042/image-9279721cde59631055f0cdab084e3ab2.jpg?width=136&height=136"
                    alt=""
                    className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                  />
                </div>

                <Formik
                  className="flex-1"
                  initialValues={{ comment: "", file: "" }}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                  }}
                >
                  {({ values, setFieldValue }) => {
                    return (
                      <Form className="flex-1 bg-gray-50 mx-4 rounded-lg pb-3 mt-4 focus-within:border-violet-400 border-2">
                        <div className="px-3 ">
                          <div className="relative ">
                            <CustomTextarea
                              autoFocus
                              disabled={
                                values.comment && values.comment.length >= 1400
                              }
                              maxlength="1400"
                              placeholder={`Reply to Kamsi Jaja`}
                              name="comment"
                              inputStyle="h-20 oveflow-y-scroll py-5 bg-gray-100 outline-0 border-none outline-0 text-gray-500 resize-none font-semibold"
                            />
                            <p className="absolute -bottom-6 right-2 text-[12px] fomt-semibold text-gray-600">
                              {`${values.comment.length}  of 1400`}
                            </p>
                          </div>

                          <div className="flex items-center justify-between py-1 mt-6">
                            <div className="flex-1">
                              {values.file ? (
                                <div className="flex items-center space-x-2 bg-gray-50 rounded">
                                  <span>
                                    <FaImage className="text-purple-600" />
                                  </span>
                                  <p className="max-w-52 truncate text-[13px] ">
                                    {values.file.name}
                                  </p>
                                  <button
                                    onClick={() => setFieldValue("file", "")}
                                  >
                                    <FaTimes className="text-gray-700 text-[13px]" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => displayFileUpload()}
                                  className=" rounded-full  p-1 px-2 flex items-center space-x-2"
                                >
                                  <span>
                                    <FaImage className="text-purple-600" />
                                  </span>

                                  <input
                                    type="file"
                                    ref={fileUploadRef}
                                    className="hidden"
                                    name="file"
                                    onChange={(e) =>
                                      setFieldValue(
                                        "file",
                                        e.currentTarget.files[0]
                                      )
                                    }
                                  />
                                </button>
                              )}
                            </div>

                            <button
                              disabled={values.comment.length < 1}
                              type="submit"
                              className="px-3 py-1 mt-1 text-purple-700 text-[13px]  bg-purple-200 rounded-full hover:text-gray-600 font-medium "
                            >
                              Send Question
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>

            <div className="my-6 pr-4  ">
              <h3 className=" py-2 text-purple-700 my-2 font-bold">
                All Offers
              </h3>
              <div className="space-y-4 ml-4">
                <article className="flex flex-col ">
                  <div className=" h-full  rounded-l-lg flex flex-row items-center space-x-2">
                    <div>
                      <img
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-gray-500 font-semibold text-[15px]">
                        Kamsi Jaja
                      </h3>

                      <p className="flex items-center space-x-1 py-1">
                        <span className="text-[16px] text-yellow-500">
                          <AiFillStar />
                        </span>
                        <span className="text-gray-800/70 font-semibold text-[15px]">
                          5.0 (95){" "}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className=" bg-[#f3f3f7]   py-2  px-3 text-sm  text-[#061257]  rounded-lg mt-2">
                    <p className="py-2 text-slate-800 leading-relaxed tracking-wide  text-justify px-2 text-[14px] ">
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      <span className="text-purple-700">read more</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center  space-x-4 pl-4 justify-end text-[12px] ">
                    <p className="text-[12px] text-purple-700 flex items-center space-x-2">
                      <span>Posted 40 mins ago</span>
                    </p>
                    <button
                      onClick={() => dispatch(showModal("OfferChat"))}
                      className="ml-auto  rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                    >
                      <span>
                        <HiReply />
                      </span>
                      <span> Reply</span>
                    </button>
                    <button className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                      <span>
                        <FaRegFlag />
                      </span>
                      <span>report</span>
                    </button>
                  </div>
                </article>
                <article className="flex flex-col ">
                  <div className=" h-full  rounded-l-lg flex flex-row items-center space-x-2">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-gray-500 font-semibold text-[15px]">
                        Kamsi Jaja
                      </h3>

                      <p className="flex items-center space-x-1 py-1">
                        <span className="text-[16px] text-yellow-500">
                          <AiFillStar />
                        </span>
                        <span className="text-gray-800/70 font-semibold text-[15px]">
                          5.0 (95){" "}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className=" bg-[#f3f3f7]   py-2  px-3 text-sm  text-[#061257]  rounded-lg mt-2">
                    <p className="py-2 text-slate-800 leading-relaxed tracking-wide  text-justify px-2 text-[14px] ">
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      .. <span className="text-purple-700">read more</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center  space-x-4 pl-4 justify-end text-[12px] ">
                    <p className="text-[12px] text-purple-700 flex items-center space-x-2">
                      <span>Posted 40 mins ago</span>
                    </p>
                    <button
                      onClick={() => showModal("replyModal")}
                      className="ml-auto  rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                    >
                      <span>
                        <HiReply />
                      </span>
                      <span> Reply</span>
                    </button>
                    <button className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                      <span>
                        <FaRegFlag />
                      </span>
                      <span>report</span>
                    </button>
                  </div>
                </article>
                <article className="flex flex-col ">
                  <div className=" h-full  rounded-l-lg flex flex-row items-center space-x-2">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center mb-1"
                      />
                    </div>

                    <div className="flex flex-col items-center text-[13px] font-medium text-center ">
                      <h3 className="text-gray-500 font-semibold text-[15px]">
                        Kamsi Jaja
                      </h3>

                      <p className="flex items-center space-x-1 py-1">
                        <span className="text-[16px] text-yellow-500">
                          <AiFillStar />
                        </span>
                        <span className="text-gray-800/70 font-semibold text-[15px]">
                          5.0 (95){" "}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className=" bg-[#f3f3f7]   py-2  px-3 text-sm  text-[#061257]  rounded-lg mt-2">
                    <p className="py-2 text-slate-800 leading-relaxed tracking-wide  text-justify px-2 text-[14px] ">
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      Are you in search of a talented Figma designer to help
                      bring your gaming project to life? Look no further! We are
                      currently seeking a skilled designer with experience....{" "}
                      <span className="text-purple-700">read more</span>
                    </p>
                    <div className="w-full flex items-center  space-x-4 pt-2">
                      <p className="text-[12px] text-purple-700 ">
                        40 mins ago
                      </p>
                      <button
                        onClick={() => showModal("replyModal")}
                        className="ml-auto text-[13px] rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                      >
                        <span>
                          <HiReply />
                        </span>
                        <span> reply</span>
                      </button>
                      <button className="text-[13px]  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                        <span>
                          <FaRegFlag />
                        </span>
                        <span>report</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex items-center  space-x-4 pl-4 justify-end text-[12px] ">
                    <p className="text-[12px] text-purple-700 flex items-center space-x-2">
                      <span>Posted 40 mins ago</span>
                    </p>
                    <button
                      onClick={() => showModal("replyModal")}
                      className="ml-auto  rotate-[0deg] inline-flex items-center text-purple-700 space-x-2 rounded  px-2 py-1"
                    >
                      <span>
                        <HiReply />
                      </span>
                      <span> Reply</span>
                    </button>
                    <button className="  inline-flex  items-center space-x-2  px-3 rounded py-1 text-purple-700 ">
                      <span>
                        <FaRegFlag />
                      </span>
                      <span>report</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </motion.article>
          <Map displayBrief={setShowBrief} />
        </section>
      </div>
    </section>
  );
};

export default BrowseTasks;
