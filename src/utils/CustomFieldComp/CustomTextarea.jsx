import React, { useEffect, useMemo } from "react";
import { useField } from "formik";

const CustomTextarea = ({
  label,
  placeholder,
  labelStyle,
  inputStyle,
  ...props
}) => {
  const [field, meta, helpers] = useField(props.name);
  // console.log(props);

  // console.log(field, meta);

  const invalid = meta.error && meta.touched;
  // console.log(meta);

  return (
    <div>
      <label
        htmlFor={props.name}
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
        className={` ${inputStyle ? inputStyle : null} p-3 rounded-lg  ${
          invalid
            ? "border-2 border-red-500 focus:outline-red-500"
            : " focus:outline-brand-light "
        }`}
        placeholder={placeholder}
      />
      {invalid && (
        <div className="text-red-600 text-xs  py-2"> {meta.error}</div>
      )}
    </div>
  );
};

export default CustomTextarea;
