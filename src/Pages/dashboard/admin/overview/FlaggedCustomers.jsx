import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Select from "../../../../utils/CustomSelect";
import { useState } from "react";

const options = [
  "Today",
  "Last Week",
  "Last Month",
  "Last Quarter",
  "This Year",
];

const FlaggedCustomers = () => {
  const [selected, setSelected] = useState(options[0]);

  const percentage = 67.5;
  return (
    <article className="w-1/3">
      <section className=" ">
        <div className=" rounded-lg  px-4  border shadow-md bg-white dark:bg-gray-800 dark:border-gray-600 h-full ">
          <article className="flex justify-between items-center ">
            <h2 className=" pt-4   font-semibold dark:text-gray-100 text-gray-700 dark:text-purple-600 text-[15px]">
              Flagged Taskers
            </h2>
            <div className="relative pt-3 flex items-center justify-between">
              <Select
                selected={selected}
                setSelected={setSelected}
                items={options}
              />
            </div>
          </article>
          <article className="text-[13px] font-medium  ">
            <ul className=" pt-3 pb-1 last:border-b-none">
              <li className="flex justify-between items-center text-[13px]  py-2.5 border-t  border-gray-100  text-xs">
                <article>
                  <h3 className=" font-semibold mb-1 dark:text-gray-400 ">
                    Sophronia Commins
                  </h3>
                  <div className=" space-x-1 text-gray-500 ">
                    <div className="inline-flex items-center space-x-2 text-[11px]">
                      <p className="text-gray-500 font-semibol border-r pr-2 flex flex-col">
                        <span className="text-center">
                          Sophcommins@yahoo.com
                        </span>
                        {/* <span>+234802324567</span> */}
                      </p>

                      <p className="text-gray-700 font-semibol border-r pr-2 flex flex-col">
                        <span className="text-center text-green-500">
                          +234802324567{" "}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </article>
                <div className="text-sm flex items-center space-x-1">
                  <div className="w-12 h-12">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}`}
                      strokeWidth={12}
                      styles={buildStyles({
                        pathColor: "red",
                        textSize: "30px",
                      })}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </article>
  );
};

export default FlaggedCustomers;
