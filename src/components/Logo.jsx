import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-auto relative">
        <Link
          to="/"
          className="text-gray-800 text-[30px] font-bold flex items-center space-x-1"
        >
          {/* <div>
            <div className="w-8 h-8 bg-white rounded-md rounded-tr-xl rounded-bl-xl shadow-lg flex items-center justify-center border-t bg-gradient-to-tr from-green-500 via-blue-400 to-green-600 rotate-[45deg]  ">
              <div className="w-4 h-4 rounded-full bg-green-100"></div>
            </div>
          </div> */}

          <p className=" text-brand-light text-[1.3rem] md:text-[1.6rem] text-bold font-heading  ">
            Primetasker
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
