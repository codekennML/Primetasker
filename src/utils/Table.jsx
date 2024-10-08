import { FaDotCircle } from "react-icons/fa";

const Table = () => {
  return (
    <table class="w-full text-[14px] font-[500] text-gray-700/70 mt-6">
      <tr class="text-[15px] text-left border-b-2 bg-gray-50 text-indigo-900/80 ">
        <th>Transaction ID</th>
        <th>Date</th>
        <th>Payer UserTag</th>
        <th>Purpose</th>
        <th>Amount</th>
        {/* <th></th> */}
        <th>Status</th>
        <th>Payment Method</th>
      </tr>

      <tr class=" py-3 ">
        <td class="font-bold text-[16px]">#fec942</td>
        <td>20 Dec 2022 09:55</td>
        <td>
          <div class="flex flex-row items-center space-x-1">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="w-[30px] h-[30px] rounded-full"
            />
            <p class="text-clip">Omar Egbodaghete</p>
          </div>
        </td>
        <td>Booking Charge</td>
        <td>40,000</td>
        <td>
          <span class="bg-green-200/70 px-3 py-1 rounded-full inline-flex items-center text-green-700  text-[12px]">
            Success
          </span>
        </td>
        <td>MasterCard/Visa</td>
      </tr>

      <tr class=" py-3 ">
        <td class="font-bold text-[16px]">#fec942</td>
        <td>20 Dec 2022 09:55</td>
        <td>
          <div class="flex flex-row items-center space-x-1">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="w-[30px] h-[30px] rounded-full"
            />
            <p class="text-clip">@Omalicha</p>
          </div>
        </td>
        <td>Account top-up</td>
        <td>40,000</td>
        <td>
          <span class="bg-rose-200/70 px-3 py-1 rounded-full inline-flex items-center text-rose-700  text-[12px]">
            Failed
          </span>
        </td>
        <td>MasterCard/Visa</td>
      </tr>

      <tr class=" py-3 ">
        <td class="font-bold text-[16px]">#fec942</td>
        <td>20 Dec 2022 09:55</td>
        <td>
          <div class="flex flex-row items-center space-x-1">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="w-[30px] h-[30px] rounded-full"
            />
            <p class="text-clip">@codekenn</p>
          </div>
        </td>
        <td>Upgrade Account</td>
        <td>100,000</td>
        <td>
          <span class="bg-yellow-200/70 px-3 py-1 rounded-full inline-flex items-center text-yellow-800  text-[12px]">
            Processing
          </span>
        </td>
        <td>MasterCard/Visa</td>
      </tr>

      <tr class=" py-3 ">
        <td class="font-bold text-[16px]">#fec942</td>
        <td>20 Dec 2022 09:55</td>
        <td>
          <div class="flex flex-row items-center space-x-1">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="w-[30px] h-[30px] rounded-full"
            />
            <p class="text-clip">@codekenn</p>
          </div>
        </td>
        <td>Upgrade Account</td>
        <td>100,000</td>
        <td>
          <span class="bg-gray-200/70 px-3 py-1 rounded-full inline-flex items-center text-gray-800  text-[12px]">
            Cancelled
          </span>
        </td>
        <td>Pay on Delivery</td>
      </tr>
      <tr class=" py-3 ">
        <td class="font-bold text-[16px]">#fec942</td>
        <td>20 Dec 2022 09:55</td>
        <td>
          <div class="flex flex-row items-center space-x-1">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="w-[30px] h-[30px] rounded-full"
            />
            <p class="text-clip">@codekenn</p>
          </div>
        </td>
        <td>Upgrade Account</td>
        <td>100,000</td>
        <td>
          <span class="bg-gray-200/70 px-3 py-1 rounded-full inline-flex items-center text-gray-800  text-[12px]">
            Cancelled
          </span>
        </td>
        <td>Pay on Delivery</td>
      </tr>
      <tr class=" py-3 ">
        <td class="font-bold text-[16px]">#fec942</td>
        <td>20 Dec 2022 09:55</td>
        <td>
          <div class="flex flex-row items-center space-x-1">
            <img
              src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="w-[30px] h-[30px] rounded-full"
            />
            <p class="text-clip">@codekenn</p>
          </div>
        </td>
        <td>Upgrade Account</td>
        <td>100,000</td>
        <td>
          <span class="bg-gray-200/70 px-3 py-1 rounded-full inline-flex items-center text-gray-800  text-[12px]">
            Cancelled
          </span>
        </td>
        <td>Pay on Delivery</td>
      </tr>

      <tfoot>
        <tr>
          <td colSpan={7}>
            <div class="float-right">
              <p>pagination</p>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
