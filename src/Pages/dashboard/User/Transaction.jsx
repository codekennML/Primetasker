import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Transaction = () => {
  return (
    <div className="flex flex-row ">
      <article className="w-[40%] space-y-5">
        <div className="flex ">
          <button className="border text-[.9rem] font-semibold px-4 py-2 rounded-md ">
            Filters
          </button>
        </div>
        <article className="w-full border rounded-lg ">
          <div className=" rounded-lg space-y-1 px-3  py-2 flex flex-row  justify-between">
            <div className="space-y-1">
              <h2 className="font-semibold text-[.9rem]">Deposit</h2>
              <p className="text-[.75rem] font-medium">Date Fri, 13 Mar </p>

              <p className="font-medium text-[.75rem]">Ref No. axz4126535</p>
            </div>

            <div className=" flex flex-col justify-between items-center">
              <p className="font-semibold text-brand-text-deep text-[.9rem]">
                {" "}
                +300000
              </p>
              <p className="text-brand-light text-[1.5rem] ">
                <span>
                  <AiFillCheckCircle />
                </span>
                {/* <span>success</span> */}
              </p>
            </div>
          </div>
          <div className="px-3 py-.5">
            <button className="text-[.75rem] font-medium text-right text-brand-text-deep">
              Open a ticket
            </button>
          </div>
        </article>
      </article>
      {/* <article className="w-[40%] bg-green-50 "></article> */}
    </div>
  );
};

export default Transaction;
