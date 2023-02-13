import React from "react";
import {
  AiFillEdit,
  AiFillEnvironment,
  AiFillFormatPainter,
  AiFillSketchCircle,
  AiOutlineEdit,
  AiOutlineEnvironment,
  AiOutlineFormatPainter,
  AiOutlineSketch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const Create = () => {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <TopBar headerText={`Create Listing`} />
      </div>
      <div className="flex-1  bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 pb-20">
        <article className="flex flex-col justify-center items-center h-full">
          <h1 className="text-[28px] font-semibold text-purple-700 mb-12">
            What would you like to create today ?
          </h1>
          <section className="grid grid-cols-2 gap-8  ">
            <Link
              to="/create/post-a-task"
              className=" shadow-md h-48 w-64 bg-white rounded-lg flex flex-col justify-center items-center hover:border-2 border-purple-600 cursor-pointer"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gray-50  flex justify-center items-center ">
                <AiOutlineEdit className="text-[30px] text-purple-800" />
              </div>

              <p className="text-[18px] font-medium text-gray-600 mt-6">
                A normal task
              </p>
              <p className="text-[12.5px] text-gray-500">
                Find a tasker to fix a need
              </p>
            </Link>

            <Link
              to="/create/create-service"
              className="shadow-md h-48 w-64 bg-white rounded-lg flex flex-col justify-center items-center hover:bg-purple-50 hover:border-2 border-purple-600 cursor-pointer "
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gray-50 flex justify-center items-center ">
                <AiOutlineFormatPainter className="text-[30px] text-purple-800" />
              </div>
              <p className="text-[18px] font-medium text-gray-600 mt-6">
                List a service
              </p>
              <p className="text-[12.5px] text-gray-500">
                List your services with packages
              </p>
            </Link>

            <Link
              to="/create/post-a-mail"
              className=" shadow-md h-48 w-64 bg-white rounded-lg flex flex-col justify-center items-center hover:border-2 border-purple-600 cursor-pointer"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gray-50  flex justify-center items-center">
                <AiOutlineEnvironment className="text-[30px] text-purple-800" />
              </div>
              <p className="text-[16px font-medium text-gray-600 mt-6">
                {/* <span className="text-[15px] text-gray-700">Explore</span> */}
                Explore PrimeGo
                {/* <span className="text-purple-700 ">GO</span> */}
              </p>
              <p className="text-[12.5px] text-gray-500">
                Dispatch deliverables in seconds
              </p>
            </Link>

            <Link
              to="/create/find-item"
              className=" shadow-md h-48 w-64 bg-white rounded-lg flex flex-col justify-center items-center hover:border-2 border-purple-600 cursor-pointer "
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gray-50  flex justify-center items-center ">
                <AiOutlineSketch className="text-[30px] text-purple-800" />
              </div>
              <p className="text-[16px] font-medium text-gray-600 mt-6">
                {/* <span className="text-[15px] pr-1 text-gray-700">Explore</span> */}
                Explore PrimeFinder
              </p>
              <p className="text-[12.5px] text-gray-500">
                Find rare and unique items in minutes
              </p>
            </Link>
          </section>
        </article>
      </div>

      {/* bg-gradient-to-br from-orange-100 via-pink-100 */}
    </div>
  );
};

export default Create;
