import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAutomobile,
  faBars,
  faBed,
  faGear,
  faPlane,
  faPlaneCircleCheck,
  faTaxi,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const RentalOptions = () => {
  return (
    <section
      class="flex flex-row items-center bg-black text-white  pb-6 px-4 lg:px-48
    whitespace-nowrap"
    >
      <div class="w-[600px] overflow-scroll scrollbar-hide space-x-5">
        <a
          href=""
          class="inline-flex items-center border rounded-full px-3  py-2"
        >
          <FontAwesomeIcon icon={faBed} class="pr-2 text-[12px]" />
          <span class="font-medium text-[13px]">Stay</span>
        </a>
        <a href="" class="inline-flex items-center   ">
          <FontAwesomeIcon icon={faPlaneCircleCheck} class="pr-2 text-[12px]" />
          <span class="font-medium text-[13px]">Flights</span>
        </a>
        <a href="" class="inline-flex items-center   ">
          <FontAwesomeIcon icon={faAutomobile} class="pr-2 text-[12px]" />
          <span class="font-medium text-[13px] ">Car rentals</span>
        </a>
        <a href="" class="inline-flex items-center ">
          <FontAwesomeIcon icon={faGear} class="pr-2 text-[12px]" />
          <span class="font-medium text-[13px] ">Attractions</span>
        </a>
        <a href="" class="inline-flex items-center hover:  ">
          <FontAwesomeIcon icon={faTaxi} class="pr-2 text-[12px]" />
          <span class="font-medium text-[13px]">Airport taxis</span>
        </a>
      </div>
    </section>
  );
};

export default RentalOptions;
