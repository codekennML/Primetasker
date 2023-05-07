import React from "react";
import Select from "../../../../utils/CustomSelect";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import { Formik, Form } from "formik";

const options = [
  "Today",
  "Last Week",
  "Last Month",
  "Last Quarter",
  "This Year",
];

const RecentDeposits = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="flex flex-col justify-center h-full w-full">
      <div className="w-full  mx-auto bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 shadow-md rounded-lg border border-gray-200">
        <header className="px-5 py-2 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-purple-700 dark:text-purple-400">
            Recent Deposits
          </h2>
          {/* <Formik initialValues={{ tasker: selected }}>
            {() => {
              return (
                <Form>
                  <div className="relative ">
                    <Select
                      name="tasker"
                      selected={selected}
                      setSelected={setSelected}
                      items={options}
                      width={`w-full`}
                      style={`py-2 text-[16px] bg-gray-50`}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik> */}
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold  text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Date</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>

                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Channel</div>
                  </th>

                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Amount</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">To</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Status</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="p-1 whitespace-nowrap">
                    <div className="text-left text-xs font-semibold">
                      22/12/2024
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width="40"
                          height="40"
                          alt="Alex Shatov"
                        />
                      </div>
                      <div className="font-medium text-gray-800">
                        Alex Shatov
                      </div>
                    </div>
                  </td>

                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">Flutterwave</div>
                  </td>

                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                      $500,000
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">GTBank</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">
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

export default RecentDeposits;
