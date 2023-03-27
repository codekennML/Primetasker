import React, { useState, useMemo } from "react";
import { RadioGroup } from "@headlessui/react";
import { useField } from "formik";
import { useCallback } from "react";
import { useEffect } from "react";

const CustomRadio = ({
  renderItem,
  name,
  options,
  label,
  style,
  buttonstyle,
}) => {
  const [field, meta, helpers] = useField(name);
  const [selected, setSelected] = useState(field.value || "");

  const { setValue } = helpers;

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <div className="w-full">
      <div className="mx-auto w-full ">
        <RadioGroup
          value={selected}
          onChange={(value) =>
            setSelected(field.value === value ? null : value)
          }
        >
          <RadioGroup.Label className="text-gray-500 font-medium mb-3 text-[13px]">
            {label ? label : ""}
          </RadioGroup.Label>
          <div className={`${style}`}>
            {options.map((option, idx) => (
              <RadioGroup.Option
                key={option.name}
                value={option.value}
                className="w-full"
              >
                {({ checked }) => {
                  return renderItem(
                    option.name,
                    idx,
                    option.icon,
                    option.value,
                    checked
                  );
                }}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default CustomRadio;
