import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const HeadlessRadio = ({ plans, label }) => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full pb-2 py-2">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="text-gray-500 font-medium mb-3 text-[15px]">
            {label ? label : ""}
          </RadioGroup.Label>
          <div className="flex flex-col mt-2 items-center w-full rounded-lg border ">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${active ? " " : ""}
                ${checked ? "bg-purple-700  text-white" : "bg-white"}
                  w-full relative flex cursor-pointer  px-5  focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className=" w-full flex  items-center justify-between">
                      <div className="  items-center">
                        <div className="text-xs  py-3 ">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium text-[15px] ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline w-full ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span className="w-full text-[20px]"></span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
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
export default HeadlessRadio;
