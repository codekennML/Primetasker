import { FaDownload, FaFilter, FaGlobe, FaLayerGroup } from "react-icons/fa";
// const AgTable = React.lazy(() => import("../../../utils/AgTable"))
import DescCards from "../../../utils/DescCards";

const Bookings = () => {
  return (
    <div className="w-full max-w-screen-full mx-auto px-6 ">
      <section className=" h-16 ">
        <div className="flex flex-row space-x-1 items-center py-4 px-4">
          <p className="text-2xl bg-indigo-800 text-white p-1.5 rounded">
            <FaLayerGroup />
          </p>
          <h2 className="text-2xl text-indigo-800 font-bold">Bookings</h2>
        </div>
        <div>
          <DescCards Data={`Booking`} />
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-xl text-indigo-800">Bookings</h2>
        </div>
      </section>

      <div className="h-[490px] mt-[11.5rem] sticky bottom-0"></div>
      {/* <BookingsList /> */}
    </div>
  );
};

export default Bookings;
