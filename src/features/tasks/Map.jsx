import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarked } from "react-icons/fa";

const accessToken =
  "pk.eyJ1IjoiY29kZWtlbm5tbCIsImEiOiJjbGRlcmFobjUwZ2M2M3BxcGhvbDBjMDR4In0.CdscqXOFjzxvwScgwy6Ysw";

const MapContainer = ({ tasks, coordinates }) => {
  const currentRef = useRef(null);
  const zoom = 13.2;

  const [popupId, setPopupId] = useState(null);
  // const [showPopup, setShowPopup] = useState(true);

  const [coords, setCoords] = useState({
    longitude: 3.38282,
    latitude: 6.52825,
    zoom: zoom,
  });

  useEffect(() => {
    if (coordinates && currentRef?.current) {
      currentRef.current.flyTo({
        center: [Number(coordinates.lng), Number(coordinates.lat)],
        duration: 3000,
        zoom: 14,
      });
    }
  }, [coordinates]);

  const PostLocations = [
    {
      id: 1,
      lat: 6.45,
      lng: 3.64,
      text: "dolor sit amet consectetur adipisicing elit. Voluptate, quas odit?",
    },
    {
      id: 2,
      lat: 6.45,
      lng: 3.44,
      text: "Excepturi atque aspernatur corrupti temporibus, repellendus ",
    },
    {
      id: 3,
      lat: 6.45,
      lng: 3.544,
      text: "Officia delectus inventore porro corporis, neque minima commodi. ",
    },
    {
      id: 4,
      lat: 6.45,
      lng: 3.34,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum ",
    },
  ];

  const handleMove = useCallback(
    (popupId) => {
      console.log(popupId);
      currentRef?.current
        ? currentRef.current.flyTo({
            center: [Number(popupId?.lng), Number(popupId?.lat)],
            duration: 1000,
            zoom: 14,
          })
        : null;
    },
    [popupId]
  );

  // const [selectedMarker, setSelectedMarker] = useState(null);

  const markersToRender = useMemo(
    () =>
      PostLocations.map((task) => {
        return (
          <React.Fragment key={task.id}>
            <Marker
              longitude={task.lng}
              latitude={task.lat}
              anchor="bottom"
              color="#000"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setPopupId(task);
              }}
            />

            {popupId && (
              <div className="w-[300px] overflow-hidden rounded-2xl">
                <p>Red Califf</p>
                <Popup
                  anchor="bottom"
                  longitude={Number(popupId.lng)}
                  latitude={Number(popupId.lat)}
                  onClose={() => setPopupId(null)}
                  offsetBottom="40"
                  closeButton={false}
                  onOpen={() => handleMove(popupId)}
                  className="max-w-[400px] rounded-3xl"
                  // style={{ width: "100%" }}
                  maxWidth="20vw"
                >
                  {
                    <article className=" rounded-lg bg-white py-2  text-[.87rem] font-medium text-gray-500]">
                      <div className="flex  items-center gap-x-2 ">
                        <div className=" max-w-full ">
                          <img
                            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="rounded-full h-[80px] w-[80px] object-cover object-center "
                          />
                        </div>

                        <div className="bg-brand-secondary/70 flex-1  h-[80px] rounded-md flex flex-col  justify-center items-center gap-y-1">
                          <p className="font-semibold uppercase text-brand-text/60 font-inter text-[.7rem]">
                            Budget
                          </p>
                          <p className="text-[1.3rem] text-brand-accent font-bold ">
                            N900000
                          </p>
                        </div>
                      </div>
                      <h2 className="text-primary text-[.87rem] text-left whitespace-normal pt-3 text-gray-700">
                        {" "}
                        {popupId.text}
                      </h2>
                      <p className="text-[.8rem] font-semibold text-gray-500 mt-2">
                        Due in 2 months
                      </p>
                      <p className="text-[.75rem] font-semibold text-gray-500">
                        Posted by{" "}
                        <span className="text-brand-accent underline">
                          Joanne Jules
                        </span>{" "}
                        about 30 mins ago
                      </p>
                      <button className="bg-brand-light w-full text-primary py-2 text-white rounded-md mt-4 ">
                        Go to Task
                      </button>
                    </article>
                  }
                </Popup>
              </div>
            )}
          </React.Fragment>
        );
      }),
    [PostLocations, popupId]
  );

  return (
    <div className="h-screen w-full">
      <Map
        ref={currentRef}
        reuseMaps
        mapboxAccessToken={accessToken}
        initialViewState={coords}
        style={{ width: "100%", height: "90%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {markersToRender}
      </Map>
    </div>
  );
};

export default MapContainer;
