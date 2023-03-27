import { useField } from "formik";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({
  dateActive = true,
  numofMonths = 1,
  date,
  setDate,
  show = false,
  position,
  name,
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  const handleDate = (dateArray) => {
    setDate(dateArray);
    console.log(dateArray);
    setValue(dateArray);
  };

  return (
    <>
      <div
        className={`${dateActive ? "opacity-100 ease-in bg-white " : " "} ${
          numofMonths === 1 ? "" : "w-[620px]"
        } mt-2 transition-opacity duration-300 z-50  shadow-md  dark:bg-gray-300 pb-6  font-sans font-medium text-sm py-2
     rounded-lg max-h-[340px] ${position ? position : ""}  `}
      >
        <DateRangePicker
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
        />
      </div>
    </>
  );
};

export default DatePicker;
