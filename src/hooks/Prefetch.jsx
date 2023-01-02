import { store } from "../app/Store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { propertiesApiCalls } from "../features/properties/PropertySlice";
import { usersApiCalls } from "../features/users/slices/UserApiSlice";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");

    // store.dispatch(usersApiCalls.util.prefetch('getUsers', 'usersList', { force: true }))
    // store.dispatch(propertiesApiCalls.util.prefetch('getProperties', 'propertiesList', { force: true }))
    // store.dispatch(propertiesApiCalls.util.prefetch('getPaginatedProperties', 'PaginatedPropertiesList', { force: true }))
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Prefetch;
