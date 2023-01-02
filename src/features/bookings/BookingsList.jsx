import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from 'react-redux'
// import useAuth from '../../hooks/useAuth'
import BookingDataRow from "./BookingDataRow";
import { useGetBookingsQuery } from "./BookingSlice";

const BookingsList = () => {
  // const result = format(parseISO('2014-02-11T11:30:30'), 'yyyy-MM-dd')
  // {console.log(result);}

  let searchTableContent;

  const [search, setSearch] = useState("");

  const {
    data: bookings,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBookingsQuery({
    pollingInterval: 5000,
  });

  const handleSearchInput = (e) => setSearch(e.target.value);

  let content;
  if (isLoading) content = <p>Loading</p>;

  if (isError) content = <p>{error?.data?.message}</p>;
  // if(isSuccess) content = <p>Loading</p>

  if (isSuccess) {
    const { ids, entities } = bookings;

    const searchedIds = ids.filter((bookingId) => {
      return (
        entities[bookingId].username.includes(search) ||
        entities[bookingId].name.includes(search) ||
        entities[bookingId].phone === Number(search)
      );
    });

    if (searchedIds.length === 0) {
      searchTableContent = (
        <tr colspan="4">
          <td>No Bookings Found</td>
        </tr>
      );
    } else {
      searchTableContent = searchedIds.map((bookingId) => (
        <BookingDataRow key={bookingId} bookingId={bookingId} />
      ));
    }

    content = (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Booking ID
              </th>
              <th scope="col" className="py-3 px-6">
                Check In
              </th>
              <th scope="col" className="py-3 px-6">
                Checkout
              </th>
              <th scope="col" className="py-3 px-6">
                Total Due
              </th>
            </tr>
          </thead>
          <tbody>{searchTableContent}</tbody>
        </table>
      </div>
    );

    // return content
  }

  return (
    <>
      <div className="flex flex-row space-x-8 my-16">
        <Link
          to="/dashboard/bookings/create"
          className="bg-blue-600 text-white rounded-lg px-3 py-2 mr-6"
        >
          Create Booking
        </Link>

        <input
          type="text"
          placeholder="Search Bookings"
          className="border outline-none focus:ring-1 focus:text-sm px-4 py-2 rounded-lg"
          onChange={handleSearchInput}
          value={search}
        />
      </div>

      {content}
    </>
  );
};

export default BookingsList;
