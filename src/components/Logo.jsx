import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-auto relative">
        <Link
          to="/"
          className="text-gray-800 text-[30px] font-bold flex items-center "
        >
          <div>
            <img src={logo} alt="" height={20} width={20} />
          </div>

          <p className=" text-brand-light text-[1.3rem] md:text-[1.6rem] text-bold font-heading  ">
            Primetasker
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
