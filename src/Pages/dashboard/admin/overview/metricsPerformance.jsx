import { useGetBookingStatsQuery } from "../../../../features/bookings/slices/bookingApiSlice";
import ChartLine from "../../../../features/charts/ChartLine";
import Select from "../../../../utils/CustomSelect";

import { useState, useEffect } from "react";
import { addDays, format, isValid, subDays } from "date-fns";
import Spinner from "../../../../utils/Spinner";
import DatePicker from "../../../../utils/DatePicker";

const options = ["Bookings", "Payments", "Commissions", "Tasks", "Users"];

const Performance = () => {
  const [selected, setSelected] = useState(options[0]);

  const [dateActive, setDateActive] = useState(false);

  const { data, isLoading, isFetching, isSuccess } = useGetBookingStatsQuery();

  let xLabel = [];
  let yLabel = [];

  if (isSuccess) {
    const { entities, ids } = data;
    const chartDataArray = ids.map((id) => entities[id]);

    for (let i = 0; i < chartDataArray.length; i++) {
      xLabel.push(chartDataArray[i]["x"]);
      yLabel.push(chartDataArray[i]["y"]);
    }
  }

  const [date, setDate] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const specifiedDate = `${format(date[0].startDate, "yyyy-MM-dd")} - ${format(
    date[0].endDate,
    "yyyy-MM-dd"
  )}`;

  useEffect(() => {
    if (date[0].startDate !== date[0].endDate) {
      setDateActive(false);
    }
  }, [date]);

  return (
    <article className="w-full bg-white dark:bg-gray-800 dark:text-gray-100 rounded-xl ">
      <div className=" border-t dark:border-gray-700 ">
        <div className="flex flex-row justify-between items-center relative mt-6 px-8 mx-2">
          <h3 className="font-semibold text-purple-700 text-[20px]">
            Performance Metrics
          </h3>
          <div className="flex items-center space-x-2 mr-1 ">
            {/* <button
              onClick={() => setDateActive(!dateActive)}
              className="bg-white text-gray-500 px-3 py-2 rounded-lg text-xs border border-gray-400/30"
            >
              {specifiedDate}
            </button>
            <DatePicker
              numofMonths={1}
              dateActive={dateActive}
              date={date}
              setDate={setDate}
            /> */}
            {/* <Select
              items={options}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </div>
        </div>
        <div className=" px-4 chartLine h-full flex justify-center items-center">
          {isSuccess ? (
            <ChartLine
              xLabel={xLabel}
              yLabel={yLabel}
              timeFrame={specifiedDate}
              searchField={"Booking"}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </article>
  );
};

export default Performance;
