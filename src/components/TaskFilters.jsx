import React, { useState } from "react";
import CustomCheckbox from "../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form, FieldArray } from "formik";
import CustomText from "../utils/CustomFieldComp/CustomText";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { showModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { MdFilterList } from "react-icons/md";
import CustomRange from "../utils/CustomFieldComp/CustomRange";
import CustomSelect from "../utils/CustomFieldComp/CustomSelect";
import HeadlessRadio from "../utils/CustomFieldComp/HeadlessRadio";

const allCategories = [
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
  "Public Relations",
  "Small Business",
  "Social Media",
  "Venture Capital",
  "Writing and Speaking",
];
const items = [
  {
    name: "Recommended",
    value: "Recommended",
  },
  {
    name: "Newest tasks",
    value: "Newest tasks",
  },
  {
    name: "Price(High to Low)",
    value: "Price(High to Low)",
  },
  {
    name: "Price(Low to High)",
    value: "Price(Low to High)",
  },
];

const TaskFilters = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterDisplay = () => {
    setIsFilterActive((prev) => !prev);
  };

  return (
    <section className="  sticky top-0 border-gray-500 bg-white flex items-center space-x-4 ">
      <Formik
        initialValues={{
          search: "",
          categories: [],
          distance: "10",
          price: "10,000",
          sort: "",
        }}
      >
        {(values) => {
          return (
            <Form className="flex flex-row items-center justify-end w-full">
              <div className="relative ">
                <CustomText
                  name="search"
                  labelstyle={`hidden`}
                  imgBfr={<FaSearch />}
                  wrapperclass={`relative `}
                  inputstyle={`w-52  outline-none text-[13px] py-2 rounded-full caret-indigo-400 dark:caret-gray-300 bg-gray-200/50 dark:bg-gray-700  outline-none  border-purple-100 dark:border-gray-600  dark:text-gray-400  placeholder:text-purple-800 py-1.5 focus:bg-transparent  w-full text-xs font-medium text-gray-600 border  `}
                  placeholder="Search for tasks and services"
                  svgclass={`text-[12px] text-gray-400 font-thin dark:text-gray-400 absolute top-[32%] left-[4%]  z-10 `}
                />
              </div>

              <div>
                <ul className="list-none flex">
                  <li className=" group px-3 py-4  ">
                    <button
                      onClick={() => handleFilterDisplay()}
                      type="button"
                      className="hover:opacity-90  px-3 py-1.5 cursor-pointer rounded-full text-[13px] bg-gray-200/50  font-medium flex items-center space-x-2  "
                      aria-haspopup="true"
                    >
                      <span className="  text-purple-800 ">
                        <MdFilterList className="text-[16px] h-4" />
                      </span>
                      <span className="text-[12px] text-purple-800">
                        Filters
                      </span>
                      {/* <span className="arrow down items-start"></span> */}
                    </button>

                    {isFilterActive ? (
                      <section
                        onClick={() => handleFilterDisplay()}
                        className="fixed h-screen w-screen flex justify-center items-center bg-gray-400/30 left-0 top-0 z-50"
                      >
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className=" top-[20%] left-[25%] pl-12 px-6 py-2 pb-12 bg-white w-[768px] z-50 rounded-xl shadow-xl "
                        >
                          <div className="flex justify-between border-b">
                            <h1 className="font-semibold text-[16px] text-purple-800 my-2  pb-1">
                              Refine your search
                            </h1>
                            <button
                              onClick={() => handleFilterDisplay()}
                              type="button"
                              className="text-red-500   hover:bg-gray-100 rounded-lg text-sm px-2 py-1 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              <FaTimes />
                            </button>
                          </div>
                          <div className=" border-b ">
                            <section className="flex flex-row justify-between my-2 border-b pb-4 mt-3">
                              <div className=" w-1/2 px-3">
                                <h3 className="text-purple-800 font-semibold text-sm">
                                  Sort by
                                </h3>

                                <HeadlessRadio plans={items} />
                              </div>
                              <div className=" w-1/2 flex-1 px-3">
                                <h3 className="text-sm text-purple-800 font-semibold mb-3">
                                  To be done
                                </h3>
                                <div className="border rounded pb-4 py-2 px-2 ">
                                  <ul className="font-medium text-gray-500 text-[13px] flex my-2 space-x-2">
                                    <li className="bg-gray-50 p-2 px-4 rounded-lg text-purple-900">
                                      Remote
                                    </li>
                                    <li className="bg-gray-50 p-2 px-4 rounded-lg text-purple-900">
                                      In-Person
                                    </li>
                                    <li className="bg-gray-50 p-2 px-4 rounded-lg text-purple-900 ">
                                      Both
                                    </li>
                                  </ul>
                                  <div>
                                    <h3 className="text-sm text-purple-800 font-semibold my-2 mt-4">
                                      Task price
                                    </h3>

                                    <div>
                                      <CustomRange
                                        name="price"
                                        type="range"
                                        max="20"
                                        min="0"
                                        value={values.distance}
                                        className="w-2/3 h-2 bg-gray-200 mt-4 rounded-lg accent-purple-500 appearance-none cursor-pointer border  dark:bg-gray-700"
                                      />
                                      <p className="text-gray-600">
                                        {values.values.price}
                                      </p>
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
                                          checked={values.values.categories.includes(
                                            category
                                          )}
                                          onChange={(e) => {
                                            if (e.target.checked) {
                                              arrayHelpers.push(category);
                                            } else {
                                              const idx =
                                                values.values.categories.indexOf(
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

                              {/* <div className="flex justify-between mt-3 ">
                              <button className="py-2 px-16 bg-red-500 rounded-full text-white">
                                Cancel
                              </button>
                              <button
                                onClick={() => hideModal()}
                                type="submit"
                                className="py-2 px-16 bg-purple-600 rounded-full text-white"
                              >
                                Apply
                              </button>
                            </div> */}
                            </section>
                          </div>
                        </div>
                      </section>
                    ) : null}
                  </li>

                  {/* 
                  <li className="relative group px-3 py-2">
                    <button
                      className="hover:opacity-50 cursor-default px-5 py-1 rounded-full text-[13px] font-medium flex items-center space-x-2  "
                      aria-haspopup="true"
                    >
                      <span> More Filters</span>
                      <span className="arrow down items-start"></span>
                    </button>
                    <div className="absolute lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                      <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-10">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                The Suite
                              </p>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    Course Editor
                                    <p className="text-gray-500 font-normal">
                                      All in one editor
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    Accept payments
                                    <p className="text-gray-500 font-normal">
                                      Pre-build payments page
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    Close captioning
                                    <p className="text-gray-500 font-normal">
                                      Use AI to generate captions
                                    </p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                Extensions
                              </p>
                              <ul className="mt-4 text-[15px]">
                                <li>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    Plugins
                                    <p className="text-gray-500 font-normal">
                                      Tweak existing functionality
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    Batch uploads
                                    <p className="text-gray-500 font-normal">
                                      Get your time back
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    Social sharing
                                    <p className="text-gray-500 font-normal">
                                      Generate content for socials
                                    </p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
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
