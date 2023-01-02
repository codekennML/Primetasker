import { useField } from "formik";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { memo } from "react";
const CustomSelect = ({ label, value, selectArray, onChange, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const errorStyle = " border-red-600";
  const validStyle = "border-gray-400 ";
  const invalid = meta.touched && meta.error;
  // console.log(field, meta);
  console.log(value);
  return (
    <>
      {/* <label
        htmlFor={props.name}
        className="block mb-2 text-[12px] font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label> */}

      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative w-56">
              <Listbox.Button className="w-full  text-xs font-medium text-center relative  cursor-default  py-2 pl-3 pr-10 shadow-sm focus:outline-none  sm:text-sm">
                {value ? value : selectArray[0].name}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="  py-2  border-none focus:outline-none  text-[20px] text-indigo-800 font-medium absolute z-10 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                  {selectArray.map((item, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={item.value}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-violet-100 text-blue-900"
                            : "text-gray-900"
                        }`
                      }
                    >
                      {({ value }) => (
                        <>
                          <span
                            className={`block truncate ${
                              value ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item.name}
                          </span>
                          {value ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
                              <AiOutlineCheckCircle
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                      {item.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {invalid && (
        <div className="text-red-600 text-xs mt-1"> {meta.error}</div>
      )}
    </>
  );
};

const memoizedSelect = memo(CustomSelect);
export default memoizedSelect;
