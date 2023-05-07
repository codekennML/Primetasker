import { useState, useEffect, useCallback, useMemo } from "react";
import { Switch } from "@headlessui/react";
import { useField } from "formik";

const PrimeToggle = ({ name, setFieldValue }) => {
  const [field, meta, helpers] = useField(name);
  const [enabled, setEnabled] = useState(field.value);

  const toggleValue = (value) => {
    setEnabled(value);
    helpers.setValue(value);
  };

  return (
    <Switch
      checked={field.value}
      onChange={toggleValue}
      className={`${
        enabled ? "bg-brand-light" : "bg-gray-200"
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
