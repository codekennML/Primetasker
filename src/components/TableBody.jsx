import {
  faArrowUp,
  faBathtub,
  faBed,
  faBuilding,
  faCheck,
  faFan,
  faGlassMartini,
  faHouse,
  faMugHot,
  faPeopleRoof,
  faSwimmingPool,
  faTv,
  faUser,
  faWater,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableData from "./TableData";
import { amenities } from "../constants/Amenities";

const TableBody = () => {
  return (
    <tbody class="text-[12px]">
      <tr>
        <td rowSpan={8} class="border-2 border-yellow-600 px-3 w-[320px] pb-16">
          <p class="text-lg text-blue-700 font-medium underline my-2">
            Superior Room
          </p>
          <p class="">
            <span>
              <FontAwesomeIcon icon={faArrowUp} />
            </span>{" "}
            High floor
          </p>

          <p class="">
            {" "}
            1 extra-large double bed{" "}
            <span>
              <FontAwesomeIcon icon={faBed} class="w-7 h-7" />{" "}
            </span>{" "}
          </p>
          <p class="my-3">
            {" "}
            This double room features a tile/marble floor, air conditioning and
            bathrobe.{" "}
          </p>

          <article class="  flex items-center flex-wrap space-y-2 gap-x-2 border-b border-gray-300 pb-6 ">
            <p class=" ">
              <FontAwesomeIcon icon={faHouse} class="pr-1" />
              <span>42sqm</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faWater} class="pr-1" />
              <span>Sea view</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faBuilding} class="pr-1" />
              <span>City view</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faSwimmingPool} class="pr-1" />
              <span>Pool with a view</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPeopleRoof} class="pr-1" />
              <span>Rooftop pool</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faFan} class="pr-1" />
              <span>Air conditioning</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faBathtub} class="pr-1" />
              <span>Private bathroom</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faTv} class="pr-1" />
              <span>Flat-screen TV</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faWifi} class="pr-1" />
              <span> Free Wifi</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faGlassMartini} class="pr-1" />
              <span>MiniBar</span>
            </p>
          </article>
          <article class="flex flex-wrap gap-x-2 gap-y-1 mt-3">
            {amenities.map((item) => (
              <p key={item.key} class="inline-flex items-center">
                <FontAwesomeIcon icon={faCheck} class="pr-1 text-green-600" />
                <span>{item.item}</span>
              </p>
            ))}
          </article>
        </td>
        <td rowSpan={1} class="border py-2.5 border-cyan-500 pl-2  ">
          {/* <FontAwesomeIcon icon = {faUser} class = 'w-3 h-3' />  */}
          <FontAwesomeIcon icon={faUser} class="w-3 h-3" />
        </td>
        <td
          rowSpan={1}
          class="border py-2.5 border-cyan-500 pl-2  text-gray-700"
        >
          <p class="font-bold text-base">NGN 484,500</p>
          <p class="text-[11px]">Includes taxes and charges</p>
        </td>
        <td rowSpan={1} class="border border-cyan-500  ">
          <ul class="pl-3 py-2.5 text-[11px] space-y-2">
            <li class="inline-flex items-center space-x-2 text-green-700 text-[11px]">
              <FontAwesomeIcon icon={faMugHot} />
              <p>
                {" "}
                <span class="font-bold">Breakfast &amp; Dinner</span> included
              </p>
            </li>
            <li class="text-black ">
              <p class="text-[11px] font-bold ">
                {" "}
                <span class="text-[12px] font-bold pr-2 ">•</span> Partially
                refundable
              </p>
            </li>
          </ul>
        </td>
        <td rowSpan={1} class="border pb-2.5 border-cyan-500 px-1.5">
          <select name="" id="" class=" w-[40px] border border-gray-500">
            <option value="">0</option>
            <option value="">1 (N484,400)</option>
          </select>
        </td>
      </tr>

      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
    </tbody>
  );
};

export default TableBody;
