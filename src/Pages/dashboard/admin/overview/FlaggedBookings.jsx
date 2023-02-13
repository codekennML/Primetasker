import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Select from "../../../../utils/CustomSelect";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import { Formik, Form } from "formik";
const options = [
  "Today",
  "Last Week",
  "Last Month",
  "Last Quarter",
  "This Year",
];

const FlaggedBookings = () => {
  const [selected, setSelected] = useState(options[0]);

  const percentage = 67.5;
  return (
    <article className="w-1/3">
      <section className=" ">
        <div className=" rounded-lg  px-4  border dark:border-gray-600 shadow-md bg-white dark:bg-gray-800 h-full ">
          <article className="flex justify-between items-center ">
            <h2 className=" pt-4  font-semibold dark:text-gray-100 text-gray-700 dark:text-purple-600 text-[15px]">
              Flagged Bookings
            </h2>
            <Formik initialValues={{ flagBook: selected }}>
              {() => {
                return (
                  <Form>
                    <div className="relative ">
                      <Select
                        name="flagBook"
                        selected={selected}
                        setSelected={setSelected}
                        items={options}
                        width={`w-full`}
                        style={`py-2 text-[16px] bg-gray-50`}
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </article>
          <article className="text-[13px] font-medium  ">
            <ul className=" pt-3 pb-1 last:border-b-none">
              <li className="flex justify-between items-center text-[13px]  py-2.5 border-t  border-gray-100 dark:border-gray-700 text-xs">
                <article>
                  <h3 className="  text-gray-600 dark:text-gray-400 font-semibold mb-1">
                    63ae9c8f5bd8a8fffc26ad2a
                  </h3>
                  <div className=" space-x-1 text-gray-500 ">
                    <div className="inline-flex items-center space-x-2">
                      <p className="text-gray-400  text-[12px] font-semibold pr-2 flex flex-col">
                        <span className="text-center ">
                          Supervised by : Kennata Jay
                        </span>
                        {/* <span>+234802324567</span> */}
                      </p>
                    </div>
                  </div>
                </article>
                <div className="text-sm flex items-center space-x-1">
                  <div className="space-y-1"></div>

                  <div className="w-10 h-10">
                    <CircularProgressbar
                      value={percentage}
                      text={`High`}
                      strokeWidth={12}
                      styles={buildStyles({
                        pathColor: "red",
                        textSize: "25px",
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

export default FlaggedBookings;
