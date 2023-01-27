import Select from "../../../../utils/CustomSelect";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";

const options = [
  "Today",
  "Last Week",
  "Last Month",
  "Last Quarter",
  "This Year",
];

const RecentWithdrawals = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div class="flex flex-col justify-center h-full w-1/2">
      <div class="w-full  mx-auto bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 shadow-md rounded-lg border border-gray-200">
        <header class="px-5 py-2 border-b border-gray-100 flex justify-between items-center">
          <h2 class="font-semibold text-purple-700 dark:text-purple-400">
            Recent Withdrawals
          </h2>
          <div className="relative ">
            <Select
              selected={selected}
              setSelected={setSelected}
              items={options}
            />
          </div>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold  text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Date</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>

                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Channel</div>
                  </th>

                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Amount</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">To</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Status</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-xs divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td class="p-1 whitespace-nowrap">
                    <div class="text-left text-xs font-semibold">
                      22/12/2024
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width="40"
                          height="40"
                          alt="Alex Shatov"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Alex Shatov</div>
                    </div>
                  </td>

                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">Flutterwave</div>
                  </td>

                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $500,000
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">GTBank</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">
                      <p className="flex items-center text-xs space-x-2">
                        <span className="block text-red-500  text-center pl-3">
                          <FaExclamationCircle />
                        </span>
                        <span className="block text-red-500">Failed</span>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWithdrawals;
