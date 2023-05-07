import React, { forwardRef, useCallback, useState } from "react";
import { usePopper } from "react-popper";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import { format } from "date-fns";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="example-custom-input" onClick={handleClick}>
        {format(startDate, "dd-MM-yyyy")}
      </button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </>
  );
};

export default DatePickers;
