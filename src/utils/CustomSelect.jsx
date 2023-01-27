import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheckBadge, HiChevronUpDown } from "react-icons/hi2";

// const items = [
//   { name: "This week" },
//   { name: "Last Week" },
//   { name: "Last Month" },
//   { name: "Last Year" },
// ];

export default function Select({ items, selected, setSelected, width, style }) {
  // const [selected, setSelected] = useState(items[0]);
  // console.log(items);

  return (
    <div className={`${width ? width : "w-40"} top-16 `}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button
            className={`${
              style ? style : "py-2"
            } relative w-full cursor-pointer rounded-lg bg-white border-gray-400/30 dark:bg-gray-700 dark:text-gray-400  text-gray-500 text-xs  pl-3 pr-10 text-left border  dark:border-gray-700 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
          >
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 dark:text-gray-400 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-purple-100 text-gray-900"
                        : "text-gray-900 dark:text-gray-400 cursor-pointer"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                          <HiCheckBadge
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
