import { useField } from "formik";
import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export const Range = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const [range, setRange] = useState(field.value);

  const { setValue } = helpers;

  useEffect(() => {
    setValue(range);
  }, [range]);

  return (
    <RangeSlider
      id="range-slider-yellow"
      min={5000}
      max={1000000}
      value={range}
      step={15000}
      onInput={setRange}
    />
  );
};

export const SingleRange = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const [range, setRange] = useState(field.value);

  const { setValue } = helpers;

  useEffect(() => {
    console.log(range);
    setValue(range);
  }, [range]);

  console.log(field);
  return (
    <RangeSlider
      className="single-thumb"
      min={10}
      max={100}
      defaultValue={range}
      thumbsDisabled={[true, false]}
      rangeSlideDisabled={true}
      // className="single-thumb"
      onInput={setRange}
      step={10}
      // defaultValue={[0, 50]}
    />
  );
};
