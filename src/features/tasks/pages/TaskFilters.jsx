import React, { useState, useRef } from "react";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form, FieldArray } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { showModal } from "../../modal/modalSlice";
import { useDispatch } from "react-redux";
import CustomSelect from "../../../utils/CustomFieldComp/CustomSelect";
import CustomRadio from "../../../utils/CustomFieldComp/CustomRadioCheck";
import MultiRangeSlider from "multi-range-slider-react";
import "./range.css";
import { AiFillCheckCircle } from "react-icons/ai";

export const allCategories = [
  "Arts and Entertainment",
  "Automotive",
  "Business",
  "Careers",
  "Education",
  "Family and Parenting",
  "Food and Drink",
  "Health and Fitness",
  "Hobbies and Interests",
  "Home and Garden",
  "Law, Government and Politics",
  "News and Society",
  "Personal Finance",
  "Pets",
  "Real Estate",
  "Relationships",
  "Science",
  "Self-Improvement",
  "Shopping",
  "Spirituality",
  "Sports and Recreation",
  "Technology",
  "Travel",
  "Career & Professional Development",
  "Entrepreneurship",
  "Industry News",
  "Marketing and Advertising",
  "Non-Profit Organizations",
  "Project Management",
  "assets Relations",
  "Small Business",
  "Social Media",
  "Venture Capital",
  "Writing and Speaking",
];

export const items = [
  {
    name: "Newest tasks",
    value: "createdAt:-1",
  },
  {
    name: "Price(High to Low)",
    value: "budget:-1",
  },
  {
    name: "Price(Low to High)",
    value: "budget:1",
  },
  {
    name: "Due Date(Earliest )",
    value: "taskEarliestDone:-1",
  },
  {
    name: "Due Date(Latest )",
    value: "taskDeadline: 1",
  },
];

const TaskFilters = () => {
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterDisplay = () => {
    setIsFilterActive((prev) => !prev);
  };

  return (
    <section className="sticky w-full top-0 z-30 border-gray-500 bg-white flex items-center h-12 rounded-2xl mt-3 ">
      <Formik
        initialValues={{
          search: "",
          categories: [],
          taskType: "",
          minPrice: "5000",
          maxPrice: "500000",
          sort: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue, values }) => {
          return (
            <Form className="w-full rounded-lg ">
              <div className="relative rounded-lg ">
                <CustomText
                  name="search"
                  labelstyle={`hidden`}
                  imgBfr={<FaSearch />}
                  wrapperclass={`relative `}
                  inputstyle={`w-full  py-4   outline-none text-[12px]  h-full  caret-indigo-400 dark:caret-gray-300 bg-white px-16 dark:bg-gray-700  outline-none  border-purple-100 dark:border-gray-600  dark:text-gray-400 placeholder:text-[14px] placeholder:text-gray-500   w-full text-xs font-medium text-gray-400 border  `}
                  placeholder="Search for tasks"
                  adornment={`text-[0.8rem] text-purple-400 font-thin dark:text-gray-400 absolute top-[37%] left-[2.5%]  z-10  `}
                />
                <button
                  onClick={() => handleFilterDisplay()}
                  type="button"
                  className="hover:opacity-90  absolute top-[10%] right-4 py-1.5 cursor-pointer rounded-full text-[14px]  font-medium flex items-center space-x-2  "
                  aria-haspopup="true"
                >
                  <span className=" text-blue-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 20"
                      className="w-6 h-6"
                      fill="#7b7e81"
                    >
                      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                    </svg>
                  </span>
                </button>
              </div>

              <div>
                <ul className="list-none flex">
                  <li className=" group px-3   ">
                    {isFilterActive ? (
                      <section
                        onClick={() => handleFilterDisplay()}
                        className="fixed h-screen w-screen flex justify-center items-center bg-gray-400/30 left-0 top-0 z-50"
                      >
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className=" top-[20%] left-[25%] pl-12 px-6 py-2 pb-6 bg-white w-[768px] z-50 rounded-xl shadow-xl "
                        >
                          <div className="flex justify-between border-b">
                            <h1 className="font-semibold text-[16px] text-purple-800 my-2  pb-1">
                              Refine your search
                            </h1>
                          </div>
                          <div className="  ">
                            <section className="flex flex-row-reverse justify-between my-2 border-b pb-4 mt-3">
                              <div className=" w-1/3 px-3">
                                <h3 className="text-purple-800 font-semibold text-sm">
                                  Sort by
                                </h3>
                                <div className="border rounded-md mt-3">
                                  <CustomRadio
                                    name="sort"
                                    options={items}
                                    style={`flex flex-col  items-center w-full   `}
                                    renderItem={(name, idx) => (
                                      <li
                                        key={idx}
                                        className="py-1 hover:bg-gray-500"
                                      >
                                        <div className="py-1 text-[14px] font-medium">
                                          {name}
                                        </div>
                                      </li>
                                    )}
                                  />
                                </div>
                              </div>
                              <div className=" w-2/3 flex-1 px-3">
                                <h3 className="text-sm text-purple-800 font-semibold mb-3">
                                  To be done
                                </h3>
                                <div className=" rounded-md pb-4 py-2 px-4 ">
                                  <CustomRadio
                                    name="taskType"
                                    options={[
                                      { name: "Any", value: "all" },
                                      { name: "Remote", value: "remote" },
                                      { name: "In-Person", value: "physical" },
                                    ]}
                                    style={`flex flex-row mt-2 justify-center items-center w-full  px-2 space-x-4 items-center `}
                                    // buttonstyle={`bg-gray-100 `}

                                    renderItem={(name, idx, value, checked) => {
                                      return (
                                        <div
                                          key={idx}
                                          className={` ${
                                            checked
                                              ? "bg-purple-800 text-white border-0"
                                              : "bg-gray-50 text-gray-500"
                                          } relative w-full px-4   text-center  rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500`}
                                        >
                                          <p
                                            className={`${
                                              checked
                                                ? "bg-purple-800 text-white border-0"
                                                : "hidden"
                                            }`}
                                          >
                                            <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                                          </p>

                                          <p className="text-[17px] font-medium mt-2">
                                            {" "}
                                            {value}
                                          </p>
                                          <p className="text-[12px] font-medium  px-4">
                                            {name}
                                          </p>
                                        </div>
                                      );
                                    }}
                                  />

                                  <div className="">
                                    <h3 className="text-sm text-purple-800 font-semibold  mt-6">
                                      Task price
                                    </h3>

                                    <div className="mt-2">
                                      {/* <MultiRangeSlider
                                        name="range"
                                        label="false"
                                        min={5000}
                                        max={100000}
                                        minCaption="none"
                                        ruler="false"
                                        thumbLeftColor="#9333ea"
                                        thumbRightColor="#9333ea"
                                        style={{
                                          border: "none",
                                          boxShadow: "none",
                                          padding: "15px 10px",
                                        }}
                                        minValue={5000}
                                        maxValue={500000}
                                        onChange={(e) => {
                                          if (
                                            minPriceRef.current !== e.minValue
                                          ) {
                                            setFieldValue(
                                              "minPrice",
                                              e.minValue
                                            );
                                            minPriceRef.current = e.minValue;
                                          }

                                          if (
                                            maxPriceRef.current !== e.maxValue
                                          ) {
                                            setFieldValue(
                                              "maxPrice",
                                              e.maxValue
                                            );
                                            maxPriceRef.current = e.maxValue;
                                          }
                                        }}
                                      /> */}
                                    </div>

                                    <div className="w-full border py-2 flex flex-row justify-center items-center  font-semibold text-purple-800 text-[13px] mt-1 mr-12">
                                      <div>{values.minPrice}</div>
                                      <div className="px-2  flex items-center justify-center ">
                                        <p className="font-medium">-</p>
                                      </div>
                                      <div>{values.maxPrice}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section className="">
                              <div className="flex justify-between my-2">
                                <p className="py-2 text-sm text-purple-800 font-semibold ">
                                  Task Categories
                                </p>
                              </div>
                              <ul
                                className="first:my-0  grid grid-cols-2  w-full max-h-[200px] overflow-y-scroll "
                                aria-labelledby="mega-menu-dropdown-button "
                              >
                                <FieldArray name="categories">
                                  {(arrayHelpers) => (
                                    <>
                                      {allCategories.map((category, index) => (
                                        <CustomCheckbox
                                          key={index}
                                          type="checkbox"
                                          name="categories"
                                          className="w-4 h-4 my-2 accent-purple-500"
                                          labelstyle={`text-[13px] font-medium text-gray-500`}
                                          label={category}
                                          value={category}
                                          checked={values.categories.includes(
                                            category
                                          )}
                                          onChange={(e) => {
                                            if (e.target.checked) {
                                              arrayHelpers.push(category);
                                            } else {
                                              const idx =
                                                values.categories.indexOf(
                                                  category
                                                );
                                              arrayHelpers.remove(idx);
                                            }
                                          }}
                                        />
                                      ))}
                                    </>
                                  )}
                                </FieldArray>
                              </ul>

                              <div className="flex justify-end mt-3 ">
                                <button
                                  onClick={() => hideModal()}
                                  type="submit"
                                  className="py-2 px-12 mt-4 text-[15px] bg-purple-800 rounded-full text-white font-medium"
                                >
                                  Apply Changes
                                </button>
                              </div>
                            </section>
                          </div>
                        </div>
                      </section>
                    ) : null}
                  </li>
                </ul>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default TaskFilters;

const RadioDesign = ({ name, idx }) => {
  return (
    <div className="py-2">
      <p>{name}</p>
    </div>
  );
};
