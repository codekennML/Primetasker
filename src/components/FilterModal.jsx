import React from "react";
import CustomCheckbox from "../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form, FieldArray } from "formik";
import { FaSearch } from "react-icons/fa";
import CustomText from "../utils/CustomFieldComp/CustomText";

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

const FilterModal = () => {
  return (
    <div className="relative top-6 pl-12 px-6 py-2 pb-12 bg-white w-[700px]  rounded-xl shadow-xl ">
      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
      <div className="relative z-10">
        <section>
          <div className="flex justify-between my-2">
            <p className="py-2 text-sm text-purple-800 font-semibold ">
              All Categories
            </p>
            <button
              type="button"
              className="py-2 text-sm px-6 text-red-600 font-medium "
            >
              Clear All
            </button>
          </div>
          <ul
            className="first:my-0  grid grid-cols-2  w-full max-h-[300px] overflow-y-scroll "
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
                      className="w-4 h-4 my-2"
                      labelstyle={`text-[13px] font-medium text-gray-500`}
                      label={category}
                      value={category}
                      checked={values.values.categories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          arrayHelpers.push(category);
                        } else {
                          const idx =
                            values.values.categories.indexOf(category);
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
  );
};

export default FilterModal;
