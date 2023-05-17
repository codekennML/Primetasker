import { Fragment, useCallback, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { useField } from "formik";

export default function AutoCompleteCombobox({
  name,
  categories,
  paddingHeight = "py-3 lg:py-5",
}) {
  //   console.log(categories);

  const [field, meta, helpers] = useField(name);

  const errorStyle = "outline-red-500";
  const invalid = meta.touched && meta.error;

  const { setValue } = helpers;

  const [selected, setSelected] = useState(
    field.value ? categories[field.value - 1] : categories[0]
  );
  // console.log(categories);
  // console.log(field.value);
  const [query, setQuery] = useState("");

  const filteredCategory =
    query === ""
      ? categories
      : categories.filter((category) =>
          category.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // onChange={setSelected}

  const handleChange = useCallback(
    (value) => {
      setValue(value?.value);

      setSelected(value);
    },
    [selected]
  );

  return (
    <Combobox
      value={selected}
      name={name}
      onChange={(value) => handleChange(value)}
    >
      <div className={`  relative mt-1  `}>
        <div className={`relative w-full   text-brand-text font-semibold  `}>
          <Combobox.Input
            className={` w-full bg-slate-100   ${
              paddingHeight ? paddingHeight : ""
            } pl-3 pr-10 text-sm leading-5 text-gray-900 rounded-lg   ${
              invalid ? errorStyle : "focus:outline-green-600"
            } `}
            displayValue={(category) => category.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <FaChevronCircleDown className="h-5 w-5 text-green-500" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg rounded-lg focus:outline-none sm:text-sm z-10 oveflow-y-scroll ">
            {filteredCategory.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700 font-medium">
                No matching categories.
              </div>
            ) : (
              filteredCategory.map((category) => (
                <Combobox.Option
                  key={category.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  fomt-medium ${
                      active ? "bg-brand-light text-white" : "text-gray-900"
                    }`
                  }
                  value={category}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {category.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-green-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
    // </div>
  );
}
