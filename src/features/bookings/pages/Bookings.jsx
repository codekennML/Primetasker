import React, { useEffect } from "react";

import { bookingTableHeaders } from "../utils/bookingTableHeaders";

import { useGetBookingsQuery } from "../slices/bookingApiSlice";

import TableUtilities from "../../tables/TableUtilities";
import { filterList, sortList } from "../utils/bookingTableFilterSort";
import StatCard from "../../../utils/StatCard";
import { FaBookMedical, FaChartBar } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="  dark:bg-gray-700">
      <section className=" mx-auto mt-6 ">
        <TableUtilities
          fetchData={useGetBookingsQuery}
          headers={bookingTableHeaders}
          filterList={filterList}
          sortList={sortList}
          tableTitle={`All Bookings`}
          // pageData={pageData}
        />
      </section>
    </div>
  );
};

export default Booking;
