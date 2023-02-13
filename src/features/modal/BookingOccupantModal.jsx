import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookingOccupantModal = ({ handleOccupants, occupants, setShow }) => {
  return (
    <section
      onClick={() => setShow(false)}
      class="lg:bg-white bg-gray-800 opacity-95 fixed lg:absolute lg:w-[400px] lg:h-[80px] w-full h-full top-0 lg:top-14 left-0 flex justify-center items-end lg:justify-start lg:items-start shadow-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        class=" relative bg-white opacity-100 w-full px-4 py-6 space-y-6 "
      >
        {/* <FontAwesomeIcon onClick={() => setShow(false)} icon = {faClose} class = 'text-red-600 cursor-pointer text-2xl absolute right-4 top-2' /> */}

        <div class="flex flex-row justify-between items-center">
          <p>Adults</p>

          <p>
            <button
              disabled={occupants.adults === 1}
              onClick={() => handleOccupants("adults", "decrease")}
              class="text-center text-lg border-2 rounded px-2 md:px-2 md:py-0 py-1 border-blue-800"
            >
              {" "}
              -{" "}
            </button>
            <span class="text-sm font-medium px-3">{occupants.adults} </span>
            <button
              onClick={() => handleOccupants("adults", "increase")}
              class="text-lg border-2 rounded px-2  md:px-2 md:py-0 py-1 border-blue-800"
            >
              {" "}
              +{" "}
            </button>
          </p>
        </div>
        <div class="flex flex-row justify-between ">
          <p>Children</p>
          <p>
            <button
              disabled={occupants.children === 0}
              onClick={() => handleOccupants("children", "decrease")}
              class={`${
                occupants.children <= 0 ? "disabled cursor-not-allowed" : ""
              } text-center text-lg border-2 rounded px-2  md:px-2 md:py-0 py-1 border-blue-800`}
            >
              {" "}
              -{" "}
            </button>
            <span class="text-sm font-medium px-3"> {occupants.children}</span>
            <button
              onClick={() => handleOccupants("children", "increase")}
              class="text-lg border-2 rounded px-2  md:px-2 md:py-0 py-1 border-blue-800"
            >
              {" "}
              +{" "}
            </button>
          </p>
        </div>

        <div class="flex flex-row justify-between ">
          <p>Rooms</p>
          <p>
            <button
              disabled={occupants.rooms === 1}
              onClick={() => handleOccupants("rooms", "decrease")}
              class="text-center text-lg border-2 rounded px-2  md:px-2 md:py-0 py-1 border-blue-800"
            >
              {" "}
              -{" "}
            </button>
            <span class="text-sm font-medium px-3"> {occupants.rooms} </span>
            <button
              onClick={() => handleOccupants("rooms", "increase")}
              class="text-lg border-2 rounded px-2 md:px-2 md:py-0 py-1 border-blue-800"
            >
              {" "}
              +{" "}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingOccupantModal;
