import React from "react";
import { useField } from "formik";

const CustomRange = ({ name, ...props }) => {
  const { field, helpers, meta } = useField(name);
  return (
    <div>
      <input {...field} {...props} />
    </div>
  );
};

export default CustomRange;
