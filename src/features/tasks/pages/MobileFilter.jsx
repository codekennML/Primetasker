import React from "react";
import AutoCompleteMap from "../utils/AutoCompleteMap";
import { Range, SingleRange } from "../../../utils/Range";
import { BsChevronLeft } from "react-icons/bs";
import { FieldArray } from "formik";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { allCategories, items } from "./TaskFilters";
import CustomRadio from "../../../utils/CustomFieldComp/CustomRadioCheck";
import Toggle from "../../../utils/CustomToggle";
import { AiFillCheckCircle } from "react-icons/ai";

const MobileFilter = ({
  setShowMobileFilter,
  closeButton,
  values,
  setShowMobileCategories,
  showMobileCategories,
}) => {
  return (
    <>
      <div className="md:hidden fixed top-0 bg-white w-full px-4  pt-6  flex flex-col h-full z-30 ">
        <div className="font-bold flex flex-row justify-between">
          <p className="text-brand-text">Refine your search</p>
          {closeButton}
        </div>
        <div className="h-full max-h-screen min-h-[200px] overflow-x-hidden overflow-y-auto scrollbar-thin mt-6 ">
          <ul className="flex-col flex space-y-12 mt-4 ">
            <li>
              <div className="">
                <section className="relative w-full h-full md:px-4 ">
                  <h3 className="text-[.8rem]  font-semibold mb-1 uppercase  text-brand-text/80">
                    To be done
                  </h3>
                  <div className="w-full flex flex-col gap-y-6 ">
                    <div className="py-1 pb-4 rounded-md ">
                      <CustomRadio
                        name="taskType"
                        options={[
                          { name: "Any", value: "All" },
                          { name: "Remote", value: "Remote" },
                          {
                            name: "In-Person",
                            value: "Physical",
                          },
                        ]}
                        checked={values.taskType}
                        style={`flex flex-col gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2   md:flex-row mt-2 justify-between items-center w-full   `}
                        renderItem={(name, idx, icon, value, checked) => {
                          return (
                            <div
                              key={idx}
                              className={` ${
                                checked
                                  ? "bg-brand-light text-white border-0"
                                  : "bg-slate-100 text-brand-text"
                              } relative  px-2 w-full flex-1 font-semibold text-[.85rem]  text-center  rounded-lg py-3 flex flex-col items-center justify-center  cursor-pointer `}
                            >
                              <p
                                className={`${
                                  checked
                                    ? "bg-brand-light text-white border-0"
                                    : "hidden"
                                }`}
                              >
                                <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                              </p>

                              <p className="    px-4">{name}</p>
                            </div>
                          );
                        }}
                      />
                    </div>

                    <div className="">
                      <h3 className="text-[.8rem] text-brand-text/80 font-semibold mb-3 uppercase">
                        {" "}
                        Where ?{" "}
                      </h3>

                      <AutoCompleteMap
                        name="location"
                        values={values.location}
                      />
                    </div>

                    <div className="">
                      <h3 className="text-[.8rem] text-brand-text/80 font-semibold mb-3 uppercase">
                        {" "}
                        Distance ?{" "}
                      </h3>
                      <p className="font-semibold mt-1 mb-5 text-[.85rem] text-center  text-brand-text ">
                        {`${values.maxDistance[1]}km`}
                      </p>
                      <SingleRange name="maxDistance" />
                    </div>
                  </div>
                </section>
              </div>
            </li>
            <li>
              <p className="text-[.8rem] text-brand-text/80 font-semibold mb-3 uppercase">
                Any Category
              </p>
              <button
                type="button"
                onClick={() => setShowMobileCategories((prev) => !prev)}
                className="py-3 px-2  w-full text-[.8rem] font-semibold rounded lg:hidden flex items-center justify-between text-center space-x-2 bg-slate-100 text-brand-text"
              >
                <span>
                  {values.categories.length > 1
                    ? `${
                        allCategories[Number(values.categories[0]) - 1]?.name
                      } and ${Number(values.categories.length) - 1} more`
                    : values.categories.length < 1
                    ? "Select Categories"
                    : `${
                        allCategories[Number(values.categories[0]) - 1]?.name
                      }`}{" "}
                </span>
                <span className="arrow-down"></span>
              </button>

              {showMobileCategories && (
                <div className="fixed h-screen top-0  right-0 bottom-0 left-0 z-10 md:hidden  py-2   bg-white  rounded-lg shadow-md  ">
                  <section className="relative flex flex-col  pt-2 h-full px-6 ">
                    <div className="flex flex-row items-center justify-start py-1 md:py-3  md:justify-between gap-x-4 ">
                      <button
                        onClick={() => setShowMobileCategories((prev) => !prev)}
                        className="text-[1.2rem] font-bold text-green-900"
                      >
                        <BsChevronLeft />
                      </button>

                      <p className="py-2 text-[.85rem] md:text-[.9rem] font-semibold text-brand-text  md:hidden ">
                        {values.categories.length > 1
                          ? `${
                              allCategories[Number(values.categories[0]) - 1]
                                ?.name
                            } and ${Number(values.categories.length) - 1} more`
                          : values.categories.length < 1
                          ? "No Category Selected"
                          : `${
                              allCategories[Number(values.categories[0]) - 1]
                                ?.name
                            }`}
                      </p>
                      <p className="hidden md:block">{closeButton}</p>
                    </div>

                    <div className="h-full  min-h-[200px] overflow-x-hidden overflow-y-scroll scrollbar-thin ">
                      <div
                        className="grid grid-cols-1 first:my-0 md:grid-cols-2 md:px-4"
                        aria-labelledby="mega-menu-dropdown-button"
                      >
                        <FieldArray name="categories">
                          {(arrayHelpers) => (
                            <>
                              {allCategories.map((category, index) => (
                                <CustomCheckbox
                                  key={index}
                                  type="checkbox"
                                  name="categories"
                                  className="w-5 h-5 my-3 cursor-pointer accent-brand-light"
                                  labelstyle={`text-[.85rem] font-medium text-brand-text`}
                                  label={category.name}
                                  value={category.id}
                                  checked={values.categories.includes(
                                    category.id
                                  )}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      arrayHelpers.push(category.id);
                                    } else {
                                      const idx = values.categories.indexOf(
                                        category.id
                                      );
                                      arrayHelpers.remove(idx);
                                    }
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </FieldArray>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </li>
            <li className=" ">
              <div className="">
                <section className="relative w-full h-full pt-2 ">
                  <div className="w-full">
                    <h3 className="text-[.8rem] text-brand-text/80 font-semibold mb-3 uppercase">
                      Task Price
                    </h3>
                  </div>
                </section>
                <div className="px-5 mt-8 space-y-6 pb-6 ">
                  <p className="font-semibold mt-1 mb-5 text-[.85rem] text-center  text-brand-text tracking-wider ">
                    &#8358; {values.range[0]} - &#8358; {values.range[1]}
                  </p>

                  <Range name="range" />
                </div>
              </div>
            </li>

            <li>
              <div className="">
                <section className="relative w-full  ">
                  <div className="w-full  ">
                    <h3 className="text-[.8rem] text-brand-text/80 font-semibold mb-3 uppercase">
                      Status filter
                    </h3>
                  </div>
                </section>

                <div className="w-full  ">
                  <div className="mt-3 rounded-md ">
                    <ul className="flex flex-col space-y-6 list-none">
                      <li className="flex flex-row items-center justify-between ">
                        <div>
                          <h3 className="text-[.9rem] font-semibold text-brand-text">
                            Available tasks
                          </h3>
                          <span className="text-[.75rem] text-brand-text-deep">
                            Hide tasks that have been assigned
                          </span>
                        </div>

                        <Toggle name="assigned" />
                      </li>
                      <li className="flex flex-row items-center justify-between ">
                        <div>
                          <h3 className="text-[.9rem] font-semibold text-brand-text">
                            Tasks with no offers{" "}
                          </h3>
                          <span className="text-[.75rem]">
                            Show only tasks without offers
                          </span>
                        </div>
                        <Toggle name="zeroOffers" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="">
                <section className="relative w-full  ">
                  {/* {closeButton} */}
                  <div className="w-full  ">
                    <h3 className="text-[.8rem] text-brand-text/80 font-semibold mb-3 uppercase">
                      Sort By
                    </h3>
                  </div>
                </section>

                <div className="w-full  ">
                  <div className="mt-3 rounded-md  ">
                    <CustomRadio
                      name="sort"
                      checked={values.sort}
                      options={items}
                      style={`flex flex-col  items-center w-full   `}
                      renderItem={(name, idx, value, icon, checked) => (
                        <button
                          key={idx}
                          type="button"
                          className={`${
                            checked ? "bg-brand-secondary text-white" : ""
                          } py-3 px-6 w-full text-left hover:bg-brand-secondary select-none cursor-pointer rounded-md `}
                        >
                          <span className="py-2 text-[.8rem] font-medium text-brand-text-deep">
                            {name}
                          </span>
                        </button>
                      )}
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-2 items-center justify-between mx-2 py-3 ">
          <button
            type="button"
            onClick={() => setShowMobileFilter(false)}
            className="bg-brand-secondary text-brand-text text-primary py-1.5 rounded w-full px-6"
          >
            Cancel
          </button>

          <button
            type="submit"
            onClick={() => {
              // setShowMobileFilter(false);
              // setFilterName(undefined);
            }}
            className="bg-brand-light text-white text-primary py-1.5 w-full rounded px-6"
          >
            Apply
          </button>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default MobileFilter;
