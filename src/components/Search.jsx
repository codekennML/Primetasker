import { format, addDays } from "date-fns";
import { useState } from "react";
import BookingOccupantModal from "../features/modal/BookingOccupantModal";
import { usersApiCalls } from "../features/users/slices/UserApiSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "../utils/DatePicker";

const Search = () => {
  const navigate = useNavigate();
  // const [state, setState] =  useState()
  const [displayDateRange, setDisplayDateRange] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSearch = () => {
    return (
      // console.log('lol')
      navigate("/searchresults", { date, occupants, destination })
    );
  };
  const [showOccupantModal, setShowOccupantModal] = useState(false);
  const [destination, setDestination] = useState();
  const [occupants, setOccupants] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOccupants = (name, operation) => {
    setOccupants((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? occupants[name] + 1 : occupants[name] - 1,
      };
    });
  };

  return (
    <section className="px-2 pt-4 pb-0 bg-[#003580] lg:px-48 ">
      <h2 className="font-bold text-2xl lg:hidden  ">Search</h2>
      <p className="text-[12px] md:text-14px lg:hidden">
        Search low prices on hotels, homes and much more...
      </p>
      <h2 className="font-bold text-4xl text-white hidden lg:block pt-12">
        Find your next stay
      </h2>
      <p className="text-[12px] md:text-xl py-4 hidden lg:block text-white">
        Search low prices on hotels, homes and much more...{" "}
      </p>

      <article className="flex flex-col relative lg:-bottom-12">
        <div className=" flex flex-col lg:flex-row mt-4 lg:mt-0 lg:w-full lg:relative lg:-bottom-8">
          <input
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Where are you going ? "
            className="grow w-full px-2 py-2.5 border-b-[2px] lg:border-b-[4px] border-x-[4px] lg:border-r-[2px] lg:border-l-[4px] border-t-[4px] lg:rounded-l font-medium text-gray-800 border-yellow-400 outline-none text-sm"
          />

          <div
            className="text-gray-500 w-full cursor-pointer relative border-t-[2px] border-b-[2px] border-x-[4px] lg:border-r-[2px] bg-white border-b-1 lg:border-t-[4px] lg:border-b-[4px] border-yellow-400 flex flex-row px-2 "
            onClick={() => setDisplayDateRange(!displayDateRange)}
          >
            <div className="py-1.5 w-1/2 text-[10px] border-r-[2px] lg:border-r-[0.5px]  border-yellow-400 ">
              Check-In date <br />
              <span className="text-[13px] text-gray-500">{`${format(
                date[0].startDate,
                "iii dd MMM yyyy"
              )}`}</span>
            </div>
            <div className="py-1.5 w-1/2 text-[10px] border-l-[2px] lg:border-l-[0.5px]  border-yellow-400 pl-3 ">
              {" "}
              Check-out date <br />
              <span className="text-[13px]  text-gray-500">{`${format(
                date[0].endDate,
                "iii dd MMM yyyy"
              )}`}</span>
            </div>
          </div>

          <div
            onClick={() => setShowOccupantModal(!showOccupantModal)}
            className="text-gray-500 w-full relative cursor-pointer lg:border-t-[4px] lg:border-b-[4px] border-t-[2px] border-x-[4px] border-b-[2px] bg-white  border-yellow-400 flex flex-row lg:justiy-start lg:items-center"
          >
            <p className="py-1.5 pl-2  m-0 text-base   border-r lg:border-r-0 lg:items-center lg:justify-center">
              <FontAwesomeIcon
                icon={faUser}
                className="w-4 h-4 pr-3 text-gray-400"
              />
              <span className="text-sm ">
                {" "}
                {occupants.adults} {occupants.adults > 1 ? "adults" : "adult"}{" "}
                &#x2022; {occupants.children} children &#x2022;{" "}
                {occupants.rooms} {occupants.rooms > 1 ? "rooms" : "room"}
              </span>
            </p>

            {showOccupantModal && (
              <BookingOccupantModal
                setShow={setShowOccupantModal}
                handleOccupants={handleOccupants}
                occupants={occupants}
              />
            )}
          </div>

          <div className="lg:hidden bg-white border-t-[2px] border-x-[4px] border-b-[2px] border-yellow-400 flex flex-row py-2.5 items-center px-2">
            <input type="checkbox" />
            <p className="pl-1 text-[12px]">I'm travelling for work</p>
          </div>

          <button
            onClick={handleSearch}
            className=" bg-blue-900 py-2.5 lg:px-6 lg:rounded-r lg:border-l-[2px] lg:border-t-[4px] border-x-[4px] border-t-[2px] border-b-[4px] border-yellow-400 text-white text-center text-[16px] "
          >
            Search
          </button>

          {displayDateRange && <DatePicker />}
        </div>

        <div className="flex flex-row justify-start pt-10 space-x-6 text-[13px] text-gray-700">
          <div className="inline-flex flex-row space-x-2 items-center ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <p>I'm looking for an entire home or apartment</p>
          </div>
          <div className="inline-flex flex-row space-x-2 items-center">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <p>I'm travelling for work</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Search;
