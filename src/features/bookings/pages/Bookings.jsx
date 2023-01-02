import React, { useEffect } from "react";

import { bookingTableHeaders } from "../utils/bookingTableHeaders";

import { useGetBookingsQuery } from "../slices/bookingApiSlice";

import BasicTable from "../../tables/BasicTable";
import { filterList, sortList } from "../utils/bookingTableFilterSort";
import StatCard from "../../../utils/StatCard";
import { FaChartBar } from "react-icons/fa";

const Booking = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-4 gap-x-3 mb-4">
        <StatCard
          Svg={<FaChartBar className="font-medium w-16 h-12  text-gray-700 " />}
          currSymbol={`₦`}
          title="Commissions"
          mainAmt={`2,500,000`}
          changePercent={`16`}
          changeAmount={`89k`}
          timeframe={`today`}
        />
        <StatCard
          Svg={<FaChartBar className="font-medium w-16 h-12  text-gray-700 " />}
          currSymbol={`₦`}
          title="Commissions"
          mainAmt={`2,500,000`}
          changePercent={`16`}
          changeAmount={`89k`}
          timeframe={`today`}
        />
        <StatCard
          Svg={<FaChartBar className="font-medium w-16 h-12  text-gray-700 " />}
          currSymbol={`₦`}
          title="Commissions"
          mainAmt={`2,500,000`}
          changePercent={`16`}
          changeAmount={`89k`}
          timeframe={`today`}
        />
        <StatCard
          Svg={<FaChartBar className="font-medium w-16 h-12  text-gray-700 " />}
          currSymbol={`₦`}
          title="Commissions"
          mainAmt={`2,500,000`}
          changePercent={`16`}
          changeAmount={`89k`}
          timeframe={`today`}
        />
        {/* <FaChartBar */}
      </div>
      <div>
        <BasicTable
          fetchTableData={useGetBookingsQuery}
          headers={bookingTableHeaders}
          filterList={filterList}
          sortList={sortList}
          // pageData={pageData}
        />
      </div>
    </section>
  );
};

export default Booking;
