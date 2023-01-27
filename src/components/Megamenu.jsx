import React from "react";
import CustomCheckbox from "../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form } from "formik";
import { hideModal } from "../features/modal/modalSlice";

const categories = [
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

const Megamenu = () => {
  return (
    <div class="">
      <div id="mega-menu bg-white ">
        <div
          id="mega-menu-dropdown"
          class=" z-10 max-w-screen-lg rounded-xl w-full  text-sm bg-white   dark:border-gray-700  dark:bg-gray-700"
        >
          <div class="p-4 pb-0  text-gray-900 md:pb-4 dark:text-white w-full rounded-xl ">
            <Formik
              initialValues={{ categories: [] }}
              onSubmit={(values) => console.log(values)}
            >
              {(values, resetForm) => {
                return (
                  <Form>
                    <div className="flex justify-between my-2">
                      <p className="py-2 text-purple-800 font-semibold ">
                        All Categories
                      </p>
                      <button
                        type="button"
                        className="py-2 px-6 text-red-600 font-medium "
                        onClick={() => resetForm()}
                      >
                        Clear All
                      </button>
                    </div>
                    <ul
                      class="space-y-4 first:mt-0 grid grid-cols-2 w-full max-h-[300px] overflow-y-scroll px-6"
                      aria-labelledby="mega-menu-dropdown-button "
                    >
                      <FieldArray name="categories">
                        {() => (
                          <>
                            {categories.map((category, index) => (
                              <CustomCheckbox
                                key={index}
                                name={`categories.${index}`}
                                label={category.label}
                                value={category.value}
                              />
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </ul>

                    <div className="flex justify-between my-4 px-4">
                      <button className="py-2 px-8 bg-red-500 rounded-full text-white">
                        Cancel
                      </button>
                      <button
                        onClick={() => hideModal()}
                        type="submit"
                        className="py-2 px-8 bg-purple-600 rounded-full text-white"
                      >
                        Apply
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
