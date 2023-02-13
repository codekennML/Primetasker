import React from "react";
import { useField } from "formik";

const CustomTextarea = ({
  label,
  placeholder,
  labelStyle,
  inputStyle,

  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <label
        for="message"
        className={`${
          labelStyle
            ? labelStyle
            : "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        }`}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className={` ${
          inputStyle ? inputStyle : null
        } block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border focus:outline-violet-500 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default CustomTextarea;
