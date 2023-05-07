import { useState } from "react";
import { useField } from "formik";
import { usePopper } from "react-popper";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({
  dateActive = true,
  numofMonths = 1,
  date,
  setDate,
  show = false,
  position,
  name,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    console.log(dates);
    // setStartDate(start);
    // setEndDate(end);
  };

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(
    referenceElement?.current,
    popperElement?.current,
    {
      modifiers: [
        // { name: "arrow",
        // options:  { element: arrowElement } },
        {
          name: "offset",
          options: {
            offset: [5, 10],
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
      ],
    }
  );

  const [field, meta, helpers] = useField(name);

  const { setValue } = helpers;

  // const handleDate = (dateArray) => {
  //   setDate(dateArray);
  //   console.log(dateArray);
  //   setValue(dateArray);
  // };

  return (
    <>
      <div
        ref={setReferenceElement}
        // className={`${dateActive ? "opacity-100 ease-in bg-white " : " "} ${
        //   numofMonths === 1 ? "" : "w-[620px]"
        // } mt-2 transition-opacity duration-300 z-50  shadow-md  dark:bg-gray-300 pb-6  font-sans font-medium text-sm py-2
        //  rounded-lg max-h-[340px] ${position ? position : ""}  `}
      >
        {/* <DateRangePicker
          onChange={(item) => handleDate([item.selection])}
          name={name}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={numofMonths}
          minDate={new Date()}
          range
          ranges={date}
          direction="horizontal"
          rangeColors={["#7e22ce"]}
          showMonthAndYearPickers={show}
        /> */}
        <button
          className="bg-green-50 flex items-center space-x-3 py-3  rounded-full text-[14px] relative px-3"
          type="button"
        >
          On Or Before
        </button>
        {/* <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        > */}
        <div className=""></div>
        <DatePicker
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          minDate={new Date()}
          className="absolute z-10 "
          popperPlacement="top-end"
          popperModifiers={[
            {
              name: "offset",
              options: {
                offset: [5, 10],
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
        />
        {/* <div ref={setArrowElement} style={styles.arrow} /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ReactDatePicker;
