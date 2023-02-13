import { faCheck, faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableData = () => {
  return (
    <tr>
      <td rowSpan={1} class="border py-2.5 border-cyan-500 pl-2  ">
        <FontAwesomeIcon icon={faUser} class="w-3 h-3" />
        <FontAwesomeIcon icon={faUser} class="w-3 h-3" />
      </td>
      <td rowSpan={1} class="border py-2.5 border-cyan-500 pl-2  text-gray-700">
        <p class="font-bold text-base">NGN 484,500</p>
        <p class="text-[11px]">Includes taxes and charges</p>
      </td>
      <td rowSpan={1} class="border border-cyan-500 ">
        <ul class="px-3 py-2.5 text-[11px] space-y-2">
          <li class="inline-flex items-center space-x-2 text-green-700 text-[11px]">
            <FontAwesomeIcon icon={faCheck} />
            <p> Free cancellation until 23:59 on 18 December 2022</p>
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
        <select name="" id="" class=" w-[40px] border border-gray-800">
          <option value="">0</option>
          <option value="">1 (N484,400)</option>
        </select>
      </td>
    </tr>
  );
};

export default TableData;
