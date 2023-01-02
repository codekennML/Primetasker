import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from 'react-redux'
// import useAuth from '../../hooks/useAuth'
import PropertyDataRow from "./PropertyDataRow";
import { useGetPropertiesQuery } from "./PropertySlice";

const PropertiesList = () => {
  let searchTableContent;

  const [search, setSearch] = useState("");

  const {
    data: properties,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPropertiesQuery("propertiesList", {
    pollingInterval: 5000,
    // refetchOnFocus: true,
    // refetchOnMountOrArgChange: true
  });

  // {console.log(searchTerm.length < 1);}

  // {console.log(properties)}

  // const { ids , entities} =  properties

  // const keys =  ['title']

  // const {username, isManager, isAdmin } =  useAuth()

  const handleSearchInput = (e) => setSearch(e.target.value);

  let content;
  if (isLoading) content = <p>Loading</p>;

  if (isError) content = <p>{error?.data?.message}</p>;

  if (isSuccess) {
    const { ids, entities } = properties;

    // fields.some(key => key.includes(search)))
    // { console.log(fields.some(key => key.includes(search))) }

    const searchedIds = ids.filter((propertyId) => {
      return (
        entities[propertyId].body.includes(search) ||
        entities[propertyId].title.includes(search) ||
        entities[propertyId].id === Number(search)
      );
    });

    if (searchedIds.length === 0) {
      searchTableContent = <h2>No Properties Found</h2>;
    } else {
      searchTableContent = searchedIds.map((propertyId) => (
        <PropertyDataRow key={propertyId} propertyId={propertyId} />
      ));
    }

    content = (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>{searchTableContent}</tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row space-x-8 my-16">
        <Link
          to="/dashboard/properties/create"
          className="bg-blue-600 text-white rounded-lg px-3 py-2 mr-6"
        >
          Add New Property
        </Link>

        <input
          type="text"
          placeholder="Search Properties"
          className="border outline-none focus:ring-1 focus:text-sm px-4 py-2 rounded-lg"
          onChange={handleSearchInput}
          value={search}
        />
      </div>

      {content}
    </>
  );
};

export default PropertiesList;
