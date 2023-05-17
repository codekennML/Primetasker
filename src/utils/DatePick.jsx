import React, { forwardRef, useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const Example = ({
  label,
  name,
  offset = 150,
  dateFormat = "eee dd LLL",
  ...props
}) => {
  let context = useFormikContext();

  const [date, setDate] = useState(new Date());

  const [field, meta, helpers] = useField(`date.${name}`);

  const onChange = (dates) => {
    const dateString = dates.toString();

    context.setFieldValue("date", {
      onDate: "",
      beforeDate: "",
      [name]: dateString,
    });
    setDate(dates);
  };

  const prefix = (name) => {
    // console.log(name);
    switch (name) {
      case "onDate":
        return "On";

      case "birthDate":
        return "";

      case "beforeDate":
        return "Before";
    }
  };
  // new Date(formValue), "eee dd LLL";

  const formatDate = (date) => {
    return format(new Date(date), dateFormat);
  };

  const DateSelectCustomButton = forwardRef(
    ({ value, onClick, label = "", formValue }, ref) => (
      <>
        <button
          type="button"
          className={`${
            formValue
              ? "bg-brand-light text-white"
              : "text-brand-text bg-brand-secondary"
          } rounded-full  px-3 py-2 font-medium text-sm flex items-center gap-x-3 transition ease duration-200 relative`}
          onClick={onClick}
          ref={ref}
        >
          <span>
            {" "}
            {formValue
              ? `${prefix(name)} ${formatDate(formValue)}`
              : label}{" "}
          </span>
          <span
            className={`border-[4px] border-b-0 border-[#00000000]   ${
              formValue
                ? "bg-brand-light text-white border-t-white "
                : "text-brand-text bg-brand-secondary border-t-[#065724] "
            } `}
          ></span>
        </button>
      </>
    )
  );

  return (
    <>
      <DatePicker
        {...props}
        selected={date}
        onChange={onChange}
        startDate={date}
        // minDate={new Date()}
        fixedHeight
        popperPlacement="top-end"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [offset, 0],
            },
          },
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "viewport",
              tether: false,
              altAxis: true,
            },
          },
        ]}
        customInput={
          <DateSelectCustomButton label={label} formValue={field?.value} />
        }
      />
    </>
  );
};

export default Example;
