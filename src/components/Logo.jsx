import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-auto mr-14">
        <Link
          to="/"
          className="text-gray-800 text-[30px] font-bold flex items-center space-x-1"
        >
          <div>
            <div className="rotate-[90deg] w-7 h-7 bg-white rounded-md rounded-tr-xl rounded-bl-xl shadow-lg flex items-center justify-center border-t bg-gradient-to-tr from-purple-600 to-pink-600 ">
              <div className="w-3.5 h-3.5 rounded-full bg-purple-100"></div>
            </div>
          </div>

          <p className="text-gray-900 text-[28px] ">Primetasker</p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
