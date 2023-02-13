import { useField } from "formik";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { memo } from "react";
import { HiChevronUpDown } from "react-icons/hi2";

const CustomSelect = ({
  label,
  labelstyle,
  selectstyle,
  name,
  selectArray,
  onChange,

  imgBfr,
  imgAfter,
}) => {
  const [selected] = useState(selectArray[0]);
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const errorStyle = " border-red-600";
  const validStyle = "border-gray-400 ";
  const invalid = meta.touched && meta.error;

  return (
    <>
      {label ? (
        <label
          htmlFor={label}
          className={`${
            labelstyle ? labelstyle : ""
          } block my-2 text-[12px] font-medium text-gray-600 dark:text-white`}
        >
          {label}
        </label>
      ) : (
        ""
      )}
      <Listbox
        name={name}
        onChange={onChange ? onChange : (selected) => setValue(selected)}
        onBlur={(e) => handleBlur(e)}
      >
        {({ open }) => (
          <>
            <div
              className={`relative dark:bg-gray-700 border-gray-400 dark:border-gray-600  rounded-lg text-gray-500 ${selectstyle} `}
            >
              <Listbox.Button className=" w-full flex space-x-1.5 h-full items-center py-2 px-6  justify-center cursor-pointer  text-xs font-medium text-center relative   focus:outline-none  sm:text-sm  dark:bg-gray-700 dark:text-gray-100 text-gray-600">
                {imgBfr ? <span className="inline-block"> {imgBfr} </span> : ""}

                <span className="text-[13px] w-full inline-block ">
                  {field.value ? field.value : selected.name}
                </span>
                {imgBfr ? (
                  ""
                ) : (
                  <span>
                    <HiChevronUpDown className="w-5 h-5 text-gray-600 dark:text-gray-200 " />
                  </span>
                )}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" dark:bg-gray-700 dark:text-gray-400   py-2  border-none focus:outline-none  text-[20px] text-indigo-800 font-medium absolute z-10 w-full overflow-auto rounded-md bg-white  text-sm shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                  {selectArray.map((item, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={item.value}
                      className={({ active }) =>
                        `relative cursor-pointer dark:bg-gray-700 dark:text-gray-400 select-none py-2 px-6 ${
                          active
                            ? "bg-violet-100 text-blue-900 "
                            : "text-gray-900 dark:text-gray-400"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item.name}
                          </span>
                          {selected ? (
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
