import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import Naira from "../../../assets/svgs/Naira";
import { mapStyles } from "./utils/map";

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [map, setMap] = useState(null);

  const handleActiveMarker = (marker) => {
    setActiveMarker(marker);
  };

  const markers = [
    { id: 1, name: "Surulere", position: { lat: 6.502829, lng: 3.342496 } },
    { id: 2, name: "Lekki", position: { lat: 6.439059, lng: 3.452626 } },
    {
      id: 3,
      name: "Shomolu",
      position: { lat: 6.569497, lng: 3.306689 }, // Shomolu
    },
    {
      id: 4,
      name: "Victoria Island",
      position: { lat: 6.446162, lng: 3.420082 },
    },
    { id: 5, name: "Gbagada", position: { lat: 6.592861, lng: 3.383738 } },
  ];

  const [lng, setLng] = useState(3.3486);
  const [lat, setLat] = useState(6.4983);
  const center = { lat: lat, lng: lng };
  //AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw
  //AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw"

  // if (!isLoaded) return <div>Loading....</div>;
  // if (loadError) return <div>Failed....</div>;

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds(center);
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    setMap(map);
  };

  const onUnmount = (map) => {
    setMap(null);
  };
  // fillColor: "#EB00FF",
  // scale: 7,
  // "https://cdn.mindbowser.com/custom_marker_pin.svg"

  // "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  let content;

  // if (isLoaded)
  content = (
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      // onLoad={handleOnLoad}
      // onUnmount={onUnmount}
      heading={90}
      zoom={12}
      center={center}
      mapContainerClassName="w-full h-full"
      options={{ mapTypeControl: false }}
    >
      {markers.map((marker, index) => (
        <MarkerF
          key={marker.id}
          onClick={() => handleActiveMarker(marker.id)}
          position={marker.position}
          icon={{
            url: "https://res.cloudinary.com/dpmj4sjm9/image/upload/v1674924973/location_s6nvuo.png",
          }}
        >
          {activeMarker === marker.id ? (
            <InfoWindowF>
              <div className="w-[300px]   px-2 py-3 space-y-4">
                <p className="text-gray-900/90 font-medium text-[15px] text-left pb-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores
                </p>
                <div className="flex flex-row justify-between items-center pb-3 ">
                  <article className="font-medium w-1/2 text-gray-500">
                    <div className="flex items-center mb-2 space-x-2">
                      <img
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      />
                      <div>
                        <p className="py-2 text-gray-600 ">Posted By</p>
                        <p className=" text-purple-600 ">Jajamike K.</p>
                      </div>
                    </div>

                    <p className="font-medium text-gray-500 text-[12px]">
                      Due on Monday 24 Jan{" "}
                    </p>
                    <p className="font-medium text-gray-500 text-[12px] py-2">
                      Posted about 1hr ago{" "}
                    </p>
                  </article>
                  <article className="w-1/2">
                    <div className="flex items-center justify-center text-[30px] bg-blue-100/30 py-8 px-2 -space-x-1  rounded-lg  ml-6  text-purple-800 font-semibold ">
                      <p>
                        <Naira style={`w-10 h-10 font-medium`} />
                      </p>
                      <p>50k </p>
                    </div>
                  </article>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => {
                      //   displayBrief(true);
                      setActiveMarker(null);
                    }}
                    className="w-full py-3  rounded-full bg-purple-700 text-white text-[14px] font-medium "
                  >
                    View Task
                  </button>
                </div>
              </div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );

  return content;
};

export default React.memo(Map);
