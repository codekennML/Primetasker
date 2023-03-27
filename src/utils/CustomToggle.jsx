import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useField } from "formik";

const PrimeToggle = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const [enabled, setEnabled] = useState(field.value);
  console.log(helpers);
  const { setValue } = helpers;

  useEffect(() => {
    setValue(enabled);
  }, [enabled]);

  console.log(field.value);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-purple-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable {name}</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default PrimeToggle;
