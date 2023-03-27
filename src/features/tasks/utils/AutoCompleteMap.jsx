import React, { useEffect, useState } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useField } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";

// const key = "AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw";

const AutoCompleteMap = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  console.log(field, name);
  const [query, setQuery] = useState();
  const [selectedLocation, setSelectedLocation] = useState({});

  const { setValue } = helpers;

  const onPlaceSelected = () => {
    let places = query.getPlaces();
    console.log(places);
    setSelectedLocation({
      place: places[0].name,
      lng: places[0].geometry.location.lng(),
      lat: places[0].geometry.location.lat(),
    });
  };

  useEffect(() => {
    setValue(selectedLocation);
  }, [selectedLocation]);
  //Restrict to Nigeria
  const options = {
    componentRestrictions: { country: "ng" },
  };

  const onLoad = (ref) => setQuery(ref);

  return (
    <>
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={onPlaceSelected}
        options={options}
      >
        <>
          <label htmlFor="location" className="sr-only">
            GPS
          </label>
          <input
            type="text"
            value={field.value?.place}
            placeholder="Enter Location"
            className="py-4 my-2  rounded-lg border-2 border-violet-500 placeholder:text-[14px] placeholder:text-gray-500 focus:outline-violet-500 text-base text-gray-400 bg-gray-50 indent-2 w-full "
          />
        </>
      </StandaloneSearchBox>
    </>
  );
};

export default AutoCompleteMap;
