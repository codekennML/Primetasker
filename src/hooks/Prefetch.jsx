import { store } from "../app/Store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { propertiesApiCalls } from "../features/properties/PropertySlice";
import { usersApiCalls } from "../features/users/slices/UserApiSlice";
import { categoryApiSlice } from "../features/categories/slices/categoryApiSlice";
import { IPinfoSlice } from "../features/geolocate/slices/geolocate";
import { useSelector } from "react-redux";
import { userLocaleInfo } from "../features/geolocate/slices/geolocateSlice";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");

    // store.dispatch(
    //   IPinfoSlice.util.prefetch("dispatchGetIP", "undefined", { force: true })
    // );
  }, []);

  const localeData = useSelector(userLocaleInfo);

  useEffect(() => {
    if (localeData?.coordinates) {
      localStorage.setItem("location", JSON.stringify(localeData));
    }
  }, [localeData]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Prefetch;
