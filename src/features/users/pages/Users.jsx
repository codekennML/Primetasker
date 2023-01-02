import React, { useEffect } from "react";

import { userTableHeaders } from "../utils/userTableHeaders";

import { useGetUsersQuery } from "../slices/UserApiSlice";

// import { useSelector } from "react-redux";

// import { pageInfo } from "../../pagination/paginate";
import BasicTable from "../../tables/BasicTable";
import { filterList, sortList } from "../utils/userTableFilterSort";

const usersList = () => {
  // const pageData = useSelector(pageInfo); //Info of incoming page

  return (
    <div>
      <BasicTable
        fetchTableData={useGetUsersQuery}
        headers={userTableHeaders}
        filterList={filterList}
        sortList={sortList}
        // pageData={pageData}
      />
    </div>
  );
};

export default usersList;
