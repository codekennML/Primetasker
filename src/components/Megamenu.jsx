import React from "react";
import CustomCheckbox from "../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form, FieldArray } from "formik";
import { hideModal } from "../features/modal/modalSlice";

const Megamenu = () => {
  return (
    <div className="">
      <div id="mega-menu bg-white ">
        <div
          id="mega-menu-dropdown"
          className=" z-10 max-w-screen-lg rounded-xl w-full  text-sm bg-white   dark:border-gray-700  dark:bg-gray-700"
        >
          <div className="p-4 pb-0  text-gray-900 md:pb-4 dark:text-white w-full rounded-xl ">
            <Formik
              initialValues={{ categories: [] }}
              onSubmit={(values) => console.log(values)}
            >
              {(values, resetForm) => {
                return <Form></Form>;
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
