import { userTableHeaders } from "../utils/userTableHeaders";

import { useGetUsersQuery } from "../slices/UserApiSlice";

import TableUtilities from "../../tables/TableUtilities";
import { filterList, sortList } from "../utils/userTableFilterSort";

const usersList = () => {
  return (
    <div className="">
      <TableUtilities
        fetchData={useGetUsersQuery}
        headers={userTableHeaders}
        filterList={filterList}
        sortList={sortList}
        tableTitle={`All Users`}
        searchTitle={`Search all users`}
      />
    </div>
  );
};

export default usersList;
