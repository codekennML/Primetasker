import React, { useCallback, useEffect, useState } from "react";
import { useField } from "formik";
import poweredGoogle from "../../../assets/images/poweredGoogle.png";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

const mapAccessToken = "AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw";

const AutoCompleteMap = ({
  name,
  paddingHeight = "py-3 lg:py-3.5",
  placeType = ["(regions)"],
}) => {
  const [field, meta, { setValue }] = useField(name);
  const [selectedPlaceId, setSelectedPlaceId] = useState();
  const [showLocationDropdown, setShowLocationDropdown] = useState(true);

  const [userLocation, setUserLocation] = useState(field.value.place.name);

  console.log(field);

  const handleClick = useCallback(
    (addressInfo) => {
      // console.log(addressInfo);
      setSelectedPlaceId(addressInfo.place_id);
      setUserLocation(addressInfo.description);
    },
    [selectedPlaceId, userLocation]
  );

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: mapAccessToken,
    debounce: 1000,
  });

  // const [value, setValue] = useState("");

  useEffect(() => {
    if (selectedPlaceId) {
      placesService?.getDetails(
        {
          placeId: selectedPlaceId,
        },
        (placeDetails) => {
          const lat = placeDetails.geometry.location.lat();
          const lng = placeDetails.geometry.location.lng();
          const place = {
            name: placeDetails.name,
            placeId: placeDetails.place_id,
          };

          setValue({
            place: place,
            lat: lat,
            lng: lng,
          });

          setShowLocationDropdown(false);
        }
      );
    }
  }, [selectedPlaceId]);
  {
    console.log(field.value);
  }

  return (
    <div className="relative ">
      <input
        className={`bg-slate-100 ${paddingHeight} w-full rounded-md pl-3 text-primary `}
        placeholder="Enter Location"
        name={name}
        // defaultValue={userLocation}
        value={userLocation}
        onChange={(e) => {
          setUserLocation(e.target.value);
          getPlacePredictions({
            input: e.target.value ?? field.value.place.name,
            types: placeType,
            componentRestrictions: { country: "ng" },
          });
        }}
        loading={isPlacePredictionsLoading}
      />
      {placePredictions.length > 0 && showLocationDropdown && (
        <ul className="shadow-md rounded-md list-none space-y-1.5 max-h-[150px]  z-10 absolute  overflow-y-auto scrollbar-thin  overflow-x-hidden w-full bg-white mt-2 ">
          {placePredictions.map((addressInfo) => (
            <li
              key={addressInfo.place_id}
              onClick={() => handleClick(addressInfo)}
              className="w-full py-1.5 text-primary cursor-pointer border-b px-3 "
            >
              {addressInfo.description}
            </li>
          ))}
          <li className="py-1 pb-3 flex justify-end ">
            <img src={poweredGoogle} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteMap;
